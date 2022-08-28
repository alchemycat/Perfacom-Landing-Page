window.addEventListener("DOMContentLoaded", () => {
  //Данные для добавления на страницу
  const data = {
    almaty: {
      email: "almaty@perfograd.kz",
      phone: "+ 7 (707) 550-84-88",
      address: "Г. Алматы <br>Ул Сатпаева 29 Д блок А",
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227.24154594518748!2d76.91116643851085!3d43.2367797677848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883692e6aab55e7%3A0x1862adda45c8b8aa!2zMjnQtCwg0JDQu9C80LDRgtGLIDA1MDAwMCwg0JrQsNC30LDRhdGB0YLQsNC9!5e0!3m2!1sru!2sua!4v1661664021490!5m2!1sru!2sua",
    },
    nursultan: {
      email: "Danexltd@mail.ru",
      phone: "+ 7 (707) 550-84-88",
      address: `Г. Нур-Султан<br>
      УЛ. Пушкина, 42 оф. 33`,
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1413.92990659563!2d71.48702208096599!3d51.17832002712885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424581aa16dcfb93%3A0x76b3bab62ea9361b!2z0YPQuy4g0JDQu9C10LrRgdCw0L3QtNGA0LAg0J_Rg9GI0LrQuNC90LAgNDIsINCd0YPRgC3QodGD0LvRgtCw0L0gMDIwMDAwLCDQmtCw0LfQsNGF0YHRgtCw0L0!5e0!3m2!1sru!2sua!4v1661523309333!5m2!1sru!2sua",
    },
  };

  //Анимации
  new WOW().init();

  //Маска для инпутов
  function createMask(inputsSelector, mask) {
    let inputs = document.querySelectorAll(inputsSelector);

    let im = new Inputmask(mask);
    im.mask(inputs);
  }

  createMask('[name="phone"', "+7(999)999-99-99");

  //Валидация форм
  function validateForms(selector, rules) {
    new window.JustValidate(selector, {
      rules: rules,
      messages: {
        name: "Укажите имя",
        email: "Укажите E-mail",
        phone: "Укажите телефон",
        question: "Укажите вопрос",
      },
      submitHandler: function (form) {
        console.log(form);

        const at = document.querySelector(".alert");

        if (at) {
          at.remove();
        }

        const alertText = document.createElement("div");
        alertText.classList.add("alert");

        let formData = new FormData(form);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              alertText.innerText = "Заявка успешно отправлена.";

              form.append(alertText);
            } else {
              alertText.innerText =
                "Ошибка, не удалось отправить заявку, попробуйте еще раз.";
              form.append(alertText);
            }
            form.reset();
          }
          setTimeout(() => {
            alertText.remove();
          }, 3000);
        };

        xhr.open("POST", "/mailer/smart.php", true);
        xhr.send(formData);
      },
    });
  }

  validateForms("#question-form", {
    name: { required: true },
    phone: { required: true },
    email: { required: true, email: true },
  });

  validateForms("#order-form", {
    name: { required: true },
    phone: { required: true },
    email: { required: true, email: true },
  });

  validateForms("#call-form", {
    name: { required: true },
    phone: { required: true },
    email: { required: true, email: true },
  });

  //Бургер меню
  function toggleBurger(
    burgerSelector,
    navbarSelector,
    burgerActiveClass,
    navbarActiveClass
  ) {
    const burger = document.querySelector(burgerSelector);
    const menu = document.querySelector(navbarSelector);

    burger.addEventListener("click", () => {
      burger.classList.toggle(burgerActiveClass);
      menu.classList.toggle(navbarActiveClass);
    });
  }

  toggleBurger(".burger", ".navbar", "burger_active", "navbar_active");

  //Модальные окна

  function modals(
    triggerSelector,
    modalSelector,
    closeButtonSelector,
    modalActiveClass,
    storageKey = null
  ) {
    const modal = document.querySelector(modalSelector);

    let triggerButton = false;

    if (triggerSelector) {
      triggerButton = document.querySelectorAll(triggerSelector);
    }

    //Показываем модалку
    function showModal(triggerButton, modal, modalActiveClass, key = null) {
      if (triggerButton) {
        triggerButton.forEach((btn) => {
          btn.addEventListener("click", () => {
            modal.classList.add(modalActiveClass);
          });
        });
      } else {
        let city;

        if (key) {
          city = window.localStorage.getItem(storageKey);
        }

        if (!city) {
          modal.classList.add(modalActiveClass);
          document.body.style.overflow = "hidden";
        }
      }
    }

    showModal(triggerButton, modal, modalActiveClass, storageKey); //Вызываем модальное окно с проверкой локал сторедж

    //Закрытие модального окна

    function closeModal(modal, closeButtonSelector, modalActiveClass) {
      const closeButton = modal.querySelector(closeButtonSelector);

      closeButton.addEventListener("click", () => {
        closeButton.parentElement.parentElement.classList.remove(
          modalActiveClass
        );
        document.body.style.overflow = "visible";
      });

      modal.addEventListener("click", (e) => {
        if (e.target.classList.contains(modalActiveClass)) {
          e.target.classList.remove(modalActiveClass);
          document.body.style.overflow = "visible";
        }
      });
    }
    closeModal(modal, closeButtonSelector, modalActiveClass); //Вызываем функцию для скрытия модалок
  }

  modals(false, "#city", ".modal__close", "modal_active", "city"); //Вызываем блок который отвечает за модалки
  modals(".assortment__button", "#order", ".modal__close", "modal_active"); //Вызываем модалки для заказов
  modals(".call_button", "#call", ".modal__close", "modal_active"); //Вызываем модалки для заказов

  //Функция для изменения данных на странице
  function changePageData(
    cityElementSelector,
    key,
    targetEmailSelector,
    emailElementSelector,
    phoneElementSelector,
    mapIframeSelector,
    addressSelector,
    data
  ) {
    const cityElements = document.querySelectorAll(cityElementSelector);
    const adminEmails = document.querySelectorAll(targetEmailSelector);
    const email = document.querySelector(emailElementSelector);
    const phones = document.querySelectorAll(phoneElementSelector);
    const map = document.querySelector(mapIframeSelector);
    const address = document.querySelector(addressSelector);

    const city = window.localStorage.getItem(key) || "Алматы";

    //Заменяем город на выбранный
    cityElements.forEach((item) => {
      item.textContent = city;
    });

    //Замена данных
    if (city == "Алматы") {
      map.src = data.almaty.mapLink;
      address.innerHTML = data.almaty.address;

      adminEmails.forEach((item) => {
        item.value = data.almaty.email;
      });

      phones.forEach((phone) => {
        phone.textContent = data.almaty.phone;
        phone.href = `tel:${clearPhone(data.almaty.phone)}`;
      });

      email.textContent = data.almaty.email;
      email.href = `mailto:${data.almaty.email}`;
    } else {
      map.src = data.nursultan.mapLink;
      address.innerHTML = data.nursultan.address;
      adminEmails.forEach((item) => {
        item.value = data.nursultan.email;
      });
      phones.forEach((phone) => {
        phone.textContent = data.nursultan.phone;
        phone.href = `tel:${clearPhone(data.nursultan.phone)}`;
      });
      email.textContent = data.nursultan.email;
      email.href = `mailto:${data.nursultan.email}`;
    }

    //Вспомогательная функция для удаления лишних символов из телефона
    function clearPhone(phone) {
      return phone.match(/(\+|\d)/g).join("");
    }
  }

  changePageData(
    ".current__city",
    "city",
    '[name="admin_email"]',
    ".contact-email",
    ".contact-phone",
    ".footer__map iframe",
    ".address",
    data
  ); //Вызываем функцию для изменения данных на странице

  //Изменение города
  function changeCity(buttonsSelector, modalSelector, modalActiveClass = null) {
    const buttons = document.querySelectorAll(buttonsSelector);
    const modal = document.querySelector(modalSelector);

    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        window.localStorage.setItem("city", button.textContent.trim());
        if (modalActiveClass) {
          modal.classList.remove(modalActiveClass);
          document.body.style.overflow = "visible";
        }

        try {
          let footerList = document.querySelector(".footer__change-city");
          footerList.classList.remove("change__city_active");
        } catch {}

        changePageData(
          ".current__city",
          "city",
          '[name="admin_email"]',
          ".contact-email",
          ".contact-phone",
          ".footer__map iframe",
          ".address",
          data
        ); //Вызываем функцию для изменения данных на странице
      });
    });
  }

  changeCity(".modal__button", "#city", "modal_active"); //Подключаем функцию ко всем кнопкам
  changeCity(".change__city-button"); //Подключаем функцию ко всем кнопкам

  //Переключаем список городов
  function toggleList(buttonSelector, listSelector) {
    const changeButton = document.querySelector(buttonSelector);

    changeButton.addEventListener("click", (e) => {
      e.preventDefault();
      const changeModal = document.querySelector(listSelector);

      changeModal.classList.toggle("change__city_active");
    });
  }

  toggleList(".contacts__item_choice", ".header__change-city"); //Подключаем функцию ко всем кнопкам
  toggleList(".footer__select-city", ".footer__change-city"); //Подключаем функцию ко всем кнопкам

  //Сохраняем данные для заказа
  function createOrder() {
    const orderButtons = document.querySelectorAll(".assortment__button");

    orderButtons.forEach((orderButton) => {
      orderButton.addEventListener("click", (e) => {
        e.preventDefault();
        const parent = orderButton.parentElement;

        const title = parent.querySelector(".assortment__name").textContent;

        const details = parent.querySelector(
          ".assortment__details"
        ).textContent;

        const inputTitle = document.querySelector('[name="order-title"]');
        const inputDetails = document.querySelector('[name="order-details"]');

        inputTitle.value = title;
        inputDetails.value = details;
      });
    });
  }

  createOrder(); //Вызываем функцию которая сохраняет данные для заказов

  //Плавный скролл к секциям
  function smoothScrolling() {
    let anchorlinks = document.querySelectorAll('a[href^="#"]');

    for (let item of anchorlinks) {
      // relitere
      item.addEventListener("click", (e) => {
        let hashval = item.getAttribute("href");
        try {
          const navbar = document.querySelector(".navbar");
          const burger = document.querySelector(".burger");
          navbar.classList.remove("navbar_active");
          burger.classList.remove("burger_active");
        } catch {}
        let target = document.querySelector(hashval);
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        history.pushState(null, null, hashval);
        e.preventDefault();
      });
    }
  }

  smoothScrolling();
});
