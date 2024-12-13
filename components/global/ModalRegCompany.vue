<template>
  <div :class="{ 'menu-show': isOpen }" class="menu-reg menu-none menu-reg-sailor cabinet" id="reg-about">
    <AfCloseModal modalName="company" />

    <div class="menu-reg-title">Регистрация компании</div>
    <!-- /.menu-reg-title -->

    <div class="reg-about-top">
      <a href="#" class="reg-about-link">
        <img src="assets/img/menu/logo-about.png" alt="image"></a>
      <!-- /.reg-about-link -->

      <div class="reg-about-inputs">
        <div class="reg-about-intop">
          <AfInput
                  place="Название компании"
                  label="Название компании <text>*</text>"
                  id="company_name"
                  v-model="formData.company_name"
                  :error="v$.company_name.$error && (v$.company_name.required.$invalid || v$.company_name.minLength.$invalid)"
          />
          <AfInput
                  place="ИНН"
                  label="ИНН компании <text>*</text>"
                  id="company_inn"
                  type="number"
                  v-model="formData.company_inn"
                  :error="v$.company_inn.$error && (v$.company_inn.required.$invalid || v$.company_inn.minLength.$invalid)"
          />
          <AfInput
                  place="Россия, Владивосток"
                  label="Адрес компании <text>*</text>"
                  id="company_address"
                  v-model="formData.company_address"
                  :error="v$.company_address.$error && (v$.company_address.required.$invalid || v$.company_address.minLength.$invalid)"
          />




        </div>
        <!-- /.reg-about-intop -->

      </div>
      <!-- /.reg-about-inputs -->
    </div>
    <!-- /.reg-about-top -->

    <div class="reg-about-subtitle">
      Контактная информация:
    </div>
    <!-- /.reg-about-subtitle -->

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
              :error="v$.phone_number.$error && (v$.phone_number.required.$invalid || v$.phone.minLength.$invalid)"
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




    </div>






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
    @click="closeModal('company')"
  ></div>
</template>

<script setup>
import AfInput from "@/components/uikit/AfInput";
import AfInputPassword from "@/components/uikit/AfInputPassword";
import AfCheckbox from "@/components/uikit/AfCheckbox";
import AfInputUpload from "@/components/uikit/AfInputUpload";
import AfGroupBtn from "@/components/uikit/AfGroupBtn";
import AfCloseModal from "@/components/uikit/AfCloseModal";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { useModalStore } from "~/store/modal";
import watchScrollModal from "~/utils/watchScrollModal";
const { closeModal, toggleModal, openModal, openModalCommon } = useModalStore();
const props = defineProps({
  isOpen: {
    type: Boolean,
  },
});

import { useUsersStore } from "~/store/useUserStore";
const userStore = useUsersStore();
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

watch(() => props.isOpen, watchScrollModal)

const formData = ref({
  email: "",
  password: "",
  confirm_password: "",
  first_name: "",
  last_name: "",
  patronymic: "",
  f_i_o: "",
  phone_number: "",
  phone1: "",
  phone2: "",
  company_name: "",
  company_inn: "",
  company_address: "",
  telegram: "",
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

const noteData = ref({
  email: "указанную почту",
  phone: "указанный номер",
  telegram: "в мессенджере",
  passno: "Укажите пароль (мин. длина 8 символов)",
  passrep: "Пароли не совпадают"
});

const isSameAsPassword = (value) => {
  return value === formData.value.password;
};

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(8) },
  company_name: { required, minLength: minLength(4) },
  company_inn: { required, minLength: minLength(8) },
  company_address: { required, minLength: minLength(8) },
  confirm_password: {
    required,
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

const v$ = useVuelidate(rules, formData);
const prepareDataForSending = () => {
  const preparedData = {
    ...formData.value,
  };

  return preparedData;
};

const handleRegistration = () => {

  userStore.setAuthRole('company');

  const dataToSubmit = prepareDataForSending();
  dataToSubmit.f_i_o = dataToSubmit.last_name + ' ' + dataToSubmit.first_name + ' ' + dataToSubmit.patronymic;
  dataToSubmit.company_inn = dataToSubmit.company_inn.toString();
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
          userStore.login(dataToSubmit, "company");
          if (userStore.authError !== false) {
            openModalCommon(userStore.authError);
          } else {
            closeModal("company");
            openModal("modalAuthVerify");
          }
        }
      })

    } else {
      console.log('dataToSubmit 2', dataToSubmit);
      const user = userStore.signIn(dataToSubmit, "company");
      dataToSubmit.username = dataToSubmit.email;



      if (userStore.authError !== false) {
        openModalCommon(userStore.authError);
      } else {
        userStore.login(dataToSubmit, "user");
        if (userStore.authError !== false) {
          openModalCommon(userStore.authError);
        } else {
          closeModal("company");
          openModal("modalAuthVerify");
        }
      }
    }



  } else {
    console.log("Validation errors:", v$.value.$errors);
  }
};
</script>
