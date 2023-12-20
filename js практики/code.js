// 4 Игра угадай ячейку //
// let timeLeft = 60;
// for (let i = 0; i < 10; i++) {
//     let row = document.createElement("tr");
//     for (let j = 0; j < 10; j++) {
//         let cell = document.createElement("td");
//         cell.setAttribute("id", i + "-" + j);
//         row.appendChild(cell);
//     }
//     document.getElementById("gameTable").appendChild(row);
// }
// let randomCells = [];
// while (randomCells.length < 10) {
//     let randomRow = Math.floor(Math.random() * 10);
//     let randomCol = Math.floor(Math.random() * 10);
//     let randomCell = randomRow + "-" + randomCol;
//     if (!randomCells.includes(randomCell)) {
//         randomCells.push(randomCell);
//     }
// }
// function checkCell(cellId) {
//     if (randomCells.includes(cellId)) {
//         document.getElementById(cellId).style.backgroundColor = "purple";
//         randomCells = randomCells.filter(item => item !== cellId);
//         if (randomCells.length === 0) {
//             alert("Поздравляем, вы нашли все ячейки!");
//             clearInterval(timerInterval);
//         }
//     } else {
//         document.getElementById(cellId).style.backgroundColor = "black";
//     }
// }
// let cells = document.getElementsByTagName("td");
// for (let i = 0; i < cells.length; i++) {
//     cells[i].addEventListener("click", function() {
//         checkCell(this.id);
//     });
// }
// let timerInterval = setInterval(function() {
//     timeLeft--;
//     document.getElementById("timer").innerText = "Time left: " + timeLeft + " seconds";
//     if (timeLeft === 0) {
//         alert("Время вышло! Вы проиграли.");
//         clearInterval(timerInterval);
//     }
// }, 1000);

// 5 Экранная клавиатура //
// let capsLock = false;
// function appendToInput(value) {
//     if (capsLock) {
//         value = value.toUpperCase();
//     }
//     document.getElementById("inputField").value += value;
// }
// function toggleCapsLock() {
//     capsLock = !capsLock;
// }
// function backspace() {
//     let currentValue = document.getElementById("inputField").value;
//     document.getElementById("inputField").value = currentValue.slice(0, -1);
// }

// 6 Линейный календарь //
// let date = new Date();
// let daysElement = document.getElementById('days');
// let monthAndYearElement = document.getElementById('monthAndYear');
// let prevButton = document.getElementById('prev');
// let nextButton = document.getElementById('next');
// function updateCalendar() {
//     daysElement.innerHTML = '';
//     let month = date.getMonth();
//     let year = date.getFullYear();
//     let daysInMonth = new Date(year, month + 1, 0).getDate();
//     for (let i = 1; i <= daysInMonth; i++) {
//         let li = document.createElement('li');
//         li.textContent = i;
//         if (new Date().toDateString() === new Date(year, month, i).toDateString()) {
//             li.classList.add('today');
//         }
//         daysElement.appendChild(li);
//     }
//     monthAndYearElement.textContent = date.toLocaleString('ru-RU', { month: 'long', year: 'numeric' });
// }
// prevButton.addEventListener('click', function() {
//     date.setMonth(date.getMonth() - 1);
//     updateCalendar();
// });
// nextButton.addEventListener('click', function() {
//     date.setMonth(date.getMonth() + 1);
//     updateCalendar();
// });
// updateCalendar();

