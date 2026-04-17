import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";

function App() {
  return (
    <BrowserRouter>
      {/* Centered screen */}
      <div className="flex items-center justify-center h-screen bg-gray-100 overflow-hidden">
        {/* Mobile frame */}
        <div className="w-[375px] h-[90vh] max-h-[812px] bg-white shadow-xl rounded-xl overflow-hidden">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
