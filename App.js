import Navbar from './Navbar'
import Home from './Home'
import NotFound from './NotFound';
import Create from './Create';
import Bookmarks from './Bookmarks';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import EditPage from './EditPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/create">
              <Create/>
            </Route>
            <Route exact path="/editPage/:id">
              <EditPage/>
            </Route>
            <Route exact path="/bookmarks">
              <Bookmarks/>
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
