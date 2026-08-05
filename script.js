const topLine = document.querySelector(".top-line");
const mainLine = document.querySelector("#result");

const piBtn = document.querySelector("#pi");
const rootBtn = document.querySelector("#root");
const brac1Btn = document.querySelector("#brac-o");
const brac2Btn = document.querySelector("#brac-c");

const acBtn = document.querySelector("#Ac");
const backspaceBtn = document.querySelector("#backspace");

const btn1 = document.querySelector("#one");
const btn2 = document.querySelector("#two");
const btn3 = document.querySelector("#three");
const btn4 = document.querySelector("#four");
const btn5 = document.querySelector("#five");
const btn6 = document.querySelector("#six");
const btn7 = document.querySelector("#seven");
const btn8 = document.querySelector("#eight");
const btn9 = document.querySelector("#nine");
const btn0 = document.querySelector("#zero");
const btnDot = document.querySelector("#dot");

const divBtn = document.querySelector("#div");
const mulBtn = document.querySelector("#mul");
const minBtn = document.querySelector("#min");
const plusBtn = document.querySelector("#plus");

const equalsBtn = document.querySelector("#equals");

piBtn.addEventListener("click", () => {
  if (isError(mainLine.textContent)) {
    mainLine.lastChild.remove();
  }
  const textNode = document.createTextNode("π");
  mainLine.append(textNode);
});
rootBtn.addEventListener("click", () => {
  if (isError(mainLine.textContent)) {
    mainLine.lastChild.remove();
  }
  const textNode = document.createTextNode("√");
  mainLine.append(textNode);
});
brac1Btn.addEventListener("click", () => {
  if (isError(mainLine.textContent)) {
    mainLine.lastChild.remove();
  }
  const textNode = document.createTextNode("(");
  mainLine.append(textNode);
});
brac2Btn.addEventListener("click", () => {
  if (isError(mainLine.textContent)) {
    mainLine.lastChild.remove();
  }
  const textNode = document.createTextNode(")");
  mainLine.append(textNode);
});
acBtn.addEventListener("click", () => {
  mainLine.textContent = "";
});
acBtn.addEventListener("dblclick", () => {
  topLine.textContent = "";
});

backspaceBtn.addEventListener("click", () => {
  if (mainLine.textContent) {
    mainLine.lastChild.remove();
  }
});

btn1.addEventListener("click", () => {
  if (isError(mainLine.textContent)) {
    mainLine.lastChild.remove();
  }
  const textNode = document.createTextNode("1");
  mainLine.append(textNode);
});
btn2.addEventListener("click", () => {
  if (isError(mainLine.textContent)) {
    mainLine.lastChild.remove();
  }
  const textNode = document.createTextNode("2");
  mainLine.append(textNode);
});
btn3.addEventListener("click", () => {
  if (isError(mainLine.textContent)) {
    mainLine.lastChild.remove();
  }
  const textNode = document.createTextNode("3");
  mainLine.append(textNode);
});
btn4.addEventListener("click", () => {
  if (isError(mainLine.textContent)) {
    mainLine.lastChild.remove();
  }
  const textNode = document.createTextNode("4");
  mainLine.append(textNode);
});
btn5.addEventListener("click", () => {
  if (isError(mainLine.textContent)) {
    mainLine.lastChild.remove();
  }
  const textNode = document.createTextNode("5");
  mainLine.append(textNode);
});
btn6.addEventListener("click", () => {
  if (isError(mainLine.textContent)) {
    mainLine.lastChild.remove();
  }
  const textNode = document.createTextNode("6");
  mainLine.append(textNode);
});
btn7.addEventListener("click", () => {
  if (isError(mainLine.textContent)) {
    mainLine.lastChild.remove();
  }
  const textNode = document.createTextNode("7");
  mainLine.append(textNode);
});
btn8.addEventListener("click", () => {
  if (isError(mainLine.textContent)) {
    mainLine.lastChild.remove();
  }
  const textNode = document.createTextNode("8");
  mainLine.append(textNode);
});
btn9.addEventListener("click", () => {
  if (isError(mainLine.textContent)) {
    mainLine.lastChild.remove();
  }
  const textNode = document.createTextNode("9");
  mainLine.append(textNode);
});
btn0.addEventListener("click", () => {
  if (isError(mainLine.textContent)) {
    mainLine.lastChild.remove();
  }
  const textNode = document.createTextNode("0");
  mainLine.append(textNode);
});
btnDot.addEventListener("click", () => {
  if (isError(mainLine.textContent)) {
    mainLine.lastChild.remove();
  }
  const textNode = document.createTextNode(".");
  mainLine.append(textNode);
});

divBtn.addEventListener("click", () => {
  if (
    checkPrevious(mainLine.textContent, "/") == 1 ||
    isError(mainLine.textContent)
  ) {
    mainLine.lastChild.remove();
    mainLine.innerHTML += "<span>/</span>";
  } else if (checkPrevious(mainLine.textContent, "/") == 2) {
    mainLine.innerHTML += "<span>/</span>";
  }
});
mulBtn.addEventListener("click", () => {
  if (
    checkPrevious(mainLine.textContent, "*") == 1 ||
    isError(mainLine.textContent)
  ) {
    mainLine.lastChild.remove();
    mainLine.innerHTML += "<span>*</span>";
  } else if (checkPrevious(mainLine.textContent, "*") == 2) {
    mainLine.innerHTML += "<span>*</span>";
  }
});
plusBtn.addEventListener("click", () => {
  if (
    checkPrevious(mainLine.textContent, "+") == 1 ||
    isError(mainLine.textContent)
  ) {
    mainLine.lastChild.remove();
    mainLine.innerHTML += "<span>+</span>";
  } else if (checkPrevious(mainLine.textContent, "+") == 2) {
    mainLine.innerHTML += "<span>+</span>";
  }
});
minBtn.addEventListener("click", () => {
  if (
    checkPrevious(mainLine.textContent, "-") == 1 ||
    isError(mainLine.textContent)
  ) {
    mainLine.lastChild.remove();
    mainLine.innerHTML += "<span>-</span>";
  } else if (checkPrevious(mainLine.textContent, "-") == 2) {
    mainLine.innerHTML += "<span>-</span>";
  }
});

