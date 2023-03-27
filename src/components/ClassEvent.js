import {Component} from 'react';
class ClassBased extends Component {
    render(){
        return (
            <div>
                Class Based Component
                <button onClick={this.handleClick}>Click Me</button>
                
                </div>
                );
    }
}