import { renderApp } from "../..";

// const [value,setValue] = useState('')

// Now lets take the initial value of the usetate function 
function useState(initialValue){
    let value = initialValue;

    // Now we ginna have a setter function which updates the 'value' variable to the 
    // newly enterd value and force it to re-render
    function setValue(nextValue){
        value = nextValue; 
        renderApp(); // Force Re-render
    }

    return [value, setValue];
}

export default function App(){
    const [name, setName] = useState('Dinesh');
    return(
        <div>

            <h1>My name : {name}</h1>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            {console.dir(App)}
        </div>
    );
}