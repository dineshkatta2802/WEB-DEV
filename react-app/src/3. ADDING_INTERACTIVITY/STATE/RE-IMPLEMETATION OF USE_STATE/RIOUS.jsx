import { renderApp } from "../../..";

// Now we define our own function useState and pass intialState as an argument
function useState(intialState){
    let value = intialState; // Current State

    function setState(nextValue){ // Updating the intial value
        value = nextValue;
        renderApp();
    }

    return [value, setState]; // Returning both of them in an array bcpoz thats waht the original array does
}

export default function App(){
    const [name, setName] = useState("")
    return(
        <div>
            <label htmlFor="name">Enter any name: 
                <input type="text" onChange={e => setName(e.target.value)} value={name} id="name"/>
            </label>

            <h1>{name}</h1>
        </div>
    );
}