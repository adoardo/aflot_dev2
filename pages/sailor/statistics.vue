<template>
    <NuxtLayout class="section-hero section-hero-post section-back-none main" name="custom">
        <section class="section-about">
            <div class="container">
                <div class="about">
                    <div class="tarif-top tarif-top-off">
                        <h1 class="about-title">
                            Статистика
                        </h1>
                        <!-- /.about-title -->

                        <ul class="tarif-list" id="tabNav">
                            <li><a @click="at=true,lm=false" :class="{ tactive: at }">За всё время</a></li>
                            <li><a @click="at=false,lm=true" :class="{ tactive: lm }">За последний месяц</a></li>
                        </ul>

                    </div>
                    <!-- /.tarif-top -->

                    <div id="tabsWrap" class="tarif-block">
                        <div class="tarif-tab" v-if="at" id="tab1">
                            <div class="about-block tarif-block-off">
                                <div class="about-item">
                                    <img src="assets/img/about/icon-1.svg" alt="image" class="about-item__img">
                                    <div class="about-info">
                                        <div class="tarif-off-part">
                                            <div class="tarif-off-blue">Итого возможностей:</div>
                                            <!-- /.tarif-off-blue -->
                                            <div class="about-info__title">

                                                120
                                                <span class="about-info__plus">предложений</span>
                                                <!-- /.about-info__plus -->
                                            </div>
                                            <!-- /.about-info__title -->
                                        </div>
                                        <!-- /.tarif-off-part -->
                                    </div>
                                    <!-- /.about-info -->
                                </div>
                                <!-- /.about-item -->
                                <div class="about-item">
                                    <img src="assets/img/dop-page/icon-2.svg" alt="image" class="about-item__img">
                                    <div class="about-info">
                                        <div class="tarif-off-part">
                                            <div class="tarif-off-blue">Вы получили:</div>
                                            <!-- /.tarif-off-blue -->
                                            <div class="about-info__title">

                                                120
                                                <span class="about-info__plus">предложений</span>
                                                <!-- /.about-info__plus -->
                                            </div>
                                            <!-- /.about-info__title -->
                                        </div>
                                        <!-- /.tarif-off-part -->


                                    </div>
                                    <!-- /.about-info -->
                                </div>
                                <!-- /.about-item -->
                                <div class="about-item">
                                    <img src="assets/img/dop-page/icon-2.svg" alt="image" class="about-item__img">
                                    <div class="about-info">


                                        <div class="tarif-off-part">
                                            <div class="tarif-off-blue">Вы согласились рассмотреть:</div>
                                            <!-- /.tarif-off-blue -->
                                            <div class="about-info__title">

                                                10
                                                <span class="about-info__plus">вакансий</span>
                                                <!-- /.about-info__plus -->
                                            </div>
                                            <!-- /.about-info__title -->
                                        </div>
                                        <!-- /.tarif-off-part -->
                                    </div>
                                    <!-- /.about-info -->
                                </div>
                                <!-- /.about-item -->

                                <div class="about-item">
                                    <img src="assets/img/dop-page/icon-3.svg" alt="image" class="about-item__img">
                                    <div class="about-info">
                                        <div class="tarif-off-part">
                                            <div class="tarif-off-blue">Вы откликнулись на:</div>
                                            <!-- /.tarif-off-blue -->
                                            <div class="about-info__title">

                                                120
                                                <span class="about-info__plus">вакансий</span>
                                                <!-- /.about-info__plus -->
                                            </div>
                                            <!-- /.about-info__title -->
                                        </div>
                                        <!-- /.tarif-off-part -->


                                    </div>
                                    <!-- /.about-info -->
                                </div>
                                <!-- /.about-item -->
                                <div class="about-item">
                                    <img src="assets/img/dop-page/icon-3.svg" alt="image" class="about-item__img">
                                    <div class="about-info">
                                        <div class="tarif-off-part">
                                            <div class="tarif-off-blue">Ваши отклики приняло:</div>
                                            <!-- /.tarif-off-blue -->
                                            <div class="about-info__title">

                                                10
                                                <span class="about-info__plus">компаний</span>
                                                <!-- /.about-info__plus -->
                                            </div>
                                            <!-- /.about-info__title -->
                                        </div>
                                        <!-- /.tarif-off-part -->


                                    </div>
                                    <!-- /.about-info -->
                                </div>
                                <!-- /.about-item -->
                                <div class="about-item">
                                    <img src="assets/img/dop-page/icon-4.svg" alt="image" class="about-item__img">
                                    <div class="about-info">
                                        <div class="tarif-off-part">
                                            <div class="tarif-off-blue">Ваше резюме просмотрели:</div>
                                            <!-- /.tarif-off-blue -->
                                            <div class="about-info__title">

                                                1920
                                                <span class="about-info__plus">вакансий</span>
                                                <!-- /.about-info__plus -->
                                            </div>
                                            <!-- /.about-info__title -->
                                        </div>
                                        <!-- /.tarif-off-part -->


                                    </div>
                                    <!-- /.about-info -->
                                </div>
                                <!-- /.about-item -->
                            </div>

                        </div>
                        <div class="tarif-tab" v-if="lm" id="tab2">

                            <div class="about-block tarif-block-off">
                                <div class="about-item">
                                    <img src="assets/img/about/icon-1.svg" alt="image" class="about-item__img">
                                    <div class="about-info">
                                        <div class="tarif-off-part">
                                            <div class="tarif-off-blue">Итого возможностей:</div>
                                            <!-- /.tarif-off-blue -->
                                            <div class="about-info__title">

                                                120
                                                <span class="about-info__plus">предложений</span>
                                                <!-- /.about-info__plus -->
                                            </div>
                                            <!-- /.about-info__title -->
                                        </div>
                                        <!-- /.tarif-off-part -->
                                    </div>
                                    <!-- /.about-info -->
                                </div>
                                <!-- /.about-item -->
                                <div class="about-item">
                                    <img src="assets/img/dop-page/icon-2.svg" alt="image" class="about-item__img">
                                    <div class="about-info">
                                        <div class="tarif-off-part">
                                            <div class="tarif-off-blue">Вы получили:</div>
                                            <!-- /.tarif-off-blue -->
                                            <div class="about-info__title">

                                                120
                                                <span class="about-info__plus">предложений</span>
                                                <!-- /.about-info__plus -->
                                            </div>
                                            <!-- /.about-info__title -->
                                        </div>
                                        <!-- /.tarif-off-part -->


                                    </div>
                                    <!-- /.about-info -->
                                </div>
                                <!-- /.about-item -->

                                <div class="about-item">
                                    <img src="assets/img/dop-page/icon-2.svg" alt="image" class="about-item__img">
                                    <div class="about-info">


                                        <div class="tarif-off-part">
                                            <div class="tarif-off-blue">Вы согласились рассмотреть:</div>
                                            <!-- /.tarif-off-blue -->
                                            <div class="about-info__title">

                                                10
                                                <span class="about-info__plus">вакансий</span>
                                                <!-- /.about-info__plus -->
                                            </div>
                                            <!-- /.about-info__title -->
                                        </div>
                                        <!-- /.tarif-off-part -->
                                    </div>
                                    <!-- /.about-info -->
                                </div>
                                <!-- /.about-item -->

                            </div>
                        </div>
                    </div>

                </div>
                <!-- /.about -->
            </div>
            <!-- /.container -->
        </section>
    </NuxtLayout>
</template>

<script>
    export default {
        data() {
            return {
                at: true,
                lm: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        height: 100vh;
        min-height: 100vh;
    }
    .tarif-list a.tactive {
        border-bottom: 4px solid #3b45a9;
        color: #3b45a9;
    }
    .tarif-tab {
        display: flex;
    }
</style>