import React, { FC, useState } from "react";

import Input from "../../Components/Input";
import Button, { ButtonType } from "../../Components/Button";
//@ts-ignore
import styles from "./SignUp.module.css";

type LabelProps = {
  title: string;
};

const Label: FC<LabelProps> = ({ title }) => {
  return <div className={styles.label}>{title}</div>;
};

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onBlurEmail = () => {
    // email
    // сделать функцию, которая проверяет правильно ли введен email, если нет, тогда сделать эррор
  };

  const onBlurPassword = () => {
    // password
    // должен быть больше 8 символов
  };

  const onBlurConfirmPassword = () => {
    // confirm password === password
    // должен быть больше 8 символов
  };

  return (
    <div className={styles.container}>
      <div>
        <div>Back to home</div>
        <div>Sign Up</div>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <Label title={"Name"} />
          <Input value={name} onChange={setName} placeholder={"Your name"} />
        </div>

        <div className={styles.inputContainer}>
          <Label title={"Email"} />
          <Input
            value={email}
            onChange={setEmail}
            placeholder={"Your email"}
            onBlur={onBlurEmail}
          />
          {/*{emailError && <div></div>}*/}
        </div>

        <div className={styles.inputContainer}>
          <Label title={"Password"} />
          <Input
            value={password}
            onChange={setPassword}
            placeholder={"Your password"}
            onBlur={onBlurPassword}
          />
          {/*{passwordError && <div></div>}*/}
        </div>

        <div className={styles.inputContainer}>
          <Label title={"Confirm Password"} />
          <Input
            value={confirmPassword}
            onChange={setConfirmPassword}
            placeholder={"Confirm password"}
            onBlur={onBlurConfirmPassword}
          />
          {/*{confirmPasswordError && <div></div>}*/}
        </div>

        <div>
          <Button
            type={ButtonType.Primary}
            title={"Sign up"}
            onClick={() => {}}
            className={styles.signUpButton}
          />
          <div>
            Already have an account? <span>Sign In</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
