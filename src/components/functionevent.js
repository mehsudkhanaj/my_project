function FunctionEvent(){
   function handleClick(){
        console.log("Button Clicked");
    }
    return (
        <div>
        Function components
        <button onClick={handleClick}>Click Me</button>
        </div>
    
    );
    }  
export default FunctionEvent;
