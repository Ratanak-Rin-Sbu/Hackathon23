import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login';
import { CssBaseline } from "@mui/material";
import HomePage from './components/Homepage';
import Community from 'components/Community';

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/home"
            element={<HomePage/>}
          />
          <Route
            path="/community"
            element={<Community/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;