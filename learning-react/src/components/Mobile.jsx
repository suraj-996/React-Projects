import React from 'react'
import "./style.css";
const data=[
    {
        operator:"Operating System",
        mobile:
        [
            {
                name:"Android",
                style:"circled"
            },
            {
                name:"Blackberry",
                style:"circled"
            },
            {
                name:"Iphone",
                style:"circled"
            },
            {
                name:"Windows Phone",
                style:"circled"
            }
        ]
    },
    {
        operator:"Manufacturers",
        mobile:[
            {
                name:"Samsung",
                style:"squared",
            },
            {
                name:"HTC",
                style:"squared",
            },
            {
                name:"Micromax",
                style:"circled",
            },
            {
                name:"Apple",
                style:"circle",
            }
        ]
    }
]

data.map((el)=>{
    console.log(el.operator);
    el.mobile.map((e)=>{
        console.log(e.name);
    })
})
// console.log(ans);
const Design=()=>{
    return (
        <div>
            {
                data.map((el)=>(
                    <>
                    <h1>Mobile {el.operator}</h1>
                    {
                        el.mobile.map((e)=>(
                            <ul><li className={e.style}>{e.name}</li></ul>
                            
                        ))
                    }
                    </>
                ))
            }
        </div>
    )
}
const Mobile = () => {
  return (
    <div className='App'>
        <Design/>
    </div>
  )
}

export default Mobile