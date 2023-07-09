
import './App.css';
import DidMount from './Component/DidMount';
import DidUpdate from './Component/DidUpdate';
import WillUnmount from './Component/WillMount';
import React,{useState} from 'react';
import UseEff from './Component/UseEffect';
import Form from './Component/Form';
import FormV from './Component/FormV';
import ListingWMap from './Component/ListingMap';
function App() {
  const [toggle,setToggle]=useState(true)
  return (
    <div className="App">
     <h1>hello!</h1>
     <ListingWMap/>
     <hr/>
     <FormV/>
     <hr/>
     <Form/>
     <hr/>
     <DidMount/>
     <hr/>
     <DidUpdate/>
     <hr/>
     {
       toggle?
       <WillUnmount />:null
     }
     <button onClick={()=>setToggle(!toggle)}>Delete </button>
     <hr/>
     <UseEff/>
    </div>
  );
}

export default App;
