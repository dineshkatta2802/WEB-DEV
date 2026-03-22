import {COUNTRIES} from './Countries.js';
import {QUALIFICATIONS} from './Qualifications.js';

export const formSchema = [
    {
        section : 'Personal-Information',
        fields : [
            {name : 'firstName', label : 'FirstName', type : 'text', required : true, minLength : 5},
            {name : 'lastName', label : 'LastName', type : 'text', required : true, minLength : 5},
            {name : 'gender', label : 'Gender', type : 'select', required : true, options : ['Male', 'Female', 'Other']},
            {name : 'age', label : 'Age', type : 'number', required : true, min : 18, max : 30},
            {name : 'nationality', label  :'Nationality', type : 'select', required : true, options : COUNTRIES.map(c => c.name)},
            {name : 'maritalStatus', label : 'Marital Status', type : 'select', required : true, options : ['Married', 'Not Married']},
        ],
    },

    {
        section : 'Contact Information',
        fields : [
            {name : 'email', label : 'Email', type : 'email', required  : true, pattern : /^[^\s@]+@[^\s@]+\.[^\s@]+$/},
            {name : 'phNum', label : 'Phone Number', type : 'text', required : true, minLength : 10},
            {name : 'altPhNum', label : 'ALternate Phone Number', type : 'text', required : false, minLength : 10},
            {name : 'address1', label  : 'Address-1', type : 'text', required : true, minLength : 10},
            {name : 'address2', label  : 'Address-2', type : 'text', required : false, minLength : 10},
            {name : 'pinCode', label : 'PinCode', type : 'text', required : true, minLength : 6},
        ]
    },

    {
        section : 'Educational Information',
        fields : [
            {name : 'qualification', label : 'Highest Qualification', type : 'select', required : true, options : QUALIFICATIONS},
            {name : 'institute', label  :'Institute Name', type : 'text', required : true, minLength : 5 },
            {name : 'Year', label  : 'Year Of Graduation', type : 'number', required : true, min : 1995, max : 2030},
        ]
    },
]