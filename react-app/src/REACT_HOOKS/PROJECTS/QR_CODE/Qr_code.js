export const initialState = {
    qrcode : '',
    status : 'idle', // idle| generating | done
    errorMssg : '',
}

export function reducer(state, action){
    switch(action.type){
        case 'start':
            return {...state, status : 'generating', errorMssg : ''};
        case 'generated':
            return {qrcode : action.payload , status : 'done', errorMssg : ''};
        case 'error':
            return {...state, status : 'error', errorMssg : action.payload};
        default : 
            return state;
    }
}

