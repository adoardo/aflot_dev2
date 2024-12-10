<template>
  <div class="header-close menu-close-gray close-reg-about">
    <span class="header-close__icon"></span>
    <div class="header-close__text" id="close-reg-sailor" @click="closeModalCheck(modalName)">
      закрыть
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useModalStore } from "~/store/modal";

const props = defineProps({
  modalName: String,
});

const { closeModal } = useModalStore();

const closeModalCheck = async (modal) => {
  closeModal(modal);
  if (modal === 'modalAuthVerify') {
    closeModal('lk');
  }

}


</script>

<style lang="scss" scoped></style>
