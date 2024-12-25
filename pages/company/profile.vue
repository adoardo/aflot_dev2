<template>
  <NuxtLayout name="default-hero">
    <div class="main cabinet">
      <div>
        <AfHeaderColor/>
      </div>
      <section id="resume">
        <div class="container">
          <div class="tabs">
            <div class="tab-header">
              <a href="#"
                 class="tab-label clear-tab-label"
                 :class="{ active: activeTab === 'company' }"
                 @click="setActiveTab('company')"
              >
                О компании
              </a>
              <a href="#ships"
                 class="tab-label clear-tab-label"
                 id="clear-tab-label-ships"
                 :class="{ active: activeTab === 'ships' }"
                 @click="setActiveTab('ships')"
              >
                Мои суда
              </a>
              <a href="#"
                 class="tab-label clear-tab-label"
                 :class="{ active: activeTab === 'settings' }"
                 @click="setActiveTab('settings')"
              >
                Другие настройки
              </a>
            </div>
          </div>
        </div>

        <div class="tab-body" v-show="activeTab === 'company'">
          <div class="container">
            <h1 class="title-none">О компании</h1>

            <div class="resume-main resume-main-margin">
              <button style="display: none;" @click="edTest()">ATATATATA</button>

              <div v-if="companyProfile.avatar" class="company-avatar">
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  class="hidden-input"
                  @change="upload($event, 'avatar')"
                />
                <img class="avatar" style="position: absolute" :src="createObjectURL(companyProfile.avatar)" alt="Аватар">
                <span >{{ companyProfile.last_name.substring(0, 1).toUpperCase() }} {{ companyProfile.first_name.substring(0, 1).toUpperCase() }}</span>
            </div>

            <div v-else class="resume-avatar">
              <div class="bordered bordered-ct-logo">
                <img class="avatar-company" id="imgInpPreview" :src="companyProfile.avatar" alt="avatar"/>
                <span>{{ companyProfile.first_name }}<br>{{ companyProfile.last_name }}</span>
                <text>&#9875;</text>
              </div>
            </div>



              <div style="display: none;" class="atata">
                <div class="upload-form">
                  <div class="form">
                    <h1>File Upload</h1>

                    <input
                        type="file"
                        id="fileInput"
                        name="fileInput"
                    />
                    <button @click="uploadAvatarNew()" class="btnUpload" type="submit">Upload</button>

                  </div>
                  <div class="output">
                    <div id="imageContainer">
                      <!-- Uploaded image will be displayed here -->
                    </div>
                  </div>
                </div>
              </div>

              <div style="display: none;" class="avatar-wrapper">
                <h1 class="container">Image Upload Vue.js</h1>
                <div>
                  <div class="file-container">
                    <div>
                      <form>
                        <input
                            type="file"
                            id="media"
                            accept="image/*"
                            multiple
                            @change="(event) => handelFileUpload(event)"
                        />
                        <div>
                          <section>

                            <p>Upload Your answer here.</p>
                            <p>Minimum file size 50MB</p>
                          </section>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div>
                    <div class="images">
                      <div
                          v-for="(src, index) in imageSrc"
                          :key="index"
                          class="images-lists"
                      >
                        <div class="image-container">
                          <img :src="src" id="output" class="image-style"/>
                        </div>
                        <div class="cross-icon" v-if="imageSrc">
                        </div>

                        <p style="width: 150px" class="line-clamp-1 text-center">
                          {{ selectedFiles[index].name }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div @click="uploadAvatar()">
                  <span>ЗАГРУЗИТЬ</span>
                </div>
              </div>


              <div>
                <h2 style="margin: 0 0 20px">Основные данные:</h2>
                <div class="resume-grid col2">
                  <AfInput
                      place=""
                      label="Название компании"
                      v-model="companyProfile.company_name"
                  />
                  <div class="input">
                    <label>ИНН компании</label>
                    <span class="company_inn">{{ companyProfile.company_inn }}</span>
                  </div>
                  <AfInput
                      place=""
                      label="Адрес компании"
                      v-model="companyProfile.company_address"
                  />


                  <div class="resume-content-all">
                    <h2 style="margin: 0">Контактная информация вакансий:</h2>
                    <p>
                      Информация, которая будет автоматически заполняться при создании
                      вакансии. Принявшие предложение о вакансии моряки, будут видеть
                      данную информацию.
                    </p>
                  </div>

                  <AfInput
                      place=""
                      label="ФИО контактного лица"
                      v-model="companyProfile.f_i_o"
                  />
                  <AfInput
                      place=""
                      label="E-mail"
                      v-model="companyProfile.email"
                  />
                  <AfInput
                      place=""
                      label="Телефон №1"
                      v-model="companyProfile.phone1"
                  />
                  <AfInput
                      place=""
                      label="Телефон №2"
                      v-model="companyProfile.phone2"
                  />

                </div>
              </div>
            </div>
          </div>

          <div class="resume-buttons">
            <button @click="saveProfile()" class="primary">Сохранить</button>
            <button @click="resetProfile()" class="secondary">Сбросить</button>
          </div>
        </div>
        <div class="tab-body" v-show="activeTab === 'ships'">
          <div class="container">
            <div class="suda">
              <div class="suda-top">
                <div class="suda-top__item js-open-modal" @click="toggleModal('existingship')">
                  <div class="suda-top__plus">+</div>
                  <!-- /.suda-top__plus -->
                  <div class="suda-top__content">
                    <div class="suda-top__title">
                      Добавить судно из «Морского флота»
                    </div>
                    <!-- /.suda-top__title -->
                    <div class="suda-top__text">
                      Выберите судно из нашей базы данных
                    </div>
                    <!-- /.suda-top__text -->
                  </div>
                  <!-- /.suda-top__content -->
                </div>
                <!-- /.suda-top__item -->
                <div class="suda-top__item js-open-modal" @click="toggleModal('newship')">
                  <div class="suda-top__plus">+</div>
                  <!-- /.suda-top__plus -->
                  <div class="suda-top__content">
                    <div class="suda-top__title">
                      Добавить судно в ручную
                    </div>
                    <!-- /.suda-top__title -->
                    <div class="suda-top__text">
                      Заполните данные по судну, которого нет в нашей базе
                    </div>
                    <!-- /.suda-top__text -->
                  </div>
                  <!-- /.suda-top__content -->
                </div>
                <!-- /.suda-top__item -->
              </div>
              <!-- /.suda-top -->


              <div v-show="registeredShipS" class="suda-part">
                <h3 class="suda-title">
                  Мои суда:
                </h3>
                <!-- /.suda-title -->

                <div class="suda-table-block">
                  <table class="suda-table">
                    <tbody>
                    <tr v-for="(item, i) in registeredShip" :key="'reg-ship-' + i" class="suda-tr">
                      <td class="suda-td">
                        <div class="suda-td__number">{{ i + 1 }}</div>
                        <!-- /.suda-td__number -->
                      </td>
                      <!-- /.suda-td -->
                      <td class="suda-td">
                        <div class="suda-td__item">
                          <div class="suda-td__subtitle">Судно:</div>
                          <!-- /.suda-td__subtitle -->
                          <div class="suda-td__text">
                            {{ (item.vessel_name) ? item.vessel_name : '-' }}
                          </div>
                          <!-- /.suda-td__text -->
                        </div>
                        <!-- /.suda-td__item -->
                      </td>
                      <!-- /.suda-td -->

                      <td class="suda-td">
                        <div class="suda-td__item">
                          <div class="suda-td__subtitle">IMO</div>
                          <!-- /.suda-td__subtitle -->
                          <div class="suda-td__text">
                            {{ (item.imo) ? item.imo : '-' }}
                          </div>
                          <!-- /.suda-td__text -->
                        </div>
                        <!-- /.suda-td__item -->
                      </td>
                      <!-- /.suda-td -->

                      <td class="suda-td">
                        <div class="suda-td__item">
                          <div class="suda-td__subtitle">Тип судна:</div>
                          <!-- /.suda-td__subtitle -->
                          <div class="suda-td__text">
                            {{ (item.ship_type) ? item.ship_type : '-' }}
                          </div>
                          <!-- /.suda-td__text -->
                        </div>
                        <!-- /.suda-td__item -->
                      </td>
                      <!-- /.suda-td -->


                      <td class="suda-td">
                        <div class="suda-td__item">
                          <div class="suda-td__subtitle">Год постройки:</div>
                          <!-- /.suda-td__subtitle -->
                          <div class="suda-td__text">
                            {{ (item.year_built) ? item.year_built : '-' }}
                          </div>
                          <!-- /.suda-td__text -->
                        </div>
                        <!-- /.suda-td__item -->
                      </td>
                      <!-- /.suda-td -->
                      <td class="suda-td">
                        <div @click="toggleModal('shipinfo'); setactiveship(item);"
                             class="vacancy__button red js-open-modal"><img
                            src="assets/img/dop-page/red-info.svg" alt="">
                          Подробнее
                        </div>
                      </td>
                      <!-- /.suda-td -->

                      <td class="suda-td">
                        <div @click="removeship(item)" class="vacancy__button red">
                          <img src="assets/img/suda/delete.svg" alt="">
                          Удалить
                        </div>
                      </td>
                      <!-- /.suda-td -->
                    </tr>

                    </tbody>
                  </table>
                  <!-- /.suda-table -->

                </div>
                <!-- /.suda-table-block -->
              </div>
              <!-- /.suda-part -->


              <div v-show="onModerateShipS" class="suda-part">
                <h3 class="suda-title">
                  Суда на модерации:
                </h3>
                <!-- /.suda-title -->

                <div class="suda-item">
                  <img src="assets/img/suda/icon.png" alt="image" class="suda-item__img">
                  <div class="suda-item__text">
                    Судна, которых нет в нашей базе, проходят модерацию в течении 24 часов. Наши
                    специалисты проверят информацию,
                    а при неточностях, проведут изменения. В случае возниконвения вопросов
                    пожалуйста <a
                      class="suda-item__link">воспользуйтесь этой формой.</a>
                  </div>
                  <!-- /.suda-item__text -->
                </div>
                <!-- /.suda-item -->
                <div class="suda-table-block">
                  <table class="suda-table">
                    <tbody>
                    <tr v-for="(item, i) in onModerateShip" :key="'mod-ship-' + i" class="suda-tr">
                      <td class="suda-td">
                        <div class="suda-td__number">{{ i + 1 }}</div>
                        <!-- /.suda-td__number -->
                      </td>
                      <!-- /.suda-td -->
                      <td class="suda-td">
                        <div class="suda-td__item">
                          <div class="suda-td__subtitle">Судно:</div>
                          <!-- /.suda-td__subtitle -->
                          <div class="suda-td__text">
                            {{ (item.vessel_name) ? item.vessel_name : '-' }}
                          </div>
                          <!-- /.suda-td__text -->
                        </div>
                        <!-- /.suda-td__item -->
                      </td>
                      <!-- /.suda-td -->

                      <td class="suda-td">
                        <div class="suda-td__item">
                          <div class="suda-td__subtitle">IMO</div>
                          <!-- /.suda-td__subtitle -->
                          <div class="suda-td__text">
                            {{ (item.imo) ? item.imo : '-' }}
                          </div>
                          <!-- /.suda-td__text -->
                        </div>
                        <!-- /.suda-td__item -->
                      </td>
                      <!-- /.suda-td -->

                      <td class="suda-td">
                        <div class="suda-td__item">
                          <div class="suda-td__subtitle">Тип судна:</div>
                          <!-- /.suda-td__subtitle -->
                          <div class="suda-td__text">
                            {{ (item.ship_type) ? item.ship_type : '-' }}
                          </div>
                          <!-- /.suda-td__text -->
                        </div>
                        <!-- /.suda-td__item -->
                      </td>
                      <!-- /.suda-td -->


                      <td class="suda-td">
                        <div class="suda-td__item">
                          <div class="suda-td__subtitle">Год постройки:</div>
                          <!-- /.suda-td__subtitle -->
                          <div class="suda-td__text">
                            {{ (item.year_built) ? item.year_built : '-' }}
                          </div>
                          <!-- /.suda-td__text -->
                        </div>
                        <!-- /.suda-td__item -->
                      </td>
                      <!-- /.suda-td -->
                      <td class="suda-td">
                        <div @click="toggleModal('shipinfo'); setactiveship(item);"
                             class="vacancy__button red js-open-modal" data-modal="5"><img
                            src="assets/img/dop-page/red-info.svg" alt="">
                          Подробнее
                        </div>
                      </td>
                      <!-- /.suda-td -->

                      <td class="suda-td">
                        <div @click="removemodship(item)" class="vacancy__button red">
                          <img src="assets/img/suda/delete.svg" alt="">
                          Отменить<br>
                          запрос
                        </div>
                      </td>
                      <!-- /.suda-td -->
                    </tr>
                    <!-- /.suda-tr -->

                    </tbody>
                  </table>
                  <!-- /.suda-table -->

                </div>
                <!-- /.suda-table-block -->
              </div>
              <!-- /.suda-part -->
            </div>
          </div>
          <div class="resume-buttons">
            <button @click="saveProfile()" class="primary">Сохранить</button>
            <button @click="resetProfile()" class="secondary">Сбросить</button>
          </div>
        </div>
        <div class="tab-body" v-show="activeTab === 'settings'">
          <div class="container">
            <h1>Контактные данные аккаунта и уведомления</h1>

            <div class="resume-grid col2 resume-contact-setting">
              <div class="resume-contact">
                <div class="resume-contact__icon">
                  <img src="assets/img/resume/icon-phone.png" alt="phone"/>
                </div>
                <div class="resume-contact__content completed">
                  {{userInfo.info.phone_number}}
                  <img src="assets/img/resume/check.svg" alt="done"/>
                </div>
              </div>
              <div class="resume-contact__second">
                <AfCheckbox
                    v-model="companyProfile.notification_settings.send_sms"
                    :linkText="'уведомления на телефон'"
                    :descText="'Присылайте мне '"
                />
              </div>

              <div class="resume-contact">
                <div class="resume-contact__icon">
                  <img src="assets/img/resume/icon-mail.png" alt="phone"/>
                </div>
                <div class="resume-contact__content pending">
                  {{userInfo.info.email}}
                  <a @click="toggleModal('approveemail')">Подтвердить</a>
                </div>
              </div>
              <div class="resume-contact__second">
                <AfCheckbox
                    v-model="companyProfile.notification_settings.send_email"
                    :linkText="'уведомления на почту'"
                    :descText="'Присылайте мне '"
                />
              </div>

              <div class="resume-contact">
                <div class="resume-contact__icon">
                  <img src="assets/img/resume/icon-tg.png" alt="phone"/>
                </div>
                <div v-if="!isTg" @click="toggleModal('approvetg')" style="cursor: pointer;" class="resume-contact__content empty">Подключить Telegram</div>
                <div v-if="isTg" class="resume-contact__content empty tg-approved" style="cursor: default;">Telegram подключен<img src="assets/img/resume/check.svg" alt="done"/></div>
              </div>
              <div class="resume-contact__second">
                <AfCheckbox
                    v-model="companyProfile.notification_settings.send_telegram"
                    :linkText="'уведомления в Telegram'"
                    :descText="'Присылайте мне '"
                />
              </div>
            </div>

            <h2 class="with-subtitle">Рассылка</h2>

            <label class="custom-checkbox">
              <input type="checkbox" v-model="companyProfile.notification_settings.mailing_notification"/>
              <span class="checkmark"></span>
              Хочу получать <a href="#">рассылку о новых моряках</a>, по должностям,
              соответствующих актуальным (действующим)<br/>
              вакансиям компании
            </label>

            <h2>Безопасность</h2>

            <div class="resume-password">
              <div class="resume-password__input">
                <div class="resume-password__icon">
                  <img src="assets/img/resume/icon-pass.png" alt="pass"/>
                </div>
                <input type="password"/>
              </div>
              <button @click="toggleModal('changepassword')">Сменить пароль <strong>⭢</strong></button>
            </div>
          </div>

          <div class="resume-buttons">
            <button @click="saveProfile()" class="primary">Сохранить</button>
            <button @click="resetProfile()" class="secondary">Сбросить</button>
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup>
import {ref} from "vue";
import api from "@/api/api";

import AfInput from "@/components/uikit/AfInput";
import AfCheckbox from "@/components/uikit/AfCheckbox2";

import {useUsersStore} from "~/store/useUserStore";

const userStore = useUsersStore();
const {userInfo, isTg} = storeToRefs(userStore)

import {useGlobalSettings} from "~/store/useGlobalSettings";

const globalSettings = useGlobalSettings();
const {getCurrentShip} = storeToRefs(globalSettings)

import {useModalStore} from "~/store/modal";
const {closeModal, toggleModal} = useModalStore();

const profile = ref(null);

const activeTab = ref("company");

function setActiveTab(tab) {
  activeTab.value = tab;
}

const url = useRequestURL()
console.log('full url:', url.href);
if (url.href.includes('ships')) {
  setActiveTab("ships");
  activeTab.value = "ships";
}


async function getProfile() {
  try {
    const {data} = await api.get(`/profile`);
    profile.value = data;
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  document.body.classList.add('bg-white');
  if (url.href.includes('ships')) {
    setActiveTab("ships");
    activeTab.value = "ships";
    $('.clear-tab-label').removeClass('active')
    $('#clear-tab-label-ships').addClass('active')
  }

  getProfile();

});

const getBase64 = async (file) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    console.log(reader.result);
    return reader.result;
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
    return null;
  };


}
const imageClo = ref();
const uploadAvatarNewCLO = async (data64) => {
  const formData = new FormData();
  formData.append('file', document.querySelector('#fileInput').files[0]);
  console.log(formData)

  let response = await fetch('https://апи.афлот.рф/api/v1/upload-cloud-file', {
    method: "POST",
    body: formData
  })
  console.log('formData: ', formData);
  console.log('response: ', response);
  return 0;

  // try {
  //   const {data} = await api.post('/upload-cloud-file?file=' + data64);
  //   console.log('CLO RESULT: ', data)
  // } catch (error) {
  //   console.log(error);
  // }


  // try {
  //   const {data} = await api.post('/upload-cloud-file');
  //   console.log('CLO RESULT: ', data)
  // } catch (error) {
  //   console.log(error);
  // }

  // let formData = new FormData();
  // formData.append('file', document.querySelector('#fileInput').files[0]);
  //
  // fetch('https://апи.афлот.рф/api/v1/upload-cloud-file', {
  //   method: 'POST',
  //   body: formData,
  // }).then(response => {
  //   //response.json()
  //   console.log(response.json())
  // });

  // try {
  //   const {data} = await api.post('/uploadfile?file='+);
  //   console.log('CLO RESULT: ', data)
  // } catch (error) {
  //   console.log(error);
  // }
}
const uploadAvatarNew = async () => {
  let file = document.querySelector('#fileInput').files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    console.log(reader.result);
    uploadAvatarNewCLO(reader.result);
  };

}

