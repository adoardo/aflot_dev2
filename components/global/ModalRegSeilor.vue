<template>
    <div
            class="menu-reg menu-none menu-reg-sailor cabinet"
            id="reg-sailor"
            :class="{ 'menu-show': isOpen }"
    >
        <AfCloseModal modalName="seilor" />
        <div class="menu-reg-title">Регистрация моряка</div>

        <div class="resume-grid cabinet">
            <AfInput
                    place="Почта"
                    label="Email <text>*</text>"
                    type="email"
                    id="email_input"
                    v-model="formData.email"
                    :showCheckbox="true"
                    v-model:checkboxValue="formData.notification_settings.send_email"
                    :error="v$.email.$error && (v$.email.required.$invalid || v$.email.minLength.$invalid)"
                    :note="noteData.email"
            />
            <AfInput
                    place="Телефон"
                    label="Номер телефона <text>*</text>"
                    type="tel"
                    id="phone_input"
                    v-model="formData.phone_number"
                    :showCheckbox="true"
                    v-model:checkboxValue="formData.notification_settings.send_sms"
                    :error="v$.phone_number.$error && (v$.phone_number.required.$invalid || v$.phone_number.minLength.$invalid)"
                    :note="noteData.phone"
            />
            <AfInput
                    place="Ник в telegram"
                    label="Ник в telegram"
                    type="email"
                    id="telegram_input"
                    v-model="formData.telegram"
                    :showCheckbox="true"
                    v-model:checkboxValue="formData.notification_settings.send_telegram"
                    :error="v$.telegram.$error && v$.telegram.required.$invalid"
                    :note="noteData.telegram"
            />
            <AfInput
                    place="Иванов"
                    label="Фамилия <text>*</text>"
                    id="family_input"
                    v-model="formData.first_name"
                    :error="v$.first_name.$error && (v$.first_name.required.$invalid || v$.first_name.minLength.$invalid)"
            />
            <AfInput
                    place="Иван"
                    label="Имя <text>*</text>"
                    id="name_input"
                    v-model="formData.last_name"
                    :error="v$.last_name.$error && (v$.last_name.required.$invalid || v$.last_name.minLength.$invalid)"
            />
            <AfInput
                    place="Иванович"
                    label="Отчество"
                    id="lastname_input"
                    v-model="formData.patronymic"
                    :error="v$.patronymic.$error && v$.patronymic.required.$invalid"
            />
            <AfInput
                    place="Россия"
                    label="Страна (где находитесь)"
                    id="lastname_input"
                    v-model="formData.country"
                    :error="v$.country.$error && v$.country.required.$invalid"
            />
            <AfInput
                    place=""
                    label="Регион"
                    id="lastname_input"
                    v-model="formData.region"
                    :error="v$.region.$error && v$.region.required.$invalid"
            />
            <AfInput
                    place=""
                    label="Город"
                    id="lastname_input"
                    v-model="formData.city"
                    :error="v$.city.$error && v$.city.required.$invalid"
            />
        </div>
        <AfDropDox v-model="formData.positions" :options-list="getAfJobs" />
        <AfDropDox
                v-model="formData.worked"
                :options-list="getAfShips"
                title="Работал на судах (выбрать типа судов из списка)"
        />
        <div v-if="(isVk === false && isTg === false)" class="reg-sailor-inputs">
            <AfInputPassword
                    v-model="formData.password"
                    title="Укажите пароль"
                    :errormsg="noteData.passno"
                    :error="v$.password.$error && (v$.password.required.$invalid || v$.password.minLength.$invalid)"/>
            <AfInputPassword
                    v-model="formData.confirm_password"
                    title="Подтвердите пароль"
                    :errormsg="noteData.passrep"
                    :error="!v$.password.$error && (formData.password != formData.confirm_password)"/>
        </div>

        <div class="reg-sailor-end">
            <div class="resume-contact__second">
                <AfCheckbox v-model="formData.notification_settings.mailing_notification" />
            </div>

            <AfGroupBtn @register="handleRegistration()" />
        </div>
    </div>
    <div
            :class="['header-overlay', { 'header-overlay__active': isOpen }]"
            @click="closeModal('seilor'); userStore.resetSocialsAuth()"
    ></div>
</template>

