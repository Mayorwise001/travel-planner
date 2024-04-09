import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom"

const Create = () => {
    const [name, setname] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [destination, setdestination] = useState('');
    const [travel, settravel] = useState('');
    const [traveldate, settraveldate] = useState('');
    const [accomodation, setaccomodate] = useState('');
    const [interest, setinterest] = useState('');
    const [requirement, setrequire] = useState('');
    const [comment, setcomment] = useState('');
    const [ispending, setispending] = useState(false);
    const history = useNavigate()
    const [showForm, setShowForm] = useState(false);

    useEffect(() =>{
        //Delay for 1000 milli seconds (1 second)
        const delay = 1000;

        const timer = setTimeout(()=>{
            setShowForm(true);
        }, delay);
        // Clear the timer if the component unmounts or the effect re-runs
        return () => clearTimeout(timer);
       }, []); // This effect runs only once after the initial render


    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = { name,phone,email,destination,travel,traveldate,accomodation,interest,requirement,comment};
        setispending(true)
        fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('a new blog added')
            setispending(false)
            history('/')
            
        })
    }
    return (
        <div className="create">
             {!showForm && <h6>Loading...</h6>}
            
            {showForm && (<form onSubmit={handleSubmit}>
                <h2>Add a new Travel Card</h2>
                <label>Name:</label>
                <input type="text"
                required
                value={name}
                onChange={(e)=>setname(e.target.value)}
                />

                <label>Phone No:</label>
                <input
                required
                type="phone"
                value={phone}
                onChange={(e)=>setphone(e.target.value)}>
                    
                </input>

                <label >Email:</label>
                <input
                type="email"
                value={email}
                onChange={(e)=>setemail(e.target.value)}>
                
                </input>
                <label >Destination:</label>
                <input
                type="text"
                value={destination}
                onChange={(e)=>setdestination(e.target.value)}>
                
                </input>
                <label >No of travellers:</label>
                <input
                type="number"
                value={travel}
                onChange={(e)=>settravel(e.target.value)}>
                
                </input>
                <label >Travel date:</label>
                <input
                type="date"
                value={traveldate}
                onChange={(e)=>settraveldate(e.target.value)}>
                
                </input>
                <label >What Type of Accomodation do you need:</label>
                <select
                type="text"
                value={accomodation}
                onChange={(e)=>setaccomodate(e.target.value)}>

                <option value="Duplex" selected="true">Select</option>
                <option value="Duplex">Duplex</option>
                <option value="Bongalow">Bongalow</option>
                <option value="camp tent">Camp Tent</option>
                </select>
                <label >What is your interest:</label>
                <input
                type="text"
                value={interest}
                onChange={(e)=>setinterest(e.target.value)}>
                
                </input>
                <label >What will you be requiring:</label>
                <input
                type="text"
                value={requirement}
                onChange={(e)=>setrequire(e.target.value)}>
                
                </input>
                <label>More Info:</label>
                <textarea
                type="text"
                value={comment}
                onChange={(e)=>setcomment(e.target.value)}>
                
                </textarea>
                {!ispending && <button>Add Traveller</button>}
                {ispending && <button disabled >Adding Traveller......</button>}
            </form>
)}
        </div>
    )
}

export default Create;