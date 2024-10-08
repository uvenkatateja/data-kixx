
"use client";
import styles from "./page.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useAppSelector((state) => state.authReducer);
  const router = useRouter();

  return (
    <div className={styles.home}>
      {!auth.isAuth ? (
        <div className={styles.center}>
          <h1>
            Welcome to the <strong>DATA</strong>
          </h1>
          <br />
          <div>
            <button
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </button>
            &nbsp;
            <button
              onClick={() => {
                router.push("/signup");
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.center}>
          <h1>Welcome {auth.user?.name}</h1>
          <button
            onClick={() => {
              router.push("/myfiles");
            }}
          >
            My Files
          </button>
        </div>
      )}
    </div>
  );
}
