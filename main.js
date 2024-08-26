// Import
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle'; // 覆蓋 bootstrap

import './assets/scss/all.scss';

import 'bootstrap/dist/js/bootstrap.min.js';

import AOS from 'aos';
import './node_modules/aos/dist/aos.css';

import jQuery from 'jquery';
window.$ = jQuery;


// JavaScript

// SelArticle Swiper 首頁精選文章
const HotArticleSwiper = new Swiper(".HotArticleSwiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 48,

  // loop: true,

  breakpoints: {
    1200: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 48,
    }
  },

  navigation: {
    nextEl: ".swiper-next-HotArticle",
    prevEl: ".swiper-prev-HotArticle"
  },
  pagination: {
    el: ".swiper-pagination-HotArticle",
    type: "fraction"
  }
});
  
// aos
AOS.init();
  
  
// jQuery
// Signin/ login
$('.needs-validation').each(function (index) {
  $(this).on('submit', function (e) {
    e.preventDefault();
    $(this).addClass('was-validated');
  });
});

console.log("Hello world!");