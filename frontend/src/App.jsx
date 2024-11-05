import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Chat from "./pages/ChatPage";
import Dashboard from "./pages/Dashboard";
import "./App.css"
function App() {
  return (
    <BrowserRouter>
    <Routes>
    {/* <Route index  path="/" element={<Event/>} /> */}
    <Route index path="/" element={<Dashboard/>} />
    {/* <Route path="/login" element={<Createevent/>} /> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
