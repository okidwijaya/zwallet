import { useSelector } from "react-redux";
import styles from "src/common/styles/Header.module.css";
import { connect } from "react-redux";
import { getUserId } from "src/modules/getData/getUserList";
import { profileUser } from "src/store/actions/user";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function ProfileNav(props) {
  const router = useRouter();
  const token = useSelector((state) => state.auth.userData.token);
  const test = useSelector((state) => state.auth.userData.id);
  if (token == null) {
    // router.push("/");
    console.log("null");
  }
  const [user, setUser] = useState({});

  // const token = props.token;
  // const receiverId = props.id;

  // async function getStaticProps({ token, test }) {
  //   const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/user/" + test, {
  //     headers: {
  //       Authorization: "Bearer " + token,
  //     },
  //   });
  //   const posts = await res.json();
  //   setUser(res.data.data);
  //   return console.log("test res await", posts);
  // }
  useEffect(() => {
    getUserId(test, token)
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

  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;
  return (
    <div>
      <div className="w-50 my-auto">
        <p className={`${styles["header-title"]} my-0`}>
          {/* {test.lastName}
          {test.firstName} */}
          {/* {props.id !== undefined
            ? `${props.test.lastName} ${props.test.firstName}`
            : "-"} */}
          {/* {props.id} */}
          {user.lastName}
          {user.firstName}
        </p>
        <p className={`${styles["header-title-desc"]} my-0`}>
          {/* {token !== null ? `${test.noTelp}` : "-"} */}
          {user.noTelp !== null ? user.noTelp : "-"}
          {/* {test.user.noTelp !== null ? test.user.noTelp : "-"} */}
        </p>
      </div>
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     userDispatch: (data) => {
//       dispatch(profileUser(data));
//       // console.log("user data :" + data);
//     },
//   };
// };

// const mapStateToProps = (state) => {
//   return {
//     user: state.user.data,
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ProfileNav);
export default ProfileNav;
