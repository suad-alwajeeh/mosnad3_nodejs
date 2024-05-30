import { Routes, Route,BrowserRouter } from "react-router-dom"
 
 import Register from "./pages/Register";
 import Login from "./pages/Login";
 import Layout from "./pages/Layout";
import Home from "./pages/Home";
 import Dashboard from "./pages/Dashboard";
import Edit from "./pages/test";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
             <Route path="/" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
         </Routes>
        </BrowserRouter> 
      </div>
  );
}

export default App;
