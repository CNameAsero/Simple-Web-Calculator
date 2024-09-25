import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

export function Calculator() {
  const [num, setNum] = useState("");

  function numDisp(e) {
    const targetNum = num + e.target.value;
    setNum(targetNum);
  }

  function deletePrev() {
    const delNum = num;
    const removed = delNum.slice(0, -1)
    setNum(removed);
  }

  function deleteAll() {
    setNum("");
  }

  function finalValue() {
    const processedNum = num.replace(/×/g, '*').replace(/÷/g, '/');
    setNum(eval(processedNum));
  }

  return (
    <div className='container'>
      <div className="calcCont">
        <form>
          <div className='calcScreen'>
            <input type="text" name="display" defaultValue={num}/>
          </div>
          <div>
            <input type="button" value="AC" onClick={() => deleteAll()}/>
            <input type="button" value="%" onClick={(e) => numDisp(e)}/>
            <input type="button" value="Del" onClick={() => deletePrev()}/>
            <input type="button" value="&divide;" onClick={(e) => numDisp(e)}/>
          </div>
          <div>
            <input type="button" value="7" onClick={(e) => numDisp(e)}/>
            <input type="button" value="8" onClick={(e) => numDisp(e)}/>
            <input type="button" value="9" onClick={(e) => numDisp(e)}/>
            <input type="button" value="&times;" onClick={(e) => numDisp(e)}/>
          </div>
          <div>
            <input type="button" value="4" onClick={(e) => numDisp(e)}/>
            <input type="button" value="5" onClick={(e) => numDisp(e)}/>
            <input type="button" value="6" onClick={(e) => numDisp(e)}/>
            <input type="button" value="&#45;" onClick={(e) => numDisp(e)}/>
          </div>
          <div>
            <input type="button" value="1" onClick={(e) => numDisp(e)}/>
            <input type="button" value="2" onClick={(e) => numDisp(e)}/>
            <input type="button" value="3" onClick={(e) => numDisp(e)}/>
            <input type="button" value="&#43;" onClick={(e) => numDisp(e)}/>
          </div>
          <div>
            <input type="button" value="0" onClick={(e) => numDisp(e)}/>
            <input type="button" value="." onClick={(e) => numDisp(e)}/>
            <input type="button" value="&#61;" className='equals' onClick={() => finalValue()}/>
          </div>
        </form>
      </div>
    </div>
  );
}

