// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Eye } from "lucide-react";
// import ViewCandidate from "../components/ViewCandidate";

// const candidatesUrl = import.meta.env.VITE_CANDIDATES_URL;

// export default function Candidates() {
//   const [candidates, setCandidates] = useState([]);
//   const [viewId, setViewId] = useState();

//   useEffect(() => {
//     fetchCandidates();
//   }, []);

//   const fetchCandidates = async () => {
//     const response = await axios.get(candidatesUrl);
//     setCandidates(response.data);
//   };

//   //   const handleChange = (e) => {
//   //     const { name, value } = e.target;
//   //     setFormData({ ...formData, [name]: value });
//   //   };

//   //   const handleFileChange = (e) => {
//   //     setFormData({ ...formData, [e.target.name]: e.target.files[0] });
//   //   };

//   //   const handleSubmit = async (e) => {
//   //     e.preventDefault();
//   //     const data = new FormData();
//   //     Object.keys(formData).forEach((key) => {
//   //       data.append(key, formData[key]);
//   //     });

//   //     await axios.post("http://localhost:3000/candidates", data);
//   //     fetchCandidates();
//   //     setFormData({
//   //       first_name: "",
//   //       last_name: "",
//   //       email: "",
//   //       phone: "",
//   //       linkedin: "",
//   //       website: "",
//   //       resume: null,
//   //       cover: null,
//   //     });
//   //   };

//   const [query, setQuery] = useState("");

//   const filteredCandidates = candidates.filter((c) => {
//     return (
//       c?.first_name.toLowerCase().includes(query.toLowerCase()) ||
//       c?.last_name.toLowerCase().includes(query.toLowerCase()) ||
//       c?.email.toLowerCase().includes(query.toLowerCase()) ||
//       c?.job_title.toLowerCase().includes(query.toLowerCase())
//     );
//   });

//   const handleDelete = async (id) => {
//     await axios.delete(`${candidatesUrl}/${id}`);
//     fetchCandidates();
//   };

//   if (viewId) return <ViewCandidate id={viewId} setViewId={setViewId} />;

//   return (
//     <div className="p-6 mx-auto flex flex-col gap-5">
//       {/* <h2 className="text-2xl font-bold mb-4">Candidate Form</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="first_name"
//           placeholder="First Name"
//           className="input"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="last_name"
//           placeholder="Last Name"
//           className="input"
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           className="input"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone"
//           className="input"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="linkedin"
//           placeholder="LinkedIn Profile"
//           className="input"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="website"
//           placeholder="Website"
//           className="input"
//           onChange={handleChange}
//         />
//         <input
//           type="file"
//           name="resume"
//           className="input"
//           onChange={handleFileChange}
//         />
//         <input
//           type="file"
//           name="cover"
//           className="input"
//           onChange={handleFileChange}
//         />
//         <button type="submit" className="btn">
//           Submit
//         </button>
//       </form> */}

//       <h2 className="text-2xl font-bold mt-6">Candidates</h2>
//       <input
//         type="text"
//         placeholder="Search..."
//         className="input w-full mt-4 p-4 rounded-3xl"
//         onChange={(e) => setQuery(e.target.value)}
//       />

//       <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
//         {" "}
//         <table className="w-full text-left table-auto min-w-max scrool-none">
//           <thead>
//             <tr>
//               <th className="px-4 py-2">Job Applied</th>
//               <th className="px-4 py-2">Name</th>
//               <th className="px-4 py-2">Email</th>
//               <th className="px-4 py-2">Phone</th>
//               <th className="px-4 py-2">View</th>

//               {/* <th className="px-4 py-2">LinkedIn</th>
//               <th className="px-4 py-2">Website</th> */}
//               {/* <th className="px-4 py-2">Resume</th>
//               <th className="px-4 py-2">Cover Letter</th> */}
//             </tr>
//           </thead>
//           <tbody>
//             {filteredCandidates?.map((candidate) => (
//               <tr key={candidate.id} className="border">
//                 <td className="px-4 py-2">{candidate.job_title}</td>
//                 <td className="px-4 py-2">
//                   {candidate.first_name} {candidate.last_name}
//                 </td>
//                 <td className="px-4 py-2">{candidate.email}</td>
//                 <td className="px-4 py-2">{candidate.phone}</td>
//                 {/* <td className="px-4 py-2">
//                   <a href={candidate.linkedin}>linkedin</a>
//                 </td>
//                 <td className="px-4 py-2">
//                   <a href={candidate.website}>Website</a>
//                 </td> */}
//                 {/* <td className="px-4 py-2">
//                   <a
//                     href={`http://localhost:3000/uploads/${candidate.resume}`}
//                     download={`http://localhost:3000/uploads/${candidate.resume}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Resume
//                   </a>
//                 </td>
//                 <td className="px-4 py-2">
//                   <a
//                     href={`http://localhost:3000/uploads/${candidate.cover}`}
//                     download={`http://localhost:3000/uploads/${candidate.cover}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Cover Letter
//                   </a>
//                 </td> */}

//                 <td
//                   onClick={() => setViewId(candidate.id)}
//                   className="px-4 py-2"
//                 >
//                   <Eye />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Eye } from "lucide-react";
// import ViewCandidate from "../components/ViewCandidate";
// import ReactPaginate from "react-paginate";

// const candidatesUrl = import.meta.env.VITE_CANDIDATES_URL;

