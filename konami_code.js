const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let place = 0;

function init() {
  // Write your JavaScript code inside the init() function
  document.addEventListener("keydown", e => {
    if (parseInt(e.detail) === code[place]) {
      place++
      if (place === code.length) {
        alert("Congrats!");
        place = 0; 
      }
    }
    else {
      place = 0;
    }
  });

}
