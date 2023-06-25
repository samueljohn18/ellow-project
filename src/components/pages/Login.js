import { useRef, useState } from "react";
import styles from "./Login.module.css";

function Login(props) {
  const [formIsValid, setFormIsValid] = useState(false);
  const InputEmailRef = useRef();
  const InputPasswordRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = InputEmailRef.current.value;
    const enteredPassword = InputPasswordRef.current.value;
    if (
      (enteredEmail !== "samuel@react.com" &&
        enteredEmail !== "nidhin.babu@ellow.io") ||
      enteredPassword.trim().length < 5
    ) {
      setFormIsValid(true);
      return;
    }
    props.onLogin(enteredEmail, enteredPassword);
    InputEmailRef.current.value = "";
    InputPasswordRef.current.value = "";
  }

  return (
    <form onSubmit={submitHandler} className={styles.container}>
      <div className={styles["form-group"]}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={InputEmailRef} />
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="pass">Password</label>
        <input type="password" id="pass" ref={InputPasswordRef} />
      </div>
      {formIsValid && <p className={styles.error}>Invalid input</p>}
      <div>
        <button type="submit" className={styles['submit-btn']}>
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;
