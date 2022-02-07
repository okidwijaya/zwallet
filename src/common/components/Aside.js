import styles from "src/common/styles/Aside.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Aside() {
    const router = useRouter();
  return (
    <aside className={styles.menu}>
      <div>
        <Link href="/dashboard" passHref>
          <a pathname={router.pathname}>
            {" "}
            <i className="bi bi-grid"></i>
            Dashboard
          </a>
        </Link>
      </div>

      <div>
        <Link href="/reciver" passHref>
          <a pathname={router.pathname}>
            {" "}
            <i className="bi bi-arrow-up"></i>
            Transfer
          </a>
        </Link>
      </div>

      <div>
        <Link href="/topup" passHref>
          <a pathname={router.pathname}>
            <i className="bi bi-plus-lg"></i>
            Top up
          </a>
        </Link>
        </div>
        <div>
          <Link href="/profile" passHref>
            <a pathname={router.pathname}>
              <i className="bi bi-person"></i>
              Profil
            </a>
          </Link>
        </div>

        <button className={styles.logout}>
          <i className= "bi bi-upload"></i>
          Logout
        </button>
    </aside>
  );
}
