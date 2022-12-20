import React, { useEffect, useState } from 'react'

const DetailPage = () => {
    const [datas, setDatas]= useState([])
    const getData = ()=>{
       fetch("http://localhost:8080/users",{
        method: "GET"
      })
      .then((res)=>res.json())  
      .then((res)=> setDatas(res)) 
      .catch((err)=> console.log(err))
    }
  
    useEffect(()=>{
      getData()
    },[]) 
  
  return (
    <div>
      <h3>User Details</h3>
      {datas.length>0 &&
          datas.map((element)=>{
            return (
                <div key={element.id} style={{display:"flex",border:"1px solid red"}}  >
                    <img src={element.picture}/>
                    <h >{element.name}</h>
                </div>   
            )
          })
      }
    </div>
  )
}
export default DetailPage
