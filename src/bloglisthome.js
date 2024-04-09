import Bloglist from "./bloglist";

import Reusable from "./reusablehook";
const Home = () => {
const {blogs, error, ispending}= Reusable('http://localhost:3000/blogs')

    return ( 
        <div>
            
            {error && <div>{error}</div>}
            {ispending && <h6>Loading.......</h6>}
            {blogs && <Bloglist blogs={blogs} title={'Travel info card'}/>}

        </div>
     );
}
 
export default Home;