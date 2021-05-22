import './App.css';
import Header from "./components/header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import HomePage from './components/home-page';
import ListPage from './components/list-page'
import ErrorBoundary from './ErrorBoundary';


function App() {

  return (
    <div>
    <ErrorBoundary>
    <Header />
    <Router>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/lists" component={ListPage}></Route>
    </Router>
    </ErrorBoundary>
    </div>
  );
}

export default App;
