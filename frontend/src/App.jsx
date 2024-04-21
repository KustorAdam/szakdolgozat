import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/Login/LoginForm';
import Menus from './components/Menu/Menus';

import AdminPage from './pages/AdminPage/AdminPage';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginForm />}/>
          <Route path="/menu" element={<Menus />} />
          <Route path='/home' element={<MainPage />} />
          <Route path='/adminpage' element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
