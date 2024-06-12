import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Add = () => {
    const[data,setdata]=useState({
        "aut":"",
    "title":"",
    "desc":"",
    "url":""
    })
    const inputhandler = (event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }
    const readValue = ()=>{
        axios.post("http://localhost:8000/add",data).then(
            
            (response)=>{
                if(response.data.status=="added"){
                    alert("SUCCESS")
                }
                else{
                    alert("FAILED")
                }
            }
        ).catch().finally()
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>AUTHOR</b></label>
                            <input type="'text'" className="form-control"name='aut' value={data.aut} onChange={inputhandler}/>
                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>TITLE</b></label>
                            <input type="text" className="form-control" name='title' value={data.title} onChange={inputhandler} />
                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>DESCRIPTION</b></label>
                            <textarea name="desc" value={data.desc} onChange={inputhandler}  id="" className="form-control"></textarea>
                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>IMAGE</b></label>
                            <textarea name="url" value={data.url} onChange={inputhandler} id="" className="form-control"></textarea>
                        </div>
                        <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary" onClick={readValue}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add