import React, { useState } from 'react'
import Mealcards from './Mealcards'

const Mainpage = () => { 
    const[data,setData]=useState()
    const[search, setSearch]=useState("veg")
    const[msg,setMsg]=useState("")
    const myFun=async()=>{
        if(search==""){
           setMsg("Please enter the recipe name")
        }
        else{
            const get=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const jsonData=await get.json();
           // console.log(jsonData.meals);
            setData(jsonData.meals)
            setMsg("")
        }
       
    }
    const searchValue=(event)=>{
        setSearch(event.target.value);
    }
    // console.log(data)
  return (
    <div>
        <h1 className='head'>Food Recipe App</h1>
        <div className='container'>
            <div className='searchBar'>
                <input type="text" placeholder='Enter Dishe' onChange={searchValue} value={search}/>
                <button onClick={myFun}>Search</button>
            </div>
            <h4 className='msg'>{msg}</h4>
            <div>
            <Mealcards detail={data}/>
            </div>

        </div>

    </div>
  )
}

export default Mainpage