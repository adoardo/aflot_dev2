<template>
    <NuxtLayout class="section-hero section-hero-post section-back-none main" name="custom">
        <section class="section-about">
            <div class="container">
                <div class="about">
                    <div class="tarif-top tarif-top-off">
                        <h1 class="set-title about-title">
                            Итоговая статистика:
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
                                    <div class="about-image-block">
                                        <img src="assets/img/dop-page/itog-1.svg" alt="image" class="about-item__img">
                                    </div>
                                    <!-- /.about-image-block -->
                                    <div class="about-info">
                                        <div class="tarif-off-part">
                                            <div class="tarif-off-blue">Итого принято:</div>
                                            <!-- /.tarif-off-blue -->
                                            <div class="about-info__title">

                                                20
                                                <span class="about-info__plus">моряков</span>
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
                                    <div class="about-image-block">
                                        <img src="assets/img/dop-page/itog-2.svg" alt="image" class="about-item__img">
                                    </div>
                                    <!-- /.about-image-block -->
                                    <div class="about-info">
                                        <div class="tarif-off-part">
                                            <div class="tarif-off-blue">Итого опубликовано</div>
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
                                    <div class="about-image-block">
                                        <img src="assets/img/dop-page/itog-3.svg" alt="image" class="about-item__img">
                                    </div>
                                    <!-- /.about-image-block -->
                                    <div class="about-info">
                                        <div class="tarif-off-part">
                                            <div class="tarif-off-blue">Поступило:</div>
                                            <!-- /.tarif-off-blue -->
                                            <div class="about-info__title">

                                                120
                                                <span class="about-info__plus">откликов</span>
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
                                    <div class="about-image-block">
                                        <img src="assets/img/dop-page/itog-3.svg" alt="image" class="about-item__img">
                                    </div>
                                    <!-- /.about-image-block -->
                                    <div class="about-info">


                                        <div class="tarif-off-part">
                                            <div class="tarif-off-blue">Из них, вы приняли:</div>
                                            <!-- /.tarif-off-blue -->
                                            <div class="about-info__title">

                                                10
                                                <span class="about-info__plus">моряков</span>
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
                                    <div class="about-image-block">
                                        <img src="assets/img/dop-page/itog-4.svg" alt="image" class="about-item__img">
                                    </div>
                                    <!-- /.about-image-block -->
                                    <div class="about-info">
                                        <div class="about-info">
                                            <div class="tarif-off-part">
                                                <div class="tarif-off-blue">Вы отправили:</div>
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


                                </div>
                                <!-- /.about-item -->
                                <div class="about-item">
                                    <div class="about-image-block">
                                        <img src="assets/img/about/icon-4.svg" alt="image" class="about-item__img">
                                    </div>
                                    <!-- /.about-image-block -->
                                    <div class="about-info">
                                        <div class="about-info">


                                            <div class="tarif-off-part">
                                                <div class="tarif-off-blue">Ваше предложение приняли:</div>
                                                <!-- /.tarif-off-blue -->
                                                <div class="about-info__title">

                                                    10
                                                    <span class="about-info__plus">моряков</span>
                                                    <!-- /.about-info__plus -->
                                                </div>
                                                <!-- /.about-info__title -->
                                            </div>
                                            <!-- /.tarif-off-part -->
                                        </div>
                                        <!-- /.about-info -->

                                    </div>


                                </div>
                                <!-- /.about-item -->
                            </div>
                            <!-- /.about-block -->
                        </div>
                        <div class="tarif-tab" v-if="lm" id="tab2">

                            <div class="about-block tarif-block-off">
                                <div class="about-item">
                                    <div class="about-image-block">
                                        <img src="assets/img/dop-page/itog-1.svg" alt="image" class="about-item__img">
                                    </div>
                                    <!-- /.about-image-block -->
                                    <div class="about-info">
                                        <div class="tarif-off-part">
                                            <div class="tarif-off-blue">Итого принято:</div>
                                            <!-- /.tarif-off-blue -->
                                            <div class="about-info__title">

                                                20
                                                <span class="about-info__plus">моряков</span>
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
                                    <div class="about-image-block">
                                        <img src="assets/img/dop-page/itog-2.svg" alt="image" class="about-item__img">
                                    </div>
                                    <!-- /.about-image-block -->
                                    <div class="about-info">
                                        <div class="tarif-off-part">
                                            <div class="tarif-off-blue">Итого опубликовано</div>
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
                            <!-- /.about-block -->
                        </div>
                        <!-- /.about-tab -->
                    </div>
                    <!-- /.tarif-block -->


                    <div class="tarif-top tarif-top-off tarif-top-end">
                        <h1 class="set-title about-title">
                            По вакансиям:
                        </h1>
                        <!-- /.about-title -->

                        <ul class="tarif-list" id="tabNav1">
                            <li><a @click="at2=true,lm2=false" :class="{ tactive: at2 }">За всё время</a></li>
                            <li><a @click="at2=false,lm2=true" :class="{ tactive: lm2 }">За последний месяц</a></li>

                        </ul>

                    </div>
                    <!-- /.tarif-top -->

                    <div id="tabsWrap1" class="tarif-block">
                        <div class="tarif-tab" v-if="at2" id="tab3">
                            <div class="stat-block">
                                <div class="stat-item">
                                    <div class="stat-top">
                                        <img src="assets/img/dop-page/stat-1.svg" alt="image" class="stat-top-img">

                                        <div class="stat-top-content">
                                            <div class="stat-top-title">
                                                Старший помощник капитана
                                                <span>от 23 дек 2023</span>
                                            </div>
                                            <!-- /.stat-top-title -->
                                            <div class="stat-top-subtitle">
                                                Вакансию просмотрели:
                                                <span>1200 раз</span>
                                            </div>
                                            <!-- /.stat-top-subtitle -->
                                        </div>
                                        <!-- /.stat-top-content -->
                                    </div>
                                    <!-- /.stat-top -->
                                    <div class="stat-part">
                                        <div class="stat-all">
                                            <div class="stat-all-blue">Итого, вы приняли:</div>
                                            <!-- /.stat-all-blue -->
                                            <div class="stat-all-number">10</div>
                                            <!-- /.stat-all-number -->
                                            <div class="stat-all-title">моряков</div>
                                            <!-- /.stat-all-title -->
                                        </div>
                                        <!-- /.stat-all -->

                                        <div class="stat-info">
                                            <div class="stat-info-item">
                                                <div class="stat-blue">Поступило:</div>
                                                <!-- /.stat-blue -->
                                                <div class="stat-red">10 <span>откликов</span>
                                                </div>
                                                <!-- /.stat-red -->
                                            </div>
                                            <!-- /.stat-info-item -->


                                            <div class="stat-info-item">
                                                <div class="stat-blue">Сделали рассылку на:</div>
                                                <!-- /.stat-blue -->
                                                <div class="stat-red">500 <span>предложений</span>
                                                </div>
                                                <!-- /.stat-red -->
                                            </div>
                                            <!-- /.stat-info-item -->


                                            <div class="stat-info-item">
                                                <div class="stat-blue">Индивидуально отправили:</div>
                                                <!-- /.stat-blue -->
                                                <div class="stat-red">50 <span>предложений</span>
                                                </div>
                                                <!-- /.stat-red -->
                                            </div>
                                            <!-- /.stat-info-item -->

                                            <div class="stat-info-item">
                                                <div class="stat-blue">По откликам, принято:</div>
                                                <!-- /.stat-blue -->
                                                <div class="stat-red">2 <span>моряка</span>
                                                </div>
                                                <!-- /.stat-red -->
                                            </div>
                                            <!-- /.stat-info-item -->


                                            <div class="stat-info-item">
                                                <div class="stat-blue">На рассылку откликнулось:</div>
                                                <!-- /.stat-blue -->
                                                <div class="stat-red">5 <span>моряков</span>
                                                </div>
                                                <!-- /.stat-red -->
                                            </div>
                                            <!-- /.stat-info-item -->

                                            <div class="stat-info-item">
                                                <div class="stat-blue">Ваше предложение приняло:</div>
                                                <!-- /.stat-blue -->
                                                <div class="stat-red">3 <span>моряка</span>
                                                </div>
                                                <!-- /.stat-red -->
                                            </div>
                                            <!-- /.stat-info-item -->
                                        </div>
                                        <!-- /.stat-info -->
                                    </div>
                                    <!-- /.stat-part -->

                                </div>
                                <!-- /.stat-item -->


                                <div class="stat-item">
                                    <div class="stat-top">
                                        <img src="assets/img/dop-page/stat-2.svg" alt="image" class="stat-top-img">

                                        <div class="stat-top-content">
                                            <div class="stat-top-title">
                                                Повар
                                                <span>от 23 дек 2023</span>
                                            </div>
                                            <!-- /.stat-top-title -->
                                            <div class="stat-top-subtitle">
                                                Вакансию просмотрели:
                                                <span>1200 раз</span>
                                            </div>
                                            <!-- /.stat-top-subtitle -->
                                        </div>
                                        <!-- /.stat-top-content -->
                                    </div>
                                    <!-- /.stat-top -->
                                    <div class="stat-part">
                                        <div class="stat-all">
                                            <div class="stat-all-blue">Итого, вы приняли:</div>
                                            <!-- /.stat-all-blue -->
                                            <div class="stat-all-number">10</div>
                                            <!-- /.stat-all-number -->
                                            <div class="stat-all-title">моряков</div>
                                            <!-- /.stat-all-title -->
                                        </div>
                                        <!-- /.stat-all -->

                                        <div class="stat-info">
                                            <div class="stat-info-item">
                                                <div class="stat-blue">Поступило:</div>
                                                <!-- /.stat-blue -->
                                                <div class="stat-red">10 <span>откликов</span>
                                                </div>
                                                <!-- /.stat-red -->
                                            </div>
                                            <!-- /.stat-info-item -->


                                            <div class="stat-info-item">
                                                <div class="stat-blue">Сделали рассылку на:</div>
                                                <!-- /.stat-blue -->
                                                <div class="stat-red">500 <span>предложений</span>
                                                </div>
                                                <!-- /.stat-red -->
                                            </div>
                                            <!-- /.stat-info-item -->


                                            <div class="stat-info-item">
                                                <div class="stat-blue">Индивидуально отправили:</div>
                                                <!-- /.stat-blue -->
                                                <div class="stat-red">50 <span>предложений</span>
                                                </div>
                                                <!-- /.stat-red -->
                                            </div>
                                            <!-- /.stat-info-item -->

                                            <div class="stat-info-item">
                                                <div class="stat-blue">По откликам, принято:</div>
                                                <!-- /.stat-blue -->
                                                <div class="stat-red">2 <span>моряка</span>
                                                </div>
                                                <!-- /.stat-red -->
                                            </div>
                                            <!-- /.stat-info-item -->


                                        </div>
                                        <!-- /.stat-info -->
                                    </div>
                                    <!-- /.stat-part -->

                                </div>
                                <!-- /.stat-item -->


                                <div class="stat-item">
                                    <div class="stat-top">
                                        <img src="assets/img/dop-page/stat-1.svg" alt="image" class="stat-top-img">

                                        <div class="stat-top-content">
                                            <div class="stat-top-title">
                                                Старший помощник капитана
                                                <span>от 23 дек 2023</span>
                                            </div>
                                            <!-- /.stat-top-title -->
                                            <div class="stat-top-subtitle">
                                                Вакансию просмотрели:
                                                <span>1200 раз</span>
                                            </div>
                                            <!-- /.stat-top-subtitle -->
                                        </div>
                                        <!-- /.stat-top-content -->
                                    </div>
                                    <!-- /.stat-top -->
                                    <div class="stat-part">
                                        <div class="stat-all">
                                            <div class="stat-all-blue">Итого, вы приняли:</div>
                                            <!-- /.stat-all-blue -->
                                            <div class="stat-all-number">10</div>
                                            <!-- /.stat-all-number -->
                                            <div class="stat-all-title">моряков</div>
                                            <!-- /.stat-all-title -->
                                        </div>
                                        <!-- /.stat-all -->

                                        <div class="stat-info">
                                            <div class="stat-info-item">
                                                <div class="stat-blue">Поступило:</div>
                                                <!-- /.stat-blue -->
                                                <div class="stat-red">10 <span>откликов</span>
                                                </div>
                                                <!-- /.stat-red -->
                                            </div>
                                            <!-- /.stat-info-item -->


                                            <div class="stat-info-item">
                                                <div class="stat-blue">Сделали рассылку на:</div>
                                                <!-- /.stat-blue -->
                                                <div class="stat-red">500 <span>предложений</span>
                                                </div>
                                                <!-- /.stat-red -->
                                            </div>
                                            <!-- /.stat-info-item -->


                                            <div class="stat-info-item">
                                                <div class="stat-blue">Индивидуально отправили:</div>
                                                <!-- /.stat-blue -->
                                                <div class="stat-red">50 <span>предложений</span>
                                                </div>
                                                <!-- /.stat-red -->
                                            </div>
                                            <!-- /.stat-info-item -->

                                            <div class="stat-info-item">
                                                <div class="stat-blue">По откликам, принято:</div>
                                                <!-- /.stat-blue -->
                                                <div class="stat-red">2 <span>моряка</span>
                                                </div>
                                                <!-- /.stat-red -->
                                            </div>
                                            <!-- /.stat-info-item -->


                                            <div class="stat-info-item">
                                                <div class="stat-blue">На рассылку откликнулось:</div>
                                                <!-- /.stat-blue -->
                                                <div class="stat-red">5 <span>моряков</span>
                                                </div>
                                                <!-- /.stat-red -->
                                            </div>
                                            <!-- /.stat-info-item -->

                                            <div class="stat-info-item">
                                                <div class="stat-blue">Ваше предложение приняло:</div>
                                                <!-- /.stat-blue -->
                                                <div class="stat-red">3 <span>моряка</span>
                                                </div>
                                                <!-- /.stat-red -->
                                            </div>
                                            <!-- /.stat-info-item -->
                                        </div>
                                        <!-- /.stat-info -->
                                    </div>
                                    <!-- /.stat-part -->

                                </div>
                                <!-- /.stat-item -->

                                <button class="stat-button">
                                    <img src="assets/img/dop-page/white-plus.svg" alt="img" class="stat-button-icon">
                                    <div class="stat-button-title">Загрузить еще
                                        <span class="stat-button-num">(6)</span>
                                        <!-- /.stat-button-num -->
                                    </div>
                                    <!-- /.stat-button-title -->

                                </button>
                                <!-- /.stat-button -->
                            </div>
                            <!-- /.stat-block -->
                        </div>
                        <div class="tarif-tab" v-if="lm2" id="tab4">
                            <div class="stat-block">
                                <div class="stat-item">
                                    <div class="stat-top">
                                        <img src="assets/img/dop-page/stat-1.svg" alt="image" class="stat-top-img">

                                        <div class="stat-top-content">
                                            <div class="stat-top-title">
                                                Старший помощник капитана
                                                <span>от 23 дек 2023</span>
                                            </div>
                                            <!-- /.stat-top-title -->
                                            <div class="stat-top-subtitle">
                                                Вакансию просмотрели:
                                                <span>1200 раз</span>
                                            </div>
                                            <!-- /.stat-top-subtitle -->
                                        </div>
                                        <!-- /.stat-top-content -->
                                    </div>
                                    <!-- /.stat-top -->
                                    <div class="stat-part">
                                        <div class="stat-all">
                                            <div class="stat-all-blue">Итого, вы приняли:</div>
                                            <!-- /.stat-all-blue -->
                                            <div class="stat-all-number">10</div>
                                            <!-- /.stat-all-number -->
                                            <div class="stat-all-title">моряков</div>
                                            <!-- /.stat-all-title -->
                                        </div>
                                        <!-- /.stat-all -->

                                        <div class="stat-info">
                                            <div class="stat-info-item">
                                                <div class="stat-blue">Поступило:</div>
                                                <!-- /.stat-blue -->
                                                <div class="stat-red">10 <span>откликов</span>
                                                </div>
                                                <!-- /.stat-red -->
                                            </div>
                                            <!-- /.stat-info-item -->


                                            <div class="stat-info-item">
                                                <div class="stat-blue">Сделали рассылку на:</div>
                                                <!-- /.stat-blue -->
                                                <div class="stat-red">500 <span>предложений</span>
                                                </div>
                                                <!-- /.stat-red -->
                                            </div>
                                            <!-- /.stat-info-item -->


                                            <div class="stat-info-item">
                                                <div class="stat-blue">Индивидуально отправили:</div>
                                                <!-- /.stat-blue -->
                                                <div class="stat-red">50 <span>предложений</span>
                                                </div>
                                                <!-- /.stat-red -->
                                            </div>
                                            <!-- /.stat-info-item -->

                                            <div class="stat-info-item">
                                                <div class="stat-blue">По откликам, принято:</div>
                                                <!-- /.stat-blue -->
                                                <div class="stat-red">2 <span>моряка</span>
                                                </div>
                                                <!-- /.stat-red -->
                                            </div>
                                            <!-- /.stat-info-item -->


                                            <div class="stat-info-item">
                                                <div class="stat-blue">На рассылку откликнулось:</div>
                                                <!-- /.stat-blue -->
                                                <div class="stat-red">5 <span>моряков</span>
                                                </div>
                                                <!-- /.stat-red -->
                                            </div>
                                            <!-- /.stat-info-item -->

                                            <div class="stat-info-item">
                                                <div class="stat-blue">Ваше предложение приняло:</div>
                                                <!-- /.stat-blue -->
                                                <div class="stat-red">3 <span>моряка</span>
                                                </div>
                                                <!-- /.stat-red -->
                                            </div>
                                            <!-- /.stat-info-item -->
                                        </div>
                                        <!-- /.stat-info -->
                                    </div>
                                    <!-- /.stat-part -->

                                </div>
                                <!-- /.stat-item -->


                            </div>
                            <!-- /.stat-block -->
                        </div>
                        <!-- /.about-tab -->
                    </div>
                    <!-- /.tarif-block -->
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
        lm: false,
        at2: true,
        lm2: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tarif-list a.tactive {
    border-bottom: 4px solid #3b45a9;
    color: #3b45a9;
  }
  .tarif-tab {
    display: flex;
  }
</style>