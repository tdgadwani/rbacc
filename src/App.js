import "./App.css";
import Home from "./components/Home.jsx";
import SignUp from "./components/SignUp.jsx";
import Navbar from "./components/Navbar.jsx";
import LoginPage from "./components/Login.jsx";
import QuestionForm from "./components/QuestionForm.jsx";
import MyPending from "./components/MyPending.jsx";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/Auth/PrivateRoute.jsx";
import { useAuth } from "./contexts/AuthContext.jsx";
import MyPosts from "./components/MyPosts";
import QuestionPage from "./components/QuestionPage";
// import OpenRoute from './components/Auth/OpenRoute.jsx';
function App() {
  const { token } = useAuth();
  console.log(token);
  return (
    <>
      {/* <SignUp/> */}
      {/* <LoginPage/> */}
      {token !== null && <Navbar />}
      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <QuestionForm/> */}
      {/* <MyPending/> */}
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/pendings"
          element={
            // <PrivateRoute>
            <MyPending />
            // </PrivateRoute>
          }
        />
        <Route
          path="/myposts"
          element={
            // <PrivateRoute>
            <MyPosts />
            // </PrivateRoute>
          }
        />

        <Route
          path="/login"
          element={
            // <PrivateRoute>
            <LoginPage />
            // </PrivateRoute>
          }
        />
        <Route
          path="/signup"
          element={
            // <PrivateRoute>
            <SignUp />
            // </PrivateRoute>
          }
        />
        <Route
          path="/question"
          element={
            // <PrivateRoute>
            <QuestionPage />
            // </PrivateRoute>
          }
        />

        <Route
          path="/submitquestion"
          element={
            // <PrivateRoute>
            <QuestionForm />
            // </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
