import React, { useState } from 'react'

const Search = () => {
    const [data,setdata]=useState({
        "aut":""
    })

    const inputhandler = (event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }

    const readValue =()=>{
        console.log(data)
        axios.post("http://localhost:8000/search",data).then((response)=>{
            setresult(response.data)
        }).catch((error)=>{
            console.log(error.message)
            alert(error.message)

        })
    }

    const deletenews = (id)=>{
        let input ={"_id":id}
        axios.post("http://localhost:8000/delete",input).then(
            (response)=>{
                if(response.data.status == "deleted"){
                    alert("DELETED SUCCESSFULLY")
                }
                else{
                    alert("ERROR")
                }
            }
        ).catch().finally()   
    }

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label"><b>AUTHOR</b></label>
                            <input type="text" className="form-control" name='aut' value={data.aut} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>SEARCH</button>
                        </div>
                    </div>
                    <div className="row g-3">
                        {result.map(
                            (value, i) => {
                                return <div className="col col-12 col sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <div class="card" >
                                        <img src={value.url} class="card-img-top" alt="..." height="250px"></img>
                                        <div class="card-body">
                                            <h5 class="card-title">{value.aut}</h5>
                                            <p class="card-text">{value.title}</p>
                                            <a href="#" class="btn btn-primary">{value.desc}</a>
                                            <br>
                                            </br>
                                            <br>
                                            </br>
                                            <button className="btn btn-danger" onClick={()=>{deleterecipe(value._id)}}>DELETE</button>
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

export default Search