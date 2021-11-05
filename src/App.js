
import './App.css';
import Useremail from './useremail';
import{Routes,Route} from "react-router-dom"
import Resetpassword from './resetpassword';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Useremail />} />
      <Route path="/passwordreset" element={<Resetpassword />} />
      
      </Routes>
    </div>
  );
}

export default App;
