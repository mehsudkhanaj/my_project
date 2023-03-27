import {useState} from 'react';
function FUnctionCounter(){
    const [counter, setCounter] = useState(0);
    const [counter1, setCounter1] = useState(0);
    const Increment = () => {
        setCounter(counter+1);
    };
    const Decrement = () => {
        setCounter1(counter1-1);
    }

    return(
        <div>
            <div>Counter Value: {counter}</div>
            
            <button onClick={Increment}>Increment</button>
            <div>Decrement Value: {counter1}</div>
            <button onClick={Decrement}>Increment</button>
        </div>

        
    )
}
export default FUnctionCounter;