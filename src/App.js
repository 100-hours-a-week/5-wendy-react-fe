import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import JoinmemberPage from './pages/JoinmemberPage'
import ViewListPage from './pages/ViewlistPage'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/joinmember" element={<JoinmemberPage/>}/>
        <Route path="/viewlist" element={<ViewListPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
