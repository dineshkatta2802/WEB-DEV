import React, { useState } from 'react';

export default function App(){
    const [person, setPerson] = useState({firstName : 'Dinesh', lastName : 'Katta', email : 'daxton0666@gmail.com'});

    function handleFirstName(e){
        setPerson({
                    ...person,
                    firstName : e.target.value,})
                    // person.firstName = e.target.value
    }

    function handleLastName(e){
        setPerson({
                    ...person,
                    lastName : e.target.value,})
                    // person.lastName =e.target.value
    }

    function handleEmail(e){
        setPerson({
                    ...person,
                    email : e.target.value,})
                    // person.email = e.target.value
    }

    return(
        <>
        <label htmlFor="">
            FirstName :
            <input type="text" value={person.firstName} onChange={handleFirstName} />
        </label>

        <label htmlFor="">
            LastName :
            <input type="text" value={person.lastName} onChange={handleLastName} />
        </label>
        <label htmlFor="">
            Email :
            <input type="text" value={person.email} onChange={handleEmail} />
        </label>

        <p>
            {person.firstName}{' '}
            {person.lastName}{' '}
            ({person.email})
        </p>
        </>
    );
}