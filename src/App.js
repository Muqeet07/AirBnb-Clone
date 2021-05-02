import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, 
Switch,
Route} from 'react-router-dom';
import Search from './components/search/Search';

function App() {
  return (
    <Router>
    <div className="app">
          <Header />
          <div style={{display: 'flex' ,justifyContent: 'center'}}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/search" component={Search} />  
            </Switch>
          </div>
          <Footer />
    </div>
    </Router>
  );
}

export default App;
