import React, { useReducer, useState } from 'react';

const initialState = {
    past : [],
    present : 0,
    future : []
};


    const reducer = (state, action) => {
        switch(action.type){
            case 'Reset':
            return initialState;

            case 'Increment':
            return{
                ...state,
                past : [
                    ...state.past,
                    state.present
                ],
                present : state.present + 1,
                future : [],
            }

            case 'Decrement':
            if(state.present === 0) return state;
            return{
                ...state,
                past : [
                    ...state.past, 
                    state.present,
                ],
                present : Math.max(0, state.present - 1)
            }
            
            case 'Undo':
            if(state.past.length === 0) return state;
            return{
                ...state,
                past : state.past.slice(0,-1),
                present : state.past[state.past.length-1],
                future : [
                    state.present,
                    ...state.future,
                ],
            }

            case 'Redo':
            if(state.future.length === 0) return state;
            return{
                ...state,
                past : [...state.past, state.present],
                present : state.future[0],
                future : state.future.slice(1)
            }

            default : 
            return;
        }
    }

export default function Main(){
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div>
            <div style={{display : 'flex', gap : '2rem'}}>
                <span>Past : {state.past}</span>
                <span>Present : {state.present}</span>
                <span>Future : {state.future}</span>
            </div>
            <div>
                <button onClick={() => dispatch({type : 'Increment'})}>Increment</button>
                <button onClick={() => dispatch({type : 'Decrement'})}>Decrement</button>
                <button onClick={() => dispatch({type : 'Undo'})}>Undo</button>
                <button onClick={() => dispatch({type : 'Redo'})}>Redo</button>
                <button onClick={() => dispatch({type : 'Reset'})}>Reset</button>
            </div>
        </div>
    );
}