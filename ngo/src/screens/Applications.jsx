import { useLocation } from "react-router";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import {  getApplications } from "../utils/backend";


export default function Applications() {
  const location = useLocation();
  const [applications, setapplications] = useState([]);



  useEffect(() => {
    console.log(location.state);
    const fetchapplications = async () => {
      const data = await getApplications(localStorage.getItem("email"));
      console.log(data);
      setapplications(data);
    };
    fetchapplications();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="relative overflow-x-auto sm:rounded-lg w-3/4 mx-auto mt-10">
        <h1 className="text-xl mt-5">
          {/* Applicants for {job.position} @ {job.company} */}
          Initittives 
        </h1>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-5 shadow-md ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Initiative Type
              </th>
              <th scope="col" className="px-6 py-3">
                Inititative Id
              </th>
              
              

              <th scope="col" className="px-6 py-3">
                Schedule
              </th>
               <th scope="col" className="px-6 py-3">
                Status
              </th>


            </tr>
          </thead>
          <tbody>
            {applications.map((application) => (
              <tr className="bg-white border-b   hover:bg-gray-50 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {application.companyName}
                </th>
                <td className="px-6 py-4">{application.companyPhone}</td>
                <td className="px-6 py-4">{application.companyEmail}</td>
                <td className="px-6 py-4">
                  {/* {application.sectors.map((skill) => (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-2">
                      {skill}
                    </span>
                  ))} */}

                  {application.initiativeType}
                </td>
                <td className="px-6 py-4">
                  {/* {application.metric.split("-").join(" ")} */}
                  {application.initiativeId}
                </td>

                <td className="px-6 py-4 text-right">
                  <a
                    href="https://calendly.com/sainathpoojary/30min"
                    target="_blank"
                    className="font-medium text-blue-600  hover:underline"
                  >
                    Schedule
                  </a>
                </td>
                <td className="px-6 py-4 text-right">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {application.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
