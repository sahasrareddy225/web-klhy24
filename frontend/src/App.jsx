import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
import './index.css';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { HeaderMegaMenu } from './Components/Navbar/HeaderMegaMenu';
import  ProfilePage  from './Pages/Profile/ProfilePage';
import UrlShortener from './Pages/ShortUrl/UrlShortener'; 
import UrlHistory from './Pages/ShortUrl/UrlHistory'; 
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
    <Router>
        <HeaderMegaMenu/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/profile' element={<ProfilePage/>} />
            <Route path='/shorten' element={<UrlShortener/>} />
            <Route path='/history' element={<UrlHistory/>} />
            <Route element={<PrivateRoute/>}>

            </Route>
        </Routes>
    </Router>
    </MantineProvider>
  )
}

export default App
