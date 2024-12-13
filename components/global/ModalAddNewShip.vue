<template>
    <div
            class="menu-reg menu-none menu-reg-sailor cabinet"
            id="add-new-ship"
            v-if="!ifSend"
            :class="{ 'menu-show': isOpen }"
    >
        <div class="modal-block">
            <div class="modal-top">
                <h2 class="modal-title">
                    Добавить судно в ручную
                </h2>
                <!-- /.modal-title -->
                <img @click="closeModal('newship');" class="js-modal-close modal-close" src="assets/img/modal/close.png" alt="image">

            </div>
            <!-- /.modal-top -->

            <div class="suda-item__text">
                Заполните данные по судну, которого нет в нашей базе. <a class="suda-item__link">Уточнить характеристики
                судна вы можете по этой ссылке.</a>
            </div>
            <!-- /.suda-item__text -->

            <div class="vabout-info vabout-info-vak modal-vabout modal-vabout__two modal-vabout__line">
                <div class="vabout-item">
                    <AfInput
                            place="Пример: EVER GIVEN"
                            label="Название судна: <text>*</text>"
                            type="text"
                            v-model="formData.vessel_name"
                            :error="v$.vessel_name.$error && v$.vessel_name.required.$invalid"
                    />
                </div>
                <div class="vabout-item">
                    <AfInput
                            place="Пример: 9811000"
                            label="IMO судна: <text>*</text>"
                            type="text"
                            v-model="formData.imo"
                            :error="v$.imo.$error && v$.imo.required.$invalid"
                    />
                </div>
            </div>
            <div class="vabout-info vabout-info-vak modal-vabout modal-vabout__line">
                <div class="vabout-item">
                    <AfInput
                            place="Пример: Контейнеровоз"
                            label="Тип судна:"
                            v-model="formData.ship_type"
                    />
                </div>
                <div class="vabout-item">
                    <AfInput
                            place="Пример: 2018"
                            label="Год постройки:"
                            v-model="formData.year_built"
                    />
                </div>
                <div class="vabout-item">
                    <AfInput
                            place="Пример: 199 489"
                            label="DWT (t) - валовая вместимость:"
                            v-model="formData.dwt"
                    />
                </div>
                <div class="vabout-item">
                    <AfInput
                            place="-"
                            label="kW - двигательная установка:"
                            v-model="formData.kw"
                    />
                </div>
                <div class="vabout-item">
                    <AfInput
                            place="Пример: 399 m / 1309 ft"
                            label="Длина:"
                            v-model="formData.length"
                    />
                </div>
                <div class="vabout-item">
                    <AfInput
                            place="Пример: 59 m / 194 ft"
                            label="Ширина:"
                            v-model="formData.width"
                    />
                </div>
            </div>

            <div v-if="ifExist" class="suda-item modal-item">
                <img src="assets/img/suda/icon.png" alt="image" class="suda-item__img">

                <div class="modal-item__red">
                    Данное IMO уже зарегистрировано в нашей базе «Морского флота».<br>
                    Воспользуйтесь <a class="modal-item__blue">этой формой</a>, чтобы прикрепить судно по данонму IMO к
                    вашим судам.
                </div>
                <!-- /.modal-item__red -->
            </div>
            <!-- /.suda-item -->
        </div>

        <button class="modal-button" @click="send">
            <img src="assets/img/modal/plus-white.png" alt="image">
            Отправить на модерацию
        </button>
        <!-- /.modal-button -->

    </div>

    <div
            :class="['header-overlay', { 'header-overlay__active': isOpen }]"
            @click="closeModal('newship'); reloadWindow(); ifSend.value = false"
    ></div>

    <div v-if="ifSend" class="modal modal-thank active">

        <div class="modal-block">
            <img src="assets/img/modal/check-green.svg" alt="image">
            <h2 class="modal-title">
                Спасибо!<br>
                Судно успешно отправлено на модерацию!
            </h2>
            <button @click="reloadWindow();" class="modal-button-blue js-modal-close">
                Закрыть окно
            </button>

        </div>
    </div>
</template>

<script setup>
    import {useModalStore} from "~/store/modal";

    import AfInput from "@/components/uikit/AfInput";
    import AfCloseModal from "@/components/uikit/AfCloseModal";

    import {ref} from "vue";
    import api from "@/api/api";

    import useVuelidate from "@vuelidate/core";
    import {required, email, minLength} from "@vuelidate/validators";

    import { useUsersStore } from "~/store/useUserStore";

    import watchScrollModal from "~/utils/watchScrollModal";

    const userStore = useUsersStore();
    const { userInfo } = storeToRefs(userStore)

    const {closeModal, toggleModal} = useModalStore();

    const props = defineProps({
        isOpen: {
            type: Boolean,
        },
    });

    const ifExist = ref(false);
    const ifSend = ref(false);

    const formData = ref({
        vessel_name: '',
        imo: '',
        ship_type: '',
        year_built: '',
        dwt: '',
        kw: '',
        length: '',
        width: '',
        company_email: userInfo.value.info.email
    })

    const rules = {
        vessel_name: {required},
        imo: {required},
    };

    const v$ = useVuelidate(rules, formData);


    const prepareDataForSending = () => {
        const preparedData = {
            ...formData.value,
        };

        return preparedData;
    };

    const send = async () => {

        const dataToSubmit = prepareDataForSending();
        dataToSubmit.imo = dataToSubmit.imo.toString();

        v$.value.$touch();
        if (!v$.value.$error) {
            try {
                await api.post("/navy/register", dataToSubmit).then((data) => {
                    ifExist.value = false
                    ifSend.value = true

                    //window.location.reload();
                });
            } catch (e) {
                ifExist.value = true
            }
        }

    }

    const reloadWindow = async () => {
        if (ifSend.value) {
            window.location.reload();
        }

    }

    watch(() => props.isOpen, watchScrollModal)

</script>