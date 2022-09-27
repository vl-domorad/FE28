import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { RegistrationStatus } from "../../Utils/globalTypes";
import { PathNames } from "../Router/Router";
import { activateUser } from "../../Redux/reducers/authReducer";

const ActivateUser = () => {
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
          callback: handleStatus,
        })
      );
    } else {
      handleStatus(RegistrationStatus.Failed);
    }
  }, [params.token, params.uid]);

  return (
    <div>
      <div>Thank you for registration</div>
      {registrationStatus === RegistrationStatus.Success && (
        <div>
          Registration successful, please
          <NavLink to={PathNames.SignIn}> Log In </NavLink>
        </div>
      )}
      {registrationStatus === RegistrationStatus.Failed && (
        <div>
          Registration failed, please try to
          <NavLink to={PathNames.SignUp}> Sign Up </NavLink>
          again.
        </div>
      )}
    </div>
  );
};

//На этой странице получаем uid + token
//На useEffect швыряем беку uid + token
//Если успешно - сообщение registration successful -> Please Log In
//Если неуспешно - сообщение registration failed -> Please try tu Sign Up again

export default ActivateUser;