// export default function Candidates() {
//   const [candidates, setCandidates] = useState([]);
//   const [viewId, setViewId] = useState();
//   const [query, setQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(0);
//   const candidatesPerPage = 10;

//   useEffect(() => {
//     fetchCandidates();
//   }, []);

//   const fetchCandidates = async () => {
//     const response = await axios.get(candidatesUrl);
//     setCandidates(response.data);
//   };

//   const filteredCandidates = candidates.filter((c) => {
//     return (
//       c?.first_name.toLowerCase().includes(query.toLowerCase()) ||
//       c?.last_name.toLowerCase().includes(query.toLowerCase()) ||
//       c?.email.toLowerCase().includes(query.toLowerCase()) ||
//       c?.job_title.toLowerCase().includes(query.toLowerCase())
//     );
//   });

//   const handleDelete = async (id) => {
//     await axios.delete(`${candidatesUrl}/${id}`);
//     fetchCandidates();
//   };

//   const handlePageClick = (data) => {
//     setCurrentPage(data.selected);
//   };

//   const offset = currentPage * candidatesPerPage;
//   const currentCandidates = filteredCandidates.slice(
//     offset,
//     offset + candidatesPerPage
//   );

//   if (viewId) return <ViewCandidate id={viewId} setViewId={setViewId} />;

//   return (
//     <div className="p-6 mx-auto flex flex-col gap-5">
//       <h2 className="text-2xl font-bold mt-6">Candidates</h2>
//       <input
//         type="text"
//         placeholder="Search..."
//         className="input w-full mt-4 p-4 rounded-3xl"
//         onChange={(e) => setQuery(e.target.value)}
//       />

//       <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
//         <table className="w-full text-left table-auto">
//           <thead>
//             <tr>
//               <th className="px-4 py-2">Job Applied</th>
//               <th className="px-4 py-2">Name</th>
//               <th className="px-4 py-2">Email</th>
//               <th className="px-4 py-2">Phone</th>
//               <th className="px-4 py-2">View</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentCandidates.map((candidate) => (
//               <tr key={candidate.id} className="border">
//                 <td className="px-4 py-2">{candidate.job_title}</td>
//                 <td className="px-4 py-2">
//                   {candidate.first_name} {candidate.last_name}
//                 </td>
//                 <td className="px-4 py-2">{candidate.email}</td>
//                 <td className="px-4 py-2">{candidate.phone}</td>
//                 <td
//                   onClick={() => setViewId(candidate.id)}
//                   className="px-4 py-2 cursor-pointer"
//                 >
//                   <Eye />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <ReactPaginate
//         previousLabel={"previous"}
//         nextLabel={"next"}
//         breakLabel={"..."}
//         pageCount={Math.ceil(filteredCandidates.length / candidatesPerPage)}
//         marginPagesDisplayed={2}
//         pageRangeDisplayed={5}
//         onPageChange={handlePageClick}
//         containerClassName={"pagination flex justify-center mt-4"}
//         activeClassName={"active"}
//         previousClassName={"px-3 py-1 border rounded-md cursor-pointer"}
//         nextClassName={"px-3 py-1 border rounded-md cursor-pointer"}
//         disabledClassName={"text-gray-400 cursor-not-allowed"}
//         pageClassName={"px-3 py-1 border rounded-md cursor-pointer"}
//         breakClassName={"px-3 py-1 border rounded-md cursor-pointer"}
//       />
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import axios from "axios";
import { Eye } from "lucide-react";
import ViewCandidate from "../components/ViewCandidate";
import DataTable from "react-data-table-component";

const candidatesUrl = import.meta.env.VITE_CANDIDATES_URL;

export default function Candidates() {
  const [candidates, setCandidates] = useState([]);
  const [viewId, setViewId] = useState();
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchCandidates();
  }, [setCandidates]);

  const fetchCandidates = async () => {
    const response = await axios.get(candidatesUrl);
    setCandidates(response.data);
  };
  
console.log(candidates)
  const filteredCandidates = candidates.filter((c) => {
    return (
      c?.first_name.toLowerCase().includes(query.toLowerCase()) ||
      c?.last_name.toLowerCase().includes(query.toLowerCase()) ||
      c?.email.toLowerCase().includes(query.toLowerCase()) ||
      c?.job_title.toLowerCase().includes(query.toLowerCase())
    );
  });

  const handleDelete = async (id) => {
    await axios.delete(`${candidatesUrl}/${id}`);
    fetchCandidates();
  };

  const columns = [
    {
      name: "Job Applied",
      selector: (row) => row.job_title,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => `${row.first_name} ${row.last_name}`,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "View",
      cell: (row) => (
        <Eye className="cursor-pointer" onClick={() => setViewId(row.id)} />
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  if (viewId) return <ViewCandidate id={viewId} setViewId={setViewId} />;

  return (
    <div className="p-6 mx-auto flex flex-col gap-5">
      <h2 className="text-2xl font-bold mt-6">Candidates</h2>
      <input
        type="text"
        placeholder="Search..."
        className="input w-full mt-4 p-4 rounded-3xl"
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <DataTable
          columns={columns}
          data={filteredCandidates}
          pagination
          paginationPerPage={10}
          highlightOnHover
          pointerOnHover
          responsive
          customStyles={{
            headCells: {
              style: {
                fontWeight: "bold",
                fontSize: "16px",
              },
            },
            cells: {
              style: {
                fontSize: "14px",
              },
            },
          }}
        />
      </div>
    </div>
  );
}
