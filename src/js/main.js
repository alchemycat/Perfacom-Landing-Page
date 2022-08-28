window.addEventListener("DOMContentLoaded", () => {
  new WOW().init();
  let elements = document.querySelectorAll('[name="phone"');

  let im = new Inputmask("+7(999)999-99-99");
  im.mask(elements);

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
              console.log("Отправлено");
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

  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".navbar");

  burger.addEventListener("click", () => {
    burger.classList.toggle("burger_active");
    menu.classList.toggle("navbar_active");
  });

  const modal = document.querySelector("#city");
  const city = window.localStorage.getItem("city");

  if (!city) {
    modal.classList.add("modal_active");
    document.body.style.overflow = "hidden";
  }

  const closeButtons = document.querySelectorAll(".modal__close");

  setCity();

  function setCity() {
    const currentCity = document.querySelectorAll(".current__city");
    const city = window.localStorage.getItem("city") || "Алматы";
    currentCity.forEach((item) => {
      item.textContent = city;
    });
    const adminEmails = document.querySelectorAll('[name="admin_email"]');
    const email = document.querySelector(".contact-email");
    const phones = document.querySelectorAll(".contact-phone");
    const map = document.querySelector(".footer__map iframe");
    const address = document.querySelector(".address");

    const almatyEmail = "almaty@perfograd.kz";
    const nursultanEmail = "Danexltd@mail.ru";
    const almatyPhone = "+ 7 (707) 550-84-88";
    const nursultanPhone = "+ 7 (707) 550-84-88";
    const almatyAddress = `Г. Алматы <br>Ул Сатпаева 29 Д блок А`;
    const nursultanAddress = `Г. Нур-Султан<br>
    УЛ. Пушкина, 42 оф. 33`;

    const almatyMap =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227.24154594518748!2d76.91116643851085!3d43.2367797677848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883692e6aab55e7%3A0x1862adda45c8b8aa!2zMjnQtCwg0JDQu9C80LDRgtGLIDA1MDAwMCwg0JrQsNC30LDRhdGB0YLQsNC9!5e0!3m2!1sru!2sua!4v1661664021490!5m2!1sru!2sua";
    const nursultanMap =
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1413.92990659563!2d71.48702208096599!3d51.17832002712885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424581aa16dcfb93%3A0x76b3bab62ea9361b!2z0YPQuy4g0JDQu9C10LrRgdCw0L3QtNGA0LAg0J_Rg9GI0LrQuNC90LAgNDIsINCd0YPRgC3QodGD0LvRgtCw0L0gMDIwMDAwLCDQmtCw0LfQsNGF0YHRgtCw0L0!5e0!3m2!1sru!2sua!4v1661523309333!5m2!1sru!2sua";

    const almatyClearPhone = almatyPhone.match(/(\+|\d)/g).join("");
    const nursultanClearPhone = nursultanPhone.match(/(\+|\d)/g).join("");

    if (city == "Алматы") {
      map.src = almatyMap;
      address.innerHTML = almatyAddress;
      adminEmails.forEach((item) => {
        item.value = almatyEmail;
      });
      phones.forEach((phone) => {
        phone.textContent = almatyPhone;
        phone.href = `tel:${almatyClearPhone}`;
      });
      email.textContent = almatyEmail;
      email.href = `mailto:${almatyEmail}`;
    } else {
      map.src = nursultanMap;
      address.innerHTML = nursultanAddress;
      adminEmails.forEach((item) => {
        item.value = nursultanEmail;
      });
      phones.forEach((phone) => {
        phone.textContent = nursultanPhone;
        phone.href = `tel:${nursultanClearPhone}`;
      });
      email.textContent = nursultanEmail;
      email.href = `mailto:${nursultanEmail}`;
    }
  }

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.parentElement.parentElement.classList.remove("modal_active");
      document.body.style.overflow = "visible";
    });
  });

  function changeCity(buttonsSelector, modalActiveClass = null) {
    const buttons = document.querySelectorAll(buttonsSelector);

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

        setCity();
      });
    });
  }

  changeCity(".modal__button", "modal_active");
  changeCity(".change__city-button");

  function toggleList(buttonSelector, listSelector) {
    const changeButton = document.querySelector(buttonSelector);

    changeButton.addEventListener("click", (e) => {
      e.preventDefault();
      const changeModal = document.querySelector(listSelector);

      changeModal.classList.toggle("change__city_active");
    });
  }

  toggleList(".contacts__item_choice", ".header__change-city");
  toggleList(".footer__select-city", ".footer__change-city");

  function createOrder() {
    const orderButtons = document.querySelectorAll(".assortment__button");
    const orderModal = document.querySelector("#order");

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

        orderModal.classList.add("modal_active");
      });
    });
  }

  createOrder();

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

  function orderCall() {
    const buttons = document.querySelectorAll(".call_button");
    const modal = document.querySelector("#call");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        modal.classList.add("modal_active");
      });
    });
  }

  orderCall();

  document.querySelectorAll(".modal").forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal_active")) {
        e.target.classList.remove("modal_active");
      }
    });
  });
});
