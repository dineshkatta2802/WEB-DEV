import React from 'react';

export default function FR({field, value, error, touched, onChange, onBlur}){
    if(field.type === 'select'){
        return(
            <div>
                <label htmlFor="field.label">{field.label}</label>
                <br />
                <select name={field.name} id={field.name} value={value}
                    onChange={e => onChange(field.name, e.target.value)}
                    onBlur={() => onBlur(field.name)}>
                        <option value="">Select...</option>
                        {field.options.map(opt => 
                            <option key={opt} value={opt}>{opt}</option>
                        )}
                    </select>

                    {touched && error && <p>{error}</p>}
            </div>
        );
    }

    return(
        <div>
        <label htmlFor="field.label">{field.label}</label>
        <br />
        <input type={field.type}
        value={value}
        onChange={e => onChange(field.name, e.target.value)}
        onBlur={() => onBlur(field.name)} />

        {touched && error && <p>{error}</p>}
        </div>
    );
}