import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Lodeing from "../../Shared/Lodeing/Lodeing";
import SocailLogin from "../SocailLogin/SocailLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTaitle from "../../Shared/PageTaitle/PageTaitle";
import axios from "axios";
import useToken from "../../../Hooks/useToken";

const Login = () => {
  <PageTaitle title="Login"></PageTaitle>;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  /* From Login Sestem useRef */
  const emailRef = useRef("");

  const PasswordRef = useRef("");

  /*Firebace hooks install */
  let erroElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  /*Reset Password  */
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  //HOOKS TOKEN

  const [token] = useToken(user);

  if (loading || sending) {
    return <Lodeing></Lodeing>;
  }

  if (token) {
    navigate(from, { replace: true });
  }

  if (error) {
    erroElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  /* From Submit Button */

  const handlSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = PasswordRef.current.value;

    await signInWithEmailAndPassword(email, password);

    // const { data } = await axios.post("https://morning-cove-96291.herokuapp.com/login", { email });
    // localStorage.setItem("accessToken", data.accessToken);

    // navigate(from, { replace: true });
  };

  const navigetRegister = (event) => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };

  return (
    <div className="container mx-auto w-50">
      <h2 className="text-primary text-center mt-5 mb-3">Please Login</h2>

      <Form onSubmit={handlSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={PasswordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary w-50 d-block mx-auto mb-3" type="submit">
          Login
        </Button>
      </Form>
      {erroElement}
      <p>
        New to Genius Car?
        <Link
          to="/register"
          className="text-danger pe-auto text-decoration-none"
          onClick={navigetRegister}
        >
          Please Register
        </Link>
      </p>
      <p>
        Forget your Password?
        <button
          className=" btn btn-link text-primary pe-auto text-decoration-none"
          onClick={resetPassword}
        >
          Reset Password
        </button>
      </p>
      <SocailLogin></SocailLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
