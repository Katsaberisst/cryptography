import React, { useState } from 'react';


function PreviuMessage({ previou}){
  return (
    <div className='Message'>{(previou==1)? <p>Bravo</p> : <p>NADA</p>}</div>
  )
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
export default StartContent;