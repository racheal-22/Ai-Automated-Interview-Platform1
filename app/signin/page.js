// app/sign-up/page.js
import Link from 'next/link';
import styles from '../../styles/SignUp.module.css'; // Optional, for styling

export default function SignUp() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Sign Up</h1>
      <p className={styles.subheading}>Create your account to get started.</p>

      {/* Sign-Up Form (optional) */}
      <form className={styles.form}>
        {/* Add form fields like email, password, etc. */}
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className={styles.submitButton}>Sign Up</button>
      </form>

      {/* Sign-In Button (Redirects to the provided URL) */}
      <div className={styles.signInContainer}>
        <p className={styles.signInText}>Already have an account?</p>
        
          <button className={styles.signInButton}>Sign In</button>
        
      </div>
    </div>
  );
}
