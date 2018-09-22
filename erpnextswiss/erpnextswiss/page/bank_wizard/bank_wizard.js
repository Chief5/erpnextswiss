frappe.pages['bank_wizard'].on_page_load = function(wrapper) {
    var page = frappe.ui.make_app_page({
        parent: wrapper,
        title: __('Bank Wizard'),
        single_column: true
    });

    frappe.bank_wizard.make(page);
    frappe.bank_wizard.run();
    
    // add the application reference
    frappe.breadcrumbs.add("ERPNextSwiss");
}

frappe.bank_wizard = {
    start: 0,
    make: function(page) {
        var me = frappe.bank_wizard;
        me.page = page;
        me.body = $('<div></div>').appendTo(me.page.main);
        var data = "";
        $(frappe.render_template('bank_wizard', data)).appendTo(me.body);
        
        // attach button handlers
        this.page.main.find(".btn-parse-file").on('click', function() {
            var me = frappe.bankimport;
            
            // get selected account
            var account = document.getElementById("bank_account").value;
            
            // read the file 
            var file = document.getElementById("input_file").files[0];
            var content = "";
            if (file) {
                // create a new reader instance
                var reader = new FileReader();
                // assign load event to process the file
                reader.onload = function (event) {
                    // enable waiting gif
                    frappe.bank_wizard.start_wait();
                    
                    // read file content
                    content = event.target.result;
                    

                    // call bankimport method with file content
                    frappe.call({
                        method: 'erpnextswiss.erpnextswiss.page.bank_wizard.bank_wizard.read_camt053',
                        args: {
                            content: content,
                            account: account
                        },
                        callback: function(r) {
                            if (r.message) {
                                frappe.bank_wizard.render_response(page, r.message);
                            } 
                        }
                    });
                }
                // assign an error handler event
                reader.onerror = function (event) {
                    frappe.msgprint(__("Error reading file"), __("Error"));
                }
                
                reader.readAsText(file, "ANSI");
            }
            else
            {
                frappe.msgprint(__("Please select a file."), __("Information"));
            }
            

        });
    },
    run: function() {
        // populate bank accounts
        frappe.call({
            method: 'erpnextswiss.erpnextswiss.page.bank_wizard.bank_wizard.get_bank_accounts',
            args: { },
            callback: function(r) {
                if (r.message) {
                    var select = document.getElementById("bank_account");
                    for (var i = 0; i < r.message.accounts.length; i++) {
                        var opt = document.createElement("option");
                        opt.value = r.message.accounts[i];
                        opt.innerHTML = r.message.accounts[i];
                        select.appendChild(opt);
                    }
                } 
            }
        }); 
    },
    start_wait: function() {
        //document.getElementById("waitingScreen").style.display = "block";
    },
    end_wait: function() {
        document.getElementById("waitingScreen").style.display = "none";
    },
    render_response: function(page, message) {
        // disable waiting gif
        frappe.bank_wizard.end_wait();
    
	var container = document.getElementById("table_placeholder");
	var content = frappe.render_template('transaction_table', message);
	container.innerHTML = content;
    
        //frappe.msgprint(__(message.message));
	// attach button handlers
        this.page.main.find(".btn-close-intermediary-0").on('click', function() {
	    frappe.bank_wizard.receive_to_intermediate(100, "2018-09-22", 'ZKB - LC', 'ZKB - LC', "123456");
	}); 
    },
    receive_to_intermediate: function(amount, date, paid_from, paid_to, reference) {
	console.log("receive to intermediate...");
	frappe.call({
	    method: "erpnextswiss.erpnextswiss.page.bank_wizard.bank_wizard.make_payment_entry",
	    args:{
		'amount': amount,
		'date': date,
		'paid_from': paid_from,
		'paid_to': paid_to,
		'reference_no': reference,
		'type': "Internal Transfer"
	    },
	    callback: function(r)
	    {
		// frappe.set_route("Form", "Payment Entry", r.message)
		window.open('/desk#Form/Payment Entry/' + r.message, '_blank');
	    }
	});	
    }
}