import React from "react";

class WillUnmount extends React.Component{
   componentWillUnmount(){
       alert("Component has been deleted")
   }
    render(){
        return(<div>
            <h1>Life Cycle Method : Component Will Unmount</h1>
            <ul>
                <li>Name : vishal</li>
                <li>Email : vishal@example.com</li>
                <li>Contact : 0665484518</li>
            </ul>
        </div>)
    }
}
export default WillUnmount;