import React from 'react'
import {TodoItem} from "./TodoItem"

export const Todos = (props) => {
    const divStyle={
        width:"750px"
    }
    return (
        <div className="container" style={divStyle}>
            <h3 className="my-4">Todos List</h3>
            {/* <TodoItem todo={props.todos[1]}/> */}
            {props.todos.length===0?"No Todos Yet to Display":
            props.todos.map((todo) => {
           return (
               <>
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
              </>)
            })
       }  
           
        </div>
    )
}
