// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeT0-Kf4DcB_5S225y6PVtkxx_W4UuRAQ",
  authDomain: "fir-image-upload-bdbc9.firebaseapp.com",
  projectId: "fir-image-upload-bdbc9",
  storageBucket: "fir-image-upload-bdbc9.appspot.com",
  messagingSenderId: "868503341378",
  appId: "1:868503341378:web:bdc66ac25a4cd9f72420db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);