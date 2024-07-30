const buttons = document.querySelectorAll(".eachButton");

buttons.forEach((button) => {
  button.addEventListener("click", function displayOnScreen(e) {
    const content = document.querySelector("#content");

    if (e.target.id === "C") {
      content.innerHTML = "";
    } else if (e.target.id === "Del") {
      content.innerHTML = content.innerHTML.slice(0, -1);
    } else if (e.target.id === "=") {
      evaluate();
    } else {
      content.innerHTML += e.target.id;
    }
  });
});
function evaluate() {
  const content = document.querySelector("#content");
  const expression = content.innerHTML;
  try {
    if (!(expression === "")) {
      const result = eval(expression);
      content.innerHTML = result;
    }
  } catch (error) {
    content.innerHTML = "Error";
  }
}
