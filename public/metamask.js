const serverUrl = "https://cvkir9ahigve.usemoralis.com:2053/server";
const appId = "6BJHg3l8LEkc3DhWTrYkOug6V7WkxpuRkExAYwUR";
Moralis.start({ serverUrl, appId });

/* Authentication code */
async function login() {
  let user = Moralis.User.current();
  
  if (!user) {
    user = await Moralis.authenticate({ signingMessage: "Log in using Yustura" })
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
        document.getElementById('splash_input').value =  user.get("ethAddress");

      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

window.localStorage.setItem('connectorId', user.get("ethAddress"));