// 7 Поиск тегов //
// const tags = {
//     "p": "Тег <p> предназначен для текстовых абзацев.",
//     "a": "Тег <a> создает ссылку на другую страницу или место на текущей странице.",
//     "input": "Тег <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.",
//     "button": "Тег <button> создает на веб-странице кнопки.",
//     "h1": "Тег <h1> предназначен для заголовка.",
//     "html": "Тег <html> - корневой тег, который сообщает браузеру, что это HTML-документ.",
//     "body": "Тег <body> - тег, обрамляющий видимую пользователям часть документа.",
//     "title": "Тег <title> задаёт название страницы, отображаемое на вкладке браузера.",
//     "b": "Тег <b> выделяет текст жирным.",
//     "i": "Тег <i> выделяет текст курсивом.",
//     "u": "Тег <u> выделяет текст подчёркиванием",
//     "br": "Тег <br> переносит текст на другую строку без создания абзаца.",
//     "q": "Тег <q> предназначен для краткого цитирования.",
//     "ul": "Тег <ul> предназначен для списка со значками.",
//     "ol": "Тег <ol> предназначен для списка с цифрами.",
//     "s": "Тег <s> отображает перечёркнутый текст.",
//     "li": "Тег <li> предназначен для отметки каждого элемента перечня.",
// };
// document.getElementById('tagInput').addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         const tagName = event.target.value.toLowerCase();
//         const tagDescription = tags[tagName];
//         if (tagDescription) {
//             document.getElementById('tagDescription').innerText = tagDescription;
//         } else {
//             document.getElementById('tagDescription').innerText = "Такого тега нет в списке.";
//         }
//     }
// });

// 8 Поиск исторических событий //
// let input = document.getElementById('input');
// let table = document.getElementById('table');
// let events = [
//     {year: 2001, date: '01.01.2001', name: '1', description: 'родился котик'},
//     {year: 2001, date: '10.10.2001', name: '2', description: 'день рождения лизы'},
//     {year: 2001, date: '29.12.2001', name: '3', description: 'день рождения насти'},
//     {year: 2002, date: '19.12.2002', name: '4', description: 'день рождения николи'},
//     {year: 2002, date: '07.01.2002', name: '5', description: 'день рождения меня'},
//     {year: 2002, date: '02.02.2002', name: '6', description: 'родился капибарик'},
//     {year: 2003, date: '03.03.2003', name: '7', description: 'выпал снег'},
//     {year: 2003, date: '20.12.2003', name: '8', description: 'пошёл дождь'},
//     {year: 2003, date: '11.11.2003', name: '9', description: 'вышла серия сериала "слово пацана"'},
// ];
// input.addEventListener('keydown', function(e) {
//     if (e.key === 'Enter') {
//         let year = input.value;
//         let yearEvents = events.filter(event => event.year == year);
//         if (yearEvents.length > 0) {
//             table.innerHTML = '';
//             for (let event of yearEvents) {
//                 let row = document.createElement('tr');
//                 row.innerHTML = `<td>${event.date}</td><td>${event.name}</td><td>${event.description}</td>`;
//                 table.appendChild(row);
//             }
//         } else {
//             alert('Нет событий этого года');
//         }
//     }
// });

// 9 Гороскоп /
// function getHoroscope() {
//     let birthdate = document.getElementById("birthdate").value;
//     let selectedDate = document.querySelector('input[name="date"]:checked').value;

//     let zodiacSign = determineZodiacSign(birthdate);
//     let horoscope = generateHoroscope(zodiacSign, selectedDate);

