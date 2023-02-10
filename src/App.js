import logo from './logo.svg';
import './App.css';
import Button from './Button';
import { useState } from 'react';


let cars = ["Bmw", "Jeep", "Audi"]

let listitem = [
  {
    id: 1,
    name: "gio"
  },
  {
    id: 2,
    name: "luka"
  }, 
  {
    id: 3,
    name: "nika"
  }
]

// const [todo, setTodo] = useState(listitem)
// console.log(todo)


function App() {
  const [count, setCount] = useState(listitem);

  
  function ondelete(itemid){
    setCount(count.filter((item)=> item.id !== itemid

       
      // console.log("item.id" +item.id)
      // console.log("itemid" + itemid)
    
    ))
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Hello</h1>
        {
          cars.map(item => <Button name={item} />)
        }


        <ul>
          {
            count.map(item=> 
                <li> 
                  {item.name} 

                  <button onClick={()=> ondelete(item.id)}>delete</button>
                
                </li>
            )
            
          }
        </ul>


      </header>
    </div>
  );
}

export default App;
