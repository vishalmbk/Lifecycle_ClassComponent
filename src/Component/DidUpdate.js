import React from "react";

class DidUpdate extends React.Component {
    constructor() {
        super()
        this.state = {
            Active: null,
              who:null
        }
    }
    componentDidUpdate(){
        console.log("DidUpdated")
        if(this.state.who==null)
        {
        this.setState({who:"  updated data"})
    }
    }
    render() {
        return (<div>
            <h1>Life Cycle Method : ComponentDidUpdate{this.state.who}</h1>
            <button onClick={()=>this.setState({active:"Yes"})}>Activate</button>
        </div>)
    }
}
export default DidUpdate;