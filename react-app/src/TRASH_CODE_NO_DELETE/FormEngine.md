<h1>FORM ENGINE - USEREDUCER HOOK</h1>

import React, { useReducer } from 'react';
import './FE.css';

const initialState = {
    currentStep : 0,
    values : {},
    touched : {},
    errors : {},
    status : 'idle', // submitting || sent || error
}

const ACTIONS = {
    FIELD_CHANGE : 'FIELD_CHANGE', 
    FIELD_TOUCHED : 'FIELD_TOUCHED', 
    SET_ERRORS : 'SET_ERRORS',
    NEXT_STEP : 'NEXT_STEP',
    // VALIDATE_ALL : 'VALIDATE_ALL',
    PREVIOUS_STEP : 'PREVIOUS_STEP',
    SUBMIT : 'SUBMIT',
    RESET :'RESET',
    // RESET_STEP : 'RESET_STEP',
    // RESET_FORM : 'RESET_FORM'
}

const COUNTRIES = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];

const QUALIFICATIONS = [
    "10th Pass",
    "12th Pass",
    "Diploma",
    "ITI",
    "Certificate Course",
    "Associate Degree",
    "Bachelor of Arts (BA)",
    "Bachelor of Science (BSc)",
    "Bachelor of Commerce (BCom)",
    "Bachelor of Business Administration (BBA)",
    "Bachelor of Computer Applications (BCA)",
    "Bachelor of Engineering (BE)",
    "Bachelor of Technology (BTech)",
    "Bachelor of Architecture (BArch)",
    "Bachelor of Pharmacy (BPharm)",
    "Bachelor of Education (BEd)",
    "Bachelor of Laws (LLB)",
    "Bachelor of Medicine",
    "Bachelor of Surgery (MBBS)",
    "Bachelor of Dental Surgery (BDS)",
    "Bachelor of Fine Arts (BFA)",
    "Bachelor of Hotel Management (BHM)",
    "Bachelor of Design (BDes)",
    "Postgraduate Diploma",
    "Master of Arts (MA)",
    "Master of Science (MSc)",
    "Master of Commerce (MCom)",
    "Master of Business Administration (MBA)",
    "Master of Computer Applications (MCA)",
    "Master of Engineering (ME)",
    "Master of Technology (MTech)",
    "Master of Architecture (MArch)",
    "Master of Pharmacy (MPharm)",
    "Master of Education (MEd)",
    "Master of Laws (LLM)",
    "Master of Design (MDes)",
    "Doctor of Medicine (MD)",
    "Doctor of Philosophy (PhD)",
    "Doctor of Science (DSc)",
];

// Form schema is the fixed part is i=out of the state
// It doesn't change constantly - BluePrint
const formSchema = [
                    {
                        section : 'personalInfo',
                        fields : [
                                    {name : 'firstName', label : 'First Name', type : 'text', required : true, minLength : 2}, 
                                    {name : 'lastName', label : 'Last Name', type : 'text', required : true, minLength : 2}, 
                                    {name : 'gender', label : 'Gender', type : 'select', required : true, options : ['Male', 'Female', 'Others']}, 
                                    {name : 'nationality', label : 'Nationality', type : 'select', required : true, options : COUNTRIES},
                                    {name : 'maritalStatus', label : 'Marital Status', type : 'select', required : true, options  :['Not Married', 'Married']},
                        ]
                    },

                    {
                        section : 'contactInfo',
                        fields : [
                                    {name : 'email', label : 'Email', type : 'email', required : true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/}, 
                                    {name : 'phoneNumber', label : 'Phone Number', type : 'text', required : true, minLength : 5, maxLength : 10}, 
                                    {name : 'altPhoneNumber', label : 'Alternate Phone Number', type : 'text', required : false, minlength : 5, maxLength : 10,},
                                    {name : 'address1', label : 'Address-1', type : 'text', required : true, minLength : 5}, 
                                    {name : 'address2', label : 'Address-2', type : 'text', required : false, minLength : 5}, 
                                    // {name : 'city', label : 'City', type : 'text', required : true, minLength : 2}, 
                                    // {name : 'state', label : 'State', type : 'select', required : true,}, 
                                    {name : 'postalCode', label : 'Postal Code', type : 'number', required : true, maxLength : 6},
                                    {name : 'country', label : 'Country', type : 'select', required : true, options : COUNTRIES},
                        ],
                    },

                    {
                        section : 'educationInfo',
                        fields : [
                            {name : 'highestQualification', label : 'Highest Qualification', type : 'select', required : true, options : QUALIFICATIONS},
                            {name : 'institutionName', label : 'Institution Name', type : 'text', required : true, minLength : 2},
                            // {name : 'fieldOfStudy', label : 'Field Of Study', type : 'select', required : true, },
                            {name : 'yearOfGraduation', label : 'Year Of Graduation', type : 'number', required : true, min : 1995, max : 2027}
                        ]
                    },
                ]

