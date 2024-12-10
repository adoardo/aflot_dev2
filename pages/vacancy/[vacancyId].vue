<template>
  <NuxtLayout name="default-hero">
    <div class="section-hero section-hero-post section-top-vabout">
      <AfCustomHeader/>
      <div class="vabout-top">
        <div class="container">
          <div class="vabout-top-block">
            <a href="#" class="vabout-cursor">
              ←
            </a>
            <div class="vabout-pag">
              <a href="/" class="vabout-pag-link">Главная</a>
              <a href="/vacancies" class="vabout-pag-link">Морские вакансии</a>
              <a class="vabout-pag-link">{{vacancy.position}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section-vabout">
      <div class="container">
        <div class="post">
          <div class="vabout-top-content">
            <h1 class="vabout-title">
              {{vacancy.position}}
            </h1>

            <div class="news-info">
              <div class="news-date vabout-date">{{vacancyDate}}</div>
              <div v-if="vacancy.view_count > 0" class="news-view">
                <img src="assets/img/news/icon.svg" alt="image">
                <span>{{vacancy.view_count}}</span>
              </div>
            </div>
          </div>

          <div class="vabout-block">
            <div class="vabout-content">
              <div class="vabout-part">
                <h2 class="vabout-h2">Основные данные:</h2>
                <div class="vabout-info">
                  <div class="vabout-item">
                    <div class="vabout-subtitle">Зарплата:</div>
                    <strong v-if="vacancy.salary_from && vacancy.salary_to" class="vabout-subtext">{{ vacancy.salary_from }} - {{ vacancy.salary_to }} ₽</strong>
                    <strong v-if="vacancy.salary_from && !vacancy.salary_to" class="vabout-subtext">от {{ vacancy.salary_from }} ₽</strong>
                    <strong v-if="!vacancy.salary_from && vacancy.salary_to" class="vabout-subtext">до {{ vacancy.salary_to }} ₽</strong>
                    <strong v-if="!vacancy.salary_from && !vacancy.salary_to" class="vabout-subtext">не указана</strong>
                  </div>
                  <div class="vabout-item">
                    <div class="vabout-subtitle">Длительность контракта:</div>
                    <div class="vabout-subtext">{{ vacancy.contract_duration }}</div>
                  </div>
                  <div class="vabout-item">
                    <div class="vabout-subtitle">Дата посадки:</div>
                    <div class="vabout-subtext">{{ vacancy.date_of_departure }}</div>
                  </div>
                  <div class="vabout-item">
                    <div class="vabout-subtitle">Судно:</div>
                    <div class="vabout-subtext">{{ vessel.vessel_name }}</div>
                  </div>
                  <div class="vabout-item">
                    <div class="vabout-subtitle">Тип судна:</div>
                    <div class="vabout-subtext">{{ vessel.ship_type }}</div>
                  </div>
                </div>
              </div>

              <div class="vabout-part">
                <h2 class="vabout-h2">Судно:</h2>
                <div class="vabout-red">
                  <img src="assets/img/vabout/red.svg" alt="image">
                  <div>Некоторая информация станет доступна только после отправки и принятия отклика.</div>
                </div>
                <div class="vabout-info">
                  <div class="vabout-item">
                    <div class="vabout-subtitle">Судно:</div>
                    <div class="vabout-subtext">{{ vessel.vessel_name }}</div>
                  </div>
                  <div class="vabout-item">
                    <div class="vabout-subtitle">IMO</div>
                    <div class="vabout-subtext">xxxxxxxxxx</div>
                  </div>
                  <div class="vabout-item">
                    <div class="vabout-subtitle">Тип судна:</div>
                    <div class="vabout-subtext">{{ vessel.ship_type }}</div>
                  </div>
                  <div class="vabout-item">
                    <div class="vabout-subtitle">Год постройки:</div>
                    <div class="vabout-subtext">хх.хх.хххх</div>
                  </div>
                  <div class="vabout-item">
                    <div class="vabout-subtitle">Длина:</div>
                    <div class="vabout-subtext">ххх х</div>
                  </div>

                  <div class="vabout-item">
                    <div class="vabout-subtitle">Ширина:</div>
                    <div class="vabout-subtext">ххх х</div>
                  </div>

                  <div class="vabout-item">
                    <div class="vabout-subtitle">DWT (t) - валовая вместимость:</div>
                    <div class="vabout-subtext">ххх ххх</div>
                  </div>

                  <div class="vabout-item">
                    <div class="vabout-subtitle">kW - двигательная установка:</div>
                    <div class="vabout-subtext">ххххх х</div>
                  </div>
                </div>
              </div>

              <div class="vabout-part">
                <h2 class="vabout-h2">Контантая информация:</h2>
                <div class="vabout-red">
                  <img src="assets/img/vabout/red.svg" alt="image">
                  <div>Данная информация станет доступна только после отправки и принятия отклика.</div>
                </div>
                <div class="vabout-info">
                  <div class="vabout-item">
                    <div class="vabout-subtitle">Контактное лицо:</div>
                    <div class="vabout-subtext">хххххх хххх хххххххххх</div>
                  </div>
                  <div class="vabout-item">
                    <div class="vabout-subtitle">Email:</div>
                    <div class="vabout-subtext">xxxxxx@xxxxx.xx</div>
                  </div>
                  <div class="vabout-item">
                    <div class="vabout-subtitle">Телефон №1</div>
                    <div class="vabout-subtext">х  ххх  ххх  хх  хх</div>
                  </div>
                  <div class="vabout-item">
                    <div class="vabout-subtitle">Телефон №2</div>
                    <div class="vabout-subtext">х  ххх  ххх  хх  хх</div>
                  </div>
                </div>
              </div>
            </div>

            <aside class="vabout-aside">
              <div class="vabout-aside-top">
                <img v-if="vacancy.photo_path" src="assets/img/vabout/aside-img.png" alt="image" class="vabout-aside-img">
                <div v-if="!vacancy.photo_path" class="vabout-aside-img resume-avatar">
                  <div class="bordered bordered-ct-logo">
                    <img id="imgInpPreview" src="assets/img/header/logo-white.png" alt="avatar"/>
                    <span>{{company.company_name}}</span>
                    <text>&#9875;</text>
                  </div>
                </div>
                <div v-if="vacancy.photo_path" class="vabout-aside-title">{{company.company_name}}</div>
              </div>

              <div class="vabout-aside-dop">
                <a href="#" class="vabout-aside-button vabout-aside-red">
                  <img src="assets/img/vabout/aside-1.svg" alt="image">
                  <div>Отправить отклик<br>
                    на вакансию
                  </div>
                </a>
                <!-- /.vabout-aside-button -->
                <a @click="addFavoriteVacancy(vacancy._id)" class="vabout-aside-button vabout-aside-blue">
                  <img src="assets/img/vabout/aside-2.svg" alt="image">
                  <div>
                    Добавить вакансию<br>
                    в избранное
                  </div>
                </a>
                <!-- /.vabout-aside-button -->
              </div>
              <!-- /.vabout-aside-dop -->

              <div class="vabout-aside-end">
                <a :href="'/company/vacancies/' + company._id" target="_blank" class="vabout-aside-link">Все вакансии компании (4)</a>
                <!-- /.vabout-aside-link -->
                <a @click="addFavoriteCompany(company._id)" class="vabout-aside-link">Добавить компанию в избранное</a>
                <!-- /.vabout-aside-link -->
              </div>
              <!-- /.vabout-aside-end -->
            </aside>
            <!-- /.vabout-aside -->

          </div>
          <!-- /.vabout-block -->

        </div>
        <!-- /.post -->
      </div>
      <!-- /.container -->
    </section>
    <AfCustomFooter :lnkStyle="'footer-block footer-block-transparent'"/>
  </NuxtLayout>
</template>

<script setup>
import api from "@/api/api";
import {ref} from "vue";

const company = ref({})
const vacancy = ref({})
const vessel = ref({})
const vacancyDate = ref('')

const vacancyInit = async(vacancyId) => {
  const {data} = await api.get("/all-vacancies/"+vacancyId);
  vacancy.value = data.vacancy;
  company.value = data.company_data;
  vessel.value = data.vessel

  const mon = [
    'января',
    'февраля',
    'мая',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ]

  let tdate = vacancy.value.created_at.split('T')[0];
  tdate = tdate.split('-');
  vacancyDate.value = parseInt(tdate[2]) + ' ' + mon[tdate[1] - 1].toUpperCase() + ' ' + tdate[0]
}
onMounted(() => {

  let s = window.location.href.split('vacancy/')
  if (s.length > 1 && s[1] !== '') {
    vacancyInit(s[1]);
  }

});

const addFavoriteVacancy = async (id) => {

}
const addFavoriteCompany = async (id) => {

}

</script>

<style lang="scss" scoped>
.resume-avatar .bordered.bordered-ct-logo {
  background: #3b45a9;
  padding: 15px;
  width: 170px;
  height: 170px;
  position: relative;
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
</style>