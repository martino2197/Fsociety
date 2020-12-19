// ------------------------------ import libraries
import React, { useState } from "react";
import { useRouter } from "next/router";
// import { useDispatch } from "react-redux";
import JwtDecode from "jwt-decode";

// ------------------------------ import styles and images
import { LoginBox, LoginTitle, LoginForm, LoginButton } from "./styles";
import loginUser from "../../utils/Login";
// import { Rate } from "../Rate";

// ------------------------------------ COMPONENT ------------------------------------//

export const LoginComponent = () => {
  // const dispatch = useDispatch();

  const router = useRouter();
  const [form, setForm] = useState();
  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // submit the form to the store and close the modal.
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const login = await loginUser(form);
      console.log(login);
      if (login.message === "Login success") {
        const { id } = JwtDecode(login.data.accessToken);
        // dispatch(getUserData(id, login.data.token));
        console.log(id);
        router.push("/Home");
      }
    } catch (error) {
      // dispatch(
      //   showIndicator({
      //     status: true,
      //     message: "Invalid email or password ❌",
      //   })
      // );
      // dispatch(setIndicatorPosition(mousePosition));
      console.log("error");
    }
  };
  return (
    <LoginBox>
      <LoginTitle>Bienvenido a Talent Placement Search</LoginTitle>
      <LoginForm onSubmit={handleSubmit}>
        {/* onSubmit={handleSubmit} */}
        <p>User Name</p>
        <input
          aria-label="email"
          type="email"
          placeholder="email"
          name="email"
          required
          onChange={handleInput}
        />
        <p>Password</p>
        <input
          aria-label="password"
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={handleInput}
        />
        <LoginButton type="submit" submit onClick={handleSubmit}>
          LOGIN
        </LoginButton>
      </LoginForm>
    </LoginBox>
  );
};
