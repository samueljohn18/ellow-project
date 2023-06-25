import { useRef, useState } from "react";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const [gender, setGender] = useState();
  const [nationality, setNationality] = useState("");

  const inputEmail = useRef();
  const inputName = useRef();
  const inputNumber = useRef();
  const inputAddress = useRef();

  function detailsSubmitHandler(event) {
    event.preventDefault();
    console.log(
      inputName.current.value,
      inputEmail.current.value,
      inputNumber.current.value,
      gender,
      inputAddress.current.value,
      nationality
    );
    inputName.current.value = "";
    inputAddress.current.value = "";
    inputNumber.current.value = "";
    inputEmail.current.value = "";
    setGender(null);
    setNationality("");
  }

  function nationalityHandler(event) {
    setNationality(event.target.value);
  }

  function genderHandler(event) {
    setGender(event.target.value);
  }

  return (
    <form onSubmit={detailsSubmitHandler} className={styles.formContainer}>
      <div>
        <label htmlFor="name" className={styles.label}>
          Full Name
        </label>
        <input type="text" id="name" ref={inputName} className={styles.inputField} />
      </div>
      <div>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input type="email" id="email" ref={inputEmail} className={styles.inputField} />
      </div>
      <div>
        <label htmlFor="phno" className={styles.label}>
          Phone Number
        </label>
        <input type="number" id="phno" ref={inputNumber} className={styles.inputField} />
      </div>
      <div className={styles.radioGroup}>
        <p>Select your gender</p>
        <input
          type="radio"
          name="gender"
          id="male"
          value="Male"
          onChange={genderHandler}
          className={styles.radioInput}
        />
        <label htmlFor="male" className={styles.radioLabel}>
          Male
        </label>
        <input
          type="radio"
          name="gender"
          id="female"
          value="Female"
          onChange={genderHandler}
          className={styles.radioInput}
        />
        <label htmlFor="female" className={styles.radioLabel}>
          Female
        </label>
      </div>
      <div>
        <label htmlFor="address" className={styles.label}>
          Address
        </label>
        <input type="text" id="address" ref={inputAddress} className={styles.inputField} />
      </div>
      <div>
        <label htmlFor="dropdown" className={styles.label}>
          Nationality
        </label>
        <select id="dropdown" value={nationality} onChange={nationalityHandler} className={styles.selectField}>
          <option value="">-- Select --</option>
          <option value="India">India</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Nepal">Nepal</option>
        </select>
      </div>
      <div className={styles.buttonContainer}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Dashboard;
