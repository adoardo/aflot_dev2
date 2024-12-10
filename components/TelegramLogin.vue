<template>
    <div class="tg-login-button-group">
        <div ref="telegram" id="tgRegButtonReal"></div>

    </div>

</template>
<script lang="ts" setup>

    import { ref, onMounted } from 'vue';

    import { useModalStore } from "@/store/modal";
    import { useUsersStore } from "@/store/useUserStore";

    import api from '@/api/api'

    const { closeModal, toggleModal, openModalCommon } = useModalStore();
    const userStore = useUsersStore();

    const handleTGuser = async (id) => {
        api.get("/tguser?tg_id="+id).then((data) => {
            console.log(data.data.data);
            if (data.data.data == 0) {
                toggleModal('msocwhois')
            } else {
                let dataToSubmit = {
                    username: id,
                    password: 'TsQ7@66a_'+id
                }
                userStore.login(dataToSubmit, "user");

                if (userStore.authError !== false) {
                    openModalCommon(userStore.authError);
                } else {
                    closeModal("lk");
                }
            }

            return data
        });
    }
    const props = defineProps({
        mode: {
            type: String,
            required: true,
            validator(value: string) {
                return ['callback', 'redirect'].includes(value);
            },
            default: "callback"
        },
        telegramLogin: {
            type: String,
            required: true,
            validator(value: string) {
                return value.endsWith('bot') || value.endsWith('Bot');
            },
            default: "aflot_new_bot"
        },
        redirectUrl: {
            type: String,
            default: '',
        },
        requestAccess: {
            type: String,
            default: 'read',
            validator(value: string) {
                return ['read', 'write'].includes(value);
            },
        },
        size: {
            type: String,
            default: 'large',
            validator(value: string) {
                return ['small', 'medium', 'large'].includes(value);
            },
        },
        userpic: {
            type: String,
            default: 'true',
        },
        radius: {
            type: String,
        },
    });
    const emit = defineEmits(['callback']);
    const onTelegramAuth = (user) => {
        console.log('user-----', user);
        emit('callback', user);
        userStore.setFormTG(user.id);
        handleTGuser(user.id);
    };
    const telegram = ref();
    onMounted(() => {
        // create script with given params
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://telegram.org/js/telegram-widget.js?3';

        script.setAttribute('data-size', props.size);
        script.setAttribute('data-userpic', props.userpic);
        script.setAttribute('data-telegram-login', props.telegramLogin);
        script.setAttribute('data-request-access', props.requestAccess);
        if (props.radius) {
            script.setAttribute('data-radius', props.radius);
        }

        if (props.mode === 'callback') {
            window.onTelegramAuth = onTelegramAuth;
            script.setAttribute('data-onauth', 'window.onTelegramAuth(user)');
        } else {
            script.setAttribute('data-auth-url', props.redirectUrl);
        }
        telegram.value.appendChild(script);
    });

    const tgRegButtonRealclick = () => {
        $('#tgRegButtonReal').click();
    };
</script>

<style lang="scss" scoped>
    .tg-login-button-group {
        position: absolute;
        width: 100%;
        bottom: 0px;
        left: 0px;
        z-index: 1;
        opacity: 0;
    }
</style>