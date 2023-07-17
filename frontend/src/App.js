
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './pages/signin';
import SignUp from "./pages/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
