import logo from './images.jpg';
import './App.css';
//import StartContent from './StartContent';
import React, { useState } from 'react';


function PreviuMessage({ previou}){
  return (
    <div className='Message'>{(previou==1)? <p>Bravo</p> : <p>NADA</p>}</div>
  );
}

function StartContent() {

  const [previou,Setpreviou] = useState(0);

    return (
      <div className="StartContent" onClick={()=> {(previou==1) ? Setpreviou(0) : Setpreviou(1)} }>
      <button>StartContent</button>
      <PreviuMessage previou={previou} />
      
      </div>

      
    );
}


function App() {
  //if (previou==1) return <div >Loading...</div>
  return (
    <div className="App">
    
      <header className="App-header">
      <div >
        <StartContent />
      </div>
        <img src={logo} className="App-logo" alt="logo" />
    
 
        <h1 >
          cryptography
        </h1>
      </header>
    </div>
  );
}

export default App;
