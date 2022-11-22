import '../styles/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Form from '../components/form';
import Home from '../components/home';
import Cv from '../components/cv';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cv' element={<Cv />} />
        <Route path='/form' element={<Form />}/>
      </Routes>
    </Router>
  );
}

export default App;
