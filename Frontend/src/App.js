import "./App.css";
import { useEffect } from "react";
import LoginPage from "./Screens/LoginPage";
import RegistrationForm from "./Screens/RegistrationForm";
import Donation from "./Screens/Donation/donation";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { auth } from "./firebase";
import Navbar from "./components/Navbar/Navbar";
import Chat from "./Screens/community";
import Slider from "./components/Slider/sliders";
import slides from "./mock.json";
import Cards from "./components/Cards/Cards";
import Profile from "./Screens/Profile/Profile";
import RewardPage from "./Screens/Rewards/reward";
import Home2 from "./Screens/Home/Home2";
import Map from "./Screens/Map/Maps";
import UserLocation from "./Screens/Map/UserLocation";
import AboutUs from "./Screens/Aboutus/AboutPage";
import AnnouncementForm from "./Screens/Channel/AnnouncementForm";
import AnnouncementList from "./Screens/Channel/AnnouncementList";
import  CSRComplianceEducation from "./Screens/Learn/CSRComplianceEducation";

import Form from "./components/Company-Registration/Form";
import CompanyDashboard from "./components/CompanyDashboard/HomeDashboard";

function App() {
  const PrivateRoute = ({ element: Element, ...rest }) => {
    // Using 'element' instead of 'component' in v6
    const isAuthenticated = auth.currentUser !== null;

    return (
      <Route
        {...rest}
        element={isAuthenticated ? <Element /> : <Navigate to="/login" />}
      />
    );
  };
  // const [filteredAgencies, setFilteredAgencies] = useState(
  //   agenciesData.agencies
  // );

  // const handleSearch = (searchText) => {
  //   console.log("Searching for:", searchText);

  //   const filtered = agenciesData.agencies.filter((agency) =>
  //     agency.name.toLowerCase().includes(searchText.toLowerCase())
  //   );
  //   console.log(filtered);
  //   if (filteredAgencies.length === 0) {
  //     toast.error("No agency found!");
  //     setFilteredAgencies(agenciesData.agencies);
  //   } else {
  //     setFilteredAgencies(filtered);
  //   }
  // };
  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setUserName(user.displayName);
  //     } else setUserName("");
  //   });
  // }, []);
  const Dashboard = () => {
    return <div>Dashboard</div>;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/home" element={<Home2 />} />

          <Route exact path="/location" element={<UserLocation />} />
          <Route exact path="/register" element={<RegistrationForm />} />
          <Route exact path="/chat" element={<Chat />} />
          <Route exact path="/donation" element={<Donation />} />
          <Route exact path="/rewards" element={<RewardPage />} />
          <Route exact path="/maps" element={<Map />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/learn" element={<CSRComplianceEducation />} />
          <Route exact path="/registration" element={<Form />} />
          <Route
            exact
            path="/cd"
            element={
              <div>
                <Navbar />
                <CompanyDashboard />
              </div>
            }
          />
          <Route
            exact
            path="/channel"
            element={
              <div>
                <AnnouncementForm />
                <AnnouncementList />
              </div>
            }
          />
          {/* <Route
            exact
            path="/map"
            element={
              <div>
                <Filter
                  onSearch={handleSearch}
                  agencies={agenciesData.agencies}
                />
                <MapComponent agencies={filteredAgencies} />
              </div>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
