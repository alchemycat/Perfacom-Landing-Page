window.addEventListener("DOMContentLoaded", () => {
  //Данные для добавления на страницу
  const data = {
    almaty: {
      introText: "Разных размеров и типов перфорации",
      introTitle:
        '<span class="text_green">ПЕРФОРИРОВАННЫЕ ЛИСТЫ</span> ВЫСОКОГО КАЧЕСТВА',
      introSubtitle: "Доставка в любых объемах по Казахстану",
      assortmentTitle:
        'ВИДЫ <span class="text_green">ПЕРФОРИРОВАННЫX<br>ЛИСТОВ</span> В НАЛИЧИИ',
      assortmentText:
        "В изготовлении перфорированных листов применяются нержавеющий, оцинкованный, стальной (горячекатаной и холоднокатаной) или алюминиевый металл. В зависимости от требований предлагаем подходящие по размеру и материалу листы с доставкой по городу Алматы и всей стране. По доступной стоимости предлагаются листы с разной формой отверстий и расположением.",
      questionTitle:
        'ОСТАЛИСЬ ВОПРОСЫ? <span class="text_green">ОСТАВЬТЕ ЗАЯВКУ</span>',
      questionText:
        "Благодаря большому ассортименту мы подберем перфолисты под любые требования заказчика. Предлагаем листы в нестандартных размерах, любой толщины и видом перфорации. Для заказа в Казахстане нажимайте “Оставить заявку” и специалисты свяжутся с Вами. ",
      name: "DANEX LTD-ALMATY",
      email: "almaty@perfograd.kz",
      phone: "+7 (771) 033 0434",
      address: "г.Алматы<br>ул. Ауэзова 1б",
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d769.8668036590985!2d76.90262949727055!3d43.23821574705604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369fca7ab5057%3A0x735672ae89d4d07d!2sDANEX%20LTD-ALMATY!5e0!3m2!1sru!2sua!4v1661700274780!5m2!1sru!2sua",
    },
    nursultan: {
      introText: "Разных размеров и типов перфорации",
      introTitle:
        '<span class="text_green">ПЕРФОРИРОВАННЫЕ ЛИСТЫ</span> ВЫСОКОГО КАЧЕСТВА',
      introSubtitle: "Доставка в любых объемах по Казахстану",
      assortmentTitle:
        'ВИДЫ <span class="text_green">ПЕРФОРИРОВАННЫX<br>ЛИСТОВ</span> В НАЛИЧИИ',
      assortmentText:
        "В изготовлении перфорированных листов применяются нержавеющий, оцинкованный, стальной (горячекатаной и холоднокатаной) или алюминиевый металл. В зависимости от требований предлагаем подходящие по размеру и материалу листы с доставкой по городу Нур-Султан и всей стране. По доступной стоимости предлагаются листы с разной формой отверстий и расположением.",
      questionTitle:
        'ОСТАЛИСЬ ВОПРОСЫ? <span class="text_green">ОСТАВЬТЕ ЗАЯВКУ</span>',
      questionText:
        "Благодаря большому ассортименту мы подберем перфолисты под любые требования заказчика. Предлагаем листы в нестандартных размерах, любой толщины и видом перфорации. Для заказа в Казахстане нажимайте “Оставить заявку” и специалисты свяжутся с Вами.",
      name: "DANEX LTD",
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
