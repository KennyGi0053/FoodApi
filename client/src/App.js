import './App.css';
import { Detail, Home, Form, Landing } from './views'
import { Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';



function App() {

  const location = useLocation()
  return (
    <div className="App">
      { location.pathname !=='/' && location.pathname !== '/create' &&<NavBar />}
      
      <Route exact path='/' component={Landing} />

      <Route path='/Home' component={Home} />

      <Route path='/detail/:id' element={Detail} />
      
      <Route path='/Create' component={Form} />
    </div>
  );
}

export default App;