const registeredShip = ref(null);
const onModerateShip = ref(null);
const registeredShipS = ref(false);
const onModerateShipS = ref(false);
const currentShip = ref({
  dwt: "-",
  imo: "-",
  kw: "-",
  length: "-",
  ship_type: "-",
  vessel_name: "-",
  width: "-",
  year_built: "-",
  _id: ""
});
const { $uploadFile } = useNuxtApp()
const companyProfile = ref({
  company_name: "",
  company_address: "",
  avatar:null,
  f_i_o: "",
  email: "",
  phone1: "",
  phone2: "",
  notification_settings: {
    send_email: true,
    send_sms: true,
    send_telegram: true,
    mailing_notification: true,
  }
});

const upload = (e) => {
  const file = e.target.files[0];
  companyProfile.value.avatar = file;
}

const createObjectURL = (file) => {
  return file && file instanceof File ? URL.createObjectURL(file) : file
}

const init = async () => {
  try {
    await api.get("/navy/registered?email=" + userInfo.value.info.email).then((data) => {
      let regShips = [];
      let modShips = [];
      for (let i = 0; i < data.data.length; i++) {
        if (data.data[i].is_active) {
          regShips.push(data.data[i])
          registeredShipS.value = true
        } else {
          modShips.push(data.data[i])
          onModerateShipS.value = true
        }
      }
      registeredShip.value = regShips;
      onModerateShip.value = modShips;
    });
  } catch (e) {

  }

  try {
    await api.get("/company/profile").then((data) => {
      companyProfile.value = data.data;
    });
  } catch (e) {

  }
}
init();

