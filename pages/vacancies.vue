<template>
  <NuxtLayout name="default-hero">
    <div @click="hideFilters()" class="section-hero">
      <AfCustomHeader/>
      <div class="hero">
        <div class="container">
          <div class="hero-block">
            <h1 class="hero-title">Вакансии для моряков</h1>

            <div class="search-block">
              <div class="search-block__header">
                <div style="cursor: pointer;" @click="showFilters = true; showSearch = false; search_enable=false;">
                  <img src="assets/img/search/filter.png" alt=""/>
                  Фильтр по вакансиям
                </div>
                <div style="cursor: pointer;" @click="showFilters = false; showSearch = true; search_enable=true;">
                  <img src="assets/img/search/search.png" alt=""/>
                  Поиск
                </div>
              </div>
              <div class="search-block__filter mor-tab" v-if="showFilters">
                <div class="mor-nav-item mor-nav-work">
                  <div class="select" @click="showFilter(0)">
                    <div v-if="filterData.positions.length">
                      <span>Выбрано: {{ filterData.positions.length }}</span><br>
                      {{ filterData.positions[filterData.positions.length - 1].substring(0, 13) }}...
                    </div>
                    <div v-if="!filterData.positions.length" style="padding-right: 15px;">
                      Должность
                    </div>
                  </div>

                  <div class="mor-nav-drop" v-if="showFilterVacancy" @click="forceShowFilter(0)">
                    <input type="search" v-model="searchInput" placeholder="Введите название должности"
                           class="mor-nav-search">
                    <div class="mor-nav-part">
                      <div class="resume-contact__second cabinet"
                           v-for="(item, index) in availableOptions"
                           :key="index">
                        <label class="custom-checkbox mor-checkbox">
                          <input type="checkbox" :value="item" v-model="filterData.positions"/>
                          <span class="checkmark"></span>
                          {{ item }}
                        </label>
                      </div>
                    </div>
                    <!-- /.mor-nav-part -->
                  </div>

                </div>

                <div class="mor-nav-zp mor-nav-zarp mor-nav-item">
                  <div class="select mor-input mor-input-zp" @click="showFilter(1)">
                    <label>Зарплата</label>
                    <div v-if="!showFilterSalary && filterData.salary_from && filterData.salary_to"
                         class="ed-moz-zp-val">от {{ filterData.salary_from.toLocaleString() }}₽ до
                      {{ filterData.salary_to.toLocaleString() }}₽
                    </div>
                    <div v-if="!showFilterSalary && filterData.salary_from && !filterData.salary_to"
                         class="ed-moz-zp-val">от {{ filterData.salary_from.toLocaleString() }}₽
                    </div>
                    <div v-if="!showFilterSalary && !filterData.salary_from && filterData.salary_to"
                         class="ed-moz-zp-val">до {{ filterData.salary_to.toLocaleString() }}₽
                    </div>
                  </div>

                  <select v-if="false" class="select mor-input mor-input-select">
                    <option value="">RUB</option>
                    <option value="">USD</option>
                  </select>
                  <!-- /#.select mor-input -->


                  <div class="mor-nav-drop" v-if="showFilterSalary" @click="forceShowFilter(1)">
                    <div class="mor-nav-block">
                      <input v-model="filterData.salary_from" type="number" placeholder="От"
                             class="mor-nav-search mor-nav-input">
                      <input v-model="filterData.salary_to" type="number" placeholder="До"
                             class="mor-nav-search mor-nav-input">
                    </div>
                    <!-- /.mor-nav-block -->
                  </div>
                  <!-- /.mor-nav-drop -->
                </div>
                <div class="mor-nav-zp mor-nav-date mor-nav-item">
                  <label>Дата посадки:</label>
                  <input type="date"
                         v-model="filterData.date_of_departure"
                         class="mor-input mor-date-inp datepicker-air" @click="showFilter(2)">
                </div>

                <select v-model="filterData.contract_duration" class="select mor-select" @click="showFilter(3)">
                  <option disabled selected>
                    Период посадки
                  </option>
                  <option v-for="(item, index) in getAfContractDuration"
                          :key="index">
                    {{ item }}
                  </option>

                </select>

                <div class="mor-nav-item mor-nav-sudno mor-nav-zp mor-nav-right">
                  <div class="select" @click="showFilter(4)">
                    <div v-if="filterData.ships.length">
                      <span>Выбрано: {{ filterData.ships.length }}</span><br>
                      {{ filterData.ships[filterData.ships.length - 1].substring(0, 13) }}...
                    </div>
                    <div v-if="!filterData.ships.length">
                      Тип судна
                    </div>
                  </div>

                  <div class="mor-nav-drop" v-if="showFilterShipType" @click="forceShowFilter(4)">
                    <input type="search" v-model="searchShipInput" placeholder="Введите тип судна"
                           class="mor-nav-search">
                    <div class="mor-nav-part">
                      <div class="resume-contact__second cabinet"
                           v-for="(item, index) in availableShipOptions"
                           :key="index">
                        <label class="custom-checkbox mor-checkbox">
                          <input type="checkbox" :value="item" v-model="filterData.ships"/>
                          <span class="checkmark"></span>
                          {{ item }}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div class="mor-tab" v-if="showSearch">
                <input v-model="search_position" placeholder="Введите название должности" class="mor-input-search">
              </div>

              <div class="search-block-end search-block-rend">
                <button @click="resetFilter()" class="search-button-opacity">Сбросить</button>

                <div @click="fetchVacancies(1)" class="search-button-red">
                  Найти
                  <span>→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section @click="hideFilters()" class="section-flot section-res">
      <div class="container">
        <div class="flot">
          <h2 class="search-title">Вакансий под заданные критерии: <span>{{vacancies_total}}</span></h2>

          <div class="flot-block flot-block-side flot-block-vak">
            <div class="flot-info">
              <div class="flot-content flot-content-search">
                <div class="vacancy-list search-vacancy-list">
                  <VacancyDefaultItem
                      v-for="(item, i) in vacancies"
                      :data="item"
                      :key="'vacancies-item-' + i"
                  />
                </div>
              </div>

              <div v-if="total_pages > 0 && total_pages < 8" class="flot-nav news-nav">
                <a v-show="current_page !== 1 && total_pages > 1" @click="fetchVacancies(1, false);"
                   class="flot-nav__prev flot-nav__a">
                  <img src="assets/img/flot/prev.svg" alt="image"/>
                </a>

                <div class="flot-nav__block">
                  <a v-for="i of total_pages" :key="'pag-item-' + i" @click="fetchVacancies(i, false);"
                     class="flot-nav__a"
                     :class="{ 'active':current_page === i }">{{ i }}</a>
                </div>

                <a v-show="current_page !== total_pages && total_pages > 1" @click="fetchVacancies(total_pages, false);"
                   class="flot-nav__next flot-nav__a">
                  <img src="assets/img/flot/next.svg" alt="image"/>
                </a>
              </div>

              <div v-if="total_pages > 7" class="flot-nav news-nav">
                <a v-show="current_page !== 1 && total_pages > 1" @click="fetchVacancies(1, false);"
                   class="flot-nav__prev flot-nav__a">
                  <img src="assets/img/flot/prev.svg" alt="image"/>
                </a>

                <div class="flot-nav__block">
                  <template v-for="i of total_pages" :key="'pag-item-' + i">
                    <a v-if="(i < 6 || i === total_pages)" @click="fetchVacancies(i, false);" class="flot-nav__a"
                       :class="{ 'active':current_page === i }">{{ i }}</a>
                    <a v-if="(i > 6 && i !== total_pages) && hidden_pages" :key="'pag-item-' + i"
                       @click="fetchVacancies(i, false);" class="flot-nav__a"
                       :class="{ 'active':current_page === i }">{{ i }}</a>
                    <a v-if="i === 7 && !hidden_pages" @click="hidden_pages = !hidden_pages" class="flot-nav__a">...</a>

                  </template>
                </div>

                <a v-show="current_page !== total_pages && total_pages > 1" @click="fetchVacancies(total_pages, false);"
                   class="flot-nav__next flot-nav__a">
                  <img src="assets/img/flot/next.svg" alt="image"/>
                </a>
              </div>
            </div>

            <aside class="flot-aside">
              <!-- ED TODO: remove on backend release -->
              <div class="vacancy vacancy-aside">
                <div class="vacancy__label-top">
                  <div class="vacancy__label">Cook (повар)

                  </div>
                </div>
                <div class="vacancy__meta">
                  <div class="vacancy__company"><img src="assets/img/responses/company.png" alt="">OJ Crew
                  </div>
                  <div class="vacancy__ship"><img src="assets/img/responses/ship.png" alt="">Победа
                  </div>
                </div>

                <div class="vacancy__info">
                  <div class="vi-item">
                    <div class="vi-label">Зарплата:</div>
                    <strong>2000 - 2300 USD</strong>
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Дата посадки:</div>
                    22.01 - 31.01.2024
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Длит-ть контракта:</div>
                    6 месяцев
                  </div>
                </div>

                <div class="vacancy__buttons">
                  <div class="vacancy__button blue"><img src="assets/img/dop-page/blue-info.svg" alt="">Подробнее
                  </div>
                  <div class="vacancy__button red"><img src="assets/img/search/link.png" alt="">Отправить
                    отклик
                  </div>
                </div>

                <div class="vacancy__date new">топ 1 от 13 дек 2023</div>
              </div>


              <a href="/single-dock-1" class="flot-aside__link">
                <img src="assets/img/dock/image-4.jpg" alt="img">
              </a>
              <!-- /.flot-aside__link -->
              <a href="/single-dock-2" class="flot-aside__link">
                <img src="assets/img/dock/image-2.jpg" alt="img">


              </a>
              <!-- /.flot-aside__link -->
              <a href="/single-dock-3" class="flot-aside__link">
                <img src="assets/img/dock/image-1.jpg" alt="img">

              </a>
              <!-- /.flot-aside__link -->
              <a href="/single-dock-4" class="flot-aside__link">
                <img src="assets/img/dock/image-3.png" alt="img">

              </a>
              <VacancySidebarItem/>
            </aside>
          </div>
        </div>
      </div>
    </section>
    <AfCustomFooter/>
  </NuxtLayout>
