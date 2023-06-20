import React from 'react'
import { useState,useEffect } from 'react'

const Todo = () => {
    const [todos,setTodos]=useState([])
    const [text,setText]=useState()
    const [page,setPage]=useState(1);
    useEffect(()=>{
        getData();
    },[page]);

    const getData=()=>{
        fetch(`http://localhost:8888/todos?_page=${page}&_limit=5`)
          .then(d=>d.json())
          .then((data)=>{
            console.log("todos",data)
            setTodos(data)
        })
    }
    return (
        <div>
            <input onChange={(e)=>setText(e.target.value)} type="text" placeholder='Enter todo' />
            <button onClick={()=>{
                const payload={
                    title:text,
                    status:false
                };
                fetch("http://localhost:8888/todos",{
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(payload)
                }).then(()=>{
                    getData();
                })
            }}>Add todo</button>
            {
                todos.map(t=>{
                    // console.log(t);
                    // <div>{t.title}</div>
                    return <div>{t.id}. {t.title}</div>
                })
            }
            <button onClick={()=>{
                setPage(page-1);
            }}>Prev</button>
            <button onClick={()=>{
                setPage(page+1);
            }}>Next</button>
        </div>
    )
}

export default Todo