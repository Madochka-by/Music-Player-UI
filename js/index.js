const greetP = document.querySelector(".greet__text1");
const dateForGreet = new Date();
const hours = dateForGreet.getHours();

const greet = (hour) => {
  if (hour >= 5 && hour < 12) {
    return `Morning`;
  } else if (hour >= 12 && hour < 17) {
    return `Afternoon`;
  } else {
    return `Evning`;
  }
};
greetP.textContent = `Good ${greet(hours)}, Jason.`;
