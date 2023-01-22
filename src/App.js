import Home from './Home'
import Signin from './Signin';
import Msignin from './Msignin'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/M" element={<Msignin/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path='*' element={<Navigate to="/M"></Navigate>}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