//     let horoscopeResult = document.getElementById("horoscopeResult");
//     horoscopeResult.innerHTML = `<p>Гороскоп для ${zodiacSign} на ${selectedDate}: ${horoscope}</p>`;
// }
// function determineZodiacSign(birthdate) {
//     let date = new Date(birthdate);
//     let month = date.getMonth() + 1;
//     let day = date.getDate();
//     if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
//         return "Овен";
//     } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
//         return "Телец";
//     } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
//         return "Близнецы";
//     } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
//         return "Рак";
//     } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
//         return "Лев";
//     } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
//         return "Дева";
//     } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
//         return "Весы";
//     } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
//         return "Скорпион";
//     } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
//         return "Стрелец";
//     } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
//         return "Козерог";
//     } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
//         return "Водолей";
//     } else {
//         return "Рыбы";
//     };
// }
// function generateHoroscope(zodiacSign, selectedDate) {
//     let horoscopes = {
//         "Овен": {
//             "today": "Сегодня сладкая булочка",
//             "tomorrow": "Завтра вы будете булочкой с корицей в ожидании новой серии сериала Слово пацана",
//             "dayAfterTomorrow": "Послезавтра будете булочкой с сыром"
//         },
//         "Телец": {
//             "today": "Сегодня вы милая капибара",
//             "tomorrow": "Завтра вы будете грустной капибарой в ожидании новой серии сериала <<Слово пацана>>",
//             "dayAfterTomorrow": "Послезавтра вы будете смешной капибарой"
//         },
//         "Близнецы": {
//             "today": "Сегодня вы котик",
//             "tomorrow": "Завтра вы будете котиком в ожидании новой серии сериала <<Слово пацана>>",
//             "dayAfterTomorrow": "Послезавтра вы счастливый котик"
//         },
//         "Рак": {
//             "today": "Сегодня вы милый чушпанчик",
//             "tomorrow": "Завтра вы будете чушпанчиком в ожидании новой серии сериала <<Слово пацана>>",
//             "dayAfterTomorrow": "Послезавтра вы будете счастливым чушпанчиком"
//         },
//         "Лев": {
//             "today": "Сегодня вы пирожочек",
//             "tomorrow": "Завтра вы будете пирожочком в ожидании новой серии сериала <<Слово пацана>>",
//             "dayAfterTomorrow": "Послезавтра вы пиожочек с капустой"
//         },
//         "Дева": {
//             "today": "Сегодня вы ящерка",
//             "tomorrow": "Завтра вы будете ящеркой в ожидании новой серии сериала <<Слово пацана>>",
//             "dayAfterTomorrow": "Послезавтра будете сонной ящеркой"
//         },
//         "Весы": {
//             "today": "Сегодня вы кощка",
//             "tomorrow": "Завтра вы будете кощкой в ожидании новой серии сериала <<Слово пацана>>",
//             "dayAfterTomorrow": "Послезавтра вы все также кощка"
//         },
//         "Скорпион": {
//             "today": "Сегодня вы рыба",
//             "tomorrow": "Завтра вы будете рыбой в ожидании новой серии сериала <<Слово пацана>>",
//             "dayAfterTomorrow": "Послезавтра вы кальмар"
//         },
//         "Стрелец": {
//             "today": "Сегодня вы СТЕПААН",
//             "tomorrow": "Завтра вы будете СТЕПААНОМ в ожидании новой серии сериала <<Слово пацана>>",
//             "dayAfterTomorrow": "Послезавтра крутым СТЕПААНОМ"
//         },
//         "Козерог": {
//             "today": "Сегодня вы котя",
//             "tomorrow": "Завтра вы будете котей в ожидании новой серии сериала <<Слово пацана>>",
//             "dayAfterTomorrow": "Послезавтра будете милым котей"
//         },
//         "Водолей": {
//             "today": "Сегодня вы зайка",
//             "tomorrow": "Завтра вы будете зайкой в ожидании новой серии сериала <<Слово пацана>>",
//             "dayAfterTomorrow": "Послезавтра вы волк"
//         },
//         "Рыбы": {
//             "today": "Сегодня вы илья",
//             "tomorrow": "Завтра вы будете ильёй в ожидании новой серии сериала <<Слово пацана>>",
//             "dayAfterTomorrow": "Послезавтра уже будете лёней"
//         }
//     };
// }

// 10 Сайт предсказаний //
// let timerElement = document.getElementById('timer');
// let textElement = document.getElementById('text');
// let startButton = document.getElementById('start');
// let stopButton = document.getElementById('stop');
// let predictions = [
//     {text: 'сегодня вы получите 5', type: 'good'},
//     {text: 'вы сегодня будете отжиматься', type: 'bad'},
// ];
// let timer;
// startButton.addEventListener('click', function() {
//     startButton.classList.remove('active');
//     stopButton.classList.add('active');
//     timer = setInterval(function() {
//         timerElement.textContent = Math.floor(Math.random() * predictions.length) + 1;
//     }, 100);
// });
// stopButton.addEventListener('click', function() {
//     clearInterval(timer);
//     let prediction = predictions[timerElement.textContent - 1];
//     textElement.textContent = prediction.text;
//     textElement.classList.add(prediction.type);
//     startButton.style.display = 'none';
//     stopButton.style.display = 'none';
// });

