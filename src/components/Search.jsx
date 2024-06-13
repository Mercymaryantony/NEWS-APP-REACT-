import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Search = () => {
    const [data, setData] = useState({
        "aut": ""
    })
    const inputhandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const [result, setresult] = useState([])//create a varible for storing result and then create corresponding ui


    const deletenews = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8000/delete", input).then(
            (response) => {
                if (response.data.status == "deleted") {
                    alert("DELETED SUCCESSFULLY")
                }
                else {
                    alert("ERROR")
                }
            }
        ).catch().finally()
    }

    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8000/search", data).then((response) => {
            setresult(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error.message)
            alert(error.message)

        })


    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">AUTHOR</label>
                                <input type="text" className="form-control" name='aut' value={data.aut} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>SEARCH</button>
                            </div>
                        </div>
                    </div>

                    <div className="row g-3">
                       {result.map(
                        (value,i)=>{
                            return <div class="card" >
                            <img src={value.url} class="card-img-top" alt="..." height="250px"></img>
                            <div class="card-body">
                                <h5 class="card-title">{value.aut}</h5>
                                <p class="card-text">{value.title}</p>
                                
                            
                                <button className="btn btn-danger" onClick={() => {deletenews(value._id) }}>DELETE</button>
                            </div>
                        </div>
                        }
                       )}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Search