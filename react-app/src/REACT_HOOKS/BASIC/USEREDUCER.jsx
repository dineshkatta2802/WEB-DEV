// Example 1 : COUNTER APP
// ------------------------------------------------------------------------------------------------------------------------------------

// import React from 'react';
// import { useReducer } from 'react';

// function reducer(state, action){
//     switch(action.type){
//         case 'Increment':
//             return { count : state.count + 1 };
//         case 'Decrement':
//             return { count : state.count - 1 };
//         case 'Reset':
//             return { count : 0 };
//         default:
//             return state;
//     }
// }


// export default function Example1(){
//     const [state, dispatch] = useReducer(reducer,{ count :0 });

//     function handleIncremnet(){
//     dispatch({ type : 'Increment' });
// }

// function handleDecrement(){
//     dispatch({ type : 'Decrement' });
// }

// function handleReset(){
//     dispatch({ type : 'Reset' });
// }
//     return(
//         <div>
//             <h1>{state.count}</h1>
//             <button onClick={handleIncremnet}>Increment</button>
//             <button onClick={handleDecrement}>Decrement</button>
//             <button onClick={handleReset}>Reset</button>
//         </div>
//     );
// }


// ------------------------------------------------------------------------------------------------------------------------------------
// Example 2 : STOP WATCH
// ------------------------------------------------------------------------------------------------------------------------------------
// import React, { useReducer } from 'react';

// function reducer(state, action){
//     switch (action.type) {
//         case 'start':
//             return {...state, isRunning : true}
//         case 'stop':
//             return {...state, isRunning : false}
//         case 'reset':
//             return {isRunning : false, time : 0}
//         case 'tick':
//             return {...state, time : state.time + 1}
    
//         default:
//             throw new Error("Unknown type is not accepted")
//     }
// }

// export default function Example2(){
//     const initialState = {
//         isRunning : false,
//         time : 0
//     }

//     const  [state, dispatch] = useReducer(reducer, initialState);

//     function start(){
//         dispatch({type : 'start'})
//     }

//     function stop(){
//         dispatch({type : 'stop'})
//     }

//     function reset(){
//         dispatch({type : 'reset'})
//     }

//     function tick(){
//         dispatch({type : 'tick'})
//     }


//     return(
//         <div>
//             <button onClick={start}>START</button>
//             <button onClick={stop}>STOP</button>
//             <button onClick={reset}>RESET</button>
//             <button onClick={tick}>TICK</button>
//         </div>
//     );
// }


// ------------------------------------------------------------------------------------------------------------------------------------
// Example 3 : LOGIN COMPONENT
// ------------------------------------------------------------------------------------------------------------------------------------
// import React, { useReducer } from 'react';

// function reducer(state, action){
//     switch(action.type){
//         case 'field':
//             return {
//                 ...state, 
//                 [action.fieldName] : action.payload,
//                     };

//         case 'login':
//             return{
//                 ...state,
//                 isLoading : true,
//                 error: ''
//             };

//         case 'success':
//             return {
//                 ...state,
//                 isLoading : true,
//                 isLoggedIn : true
//             };

//         case 'error':
//             return{
//                 username : '',
//                 password : '',
//                 isLoading : false,
//                 isLoggedIn : false,
//                 error  :'Incorrect login credentials'
//             };

//         case 'logout':
//             return{
//                 ...state,
//                 isLoggedIn : false,
//                 isLoading : false,
//             };

//         default:
//             return state;
//     }
// }

// export default function Login(){
//     const initialState ={
//         username : '',
//         password : '',
//         isLoggedIn : false,
//         isLoading : false,
//         error : ''
//     }

//     const [state, dispatch] = useReducer(reducer, initialState);


//     // we then extract all the values from the state object by destructuring for easier access
//     const {username, password, isLoggedIn, isLoading, error} = state;

//     async function onSubmit(e) {
//         e.preventDefault();
//         dispatch({type : 'login'});

//         try {
//             new Promise((resolve, reject) => {
//                 setTimeout(() =>{
//                                     if(username === 'volunteer' && password === '1234'){
//                                         resolve();
//                                     }
//                                     else{
//                                         reject();
//                                     }
//                                 }
//                             ,1000);
//             })
//             dispatch({type : 'success'})
//         } catch {
//             dispatch({type : 'error'})
//         }
//     }

//     return(
//         <div>
//             {isLoggedIn ? 
//             (<>
//             <h1>Welcome {username}!</h1>
//             <button onClick={() => dispatch({type : 'logout'})}>Logout</button>
//             </>) 
//             : 
//             (
//                 <form onSubmit={onSubmit}>
//                     {error && <div style={{color : 'red'}}>Please enter the correct credentials</div>}
//                     <input 
//                         type="text" 
//                         name='username' 
//                         id='login-username'
//                         // value={username}
//                         onChange={(e) => dispatch({type : 'field', fieldName : 'username', payload : e.target.value})}/>

//                     <br />

//                     <input 
//                         type="password" 
//                         name='password' 
//                         id='login-password'
//                         // value={password}
//                         onChange={(e) => dispatch({type : 'field', fieldName : 'password', payload : e.target.value})}/>

//                         <br />

//                     <button type="submit" disabled={isLoading}>
//                     {isLoading ? 'Logging in...' : 'Log In'}
//                     </button>
//                 </form>
//             )
//             }
//         </div>
//     );
// }


// ------------------------------------------------------------------------------------------------------------------------------------
// Example 4 : TODO LIST
// ------------------------------------------------------------------------------------------------------------------------------------

import React, { useReducer } from 'react';

    const initialState = {
        task: '',
        todos: []
    }

    function reducer(state, action){
        switch(action.type){
            case 'field':
                return {...state, [action.fieldName]: action.payload};
            case "Add":
                return {
                    ...state,
                    task  :'',
                    todos: [...state.todos, { id: Date.now(), task: state.task }]
                };
            case 'Remove':
                return {
                    ...state,
                    todos: state.todos.filter(todo => todo.id !== action.id)
                };
            case 'ClearAll':
                return {
                    ...state,
                    todos: []
                }
            default:
                return state;
        }
    }

export default function TodoList(){
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div className='Main'>
            <div className='TodoContainer'>
                <div className="input">
                    <input 
                    className='box'
                    type="text" 
                    value={state.task}
                    onChange={(e) => dispatch({
                        type: 'field', 
                        fieldName: 'task', 
                        payload: e.target.value
                    })}
                />
                <button onClick={() => dispatch({type: 'Add'})}>Add</button>
                </div>
                <ul>
                    {state.todos.map(todo => (
                        <li className='task' key={todo.id}>
                            {todo.task}
                            <button onClick={() => dispatch({
                                                                type: 'Remove',
                                                                id: todo.id
                                                            })}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}



