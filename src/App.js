import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Components/Home";
import SinglePost from "./Components/SinglePost";
import Post from "./Components/Post";
import Project from "./Components/Project";
import NavBar from "./Components/NavBar";
import Resume from "./Components/Resume"

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={SinglePost} path='/post/:slug'/>
        <Route component={Post} path='/post'/>
        <Route component={Project} path='/project'/>
        <Route component={Resume} path='/resume'/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
