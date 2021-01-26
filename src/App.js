// import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '홍길동',
  'birthday' : '990419',
  'gender' : '남성',
  'job' : '대학생'  
 },
 {
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '김신',
  'birthday' : '970709',
  'gender' : '남성',
  'job' : '프로그래머'  
 },
 {
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '김영희',
  'birthday' : '920719',
  'gender' : '여자',
  'job' : '직장인'  
 }
]

function App() {
  return (
      <div>
        {customers.map(c => { return ( <Customer key = {c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />);})}
      </div>
  );
}

export default App;
