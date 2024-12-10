<template>
    <NuxtLayout name="default-hero">
        <div class="section-hero section-hero-mal">
            <AfCustomHeader/>
            <div class="hero hero-mal">
                <div class="container">
                    <div class="hero-block hero-block-mal">
                        <div class="vabout-top-block">
                            <a href="#" class="vabout-cursor">
                                ←
                            </a>
                            <!-- /.vabout-cursor -->
                            <div class="vabout-pag">
                                <a href="../index.html" class="vabout-pag-link">Ко всем результатам рассылок</a>
                                <!-- /.vabout-pag-link -->

                            </div>
                            <!-- /.vabout-pag -->
                        </div>
                        <h1 class="hero-title">
                            Результаты рассылки от 23 дек 2023
                        </h1>

                        <div class="hero-title-date">
                            Старший помощник капитана
                        </div>
                    </div>
                    <!-- /.hero-block -->
                </div>
                <!-- /.container -->
            </div>
        </div>
        <section class="section-flot">
            <div class="container">
                <div class="let">
                    <div class="let-block let-block2">
                        <div class="let-part">
                            <div class="let-top">

                                <div class="let-top-title">
                                    Было отправлено морякам со статусом
                                    «Ищу работу»: <span>16 предложений</span>

                                </div>
                                <!-- /.let-top-title -->


                            </div>
                            <!-- /.let-top -->


                            <div class="tabs let-tabs">
                                <div class="tab-header">
                                    <div class="tab-label" @click="tab1=true,tab2=false,tab3=false" :class="{ active: tab1 }">Принято</div>
                                    <div class="tab-label" @click="tab1=false,tab2=true,tab3=false" :class="{ active: tab2 }">Отклонено</div>
                                    <div class="tab-label" @click="tab1=false,tab2=false,tab3=true" :class="{ active: tab3 }">Не определилось</div>
                                </div>

                                <div v-if="tab1" class="tab-body">
                                    <div class="mal-table-block let-table-block let-table-block2">
                                        <table class="his-table let-table let-table2">
                                            <tbody>
                                            <tr class="his-tr">
                                                <th class="his-th">№</th>
                                                
                                                <th class="his-th">ФИО</th>
                                                
                                                <th class="his-th">Должность</th>
                                                
                                                <th class="his-th">Мин. зарплата</th>
                                                
                                                <th class="his-th">Местонахождение</th>
                                                
                                                <th class="his-th">Работал на судах</th>
                                                
                                                <th class="his-th">Результат</th>
                                                
                                            </tr>
                                            <!-- /.his-tr -->

                                            <tr class="his-tr let-tr-red">

                                                <td class="his-td">
                                                    <div class="let-td-num">
                                                        1
                                                    </div>
                                                    <!-- /.mal-td-numb -->
                                                </td>
                                                
                                                <td class="his-td">
                                                    <div class="let-td-name">
                                                        Жагров Денис
                                                        Федорович
                                                    </div>
                                                    <!-- /.let-td-name -->
                                                </td>
                                                
                                                <td class="his-td">Помощник капитана
                                                    по радиоэлектронике
                                                </td>
                                                
                                                <td class="his-td">2000 - 2300 USD</td>
                                                
                                                <td class="his-td">
                                                    Верхненовокутлумбетьево,
                                                    Россия
                                                </td>
                                                
                                                <td class="his-td">
                                                    Контейнеровозы,
                                                    танкеры, <span class="let-td-link">еще 3</span>
                                                </td>
                                                
                                                <td class="his-td">
                                                    <div class="let-td-button">
                                                        Принято
                                                    </div>
                                                    <!-- /.let-td-button -->
                                                </td>
                                                
                                            </tr>
                                            <tr class="his-tr let-tr-red">

                                                <td class="his-td">
                                                    <div class="let-td-num">
                                                        2
                                                    </div>
                                                    <!-- /.mal-td-numb -->
                                                </td>
                                                
                                                <td class="his-td">
                                                    <div class="let-td-name">
                                                        Жагров Денис
                                                        Федорович
                                                    </div>
                                                    <!-- /.let-td-name -->
                                                </td>
                                                
                                                <td class="his-td">Помощник капитана
                                                    по радиоэлектронике
                                                </td>
                                                
                                                <td class="his-td">2000 - 2300 USD</td>
                                                
                                                <td class="his-td">
                                                    Верхненовокутлумбетьево,
                                                    Россия
                                                </td>
                                                
                                                <td class="his-td">
                                                    Контейнеровозы,
                                                    танкеры, <span class="let-td-link">еще 3</span>
                                                </td>
                                                
                                                <td class="his-td">
                                                    <div class="let-td-button">
                                                        Принято
                                                    </div>
                                                    <!-- /.let-td-button -->
                                                </td>
                                                
                                            </tr>
                                            <tr class="his-tr let-tr-red">

                                                <td class="his-td">
                                                    <div class="let-td-num">
                                                        3
                                                    </div>
                                                    <!-- /.mal-td-numb -->
                                                </td>
                                                
                                                <td class="his-td">
                                                    <div class="let-td-name">
                                                        Жагров Денис
                                                        Федорович
                                                    </div>
                                                    <!-- /.let-td-name -->
                                                </td>
                                                
                                                <td class="his-td">Помощник капитана
                                                    по радиоэлектронике
                                                </td>
                                                
                                                <td class="his-td">2000 - 2300 USD</td>
                                                
                                                <td class="his-td">
                                                    Верхненовокутлумбетьево,
                                                    Россия
                                                </td>
                                                
                                                <td class="his-td">
                                                    Контейнеровозы,
                                                    танкеры, <span class="let-td-link">еще 3</span>
                                                </td>
                                                
                                                <td class="his-td">
                                                    <div class="let-td-button">
                                                        Принято
                                                    </div>
                                                    <!-- /.let-td-button -->
                                                </td>
                                                
                                            </tr>
                                            </tbody>
                                        </table>
                                        <!-- /.his-table -->
                                    </div>
                                </div>

                                <div v-if="tab2" class="tab-body">
                                    <div class="mal-table-block let-table-block let-table-block2">
                                        <table class="his-table let-table let-table2">
                                            <tbody>
                                            <tr class="his-tr">
                                                <th class="his-th">№</th>
                                                
                                                <th class="his-th">ФИО</th>
                                                
                                                <th class="his-th">Должность</th>
                                                
                                                <th class="his-th">Мин. зарплата</th>
                                                
                                                <th class="his-th">Местонахождение</th>
                                                
                                                <th class="his-th">Работал на судах</th>
                                                
                                                <th class="his-th">Результат</th>
                                                
                                            </tr>
                                            <!-- /.his-tr -->


                                            <tr class="his-tr let-tr-blue">

                                                <td class="his-td">
                                                    <div class="let-td-num">
                                                        1
                                                    </div>
                                                    <!-- /.mal-td-numb -->
                                                </td>
                                                
                                                <td class="his-td">
                                                    <div class="let-td-name">
                                                        Жагров Денис
                                                        Федорович
                                                    </div>
                                                    <!-- /.let-td-name -->
                                                </td>
                                                
                                                <td class="his-td">Помощник капитана
                                                    по радиоэлектронике
                                                </td>
                                                
                                                <td class="his-td">2000 - 2300 USD</td>
                                                
                                                <td class="his-td">
                                                    Верхненовокутлумбетьево,
                                                    Россия
                                                </td>
                                                
                                                <td class="his-td">
                                                    Контейнеровозы,
                                                    танкеры, <span class="let-td-link">еще 3</span>
                                                </td>
                                                
                                                <td class="his-td">
                                                    <div class="let-td-button">
                                                        Отклонено
                                                    </div>
                                                    <!-- /.let-td-button -->
                                                </td>
                                                
                                            </tr>


                                            <tr class="his-tr let-tr-blue">

                                                <td class="his-td">
                                                    <div class="let-td-num">
                                                        2
                                                    </div>
                                                    <!-- /.mal-td-numb -->
                                                </td>
                                                
                                                <td class="his-td">
                                                    <div class="let-td-name">
                                                        Жагров Денис
                                                        Федорович
                                                    </div>
                                                    <!-- /.let-td-name -->
                                                </td>
                                                
                                                <td class="his-td">Помощник капитана
                                                    по радиоэлектронике
                                                </td>
                                                
                                                <td class="his-td">2000 - 2300 USD</td>
                                                
                                                <td class="his-td">
                                                    Верхненовокутлумбетьево,
                                                    Россия
                                                </td>
                                                
                                                <td class="his-td">
                                                    Контейнеровозы,
                                                    танкеры, <span class="let-td-link">еще 3</span>
                                                </td>
                                                
                                                <td class="his-td">
                                                    <div class="let-td-button">
                                                        Отклонено
                                                    </div>
                                                    <!-- /.let-td-button -->
                                                </td>
                                                
                                            </tr>
                                            <tr class="his-tr let-tr-blue">

                                                <td class="his-td">
                                                    <div class="let-td-num">
                                                        3
                                                    </div>
                                                    <!-- /.mal-td-numb -->
                                                </td>
                                                
                                                <td class="his-td">
                                                    <div class="let-td-name">
                                                        Жагров Денис
                                                        Федорович
                                                    </div>
                                                    <!-- /.let-td-name -->
                                                </td>
                                                
                                                <td class="his-td">Помощник капитана
                                                    по радиоэлектронике
                                                </td>
                                                
                                                <td class="his-td">2000 - 2300 USD</td>
                                                
                                                <td class="his-td">
                                                    Верхненовокутлумбетьево,
                                                    Россия
                                                </td>
                                                
                                                <td class="his-td">
                                                    Контейнеровозы,
                                                    танкеры, <span class="let-td-link">еще 3</span>
                                                </td>
                                                
                                                <td class="his-td">
                                                    <div class="let-td-button">
                                                        Отклонено
                                                    </div>
                                                    <!-- /.let-td-button -->
                                                </td>
                                                
                                            </tr>


                                            </tbody>
                                        </table>
                                        <!-- /.his-table -->
                                    </div>
                                </div>

                                <div v-if="tab3" class="tab-body">
                                    <div class="mal-table-block let-table-block let-table-block2">
                                        <table class="his-table let-table let-table2">
                                            <tbody>
                                            <tr class="his-tr">
                                                <th class="his-th">№</th>
                                                
                                                <th class="his-th">ФИО</th>
                                                
                                                <th class="his-th">Должность</th>
                                                
                                                <th class="his-th">Мин. зарплата</th>
                                                
                                                <th class="his-th">Местонахождение</th>
                                                
                                                <th class="his-th">Работал на судах</th>
                                                
                                                <th class="his-th">Результат</th>
                                                
                                            </tr>
                                            <!-- /.his-tr -->


                                            <tr class="his-tr let-tr-gray">

                                                <td class="his-td">
                                                    <div class="let-td-num">
                                                        1
                                                    </div>
                                                    <!-- /.mal-td-numb -->
                                                </td>
                                                
                                                <td class="his-td">
                                                    <div class="let-td-name">
                                                        Жагров Денис
                                                        Федорович
                                                    </div>
                                                    <!-- /.let-td-name -->
                                                </td>
                                                
                                                <td class="his-td">Помощник капитана
                                                    по радиоэлектронике
                                                </td>
                                                
                                                <td class="his-td">2000 - 2300 USD</td>
                                                
                                                <td class="his-td">
                                                    Верхненовокутлумбетьево,
                                                    Россия
                                                </td>
                                                
                                                <td class="his-td">
                                                    Контейнеровозы,
                                                    танкеры, <span class="let-td-link">еще 3</span>
                                                </td>
                                                
                                                <td class="his-td">
                                                    <div class="let-td-button">
                                                        Не решил
                                                    </div>
                                                    <!-- /.let-td-button -->
                                                </td>
                                                
                                            </tr>

                                            <tr class="his-tr let-tr-gray">

                                                <td class="his-td">
                                                    <div class="let-td-num">
                                                        2
                                                    </div>
                                                    <!-- /.mal-td-numb -->
                                                </td>
                                                
                                                <td class="his-td">
                                                    <div class="let-td-name">
                                                        Жагров Денис
                                                        Федорович
                                                    </div>
                                                    <!-- /.let-td-name -->
                                                </td>
                                                
                                                <td class="his-td">Помощник капитана
                                                    по радиоэлектронике
                                                </td>
                                                
                                                <td class="his-td">2000 - 2300 USD</td>
                                                
                                                <td class="his-td">
                                                    Верхненовокутлумбетьево,
                                                    Россия
                                                </td>
                                                
                                                <td class="his-td">
                                                    Контейнеровозы,
                                                    танкеры, <span class="let-td-link">еще 3</span>
                                                </td>
                                                
                                                <td class="his-td">
                                                    <div class="let-td-button">
                                                        Не решил
                                                    </div>
                                                    <!-- /.let-td-button -->
                                                </td>
                                                
                                            </tr>
                                            <tr class="his-tr let-tr-gray">

                                                <td class="his-td">
                                                    <div class="let-td-num">
                                                        3
                                                    </div>
                                                    <!-- /.mal-td-numb -->
                                                </td>
                                                
                                                <td class="his-td">
                                                    <div class="let-td-name">
                                                        Жагров Денис
                                                        Федорович
                                                    </div>
                                                    <!-- /.let-td-name -->
                                                </td>
                                                
                                                <td class="his-td">Помощник капитана
                                                    по радиоэлектронике
                                                </td>
                                                
                                                <td class="his-td">2000 - 2300 USD</td>
                                                
                                                <td class="his-td">
                                                    Верхненовокутлумбетьево,
                                                    Россия
                                                </td>
                                                
                                                <td class="his-td">
                                                    Контейнеровозы,
                                                    танкеры, <span class="let-td-link">еще 3</span>
                                                </td>
                                                
                                                <td class="his-td">
                                                    <div class="let-td-button">
                                                        Не решил
                                                    </div>
                                                    <!-- /.let-td-button -->
                                                </td>
                                                
                                            </tr>
                                            </tbody>
                                        </table>
                                        <!-- /.his-table -->
                                    </div>
                                </div>
                            </div>


                        </div>
                        <!-- /.let-part -->


                        <div class="let-part">


                            <div class="let-end">
                                <div class="let-end-top">
                                    <div class="let-end-title">
                                        Итого:
                                        <span>66 предложений</span>
                                    </div>
                                    <!-- /.let-end-title -->
                                </div>
                                <!-- /.let-end-top -->
                                <div class="let-end-block">
                                    <div class="let-end-item">
                                        Принято:
                                        <span>12 предложений</span>
                                    </div>
                                    <!-- /.let-end-item -->
                                    <div class="let-end-item">
                                        Отклонено:
                                        <span>43 предложений</span>
                                    </div>
                                    <!-- /.let-end-item -->
                                    <div class="let-end-item">
                                        Не определилось:
                                        <span>11 предложений</span>
                                    </div>
                                    <!-- /.let-end-item -->
                                </div>
                                <!-- /.let-end-block -->
                            </div>
                            <!-- /.let-end -->
                        </div>
                        <!-- /.let-block -->


                    </div>
                    <!-- /.flot -->
                </div>
            </div>
            <!-- /.container -->
        </section>
        <AfCustomFooter/>
    </NuxtLayout>
</template>

<script>
    export default {
        data() {
            return {
                tab1: true,
                tab2: false,
                tab3: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tarif-list a.tactive {
        border-bottom: 4px solid #3b45a9;
        color: #3b45a9;
    }
    .tab-body {
        display: block;
    }
</style>