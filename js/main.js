(function () {
  'use strict';

  var Harlsoft = {};

  Harlsoft.initNav = function () {
    var hamburger = document.getElementById('nav-hamburger');
    var navPrimary = document.getElementById('nav-primary');

    if (!hamburger || !navPrimary) return;

    hamburger.onclick = function () {
      var isOpen = navPrimary.classList.contains('nav-primary--open');
      if (isOpen) {
        navPrimary.classList.remove('nav-primary--open');
        hamburger.classList.remove('nav-hamburger--open');
      } else {
        navPrimary.classList.add('nav-primary--open');
        hamburger.classList.add('nav-hamburger--open');
      }
    };
  };

  Harlsoft.initCarousel = function () {
    var track = document.getElementById('carousel-track');
    var prevBtn = document.getElementById('carousel-prev');
    var nextBtn = document.getElementById('carousel-next');
    var dots = document.querySelectorAll('.carousel__dot');

    if (!track) return;

    var slides = track.querySelectorAll('.carousel__slide');
    var total = slides.length;
    var current = 0;

    function goTo(index) {
      current = (index + total) % total;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      dots.forEach(function (dot, i) {
        dot.classList.toggle('carousel__dot--active', i === current);
      });
    }

    if (prevBtn) {
      prevBtn.onclick = function () { goTo(current - 1); };
    }

    if (nextBtn) {
      nextBtn.onclick = function () { goTo(current + 1); };
    }

    dots.forEach(function (dot) {
      dot.onclick = function () {
        goTo(parseInt(dot.getAttribute('data-index'), 10));
      };
    });

    setInterval(function () { goTo(current + 1); }, 4000);
  };

  Harlsoft.initModal = function () {
    var overlay = document.getElementById('modal-overlay');
    var trigger = document.getElementById('modal-trigger');
    var closeBtn = document.getElementById('modal-close');
    var cancelBtn = document.getElementById('modal-cancel');

    if (!overlay || !trigger) return;

    trigger.onclick = function () {
      overlay.classList.add('modal-overlay--visible');
    };

    function closeModal() {
      overlay.classList.remove('modal-overlay--visible');
    }

    if (closeBtn) { closeBtn.onclick = closeModal; }
    if (cancelBtn) { cancelBtn.onclick = closeModal; }

    overlay.onclick = function (e) {
      if (e.target === overlay) { closeModal(); }
    };
  };

  Harlsoft.initAccordion = function () {
    var accordion = document.getElementById('faq-accordion');
    if (!accordion) return;

    var items = accordion.querySelectorAll('.accordion__item');

    items.forEach(function (item) {
      var trigger = item.querySelector('.accordion__trigger');
      var icon = item.querySelector('.accordion__icon');

      if (!trigger) return;

      trigger.onclick = function () {
        var isOpen = item.classList.contains('accordion__item--open');
        if (isOpen) {
          item.classList.remove('accordion__item--open');
          if (icon) icon.innerHTML = '&#43;';
        } else {
          item.classList.add('accordion__item--open');
          if (icon) icon.innerHTML = '&#8722;';
        }
      };
    });
  };

  Harlsoft.initNewsletter = function () {
    var form = document.getElementById('newsletter-form');
    var statusEl = document.getElementById('newsletter-status');

    if (!form || !statusEl) return;

    form.onsubmit = function (e) {
      e.preventDefault();
      statusEl.textContent = 'Thank you for subscribing! You\'ll receive our next issue shortly.';
    };
  };

  Harlsoft.initContactForm = function () {
    var form = document.getElementById('contact-form');
    var errorsEl = document.getElementById('form-errors');
    var countrySelect = document.getElementById('field-country');

    if (!form) return;

    if (countrySelect) {
      countrySelect.onchange = function () {
        form.submit();
      };
    }

    form.onsubmit = function (e) {
      e.preventDefault();

      var nameEl = document.getElementById('field-name');
      var emailEl = document.getElementById('field-email');
      var messageEl = document.getElementById('field-message');
      var enquiryEls = form.querySelectorAll('input[name="enquiry"]');
      var countryEl = document.getElementById('field-country');

      var errors = [];

      var fields = [nameEl, emailEl, messageEl, countryEl];
      fields.forEach(function (el) {
        if (el) {
          el.classList.remove('form-input--error', 'form-select--error', 'form-textarea--error');
        }
      });

      if (!nameEl || !nameEl.value.trim()) {
        errors.push('Full Name is required.');
        if (nameEl) nameEl.classList.add('form-input--error');
      }

      if (!emailEl || !emailEl.value.trim()) {
        errors.push('Email address is required.');
        if (emailEl) emailEl.classList.add('form-input--error');
      }

      if (!countryEl || !countryEl.value) {
        errors.push('Country is required.');
        if (countryEl) countryEl.classList.add('form-select--error');
      }

      var enquiryChecked = false;
      enquiryEls.forEach(function (el) {
        if (el.checked) enquiryChecked = true;
      });
      if (!enquiryChecked) {
        errors.push('Please select an enquiry type.');
      }

      if (!messageEl || !messageEl.value.trim()) {
        errors.push('Message is required.');
        if (messageEl) messageEl.classList.add('form-textarea--error');
      }

      if (errors.length > 0) {
        var list = '<ul>';
        errors.forEach(function (err) {
          list += '<li>' + err + '</li>';
        });
        list += '</ul>';
        errorsEl.innerHTML = list;
        errorsEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        errorsEl.innerHTML = '';
        form.reset();
        var confirmEl = document.createElement('p');
        confirmEl.className = 'contact-confirm';
        confirmEl.textContent = 'Thank you for your message. A member of our team will be in touch shortly.';
        form.parentNode.insertBefore(confirmEl, form);
        form.style.display = 'none';
      }
    };
  };

  document.addEventListener('DOMContentLoaded', function () {
    Harlsoft.initNav();
    Harlsoft.initCarousel();
    Harlsoft.initModal();
    Harlsoft.initNewsletter();
    Harlsoft.initAccordion();
    Harlsoft.initContactForm();
  });

})();
