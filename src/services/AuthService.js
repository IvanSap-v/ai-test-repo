// Simulates authentication service.  In a real application, this would make API calls to a backend authentication service.

const AuthService = {
  login: (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate successful login for any username/password
        if (username && password) {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 500); // Simulate network latency
    });
  },
  register: (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate successful registration for any username/password
        if (username && password) {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 500); // Simulate network latency
    });
  }
};

export default AuthService;