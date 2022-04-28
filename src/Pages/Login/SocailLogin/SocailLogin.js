import React from "react";
import google from "../../../images/socail/google.png";
import facebook from "../../../images/socail/facebook.png";
import github from "../../../images/socail/GitHubMarkremovebgpreview30x30.png";
import auth from "../../../firebase.init";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Lodeing from "../../Shared/Lodeing/Lodeing";
import useToken from "../../../Hooks/useToken";
const SocailLogin = () => {
  /*signInWithGithub */
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  /*signInWithGoogle */
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let erroElement;
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // hooks token
  // const [token] = useToken(user || user1);

  if (loading || loading1) {
    return <Lodeing></Lodeing>;
  }

  if (error || error1) {
    erroElement = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }
  if (user || user1) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-3 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {erroElement}
      <div className="">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-48 mx-auto d-block my-3"
        >
          <img src={google} alt="" />
          <span className="px-2"> Google sign in</span>
        </button>
        <button className="btn btn-info w-48 mx-auto d-block my-3">
          <img src={facebook} alt="" />
          <span className=""> Facebook sign in</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info w-48 mx-auto d-block my-3"
        >
          <img src={github} alt="" />
          <span className="px-2"> Github sign in</span>
        </button>
      </div>
    </div>
  );
};

export default SocailLogin;