const reducer = (state, action) => {
    switch(action.type){

        case 'RESET_FIELDS': 
        return initialState;

        case 'NEXT_STEP': 
        return {...state, currentStep : state.currentStep+1};

        case 'PREVIOUS_STEP': 
        return {...state, currentStep : state.currentStep-1};

        case 'FIELD_CHANGE':
        return {
            ...state,
            values : {
                ...state.values,
                // Here the square brackets for the action.filed is correct , 
                // because it is computed prop key. So it looks something like this
                // "firstName" : Dinesh
                [action.payload.field] : action.payload.value
            },
            errors : {
                ...state.errors,
                // Here the square brackets for the action.filed is correct , 
                // because it is computed prop key. So it looks something like this
                // "firstName" : Dinesh
                [action.payload.field] : validateField(action.payload.field, action.payload.value)
            }
        };

        case 'FIELD_TOUCHED':
        return {
            ...state,
            touched : {
                ...state.touched,
                [action.payload.field] : true
            }
        };

        case 'SET_ERRORS':
        return {
            ...state,
            errors : action.payload, 
        }

        case 'SUBMIT':
        return {
            ...state,
            status : 'submitting'
        }

        default:
        return state;
    }
}

const validateField = (fieldName, value) => {
    const field = formSchema.flatMap(sec => sec.fields).find(field => field.name === fieldName );
    if (field.required && !value) return 'This field is required';
    if (field.minLength && value.length < field.minLength) return `Must be at least ${field.minLength} characters`;
    if (field.maxLength && value.length > field.maxLength) return `Must be under ${field.maxLength} characters`;
    if (field.pattern && !field.pattern.test(value)) return 'Invalid format';
    return null;
}

const validateStep = (stepIndex, values) => {
    const errorsObj = {};
    formSchema[stepIndex].fields.forEach(f => errorsObj[f.name] = validateField(f.name, values[f.name]));
    return errorsObj;
}

const formISValid = (values) => {
    return formSchema.flatMap(sec => sec.fields).every(field => validateField(field.name, values[field.name] ) === null);
}

export default function FE(){
    // Event handlers
    const handleChange = (name, val) => {
        dispatch({type : ACTIONS.FIELD_CHANGE, payload : {field : name, value : val}});
    }

    const handleBlur = (name) => {
        dispatch({type :ACTIONS.FIELD_TOUCHED, payload : {field  : name}});
    }

    const handleNext = () => {
                const errors = validateStep(state.currentStep, state.values);
        const hasErrors = Object.values(errors).some(error => error !== null);
        
        if(hasErrors) {
            dispatch({type: ACTIONS.SET_ERRORS, payload: errors});
        } else {
            dispatch({type: ACTIONS.NEXT_STEP});
        }
    }

    const handlePrevious = () => {
        dispatch({type : ACTIONS.PREVIOUS_STEP});
    }

    const [state, dispatch] = useReducer(reducer, initialState);
const FieldRenderer = ({ field, value, error, touched, onChange, onBlur }) => {

    if(field.type === 'select') {
        return (
            <div>
                <label>{field.label}</label>
                <select value={value} onChange={e => onChange(field.name, e.target.value)} onBlur={() => onBlur(field.name)}>
                    <option value="">Select...</option>
                    {field.options.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </select>
                {touched && error && <span>{error}</span>}
            </div>
        )
    }

    return (
        <div>
            <label>{field.label}</label>
            <input type={field.type} value={value} placeholder={field.label}
                onChange={(e) => onChange(field.name, e.target.value)}
                onBlur={() => onBlur(field.name)}
            />
            {touched && error && <span>{error}</span>}
        </div>
    )
}
}

