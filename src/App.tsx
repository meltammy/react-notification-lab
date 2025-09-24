import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotificationTester } from "./views/NotificationTester";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NotificationTester />} />
      </Routes>
    </Router>
  );
}

export default App;
