import React, { useState } from 'react';
import './BillSplitter.css'

let nextRoomMateId = 0;
let nextIndItemExpId = 0;
let nextExpenseId = 0;

export default function BillSplitter(){
    const [roomMates, setRoomMate] = useState([]);
    const [Members, setMembers] = useState([]);
    const [indItemExp, setIndItemExp] = useState([]);
    const [totalExpense, setTotalExpense] = useState([]);

    const [name , setName] = useState('');
    const [item, setItem] = useState('');
    const [splitCount, setSplitCount] = useState('');
    const [totalCostPaid, settotalCostPaid] = useState('');

    // Event handling Functions
    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleAdd = (e) => {
        if(name.trim() === ''){
            alert('Enter Room-mate name!!!')
        }
        else{
            setRoomMate(prev => {
                const update = [...prev, {id : nextRoomMateId++, name : name}]
                setMembers(update);
                return update;
            })
            setName('');
        }
    }

    const handleClear = () => {
        setRoomMate([]);
        setMembers([]);
        setIndItemExp([]);
        setItem('');
        settotalCostPaid('');
        setSplitCount('');
    }

    const handleDelete = (id) => {
        setRoomMate(prev => prev.filter( p => p.id !==  id))
        setMembers(prev => prev.filter(m => m.id !== id));
        setIndItemExp(prev => prev.filter(exp => exp.memberId !== id));
    }

    const handleItem = (e) => {
        setItem(e.target.value);
    }

    const handleCost = (e) => {
        settotalCostPaid(e.target.value)
    }

    const handleSelect = (e) => {
        setSplitCount(Number(e.target.value));
    }

    const handleSelectedMembers = (id) => {
        if(item.trim() === '' || !totalCostPaid || !splitCount){
            alert("Enter all the values in the Bill Splitter");
            return;
        }
        if (indItemExp.length >= splitCount) {
            alert("Split limit reached!");
            return;
        }
        const person = Members.find( p => p.id === id); // find the person
        if(!person) return; // if the person doesnt exist return
        // setMembers(prev => prev.filter( m => m.id !== id)); // Removing the members

        const alreadyAdded = indItemExp.some(
            exp => exp.memberId === id && exp.item === item
        )

        if(alreadyAdded){
            alert("This person is already added to the item!!!");
            alert("Else reduce the Selected members and increase the amt paid to totalAmt")
            return;
        }

        setIndItemExp(prev => [
            ...prev, 
            {
                id : nextIndItemExpId++,
                memberId : person.id,
                name : person.name,
                item : item,
                totalCostPaid  :totalCostPaid,
                indAmt : "",
            }
        ])
    }

    const handleIndAmt =(id, value) => {
        setIndItemExp(prev => prev.map(exp => 
                                                exp.id === id ? {...exp , indAmt : value}: exp
                                        )
                    )
    }

    const handleIILDelete = (id) => {
        setIndItemExp(prev => prev.filter(p => p.id !== id))
    }

    const handleNewItem = () => {
        if(!item) return;

        const itemEntries = indItemExp.filter(exp => exp.item === item);

        const sum = itemEntries.reduce( // calc the total of the indAmt from each entry
            (acc, curr) => acc + Number(curr.indAmt || 0),
            0
        );

        const total = Number(totalCostPaid);

        const remaining = total - sum;

        if (Math.abs(sum - total) > 0.01) {
                alert(`Split not balanced! 
                        Total: ₹${total} 
                        Current Sum: ₹${sum}`);
                alert(`₹${remaining} remaining to split`);
                        return;
                }

        setTotalExpense(prev => [
            ...prev ,
            {
                id : nextExpenseId++,
                item : item,
                totalCostPaid : total,
                splitCount :splitCount,
                participants : itemEntries,
            }
        ])

        setIndItemExp([]);
        setItem('');
        settotalCostPaid('');
        setSplitCount('');
    }

    const personTotal = totalExpense.reduce((acc, exp) => {
                                                            exp.participants.forEach(ele => {
                                                                if(!acc[ele.name]){
                                                                    acc[ele.name] = 0;
                                                                }
                                                                acc[ele.name] += Number(ele.indAmt || 0);
            });
            return acc;
        }, {})

    return(
        <div className='BillCon'>
            {/* Section-1 */}
            <div className="sec1">
                <div className="userInputs1">
                    <h2 className='heading'>RoomMate Names</h2>
                    <div className="dataEntry1">
                        <input type="text" placeholder='Enter room mate name' value={name} onChange={handleName}/>
                        <button className='addBtn' onClick={handleAdd}><span>Add</span></button>
                        <button className='clearBtn' onClick={handleClear}><span>Clear</span></button>
                    </div>
                    <div className="namesList">
                        {(roomMates.length === 0) ? 
                            <div className='empty'>No Roommates!!!</div>
                            : 
                            <ul>
                                {roomMates.map( (rm, index) => (
                                    <li key={rm.id}>
                                        <span>{index+1}.</span>
                                        <span>{rm.name}</span>
                                        <button className='deleteBtn' onClick={() => handleDelete(rm.id)}>
                                            <span>Del</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        }
                    </div>
                </div>
                <div className="userInputs2">
                    <h1 className='heading'>Bill Splitter</h1>
                    <div className="dataEntry2_1">
                        <input type="text" placeholder='Item name' value={item} onChange={handleItem}/>
                        <input type="number" placeholder='₹ Cost of Item' value={totalCostPaid} onChange={handleCost}/>
                        {/* <label htmlFor="Split">Split Among</label> */}
                        <select name="split" id="split" value={splitCount} onChange={handleSelect}>
                            {
                            (roomMates.length === 0) ? 
                                (<option>None</option>)
                                    : 
                                (
                                    <>
                                    <option value="">Split among</option>
                                    {roomMates.map((rm, index) => (
                                        <option key={rm.id} value={index+1}>{index+1}</option>
                                    ))}
                                    </>
                                )
                            }
                        </select>
                        <button className='newItem' onClick={handleNewItem}><span>Add New Item</span></button>
                        {/* <button className="clearBtn"><span>Clear</span></button> */}
                    </div>
                    <div className="dataEntry2_2">
                        <div className="membersCon">
                            <h3 className='heading'>Split Among</h3>
                            <div className='members'>
                                <ul className="pplList">
                                    {
                                        Members.map((sm , index) => (
                                            <>
                                                <li key={sm.id}>
                                                    {index+1}
                                                    {". "}
                                                    {sm.name}
                                                    <button onClick={() => handleSelectedMembers(sm.id)}>+</button>
                                                </li>
                                            </>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="percentCon">
                            <h3 className='heading'>Percentage Split</h3>
                            <div className="percent">
                                <ul className='individualItemList'>
                                    {
                                        indItemExp.map((ie, index) => (
                                            <li key={ie.id}>
                                                <span>{index+1}.</span>
                                                <span>{ie.item}</span>
                                                <span>{ie.name}</span>
                                                <span>₹{ie.totalCostPaid}</span>
                                                {/* <span>{ie.splitCount}</span> */}
                                                <input type="number" placeholder='₹ Amt Paid/person' value={ie.indAmt} onChange={e => handleIndAmt(ie.id, e.target.value)}/>
                                                <button className='ieDel' onClick={() => handleIILDelete(ie.id)}><span>Del</span></button>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section-2 */}
            <div className="sec2">
                <h1 className="heading">Total Bill</h1>
                <ul className='all'>
                    {
                        totalExpense.map((a, index) => (
                            <li key={a.id}>
                                <span>{index+1}.</span>
                                <span>{a.item}</span>
                                <span>₹{a.totalCostPaid}</span>

                                <ul>
                                    {a.participants.map(p => (
                                        <li key={p.id}>
                                            {p.name} - ₹{p.indAmt}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))
                    }
                </ul>

                <hr />

                <div className="money">
                    <div className="personTotals">
                        <h3>Individual Totals</h3>
                        {
                            Object.entries(personTotal).map(([name, total]) => (
                                <div key={name} className="personRow">
                                    <span>{name}</span>
                                    <span>₹{total}</span>
                                </div>
                            ))
                        }
                    </div>

                    <div className="totalBox">
                        <span>Total: </span>
                        <span>
                        ₹{
                            totalExpense.reduce((sum, a) => sum + a.totalCostPaid, 0)
                        }
                        </span>
                    </div>
                </div>
            </div>

            {/* Section-3 */}
            {/* <div className="sec3"></div> */}
        </div>
    );
}