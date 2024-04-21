import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/Login/LoginForm';
import Menus from './components/Menu/Menus';

import AdminPage from './pages/AdminPage/AdminPage';
import MainPage from './pages/MainPage/MainPage';
import Profil from './components/Profil/Profil';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginForm />}/>
          <Route path="/menu" element={<Menus />} />
          <Route path='/home' element={<MainPage />} />
          <Route path='/profil' element={<Profil />} />
          <Route path='/adminpage' element={<AdminPage />} />'
      </Routes>
    </BrowserRouter>
  )
}
export default App;
