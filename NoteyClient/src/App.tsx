
import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import { Notes } from './pages/Notes';
function App() {
  

  return <div>
        <BrowserRouter>
      <Routes>
        {/* Protected routes */}

        {/* <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        /> */}
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notes" element={<Notes />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  </div>
    
}

export default App