const setactiveship = async (item) => {
  globalSettings.setCurrentShip(item);
}

const removeship = async (item) => {
  try {
    await api.put("/navy/remove_existing?id=" + item._id + '&email=' + userInfo.value.info.email).then((data) => {
      window.location.reload();
    });
  } catch (e) {

  }
}
const removemodship = async (item) => {
  try {
    await api.put("/navy/remove_moderate?id=" + item._id + '&email=' + userInfo.value.info.email).then((data) => {
      window.location.reload();
    });
  } catch (e) {

  }
}

const prepareDataForSending = (formData) => {
  const preparedData = {
    ...formData.value,
    positions: formData.value.positions,
    worked: formData.value.worked,
  };

  return preparedData;
};

const saveProfile = async () => {
  const dataToSubmit = prepareDataForSending(companyProfile);
  if (companyProfile.value.avatar) {
    const fileUrl = await $uploadFile(companyProfile.value.avatar).then((res) => res)
    dataToSubmit.avatar = fileUrl
    companyProfile.value.avatar = fileUrl
  }

  try {
    await api.put("/company/profile", dataToSubmit).then((data) => {
      window.location.reload();
    });
  } catch (e) {
    console.log('company profile save error: ', e)
  }
}
const resetProfile = async () => {
  window.location.reload();
}