// 16 Реализация игры в города //
// let input = document.getElementById('input');
// let submitButton = document.getElementById('submit');
// let messageDiv = document.getElementById('message');
// let cities = [];
// let lastLetter = '';
// submitButton.addEventListener('click', function() {
//     let city = input.value;
//     input.value = '';
//     if (cities.length > 0) {
//         if (city[0].toLowerCase() !== lastLetter) {
//             messageDiv.textContent = 'Первая буква города должна совпадать с последней буквой предыдущего города!';
//             return;
//         }
//         if (cities.includes(city)) {
//             messageDiv.textContent = 'Этот город уже был!';
//             return;
//         }
//     }
//     cities.push(city);
//     lastLetter = city[city.length - 1].toLowerCase();
//     messageDiv.textContent = 'Ход принят!';
// });

// 17 Игра в города против робота /
// let input = document.getElementById('input');
// let submitButton = document.getElementById('submit');
// let messageDiv = document.getElementById('message');
// let cities = [];
// let allCities = ['Архангельск', 'Астана', "Москва"];
// let lastLetter = '';
// submitButton.addEventListener('click', function() {
//     let city = input.value;
//     input.value = '';
//     if (cities.length > 0) {
//         if (city[0].toLowerCase() !== lastLetter) {
//             messageDiv.textContent = 'Первая буква города должна совпадать с последней буквой предыдущего города!';
//             return;
//         }
//         if (cities.includes(city)) {
//             messageDiv.textContent = 'Этот город уже был!';
//             return;
//         }
//         if (!allCities.includes(city)) {
//             messageDiv.textContent = 'Этого города нет в списке!';
//             return;
//         }
//     }
//     cities.push(city);
//     lastLetter = city[city.length - 1].toLowerCase();
//     messageDiv.textContent = 'Ход принят!';
//     let robotCity = allCities.find(c => c[0].toLowerCase() === lastLetter && !cities.includes(c));
//     if (robotCity) {
//         cities.push(robotCity);
//         lastLetter = robotCity[robotCity.length - 1].toLowerCase();
//         messageDiv.textContent += ' Робот выбрал город ' + robotCity + '.';
//     } else {
//         messageDiv.textContent += ' Робот не смог найти подходящий город.';
//     }
// });

// 18 Чеклист //
// let input = document.querySelector('#input');
// let list = document.querySelector('#list');
// input.addEventListener('keypress', function(event) {
//     if (event.key == 'Enter') {
//         let li = document.createElement('li');
//         let task = document.createElement('span');
//         task.classList.add('task');
//         task.textContent = this.value;
//         task.addEventListener('click', function() {
//             let text = this.textContent;
//             this.textContent = '';
//             let edit = document.createElement('input');
//             edit.value = text;
//             this.appendChild(edit);
//             let self = this;
//             edit.addEventListener('keypress', function(event) {
//                 if (event.key == 'Enter') {
//                     self.textContent = this.value;
//                 }
//             });
//         });
//         li.appendChild(task);
//         let remove = document.createElement('span');
//         remove.textContent = 'удалить';
//         remove.classList.add('remove');
//         remove.addEventListener('click', function() {
//             this.parentElement.remove();
//         });
//         li.appendChild(remove);
//         let mark = document.createElement('span');
//         mark.textContent = 'сделано';
//         mark.classList.add('mark');
//         mark.addEventListener('click', function() {
//             this.parentElement.classList.add('done');
//         });
//         li.appendChild(mark);
//         list.appendChild(li);
//         this.value = '';
//     }
// });

