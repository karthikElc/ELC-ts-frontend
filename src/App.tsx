import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./NavBar";
import Login from "./pages/Login";
import Overview from "./pages/Overview";
import Employability from "./pages/Employability";
import Skills from "./pages/Skills";
import { FC } from "react";
import Knowledge from "./pages/Knowledge";
import "./App.css";
import Forgotpassword from "./pages/Forgotpassword";
import StudentProfile from "./pages/StudentProfile";
import Changepassword from "./pages/Changepassword";
const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Route - No Navbar */}

        <Route path="/" element={<Login />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/changepassword" element={<Changepassword />} />

        {/* Group Routes with Navbar */}
        <Route
          path="/*"
          element={
            <>
              <Navbar /> {/* Render Navbar for these routes */}
              <Routes>
                <Route path="/profile" element={<StudentProfile />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/employability" element={<Employability />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/knowledge" element={<Knowledge />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
