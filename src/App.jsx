import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Courses from "./pages/courses/Courses";
import SingleCourse from "./pages/singlecourse/SingleCourse";
import Events from "./pages/events/Events";
import Blog from "./pages/blog/Blog";
import Contacts from "./pages/contacts/Contacts";
import Login from "./components/Login";
import Signin from "./components/Signin";
import Profile from "./pages/profile/Profile";
import EventSinglePage from "./pages/events/EventSinglePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<SingleCourse />} />

          <Route path="events" element={<Events />} />
          <Route path="/events/:id" element={<EventSinglePage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
