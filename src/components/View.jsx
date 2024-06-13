import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const View = () => {
   const [data,changedata]=useState([]
)
   const fetchdata = () =>{
    axios.post("http://localhost:8000/view",data).then(
        (response)=>{
            changedata(response.data)
        }
    ).catch().finally()
   }
   useEffect(()=>{fetchdata()},[])
   
  return (
    <div>
         <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                               {data.map(
                                (value,i)=>
                                    {
                                        return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div className="card" >
                                            <img src={value.url} alt='...' height="250px"></img>
                                                <div className="card-body">
                                                    <p className="card-text">{value.aut}</p>
                                                    <p className="card-text">{value.title}</p>
                                                    <a href="url" class="btn btn-primary">{value.desc}</a>
                                                </div>
                                        </div>
                                    </div>
                                    }
                               )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View