<template>
  <div
    class="menu-reg menu-none menu-reg-sailor cabinet"
    id="reg-about-lk"
    :class="['menu-reg menu-none', { 'menu-show': isOpen }]"
  >
    <div class="menu-lk-top">
      <div class="menu-lk-title">Личный кабинет</div>
      <div class="header-close menu-close-gray close-lk-about">
        <span class="header-close__icon"></span>
        <div
          class="header-close__text"
          id="close-reg-sailor"
          @click="closeModal('authCompany')"
        >
          закрыть
        </div>
      </div>
    </div>

    <div class="menu-lk-content">
      <img src="assets/img/menu/lk-about.png" alt="image" class="menu-lk-img" />
      <div class="menu-lk-info">
        <div class="menu-lk-subtitle">Orion Star Group</div>

        <div class="menu-lk-cont">
          <div class="menu-lk-item">
            <div class="menu-lk-gray">Создать:</div>

            <div class="menu-lk-blue">6 вакансий</div>

            <a href="" class="menu-lk-red">Пополнить</a>
          </div>

          <div class="menu-lk-item">
            <div class="menu-lk-gray">Отправить:</div>

            <div class="menu-lk-blue">598 предложений</div>

            <a href="" class="menu-lk-red">Пополнить</a>
          </div>
        </div>
      </div>
    </div>

    <div class="menu-lk-part">
      <NuxtLink
        v-for="(item, i) in MenuCompany"
        :key="'item-link-' + i"
        :to="item.link"
        class="menu-lk-link"
      >
        <img :src="'/img/menu/' + item.icon" alt="image" class="menu-lk-icon" />
        <span class="menu-lk-ltext">{{ item.name }}</span>
      </NuxtLink>
      <a @click="closeModal('authCompany');logoutMethod()" aria-current="page" href="#" class="router-link-active router-link-exact-active menu-lk-link">
        <img src="/img/menu/lk-about-10.svg"
             alt="image"
             class="menu-lk-icon">
        <span class="menu-lk-ltext">Выйти</span></a>
    </div>
  </div>
  <div
    :class="['header-overlay', { 'header-overlay__active': isOpen }]"
    @click="closeModal('authCompany')"
  ></div>
</template>

<script setup>
import { useModalStore } from "~/store/modal";
import { useUsersStoreRefs } from "~/store/useUserStore";
import { MenuCompany } from "~/consts/MenuConsts";

const { user } = useUsersStoreRefs();
const { toggleModal, closeModal } = useModalStore();
import { useUsersStore } from "~/store/useUserStore";

const userStore = useUsersStore();
const { userInfo } = storeToRefs(userStore)
watch(userInfo, () => {

});

const logoutMethod = async () => {
  userStore.logout();
  window.Telegram.WebApp.close();
}

const props = defineProps({
  isOpen: {
    type: Boolean,
  },
});

</script>

<style lang="scss" scoped></style>
