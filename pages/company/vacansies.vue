<template>
  <NuxtLayout name="default-hero" class="main cabinet">
    <div>
      <AfHeaderColor />
    </div>
    <section id="responses">
      <div class="container">
        <div class="tabs">
          <div class="tab-header">
            <div class="tab-label" @click="setActiveTab('tab1')" :class="{ active: activeTab === 'tab1' }">
              Вакансии
            </div>
            <div class="tab-label" @click="setActiveTab('tab2')" :class="{ active: activeTab === 'tab2' }">
              Черновики
            </div>
            <div class="tab-label" @click="setActiveTab('tab3')" :class="{ active: activeTab === 'tab3' }">
              Неактуальные вакансии
            </div>
          </div>

          <div class="tab-body" v-show="activeTab === 'tab1'">
            <div class="vacancy-detail__list">
              <div class="vacancy vacancy-detail vacancy-detail-red">
                <div class="vacancy__label">Cook (повар) </div>

                <div class="vacancy__info vacancy__info__four">
                  <div class="vi-item">
                    <div class="vi-label">Название судна:</div>
                    «Победа»
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Дата посадки:</div>
                    22.01 - 31.01.2024
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Зарплата:</div>
                    2000 - 2300 USD
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Телефон №1:</div>
                    +7 812 777 77 77
                  </div>

                  <div class="vi-item">
                    <div class="vi-label">Тип судна:</div>
                    Контейнеровоз
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Длит-ть контракта:</div>
                    6 месяцев
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Email для связи:</div>
                    ivanov@manager.ru
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Телефон №2:</div>
                    +7 812 777 77 77
                  </div>
                </div>

                <div class="vacancy__links">
                  <div>
                    <a href="#" class="blue">Редактировать вакансию</a>
                  </div>
                  <div>

                  </div>
                  <div>
                    <a href="#" class="blue">Закрыть вакансию</a>
                  </div>
                </div>

                <div class="vacancy__date new vacancy__date__moder">Вакансия на модерации. судно проверяется,Это займёт не более 24 часов</div>
              </div>
              <div class="vacancy vacancy-detail">
                <div class="vacancy__label">Cook (повар)
                  <div class="news-view"><img src="assets/img//news/icon.svg" alt="image"><span>894</span></div>
                </div>

                <div class="vacancy__info vacancy__info__four">
                  <div class="vi-item">
                    <div class="vi-label">Название судна:</div>
                    «Победа»
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Дата посадки:</div>
                    22.01 - 31.01.2024
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Зарплата:</div>
                    2000 - 2300 USD
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Телефон №1:</div>
                    +7 812 777 77 77
                  </div>

                  <div class="vi-item">
                    <div class="vi-label">Тип судна:</div>
                    Контейнеровоз
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Длит-ть контракта:</div>
                    6 месяцев
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Email для связи:</div>
                    ivanov@manager.ru
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Телефон №2:</div>
                    +7 812 777 77 77
                  </div>
                </div>

                <div class="vacancy__links">
                  <div>
                    <a href="#">Готовы к работе</a>
                    <a href="#">Отклики <span class="count">5</span></a>
                    <a href="#">Отправленные предложения</a>
                  </div>
                  <div>
                    <a href="#">Поднять в топ 10</a>
                    <a href="#">Создать рассылку</a>
                  </div>
                  <div>
                    <a href="#" class="blue">Редактировать вакансию</a>
                    <a href="#" class="blue">Переопубликовать вакансию</a>
                    <a href="#" class="blue">Закрыть вакансию</a>
                  </div>
                </div>

                <div class="vacancy__date">13 декабря 2023 - 23 декабря 2023</div>
              </div>
              <div class="vacancy vacancy-detail">
                <div class="vacancy__label">Cook (повар)   <div class="news-view"><img src="assets/img//news/icon.svg" alt="image"><span>894</span></div></div>

                <div class="vacancy__info vacancy__info__four">
                  <div class="vi-item">
                    <div class="vi-label">Название судна:</div>
                    «Победа»
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Дата посадки:</div>
                    22.01 - 31.01.2024
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Зарплата:</div>
                    2000 - 2300 USD
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Телефон №1:</div>
                    +7 812 777 77 77
                  </div>

                  <div class="vi-item">
                    <div class="vi-label">Тип судна:</div>
                    Контейнеровоз
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Длит-ть контракта:</div>
                    6 месяцев
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Email для связи:</div>
                    ivanov@manager.ru
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Телефон №2:</div>
                    +7 812 777 77 77
                  </div>
                </div>

                <div class="vacancy__links">
                  <div>
                    <a href="#">Готовы к работе</a>
                    <a href="#">Отклики <span class="count">5</span></a>
                    <a href="#">Отправленные предложения</a>
                  </div>
                  <div>
                    <a class="vacancy-link__a" href="#">
                      <span>Топ 10</span>
                      <span class="vacancy-red__span">
                                            4 позиция
                                          </span>
                      <!-- /.vacancy-red__span -->
                    </a>
                    <a href="#">Создать рассылку</a>
                  </div>
                  <div>
                    <a href="#" class="blue">Редактировать вакансию</a>
                    <a href="#" class="blue">Переопубликовать вакансию</a>
                    <a href="#" class="blue">Закрыть вакансию</a>
                  </div>
                </div>

                <div class="vacancy__date">13 декабря 2023 - 23 декабря 2023</div>
              </div>
              <div class="vacancy vacancy-detail">
                <div class="vacancy__label">Cook (повар)   <div class="news-view"><img src="assets/img//news/icon.svg" alt="image"><span>894</span></div></div>

                <div class="vacancy__info vacancy__info__four">
                  <div class="vi-item">
                    <div class="vi-label">Название судна:</div>
                    «Победа»
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Дата посадки:</div>
                    22.01 - 31.01.2024
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Зарплата:</div>
                    2000 - 2300 USD
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Телефон №1:</div>
                    +7 812 777 77 77
                  </div>

                  <div class="vi-item">
                    <div class="vi-label">Тип судна:</div>
                    Контейнеровоз
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Длит-ть контракта:</div>
                    6 месяцев
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Email для связи:</div>
                    ivanov@manager.ru
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Телефон №2:</div>
                    +7 812 777 77 77
                  </div>
                </div>

                <div class="vacancy__links">
                  <div>
                    <a href="#">Готовы к работе</a>
                    <a href="#">Отклики <span class="count">5</span></a>
                    <a href="#">Отправленные предложения</a>
                  </div>
                  <div>
                    <a href="#">Поднять в топ 10</a>
                    <a href="#">Создать рассылку</a>
                  </div>
                  <div>
                    <a href="#" class="blue">Редактировать вакансию</a>
                    <a href="#" class="blue">Переопубликовать вакансию</a>
                    <a href="#" class="blue">Закрыть вакансию</a>
                  </div>
                </div>

                <div class="vacancy__date">13 декабря 2023 - 23 декабря 2023</div>
              </div>

              <div class="suda-top__item vacancy-suda">
                <div class="suda-top__plus">+</div>
                <!-- /.suda-top__plus -->
                <div class="suda-top__content">
                  <div class="suda-top__title">
                    Создать новую вакансию
                  </div>
                  <!-- /.suda-top__title -->
                  <div class="suda-top__text">
                    Доступно: 3
                  </div>
                  <!-- /.suda-top__text -->
                </div>
                <!-- /.suda-top__content -->
              </div>


            </div>
          </div>
          <div class="tab-body" v-show="activeTab === 'tab2'">
            <div class="vacancy-detail__list">
              <div class="vacancy vacancy-detail">
                <div class="vacancy__label">Cook (повар) </div>

                <div class="vacancy__info vacancy__info__four">
                  <div class="vi-item">
                    <div class="vi-label">Название судна:</div>
                    «Победа»
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Дата посадки:</div>
                    <span class="red">Не указана</span>
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Зарплата:</div>
                    2000 - 2300 USD
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Телефон №1:</div>
                    +7 812 777 77 77
                  </div>

                  <div class="vi-item">
                    <div class="vi-label">Тип судна:</div>
                    <span class="red">Не указана</span>
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Длит-ть контракта:</div>
                    <span class="red">Не указана</span>
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Email для связи:</div>
                    ivanov@manager.ru
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Телефон №2:</div>
                    +7 812 777 77 77
                  </div>
                </div>

                <div class="vacancy__links">
                  <div>
                    <a href="#">Редактировать вакансию</a>
                  </div>
                  <div>
                  </div>
                  <div>
                    <a href="#" class="blue">Удалить из черновиков</a>
                  </div>
                </div>

                <div class="vacancy__date">13 декабря 2023 - 23 декабря 2023</div>
              </div>
              <div class="vacancy vacancy-detail">
                <div class="vacancy__label">Cook (повар) </div>

                <div class="vacancy__info vacancy__info__four">
                  <div class="vi-item">
                    <div class="vi-label">Название судна:</div>
                    «Победа»
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Дата посадки:</div>
                    <span class="red">Не указана</span>
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Зарплата:</div>
                    2000 - 2300 USD
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Телефон №1:</div>
                    +7 812 777 77 77
                  </div>

                  <div class="vi-item">
                    <div class="vi-label">Тип судна:</div>
                    <span class="red">Не указана</span>
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Длит-ть контракта:</div>
                    <span class="red">Не указана</span>
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Email для связи:</div>
                    ivanov@manager.ru
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Телефон №2:</div>
                    +7 812 777 77 77
                  </div>
                </div>

                <div class="vacancy__links">
                  <div>
                    <a href="#">Редактировать вакансию</a>
                  </div>
                  <div>
                  </div>
                  <div>
                    <a href="#" class="blue">Удалить из черновиков</a>
                  </div>
                </div>

                <div class="vacancy__date">13 декабря 2023 - 23 декабря 2023</div>
              </div>
              <div class="vacancy vacancy-detail">
                <div class="vacancy__label">Cook (повар) </div>

                <div class="vacancy__info vacancy__info__four">
                  <div class="vi-item">
                    <div class="vi-label">Название судна:</div>
                    «Победа»
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Дата посадки:</div>
                    <span class="red">Не указана</span>
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Зарплата:</div>
                    2000 - 2300 USD
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Телефон №1:</div>
                    +7 812 777 77 77
                  </div>

                  <div class="vi-item">
                    <div class="vi-label">Тип судна:</div>
                    <span class="red">Не указана</span>
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Длит-ть контракта:</div>
                    <span class="red">Не указана</span>
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Email для связи:</div>
                    ivanov@manager.ru
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Телефон №2:</div>
                    +7 812 777 77 77
                  </div>
                </div>

                <div class="vacancy__links">
                  <div>
                    <a href="#">Редактировать вакансию</a>
                  </div>
                  <div>
                  </div>
                  <div>
                    <a href="#" class="blue">Удалить из черновиков</a>
                  </div>
                </div>

                <div class="vacancy__date">13 декабря 2023 - 23 декабря 2023</div>
              </div>
            </div>
          </div>
          <div class="tab-body" v-show="activeTab === 'tab3'">
            <div class="vacancy-detail__list">
              <div class="vacancy vacancy-detail">
                <div class="vacancy__label">Cook (повар) </div>

                <div class="vacancy__info vacancy__info__four">
                  <div class="vi-item">
                    <div class="vi-label">Название судна:</div>
                    «Победа»
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Дата посадки:</div>
                    22.01 - 31.01.2024
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Зарплата:</div>
                    2000 - 2300 USD
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Телефон №1:</div>
                    +7 812 777 77 77
                  </div>

                  <div class="vi-item">
                    <div class="vi-label">Тип судна:</div>
                    Контейнеровоз
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Длит-ть контракта:</div>
                    6 месяцев
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Email для связи:</div>
                    ivanov@manager.ru
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Телефон №2:</div>
                    +7 812 777 77 77
                  </div>
                </div>

                <div class="vacancy__links">
                  <div>
                    <a href="#">Переопубликовать вакансию</a>
                  </div>
                  <div>
                  </div>
                  <div>
                    <a href="#" class="blue">Удалить</a>
                  </div>
                </div>

                <div class="vacancy__date">13 декабря 2023 - 23 декабря 2023</div>
              </div>
              <div class="vacancy vacancy-detail">
                <div class="vacancy__label">Cook (повар) </div>

                <div class="vacancy__info vacancy__info__four">
                  <div class="vi-item">
                    <div class="vi-label">Название судна:</div>
                    «Победа»
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Дата посадки:</div>
                    22.01 - 31.01.2024
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Зарплата:</div>
                    2000 - 2300 USD
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Телефон №1:</div>
                    +7 812 777 77 77
                  </div>

                  <div class="vi-item">
                    <div class="vi-label">Тип судна:</div>
                    Контейнеровоз
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Длит-ть контракта:</div>
                    6 месяцев
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Email для связи:</div>
                    ivanov@manager.ru
                  </div>
                  <div class="vi-item">
                    <div class="vi-label">Телефон №2:</div>
                    +7 812 777 77 77
                  </div>
                </div>

                <div class="vacancy__links">
                  <div>
                    <a href="#">Переопубликовать вакансию</a>
                  </div>
                  <div>
                  </div>
                  <div>
                    <a href="#" class="blue">Удалить</a>
                  </div>
                </div>

                <div class="vacancy__date">13 декабря 2023 - 23 декабря 2023</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <AfCustomFooter :lnkStyle="'footer-block footer-block-transparent'"/>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
