<template>
    <NuxtLayout name="default-hero" class="main cabinet" style="background-color: #fff">
        <div>
            <AfHeaderColor/>
        </div>
        <section id="favorites">
            <div class="container">
                <h1 class="title-none">Избранное</h1>

                <div class="tabs">
                    <div class="tab-header">
                        <div
                                class="tab-label"
                                :class="{ active: activeTab === 'vacancies' }"
                                @click="setActiveTab('vacancies')"
                        >
                            Вакансии
                        </div>
                        <div
                                class="tab-label"
                                :class="{ active: activeTab === 'companies' }"
                                @click="setActiveTab('companies')"
                        >
                            Компании
                        </div>
                    </div>

                    <div class="tab-body" v-show="activeTab === 'vacancies'">
                        <div class="vacancy-list vacancy-list-three">
                            <div class="vacancy">
                                <div class="vacancy__label-top">
                                    <div class="vacancy__label">Cook (повар) <img src="assets/img/responses/fav.png"
                                                                                  alt=""></div>
                                    <div class="vacancy__logo">
                                        <img src="assets/img/flot/logo-cart.png" alt="logo">
                                    </div>
                                </div>
                                <div class="vacancy__meta">
                                    <div class="vacancy__company"><img src="assets/img/responses/company.png" alt="">OJ
                                        Crew
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
                                    <div class="vacancy__button red"><img src="assets/img/responses/more.png" alt="">Подробнее
                                    </div>
                                    <div class="vacancy__button"><img src="assets/img/responses/cancel.png" alt="">Отменить
                                        отклик
                                    </div>
                                </div>

                                <div class="vacancy__date new">13 декабря 2023</div>
                            </div>
                            <div class="vacancy">
                                <div class="vacancy__label-top">
                                    <div class="vacancy__label">Cook (повар) <img src="assets/img/responses/fav.png"
                                                                                  alt=""></div>
                                    <div class="vacancy__logo">
                                        <img src="assets/img/flot/logo-cart.png" alt="logo">
                                    </div>
                                </div>
                                <div class="vacancy__meta">
                                    <div class="vacancy__company"><img src="assets/img/responses/company.png" alt="">OJ
                                        Crew
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
                                    <div class="vacancy__button red"><img src="assets/img/responses/more.png" alt="">Подробнее
                                    </div>
                                    <div class="vacancy__button"><img src="assets/img/responses/cancel.png" alt="">Отменить
                                        отклик
                                    </div>
                                </div>

                                <div class="vacancy__date">13 декабря 2023</div>
                            </div>
                            <div class="vacancy">
                                <div class="vacancy__label-top">
                                    <div class="vacancy__label">Cook (повар) <img src="assets/img/responses/fav.png"
                                                                                  alt=""></div>
                                    <div class="vacancy__logo">
                                        <img src="assets/img/flot/logo-cart.png" alt="logo">
                                    </div>
                                </div>
                                <div class="vacancy__meta">
                                    <div class="vacancy__company"><img src="assets/img/responses/company.png" alt="">OJ
                                        Crew
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
                                    <div class="vacancy__button red"><img src="assets/img/responses/more.png" alt="">Подробнее
                                    </div>
                                    <div class="vacancy__button"><img src="assets/img/responses/cancel.png" alt="">Отменить
                                        отклик
                                    </div>
                                </div>

                                <div class="vacancy__date">13 декабря 2023</div>
                            </div>
                        </div>
                    </div>

                    <div class="tab-body" v-show="activeTab === 'companies'">
                        <div class="company-list">
                            <div class="company">
                                <div class="company__logo">
                                    <img src="assets/img/responses/company-1.png" alt="">
                                </div>
                                <div class="company__label">Crewservices</div>
                                <div class="company__info">
                                    <div class="ci-item">
                                        <div class="ci-label">Локация</div>
                                        Астрахань, Россия
                                    </div>
                                    <div class="ci-item">
                                        <div class="ci-label">На проекте с:</div>
                                        24 марта 2023
                                    </div>
                                </div>
                                <div class="company__buttons">
                                    <div class="company__button red"><img src="assets/img/responses/more.png" alt="">Активных
                                        вакансий: 0
                                    </div>
                                    <div class="company__button"><img src="assets/img/responses/cancel.png" alt="">Убрать
                                        из избранного
                                    </div>
                                </div>
                            </div>
                            <div class="company">
                                <div class="company__logo">
                                    <img src="assets/img/responses/company-1.png" alt="">
                                </div>
                                <div class="company__label">Crewservices</div>
                                <div class="company__info">
                                    <div class="ci-item">
                                        <div class="ci-label">Локация</div>
                                        Астрахань, Россия
                                    </div>
                                    <div class="ci-item">
                                        <div class="ci-label">На проекте с:</div>
                                        24 марта 2023
                                    </div>
                                </div>
                                <div class="company__buttons">
                                    <div class="company__button red"><img src="assets/img/responses/more.png" alt="">Активных
                                        вакансий: 0
                                    </div>
                                    <div class="company__button"><img src="assets/img/responses/cancel.png" alt="">Убрать
                                        из избранного
                                    </div>
                                </div>
                            </div>
                            <div class="company">
                                <div class="company__logo">
                                    <img src="assets/img/responses/company-1.png" alt="">
                                </div>
                                <div class="company__label">Crewservices</div>
                                <div class="company__info">
                                    <div class="ci-item">
                                        <div class="ci-label">Локация</div>
                                        Астрахань, Россия
                                    </div>
                                    <div class="ci-item">
                                        <div class="ci-label">На проекте с:</div>
                                        24 марта 2023
                                    </div>
                                </div>
                                <div class="company__buttons">
                                    <div class="company__button red"><img src="assets/img/responses/more.png" alt="">Активных
                                        вакансий: 0
                                    </div>
                                    <div class="company__button"><img src="assets/img/responses/cancel.png" alt="">Убрать
                                        из избранного
                                    </div>
                                </div>
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
    import api from "@/api/api";

    const activeTab = ref("vacancies");

    function setActiveTab(tab) {
        activeTab.value = tab;
    }

    onMounted(() => {
        document.body.classList.add('bg-white');
    });
</script>

<style lang="scss" scoped>
    body {
        background-color: #fff;
    }
</style>
