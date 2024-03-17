import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";
import EnterLocationManually from './components/EnterLocationManually';
import Landing from './components/Landing';
import ProfileSteps from './components/ProfileSteps';
import RegisterLogin from './components/RegisterLogin';
import EnterLocation from './components/EnterLocation';
import Layout from './layout/Layout';
import DashboardComponent from './pages/DashboardComponent';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create-account" element={<RegisterLogin />} />
          <Route path="/enter-location" element={<EnterLocation />} />
          <Route path="/enter-location-manually" element={<EnterLocationManually />} />
          <Route path="/profile-steps" element={<ProfileSteps />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>

      {/* <Landing /> */}
      {/* <RegisterLogin /> */}
      {/* <EnterLocation /> */}
      {/* <EnterLocationManually /> */}
      {/* <ProfileSteps /> */}
    </>
  );
}

export default App;
