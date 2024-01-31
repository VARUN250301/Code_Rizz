import { useState } from "react";
import Navbar from "../components/Navbar";
import { createInitiative, createJob } from "../utils/backend";
import { useNavigate } from "react-router-dom";
import { skills } from "../utils/skills";
const data = {
  "Type": "Cost efficiency",
  "Name": "Digital India Campaign",
  "About": "Promotes digital transactions and reduces paperwork, enhancing cost efficiency.",
  "Metrics": "Percentage increase in digital transactions",
  "PotentialImpactMetric": "A 25% increase in digital transactions",
  "SuccessStory": "Digital India Campaign's efforts led to a substantial increase in digital transactions, enhancing cost efficiency."
};

export default function Create() {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [metric, setMetric] = useState("");
  const [potentialImpactMetric, setPotentialImpactMetric] = useState("");
  const [successStory, setSuccessStory] = useState("");
  const [sectors, setSectors] = useState([]);

  const [location, setLocation] = useState([]);
  const navigate = useNavigate();

  const [tags, setTags] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await  createInitiative(type, name, about, metric, potentialImpactMetric, successStory, sectors,tags, localStorage.getItem("email"));

    // navigate("/");

    console.log(res);
  };

  const handleSkill = (e) => {
    const { value } = e.target;
    setTags((prev) => {
      if (prev.includes(value)) {
        return prev.filter((tag) => tag !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  return (
    <div>
      <Navbar />

      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900 "
                >
                  Type
                </label>
                <input
                  type="text"
                  name="type"
                  id="type"
                  onChange={(e) => setType(e.target.value)}
                  value={type}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="Type product name"
                  required
                />
              </div>

              <div className="sm:col-span-2"> 
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Name
                </label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="Type product name"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  About
                </label>
                <input
                  type="text"
                  onChange={(e) => setAbout(e.target.value)}
                  value={about}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="Type product name"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Metric
                </label>
                <textarea
                  onChange={(e) => setMetric(e.target.value)}
                  value={metric}
                  rows={8}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your description here"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Potential Impact Metric
                </label>
                <textarea
                  onChange={(e) => setPotentialImpactMetric(e.target.value)}
                  value={potentialImpactMetric}
                  rows={8}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your description here"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Success Story
                </label>
                <textarea
                  onChange={(e) => setSuccessStory(e.target.value)}
                  value={successStory}
                  rows={8}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your description here"
                />
              </div>

              <div className="flex items-center space-x-2 flex-row">
                <p className="text-gray-900"> Sectors:</p>

                {skills.map((skill) => (
                  <>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value={skill}
                      aria-label={skill}
                      name="skill"
                      onChange={handleSkill}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-gray-900 "
                    >
                      {skill}
                    </label>
                    &nbsp;&nbsp;
                  </>
                ))  
                }
               
                

              </div>
              <div className="flex items-center space-x-2 flex-row">
                <p className="text-gray-900"> Locations:</p>
                    
                </div>
            </div>
            <div className="flex content-center pl-10">

            
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-primary-200 "
            >
              Create CSR Initiative
            </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
