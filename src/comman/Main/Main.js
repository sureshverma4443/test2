

import React, { useState } from 'react'

const Main = () => {


    const [inputfield1, setInputfield1] = useState(''); 
  const [inputfield2, setInputfield2] = useState(''); 

 
  const moveToInput2 = () => {
    setInputfield2(inputfield1); 
    setInputfield1(''); 
  };

  
  const moveToInput1 = () => {
    setInputfield1(inputfield2); 
    setInputfield2(''); 
  };




  return (
    <div className=' d-flex flex-row m-5 justify-content-around '>
      <div className='d-flex flex-column p-2 w-50'><input  value={inputfield1} onChange={(e) => setInputfield1(e.target.value)}></input><div className='d-flex justify-content-end mt-2'><button className="btn btn-secondary" onClick={moveToInput2}>Move to 2</button></div></div>
      <div className='d-flex flex-column p-2 w-50'><input value={inputfield2}onChange={(e) => setInputfield2(e.target.value)}></input><div className='d-flex mt-2'><button className="btn btn-secondary"onClick={moveToInput1}>Move to 1</button></div></div>
    </div>
  )
}

export default Main
