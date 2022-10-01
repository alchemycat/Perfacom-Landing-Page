window.addEventListener("DOMContentLoaded", () => {

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

  //
  function setCity() {
    const pathname = window.location.pathname;

    if (pathname.includes == "almaty") {
      window.localStorage.setItem("city", "almaty");
    } else if (pathname.includes == "nursultan") {
      window.localStorage.setItem("city", "nursultan");
    }
  }

  setCity();

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
    function showModal(triggerButton, modal, modalActiveClass) {
      if (triggerButton) {
        triggerButton.forEach((btn) => {
          btn.addEventListener("click", () => {
            modal.classList.add(modalActiveClass);
            document.body.style.overflow = "hidden";
          });
        });
      } else {
        const pathname = window.location.pathname;
        console.log(pathname);
        if (pathname.includes("almaty") || pathname.includes("nursultan")) {
        } else {
          modal.classList.add(modalActiveClass);
          document.body.style.overflow = "hidden";
        }
      }
    }

    showModal(triggerButton, modal, modalActiveClass); //Вызываем модальное окно с проверкой локал сторедж

    //Закрытие модального окна

    function closeModal(modal, closeButtonSelector, modalActiveClass) {
      const closeButton = modal.querySelector(closeButtonSelector);

      closeButton.addEventListener("click", () => {
        modal.setAttribute("class", "modal");
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

  //Переключаем список городов
  function toggleList(buttonSelector, listSelector) {
    const changeButton = document.querySelector(buttonSelector);

    changeButton.addEventListener("click", () => {
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