const form = ref({
  media: {},
});
const imageSrc = ref([]);

const selectedFiles = ref([]);
const handelFileUpload = (e) => {
  var files = e.target.files || e.dataTransfer.files;
  if (!files.length) return;

  for (let i = 0; i < files.length; i++) {
    selectedFiles.value.push(files[i]);
    const src = URL.createObjectURL(files[i]);
    imageSrc.value.push(src);
  }
  console.log(selectedFiles.value, "seldjhfdh fikes");

  form.value.media = e.target.files[0];
  console.log(form.value.media, "file upload");

  console.log("files already uploaded", imageSrc.value);
};

const removeItem = (index) => {
  imageSrc.value.splice(index, 1);
};

const uploadAvatar = async () => {
  console.log(imageSrc.value[0])


  await fetch('https://xn--b1afk4ade.xn--80awjqh.xn--p1ai/av/index.php', {method: "POST", body: imageSrc.value[0]})
      .then(response => {
        if (response.ok) return response;
        else throw Error(`Server returned ${response.status}: ${response.statusText}`)
      })
      .then(response => console.log(response.text()))
      .catch(err => {
        alert(err);
      });
}

const edTest = async () => {
  ///upload-cloud-file
  try {
    const {data} = await api.post('/upload-cloud-file');
    console.log('CLO RESULT: ', data)
  } catch (error) {
    console.log(error);
  }
}

