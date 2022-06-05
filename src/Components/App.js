import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={<Dashboard/>} />
              {/* <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
              <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<Login/>} />
              {/* <Route path="/forgot-password" component={ForgotPassword} /> */}
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
