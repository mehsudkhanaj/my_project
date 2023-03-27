import {Component} from 'react';
class ClassBased extends Component {
    handleClick() {
        console.log('Button Clicked');
    }
    render(){
        return (
            <div>
                Class Based Component
                <button onClick={this.handleClick}>Click Me</button>
                
                </div>
                );
    }
}
export default ClassBased;