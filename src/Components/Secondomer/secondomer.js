import { Component } from "react";
import './secondomer.css'

class Secondomer extends Component {
    constructor(props){
        super(props);
        this.state = {
            second: props.second,
            minute: props.minute,
            hour: props.hour
        };
    }

    
    
    componentDidMount(){
           const timer = setInterval(() => {
                this.setState({second: this.state.second - 1})
                if(this.state.second <= 0) {
                    this.setState({second: 60});
                    this.setState({minute: this.state.minute - 1})
                    if(this.state.minute <= 0) {
                        this.setState({minute: 59})
                        this.setState({hour: this.state.hour - 1})
                        if(this.state.hour === 0 && this.state.minute === 0 && this.state.second === 0) {
                            this.setState({second: 0, minute: 0, hour: 0})
                            setTimeout(() => {
                                clearInterval(timer);
                            }, 0.1);
                        }
                    }  
                }
            }, 1000);
            
    }

    render() {
        return <div className="body">
            <h1>{this.state.hour} : {this.state.minute} : {this.state.second}</h1>
        </div>
    }
}

export default Secondomer;