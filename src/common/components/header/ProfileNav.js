import { useSelector } from "react-redux";
import styles from "src/common/styles/Header.module.css";
import { connect } from "react-redux";
import { getUserId } from "src/modules/getData/getUserList";
import { profileUser } from "src/store/actions/user";
import React, { useState, useEffect } from "react";

function ProfileNav(props) {
  const test = useSelector((state) => state.user.data);
  const [user, setUser] = useState({});

  const token = props.token;
  const receiverId = props.id;

  useEffect(() => {
    getUserId(receiverId, token)
      .then((res) => {
        setUser({ ...res.data.data });
        const data = {
          ...res.data.data,
        };
        // console.log(res.data.data);
        props.userDispatch(data);
        // dispatch(profileUser(data));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="w-50 my-auto">
        <p className={`${styles["header-title"]} my-0`}>
          {/* {test.user.lastName}
          {test.user.firstName} */}
          {props.id !== undefined
            ? `${props.user.lastName} ${props.user.firstName}`
            : "-"}
          {/* 
          {props.user.lastName}
          {props.user.firstName} */}
        </p>
        <p className={`${styles["header-title-desc"]} my-0`}>
          {props.id !== undefined ? `${props.user.noTelp}` : "-"}
          {/* {props.user.noTelp !== null ? props.user.noTelp : "-"} */}
          {/* {test.user.noTelp !== null ? test.user.noTelp : "-"} */}
        </p>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    userDispatch: (data) => {
      dispatch(profileUser(data));
      // console.log("user data :" + data);
    },
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user.data,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileNav);
