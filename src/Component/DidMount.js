import React from "react";
class DidMount extends React.Component{
    constructor(){
        super()
        this.state={
            data:null
        }
       console.log("constructor")
    }
    componentDidMount(){
        this.setState( {data:"Updated"})
        console.log("component did mount")
        
    }
    render(){
        console.log("rendered")
        return(<div>
            <h1>Life Cycle Method : ComponentDidMount</h1>
        </div>

        )
    }
}
export default DidMount;