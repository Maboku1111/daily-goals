import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "/config/firebase";

const handleSignUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(`User signed up: ${userCredential.user.email}`);
  } catch (error) {
    console.error(`Error signing up: ${error.message} (${error.code}`);
  }
};

export { handleSignUp };
