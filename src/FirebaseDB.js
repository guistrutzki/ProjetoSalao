import firebase from "./FirebaseConfig";

export const verifyLogin = function() {
  return new Promise((resolve, reject) => {
    let status;
    resolve(1);
    // firebase.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     status = 1;
    //     resolve(status);
    //   } else {
    //     status = 2;
    //     resolve(status);
    //   }
    // });
  });
};

export const loginWithFirebase = function(email, password) {
  return new Promise((resolve, reject) => {
    let status = 2;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        status = 1;
        resolve(status);
      })
      .catch(() => {
        status = 2;
        resolve(status);
      });
  });
};

export const signUpWithFirebase = function(name, email, password) {
  return new Promise((resolve, reject) => {
    let status = 2;
    const users = firebase.database().ref("users");

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(snapshot => {
        users
          .child(snapshot.user.uid)
          .set({
            name,
            uid: snapshot.user.uid,
            email
          })
          .then(() => {
            status = 1;
            resolve(status);
          })
          .catch(error => {
            status = 2;
            resolve(status);
            reject(error);
          });
      });
  });
};

export const makeForgot = function(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};
