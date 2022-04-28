import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocailLogin from "../SocailLogin/SocailLogin";
import { async } from "@firebase/util";
import Lodeing from "../../Shared/Lodeing/Lodeing";
import PageTaitle from "../../Shared/PageTaitle/PageTaitle";
import useToken from "../../../Hooks/useToken";
const Register = () => {
  <PageTaitle title="Regster"></PageTaitle>;

  /* chacked box*/

  const [agree, setEgree] = useState(false);
  /*Firebace hools install */
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, error1] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const navigetLogin = () => {
    navigate("/login");
  };
  /* Register Now */

  const handlRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    /*  chack box option 01 */
    // const agree = event.target.trems.checked;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate("/home");
  };
  // hooks token
  // const [token] = useToken(user);

  if (loading || updating) {
    return <Lodeing></Lodeing>;
  }

  if (user) {
    navigate("/home");
  }

  return (
    <div className="register-form">
      <h2 className="text-center mt-4 mb-4  text-primary">Please Register</h2>
      <form onSubmit={handlRegister}>
        <input type="text" name="name" id="" placeholder="Your Name " />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Your email"
          required
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />
        <input
          onClick={() => setEgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label
          // className={agree ? "ps-2 text-primary" : " ps-2 text-danger"}
          className={`ps-2 ${agree ? " text-primary" : " text-danger"}`}
          htmlFor="terms"
        >
          Accept Genius Car Terms and Conditions
        </label>
        <input
          disabled={!agree}
          className=" btn btn-primary w-50 d-block mx-auto mt-3"
          type="submit"
          value="Register"
        />
      </form>
      <p>
        Already have an account?
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigetLogin}
        >
          Please Login
        </Link>
      </p>
      <SocailLogin></SocailLogin>
    </div>
  );
};

export default Register;