</template>

<script setup>
import api from "@/api/api";
import {computed, ref} from "vue";

import VacancyDefaultItem from "~/components/list/VacancyDefaultItem";

const fetchedData = ref({})
const vacancies = ref([]);
const vessels = ref([]);
const total_pages = ref(0);
const current_page = ref(1);
const hidden_pages = ref(false);
const search_position = ref('')
const search_enable = ref(false)
const vacancies_total = ref(0)

import {useUsersStore} from "~/store/useUserStore";

const userStore = useUsersStore();
const {userInfo, isAuth, userProfileId} = storeToRefs(userStore)

import {useGlobalSettings} from "~/store/useGlobalSettings";

const globalSettings = useGlobalSettings();
const {getAfJobs, getAfShips, getAfContractDuration, getCurrentShip} = storeToRefs(globalSettings)

const filterData = ref({
  positions: [],
  ships: [],
  date_of_departure: '',
  date_of_departure_from:'',
  date_of_departure_to: '',
  contract_duration: 'Период посадки',
  salary_from: 0,
  salary_to: 0
})

//@click="toggleModal('shipinfo'); setactiveship(item);"

const fetchVacancies = async (page, useFilter = true) => {

  try {

    let filterQuery = '';
    if (search_enable.value) {
      filterQuery = "&search=" + search_position.value;
      page = 1;
      current_page.value = 1;
    } else {
      let cdf = filterData.value.contract_duration;
      if (cdf == 'Период посадки') {
        cdf = ''
      }
      if (useFilter) {
        if (!filterData.value.salary_from) {
          filterData.value.salary_from = 0;
        }
        if (!filterData.value.salary_to) {
          filterData.value.salary_from = 0;
        }
        filterQuery = "&salary_from=" + filterData.value.salary_from + "&salary_to=" + filterData.value.salary_to + "&positions=" + filterData.value.positions.join(',') + "&ships=" + filterData.value.ships.join(',') + "&date_of_departure=" + filterData.value.date_of_departure + "&contract_duration=" + cdf + "&date_of_departure_from=" + filterData.value.date_of_departure_from + "&date_of_departure_to=" + filterData.value.date_of_departure_to;
        page = 1;
        current_page.value = 1;
      }
    }

    fetchedData.value = await api.get("/all-vacancies?page=" + page + filterQuery);

    vacancies.value = fetchedData.value.data.vacancies
    vessels.value = fetchedData.value.data.vessels
    total_pages.value = fetchedData.value.data.total_pages
    current_page.value = fetchedData.value.data.current_page
    vacancies_total.value = fetchedData.value.data.total_vacancies

    for (let i = 0; i < vacancies.value.length; i++) {
      vacancies.value[i].company_id = fetchedData.value.data.companies[i].id
      for (let j = 0; j < vessels.value.length; j++) {
        if (vacancies.value[i].vessel === vessels.value[j].id) {
          vacancies.value[i].vessel_data = vessels.value[j]
          break;
        }
      }

      if (isAuth && userInfo.value.info.role == 'Моряк') {
        let responded = false;
        if (vacancies.value[i].responses) {
          for (let k = 0; k < vacancies.value[i].responses.length; k++) {
            if (userProfileId.value.resumeID == vacancies.value[i].responses[k]) {
              responded = true;
              break;
            }
          }
        }

        if (responded) {
          vacancies.value[i].response_id = false
        } else {
          vacancies.value[i].response_id = userProfileId.value.resumeID
        }

      }

      vacancies.value[i].company_name = fetchedData.value.data.companies[i].company_name
    }

  } catch (error) {
    console.log(error);
  }
}
const resetFilter = async () => {
  filterData.value = {
    positions: [],
    ships: [],
    date_of_departure: '',
    date_of_departure_from:'',
    date_of_departure_to: '',
    contract_duration: 'Период посадки',
    salary_from: 0,
    salary_to: 0
  }
  search_enable.value = false;
  await fetchVacancies(1);
}

