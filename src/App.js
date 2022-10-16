import HomePage from "./components/home/HomePage";
import DetailPage from "./components/detail/DetailPage";
import ContactPage from "./components/contact/ContactPage";
import FavoritesPage from "./components/favorites/FavoritesPage";
import LoginPage from "./components/login/LoginPage";
import AdminPage from "./components/admin/AdminPage";
import Layout from "./components/layout/Layout";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/styles.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout></Layout>
        <Routes>
          <Route path="/" exact element={<HomePage />}></Route>
          <Route path="/detail/:name" element={<DetailPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/favorites" element={<FavoritesPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/admin" element={<AdminPage />}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
