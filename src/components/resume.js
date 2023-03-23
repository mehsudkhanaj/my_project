import {Component} from 'react';
class Resume extends Component {
    render() {
        const {name,lastname} = this.props;
        return (
            <div>
                <h1> This is Resume {name} {lastname}</h1>
            </div>
        );
    }
}
export default Resume;