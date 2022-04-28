import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Lodeing from "../../Shared/Lodeing/Lodeing";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  if (loading) {
    return <Lodeing></Lodeing>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div className="text-center mt-5">
        <h3 className="text-danger">Your email not verified !!!</h3>
        <h4 className="text-success">Pleace verified email your address ?</h4>
        <button
          className="btn btn-primary mt-2"
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent email");
          }}
        >
          Verify email
        </button>
        <ToastContainer />
      </div>
    );
  }
  return children;
};

export default RequireAuth;
