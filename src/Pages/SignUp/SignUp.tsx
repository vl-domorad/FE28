import React, { FC, useState, useEffect } from "react";
//@ts-ignore
import styles from "./SignUp.module.css";
import classNames from "classnames";


import Title from "../../Components/Title";
import Input from "../../Components/Input";
import Button, { ButtonType } from "../../Components/Button";
import Label from "../../Components/Label";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import {PathNames} from "../Router/Router";
import {NavLink} from "react-router-dom";


const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const SignUp = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);


  const { theme} = useThemeContext();


  useEffect(() => {
    if (emailTouched && !validateEmail(email)) {
      setEmailError("Set correct email");
    } else {
      setEmailError("");
    }
  }, [emailTouched, email]);

  useEffect(() => {
    if (passwordTouched && password.length < 8) {
      setPasswordError("Enter more than 8 characters");
    } else {
      setPasswordError("");
    }
  }, [passwordTouched, password]);

  useEffect(() => {
    if (confirmPasswordTouched && confirmPassword.length < 8 && confirmPassword != password) {
      setConfirmPasswordError("Confirm validation failed. Password does not match");
    } else {
      setConfirmPasswordError("");
    }
  }, [confirmPasswordTouched, confirmPassword, password]);




  const onBlurEmail = () => {
    setEmailTouched(true);
  };

  const onBlurPassword = () => {
    setPasswordTouched(true);
  };

  const onBlurConfirmPassword = () => {
    // confirm password === password
    // должен быть больше 8 символов
    setConfirmPasswordTouched(true)
  };

  return (
    <div className={classNames(styles.container, {
      [styles.darkContainer]: theme === Theme.Dark
    })} >
      <div className={styles.headForm}>
        <div>Back to Home</div>
        <Title title={"Sign Up"} />
      </div>
      <div className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <Label title={"Name"} />
          <Input placeholder={"Your name"} onChange={setName} value={name} />
        </div>

        <div className={styles.inputContainer}>
          <Label title={"Email"} />
          <Input
            placeholder={"Your email"}
            onChange={setEmail}
            onBlur={onBlurEmail}
            value={email}
            error={!!emailError}
          />
          {emailTouched && emailError && <div>{emailError}</div>}
        </div>

        <div className={styles.inputContainer}>
          <Label title={"Password"} />
          <Input
            placeholder={"Your password"}
            onChange={setPassword}
            onBlur={onBlurPassword}
            value={password}
            error={!!passwordError}
          />
          {passwordTouched && passwordError && <div>{passwordError}</div>}
        </div>

        <div className={styles.inputContainer}>
          <Label title={"Confirm password"} />
          <Input
            placeholder={"Confirm password"}
            onChange={setConfirmPassword}
            onBlur={onBlurConfirmPassword}
            value={confirmPassword}
            error={!!confirmPasswordError}
          />
          {confirmPasswordTouched && confirmPasswordError && <div>{confirmPasswordError}</div>}
        </div>
        <div>
          <Button
            type={ButtonType.Primary}
            title={"Sign Up"}
            onClick={() => {
              console.log("primary");
            }}
            className={styles.signUpBtn}
            disabled={false}
          />
        </div>

        <div className={styles.haveAccount}>
          Already have an account? <NavLink to={PathNames.SignIn}>Sign In</NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
