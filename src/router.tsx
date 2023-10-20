import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
// import Profile from "./pages/profile";
import NotFound from "./pages/404";
import Home from "./pages/home2";
import Tips from "./pages/tips";

export default function RouterLink() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Home />} />
        {/*<Route path="/:domain" element={<Profile />} />*/}
        <Route path="/404" element={<NotFound />} />
        <Route path="/tips" element={<Tips />} />
      </Routes>
    </Router>
  );
}
