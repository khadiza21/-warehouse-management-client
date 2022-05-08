import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../Shared/hooks/useToken";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const [token] = useToken(user || user1);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let errorElement;

  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }

  if (token) {
    navigate(from, { replace: true });
  }

  return (
    <div className=" my-5">
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-success w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-success w-50"></div>
      </div>
      {errorElement}
      <div className="">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-success w-50 d-block mx-auto my-2"
        >
          <i class="fa-brands fa-google fw-bold fs-4 text-dark"></i>
          <span className="px-2 fw-bold">Google Sign In</span>
        </button>
        <button className="btn btn-success w-50 d-block mx-auto my-2">
          <i class="fa-brands fa-facebook-f fw-bold fs-4 text-dark"></i>
          <span className="px-2 fw-bold">Facebook Sign In</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-success w-50 d-block mx-auto"
        >
          <i class="fa-brands fa-github fw-bold fs-4 text-dark"></i>
          <span className="px-2 fw-bold">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
