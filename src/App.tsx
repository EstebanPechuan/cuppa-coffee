// import logo from './assets/Copy of Cuppa logo-01 (1).png'
import './App.css'
import { useTranslation } from 'react-i18next';
import './modules/i18n.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home.js';
import LandingRoute from './displayRoutes/LandingRoute.js';
import AboutUs from './pages/aboutUs/AboutUs.js';
import Contact from './pages/contact/Contact.js';

function App() {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<LandingRoute>
            {/* {t('Home.Title')} */}
            <Home translation={t} />
          </LandingRoute>}
        />

        <Route
          path='/aboutus'
          element={<LandingRoute>
            {/* {t('Home.Title')} */}
            <AboutUs translation={t} />
          </LandingRoute>}
        />
        
        <Route
          path='/contact'
          element={<LandingRoute>
            {/* {t('Home.Title')} */}
            <Contact translation={t} />
          </LandingRoute>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
