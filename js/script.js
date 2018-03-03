let storedNum = 0;
let newNum = "0";
let nextOp = "start";
let opCheck = true;
let decimalUsed = false;
let equalsUsed = false;

function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

function operate(num1, num2, op) {
	switch (op) {
		case "add":
			return add(num1, num2);
			break;
		case "subtract":
			nextOp = "none";
			return subtract(num1, num2);
			break;
		case "multiply":
			nextOp = "none";
			return multiply(num1, num2);
			break;
		case "divide":
			if (num2 === 0) {
				return "divByZero";
			}
			else {
				nextOp = "none";
				return divide(num1, num2);
			}
			break;
		case "none":
			break;
		case "next":
			return storedNum;
			break;
		default:
			alert("Operation error")
	}
}

function displayUpdate(num) {
	if (newNum === "0" && num !== 0 && storedNum === 0 && nextOp === "start") {
		newNum = num.toString();
		document.querySelector(".display-text").innerHTML = newNum;
	}
	else if (equalsUsed === true) {}
	else if (newNum.length === 10) {
		alert("Maximum input length reached.");
		return;
	}
	else if (nextOp === "next") {
		storedNum = 0;
		newNum = "0";
		nextOp = "none";
		opCheck = true;
		displayUpdate(num);
	}
	else {
		newNum += num;
		opCheck = true;
		document.querySelector(".display-text").innerHTML += num;
	}
}

function clearCalc() {
	storedNum = 0;
	newNum = "0";
	nextOp = "start";
	opCheck = true;
	decimalUsed = false;
	equalsUsed = false;
	document.querySelector(".display-text").innerHTML = newNum;
}

function setOp(op) {
	switch(op) {
		case "add":
			decimalUsed = false;
			equalsUsed = false;
			if (storedNum === 0 && nextOp === "start") {
				storedNum = parseFloat(newNum);
				nextOp = op;
				opCheck = false;
				newNum = "0";
			}
			else if (opCheck === false) {
				alert("You can't insert two operations subsequently.");
				break;
			}
			else {
				storedNum = operate(storedNum, parseFloat(newNum), nextOp);
				if (storedNum === "divByZero") {
					divByZero();
					break;
				}
				setDecimal();
				document.querySelector(".display-text").innerHTML = storedNum;
				nextOp = op;
				opCheck = false;
				newNum = "0";
			}
			document.querySelector(".display-text").innerHTML += "+";
			break;
		case "subtract":
			decimalUsed = false;
			equalsUsed = false;
			if (storedNum === 0 && nextOp === "start") {
				storedNum = parseFloat(newNum);
				nextOp = op;
				opCheck = false;
				newNum = "0";
			}
			else if (opCheck === false) {
				alert("You can't insert two operations subsequently.");
				break;
			}
			else {
				storedNum = operate(storedNum, parseFloat(newNum), nextOp);
				if (storedNum === "divByZero") {
					divByZero();
					break;
				}
				setDecimal();
				document.querySelector(".display-text").innerHTML = storedNum;
				nextOp = op;
				opCheck = false;
				newNum = "0";
			}
			document.querySelector(".display-text").innerHTML += "&minus;";
			break;
		case "multiply":
			decimalUsed = false;
			equalsUsed = false;
			if (storedNum === 0 && nextOp === "start") {
				storedNum = parseFloat(newNum);
				nextOp = op;
				opCheck = false;
				newNum = "0";
			}
			else if (opCheck === false) {
				alert("You can't insert two operations subsequently.");
				break;
			}
			else {
				storedNum = operate(storedNum, parseFloat(newNum), nextOp);
				if (storedNum === "divByZero") {
					divByZero();
					break;
				}
				setDecimal();
				document.querySelector(".display-text").innerHTML = storedNum;
				nextOp = op;
				opCheck = false;
				newNum = "0";
			}
			document.querySelector(".display-text").innerHTML += "&times;";
			break;
		case "divide":
			decimalUsed = false;
			equalsUsed = false;
			if (storedNum === 0 && nextOp === "start") {
				storedNum = parseFloat(newNum);
				nextOp = op;
				opCheck = false;
				newNum = "0";
			}
			else if (opCheck === false) {
				alert("You can't insert two operations subsequently.");
				break;
			}
			else {
				storedNum = operate(storedNum, parseFloat(newNum), nextOp);
				if (storedNum === "divByZero") {
					divByZero();
					break;
				}
				setDecimal();
				document.querySelector(".display-text").innerHTML = storedNum;
				nextOp = op;
				opCheck = false;
				newNum = "0";
			}
			document.querySelector(".display-text").innerHTML += "&divide;";
			break;
		default:
			alert("Operation select error");
	}
}

function equals() {
	if (nextOp === "none" || nextOp === "start") {}
	else {
		storedNum = operate(storedNum, parseFloat(newNum), nextOp);
		if (storedNum === "divByZero") {
			divByZero();
			return;
		}
		setDecimal();
		document.querySelector(".display-text").innerHTML = storedNum;
		newNum = "0";
		nextOp = "next";
		equalsUsed = true;
	}
}

function setDecimal() {
	let decCheck = storedNum.toString();
	if (decCheck.search(/\./) !== -1) {
		decCheck = storedNum.toFixed(6);
		while (decCheck.endsWith("0") === true) {
			decCheck = decCheck.slice(0, -1);
		}
	}
	storedNum = parseFloat(decCheck);
}

function divByZero() {
	alert("Nice try, but no division by 0 here.");
	clearCalc();
}

function addDecimal() {
	if (decimalUsed === false && newNum.length < 10 && newNum.length > 0) {
		if (newNum === "0" && nextOp !== "start") {
			document.querySelector(".display-text").innerHTML += "0";
		}
		newNum += ".";
		document.querySelector(".display-text").innerHTML += ".";
		decimalUsed = true;
	}
}

function backNum() {
	if (newNum.length === 1) {}
	else {
		newNum = newNum.substring(0, newNum.length - 1);
		console.log("newNum value: " + newNum);
		console.log("newNum length: " + newNum.length);
		let oldDisplay = document.querySelector(".display-text").innerHTML;
		document.querySelector(".display-text").innerHTML = oldDisplay.substring(0, oldDisplay.length - 1);
		if (newNum.search(/\./) === -1) {
			decimalUsed = false;
		}
	}
}