equalsBtn.addEventListener("click", () => {
  topLine.innerHTML = mainLine.innerHTML;
  mainLine.textContent = "=" + roundOff(arrangeBracket(mainLine.textContent));
});

function isError(str) {
  if (str == "=Error") {
    return true;
  } else {
    return false;
  }
}

function checkPrevious(eqn, char) {
  eqnArr = eqn.split(/([+\-*/π√()])/).filter(Boolean);
  let len = eqnArr.length;
  let arr = ["+", "-", "/", "*"];
  let index = arr.indexOf(char);
  arr.splice(index, 1);
  if (eqnArr[len - 1] == char) {
    return 0;
  } else if (arr.includes(eqnArr[len - 1])) {
    return 1;
  } else {
    return 2;
  }
}

function roundOff(num) {
  if (Number(num)) {
    return Math.round(num * 1000) / 1000;
  } else {
    return "Error";
  }
}

function convertPi(arrSum) {
  for (let i = 0; i < arrSum.length; i++) {
    if (arrSum[i] == "π") {
      arrSum.splice(i, 1, "3.141592653589793");
      if (Number(arrSum[i - 1])) {
        arrSum.splice(i, 0, "*");
      } else if (Number(arrSum[i + 1])) {
        arrSum.splice(i + 1, 0, "*");
      }
    }
  }
  return arrSum;
}

function convertSqrt(arrSum) {
  for (let i = 0; i < arrSum.length; i++) {
    if (arrSum[i] == "√" && Number(arrSum[i - 1])) {
      arrSum.splice(i, 2, "*", Math.sqrt(arrSum[i + 1]));
      i++;
    } else if (arrSum[i] == "√") {
      arrSum.splice(i, 2, Math.sqrt(arrSum[i + 1]));
    }
  }
  return arrSum;
}

function arrangeBracket(eqn) {
  eqnArr = eqn.split(/([+\-*/π√()])/).filter(Boolean);
  eqnArr = convertPi(eqnArr);
  for (let i = 0; i < eqnArr.length; i++) {
    if (eqnArr[i] == "(") {
      if (Number(eqnArr[i - 1]) || eqnArr[i - 1] == ")") {
        eqnArr.splice(i, 0, "*");
      }
      if (eqnArr[i - 1] == "-") {
        eqnArr.splice(i, 0, "1", "*");
      }
    }
  }
  return Bracket(eqnArr.join(""));
}

function Bracket(eqn) {
  eqnArr = eqn.split(/([()])/).filter(Boolean);
  console.log(eqnArr);
  const regex = /(?=.*\()(?=.*\))/;
  let start = -1;
  console.log(regex.test(eqn));
  while (regex.test(eqn)) {
    for (let i = eqnArr.length - 1; i >= 0; i--) {
      console.log(eqnArr[i]);
      if (eqnArr[i] == "(") {
        start = i;
        break;
      }
    }
    console.log(eqnArr[start + 1]);
    eqnArr.splice(start, 3, String(calculate(String(eqnArr[start + 1]))));
    eqn = eqnArr.join("");
    eqnArr = eqn.split(/([()])/).filter(Boolean);
    console.log(eqn);
  }
  console.log(eqn);
  return calculate(eqn);
}

function repairPlusMinusBefore(arrSum) {
  let arr = ["/", "*", "("];
  for (let i = 0; i < arrSum.length; i++) {
    if (arrSum[i] == "-" && arrSum[i - 1] == undefined) {
      arrSum.splice(i, 2, "-" + arrSum[i + 1]);
    } else if (arrSum[i] == "-" && arr.includes(arrSum[i - 1])) {
      arrSum.splice(i, 2, "-" + arrSum[i + 1]);
    }
  }
  return arrSum;
}

function calculate(eqn) {
  console.log(eqn);
  arrSum = eqn.split(/([+\-*/π√])/).filter(Boolean);
  console.log(arrSum);
  arrSum = repairPlusMinusBefore(arrSum);
  console.log(arrSum);

  console.log(arrSum);
  arrSum = convertSqrt(arrSum);
  console.log(arrSum);
  for (let i = 0; i < arrSum.length; i++) {
    if (arrSum[i] == "/") {
      let calc = Number(arrSum[i - 1]) / Number(arrSum[i + 1]);
      arrSum.splice(i - 1, 3, calc);
      i--;
    } else if (arrSum[i] == "*") {
      let calc = Number(arrSum[i - 1]) * Number(arrSum[i + 1]);
      arrSum.splice(i - 1, 3, calc);
      i--;
    }
  }

  console.log(arrSum);
  for (let i = 0; i < arrSum.length; i++) {
    if (arrSum[i] == "+") {
      let calc = Number(arrSum[i - 1]) + Number(arrSum[i + 1]);
      arrSum.splice(i - 1, 3, calc);
      i--;
    } else if (arrSum[i] == "-") {
      let calc = Number(arrSum[i - 1]) - Number(arrSum[i + 1]);
      arrSum.splice(i - 1, 3, calc);
      i--;
    }
  }
  return arrSum[0];
}
