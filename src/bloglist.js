import { useState } from "react";
import { Link } from "react-router-dom";

const Bloglist = ({blogs, title}) => {




    return ( 
        <div className="blog-list">
                    {blogs.map((blogger)=>(
            <div className="blog-preview" key={blogger.id}>
                <Link to={`/blogs/${blogger.id}`}>
                <h3>{title}</h3>
                <h2>{blogger.name}</h2>
                <p>{blogger.phone}</p>
                <p>{blogger.destination}</p>
                    <b>Click for more....</b>
                </Link>
            </div>
        ))}
    </div>
     );
}
 
export default Bloglist;