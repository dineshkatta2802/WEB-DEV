import './TodoList.css'

export default function TodoList({list = [], showControls, handleMoreClick, setList, editingId, editingText, setEditingId, setEditingText, saveEdit, handleDuplicate, startEditing}) {
    function handleDelete(id){
        setList(list.filter(item => item.id !== id));
    }

    return(
        <div className='TodoListCon'>
            {/* <h1 className="TodoListHeading">List</h1> */}
            {list.length === 0 ? (
                <p className='empty'>No tasks yet!!!</p>
            ) : (
                <ul className='tasks'>
                    {list.map((item, index) => (
                        <li key={item.id} className='taskItem'>
                            <div className="taskInfo">
                                <p className="taskNumber">{index+1}</p>
                                {editingId === item.id ? (<input className="taskName" value={editingText} onChange={(e) => setEditingText(e.target.value)} onKeyDown={(e) => { if(e.key === 'Enter') saveEdit(item.id); }} autoFocus/>
                                                            ) : (<p className="taskName">{item.name}</p>)
                                    }
                                {item.time && <p className="taskTime">{item.time.hours}:{item.time.minutes}</p>}
                                {item.date && (
                                                <p className="taskDate">
                                                    {`${item.date.getDate().toString().padStart(2, '0')}/${(item.date.getMonth() + 1).toString().padStart(2, '0')}/${item.date.getFullYear()}`}
                                                </p>
                                    )}
                                
                            </div>
                        
{/* When i click on the button it sends the array(tasks) id value to the handleMoreClick function */}
                            <button className="more" onClick={() => handleMoreClick(item.id)}><i class="fa-solid fa-grip"></i></button>

{/* The below line says that show the contols only to the respective array object whose has a respective id */}
                            {showControls[item.id] && (
                                <div className="controls">
                                    {editingId === item.id ? (
                                        <button className="edit" onClick={() => saveEdit(item.id)}><i class="fa-solid fa-check"></i></button>
                                    ) : (
                                        <button className="edit" onClick={() => startEditing(item.id, item.name)}><i class="fa-solid fa-pen-to-square"></i></button>
                                    )}
                                    
                                    <button className="delete" onClick={() => handleDelete(item.id)}><i class="fa-solid fa-trash"></i></button>
                                    <button className="duplicate" onClick={() => handleDuplicate(item.id)}><i class="fa-solid fa-copy"></i></button>
                                    {/* <button className="comment"><i class="fa-solid fa-comment"></i></button> */}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}