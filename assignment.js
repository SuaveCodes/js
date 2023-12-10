const userDatabase = {
  daniel: {
    firstName: "Daniel",
    email: "dannyyo@gmail.com",
    password: "danny123",
  },
  uba: {
    firstName: "Uba",
    email: "ubajekwe@gmail.com",
    password: "uba123",
  },
  helen: {
    firstName: "Helen",
    email: "helen@gmail.com",
    password: "helen123",
  },
  paul: {
    firstName: "Paul",
    email: "paul@gmail.com",
    password: "paul123",
  },
};

displayUserDetails();
alert("you're done here. Thank you!");

function countUsername(username) {
  if (username == null) return true;
  let count = username.length;
  if (count > 10) {
    return false;
  } else {
    return true;
  }
}

function validatePassword(password) {
  if (password == null) {
    return true;
  }
  if (password.length < 6) {
    return false;
  } else {
    return true;
  }
}

function displayUserDetails() {
  let username = prompt("enter your username");
  while (countUsername(username) == false) {
    username = prompt("Username invalid, please enter your username");
  }
  if (username == null) {
    return;
  }
  let password = prompt("enter password");
  while (validatePassword(password) == false) {
    password = prompt("Password invalid, please enter a valid password");
  }
  if (password == null) {
    return;
  }

  let passwordConfirm = prompt("Please confirm your password");
  while (passwordConfirm !== password) {
    passwordConfirm = prompt("Invalid password, please confirm your password");
    console.log("====>>", passwordConfirm);
    if (passwordConfirm == null) {
      return;
    }
  }
  const user = userDatabase[username];
  console.log("===>>>",userDatabase)
  if (user == undefined) {
    alert("user is undefined, please register on the app");
    return;
  }

  alert(`
user found with the following details:
    firstName: ${user.firstName}
    email: ${user.email}
    password:${user.password}
`)


  alert("you're done here. Thank you!");
}
