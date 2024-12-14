import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ThemeContext } from './contexts/theme';
import Header from './components/pages/Header';
import About from './components/pages/About';
import Intro from './components/pages/Intro'; 
import Research from './components/pages/Research';
import Skills from './components/pages/Skills';
import ScrollToTop from './components/pages/ScrollToTop';
import Contact from './components/pages/Contact';
import Map from './components/pages/Map';
import Footer from './components/pages/Footer';
import Experience from './components/pages/Experience';
import Auth from './components/pages/Auth';
import Login from './components/pages/Login';
import './App.css';

// 页面访问记录函数
const logPageVisit = async (pathname) => {
  try {
    const visitData = {
      page: pathname,
      language: navigator.language,
      screenSize: `${window.innerWidth}x${window.innerHeight}`,
      platform: navigator.platform,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      referrer: document.referrer
    };

    await fetch('https://fqxgvpik1i.execute-api.us-east-2.amazonaws.com/prod/visits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(visitData)
    });
  } catch (error) {
    console.error('Error logging visit:', error);
  }
};

// 路由监听组件
function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    logPageVisit(location.pathname);
  }, [location]);

  return null;
}

// 保护路由组件
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

function MainContent() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <About />
        <Experience />
        <Research />
        <Skills />
        <Contact />
        <Map />
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}

function App() {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <Router>
      <RouteTracker /> {/* 添加路由监听组件 */}
      <Routes>
        <Route path="/" element={
          <div id='top' className={`${themeName} app`}>
            <MainContent />
          </div>
        } />
        <Route path="/login" element={
          <div className="light app">
            <Login />
          </div>
        } />
        <Route path="/auth" element={
          <ProtectedRoute>
            <div className="light app">
              <Auth />
            </div>
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;