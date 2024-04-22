import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/Login/LoginForm';
import ThisWeek from './components/Menus/ThisWeek';
import NextWeek from './components/Menus/NextWeek';

import AdminPage from './pages/AdminPage/AdminPage';
import MainPage from './pages/MainPage/MainPage';
import Profil from './components/Profil/Profil';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginForm />}/>
          <Route path="/thisweek" element={<ThisWeek />} />
          <Route path='/profil' element={<Profil />} />
          <Route path='/adminpage' element={<AdminPage />} />
          <Route path='/nextweek' element={<NextWeek />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
