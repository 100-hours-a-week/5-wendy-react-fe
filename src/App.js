import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import JoinmemberPage from './pages/JoinmemberPage'
import ViewListPage from './pages/ViewlistPage'
import EditprofilePage from './pages/EditprofilePage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/joinmember" element={<JoinmemberPage/>}/>
        <Route path="/viewlist" element={<ViewListPage/>}/>
        <Route path="/editprofile" element={<EditprofilePage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
