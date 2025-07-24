У меня в коде встречается -
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
        }
Вот такие штуки, то что я там вставляю это пох, но вот я все время делаю через цикл for, а далее через object values. Можешь мне подсказать как это умнее реализовывать. Мне кажется легче есть способ чтобы
вытягивать данные
