import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [lotto, setLotto]=useState([]);
  
  function 번호생성함수() {
    let 여섯개수 = [];
    let 랜덤수 = 0; 
    
    while(여섯개수.length < 6) {   //배열안의 값이 6개 채워질동안 돈다
      랜덤수 = Math.floor(Math.random()*45+1);   //1~45까지의 랜덤수가 만들어짐
      if(!여섯개수.includes(랜덤수)){   //배열안에 중복되는 값이 없다면
        여섯개수.push(랜덤수);          //배열안에 값을 입력시켜라
      }
    }
    
    let 오름차순여섯개수 = [...여섯개수];
    오름차순여섯개수 = 오름차순여섯개수.sort((a,b)=>a-b); 


    setLotto(오름차순여섯개수); //유즈스테이트 함수에 넣어 로또변수 배열에 넣음
  }

  useEffect( ()=>{
    번호생성함수();
  },[]);

 
  return (
    <div className="App">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt='Lotto 번호생성기' />
      </div>
      
      <div className='main'>
        <h1>{lotto.toLocaleString()}</h1>
        <button className="btn" onClick={()=>번호생성함수()}>
          행운의 번호여, 나에게 오라!
        </button>  
      </div>
    </div>
  );
};

export default App;