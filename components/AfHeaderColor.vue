<template>
  <header class="header">
    <div class="container">
      <div class="header-block">
        <AfLogo type="blue" />

        <div class="header-content">
          <a class="header-search header-search-color">
            <span class="fa fa-search header-search__icon"></span>
            <div class="header-search__text">
              Поиск
            </div>
          </a>
          <a v-if="isAuth" class="header-notif"><img src="assets/img/header/red-notif.svg" alt="image"></a>

          <a v-show="!isAuth" class="header-lk" @click="toggleModal('lk'); userStore.resetSocialsAuth()">
            <i class="fa fa-user-o header-lk__icon"></i>
            <div class="header-lk__text">личный кабинет</div>
          </a>

          <a v-show="isAuth && userInfo.info.role == 'Моряк'" class="header-lk" @click="toggleModal('authSeilor')">
            <i class="fa fa-user-o header-lk__icon"></i>
            <div class="ed-user-role-head">
              <div class="eurh-fio">{{userInfo.info.last_name}} {{userInfo.info.first_name}}</div>
              <div class="header-lk__text">{{userInfo.info.role}}</div>
            </div>
          </a>
          <a v-show="isAuth && userInfo.info.role == 'Компания'" class="header-lk" @click="toggleModal('authCompany')">
            <i class="fa fa-user-o header-lk__icon"></i>
            <div class="ed-user-role-head">
              <div class="eurh-fio">{{userInfo.info.last_name}} {{userInfo.info.first_name}}</div>
              <div class="header-lk__text">{{userInfo.info.role}}</div>
            </div>
          </a>

          <div id="mobile" class="mobile mobile-color" @click="toggleModal('menu')">
            <span class="mobile-line"> </span>

            <div class="mobile-text">меню</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import AfLogo from "@/components/uikit/AfLogo";
import { useModalStore } from "~/store/modal";
import { useUsersStore } from "~/store/useUserStore";

const { toggleModal } = useModalStore();

const userStore = useUsersStore();
const { userInfo, isAuth } = storeToRefs(userStore)
watch(userInfo, () => {

});

</script>

<style lang="scss" scoped>
  .header-lk__text {
    color: #3b45a9;
  }
  .header-lk__icon {
    color:#000;
  }
</style>
