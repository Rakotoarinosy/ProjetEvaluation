import { ToastContainer } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import AdminRoute from "./routes/AdminRoute";
import AuthRoute from "./routes/AuthRoute";

function App() {
  return (
    <BrowserRouter>
        <ToastContainer position='top-center'/>
        <Routes>    
            <Route path="/*" element={<AuthRoute/>}/>
            <Route path="/admin/*" element={<AdminRoute/>}/>
            <Route path="/etudiant/*" element={<PublicRoute/>}/>
        </Routes>  
    </BrowserRouter>
  );
}

export default App;
