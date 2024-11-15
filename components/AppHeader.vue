<style lang="scss" scoped>
   @import '/assets/header.scss';
</style>

<template>
  <div class="header">
    <div class="container">
      <div class="header__row">
        <a class="header__logo" href="/">
          <img class="header__logo-img" src="/assets/images/logo.svg" width="70" height="65" alt="logo" />
        </a>
        <button 
          :class="['header__burger burger', { burger_active: isMenuOpen }]"
          @click="toggleMenu"
        >
          <i class="burger__line">...</i>
        </button>
        <nav 
          :class="['header__menu', { 'header__menu_active': isMenuOpen }]"
        >

          <ul class="header__menu-list">
            <li class="header__menu-item">
              <a class="header__menu-link" href="/">Главная</a>
            </li>
            <li class="header__menu-item">
              <a class="header__menu-link" href="#">Экскурсии</a>
            </li>
            <li class="header__menu-item">
              <a class="header__menu-link" href="#">Аренда авто</a>
            </li>
          </ul>

          <div class="header__lang">
            <a class="header__lang-item" href="#">Ru</a>/
            <a class="header__lang-item" href="#">En</a>
          </div>

        </nav>

      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        isMenuOpen: false // Начальное состояние меню (закрыто)
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen; // Переключаем состояние меню
      }
    }
  };
</script>