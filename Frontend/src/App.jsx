import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState(null);
  const [loading, setLoading] = useState(false);
  let getID

  const debouncing = (value) => {
    clearTimeout(getID);
    getID = setTimeout(() => {
      setLoading(true)
      axios
        .get(`https://h1backend.vercel.app/get?search=${value}`)
        .then((response) => {
          setData(response.data);
          setLoading(false)
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1500);
  };

  const handleInputChange = (e) => {
    debouncing(e.target.value);
    setSearchItem(e.target.value);
  };
  useEffect(()=>{
    if(searchItem==""){
      debouncing("")
    }
  },[searchItem])
  console.log(`debouncing data`, data)

  return (
    <>
      <h1>Search Ads</h1>
      <div>
        <input type="text" placeholder="Search here which AD you want to see..." onChange={handleInputChange} style={{width:"50%",height:"30px",margin:"0 0 20px 0"}} />
        {loading && <h2>Loading...</h2>}
        <div className="grid-container">
          {searchItem!=null && data && data.map((el) => (
            <a href={el.companyId.url} key={el._id} className="card" >
              <img src={el.imageUrl} alt={el.imageUrl} />
              <h4>Company : {el.companyId.name}</h4>
              <h3>{el.headline}</h3>
              <p>{el.primaryText}</p>
            </a>
          ))}
        </div>
          {searchItem==null && 
            <div style={{margin:"auto", width:"70%"}} >
              <p style={{fontSize:"14px", color:"gray"}} >I intentionally did not include all ADs result here directly. but if you want you can click here.
              <button onClick={()=>setSearchItem("")}>Get All</button>
              Additionally, I have implemented a debouncing technique to improve the efficiency of the search results. Furthermore, I have created a REST API using Express and Mongoose with population (Aggregation) and regex. </p>
            </div>
          }
      </div>
    </>
  )
}

export default App