// import { useRouter } from "vue-router";
// import { useCompanyStore } from "~/store/useCompanyStore";
// import VacancyItem from "~/components/list/VacancyItem";
// import { ref, onMounted, watch } from "vue";
//
// const router = useRouter();
// const { getVacansies } = useCompanyStore();
//
// const activeTab = ref(0);
// const tabContents = ref([
//   { title: "Действующие вакансии", count: 0, vacancies: [] },
//   { title: "Черновики", count: 0, vacancies: [] },
//   { title: "Неактуальные", count: 0, vacancies: [] },
// ]);
// let tab1 = true;
// let tab2 = false;
// let tab3 = false;
//
//
// onMounted(async () => {
//   // await getVacansies();
//
//   const initialTab = Number(router.currentRoute.value.query.tab);
//   if (!isNaN(initialTab) && initialTab >= 0 && initialTab < tabContents.value.length) {
//     activeTab.value = initialTab;
//   }
//
//   tabContents.value.forEach((tab, index) => {
//     tab.count = 0;
//   });
//
//   document.body.classList.add('bg-white');
// });
//
// watch(
//   () => router.currentRoute.value.query.tab,
//   (newTab, oldTab) => {
//     if (newTab !== undefined) {
//       activeTab.value = parseInt(newTab);
//     }
//   }
// );


const activeTab = ref("tab1");

const setActiveTab = async (tab) => {
  activeTab.value = tab;
}

onMounted(() => {
  document.body.classList.add('bg-white');
});
</script>

<style lang="scss" scoped></style>
