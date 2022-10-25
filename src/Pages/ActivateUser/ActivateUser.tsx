import React, { useEffect, useState } from "react";
//@ts-ignore
import styles from "./ActivateUser.module.css";
import { useDispatch } from "react-redux";
import { Link,  useNavigate,  useParams } from "react-router-dom";
import { activateUser } from "../../Redux/reducers/authReducer";
import { RegistrationStatus } from "../../Utils/globalTypes";
import { PathNames } from "../Router/Router";
import classnames from "classnames";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";
import Button, { ButtonType } from "../../Components/Button";
import Title from "../../Components/Title";

const ActivateUser = () => {
  const { theme } = useThemeContext();

  const dispatch = useDispatch();
  const [registrationStatus, setRegistrationStatus] = useState(
    RegistrationStatus.Failed
  );

  const handleStatus = (status: RegistrationStatus) => {
    setRegistrationStatus(status);
  };

  const params = useParams();

  useEffect(() => {
    if (params.uid && params.token) {
      dispatch(
        activateUser({
          params: { uid: params.uid, token: params.token },
          callback: handleStatus
        })
      );
    } else {
      handleStatus(RegistrationStatus.Failed);
    }
  }, [params.token, params.uid]);
  const navigate = useNavigate();

  const onBackHomeClick = () => {
    navigate(PathNames.Home);
  };

  return (
    <div
      className={classnames(styles.confirmRegistation, {
        [styles.darkContainer]: theme === Theme.Dark
      })}
    >
      <div className={classnames(styles.container)}>
        <div className={styles.titleWrapper}>
          <div className={styles.backToHome} onClick={onBackHomeClick}>Back to Home</div>
          {registrationStatus === RegistrationStatus.Success && (
            <Title title={"Success"}></Title>
          )}
          {registrationStatus === RegistrationStatus.Failed && (
            <Title title={"Failed"}></Title>
          )}
        </div>
      </div>
      <div className={classnames(styles.formContainer)}>
        <div className={styles.buttonAndText}>
          <div className={styles.text}>
            {registrationStatus === RegistrationStatus.Success && (
              <div>
                <div>Thank your for registation</div> Registration successful,
                please Log In
              </div>
            )}
            {registrationStatus === RegistrationStatus.Failed && (
              <div>
                <div>Thank your for registation</div>
                Registration failed, please try to Sign Up again.
              </div>
            )}
          </div>
          {registrationStatus === RegistrationStatus.Success && (
            <Link to={PathNames.SignIn} className={styles.signUpButton}>
              <Button
                type={ButtonType.Primary}
                title={"Log In "}
                className={styles.signUpButton}
              ></Button>
            </Link>
          )}
          {registrationStatus === RegistrationStatus.Failed && (
            <Link to={PathNames.SignUp} className={styles.signUpButton}>
              <Button
                type={ButtonType.Primary}
                title={"Sign Up"}
                className={styles.signUpButton}
              ></Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default ActivateUser;
