import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Mealinfo = () => {
    const {mealid}=useParams();
    const[info,setInfo]=useState()
    console.log(mealid)
    const getInfo=async()=>{
        const get=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData=await get.json();
        console.log(jsonData.meals[0]);
        setInfo(jsonData.meals[0]);

    }
    if(info !== ""){
        getInfo()
    }
  return (
    <>
 
    {
        !info ?"Data Not Found":
    //     <div className='mealInfo'>
    //      <img src={info.strMealThumb}/>
    //     <div className='info'>
    //     <h1>Recipe Detail</h1>
    //      <button>{info.strMeal}</button>
    //      <h3>Instruction</h3>
    //      <p>{info.strInstructions}</p>
    //     </div>
    // </div>
                 <div className="container mealInfo " >
                  
              <div className="row">
              <div>
                <h1 className="mealhead">Recipe Detail</h1>
                </div>
                   <div className="col-md-5 my-2">
                        <img src={info.strMealThumb} height={'500'} width={'400'} alt='recipes-img '/>
                   </div>
                   <div className="col-md-7 my-2 info">
                   
                    <h3>{info.strMeal}</h3>
                  
                    <h4>Instruction:</h4>
                    <p>{info.strInstructions}</p>
                  



                   </div>
              </div>
        </div> 
    }
    </>
  )
  
}

export default Mealinfo