import React from "react";

class Form extends React.Component{
    constructor(){
        super()
        this.state={
            user:null,
            pass:null
        }
    }
    submit(){
        console.log(this.state)
    }
    render(){
        return(<div>
            <h1>Form</h1>
            <input type="text" 
            name="user" 
            onChange={(e)=>this.setState({user:e.target.value})}/><br/><br/>
            <input type="password" name="password" onChange={(e)=>this.setState({pass:e.target.value})}/><br/><br/>
            <button onClick={()=>this.submit()}>submit</button>
        </div>)
    }
}

export default Form;