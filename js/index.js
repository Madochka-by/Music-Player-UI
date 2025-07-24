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
const albumWindiw = document.querySelector(".container-album-window");
let ARRAYWITHID = [];

const library = {
  "Only For You": [
    {
      id: 1,
      title: "Ocean Eyes",
      artist: "Billie Eilish",
      cover:
        "https://upload.wikimedia.org/wikipedia/ru/a/a2/Ocean_Eyes_%28Official_Single_Cover%29_by_Billie_Eilish.png",
      src: "/audio/Billie Eilish - bad guy (with Justin Bieber).mp3",
    },
    {
      id: 2,
      title: "Slomano",
      artist: "Baby Melon",
      cover:
        "https://i1.sndcdn.com/artworks-l1Vka894dpnuJgR9-Gu4Vxg-t500x500.jpg",
      src: "/audio/Baby Melo, FADE031 - Сломана (новые песни 2025).mp3",
    },
    {
      id: 3,
      title: "Вино и Сигареты",
      artist: "Алёна Швец",
      cover:
        "https://i1.sndcdn.com/artworks-YdJxo4ZNzY6OOvzL-htQudw-t500x500.jpg",
      src: "/audio/Алёна Швец - Вино и Сигареты.mp3",
    },
    {
      id: 4,
      title: "Гори",
      artist: "Вылентин Стрыкало",
      cover: "https://i.scdn.co/image/ab67616d00001e02c57d665b700dc1d788b1c00d",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
    {
      id: 5,
      title: "Shape Of You",
      artist: "Ed Sheeran",
      cover: "https://i1.sndcdn.com/artworks-000205276174-rkz33n-t500x500.jpg",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
  ],
  "Top Releases": [
    {
      id: 6,
      title: "Bad Guy",
      artist: "Billie Eilish",
      cover: "https://i1.sndcdn.com/artworks-000569704310-3cghgo-t500x500.jpg",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    },
    {
      id: 7,
      title: "Hush",
      artist: "Baby Cute",
      cover:
        "https://i1.sndcdn.com/artworks-VP9lb9IvBJo1cSfy-uSwGQQ-t500x500.jpg",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    },
    {
      id: 8,
      title: "Last Summer",
      artist: "Влад Пиво",
      cover:
        "https://i1.sndcdn.com/artworks-cWtKGackyEv94xBu-7MhSpA-t500x500.jpg",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    },
    {
      id: 9,
      title: "Каен",
      artist: "Валентин Стрыкало",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfkab3pdlZnzpxGfavngBmsnL6cPgNI8poWw&s",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
  ],
  Pop: [
    {
      id: 10,
      title: "Give Me Everything",
      artist: "Pitbull, Ne - Yo, Afrojack, Nayer",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_xyXZXINzL-kFzwFaySszk870LuTjc_fQVw&s",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
    },
    {
      id: 11,
      title: "Right Round",
      artist: "Flo Rida, Kesha",
      cover:
        "https://i1.sndcdn.com/artworks-rkrLMByzDru8WE07-LtZoRg-t500x500.jpg",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
    },
    {
      id: 12,
      title: "Lean On",
      artist: "Major Lazer & DJ Snake",
      cover: "https://i1.sndcdn.com/artworks-000117561421-1sr0ib-t500x500.jpg",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
    },
  ],
  "Hip-Hop": [
    {
      id: 13,
      title: "ICE",
      artist: "Morgenshtern",
      cover:
        "https://i1.sndcdn.com/artworks-pFM1nCXLZw1lmFML-EzrDRQ-t500x500.jpg",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
    },
    {
      id: 14,
      title: "Cadillac",
      artist: "Morgenshtern feat. Элджей",
      cover:
        "https://i1.sndcdn.com/artworks-uIUGiSvHo6DYqKQc-b2BWCg-t500x500.jpg",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3",
    },
    {
      id: 15,
      title: "adventure of a lifetime",
      artist: "Coldplay",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4S6Pr5IJ7u0maGZ7DEhbO2CmNZJZLXIxL4g&s",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-18.mp3",
    },
    {
      id: 16,
      title: "Cristal & МОЁТ",
      artist: "Morgenshtern",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNBWQdQQFLy7EoGfRVYVeaX6kTOylhp3GpQ&s",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-19.mp3",
    },
    {
      id: 17,
      title: "МАМБЛ",
      artist: "GONE.Fludd",
      cover: "https://i.scdn.co/image/ab67616d0000b2731085a198328ef11f6129ca60",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-20.mp3",
    },
  ],
  Party: [
    {
      id: 18,
      title: "Йупи Йо",
      artist: "Scally Milano(feat. 163ONMYNECK, MAYOT)",
      cover:
        "https://i1.sndcdn.com/artworks-KyyoxhgjUTGEo0mo-0akE0Q-t500x500.jpg",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-21.mp3",
    },
    {
      id: 19,
      title: "СТОМАТОЛОГИЧКА",
      artist: "163ONMYNECK & BUSHIDO ZHO",
      cover:
        "https://i1.sndcdn.com/artworks-Fafu3syDZTuxp6g4-chTq9g-t500x500.jpg",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-22.mp3",
    },
    {
      id: 20,
      title: "ПЕРЕВЕС",
      artist: "163ONMYNECK",
      cover:
        "https://i1.sndcdn.com/artworks-at294v3cSHoa76x7-b1buAA-t1080x1080.jpg",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-23.mp3",
    },
    {
      id: 21,
      title: "Dance Monkey",
      artist: "Tones and I",
      cover: "https://i1.sndcdn.com/artworks-000579495074-txx5aq-t500x500.jpg",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-24.mp3",
    },
    {
      id: 22,
      title: "Blinding Lights",
      artist: "The Weeknd",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-25.mp3",
    },
  ],
  Indie: [
    {
      id: 23,
      title: "Video Games",
      artist: "Lana Del Rey",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/c/cf/Lana_Del_Rey_-_Video_Games_single_cover.png",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-26.mp3",
    },
    {
      id: 24,
      title: "Born to Die",
      artist: "Lana Del Rey",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrLJwTK9rmNaIVU1ELWnUGR4LNZWb3A68ZuQ&s",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-27.mp3",
    },
    {
      id: 25,
      title: "Summertime Sadness",
      artist: "Lana Del Rey",
      cover:
        "https://i1.sndcdn.com/artworks-4H6TQTi3kHdDHjFt-3VAFEw-t500x500.jpg",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-28.mp3",
    },
    {
      id: 26,
      title: "Brooklyn Baby",
      artist: "Lana Del Rey",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDnmfAlrxYNfuii2Yx-rAKXm9HSItlecIAeQ&s",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-29.mp3",
    },
    {
      id: 27,
      title: "Young and Beautiful",
      artist: "Lana Del Rey",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn0YHsjaFP_-6_IQWL2t4nAIFwMiUmpdprqw&s",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-30.mp3",
    },
  ],
  Summer: [
    {
      id: 28,
      title: "Heat Waves",
      artist: "Glass Animals",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/b/b0/Glass_Animals_-_Heat_Waves.png",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-31.mp3",
    },
    {
      id: 29,
      title: "НОН СТОП",
      artist: "ПОШЛАЯ МОЛЛИ",
      cover:
        "https://i1.sndcdn.com/artworks-7aMCYl0WXnRWzzVl-DkL6Vg-t1080x1080.jpg",
      src: "/audio/Пошлая Молли - НОН СТОП.mp3",
    },
    {
      id: 30,
      title: "Cake By The Ocean",
      artist: "DNCE",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/8/8c/DNCE_-_Cake_by_the_Ocean.png",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-33.mp3",
    },
    {
      id: 31,
      title: "Summer",
      artist: "Calvin Harris",
      cover: "https://i1.sndcdn.com/artworks-000544042710-e14hfs-t500x500.jpg",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-34.mp3",
    },
    {
      id: 32,
      title: "Cool for the Summer",
      artist: "Demi Lovato",
      cover:
        "https://upload.wikimedia.org/wikipedia/en/7/73/Demi_Lovato_-_Cool_for_the_Summer_%28Official_Single_Cover%29.png",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-35.mp3",
    },
  ],
  Romance: [
    {
      id: 33,
      title: "Love Me Like You Do",
      artist: "Ellie Goulding",
      cover: "https://i1.sndcdn.com/artworks-000179078251-ax79uc-t500x500.jpg",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-36.mp3",
    },
    {
      id: 34,
      title: "All of Me",
      artist: "John Legend",
      cover: "https://i.scdn.co/image/ab67616d0000b273d56159304b0098aa0873b839",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-37.mp3",
    },
    {
      id: 35,
      title: "Say You Won’t Let Go",
      artist: "James Arthur",
      cover: "https://i1.sndcdn.com/artworks-000195650453-kgwtvo-t500x500.jpg",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-38.mp3",
    },
    {
      id: 36,
      title: "Photograph",
      artist: "Ed Sheeran",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBxGELU9H68EPbFzO-V-3rcbu-GT63iUMyA&s",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-39.mp3",
    },
  ],
  Workout: [
    {
      id: 37,
      title: "Stronger",
      artist: "Kanye West",
      cover: "https://i.scdn.co/image/ab67616d0000b27331b08098da21b8c97b4e907f",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-41.mp3",
    },
    {
      id: 38,
      title: "Till I Collapse",
      artist: "Eminem",
      cover: "https://i1.sndcdn.com/artworks-YOfM1MVNffzk-0-t500x500.jpg",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-42.mp3",
    },
    {
      id: 39,
      title: "Remember the Name",
      artist: "Fort Minor",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5lBSDnDInMm6UTpoKrH_gg7EhcT2IhpyoBg&s",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-43.mp3",
    },
  ],
};

renderList();
render();

function renderList() {
  for (let key in library)
    listSongs.innerHTML += `<li data-type="nonActive" class="container-left-text__list">${key}</li>`;
}
function render(text = "all", toggle = "all") {
  albumWindiw.innerHTML = "";
  for (let key in library) {
    if (toggle === "all" && text === "all") {
      library[key].forEach((elem) => {
        albumWindiw.innerHTML += pullHtml(
          elem.title,
          elem.artist,
          elem.cover,
          elem.id,
          1
        );
        ARRAYWITHID.push(elem.id);
      });
    } else {
      if (text === key)
        library[key].forEach((elem) => {
          albumWindiw.innerHTML += pullHtml(
            elem.title,
            elem.artist,
            elem.cover,
            elem.id,
            1
          );
        });
    }
  }
}
todayTopPicks(ARRAYWITHID);

const song = document.querySelectorAll(".container-left-text__list");
let active;

listSongs.addEventListener("click", (event) => {
  let li = event.target.tagName;
  let text = event.target.textContent;
  active = "";
  if (li === "LI") {
    song.forEach((elem) => {
      if (
        elem.textContent === text &&
        elem.getAttribute("data-type") !== "Active"
      ) {
        elem.classList.add("container-left-text__list-BLACK");
        elem.setAttribute("data-type", "Active");
      } else if (
        elem.textContent === text &&
        elem.getAttribute("data-type") == "Active"
      ) {
        elem.classList.remove("container-left-text__list-BLACK");
        elem.setAttribute("data-type", "nonActive");
        active = "all";
        text = "all";
      } else {
        elem.classList.remove("container-left-text__list-BLACK");
        elem.setAttribute("data-type", "nonActive");
      }
    });
    render(text, active);
  }
});

function pullHtml(title, artist, cover, id, flag) {
  if (flag == 1)
    return ` 
   <div class="container-album-window-item" >
            <div id="${id}" class="container-album-window-item-block1" data-type="song">
              <img id="${id}"data-type="song"
                class="container-album-window-item-block1__img"
                src="${cover}"
                alt=""
              />
            </div>
            <div  id="${id}"data-type="song"class="container-album-window-item-block2">
              <h1 id="${id}"data-type="song" class="container-album-window-item-block2__h1 ">${title}</h1>
              <p id="${id}"data-type="song"class="container-album-window-item-block2__p">${artist}</p>
            </div>
          </div>
  `;
  else if (flag == 2)
    return ` 
   <div class="container-right-block-item" data-type="song" id="${id}">
            <img id="${id}"data-type="song"
              class="container-right-block-item__image"
              src="${cover}"
              alt=""
            />
            <div id="${id}"data-type="song"class="container-right-block-item-text">
              <h1 id="${id}"data-type="song"class="container-right-block-item-text__h">
                ${title}
              </h1>
              <p id="${id}"data-type="song"class="container-right-block-item-text__p">${artist}</p>
            </div>
          </div>
  `;
  else if (flag == 3)
    return ` 
          <img 
            class="play-left-item__img"
            src="${cover}"
            alt=""
          />
          <h1 class="play-left-item__h"> ${title}</h1>
          <p class="play-left-item__p">${artist}</p>

  `;
}

const searchInp = document.querySelector(".Top-SearchBar-frame__inp");

searchInp.addEventListener("input", () => {
  albumWindiw.innerHTML = "";
  for (let key in library) {
    library[key].filter((elem) => {
      if (
        Object.values(elem)[1]
          .toLowerCase()
          .includes(searchInp.value.toLowerCase()) ||
        Object.values(elem)[2]
          .toLowerCase()
          .includes(searchInp.value.toLowerCase())
      ) {
        let a = Object.values(elem)[1];
        albumWindiw.innerHTML += pullHtml(
          a,
          elem.artist,
          elem.cover,
          elem.id,
          1
        );
      }
    });
  }
});

function todayTopPicks(arr) {
  const todayTopPicksBlock = document.querySelector(".container-right-block");
  todayTopPicksBlock.innerHTML = "";
  let randomId = [];
  let random;
  for (let i = 0; i < 5; i++) {
    do {
      random = Math.floor(Math.random() * arr.length);
    } while (randomId.includes(random));

    randomId.push(random);
  }
  for (let key in library) {
    randomId.forEach((Element) => {
      library[key].forEach((elem) => {
        if (Object.values(elem)[0] == Element) {
          todayTopPicksBlock.innerHTML += pullHtml(
            elem.title,
            elem.artist,
            elem.cover,
            elem.id,
            2
          );
        }
      });
    });
  }
}

const panelController = document.querySelector(".play ");
const songFrame = document.querySelector(".play-left-item");
const audio = document.getElementById("audio-player");

document.addEventListener("click", (event) => {
  let atrib = event.target.getAttribute("data-type");
  let id = event.target.id;
  if (atrib === "song") {
    panelController.style.display = "grid";
    for (let key in library) {
      library[key].forEach((elem) => {
        if (Object.values(elem)[0] == id) {
          songFrame.innerHTML = pullHtml(
            elem.title,
            elem.artist,
            elem.cover,
            elem.id,
            3
          );
          audio.src = elem.src;
          audio.play();
        }
      });
    }
  }
});

const progressBar = document.querySelector(".play-middle-bot__range");
const startSong = document.getElementById("start");
const endSong = document.getElementById("end");

audio.addEventListener("loadedmetadata", () => {
  const duration = audio.duration;
  progressBar.max = duration;
  formatDuration(duration, endSong);
});

audio.addEventListener("timeupdate", () => {
  const current = audio.currentTime;
  progressBar.value = current;
  formatDuration(current, startSong);
});

progressBar.addEventListener("input", () => {
  audio.currentTime = progressBar.value;
});

function formatDuration(seconds, span) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");
  return (span.textContent = `${formattedMinutes}:${formattedSeconds}`);
}
