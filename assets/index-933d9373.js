(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();$(function(){$(".reviews-list").slick({dots:!0,slidesToShow:3,slidesToScroll:1,mobileFirst:!0,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:375,settings:{slidesToShow:1,slidesToScroll:1}}]})});$(function(){$(".products-list").slick({dots:!0,slidesToShow:3,slidesToScroll:1,mobileFirst:!0,responsive:[{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1,centerMode:!0,variableWidth:!0}},{breakpoint:375,settings:{slidesToShow:1,slidesToScroll:1}}]})});(function(r){typeof r.matches!="function"&&(r.matches=r.msMatchesSelector||r.mozMatchesSelector||r.webkitMatchesSelector||function(o){for(var s=this,n=(s.document||s.ownerDocument).querySelectorAll(o),e=0;n[e]&&n[e]!==s;)++e;return Boolean(n[e])}),typeof r.closest!="function"&&(r.closest=function(o){for(var s=this;s&&s.nodeType===1;){if(s.matches(o))return s;s=s.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var r=document.querySelectorAll(".js-open-modal"),o=document.querySelector(".js-overlay-modal"),s=document.querySelectorAll(".js-modal-close");r.forEach(function(n){n.addEventListener("click",function(e){e.preventDefault();var t=this.getAttribute("data-modal"),l=document.querySelector('.modal[data-modal="'+t+'"]');l.classList.add("active"),o.classList.add("active")})}),s.forEach(function(n){n.addEventListener("click",function(e){var t=this.closest(".modal");t.classList.remove("active"),o.classList.remove("active")})}),document.body.addEventListener("keyup",function(n){var e=n.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),o.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});(()=>{const r=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),n=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),r.classList.toggle("is-open");const t=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[t](document.body)};o.addEventListener("click",n),s.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(r.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
