
import React from "react"
class FormV extends React.Component {
    constructor() {
        super()
        this.state = {
            name: null,
            password: null,
            nameErr: null,
            passwordErr: null
        }
    }
    valid() {
        if (!this.state.name.includes("@") && this.state.password.length < 5) {
            this.setState({ nameErr: "Invalid Name", passwordErr: "password length should be greater than 5" })
        } else if (!this.state.name.includes("@") ){
            this.setState({ nameErr: "Invalid Name" })
        } else if ( this.state.password.length<5){ 
            this.setState({passwordErr:"password length should be greater than 5"})
    }else{
        return true
    }
    }
    submit() {
        this.setState({ nameErr: "", passwordErr: "" })
        if (this.valid()) {
            console.log("submit")
        }
    }
    render() {
        return (<div>
            <h1>F Validation</h1>
            <input type="text" onChange={(event) => { this.setState({ name: event.target.value }) }} />
            <p style={{ color: "red" }}>{this.state.nameErr}</p>
            <input type="password" onChange={(event) => { this.setState({ password: event.target.value }) }} />
            <p style={{ color: "red" }}>{this.state.passwordErr}</p>
            <button onClick={() => this.submit()}>Submit</button>

        </div>)
    }
}
export default FormV;