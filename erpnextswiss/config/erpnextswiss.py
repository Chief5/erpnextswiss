from __future__ import unicode_literals
from frappe import _

def get_data():
    return[
        {
            "label": _("Banking"),
            "icon": "fa fa-money",
            "items": [
                   {
                       "type": "page",
                       "name": "bankimport",
                       "label": _("Bank import"),
                       "description": _("Bank import")
                   },
                   {
                       "type": "page",
                       "name": "match_payments",
                       "label": _("Match payments"),
                       "description": _("Match payments")
                   },
                   {
                       "type": "page",
                       "name": "payment_export",
                       "label": _("Payment export"),
                       "description": _("Payment export")
                   },
                   {
                       "type": "doctype",
                       "name": "Payment Reminder",
                       "label": _("Payment Reminder"),
                       "description": _("Payment Reminder")
                   },
                   {
                       "type": "doctype",
                       "name": "Direct Debit Proposal",
                       "label": _("Direct Debit Proposal"),
                       "description": _("Direct Debit Proposal")
                   },
                   {
                       "type": "doctype",
                       "name": "Payment Proposal",
                       "label": _("Payment Proposal"),
                       "description": _("Payment Proposal")
                   },
                   {
                       "type": "page",
                       "name": "bank_wizard",
                       "label": _("Bank Wizard"),
                       "description": _("Bank Wizard")
                   }
            ]
        },
        {
            "label": _("Taxes"),
            "icon": "fa fa-bank",
            "items": [
                   {
                       "type": "doctype",
                       "name": "VAT Declaration",
                       "label": _("VAT Declaration"),
                       "description": _("VAT Declaration")
                   }
            ]
        },
        {
            "label": _("Human Resources"),
            "icon": "fa fa-users",
            "items": [
                   {
                       "type": "page",
                       "name": "hr_control_board",
                       "label": _("HR Control Board"),
                       "description": _("HR Control Board")
                   },
				   {
                       "type": "doctype",
                       "name": "Salary Certificate",
                       "label": _("Salary Certificate"),
                       "description": _("Salary Certificate")
                   },
				   {
                       "type": "doctype",
                       "name": "HR Default Settings",
                       "label": _("HR Default Settings"),
                       "description": _("HR Default Settings")
                   }
            ]
        },
        {
            "label": _("Contracts"),
            "icon": "octicon octicon-file-submodule",
            "items": [
                   {
                       "type": "doctype",
                       "name": "Contract",
                       "label": _("Contract"),
                       "description": _("Contract")                   
                   }                   
            ]
        },
        {
            "label": _("Configuration"),
            "icon": "fa fa-bank",
            "items": [
                   {
                       "type": "doctype",
                       "name": "Label Printer",
                       "label": _("Label Printer"),
                       "description": _("Label Printer")                   
                   },
                   {
                       "type": "doctype",
                       "name": "Pincode",
                       "label": _("Pincode"),
                       "description": _("Pincode")                   
                   },
                   {
                       "type": "doctype",
                       "name": "ERPNextSwiss Settings",
                       "label": _("ERPNextSwiss Settings"),
                       "description": _("ERPNextSwiss Settings")                   
                   }                        
            ]
        },
        {
            "label": _("Integrations"),
            "icon": "octicon octicon-git-compare",
            "items": [
                   {
                       "type": "page",
                       "name": "abacus_export",
                       "label": _("Abacus Export"),
                       "description": _("Abacus Export")                   
                   }                   
            ]
        },
]
