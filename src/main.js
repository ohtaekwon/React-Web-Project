import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import CourseListPage from "./pages/CourseListPage.js";
import CoursePage from "./pages/CoursePage";
import WishListPage from "./pages/WishListPage";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="coures" element={<CourseListPage />} />
          <Route
            path="course/react-frontend-development"
            element={<CoursePage />}
          />
          <Route path="wishList" element={<WishListPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}
export default Main;