fetchVacancies(1, false);

const searchInput = ref('');
const searchShipInput = ref('');
const availableOptions = computed(() =>
    getAfJobs.value.filter((x) => {
      const p2 = x.trim().toLowerCase().includes(searchInput.value.trim().toLowerCase());
      return p2;
    })
);
const availableShipOptions = computed(() =>
    getAfShips.value.filter((x) => {
      const p2 = x.trim().toLowerCase().includes(searchShipInput.value.trim().toLowerCase());
      return p2;
    })
);

const showFilterVacancy = ref(false)
const showFilterSalary = ref(false)
const showFilterDate = ref(false)
const showFilterPeriod = ref(false)
const showFilterShipType = ref(false)
const showFilters = ref(true)
const showSearch = ref(false)
const hideFiltersAllow = ref(true)

watch(showFilterSalary, () => {
  if (showFilterSalary.value) {
    // if (resetFilter.salary_from > resetFilter.salary_to) {
    //   resetFilter.salary_from = 0;
    // }
  }
})

const hideFilters = async () => {
  setTimeout(() => {
    if (hideFiltersAllow.value) {
      showFilterVacancy.value = false;
      showFilterSalary.value = false;
      showFilterDate.value = false;
      showFilterPeriod.value = false;
      showFilterShipType.value = false;
    }
  }, 5);
}

