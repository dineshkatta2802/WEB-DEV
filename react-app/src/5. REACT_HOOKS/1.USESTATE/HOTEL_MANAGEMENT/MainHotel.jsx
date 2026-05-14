import React, { useState } from 'react';
import './Hotel.css'

let nextId = 0;
export default function Hotel(){
    const [name, setName] = useState('');
    const [phnumber, setPhNumber] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
    const [roomType, setRoomType] = useState('');
    const [people, setPeople] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');

    const [details, setDetails] = useState([]);

    function handleSave(){
        setDetails([
            ...details,
            {
                id : nextId++,
                name : name,
                phnumber : phnumber,
                roomNumber : roomNumber,
                roomType : roomType,
                people : people,
                checkIn : checkIn,
                checkOut : checkOut
            }
        ])
    }

    function handleClear    (){
        setName('');
        setPhNumber('');
        setRoomNumber('');
        setRoomType('');
        setPeople('');
        setCheckIn('');
        setCheckOut('')
    }

    return(
        <div className='Con'>
            <div className="card">
                <h1>HOTEL MANAGEMENT SYSTEM</h1>

                <div className="inputHolder">

                    <div className="GuestDetails">
                        <label>Guest Name : 
                            <input type="text" value={name}  onChange={e => setName(e.target.value)} placeholder='Enter Guests name' required/>
                            {/* {console.log('name : ',name)} */}
                        </label>

                        <label>Guest Phone Number : 
                            <input type="text" placeholder='Enter Phone Number' minLength={1} maxLength={10} required
                            value={phnumber} onChange={e => setPhNumber(e.target.value)}/>
                            {/* {console.log('Phone Number : ',phnumber)} */}
                        </label>
                    </div>

                    <div className="RoomDetails">
                        <label htmlFor="number">Room Number : 
                            <input type="number"  min={1} max={100} required
                            value={roomNumber} onChange={e => setRoomNumber(e.target.value)}/>
                            {/* {console.log(roomNumber)} */}
                        </label>

                        <label>Room Type :   
                            <select value={roomType} required onChange={e => setRoomType(e.target.value)}>
                                <option value="" selected disabled>Select Room Type</option>
                                <option value="Single Room">Single Room</option>
                                <option value="Double Room">Double Room</option>
                                <option value="Twin Room">Twin Room</option>
                                <option value="Queen Room">Queen Room</option>
                                <option value="King Room">King Room</option>
                                <option value="Deluxe Room">Deluxe Room</option>
                                <option value="Suite">Suite</option>
                                <option value="Presidential Suite">Presidential Suite</option>
                                <option value="Duplex">Duplex</option>
                                <option value="Lanai">Lanai</option>
                                <option value="Cabana">Cabana</option>
                            </select>
                            {/* {console.log("roomType : ", roomType)} */}
                        </label>

                        <label>Number of People : 
                            <select value={people} required onChange={e => setPeople(e.target.value)}>
                                <option value="" selected disabled>Select Number of people</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                            {/* {console.log("People:",people)} */}
                        </label>
                    </div>

                    <div className="check">
                        <label>Check-In 
                            <input type="date" value={checkIn} required onChange={e => setCheckIn(e.target.value)}/>
                            {/* {console.log(checkIn)} */}
                        </label>

                        <label>Check-Out  
                            <input type="date" value={checkOut} required onChange={e => setCheckOut(e.target.value)}/>
                            {/* {console.log(checkOut)} */}
                        </label>
                    </div>
                </div>

                <div className="btns">
                    <button onClick={handleSave}>Save</button>
                    <button id='Clear' onClick={handleClear}>Clear</button>
                </div>

            </div>

            <div className="display">
                <header>
                    <h1>GUEST LIST</h1>
                </header>
                {details.map(info => (
                                        <div className="data" key={info.id}>
                                            <div className="contactDetails">
                                                <h2>{info.name}{' -- '}{info.phnumber}</h2>
                                            </div>

                                            <div className="room">
                                                <p>Room Number : {info.roomNumber}</p>
                                                <p>Room Type : {info.roomType}</p>
                                                <p>Number of People  : {info.people}</p>
                                                <p>CheckIn Date : {info.checkIn}</p>
                                                <p>CheckOut Date : {info.checkOut}</p>
                                            <button className='btn' onClick={() => setDetails(details.filter(a => a.id !== info.id))}>Delete</button>
                                            </div>
                                        </div>
                ))}
            </div>
        </div>
    );
}