import { useState, useEffect } from "react";

const Reusable = (url) => {
    
    const [blogs, setBlogs]=useState(null);
const [ispending, setpending]=useState(true);
const [error, seterror]=useState(null)

useEffect(()=>{
setTimeout(()=>{
    fetch(url)
    .then(respond =>{
        if(!respond.ok){
            throw Error('could not find the file')
        }
        return respond.json();
    })
    .then(data =>{
        setBlogs(data)
        setpending(false);
        seterror(null)
    })
    .catch(err =>{
        seterror(err.message)
        setpending(false);
    })
}, 1000)
}, [url])
    
    
    return {blogs, ispending, error}
}
 
export default Reusable;