const showFilter = async (filter) => {
  hideFiltersAllow.value = false;
  if (filter === 0) {
    showFilterVacancy.value = !showFilterVacancy.value;
    showFilterSalary.value = false;
    showFilterDate.value = false;
    showFilterPeriod.value = false;
    showFilterShipType.value = false;
  } else if (filter === 1) {
    showFilterSalary.value = !showFilterSalary.value;
    showFilterVacancy.value = false;
    showFilterDate.value = false;
    showFilterPeriod.value = false;
    showFilterShipType.value = false;
  } else if (filter === 2) {
    showFilterDate.value = !showFilterDate.value;
    showFilterVacancy.value = false;
    showFilterSalary.value = false;
    showFilterPeriod.value = false;
    showFilterShipType.value = false;
  } else if (filter === 3) {
    showFilterPeriod.value = !showFilterPeriod.value;
    showFilterVacancy.value = false;
    showFilterSalary.value = false;
    showFilterDate.value = false;
    showFilterShipType.value = false;
  } else if (filter === 4) {
    showFilterShipType.value = !showFilterShipType.value;
    showFilterVacancy.value = false;
    showFilterSalary.value = false;
    showFilterDate.value = false;
    showFilterPeriod.value = false;
  }
  setTimeout(() => {
    hideFiltersAllow.value = true;
  }, 10);
}

const forceShowFilter = async (filter) => {
  hideFiltersAllow.value = false;
  if (filter === 0) {
    showFilterVacancy.value = true;
  } else if (filter === 1) {
    showFilterSalary.value = true;
  } else if (filter === 2) {
    showFilterDate.value = true;
  } else if (filter === 3) {
    showFilterPeriod.value = true;
  } else if (filter === 4) {
    showFilterShipType.value = true;
  }
  setTimeout(() => {
    hideFiltersAllow.value = true;
  }, 10);
}
</script>

<style lang="scss" scoped>
.mor-nav-item {
  min-height: 82px;
  display: flex;
  border-right: solid 1px #d5d7ef;
  flex-direction: column;
  justify-content: center;
}

.mor-nav-part {
  min-height: 40px;
  width: 100%;
}

.mor-input-search {
  min-height: 22px;
}

.mor-date-inp {
  width: 60%;
  padding: 0px 20%;
}

.mor-nav-date > label {
  width: 60%;
  padding: 0px 20%;
  padding-bottom: 5px;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  background: transparent;
  bottom: 0;
  color: transparent;
  cursor: pointer;
  height: auto;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
}

.select.mor-input.mor-input-zp {
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 60%;
  padding: 0px 20%;

  > label {
    padding-bottom: 5px;
  }

  > div {
    white-space: nowrap;
    color: #222;
  }
}
</style>
