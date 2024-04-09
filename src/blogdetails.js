import { useParams } from "react-router-dom"
import Reusable from "./reusablehook";
import {useNavigate } from "react-router-dom"
const Blogdetails = () => {
    const {id} = useParams();
    const {blogs:blogger, error, ispending} = Reusable('http://localhost:3000/blogs/' + id)
    const history = useNavigate();

    const handleClick = () =>{
        fetch('http://localhost:3000/blogs/' + blogger.id,{
                method:'DELETE'
                
        }).then(()=>{
            history('/')
        })
    }

    return ( 
        <div className="blog-details">
        {ispending && <div>Loading........</div>}
        {error && <div>{error}</div>}
        {blogger && <div>
            <article>
            <h2>Name: {blogger.name}</h2>
                <p><b>Phone: </b>{blogger.phone}</p>
                <p><b>Email: </b>{blogger.email}</p>
                <p><b>Destination: </b>{blogger.destination}</p>
                <p><b>Date: </b>{blogger.traveldate}</p>
                <p><b>No of People: </b>{blogger.travel}</p>
                <p><b>Accomodation: </b>{blogger.accomodation}</p>
                <p><b>Interest: </b>{blogger.interest}</p>
                <p><b>Requirement: </b>{blogger.requirement}</p>
                <p><b>Comment: </b>{blogger.comment}</p>
                <p>written by {blogger.name}</p>
            </article>
            
            <button onClick={handleClick}>Delete</button>
            </div>}
        </div>
    );
}
 
export default Blogdetails;