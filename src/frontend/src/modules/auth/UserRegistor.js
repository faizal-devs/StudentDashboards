import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import img from '/' ;
function UserRegistor() {
    
    const [sv, sf] = useState({
        name: "",
        email: "",
        gender: "",
        sources: "",
        phone: "",
        city: "",
        state: "",
        pass: "",
    });

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        sf((preval) => {
            return {
                ...preval,
                [name]: value,
            
            }
        })
    }

    const mysubmit = async () => {
        if (sv.name === "" || sv.email === "" || sv.pass === "") {
            alert("please fill forms");
        }
        else {
            const { name, email, phone, city, gender, pass,sources,state } = sv;
            const res = await fetch("http://localhost:7800/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name, email, phone, city, gender, pass,sources,state
                })
            })
            const data = await res.json();
            console.log(data);
            window.location.href = "/";

        }

    }



    return (
        <div className='container page'>
            <div className='row justify-content-center' style={{'backgroundColor': "azure"}} >
                
                <div className='col-6'>
                    <div className='container-fluid shadow p-5 rounded-2' style={{'backgroundColor': "#ffe57c75" }}>
                        <div className='row border'>
                        <div className='col-12 text-center p-3'>
                    <p className='h1'>User Registor Page</p>
                </div>
                            </div>
                            <div className='col-md-5 p-2'>
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" pattern="[A-Za-z]+" value={sv.name} onChange={setdata}  required/>
                            </div>
                            <div className='col-md-5 p-2'>
                                <label className="form-label">Email Id</label>
                                <input type="email" className="form-control" name="email" pattern="[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}" value={sv.email} onChange={setdata} required />
                            </div>
                            <div className='col-md-5 p-2'>
                                <label className="form-label">Gender</label>
                                <select className='form-control' name='gender' value={sv.gender} onChange={setdata}>
                                <option>Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
 
                                
                            <label>How did you hear about this?</label><br></br>
                            <input type="checkbox" id="linkedin" name="sources" value="LinkedIn" />
                            <label for="linkedin">LinkedIn</label>
                            <input type="checkbox" id="friends" name="sources" value="Friends" />
                            <label for="friends">Friends</label>
                            <input type="checkbox" id="jobPortal" name="sources" value="Job Portal" />
                            <label for="jobPortal">Job Portal</label>
                            <input type="checkbox" id="othersSource" name="sources" value="Others" />

                            <div className='col-md-5 p-2'>
                                <label className="form-label">Phone No</label>
                                <input type="number" className="form-control" name='phone' value={sv.phone} onChange={setdata} pattern="[0-9]+" required/>
                            </div>
                            <div className='col-md-5 p-2'>
                                <label className="form-label">Password</label>
                                <input type="text" className="form-control" name="pass" value={sv.pass} onChange={setdata} />
                            </div>


                            <label for="city">City:</label>
                            <select id="city" name="city"  value={sv.city} onChange={setdata}>
                            <option value="Empty">Select city</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Pune">Pune</option>
                                <option value="Ahmedabad">Ahmedabad</option>
                            </select>

                            <label for="state">States:</label>
                            <select id="state" name="state"  value={sv.state} onChange={setdata}>
                            <option value="Empty">Select city</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Karnataka">Karnataka</option>
                                
                            </select>


                           
                            <div className='col-12 p-3 text-center'>
                                <button className='btn btn-primary' onClick={mysubmit}>Registor user</button>
                                <Link className='btn ms-3' to="/">login</Link>
                            </div>

                            </div>
              
                            </div>
                    </div>
                </div>

            
    )
}

export default UserRegistor