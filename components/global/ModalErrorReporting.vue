<template>
    <div
            class="menu-reg menu-none menu-reg-sailor cabinet"
            id="modal-error-reporting"
            :class="{ 'menu-show': isOpen }"
    >
        <div class="modal-block">
            <div class="modal-top">
                <h2 class="modal-title">
                    Сообщить об ошибке:
                </h2>
                <!-- /.modal-title -->
                <img @click="closeModal('errorReporting')" class="js-modal-close modal-close" src="assets/img/modal/close.png" alt="image">

            </div>
            <!-- /.modal-top -->

            <div class="modal-info">
                <div class="modal-info__item">
                    <div class="modal-info__gray">Название судна:</div>
                    <!-- /.modal-info__gray -->
                    <div class="modal-info__black">EVER GIVEN</div>
                    <!-- /.modal-info__black -->
                </div>
                <!-- /.modal-info__item -->
                <div class="modal-info__item">
                    <div class="modal-info__gray">IMO судна:</div>
                    <!-- /.modal-info__gray -->
                    <div class="modal-info__black">9811000</div>
                    <!-- /.modal-info__black -->
                </div>
                <!-- /.modal-info__item -->
            </div>
            <!-- /.modal-info -->
            <div class="resume-grid col2 cabinet modal-form-three">
                <div class="input">
                    <label for="">Ваше имя:</label>
                    <input type="text" value="Александр">
                </div>

                <div class="input">
                    <label for="">Контактная почта для связи:</label>
                    <input type="text" value="orionstar@company.ru">
                </div>

                <div class="input">
                    <label for="">Телефон для связи:</label>
                    <input type="text" value="+7 812 777 77 77">
                </div>


                <textarea name="" id=""
                          placeholder="Укажите неточность в информации о судне, либо интересующий Вас вопрос"
                          class="modal-textarea"></textarea>

            </div>
            <!-- /.resume-grid -->
            <div class="modal-check">
                <img src="assets/img/contact/image.png" alt="" class="contact-rep">

                <label for="check" class="contact-label contact-label-check">
                    <input id="check" type="checkbox" class="contact-check">
                    <span class="contact-check__text">
        Я даю согласие на обработку
        <a href="#">персональных данных</a>
    </span>
                    <!-- /.contact-check__text -->
                </label>
            </div>
            <!-- /.modal-check -->

        </div>
        <button @click="closeModal('errorReporting');toggleModal('modalResponse');" type="submit" class="modal-button js-open-modal js-modal-close modal-button-open" data-modal="4">
            Отправить сообщение
            <img src="assets/img/modal/plus-cursor.svg" alt="image">
        </button>
    </div>
    <div
            :class="['header-overlay', { 'header-overlay__active': isOpen }]"
            @click="closeModal('errorReporting')"
    ></div>
</template>

<script setup>
    import {useModalStore} from "~/store/modal";
    import AfCloseModal from "@/components/uikit/AfCloseModal";
    import watchScrollModal from "~/utils/watchScrollModal";


    const {closeModal, toggleModal} = useModalStore();

    const props = defineProps({
        isOpen: {
            type: Boolean,
        },
    });

    watch(() => props.isOpen, watchScrollModal)

</script>