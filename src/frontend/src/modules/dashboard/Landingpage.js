import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Landingpage() {
    const [searchText, setSearchText] = useState('');
const [filteredData, setFilteredData] = useState([]);
    const [mydata, setdata] = useState([]);


    const mygetalldata =async () => {
       var res=await axios.get('https://studentdatadashboard.onrender.com/getdata').then((res) => {
            console.log(res.data);
            setdata(res.data);
            
        })

    }
    useEffect(() => {
        mygetalldata();
    }, []);
    const sortAlphabetically = () => {
        const sortedData = [...mydata].sort((a, b) => a.name.localeCompare(b.name));
        setdata(sortedData);
      };

    const deleterecor = async(id)=>{
        await axios.delete(`https://studentdatadashboard.onrender.com/deleterecord/${id}`).then((res)=>{
            console.log(res.data);
            mygetalldata();
            });
    
      };
      const sortByDate = () => {
        const sortedData = mydata.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        setdata(sortedData);
      };
      const handleSearch = (e) => {
        setSearchText(e.target.value);
      };
      useEffect(() => {
        // Fetch the data from the API
      
        // Filter the data based on the searchText
        const filteredResults = mydata.filter((item) =>{
           if(searchText==' '){
        return item;
           }else if(item.name.toLowerCase().includes(searchText.toLowerCase()) || item.city.toLowerCase().includes(searchText.toLowerCase()) ||item.email.toLowerCase().includes(searchText.toLowerCase())|| item.state.toLowerCase().includes(searchText.toLowerCase())){
            localStorage.setItem('filters', searchText);
           return item;
           }
        }
        );
        
        setFilteredData(filteredResults);
        
      }, [searchText]);
            
      



    return (
<>

        <div className='container page border'>
            <div className='row'>
                <div className='col-12'>
                    <h1>dashboard</h1>
                    <h2>Student Details</h2>
                    <button type="button" onClick={sortAlphabetically}>A to B </button>
                    <button type="button" onClick={sortByDate}>NewArrival </button>
                </div>
            </div>
            <form class="d-flex">
            <input
      type="text"
      placeholder="Search...Name/Gmail/Number"
      value={searchText}
      onChange={handleSearch}
    />
      </form>
            <div className='row'>
                <div className='col-12'>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">MongoDBId</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Gender</th>
                                <th scope="col">City</th>
                                <th scope="col">State</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                    
                            {
                                filteredData.map((item) => {
                                return (
                                    <tr key={item._id}>
                                        <th scope="row">{item._id}</th>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.city}</td>
                                        <td>{item.state}</td>
                                
                                        <td>
                                            <Link className='btn btn-info btn-sm' to={`view/${item._id}`}>View</Link>
                                            <Link className='btn btn-warning btn-sm ms-2' to={`editrecord/${item._id}`}>Edit</Link>
                                            <button className='btn btn-danger btn-sm ms-2' onClick={()=>deleterecor(item._id)}>Del</button>
                                        </td>
                                
                                    </tr>
                                
                                )
                                
                            })}
                            

                        </tbody>
                    </table>
                </div>
           
            </div>

        </div>
        </>
    )
}

export default Landingpage