import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";
import EnterLocationManually from './components/auth/EnterLocationManually';
import Landing from './components/auth/Landing';
import ProfileSteps from './components/auth/ProfileSteps';
import RegisterLogin from './components/auth/RegisterLogin';
import EnterLocation from './components/auth/EnterLocation';
import Layout from './layout/Layout';
import DashboardComponent from './pages/DashboardComponent';
import Inquiries from './pages/Inquiries';
import Reviews from './pages/Reviews';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/create-account" element={<RegisterLogin />} />
          <Route path="/enter-location" element={<EnterLocation />} />
          <Route path="/enter-location-manually" element={<EnterLocationManually />} />
          <Route path="/profile-steps" element={<ProfileSteps />} />
          <Route path="*" element={<NoPage />} />

          <Route path="/" element={<Layout />}>
          <Route index element={<DashboardComponent />} />
          <Route path='/dashboard/inquiries' element={<Inquiries />} />
          <Route path='/dashboard/reviews' element={<Reviews />} />
        </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
