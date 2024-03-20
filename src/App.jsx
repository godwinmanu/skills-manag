import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import AuthUserRestrictions from "./components/AuthUserRestrictions";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import NotFound from "./pages/404/404";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import JobInfos from "./pages/JobInfos";
import Login from "./pages/Login";
import MemberSpace from "./pages/MemberSpace";
import PostOffer from "./pages/PostOffer";
import Profile from "./pages/Profile";
import ResetPassword from "./pages/ResetPassword";
import Signup from "./pages/Signup";
import Workerinfos from "./pages/WorkerInfos";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route path="" element={<Home />} />
            <Route path="faq" element={<Faq />} />
            <Route path="worker-infos" element={<Workerinfos />} />

            {/* Redirect authenticated user when trying to access these routes */}
            <Route element={<AuthUserRestrictions />}>
              <Route path="reset-password" element={<ResetPassword />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              {/* <Route path="program/*" element={<Program />} /> */}
            </Route>
            {/* Protected Routes. Only accessible to authenticated user */}
            <Route element={<ProtectedRoutes />}>
              <Route path="member-space" element={<MemberSpace />} />
              <Route path="profile" element={<Profile />} />
              <Route path="post-offer" element={<PostOffer />} />
              <Route path="job-infos" element={<JobInfos />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
