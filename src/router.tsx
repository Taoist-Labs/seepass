import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Profile from "./pages/profile";
import NotFound from "./pages/404";


export default function RouterLink() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NotFound />} />
        <Route path="/:domain" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
