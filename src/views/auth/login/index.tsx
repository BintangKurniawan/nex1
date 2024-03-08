import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./login.module.scss";
const LoginViews = () => {
  const router = useRouter();
  const handlerLogin = () => {
    router.push("/product");
  };
  return (
    <div className={styles.login}>
      <h1 className="text-3xl">Login Page</h1>
      <button onClick={handlerLogin}>Login</button>
      <p style={{ color: "red", border: "1px solid red", borderRadius: "10px", padding: "10px" }}>
        Belum punya akun? registrasi <Link href="/auth/register">disini</Link>
      </p>
    </div>
  );
};

export default LoginViews;