// 24 Калькулятор продуктов
// let name = document.querySelector('#name');
// let price = document.querySelector('#price');
// let amount = document.querySelector('#amount');
// let add = document.querySelector('#add');
// let table = document.querySelector('#table');
// let total = document.querySelector('#total');
// add.addEventListener('click', function () {
//     let tr = document.createElement('tr');
//     let nameCell = createCell(tr, name.value, 'name');
//     let priceCell = createCell(tr, price.value, 'price');
//     let amountCell = createCell(tr, amount.value, 'amount');
//     let costCell = createCell(tr, price.value * amount.value, 'cost');
//     createCell(tr, 'удалить', 'remove');
//     table.appendChild(tr);
//     recountTotal();
// });
// function createCell(tr, value, name) {
//     let td = document.createElement('td');
//     td.textContent = value;
//     if (name === 'remove') {
//         td.classList.add('remove');
//         td.addEventListener('click', function () {
//             tr.remove();
//             recountTotal();
//         });
//     } else {
//         td.classList.add(name);
//         if (name !== 'cost') {
//             allowEdit(td);
//         }
//     }
//     tr.appendChild(td);
//     return td;
// }
// function recountTotal() {
//     let costCells = document.querySelectorAll('.cost');
//     let totalSum = 0;
//     costCells.forEach(cell => {
//         totalSum += parseFloat(cell.textContent);
//     });
//     total.textContent = totalSum.toFixed(2);
// }
// function allowEdit(td) {
//     td.addEventListener('dblclick', function () {
//         let text = td.textContent;
//         td.textContent = '';
//         let input = document.createElement('input');
//         input.value = text;
//         input.focus();
//         td.appendChild(input);
//         input.addEventListener('keydown', function (event) {
//             if (event.key === 'Enter') {
//                 td.textContent = this.value;
//                 if (td.classList.contains('price') || td.classList.contains('amount')) {
//                     let row = td.parentElement;
//                     let price = parseFloat(row.querySelector('.price').textContent);
//                     let amount = parseInt(row.querySelector('.amount').textContent);
//                     if (!isNaN(price) && !isNaN(amount)) {
//                         let costCell = row.querySelector('.cost');
//                         let cost = price * amount;
//                         costCell.textContent = cost.toFixed(2);
//                         recountTotal();
//                     }
//                 }
//             }
//         });
//     });
// }

// 41 Игра крестики-нолики //
// function start(cells) {
//     let i = 0;
//     for (let cell of cells) {
//         cell.addEventListener('click', function() {
//             if (this.textContent === '') {
//                 this.textContent = i % 2 === 0 ? 'X' : 'O';
//                 if (isVictory(cells)) {
//                     alert(this.textContent + ' - Победитель!');
//                 } else if (i == 8) {
//                     alert('ничья');
//                 }
//                 i++;
//             }
//         });
//     }
// }
// function isVictory(cells) {
//     let combinations = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];
//     for (let combination of combinations) {
//         if (
//             cells[combination[0]].textContent == cells[combination[1]].textContent &&
//             cells[combination[1]].textContent == cells[combination[2]].textContent &&
//             cells[combination[0]].textContent != ''
//         ) {
//             return true;
//         }
//     }
//     return false;
// }
// let cells = document.querySelectorAll('#field td');
// start(cells);

// 47 Игра смена цветов //
// let rows = 3;
// let cols = 3;
// let colors = ['red', 'green', 'blue'];
// let clicks = 0;
// let table = document.getElementById('field');
// let clickCounter = document.getElementById('clicks');
// function getNextColor(array, color) {
//     let index = array.indexOf(color);
//     return array[(index + 1) % array.length];
// }
// function checkWin() {
//     let firstCellColor = table.rows[0].cells[0].style.backgroundColor;
//     for(let i = 0; i < rows; i++) {
//         for(let j = 0; j < cols; j++) {
//             if(table.rows[i].cells[j].style.backgroundColor !== firstCellColor) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }
// for(let i = 0; i < rows; i++) {
//     let row = document.createElement('tr');
//     for(let j = 0; j < cols; j++) {
//         let cell = document.createElement('td');
//         let randomColor = colors[Math.floor(Math.random() * colors.length)];
//         cell.style.backgroundColor = randomColor;
//         cell.addEventListener('click', function() {
//             let currentColor = this.style.backgroundColor;
//             this.style.backgroundColor = getNextColor(colors, currentColor);
//             clicks++;
//             clickCounter.textContent = 'Количество кликов: ' + clicks;
//             if(checkWin()) {
//                 alert('Победа!');
//             }
//         });
//         row.appendChild(cell);
//     }
//     table.appendChild(row);
// }

