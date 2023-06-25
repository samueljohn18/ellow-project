 import { Fragment, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import List from "./components/pages/List";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isuemail, setisuemail] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   const checkLoggedin = localStorage.getItem("isLoggedIn");
  //   if (checkLoggedin === "1") {
  //     setLoggedIn(true);
  //   }
  //   setisuemail(localStorage.getItem("email"));
  // }, []);

  function loginHandler(uemail, upassword) {
    setLoggedIn(true);
    // localStorage.setItem("isLoggedIn", "1");
    // localStorage.setItem("email", uemail);
    setisuemail(uemail);
    navigate("/home");
  }

  function logoutHandler() {
    // localStorage.removeItem("isLoggedIn");
    // localStorage.removeItem("email");
    setLoggedIn(false);
    navigate("/");
  }

  // return (
  //   <Routes>
  //     <Route path="/" element={!loggedIn && <Login onLogin={loginHandler} />} />
  //     {loggedIn && (
  //       <Fragment>
  //         <Route
  //           path="/home"
  //           element={
  //             <Fragment>
  //               <MainHeader email={isuemail} onLogout={logoutHandler} />
  //               <Home />
  //             </Fragment>
  //           }
  //         />
  //         <Route
  //           path="/dashboard"
  //           element={
  //             <Fragment>
  //               <MainHeader email={isuemail} onLogout={logoutHandler} />
  //               <Dashboard />
  //             </Fragment>
  //           }
  //         />
  //         <Route
  //           path="/list"
  //           element={
  //             <Fragment>
  //               <MainHeader email={isuemail} onLogout={logoutHandler} />
  //               <List />
  //             </Fragment>
  //           }
  //         />
  //       </Fragment>
  //     )}
  //   </Routes>
  // );


return (
  
    <Routes>
      <Route path="/" element={!loggedIn && <Login onLogin={loginHandler} />}/>
      {loggedIn && (
         <Fragment>
      <Route path='/home' element={<MainHeader email={isuemail} onLogout={logoutHandler} />} >
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="list" element={<List />} />
      </Route>
      </Fragment>
      )}
    </Routes>
  
);
      }

export default App;
