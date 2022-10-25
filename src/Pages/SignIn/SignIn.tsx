import React, { FC, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

//@ts-ignore
import styles from "./SignIn.module.css";
import classNames from "classnames";
import Title from "../../Components/Title";
import Input from "../../Components/Input";
import Button, { ButtonType } from "../../Components/Button";
import Label from "../../Components/Label";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import { PathNames } from "../Router";
import { authUser } from "../../Redux/reducers/authReducer";

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);

  const { theme } = useThemeContext();

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

  const navigate = useNavigate();

  const onBackHomeClick = () => {
    navigate(PathNames.Home);
  };

  const onSignIn = () => {
    dispatch(authUser({ email, password }));
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles.darkContainer]: theme === Theme.Dark
      })}
    >
      <div className={styles.headForm}>
        <div className={styles.backHomeBtn} onClick={onBackHomeClick}>
          Back to Home
        </div>
        <Title title={"Sign In"} />
      </div>
      <div className={styles.formContainer}>
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
          {passwordTouched && passwordError && (
            <div className={classNames(styles.passwordError)}>
              {passwordError}
            </div>
          )}
          <div className={classNames(styles.forgotPassword)}>
            Forgot password?
          </div>
        </div>

        <div>
          <Button
            type={ButtonType.Primary}
            title={"Sign In"}
            onClick={onSignIn}
            className={styles.signInBtn}
            disabled={false}
          />
        </div>

        <div className={styles.haveAccount}>
          Don’t have an account? <Link to={PathNames.SignUp}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
