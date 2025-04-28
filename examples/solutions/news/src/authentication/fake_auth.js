
export const login = (user, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundUser = usersTable.find(u => u.username === user && u.password === password);
      if (foundUser)
        resolve(foundUser);
      else
        reject("Bad username or password");
    }, 1000);
  })
}

// Pretend to send an Ajax request to the server to delete its token. We delete the cookie on our side.
export const logout = () => {
  return new Promise((resolve, reject)=>{
    resolve("Logged out");    
  });
};

export const register = user => {
  return new Promise((resolve, reject) => {
    try {
      if (!user.username) throw "Need a username";
      if (!user.password) throw "Need a password";
      setTimeout(() => {
        const newId = usersTable.map(u => u.id).sort((a, b) => a > b)[usersTable.length] + 1;
        const newUser = { ...user, id: newId };
        usersTable.push(newUser);
        resolve(newUser);
      })
    }
    catch (exception) {
      reject(exception);
    }
  })
}

const usersTable = [
  { id: 1, username: "jo@test.com", password: "pass", first: "Jo", last: "Kim" },
  { id: 2, username: "le@test.com", password: "pass", first: "Le", last: "Nguyen" },
  { id: 3, username: "jon@test.com", password: "pass", first: "Jon", last: "Abina" },
  { id: 4, username: "sue@test.com", password: "pass", first: "Sue", last: "Smith" },
  { id: 5, username: "mo@test.com", password: "pass", first: "Mo", last: "Zith" },
]