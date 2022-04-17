import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
const Home = () => {
    const [value, setValue] = useState('')
    const[data,setData]=useState([]);
    
   

    const  navigate=useNavigate();

    const submit=(e)=>{
        e.preventDefault();
        const newEntry={value}
       
        console.log(newEntry);

        setData([...data,newEntry])
        
    }
 


    const logout= async()=>{
        console.log('apple');
        localStorage.clear();
        navigate('/login')

        let result = await fetch("http://localhost:4000/home", {
            method: "post",
            body: JSON.stringify({ time: Date.now() }),
            headers: {
              "content-Type": "application/json",
            },
          });
          result = await result.json();
           const time =Date.now( (localStorage.getItem("time")));
           console.log(time);
    }
    let  timeout =  localStorage.getItem('time')
    console.log(timeout);


    

  return (

<>


<p> </p>

<button className='btn btn-danger  float-right'  onClick={logout} type="reset">LOgOut</button>

<center>
<div className="container mt-5">
    <div className="row">
        <div className="col">
        <textarea value={value} onChange={(e)=>setValue(e.target.value)}/><br />
<button className='btn btn-primary' onClick={submit}  type='submit'>Submit</button>

        </div>
    </div>
</div>


</center>

</>
  )
}

export default Home