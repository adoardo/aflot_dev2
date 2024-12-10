<template>
  <header class="header header-index" :class="{ 'fp-viewing-2': activeSection === 2 }">
    <div class="container">
      <div class="header-block">
        <AfLogo />

        <div class="header-content">
          <a class="header-search">
            <span class="fa fa-search header-search__icon"></span>
            <div class="header-search__text">
              Поиск
            </div>
          </a>
          <a v-if="isAuth" class="header-notif header-notif-white"><img src="assets/img/header/red-notif.svg" alt="image"></a>

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

          <div id="mobile" class="mobile" @click="toggleModal('menu')">
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
import { useUsersStore} from "~/store/useUserStore";

const { toggleModal } = useModalStore();

const userStore = useUsersStore();
const { userInfo, isAuth } = storeToRefs(userStore)
watch(userInfo, () => {

});

</script>

<style lang="scss" scoped>
  .ed-user-role-head {
    color:#fff;

    .header-lk__text {
      font-size: 12px;
      opacity: .5;
      padding-left: 16px;
      position: relative;

      &:before {
        position: absolute;
        left: 2px;
        top: 6px;
        background: #3dff3d;
        border-radius: 50%;
        width: 8px;
        height: 8px;
        display: flex;
        content: "";
      }
    }

  }
</style>