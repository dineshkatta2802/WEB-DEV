import React from 'react';
import './FE.css'

export default function FormEngine(){
    const formData = [
        {
            id : 0,
            section : "PersonalInfo",
            fields : [
                {name : "firstName", label : "FirstName", type : "text", rules : {required : true, minlength : 3}},
                {name : "lastName", label : "LastName", type : "text", rules : {required : true, minlength : 3}},
                {name : "fatherName", label : "FatherName", type : "text", rules : {required : true, minlength : 3}},
                {name : "motherName", label : "MotherName", type : "text", rules : {required : true, minlength : 3}},
                {name : "motherName", label : "MotherName", type : "text", rules : {required : true, minlength : 3}},
                {name : "email", label : "Email", type : "email", rules : {required : true, pattern : /^[^\s@]+@[^\s@]+\.[^\s@]+$/}},
            ]
        },
        {
            id : 0,
            section : "",
            fields : [
                {name : "", label : "", type : "", rules : {required : true, minlength : 3}},
                {name : "", label : "", type : "", rules : {required : true, minlength : 3}},
                {name : "", label : "", type : "", rules : {required : true, minlength : 3}},
            ]
        },
        {
            id : 0,
            section : "",
            fields : [
                {name : "", label : "", type : "", rules : {required : true, minlength : 3}},
                {name : "", label : "", type : "", rules : {required : true, minlength : 3}},
                {name : "", label : "", type : "", rules : {required : true, minlength : 3}},
            ]
        },
    ]

    return(
        <div className='FECon'>
            <div className="form">
                <h1 className="heading">Form Engine</h1>
                <div className="card">

                </div>
                <div className="controls">
                    <button className="previous"><span>Previous</span></button>
                    <button className="next"><span>Next</span></button>
                </div>
            </div>
        </div>
    );
}