import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import JobDetail from "./pages/JobDetail";
import JobApplicationForm from "./pages/JobApplicationForm";
import SuccessJob from "./pages/SuccessJob";
import Error404 from "./pages/Error404";
import JobExpiryPage from "./pages/JobExpiryPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:id/:jobtitle" element={<JobDetail />} />
        <Route path="/job/:id/:jobtitle/apply" element={<JobApplicationForm />} />
        <Route path="/success" element={<SuccessJob />} />
        <Route path="/expired" element={<JobExpiryPage />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
