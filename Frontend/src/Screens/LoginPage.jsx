// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function LoginPage() {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const navigate = useNavigate();
//   const handleLogin = () => {
//     // You can add your login logic here
//     const { username, password } = formData;
//     console.log(
//       `Logging in with username: ${username} and password: ${password}`
//     );
//   };

//   const handleRegister = () => {
//     // Handle registration logic
//     navigate("/register");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md">
//         <h2 className="text-2xl font-semibold mb-4">Login</h2>
//         <div className="mb-4">
//           <label htmlFor="username" className="block font-semibold mb-2">
//             Username:
//           </label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleInputChange}
//             className="w-full border rounded p-2"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="block font-semibold mb-2">
//             Password:
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             className="w-full border rounded p-2"
//           />
//         </div>
//         <button
//           onClick={handleLogin}
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
//         >
//           Login
//         </button>
//         <p className="hover:cursor-pointer mt-2" onClick={handleRegister}>
//           Don't have an account? Register
//         </p>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import InputControl from "../InputControl/InputControl";
import { auth } from "../firebase";

import styles from "./Login.module.css";
import './login.css';

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        console.log(user);

        navigate("/home");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className='flex items-center bg-gray-100 login'>
      <div className="absolutee"></div>
      <div className="bg-white p-8 rounded shadow-md loginDiv">
       <h2 className="font-semibold mb-4 title">Login</h2>
       <p className="hover:cursor-pointer mt-2" >
          Don't have an account? Create your account
        </p>
        <div className="mb-4">
        <InputControl
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        </div>
        <div className="mb-4">
        <InputControl
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />
         </div>

         <p className="hover:cursor-pointer mt-2 forgot">
          Forgot Password?
        </p>

          <b className={styles.error}>{errorMsg}</b>
          <button 
            className="w-full  hover:bg-blue-600 text-white font-semibold py-2 loginButton"
            disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
          
          <p className="hover:cursor-pointer mt-10">
            Or login with 
            <div className="ButtonsSet">
              <div><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/900px-Facebook_f_logo_%282019%29.svg.png?20231203063624'></img></div>
              <div><img src='https://cdn-icons-png.flaticon.com/512/3938/3938028.png'></img></div>
            </div>
          </p>
      </div>

      <div className="welcome">
       <p className="hover:cursor-pointer mt-2 title2" >
          Welcome back 
        </p>
        <p className="hover:cursor-pointer mt-2" >
          Simply create your account by clicking the signup button 
        </p>
        <button
          className="w-full  hover:bg-blue-600 text-white font-semibold py-2 welcomeButton"
        >
          <Link to="/register" style={{color:"white",textDecoration:'none'}}>Signup</Link>
        </button>
      </div>
    </div>
  );
}

export default Login;
