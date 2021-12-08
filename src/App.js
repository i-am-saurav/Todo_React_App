// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import React,{useState} from 'react';
import { AddTodo } from './MyComponents/AddTodo';

function App() {
  
  const[todos,setTodos] =useState([
    {
      sno:1,
      title:"Go to the Market",
      desc:"Get this Job Done"
  },
  {
    sno:2,
    title:"Go to the gym",
    desc:"Get this Job Done2"
},
{
  sno:3,
  title:"Go to the Ghat",
  desc:"Get this Job Done3"
}
])
const onDelete=(todo)=>{
  console.log("I am onDelete");
  setTodos(todos.filter((e)=>{
    return e!==todo;
  }));
}

const addTodo=(title,desc)=>{
  console.log("I am adding this todo", title, desc)
  let sno;
  if(todos.length==0){
    sno=0;
  }
  else{
  let sno=todos[todos.length-1].sno+1;
  }
  const myTodo={
    sno:sno,
    title:title,
    desc:desc
  }
  setTodos([...todos,myTodo])
  console.log(myTodo);
}
  return (
    <div>
      <Header title="My Todos List"/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