<script setup>
    import api from '@/api/api'

    import AfInput from "@/components/uikit/AfInput";
    import AfInputPassword from "@/components/uikit/AfInputPassword";
    import AfCheckbox from "@/components/uikit/AfCheckbox";
    import AfGroupBtn from "@/components/uikit/AfGroupBtn";
    import AfCloseModal from "@/components/uikit/AfCloseModal";
    import AfDropDox from "@/components/uikit/AfDropDox";
    import useVuelidate from "@vuelidate/core";
    import { required, email, minLength } from "@vuelidate/validators";
    import { useModalStore } from "~/store/modal";
    import { useUsersStore } from "~/store/useUserStore";
    import { ref } from "vue";
    import { inject, computed } from "vue";
    import watchScrollModal from "~/utils/watchScrollModal";


    import {useGlobalSettings} from "~/store/useGlobalSettings";
    const globalSettings = useGlobalSettings();
    const {getAfShips, getAfJobs} = storeToRefs(globalSettings)

    const userStore = useUsersStore();
    const { closeModal, toggleModal, openModal, openModalCommon } = useModalStore();

    const { isTg, isVk, authError } = storeToRefs(userStore)
    watch(authError, () => {

    });
    watch(isTg, () => {
        console.log('isTg changed', isTg)
        if (isVk || isTg) {
            rules.password = {};
            rules.confirm_password = {};
        } else {
            rules.password = {
                required,
                minLength: minLength(8)
            };
            rules.confirm_password = {
                required,
                minLength: minLength(8),
                sameAsPassword: {
                    $validator: isSameAsPassword,
                    $message: "Пароли должны совпадать",
                },
            };
        }
    })
    watch(isVk, () => {
        console.log('isVk changed', isVk)
        if (isVk || isTg) {
            rules.password = {};
            rules.confirm_password = {};
        } else {
            rules.password = {
                required,
                minLength: minLength(8)
            };
            rules.confirm_password = {
                required,
                minLength: minLength(8),
                sameAsPassword: {
                    $validator: isSameAsPassword,
                    $message: "Пароли должны совпадать",
                },
            };
        }
    })

    const props = defineProps({
        isOpen: {
            type: Boolean,
        }
    });

    const noteData = ref({
        email: "указанную почту",
        phone: "указанный номер",
        telegram: "в мессенджере",
        passno: "Укажите пароль (мин. длина 8 символов)",
        passrep: "Пароли не совпадают"
    });

    let tmppsw = '';

    const formData = ref({
        email: "",
        password: tmppsw,
        confirm_password: tmppsw,
        phone_number: "",
        first_name: "",
        last_name: "",
        patronymic: "",
        country: "",
        region: "",
        city: "",
        telegram: "",
        positions: [],
        worked: [],
        notification_settings: {
            send_email: true,
            send_sms: true,
            send_telegram: true,
            mailing_notification: true,
        },
        telegram_id: "",
        vk_id: "",
        is_vk: false,
        is_tg: false,
    });

    const isSameAsPassword = (value) => {
        return value === formData.value.password;
    };
    const rules = {
        email: { required, email },
        password: {
            required,
            minLength: minLength(8)
        },
        confirm_password: {
            required,
            minLength: minLength(8),
            sameAsPassword: {
                $validator: isSameAsPassword,
                $message: "Пароли должны совпадать",
            },
        },
        phone_number: { required },
        first_name: { required },
        last_name: { required },
        patronymic: {},
        country: {},
        region: {},
        city: {},
        telegram: {},
    };
    if (isVk || isTg) {
        rules.password = {};
        rules.confirm_password = {};
    }
    console.log('rules', rules);

    const v$ = useVuelidate(rules, formData);
    const prepareDataForSending = () => {
        const preparedData = {
            ...formData.value,
            positions: formData.value.positions,
            worked: formData.value.worked,
        };

        return preparedData;
    };


    const handleRegistration = () => {

        userStore.setAuthRole('seilor');

        const dataToSubmit = prepareDataForSending();

        v$.value.$touch();
        if (!v$.value.$error) {
            //alert('Vk: '+isVk.value+' Tg: '+isTg.value);
            if (isVk.value || isTg.value) {
                userStore.getSocData().then((data) => {
                    //userRefs.socialsAuth
                    dataToSubmit.telegram_id = data.telegram_id.toString();
                    dataToSubmit.vk_id = data.vk_id.toString();
                    dataToSubmit.is_vk = data.is_vk;
                    dataToSubmit.is_tg = data.is_tg;

                    let pwd = 'TsQ7@66a_'+dataToSubmit.telegram_id+dataToSubmit.vk_id;

                    dataToSubmit.password = pwd;
                    dataToSubmit.confirm_password = pwd;
                    dataToSubmit.username = dataToSubmit.email;

                    console.log('dataToSubmit', dataToSubmit);
                    const user = userStore.signIn(dataToSubmit, "user");



                    if (userStore.authError !== false) {
                        openModalCommon(userStore.authError);
                    } else {

                        if (userStore.authError !== false) {
                            openModalCommon(userStore.authError);
                        } else {
                            closeModal("seilor");
                            openModal("modalAuthVerify");
                        }
                    }
                })

            } else {
                console.log('dataToSubmit 2', dataToSubmit);
                const user = userStore.signIn(dataToSubmit, "user");
                dataToSubmit.username = dataToSubmit.email;



                if (userStore.authError !== false) {
                    openModalCommon(userStore.authError);
                } else {
                    userStore.login(dataToSubmit, "user");
                    if (userStore.authError !== false) {
                        openModalCommon(userStore.authError);
                    } else {
                        closeModal("seilor");
                        openModal("modalAuthVerify");
                    }
                }
            }



        } else {
            console.log("Validation errors:", v$.value.$errors);
        }
    };

    watch(() => props.isOpen, watchScrollModal)
</script>

<style lang="scss" scoped></style>
