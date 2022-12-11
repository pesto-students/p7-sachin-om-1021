const letters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";

//! function - 1 to be used in promise
function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

const promise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve(randomNumber()), 3000);
  } else {
    reject("cant fetch data");
  }
});

async function tokenNumber() {
  console.log("\nwaiting to fetch you token number...");
  const token = await promise;
  console.log("your token number is -> " + token);
}

tokenNumber();

//! function - 2 to be used with generators

function* generatePassword() {
  let password = "";
  for (let i = 0; i < 8; i++) {
    let index = Math.floor(Math.random() * letters.length);
    password += letters.charAt(index);
  }
  yield password;
}

function* userDetails() {
  console.log("\nGenerating a strong password for you... ");
  yield* generatePassword();
}

setTimeout(() => {
  for (let x of userDetails()) {
    setTimeout(() => console.log("your password is -> " + x), 2000);
  }
}, 4000);
