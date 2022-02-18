// TODO: This has not been tested well. 

// HTML file
<input type="text" id="myInput" />;

// JS file
const inputElement = document.querySelector("#myInput");

const myDebounce = (event, delay) => {
  let timer = undefined;

  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(() => {
    const value = event.target.value;
    console.log(value);
  }, delay);
};

function onChange(event) {
  return myDebounce(event, 1000);
}

inputElement.addEventListener("change", onChange);
