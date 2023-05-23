import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
   
        apiKey: "AIzaSyC3oL1phoBPuWCVGWWHeIN0XZwJ3R-hva0",
        authDomain: "new-project-8396b.firebaseapp.com",
        projectId: "new-project-8396b",
        storageBucket: "new-project-8396b.appspot.com",
        messagingSenderId: "390862427230",
        appId: "1:390862427230:web:a76ff0676eb456604a90cf"
      };


firebase.initializeApp(firebaseConfig);

const signUp = async (email, password) => {
  // Регистрация нового пользователя
};

const signIn = async (email, password) => {
  // Вход пользователя
};

const signOut = async () => {
  // Выход пользователя
};

export { signUp, signIn, signOut };
