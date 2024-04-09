
import {BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Blogdetails from './blogdetails';
import Navbar from './nav';
import Home from './bloglisthome';
import Create from './entryform';



function App() {
 
  return (
    <Router>
    <div className="App">
    <Navbar/>
    <div className="content">

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/travel-planner" element={<Home />} />
    <Route path="/create" element={<Create/>}/>
    <Route path="/blogs/:id" element={<Blogdetails/>}/>

    </Routes>



    </div>

    </div>
    </Router>

  )
}

export default App
