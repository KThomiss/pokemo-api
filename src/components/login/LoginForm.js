import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { WORDPRESS_BASE_URL, TOKEN_PATH } from "../../constants/api";
import ErrorMessage from "../common/ErrorMessage";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const url = WORDPRESS_BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // eslint-disable-next-line
  const [auth, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    const formData = JSON.stringify(data);

    const options = {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(url, options);
      const json = await response.json();
      if (response.ok) {
        console.log("response", json);
        setAuth(json);
        navigate("/admin");
      } else {
        setLoginError("wrong username or password");
      }
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {loginError && <ErrorMessage>{loginError}</ErrorMessage>}
        <div>
          <label htmlFor="username">Username</label>
          <input {...register("username")} id="username" />
          {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input {...register("password")} type="password" id="password" />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        </div>
        <button className="form-btn">{submitting ? "Hold on" : "Login"}</button>
      </form>
    </>
  );
}

export default LoginForm;
