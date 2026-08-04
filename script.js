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
  const textNode = document.createTextNode("π");
  mainLine.append(textNode);
});
rootBtn.addEventListener("click", () => {
  const textNode = document.createTextNode("√");
  mainLine.append(textNode);
});
brac1Btn.addEventListener("click", () => {
  const textNode = document.createTextNode("(");
  mainLine.append(textNode);
});
brac2Btn.addEventListener("click", () => {
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
  const textNode = document.createTextNode("1");
  mainLine.append(textNode);
});
btn2.addEventListener("click", () => {
  const textNode = document.createTextNode("2");
  mainLine.append(textNode);
});
btn3.addEventListener("click", () => {
  const textNode = document.createTextNode("3");
  mainLine.append(textNode);
});
btn4.addEventListener("click", () => {
  const textNode = document.createTextNode("4");
  mainLine.append(textNode);
});
btn5.addEventListener("click", () => {
  const textNode = document.createTextNode("5");
  mainLine.append(textNode);
});
btn6.addEventListener("click", () => {
  const textNode = document.createTextNode("6");
  mainLine.append(textNode);
});
btn7.addEventListener("click", () => {
  const textNode = document.createTextNode("7");
  mainLine.append(textNode);
});
btn8.addEventListener("click", () => {
  const textNode = document.createTextNode("8");
  mainLine.append(textNode);
});
btn9.addEventListener("click", () => {
  const textNode = document.createTextNode("9");
  mainLine.append(textNode);
});
btn0.addEventListener("click", () => {
  const textNode = document.createTextNode("0");
  mainLine.append(textNode);
});
btnDot.addEventListener("click", () => {
  const textNode = document.createTextNode(".");
  mainLine.append(textNode);
});

divBtn.addEventListener("click", () => {
  mainLine.innerHTML += "<span>/</span>";
});
mulBtn.addEventListener("click", () => {
  mainLine.innerHTML += "<span>*</span>";
});
plusBtn.addEventListener("click", () => {
  mainLine.innerHTML += "<span>+</span>";
});
minBtn.addEventListener("click", () => {
  mainLine.innerHTML += "<span>-</span>";
});

equalsBtn.addEventListener("click", () => {
  topLine.textContent = mainLine.textContent;
  mainLine.textContent =
    "=" + Math.round(Bracket(mainLine.textContent) * 1000) / 1000;
});

function convertPi(arrSum) {
  for (let i = 0; i < arrSum.length; i++) {
    if (arrSum[i] == "π") {
      arrSum.splice(i, 1, "3.141592653589793");
      if (
        arrSum[i - 1] !== "/" &&
        arrSum[i - 1] !== "*" &&
        arrSum[i - 1] !== "+" &&
        arrSum[i - 1] !== "-" &&
        arrSum[i - 1] !== ""
      ) {
        arrSum.splice(i - 1, 0, "*");
      } else if (
        arrSum[i + 1] !== "/" &&
        arrSum[i + 1] !== "*" &&
        arrSum[i + 1] !== "+" &&
        arrSum[i + 1] !== "-" &&
        arrSum[i - 1] !== ""
      ) {
        arrSum.splice(i + 1, 0, "*");
      }
    }
  }
  return arrSum;
}

function convertSqrt(arrSum) {
  for (let i = 0; i < arrSum.length; i++) {
    if (arrSum[i] == "√") {
      arrSum.splice(i, 2, Math.sqrt(arrSum[i + 1]));
    }
    return arrSum;
  }
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
    console.log(eqnArr[start + 1])
    eqnArr.splice(start, 3, String(calculate(String(eqnArr[start + 1]))));
    eqn = eqnArr.join("");
    eqnArr = eqn.split(/([()])/).filter(Boolean);
    console.log(eqn)
  }
  return(calculate(eqn))
}

function calculate(eqn) {
  arrSum = eqn.split(/([+\-*/π√])/).filter(Boolean);
  arrSum = convertPi(arrSum);
  arrSum = convertSqrt(arrSum);
  for (let i = 0; i < arrSum.length; i++) {
    if (arrSum[i] == "/") {
      let calc = Number(arrSum[i - 1]) / Number(arrSum[i + 1]);
      arrSum.splice(i - 1, 3, calc);
      i--;
    }
  }
  for (let i = 0; i < arrSum.length; i++) {
    if (arrSum[i] == "*") {
      let calc = Number(arrSum[i - 1]) * Number(arrSum[i + 1]);
      arrSum.splice(i - 1, 3, calc);
      i--;
    }
  }
  for (let i = 0; i < arrSum.length; i++) {
    if (arrSum[i] == "+") {
      let calc = Number(arrSum[i - 1]) + Number(arrSum[i + 1]);
      arrSum.splice(i - 1, 3, calc);
      i--;
    }
  }
  for (let i = 0; i < arrSum.length; i++) {
    if (arrSum[i] == "-") {
      let calc = Number(arrSum[i - 1]) - Number(arrSum[i + 1]);
      arrSum.splice(i - 1, 3, calc);
      i--;
    }
  }
  return arrSum[0];
}
