import React, { useState } from 'react'
import '../App.css'
import next from "./arrow.png"
export const Todo = () => {
    const [todo, setTodo] = useState([])
    const [complete, setComplete] = useState([])
    const [text, setText] = useState('')

    const addTodo = ()=> {
        setTodo([...todo, text])
        setText('')
    };

    const move = (idx) => {
        let list = [...todo]
        setComplete([...complete, list.splice(idx, 1)])
        setTodo(list)
    };

    const reverse = (idx) => {
        let list = [...complete]
        setTodo([...todo, list.splice(idx, 1)])
        setComplete(list)
    };

    const deleted = (idx) => {
        let list = [...complete]
        list.splice(idx, 1)
        setComplete(list)
    }

    const edit = (idx) => {
        let list = [...todo]
        let editText = prompt("edit your text")

        if (editText === null || editText === undefined || editText === false){
            return null
        } else { 
        list.splice(idx,1, editText) 
        setTodo(list)
    }
}
        return (
            <div style={{margin: "50px auto", display: "grid", gridTemplateColumns: "50% 50%", width: "600px", justifyContent:"center", gridColumnGap: "10px", height: "400px"}}>
                <div style={{display: "flex", justifyContent: "space-between", flexDirection: "column", width:"100%", backgroundColor:"white"}}>
                    <div>
                        <h3 style={{width:"100%", backgroundColor:"gray"}}>todoList </h3>
                        <ul style={{listStyle: "none", color: "black"}} className="todoList">
                            {todo.map((ele, idx) => <li> <span onClick={() => edit(idx)}> {ele} </span><img src={next} className="next" style={{width: "20px", position:"relative", top: "5px"}} onClick={() => move(idx)} /></li>)}
                        </ul>
                    </div>
                    <div>
                        <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/> <button onClick={text.length > 0 && addTodo }>add</button>
                    </div>
                </div>
                <div style={{backgroundColor:"wheat", height: "100%", width:"100%"}} >
                    <h3 style={{width: "100%", backgroundColor: "gray"}}> complete </h3>
                    <ul style={{listStyle:"none", color: "black"}} className="todoList">
                        {complete.map((ele, idx) => <li ><span onClick={()=> reverse(idx)}>{ele} </span>  <input type="button" onClick={()=> deleted(idx)} className="del" value="X"/></li> )}
                    </ul>
                </div>
            </div>
        )
}
