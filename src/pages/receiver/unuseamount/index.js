import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import clientpic from "src/assets/image/clientst.png";
import Layout from "src/common/components/Layout";
import styles from "src/common/styles/Dashboard.module.css";
import { getUserList } from "src/modules/getData/getUserList";
import Link from "next/link";

export default function Confirmation() {
  const router = useRouter();
  const [user, setUser] = useState({});
  useEffect(() => {
    console.log(router);
    const token = props.token;
    if (Object.keys(router.query).includes("id")) {
      getUserList(router.query.id, token)
        .then((res) => {
          setUser(res.data.data);
          // {...}
        })
        .catch((err) => console.log(err));
    }
  }, [router.query]);

  return (
    <>
      <Layout>
        <div className="container-fluid mx-auto w-100 my-5">
          <p className={styles.userName}>Transfer Money</p>
          <div
            className="col-10 col-sm-10 col-md-10 col-lg-12 my-4 d-flex"
            key={id}
          >
            <div className="mx-2">
              <Image src={clientpic} alt="google" width={50} height={50} />
            </div>
            <div className="w-50 my-auto">
              <p className={styles.userName}>
                {name}
                {lastname}
              </p>
              <p className={styles["transaction-description"]}>{phone}</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
