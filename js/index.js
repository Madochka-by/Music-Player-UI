const greetP = document.querySelector(".greet__text1");
const dateForGreet = new Date();
const hours = dateForGreet.getHours();
const userName = document.querySelector(".Top-Profile-container-frame__text");
const userAvatar = document.querySelector(".Top-Profile-container-circle__img");
const user = {
  name: "Kirill",
  SecondName: "Davydenko",
  image: "/img/avatar.jpg",
  greet: function (hour) {
    if (hour >= 5 && hour < 12) {
      return `Good Morning, ${this.name}`;
    } else if (hour >= 12 && hour < 17) {
      return `Good Afternoon, ${this.name}`;
    } else {
      return `Good Evning, ${this.name}`;
    }
  },
};

greetP.textContent = user.greet(hours);
userName.textContent = `${user.name} ${user.SecondName}`;
userAvatar.src = user.image;

const listSongs = document.querySelector(".container-left-text");
const library = {
  "Only For You": [
    {
      id: 1,
      title: "Dreaming",
      artist: "Luna Waves",
      cover: "example.jpg",
      src: "example.mp3",
    },
    {
      id: 2,
      title: "хз",
      artist: "хз",
      cover: "example.jpg",
      src: "example.mp3",
    },
  ],
  "Top Releases": [
    {
      id: 1,
      title: "Dreaming",
      artist: "Luna Waves",
      cover: "example.jpg",
      src: "example.mp3",
    },
  ],
  Pop: [
    {
      id: 1,
      title: "Dreaming",
      artist: "Luna Waves",
      cover: "example.jpg",
      src: "example.mp3",
    },
  ],
  "Hip-Hop": [
    {
      id: 1,
      title: "Dreaming",
      artist: "Luna Waves",
      cover: "example.jpg",
      src: "example.mp3",
    },
  ],
  Party: [
    {
      id: 1,
      title: "Dreaming",
      artist: "Luna Waves",
      cover: "example.jpg",
      src: "example.mp3",
    },
  ],
  Indie: [
    {
      id: 1,
      title: "Dreaming",
      artist: "Luna Waves",
      cover: "example.jpg",
      src: "example.mp3",
    },
  ],
  Summer: [
    {
      id: 1,
      title: "Dreaming",
      artist: "Luna Waves",
      cover: "example.jpg",
      src: "example.mp3",
    },
  ],
  Romance: [
    {
      id: 1,
      title: "Dreaming",
      artist: "Luna Waves",
      cover: "example.jpg",
      src: "example.mp3",
    },
  ],
  Workout: [
    {
      id: 1,
      title: "Dreaming",
      artist: "Luna Waves",
      cover: "example.jpg",
      src: "example.mp3",
    },
  ],
};

for (let key in library) {
  listSongs.innerHTML += `<li class="container-left-text__list">${key}</li>`;
}

const song = document.querySelectorAll(".container-left-text__list");

listSongs.addEventListener("click", (event) => {
  song.forEach((elem) => {
    elem.classList.remove("container-left-text__list-BLACK");
  });
  let li = event.target.tagName;
  let text = event.target.textContent;
  if (li === "LI") {
    song.forEach((elem) => {
      if (elem.textContent === text)
        elem.classList.add("container-left-text__list-BLACK");
    });
  }
  console.dir(text);
});
