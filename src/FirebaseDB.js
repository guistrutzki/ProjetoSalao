export const verifyLogin = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let status = 2;

      resolve(status);
    }, 2000);
  });
};

export const makeLogin = function(email, password) {
  return new Promise((resolve, reject) => {
    let status = 1;
    setTimeout(() => {
      resolve(status);
    }, 2000);
  });
};
