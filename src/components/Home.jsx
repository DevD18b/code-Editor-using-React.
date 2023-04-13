import Header  from "./Header";
import Code from "./Code";
import Result from "./Result";
import About from "./About";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Welcome from "./Welcome";
const Home = () =>{
    return (
 <>
 <Router>
        <Header/>
            <Routes>
               <Route exact path = "/Welcome" element = {<Welcome key = "Welcome"/>} />
                <Route path = "/playground" element={
                    <Code   key="playground"/>
                } />
                 <Route path="/about" element={<About key="about" />} />
            </Routes>
        </Router>
        <Result/>
 </>
    )
}
export default Home;