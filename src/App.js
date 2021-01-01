import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home, About, SinglePost, Post, Project} from "./Components";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route components={Home} path='/' exact/>
        <Route components={About} path='/about'/>
        <Route components={SinglePost} path='/post/:slug'/>
        <Route components={Post} path='/post'/>
        <Route components={Project} path='/project'/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
