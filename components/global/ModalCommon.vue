<template>
    <div
            class="menu-reg menu-none menu-reg-sailor cabinet"
            id="common-modal"
            :class="{ 'menu-show': isOpen }"
    >
        <div class="modal-block">
            <div class="modal-top">
                <h2 class="modal-title">

                </h2>
                <!-- /.modal-title -->
                <img @click="closeModal('commonmodal')" class="js-modal-close modal-close" src="assets/img/modal/close.png" alt="image">

            </div>
            <!-- /.modal-top -->

            <div class="suda-item__text">{{msg}}</div>
        </div>
        <!-- /.modal-button -->

    </div>
    <div
            :class="['header-overlay header-overlay-commonmodal', { 'header-overlay__active': isOpen }]"
            @click="closeModal('commonmodal')"
    ></div>
</template>

<script setup>
    import {useModalStore} from "~/store/modal";

    const {closeModal, toggleModal} = useModalStore();

    const props = defineProps({
        isOpen: {
            type: Boolean,
        },
        msg: {
            type: String,
            default: 'Ошибка. Пожалуйста, попробуйте позже.',
        },
    });
</script>

<style>
    .header-overlay__active.header-overlay-commonmodal {
        z-index: 1001;
    }
    .menu-reg.menu-show#common-modal {
        z-index: 1002 !important;
    }
</style>