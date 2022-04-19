import firebase from "firebase/app";
import firebaseConfig from "../hidden/firebaseConfig";
import "firebase/performance";

firebase.initializeApp(firebaseConfig);
const perf = firebase.performance();
console.log(perf.dataCollectionEnabled);

async function component() {
  const element = document.createElement("div");
  element.innerHTML = "hello";

  return element;
}

document.body.appendChild(component());

// WITH NO CONFIG, -rw-r--r--  1 jackdwyer  primarygroup    43K Apr 19 11:39 dist/main.js
// Run `yarn run build`
// Run `ls -lh dist/main.js` to get the above
