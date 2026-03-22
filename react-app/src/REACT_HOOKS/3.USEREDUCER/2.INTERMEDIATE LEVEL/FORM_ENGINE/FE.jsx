import React, { useReducer } from 'react';
import { formSchema } from './FormSchema';
import FR from './FiledRenderer.jsx';

console.log(formSchema);

// ---------------- INITIAL STATE ----------------
const initialState = {
    CURRENT_STEP: 0,
    VALUES: {},
    ERRORS: {},
    TOUCHED: {},
    STATUS: 'idle'
};

// ---------------- ACTIONS ----------------
const ACTIONS = {
    FIELD_CHANGE: 'FIELD_CHANGE',
    FIELD_TOUCHED: 'FIELD_TOUCHED',
    SET_ERRORS: 'SET_ERRORS',
    NEXT_STEP: 'NEXT_STEP',
    PREVIOUS_STEP: 'PREVIOUS_STEP',
    SUBMIT: 'SUBMIT',
    RESET: 'RESET'
};

// ---------------- REDUCER ----------------
const reducer = (state, action) => {
    switch(action.type) {

        case 'RESET':
            return initialState;

        case 'NEXT_STEP':
            return {
                ...state,
                CURRENT_STEP: state.CURRENT_STEP + 1
            };

        case 'PREVIOUS_STEP':
            return {
                ...state,
                CURRENT_STEP: state.CURRENT_STEP - 1
            };

        case 'FIELD_CHANGE':
            return {
                ...state,
                VALUES: {
                    ...state.VALUES,
                    [action.payload.field]: action.payload.value
                },
                ERRORS: {
                    ...state.ERRORS,
                    [action.payload.field]: validateField(action.payload.field, action.payload.value)
                }
            };

        case 'FIELD_TOUCHED':
            return {
                ...state,
                TOUCHED: {
                    ...state.TOUCHED,
                    [action.payload.field]: true
                }
            };

        case 'SET_ERRORS':
            return {
                ...state,
                ERRORS: action.payload
            };

        case 'SUBMIT':
            return {
                ...state,
                STATUS: 'submitting'
            };

        default:
            return state;
    }
};

// ---------------- VALIDATION ----------------
const validateField = (fieldName, value) => {
    const field = formSchema.flatMap(sec => sec.fields).find(f => f.name === fieldName);
    if (!field) return null;

    if (field.required && !value)
        return `${fieldName} value is required`;

    if (field.minLength && value.length < field.minLength)
        return `${fieldName} must have ${field.minLength} characters`;

    if (field.pattern && !field.pattern.test(value))
        return 'Invalid format';

    return null;
};

const validateStep = (stepIndex, VALUES) => {
    const errorObj = {};
    formSchema[stepIndex].fields.forEach(f => {
        errorObj[f.name] = validateField(f.name, VALUES[f.name] || "");
    });
    return errorObj;
};

// ---------------- MAIN COMPONENT ----------------
export default function FE() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (name, val) => {
        dispatch({
            type: ACTIONS.FIELD_CHANGE,
            payload: { field: name, value: val }
        });
    };

    const handleBlur = (name) => {
        dispatch({
            type: ACTIONS.FIELD_TOUCHED,
            payload: { field: name }
        });
    };

    const handleNext = () => {
        const errors = validateStep(state.CURRENT_STEP, state.VALUES);
        const hasErrors = Object.values(errors).some(error => error !== null);

        if (hasErrors) {
            dispatch({ type: ACTIONS.SET_ERRORS, payload: errors });
        } else {
            dispatch({ type: ACTIONS.NEXT_STEP });
        }
    };

    const handlePrevious = () => {
        dispatch({ type: ACTIONS.PREVIOUS_STEP });
    };

    const currentFields = formSchema[state.CURRENT_STEP].fields;

    return (
        <div className='FECon'>
            <h2>Step {state.CURRENT_STEP + 1}</h2>

            {currentFields.map(field => (
                <FR
                    key={field.name}
                    field={field}
                    value={state.VALUES[field.name] || ""}
                    error={state.ERRORS[field.name]}
                    touched={state.TOUCHED[field.name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            ))}

            <div style={{ marginTop: "20px" }}>
                {state.CURRENT_STEP > 0 && (
                    <button onClick={handlePrevious}>Back</button>
                )}
                <button onClick={handleNext} style={{ marginLeft: "10px" }}>Next</button>
            </div>
        </div>
    );
}