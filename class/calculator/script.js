const numberInputRef = document.querySelector("#number-input");

let number = "0";

function insert(character) {
  if (numberInputRef.value === "0" && character === "0") {
    return;
  }

  if (numberInputRef.value === "0" && character !== "0") {
    number = "";
  }
  number += character;
  numberInputRef.value = number;
}

function clearInput() {
  number = "0";
  numberInputRef.value = number;
}
