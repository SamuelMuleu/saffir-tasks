import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/saffir-tasks/signin" element={<SignIn />} />
        <Route path="/saffir-tasks/signout" element={<SignOut />} />
      </Routes>
    </Router>
  );
}

export default App;
