import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// const allData = [
//   {name:'Laptop',Price:92000},
//   {name:'Phone',Price:15000},
//   {name:'Tab',Price:51000},
//   {name:'Watch',Price:9000},
//   {name:'HeadPhone',Price:5000},
//   {name:'Mouse',Price:2000},
// ]

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}

      <ExternalUser></ExternalUser>

    </div>
  );
}

function ExternalUser(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=>setUsers(data))
  },[])
  return (
    <div>
      <h2>External User</h2><br/>
      <p>{users.length}</p>
      {
        users.map(user=> <User name ={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props){
  return (
    <div style={{border: '5px solid red', margin:'20px'}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

function Counter(){
  const[count , SetCount] = useState(33);
  const increaseCount = ()=>SetCount(count+1);
  const decreaseCount = ()=>SetCount(count-1);
  return (
    <div>
      <h1>
       Count:{count}
      </h1>
      <button onClick={increaseCount}>
        Increase
      </button>
      <button onClick={decreaseCount}>
        Decrease
      </button>
    </div>
  )
}


// {
//   allData.map(data=><Devises name={data.name} Price={data.Price}></Devises>)
//  }

// function Devises(props){
//   return (
//     <div className='container'>
//       <h1>{props.name}</h1>
//       <p>{props.Price}</p>
//     </div>
//   )
// }

export default App;
