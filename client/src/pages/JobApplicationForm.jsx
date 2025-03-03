import { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const candidatesUrl = import.meta.env.VITE_CANDIDATES_URL;

function JobApplicationForm() {
  const {id}=useParams();
  const { jobtitle } = useParams();


  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    linkedin: "",
    website: "",
    resume: null,
    cover: null,
    job_id: id,
    job_title: jobtitle,
  });

  const [errors, setErrors] = useState({});
  const [fileMessages, setFileMessages] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (file) {
      if (file.type !== "application/pdf") {
        setErrors({ ...errors, [name]: "Only PDF files are allowed" });
        setFileMessages({ ...fileMessages, [name]: "" });
      } else if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, [name]: "File size should be less than 5MB" });
        setFileMessages({ ...fileMessages, [name]: "" });
      } else {
        setErrors({ ...errors, [name]: "" });
        setFormData({ ...formData, [name]: file });
        setFileMessages({ ...fileMessages, [name]: "PDF has been uploaded" });
      }
    }
  };

  const validateLinkedIn = (url) => {
    const regex = /^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/;
    return regex.test(url);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.first_name) newErrors.first_name = "First name is required";
    if (!formData.last_name) newErrors.last_name = "Last name is required ";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.linkedin) {
      newErrors.linkedin = "LinkedIn profile is required";
    } else if (!validateLinkedIn(formData.linkedin)) {
      newErrors.linkedin = "Please enter a valid LinkedIn profile URL";
    }
    // if (!formData.website) newErrors.website = "Website is required";

    if (!formData.resume) newErrors.resume = "Resume is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      await axios.post(candidatesUrl, data);
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        linkedin: "",
        website: "",
        resume: null,
        cover: null,
        job_id: id,
        job_title: jobtitle,
      });
      navigate("/success");
    } catch (err) {
      if (err.response && err.response.status === 500) {
        setErrors({ ...errors, email: "Email already exists" });
      } else {
        console.error(err);
        setErrors({ ...errors, form: "Failed to submit application" });
      }
    }
  };

  return (
    <div className="flex flex-col gap-5 p-4 mx-auto items-center justify-center">
      <NavLink to={`/job/${id}/${jobtitle}`} className="text-red-600 flex items-center">
        <ArrowBackIosIcon /> <p>Back to Job Description</p>
      </NavLink>
      <h2 className="lg:text-3xl text-2xl text-red-600 font-bold">
        {jobtitle}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-full max-w-lg"
      >
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-bold">Personal Information</h3>

          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="relative mb-6 w-full">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                First Name *
              </label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="block w-full h-11 px-5 py-2.5 bg-white shadow-[0_4px_6px_-1px_rgba(254,202,202,0.5),0_2px_4px_-1px_rgba(254,202,202,0.5)] leading-7 text-base font-normal text-gray-900 bg-transparent border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none"
                />
              {errors.first_name && (
                <p className="text-red-500 text-sm">{errors.first_name}</p>
              )}
            </div>
            <div className="relative mb-6 w-full">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                Last Name *
              </label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="block w-full h-11 px-5 py-2.5 bg-white shadow-[0_4px_6px_-1px_rgba(254,202,202,0.5),0_2px_4px_-1px_rgba(254,202,202,0.5)] leading-7 text-base font-normal text-gray-900 bg-transparent border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none"
                />
              {errors.last_name && (
                <p className="text-red-500 text-sm">{errors.last_name}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="relative mb-6 w-full">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full h-11 px-5 py-2.5 bg-white shadow-[0_4px_6px_-1px_rgba(254,202,202,0.5),0_2px_4px_-1px_rgba(254,202,202,0.5)] leading-7 text-base font-normal text-gray-900 bg-transparent border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none"
                
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="relative mb-6 w-full">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]{10}"
                className="block w-full h-11 px-5 py-2.5 bg-white shadow-[0_4px_6px_-1px_rgba(254,202,202,0.5),0_2px_4px_-1px_rgba(254,202,202,0.5)] leading-7 text-base font-normal text-gray-900 bg-transparent border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none"
                
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>
        </div>

        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
            Resume/CV *
          </label>
          <input
            type="file"
            name="resume"
            onChange={handleFileChange}
            className="text-gray-500 font-medium w-full text-base file:cursor-pointer cursor-pointer file:text-black file:border-0 file:py-2.5 border file:px-4 file:mr-4 file:bg-gray-200 file:hover:bg-red-500 rounded"
            
          />
          {errors.resume && (
            <p className="text-red-500 text-sm">{errors.resume}</p>
          )}
          {fileMessages.resume && (
            <p className="text-green-500 text-sm">{fileMessages.resume}</p>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-bold">Additional Information</h3>

          <div className="relative mb-6">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Cover Letter
            </label>
            <input
              type="file"
              name="cover"
              onChange={handleFileChange}
              className="text-gray-500 font-medium w-full text-base file:cursor-pointer cursor-pointer file:text-black file:border-0 file:py-2.5 file:px-4 file:mr-4 file:bg-gray-200 file:hover:bg-red-500 rounded border"
            />
            {errors.cover && (
              <p className="text-red-500 text-sm">{errors.cover}</p>
            )}
            {fileMessages.cover && (
              <p className="text-green-500 text-sm">{fileMessages.cover}</p>
            )}
          </div>
          <div className="relative mb-6 w-full">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              LinkedIn Profile *
            </label>
            <input
              type="url"
              name="linkedin"
              placeholder="Please mention your LinkedIn profile"
              value={formData.linkedin}
              onChange={handleChange}
              className="block w-full h-11 px-5 py-2.5 bg-white shadow-[0_4px_6px_-1px_rgba(254,202,202,0.5),0_2px_4px_-1px_rgba(254,202,202,0.5)] leading-7 text-base font-normal text-gray-900 bg-transparent border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none"
              
            />
            {errors.linkedin && (
              <p className="text-red-500 text-sm">{errors.linkedin}</p>
            )}
          </div>
          <div className="relative mb-6 w-full">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Website
            </label>
            <input
              type="url"
              name="website"
              placeholder="Please mention your website"
              value={formData.website}
              onChange={handleChange}
              className="block w-full h-11 px-5 py-2.5 bg-white shadow-[0_4px_6px_-1px_rgba(254,202,202,0.5),0_2px_4px_-1px_rgba(254,202,202,0.5)] leading-7 text-base font-normal text-gray-900 bg-transparent border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none"
              />
             {/* {errors.website && (
              <p className="text-red-500 text-sm">{errors.website}</p>
            )} */}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="md:w-52 w-full h-12 bg-red-600 hover:bg-red-800 transition-all duration-700 rounded-md drop-shadow-lg text-white text-base font-semibold leading-6 mb-6"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
}

export default JobApplicationForm;