</script>

<style lang="scss" scoped>
.tab-label.tactive {
  border-bottom: 4px solid #3b45a9;
  color: #3b45a9;
}

.tab-body {
  display: block;
}

.company_inn {
  display: block;
  background: none;
  border: none;
  border-bottom: solid 2px #e6e6ed;
  padding: 10px 0 16px 0;
  font-family: "Myriad Pro";
  font-size: 20px;
  color: #c3c3c3;
  width: 100%;
  transition: 1s;
  cursor: default;
  min-height: 23px;
}

.avatar-wrapper {

  .container {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
  }

  .file-container {
    position: relative;
    cursor: pointer;
  }

  form {
    width: 500px !important;
    position: absolute;
    top: 55%;
    left: 0;
    margin-top: -100px;
    width: 100%;
    height: 90px;
    border-radius: 5px;
    border: 1.5px dashed #a0a0a0;
    cursor: pointer;
  }

  form div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  form input {
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
  }

  form button {
    margin: 0;
    color: #fff;
    background: #16a085;
    border: none;
    width: 508px;
    height: 35px;
    margin-top: -20px;
    margin-left: -4px;
    border-radius: 4px;
    border-bottom: 4px solid #117a60;
    transition: all 0.2s ease;
    outline: none;
  }

  form button:hover {
    background: #149174;
    color: #0c5645;
  }

  form button:active {
    border: 0;
  }

  .images {
    position: relative;
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .images-lists {
    position: relative;
    margin-left: 10px;
    margin-right: 10px;
  }

  .image-container {
    padding: 4px;
    border: 0.5px solid #a0a0a0;
    border-radius: 10px;
  }

  .image-style {
    height: 150px;
    width: 150px;
    object-fit: cover;
  }

  .cross-icon {
    position: absolute;
    top: 0%;
    right: 0;
    cursor: pointer;
  }
}

.resume-avatar .bordered.bordered-ct-logo {
  background: #3b45a9;
  padding: 15px;
  width: 170px;
  height: 170px;
  position: relative;
}

.hidden-input {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    z-index: 1;
  }
  
  .resume-avatar {
    position: relative;
  }
  
  .upload {
    position: relative;
  } 

  .avatar {
    height: 250px;
    width: 250px;
    border-radius: 45%;
  }

.resume-avatar {
  .bordered.bordered-ct-logo {
    img {
      position: absolute;
      top: -15px;
      display: flex;
      width: 34%;
      left: calc(50% - 34px);
      height: 76px;
      opacity: .8;
    }

    span {
      text-transform: uppercase;
      display: flex;
      color: #fff;
      text-align: center;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-size: 22px;
      border-radius: 50%;
      overflow: hidden;
    }

    text {
      position: absolute;
      bottom: 5px;
      left: calc(50% - 25px);
      font-size: 34px;
      filter: grayscale(1) brightness(2);
      opacity: .6;
    }
  }
}


.atata {
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #ccc;
  }

  .upload-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .form {
    width: 30%;
    margin: 50px auto;
    background-color: #fff;
    border-radius: 15px;
    padding: 20px;
  }

  .form-controll {
    padding-top: 10px;
  }

  .btnUpload {
    padding: 15px;
    border-radius: 10px;
    border: 0;
    cursor: pointer;
    background-color: green;
    color: #fff;
  }

  .output {
    width: 30%;
  }

  .image {
    width: 100%;
    height: 400px;
  }
}
.resume-contact__content.tg-approved {
  background-color: #3b45a9;
  color: #fff;
}
</style>