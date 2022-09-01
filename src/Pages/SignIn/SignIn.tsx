import React, { useState, useEffect, useRef } from "react";

import Input from "../../Components/Input";
import Label from "../../Components/Label";
import Button, { ButtonType } from "../../Components/Button";
//@ts-ignore
import styles from "./SignIn.module.css";

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);

  const inputRef = useRef<any>();

  useEffect(() => {
    if (inputRef) {
      inputRef.current.focus();
    }
  }, []);

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

  const onBlurEmail = () => {
    setEmailTouched(true);
  };

  const onBlurPassword = () => {
    setPasswordTouched(true);
  };

  return (
    <div className={styles.container}>
      <div>
        <div>Back to home</div>
        <div>Sign In</div>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <Label title={"Email"} />
          <input
            value={email}
            onChange={(event: any) => setEmail(event.target.value)}
            placeholder={"Your email"}
            onBlur={onBlurEmail}
          />
          {emailTouched && emailError && <div>{emailError}</div>}
        </div>
        <div className={styles.inputContainer}>
          <Label title={"Password"} />
          <input
            ref={inputRef}
            value={password}
            onChange={(event: any) => setPassword(event.target.value)}
            placeholder={"Your password"}
            onBlur={onBlurPassword}
            // error={!!passwordError}
          />
          {passwordTouched && passwordError && <div>{passwordError}</div>}
        </div>
        <div>
          <Button
            type={ButtonType.Primary}
            title={"Sign In"}
            onClick={() => {}}
            className={styles.signUpButton}
          />
          <div>
            Don’t have an account? <span>Sign Up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
