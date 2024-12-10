<template>
    <NuxtLayout name="default-hero" class="main cabinet">
        <div>
            <AfHeaderColor/>
        </div>
        <section id="responses">
            <div class="container">
                <div class="tabs">
                    <div class="tab-header">
                        <div class="tab-label" @click="tab1=true,tab2=false" :class="{ active: tab1 }">Избранные моряки</div>
                        <div class="tab-label" @click="tab1=false,tab2=true" :class="{ active: tab2 }">Черный список</div>
                    </div>

                    <div class="tab-body" v-if="tab1">

                        <div class="vacancy-list">
                            <div class="vacancy vacancy-item-off">
                                <div class="vacancy-top-off">
                                    <div class="vacancy__logo">
                                        <img src="assets/img/search/man.png" alt="logo">
                                    </div>
                                    <div class="vacancy-content-off">
                                        <div class="vacancy__label">Жагров Денис Федорович
                                            <img src="assets/img/dop-page/icon-red.svg" alt="image"></div>
                                        <div class="vacancy__meta">
                                            <div class="vacancy__info">
                                                <div class="vi-item">
                                                    <div class="vacancy-subwork-off">
                                                        Помощник капитана по радиоэлектронике
                                                    </div>
                                                    <!-- /.vacancy-subwork-off -->
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <!-- /.vacanyc-content-off -->
                                </div>
                                <!-- /.vacancy-top-off -->
                                <div class="vacancy__info">
                                    <div class="vi-item">
                                        <div class="vi-label">Минимальная зарплата:</div>
                                        <strong>2000 - 2300 USD</strong>
                                    </div>
                                    <div class="vi-item">
                                        <div class="vi-label">Местонахождение:</div>
                                        Верхненовокутлумбетьево, Россия
                                    </div>
                                    <div class="vi-item">
                                        <div class="vi-label">Работал на судах:</div>
                                        Контейнеровозы,
                                        танкеры, буксиры, <a>еще 3</a>
                                    </div>
                                </div>

                                <div class="vacancy__buttons">
                                    <div class="vacancy__button red"><img src="assets/img/dop-page/red-icon-sailor.svg" alt="image">Предложить
                                        <br>вакансию</div>
                                    <a href="/aboui-sailor" class="vacancy__button red"><img src="assets/img/dop-page/red-info.svg" alt="">
                                        Подробнее
                                        <br>о моряке
                                    </a>
                                    <div class="vacancy__button"><img src="assets/img/responses/cancel.png" alt="">
                                        Убрать<br>
                                        из избранного
                                    </div>
                                </div>

                                <div class="vacancy__date new vacancy-dateoff">
                                    <div class="vacancy-dateoff-text">ищу работу</div>

                                </div>

                            </div>
                            <div class="vacancy vacancy-item-off">
                                <div class="vacancy-top-off">
                                    <div class="vacancy__logo">
                                        <img src="assets/img/search/man.png" alt="logo">
                                    </div>
                                    <div class="vacancy-content-off">
                                        <div class="vacancy__label">Жагров Денис Федорович
                                            <img src="assets/img/dop-page/icon-red.svg" alt="image"></div>
                                        <div class="vacancy__meta">
                                            <div class="vacancy__info">
                                                <div class="vi-item">
                                                    <div class="vacancy-subwork-off">
                                                        Помощник капитана по радиоэлектронике
                                                    </div>
                                                    <!-- /.vacancy-subwork-off -->
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <!-- /.vacanyc-content-off -->
                                </div>
                                <!-- /.vacancy-top-off -->
                                <div class="vacancy__info">
                                    <div class="vi-item">
                                        <div class="vi-label">Минимальная зарплата:</div>
                                        <strong>2000 - 2300 USD</strong>
                                    </div>
                                    <div class="vi-item">
                                        <div class="vi-label">Местонахождение:</div>
                                        Верхненовокутлумбетьево, Россия
                                    </div>
                                    <div class="vi-item">
                                        <div class="vi-label">Работал на судах:</div>
                                        Контейнеровозы,
                                        танкеры, буксиры, <a>еще 3</a>
                                    </div>
                                </div>

                                <div class="vacancy__buttons">
                                    <div class="vacancy__button red"><img src="assets/img/dop-page/red-icon-sailor.svg" alt="image">Предложить
                                        <br>вакансию</div>
                                    <a href="/aboui-sailor" class="vacancy__button red"><img src="assets/img/dop-page/red-info.svg" alt="">
                                        Подробнее
                                        <br>о моряке
                                    </a>
                                    <div class="vacancy__button"><img src="assets/img/responses/cancel.png" alt="">
                                        Убрать<br>
                                        из избранного
                                    </div>
                                </div>

                                <div class="vacancy__date new vacancy-dateoff">
                                    <div class="vacancy-dateoff-text">ищу работу</div>

                                </div>

                            </div>
                            <div class="vacancy vacancy-item-off">
                                <div class="vacancy-top-off">
                                    <div class="vacancy__logo">
                                        <img src="assets/img/search/man.png" alt="logo">
                                    </div>
                                    <div class="vacancy-content-off">
                                        <div class="vacancy__label">Жагров Денис Федорович
                                            <img src="assets/img/dop-page/icon-red.svg" alt="image"></div>
                                        <div class="vacancy__meta">
                                            <div class="vacancy__info">
                                                <div class="vi-item">
                                                    <div class="vacancy-subwork-off">
                                                        Помощник капитана по радиоэлектронике
                                                    </div>
                                                    <!-- /.vacancy-subwork-off -->
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <!-- /.vacanyc-content-off -->
                                </div>
                                <!-- /.vacancy-top-off -->
                                <div class="vacancy__info">
                                    <div class="vi-item">
                                        <div class="vi-label">Минимальная зарплата:</div>
                                        <strong>2000 - 2300 USD</strong>
                                    </div>
                                    <div class="vi-item">
                                        <div class="vi-label">Местонахождение:</div>
                                        Верхненовокутлумбетьево, Россия
                                    </div>
                                    <div class="vi-item">
                                        <div class="vi-label">Работал на судах:</div>
                                        Контейнеровозы,
                                        танкеры, буксиры, <a>еще 3</a>
                                    </div>
                                </div>

                                <div class="vacancy__buttons">
                                    <div class="vacancy__button red"><img src="assets/img/dop-page/red-icon-sailor.svg" alt="image">Предложить
                                        <br>вакансию</div>
                                    <a href="/aboui-sailor" class="vacancy__button red"><img src="assets/img/dop-page/red-info.svg" alt="">
                                        Подробнее
                                        <br>о моряке
                                    </a>
                                    <div class="vacancy__button"><img src="assets/img/responses/cancel.png" alt="">
                                        Убрать<br>
                                        из избранного
                                    </div>
                                </div>

                                <div class="vacancy__date new vacancy-dateoff">
                                    <div class="vacancy-dateoff-text">ищу работу</div>

                                </div>

                            </div>

                            <div class="vacancy vacancy-item-off">
                                <div class="vacancy-top-off">
                                    <div class="vacancy__logo">
                                        <img src="assets/img/search/man.png" alt="logo">
                                    </div>
                                    <div class="vacancy-content-off">
                                        <div class="vacancy__label">Жагров Денис Федорович
                                            <img src="assets/img/dop-page/icon-red.svg" alt="image"></div>
                                        <div class="vacancy__meta">
                                            <div class="vacancy__info">
                                                <div class="vi-item">
                                                    <div class="vacancy-subwork-off">
                                                        Помощник капитана по радиоэлектронике
                                                    </div>
                                                    <!-- /.vacancy-subwork-off -->
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <!-- /.vacanyc-content-off -->
                                </div>
                                <!-- /.vacancy-top-off -->
                                <div class="vacancy__info">
                                    <div class="vi-item">
                                        <div class="vi-label">Минимальная зарплата:</div>
                                        <strong>2000 - 2300 USD</strong>
                                    </div>
                                    <div class="vi-item">
                                        <div class="vi-label">Местонахождение:</div>
                                        Верхненовокутлумбетьево, Россия
                                    </div>
                                    <div class="vi-item">
                                        <div class="vi-label">Работал на судах:</div>
                                        Контейнеровозы,
                                        танкеры, буксиры, <a>еще 3</a>
                                    </div>
                                </div>

                                <div class="vacancy__buttons">
                                    <div class="vacancy__button red"><img src="assets/img/dop-page/red-icon-sailor.svg" alt="image">Предложить
                                        <br>вакансию</div>
                                    <a href="/aboui-sailor" class="vacancy__button red"><img src="assets/img/dop-page/red-info.svg" alt="">
                                        Подробнее
                                        <br>о моряке
                                    </a>
                                    <div class="vacancy__button"><img src="assets/img/responses/cancel.png" alt="">
                                        Убрать<br>
                                        из избранного
                                    </div>
                                </div>

                                <div class="vacancy__date new vacancy-dateoff vacancy__date-blue">
                                    <div class="vacancy-dateoff-text">Рассмотрю предложения</div>

                                </div>

                            </div>
                            <div class="vacancy vacancy-item-off">
                                <div class="vacancy-top-off">
                                    <div class="vacancy__logo">
                                        <img src="assets/img/search/man.png" alt="logo">
                                    </div>
                                    <div class="vacancy-content-off">
                                        <div class="vacancy__label">Жагров Денис Федорович
                                            <img src="assets/img/dop-page/icon-red.svg" alt="image"></div>
                                        <div class="vacancy__meta">
                                            <div class="vacancy__info">
                                                <div class="vi-item">
                                                    <div class="vacancy-subwork-off">
                                                        Помощник капитана по радиоэлектронике
                                                    </div>
                                                    <!-- /.vacancy-subwork-off -->
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <!-- /.vacanyc-content-off -->
                                </div>
                                <!-- /.vacancy-top-off -->
                                <div class="vacancy__info">
                                    <div class="vi-item">
                                        <div class="vi-label">Минимальная зарплата:</div>
                                        <strong>2000 - 2300 USD</strong>
                                    </div>
                                    <div class="vi-item">
                                        <div class="vi-label">Местонахождение:</div>
                                        Верхненовокутлумбетьево, Россия
                                    </div>
                                    <div class="vi-item">
                                        <div class="vi-label">Работал на судах:</div>
                                        Контейнеровозы,
                                        танкеры, буксиры, <a>еще 3</a>
                                    </div>
                                </div>

                                <div class="vacancy__buttons">
                                    <div class="vacancy__button red"><img src="assets/img/dop-page/red-icon-sailor.svg" alt="image">Предложить
                                        <br>вакансию</div>
                                    <a href="/aboui-sailor" class="vacancy__button red"><img src="assets/img/dop-page/red-info.svg" alt="">
                                        Подробнее
                                        <br>о моряке
                                    </a>
                                    <div class="vacancy__button"><img src="assets/img/responses/cancel.png" alt="">
                                        Убрать<br>
                                        из избранного
                                    </div>
                                </div>

                                <div class="vacancy__date new vacancy-dateoff vacancy__date-blue">
                                    <div class="vacancy-dateoff-text">Рассмотрю предложения</div>

                                </div>

                            </div>


                            <div class="vacancy vacancy-item-off">
                                <div class="vacancy-top-off">
                                    <div class="vacancy__logo">
                                        <img src="assets/img/search/man.png" alt="logo">
                                    </div>
                                    <div class="vacancy-content-off">
                                        <div class="vacancy__label">Жагров Денис Федорович
                                            <img src="assets/img/dop-page/icon-red.svg" alt="image"></div>
                                        <div class="vacancy__meta">
                                            <div class="vacancy__info">
                                                <div class="vi-item">
                                                    <div class="vacancy-subwork-off">
                                                        Помощник капитана по радиоэлектронике
                                                    </div>
                                                    <!-- /.vacancy-subwork-off -->
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <!-- /.vacanyc-content-off -->
                                </div>
                                <!-- /.vacancy-top-off -->
                                <div class="vacancy__info">
                                    <div class="vi-item">
                                        <div class="vi-label">Минимальная зарплата:</div>
                                        <strong>2000 - 2300 USD</strong>
                                    </div>
                                    <div class="vi-item">
                                        <div class="vi-label">Местонахождение:</div>
                                        Верхненовокутлумбетьево, Россия
                                    </div>
                                    <div class="vi-item">
                                        <div class="vi-label">Работал на судах:</div>
                                        Контейнеровозы,
                                        танкеры, буксиры, <a>еще 3</a>
                                    </div>
                                </div>

                                <div class="vacancy__buttons">
                                    <div class="vacancy__button red"><img src="assets/img/dop-page/red-icon-sailor.svg" alt="image">Предложить
                                        <br>вакансию</div>
                                    <a href="/aboui-sailor" class="vacancy__button red"><img src="assets/img/dop-page/red-info.svg" alt="">
                                        Подробнее
                                        <br>о моряке
                                    </a>
                                    <div class="vacancy__button"><img src="assets/img/responses/cancel.png" alt="">
                                        Убрать<br>
                                        из избранного
                                    </div>
                                </div>

                                <div class="vacancy__date">
                                    <div class="vacancy-dateoff-text">Рассмотрю предложения</div>

                                </div>

                            </div>






                        </div>
                    </div>
                    <div class="tab-body" v-if="tab2">

                        <div class="vacancy-list">


                            <div class="vacancy vacancy-item-off">
                                <div class="vacancy-top-off">
                                    <div class="vacancy__logo">
                                        <img src="assets/img/search/man.png" alt="logo">
                                    </div>
                                    <div class="vacancy-content-off">
                                        <div class="vacancy__label">Жагров Денис Федорович
                                        </div>
                                        <div class="vacancy__meta">
                                            <div class="vacancy__info">


                                                <div class="vi-item">
                                                    <div class="vi-label">Комментарий</div>
                                                    Не сошлись характером
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <!-- /.vacanyc-content-off -->
                                </div>
                                <!-- /.vacancy-top-off -->

                                <div class="vacancy__buttons">
                                    <a href="/aboui-sailor" class="vacancy__button red"><img src="assets/img/dop-page/red-info.svg" alt="image">
                                        Подробнее о моряке
                                    </a>

                                    <div class="vacancy__button"><img src="assets/img/responses/cancel.png" alt="">
                                        Убрать из черного списка
                                    </div>
                                </div>

                                <div class="vacancy__date">
                                    <div class="vacancy-dateoff-text">Добавлен  -  23 дек 2024</div>

                                </div>

                            </div>


                            <div class="vacancy vacancy-item-off">
                                <div class="vacancy-top-off">
                                    <div class="vacancy__logo">
                                        <img src="assets/img/search/man.png" alt="logo">
                                    </div>
                                    <div class="vacancy-content-off">
                                        <div class="vacancy__label">Жагров Денис Федорович
                                        </div>
                                        <div class="vacancy__meta">
                                            <div class="vacancy__info">


                                                <div class="vi-item">
                                                    <div class="vi-label">Комментарий</div>
                                                    Хам и редиска
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <!-- /.vacanyc-content-off -->
                                </div>
                                <!-- /.vacancy-top-off -->

                                <div class="vacancy__buttons">
                                    <a href="/aboui-sailor" class="vacancy__button red"><img src="assets/img/dop-page/red-info.svg" alt="image">
                                        Подробнее о моряке
                                    </a>

                                    <div class="vacancy__button"><img src="assets/img/responses/cancel.png" alt="">
                                        Убрать из черного списка
                                    </div>
                                </div>

                                <div class="vacancy__date">
                                    <div class="vacancy-dateoff-text">Добавлен  -  23 дек 2024</div>

                                </div>

                            </div>

                            <div class="vacancy vacancy-item-off">
                                <div class="vacancy-top-off">
                                    <div class="vacancy__logo">
                                        <img src="assets/img/search/man.png" alt="logo">
                                    </div>
                                    <div class="vacancy-content-off">
                                        <div class="vacancy__label">Жагров Денис Федорович
                                        </div>
                                        <div class="vacancy__meta">
                                            <div class="vacancy__info">


                                                <div class="vi-item">
                                                    <div class="vi-label">Комментарий</div>
                                                    Не актуально для рассылке
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <!-- /.vacanyc-content-off -->
                                </div>
                                <!-- /.vacancy-top-off -->

                                <div class="vacancy__buttons">
                                    <a href="/aboui-sailor" class="vacancy__button red"><img src="assets/img/dop-page/red-info.svg" alt="image">
                                        Подробнее о моряке
                                    </a>

                                    <div class="vacancy__button"><img src="assets/img/responses/cancel.png" alt="">
                                        Убрать из черного списка
                                    </div>
                                </div>

                                <div class="vacancy__date">
                                    <div class="vacancy-dateoff-text">Добавлен  -  23 дек 2024</div>

                                </div>

                            </div>

                            <div class="vacancy vacancy-item-off">
                                <div class="vacancy-top-off">
                                    <div class="vacancy__logo">
                                        <img src="assets/img/search/man.png" alt="logo">
                                    </div>
                                    <div class="vacancy-content-off">
                                        <div class="vacancy__label">Жагров Денис Федорович
                                        </div>
                                        <div class="vacancy__meta">
                                            <div class="vacancy__info">


                                                <div class="vi-item">
                                                    <div class="vi-label">Комментарий</div>
                                                    Хам и редиска
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <!-- /.vacanyc-content-off -->
                                </div>
                                <!-- /.vacancy-top-off -->

                                <div class="vacancy__buttons">
                                    <a href="/aboui-sailor" class="vacancy__button red"><img src="assets/img/dop-page/red-info.svg" alt="image">
                                        Подробнее о моряке
                                    </a>

                                    <div class="vacancy__button"><img src="assets/img/responses/cancel.png" alt="">
                                        Убрать из черного списка
                                    </div>
                                </div>

                                <div class="vacancy__date">
                                    <div class="vacancy-dateoff-text">Добавлен  -  23 дек 2024</div>

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

<script >
    export default {
        data() {
            return {
                tab1: true,
                tab2: false
            }
        },
        mounted() {
            document.body.classList.add('bg-white');
        }
    }

</script>

<style lang="scss" scoped>
  .vacancy__info {
    grid-template-columns: repeat(2, auto);

    .vi-item {
      &:last-child {
        grid-column: 2 span;
      }
      /*a {
        padding-left: 5px;
      }*/
    }
  }
</style>