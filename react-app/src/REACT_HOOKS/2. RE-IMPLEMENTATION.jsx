import { renderApp } from "..";

// const [value,setValue] = useState('')

// Now lets take the initial value of the usetate function 
let values = [];
let currentHook = 0;
function useState(initialValue){

    if(values[currentHook] === undefined){
        values[currentHook] = initialValue;
    }
    // Another Short hand for the above line 
    // value = value ?? initialState;

    // Now we ginna have a setter function which updates the 'value' variable to the 
    // newly enterd value and force it to re-render

    let hookIndex = currentHook;
    function setValue(nextValue){
        values[hookIndex] = nextValue; 
        renderApp(); // Force Re-render
    }

    const value = values[currentHook++]; // use currentHook value and add 1
    return [value, setValue];
}

export default function App(){
    currentHook = 0;
    const [enableName, setEnableName] = useState(false);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    return(
        <div>

            <h1>My name : {enableName && name}{lastName}</h1>
            <input type="checkbox" checked={enableName} onChange={e => setEnableName(e.target.checked)}/>
            {enableName && <input type="text" value={name} onChange={e => setName(e.target.value)}/>}
            <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}/>
        </div>
    );
}