// 52 Календарь //
// let calendar = document.querySelector('#calendar');
// let body = calendar.querySelector('.body');
// let prev = calendar.querySelector('.prev');
// let next = calendar.querySelector('.next');
// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth();
// draw(body, year, month);
// prev.addEventListener('click', function() {
//     draw(body, getPrevYear(year, month), getPrevMonth(month));
//     updateInfo(getPrevYear(year, month), getPrevMonth(month));
// });
// next.addEventListener('click', function() {
//     draw(body, getNextYear(year, month), getNextMonth(month));
//     updateInfo(getNextYear(year, month), getNextMonth(month));
// });
// function draw(body, year, month) {
//     let arr = range(getLastDay(year, month));
//     let firstWeekDay = getFirstWeekDay(year, month);
//     let lastWeekDay = getLastWeekDay(year, month);
//     let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
//     createTable(body, nums);
// }
// function createTable(parent, arr) {
//     parent.textContent = '';
//     let cells = [];
//     for (let sub of arr) {
//         let tr = document.createElement('tr');
//         for (let num of sub) {
//             let td = document.createElement('td');
//             td.textContent = num;
//             tr.appendChild(td);
//             cells.push(td);
//         }
//         parent.appendChild(tr);
//     }
//     return cells;
// }
// function normalize(arr, left, right) {
//     for (let i = 0; i < left; i++) {
//         arr.unshift('');
//     }
//     for (var i = 0; i < right; i++) {
//         arr.push('');
//     }
//     return arr;
// }
// function getFirstWeekDay(year, month) {
//     let date = new Date(year, month, 1);
//     let num = date.getDay();
//     if (num == 0) {
//         return 6;
//     } else {
//         return num - 1;
//     }
// }
// function getLastWeekDay(year, month) {
//     let date = new Date(year, month + 1, 0);
//     let num = date.getDay();
//     if (num == 0) {
//         return 6;
//     } else {
//         return num - 1;
//     }
// }
// function getLastDay(year, month) {
//     let date = new Date(year, month + 1, 0);
//     return date.getDate();
// }
// function range(count) {
//     let arr = [];
//     for (let i = 1; i <= count; i++) {
//         arr.push(i);
//     }
//     return arr;
// }
// function chunk(arr, n) {
//     let result = [];
//     let count = Math.ceil(arr.length / n);
//     for (let i = 0; i < count; i++) {
//         let elems = arr.splice(0, n);
//         result.push(elems);
//     }
//     return result;
// }
// function getPrevYear(year, month) {
//     if (month === 0) {
//         return year - 1;
//     } else {
//         return year;
//     }
// }
// function getNextYear(year, month) {
//     if (month === 11) {
//         return year + 1;
//     } else {
//         return year;
//     }
// }
// function getPrevMonth(month) {
//     if (month === 0) {
//         return 11;
//     } else {
//         return month - 1;
//     }
// }
// function getNextMonth(month) {
//     if (month === 11) {
//         return 0;
//     } else {
//         return month + 1;
//     }
// }
// function updateInfo(year, month) {
//     let info = calendar.querySelector('.info');
//     let months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
//     let currentMonth = months[month];
//     let currentYear = year;
//     let displayText = `${currentMonth} ${currentYear}`;
//     info.textContent = displayText;
// }