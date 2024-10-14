import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Layout from './views/home/layout';
import Addcategorie from './views/home/categorie/addcategorie';
import Home from './views/home/home';
import Listcategorie from './views/home/categorie/listcategorie';
import Addcolocation from './views/home/colocation/addcolocation';
import Listcolocation from './views/home/colocation/listercolocation';
import Addannonce from './views/home/annonce/addannonce';
import Updatecategorie from './views/home/categorie/updatecategorie';
import Listerannonce from './views/home/annonce/listerannonce';
import Updateannonce from './views/home/annonce/updateannonce';
import Addcontrat from './views/home/contrat/addcontrat';
import Listcontrat from './views/home/contrat/listercontrat';
import Login from './views/login';
import Register from './views/register';
import { Navigate } from 'react-router-dom';
import Forget from './views/forget';
import Reset from './views/reset';
function App() {
  const PrivateRoute=({children})=>{
    if(!localStorage.getItem('user')){
      return <Navigate to="/login"></Navigate>
    }
    return children
  }
  return (
   <Router>
    <Routes>
      <Route path="/" element={<PrivateRoute><Home/></PrivateRoute> }>
      <Route path="/" element={<Layout/>} />
      <Route path="/add" element={<Addcategorie/>} />
      <Route path="/liste" element={<Listcategorie/>}/> 
      <Route path="/addco" element={<Addcolocation/>} />
      <Route path="/listeco" element={<Listcolocation/>}/> 
      <Route path="/listann" element={<Listerannonce/>}/> 
      <Route path="/addann" element={<Addannonce/>} />
      <Route path="/updateAnn/:id" element={<Updateannonce/>} />
      <Route path="/updatecateg/:id" element={<Updatecategorie/>} />
      <Route path="/addcon" element={<Addcontrat/>} />
      <Route path="/listcon" element={<Listcontrat/>} />
    </Route>
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/forget" element={<Forget/>} />
      <Route path="/user/:token" element={<Reset/>} />
    </Routes>
   </Router>
  );
}

export default App;
