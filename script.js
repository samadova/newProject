// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUMjC9xhe1RbzUQhWdKzA6uE3I3sNnGIk",
    authDomain: "hotel-customer-relations-4cb97.firebaseapp.com",
    projectId: "hotel-customer-relations-4cb97",
    storageBucket: "hotel-customer-relations-4cb97.appspot.com",
    messagingSenderId: "170856130607",
    appId: "1:170856130607:web:5ca13a00fb2f792cdabeda"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Получение элемента формы регистрации по его ID
let registrationForm = document.getElementById('registration-form');

// Обработчик события отправки формы регистрации
registrationForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Предотвращение отправки формы по умолчанию

  // Получение значений из полей формы регистрации
  let firstName = document.getElementById('first-name').value;
  let lastName = document.getElementById('last-name').value;
  let checkInDate = document.getElementById('check-in-date').value;
  let checkOutDate = document.getElementById('check-out-date').value;

  // Создание новой записи гостя в базе данных
  let newGuestRef = firebase.database().ref('guests').push();
  newGuestRef.set({
    firstName: firstName,
    lastName: lastName,
    checkInDate: checkInDate,
    checkOutDate: checkOutDate
  });

  // Очистка полей формы после сохранения данных
  registrationForm.reset();

  // Дополнительные действия, такие как отображение уведомления об успешной регистрации
});


// Получение элемента формы выезда по его ID
let checkoutForm = document.getElementById('checkout-form');

// Обработчик события отправки формы выезда
checkoutForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Предотвращение отправки формы по умолчанию

  // Получение значения ID гостя из поля формы выезда
  let guestId = document.getElementById('guest-id').value;

  // Обновление статуса гостя в базе данных на "выехал"
  let guestRef = firebase.database().ref('guests/' + guestId);
  guestRef.update({
    status: 'выехал'
  });

  // Очистка поля формы выезда после обработки выезда
  checkoutForm.reset();

  // Дополнительные действия, такие как отображение уведомления об успешном выезде гостя
});


// Получение ссылки на базу данных
let database = firebase.database();

// Функция для отображения данных гостей
function displayGuests() {
  let guestsRef = database.ref('guests');

  guestsRef.on('value', function(snapshot) {
    let guestList = document.getElementById('guest-list');
    guestList.innerHTML = ''; // Очистка списка гостей перед обновлением данных

    snapshot.forEach(function(childSnapshot) {
      let guestData = childSnapshot.val();
      let guestId = childSnapshot.key;

      // Создание элементов для отображения данных гостя
      let guestItem = document.createElement('li');
      let guestName = document.createElement('h3');
      let guestCheckIn = document.createElement('p');
      let guestCheckOut = document.createElement('p');
      let guestStatus = document.createElement('p');

      // Заполнение элементов данными гостя
      guestName.textContent = guestData.firstName + ' ' + guestData.lastName;
      guestCheckIn.textContent = 'Дата заезда: ' + guestData.checkInDate;
      guestCheckOut.textContent = 'Дата выезда: ' + guestData.checkOutDate;
      guestStatus.textContent = 'Статус: ' + (guestData.status || 'неизвестно');

      // Добавление элементов в элемент списка гостей
      guestItem.appendChild(guestName);
      guestItem.appendChild(guestCheckIn);
      guestItem.appendChild(guestCheckOut);
      guestItem.appendChild(guestStatus);

      // Добавление элемента гостя в список гостей
      guestList.appendChild(guestItem);
    });
  });
}
