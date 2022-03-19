const myChoice = document.querySelector("#myChoice");
const computerChoice = document.querySelector("#computerChoice");
const result = document.querySelector("#result");
const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => choice.addEventListener("click", choiceHandler));

function choiceHandler() {
  myChoice.innerHTML = this.innerHTML;
  computerChoiceHandler();
  choseWinnerHandler();
}

function computerChoiceHandler() {
  const comChoice = Math.floor(Math.random() * choices.length);

  if (comChoice === 0) {
    computerChoice.innerHTML = "man";
  } else if (comChoice === 1) {
    computerChoice.innerHTML = "woman";
  } else {
    computerChoice.innerHTML = "coackroach";
  }
}

function choseWinnerHandler() {
  //draw cases
  if (myChoice.innerHTML === "man" && computerChoice.innerHTML === "man") {
    result.innerHTML = "You Draw";
  }
  if (myChoice.innerHTML === "woman" && computerChoice.innerHTML === "woman") {
    result.innerHTML = "You Draw";
  }

  if (
    myChoice.innerHTML === "coackroach" &&
    computerChoice.innerHTML === "coackroach"
  ) {
    result.innerHTML = "You Draw";
  }

  //lose cases
  if (myChoice.innerHTML === "man" && computerChoice.innerHTML === "woman") {
    result.innerHTML = "You lose";
  }

  if (
    myChoice.innerHTML === "woman" &&
    computerChoice.innerHTML === "coackroach"
  ) {
    result.innerHTML = "You lose";
  }

  if (
    myChoice.innerHTML === "coackroach" &&
    computerChoice.innerHTML === "man"
  ) {
    result.innerHTML = "You lose";
  }

  //win cases

  if (
    myChoice.innerHTML === "man" &&
    computerChoice.innerHTML === "coackroach"
  ) {
    result.innerHTML = "You win";
  }

  if (myChoice.innerHTML === "woman" && computerChoice.innerHTML === "man") {
    result.innerHTML = "You win";
  }

  if (
    myChoice.innerHTML === "coackroach" &&
    computerChoice.innerHTML === "woman"
  ) {
    result.innerHTML = "You win";
  }
}
