import React, { useReducer } from 'react';
import './TTT.css'

const initialState = {
    board : Array(9).fill(null),
    xIsNext : true,
    winner : null,
    isDraw : false,
};

// Function to check winner
const calcWinner = (square) => {
    const lines = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]

    for(let [a,b,c] of lines){
        if(square[a] && square[a] === square[b] && square[a] === square[c]){
            return square[a];
        }
    }
    return null;
};

const reducer = (state, action) =>{
    switch(action.type){
        case 'onCellClick': 
            const index = action.index;
            if(state.board[index] || state.winner || state.isDraw) return state;
            const boardCopy = [...state.board];
            boardCopy[index] = state.xIsNext ? '❌' : '⭕';
            const winner = calcWinner(boardCopy);
            const isDraw = !winner && boardCopy.every((sq) => sq!==null);
            return {...state, board : boardCopy, xIsNext : !state.xIsNext, winner, isDraw};

        case 'Reset':
            return initialState;

        default : 
        return state;
    }
}

export default function TTT(){
    const [state, dispatch] = useReducer(reducer, initialState);

    const getStatus = () => {
        if(state.winner) return `Winner ${state.winner}`;
        if(state.isDraw) return 'Draw';
        return `Next Player: ${state.xIsNext ? 'X' : 'O'}`;
    }

    return(
        <div className="Con">
            <h1>{getStatus()}</h1>
            <div className='cells'>
                {state.board.map((val, i) => (
                    <button key={i} onClick={() => dispatch({type : 'onCellClick', index : i})}>{val}</button>
                    ))}
                <button onClick={() => dispatch({type : 'Reset'})}>Reset</button>
            </div>
        </div>
    );
}