import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import JoinmemberPage from './pages/JoinmemberPage'
import ViewListPage from './pages/ViewlistPage'
import EditprofilePage from './pages/EditprofilePage';
import EditpwdPage from './pages/EditpwdPage';
import WritepostPage from './pages/WritepostPage';
import EditpostPage from './pages/EditpostPage';
import PostviewPage from './pages/PostviewPage';


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
        <Route path="/editpwd" element={<EditpwdPage/>}/>
        <Route path="/writepost" element={<WritepostPage/>}/>
        <Route path="/editpost" element={<EditpostPage/>}/>
        <Route path="/postview" element={<PostviewPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
