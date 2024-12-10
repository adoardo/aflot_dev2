<template>
    <NuxtLayout name="default-hero" @click="hideFilters()">
        <div class="section-hero">
            <AfCustomHeader/>
            <div class="hero">
                <div class="container">
                    <div class="hero-block">
                        <h1 class="hero-title">Резюме моряков</h1>

                        <div class="search-block">
                            <div class="search-block__header">
                                <div style="cursor: pointer;" @click="showFilters = true, showSearch = false">
                                    <img src="assets/img/search/filter.png" alt=""/>
                                    Фильтр по морякам
                                </div>
                                <div style="cursor: pointer;" @click="showFilters = false, showSearch = true">
                                    <img src="assets/img/search/search.png" alt=""/>
                                    Поиск
                                </div>
                            </div>
                            <div class="search-block__filter mor-tab" v-if="showFilters">
                                <div class="mor-nav-item mor-nav-work">
                                    <div class="select" @click="showFilter(0)">
                                        <div>
                                            <span>Выбрано: 1</span><br>
                                            Старший помощ...
                                        </div>
                                    </div>

                                    <div class="mor-nav-drop" v-if="showFilterVacancy" @click="forceShowFilter(0)">
                                        <input type="search" placeholder="Введите название должности"
                                               class="mor-nav-search">
                                        <div class="mor-nav-part">
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Капитан
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Лоцман
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Старший помощник капитана
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Второй помощник капитана
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Третий помощник капитана
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Четвертый помощник капитана
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Помощник капитана по радиоэлектронике
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Заведующий производства
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Тралмастер
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Мастер обработки
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->

                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Мастер добычи
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->

                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Судовой врач
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->

                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Фельдшер
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Боцман
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Донкерман
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Старший механик
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Второй механик
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Третий механик
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Четвертый механик
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Механик наладчик ТО
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Слесарь ТО
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Рефмеханик
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Рефмашинист
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Старший электромеханик
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Электромеханик
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Электрик
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Машинист РМУ
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Моторист квалифицированный
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Моторист вахтенный
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Моторист – ГЭС
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Моторист – токарь
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Моторист - слесарь
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Токарь
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->

                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Газоэлектросварщик
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Матрос квалифицированный
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Матрос вахтенный
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Матрос обработчик
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Матрос добычи
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Матрос – водолаз
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Матрос – крановщик
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Матрос – лебёдчик
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Матрос – сварщик
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Матрос-уборщик
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Шеф-повар
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Повар второй
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Повар-пекарь
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Повар- матрос
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Помощник повара
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Прачка
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Буфетчик
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Дневальная(ый)
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Практикант – электрик
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Практикант – моторист
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Практикант – матрос
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Практикант – механик
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Практикант – штурман
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Практикант – электрик
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Другое
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                        </div>
                                        <!-- /.mor-nav-part -->
                                    </div>

                                </div>

                                <div class="mor-nav-zp mor-nav-zarp mor-nav-item">
                                    <div class="select mor-input mor-input-zp" @click="showFilter(1)">Зарплата</div>
                                    <select class="select mor-input mor-input-select">
                                        <option value="">RUB</option>
                                        <option value="">USD</option>
                                    </select>
                                    <!-- /#.select mor-input -->


                                    <div class="mor-nav-drop" v-if="showFilterSalary" @click="forceShowFilter(1)">
                                        <div class="mor-nav-block">
                                            <input type="number" placeholder="От" class="mor-nav-search mor-nav-input">
                                            <input type="number" placeholder="До" class="mor-nav-search mor-nav-input">
                                        </div>
                                        <!-- /.mor-nav-block -->
                                    </div>
                                    <!-- /.mor-nav-drop -->
                                </div>

                                <input type="text" placeholder="Дата посадки"
                                       class="mor-input select mor-date datepicker-air" @click="showFilter(2)">

                                <select class="select mor-select" @click="showFilter(3)">
                                    <option disabled selected>
                                        Период посадки
                                    </option>
                                    <option>
                                        1 месяц
                                    </option>
                                    <option>
                                        1-2 месяца
                                    </option>
                                    <option>
                                        2 месяца
                                    </option>
                                    <option>
                                        2-3 месяца
                                    </option>
                                    <option>
                                        3 месяца
                                    </option>
                                    <option>
                                        3-4 месяца
                                    </option>
                                    <option>
                                        4 месяца
                                    </option>
                                    <option>
                                        4-5 месяцев
                                    </option>
                                    <option>
                                        5 месяцев
                                    </option>
                                    <option>
                                        5-6 месяцев
                                    </option>
                                    <option>
                                        6 месяцев
                                    </option>
                                    <option>
                                        Более 6 месяцев
                                    </option>
                                </select>

                                <div class="mor-nav-item mor-nav-sudno mor-nav-zp mor-nav-right">
                                    <div class="select" @click="showFilter(4)">
                                        <div>
                                            Тип судна
                                        </div>
                                    </div>

                                    <div class="mor-nav-drop" v-if="showFilterShipType" @click="forceShowFilter(4)">
                                        <input type="search" placeholder="Введите тип судна" class="mor-nav-search">
                                        <div class="mor-nav-part">
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Рыбодобывающие
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Краболовное
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Плавучие базы (ПБ)
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Сухогруз
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Контейнеровоз
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Машиновоз
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Транспортный рефрижератор
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Балкер
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Ро-Ро
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Танкер
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->

                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Буксир
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Ледокол
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Пассажирское
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Военные
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Спасательные
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Суда снабжения
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Речные
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Технический флот
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->

                                            <div class="resume-contact__second cabinet">
                                                <label class="custom-checkbox mor-checkbox">
                                                    <input type="checkbox">
                                                    <span class="checkmark"></span>
                                                    Другое
                                                </label>
                                            </div>
                                            <!-- /.resume-contact__second -->
                                        </div>
                                        <!-- /.mor-nav-part -->
                                    </div>
                                    <!-- /.mor-nav-drop -->
                                </div>

                            </div>

                            <div class="mor-tab" v-if="showSearch">
                                <input placeholder="Введите название должности" class="mor-input-search">
                            </div>

                            <div class="search-block-end search-block-rend">
                                <button class="search-button-opacity">Сбросить</button>

                                <div class="search-button-red">
                                    Найти
                                    <span>→</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="section-flot section-res">
            <div class="container">
                <div class="flot">
                    <h2 class="search-title">Моряков под заданные критерии: <span>54</span></h2>
                    <div class="flot-block flot-block-side">
                        <div class="flot-info flot-info-full">
                            <div class="flot-content flot-content-search">
                                <div class="vacancy-list search-vacancy-list">
                                    <!-- ED TODO: remove on backend release -->
                                    <div class="vacancy">
                                        <div class="vacancy__label-top">
                                            <div class="vacancy__label"><span class="vacancy-label-name">Жагров Денис Федорович</span>
                                                <img src="assets/img/responses/fav.png" alt=""></div>
                                            <div class="vacancy__logo">
                                                <img src="assets/img/search/man.png" alt="logo">
                                            </div>
                                        </div>
                                        <div class="vacancy__meta">
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
                                                    танкеры, буксиры, <span class="res-blue-text">еще 3</span>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="vacancy__buttons">
                                            <a href="/about-sailor" class="vacancy__button blue"><img src="assets/img/dop-page/blue-info.svg"
                                                                                   alt="">Подробнее о моряке
                                            </a>
                                            <div class="vacancy__button red"><img src="assets/img/responses/more.png" alt="">Предложить
                                                вакансию
                                            </div>
                                        </div>

                                        <div class="vacancy__date new">ищу работу</div>
                                    </div>
                                    <div class="vacancy">
                                        <div class="vacancy__label-top">
                                            <div class="vacancy__label"><span class="vacancy-label-name">Жагров Денис Федорович</span>
                                                <img src="assets/img/responses/fav.png" alt=""></div>
                                            <div class="vacancy__logo">
                                                <img src="assets/img/search/man.png" alt="logo">
                                            </div>
                                        </div>
                                        <div class="vacancy__meta">
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
                                                    танкеры, буксиры, <span class="res-blue-text">еще 3</span>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="vacancy__buttons">
                                            <a href="/about-sailor" class="vacancy__button blue"><img src="assets/img/dop-page/blue-info.svg"
                                                                                   alt="">Подробнее о моряке
                                            </a>
                                            <div class="vacancy__button red"><img src="assets/img/responses/more.png" alt="">Предложить
                                                вакансию
                                            </div>
                                        </div>

                                        <div class="vacancy__date new">ищу работу</div>
                                    </div>
                                    <div class="vacancy">
                                        <div class="vacancy__label-top">
                                            <div class="vacancy__label"><span class="vacancy-label-name">Жагров Денис Федорович</span>
                                                <img src="assets/img/responses/fav.png" alt=""></div>
                                            <div class="vacancy__logo">
                                                <img src="assets/img/search/man.png" alt="logo">
                                            </div>
                                        </div>
                                        <div class="vacancy__meta">
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
                                                    танкеры, буксиры, <span class="res-blue-text">еще 3</span>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="vacancy__buttons">
                                            <a href="/about-sailor" class="vacancy__button blue"><img src="assets/img/dop-page/blue-info.svg"
                                                                                   alt="">Подробнее о моряке
                                            </a>
                                            <div class="vacancy__button red"><img src="assets/img/responses/more.png" alt="">Предложить
                                                вакансию
                                            </div>
                                        </div>

                                        <div class="vacancy__date new">ищу работу</div>
                                    </div>
                                    <div class="vacancy">
                                        <div class="vacancy__label-top">
                                            <div class="vacancy__label"><span class="vacancy-label-name">Жагров Денис Федорович</span>
                                                <img src="assets/img/responses/fav.png" alt=""></div>
                                            <div class="vacancy__logo">
                                                <img src="assets/img/search/man.png" alt="logo">
                                            </div>
                                        </div>
                                        <div class="vacancy__meta">
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
                                                    танкеры, буксиры, <span class="res-blue-text">еще 3</span>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="vacancy__buttons">
                                            <a href="/about-sailor" class="vacancy__button blue"><img src="assets/img/dop-page/blue-info.svg"
                                                                                   alt="">Подробнее о моряке
                                            </a>
                                            <div class="vacancy__button red"><img src="assets/img/responses/more.png" alt="">Предложить
                                                вакансию
                                            </div>
                                        </div>

                                        <div class="vacancy__date">Рассмотрю предложения</div>
                                    </div>
                                    <div class="vacancy">
                                        <div class="vacancy__label-top">
                                            <div class="vacancy__label"><span class="vacancy-label-name">Жагров Денис Федорович</span>
                                                <img src="assets/img/responses/fav.png" alt=""></div>
                                            <div class="vacancy__logo">
                                                <img src="assets/img/search/man.png" alt="logo">
                                            </div>
                                        </div>
                                        <div class="vacancy__meta">
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
                                                    танкеры, буксиры, <span class="res-blue-text">еще 3</span>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="vacancy__buttons">
                                            <a href="/about-sailor" class="vacancy__button blue"><img src="assets/img/dop-page/blue-info.svg"
                                                                                   alt="">Подробнее о моряке
                                            </a>
                                            <div class="vacancy__button red"><img src="assets/img/responses/more.png" alt="">Предложить
                                                вакансию
                                            </div>
                                        </div>

                                        <div class="vacancy__date">Рассмотрю предложения</div>
                                    </div>
                                    <div class="vacancy">
                                        <div class="vacancy__label-top">
                                            <div class="vacancy__label"><span class="vacancy-label-name">Жагров Денис Федорович</span>
                                                <img src="assets/img/responses/fav.png" alt=""></div>
                                            <div class="vacancy__logo">
                                                <img src="assets/img/search/man.png" alt="logo">
                                            </div>
                                        </div>
                                        <div class="vacancy__meta">
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
                                                    танкеры, буксиры, <span class="res-blue-text">еще 3</span>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="vacancy__buttons">
                                            <a href="/about-sailor" class="vacancy__button blue"><img src="assets/img/dop-page/blue-info.svg"
                                                                                   alt="">Подробнее о моряке
                                            </a>
                                            <div class="vacancy__button red"><img src="assets/img/responses/more.png" alt="">Предложить
                                                вакансию
                                            </div>
                                        </div>

                                        <div class="vacancy__date">Рассмотрю предложения</div>
                                    </div>
                                    <div class="vacancy">
                                        <div class="vacancy__label-top">
                                            <div class="vacancy__label"><span class="vacancy-label-name">Жагров Денис Федорович</span>
                                                <img src="assets/img/responses/fav.png" alt=""></div>
                                            <div class="vacancy__logo">
                                                <img src="assets/img/search/man.png" alt="logo">
                                            </div>
                                        </div>
                                        <div class="vacancy__meta">
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
                                                    танкеры, буксиры, <span class="res-blue-text">еще 3</span>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="vacancy__buttons">
                                            <a href="/about-sailor" class="vacancy__button blue"><img src="assets/img/dop-page/blue-info.svg"
                                                                                   alt="">Подробнее о моряке
                                            </a>
                                            <div class="vacancy__button red"><img src="assets/img/responses/more.png" alt="">Предложить
                                                вакансию
                                            </div>
                                        </div>

                                        <div class="vacancy__date">Рассмотрю предложения</div>
                                    </div>
                                    <ResumeItem
                                            v-for="item in resumes?.vacancies"
                                            :key="'resumes-item-page-' + i"
                                            :data="item"
                                    />
                                </div>
                            </div>

                            <div class="flot-nav">
                                <a href="#" class="flot-nav__prev flot-nav__a">
                                    <img src="assets/img/flot/prev.svg" alt="image"/>
                                </a>
                                <div class="flot-nav__block">
                                    <a href="#" class="flot-nav__a">1</a>
                                    <a href="#" class="flot-nav__a">2</a>
                                    <a href="#" class="flot-nav__a">3</a>
                                    <a href="#" class="flot-nav__a">4</a>
                                    <a href="#" class="flot-nav__a">5</a>
                                    <a href="#" class="flot-nav__a">...</a>
                                    <a href="#" class="flot-nav__a">14</a>
                                </div>

                                <a href="#" class="flot-nav__next flot-nav__a">
                                    <img src="assets/img/flot/next.svg" alt="image"/>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <AfCustomFooter/>
    </NuxtLayout>
</template>

<script>
    import api from "@/api/api";
    import ResumeItem from "~/components/list/ResumeItem.vue";

    const resumes = ref(null);

    async function getResumes() {
        const {data} = await api.get("/resumes");
        resumes.value = data;
    }

    onMounted(() => {
        getResumes();
    });

    export default {
        data() {
            return {
                showFilterVacancy: false,
                showFilterSalary: false,
                showFilterDate: false,
                showFilterPeriod: false,
                showFilterShipType: false,
                showFilters: true,
                showSearch: false,
                hideFiltersAllow: true
            }
        },
        mounted() {

        },
        methods: {
            hideFilters() {
                setTimeout(() => {
                    if (this.hideFiltersAllow) {
                        this.showFilterVacancy = false;
                        this.showFilterSalary = false;
                        this.showFilterDate = false;
                        this.showFilterPeriod = false;
                        this.showFilterShipType = false;
                    }
                }, 5);

            },
            showFilter(filter) {
                this.hideFiltersAllow = false;
                if (filter === 0) {
                    this.showFilterVacancy = !this.showFilterVacancy;
                    this.showFilterSalary = false;
                    this.showFilterDate = false;
                    this.showFilterPeriod = false;
                    this.showFilterShipType = false;
                } else if (filter === 1) {
                    this.showFilterSalary = !this.showFilterSalary;
                    this.showFilterVacancy = false;
                    this.showFilterDate = false;
                    this.showFilterPeriod = false;
                    this.showFilterShipType = false;
                } else if (filter === 2) {
                    this.showFilterDate = !this.showFilterDate;
                    this.showFilterVacancy = false;
                    this.showFilterSalary = false;
                    this.showFilterPeriod = false;
                    this.showFilterShipType = false;
                } else if (filter === 3) {
                    this.showFilterPeriod = !this.showFilterPeriod;
                    this.showFilterVacancy = false;
                    this.showFilterSalary = false;
                    this.showFilterDate = false;
                    this.showFilterShipType = false;
                } else if (filter === 4) {
                    this.showFilterShipType = !this.showFilterShipType;
                    this.showFilterVacancy = false;
                    this.showFilterSalary = false;
                    this.showFilterDate = false;
                    this.showFilterPeriod = false;
                }
                setTimeout(() => {
                    this.hideFiltersAllow = true;
                }, 10);
            },
            forceShowFilter(filter) {
                this.hideFiltersAllow = false;
                if (filter === 0) {
                    this.showFilterVacancy = true;
                } else if (filter === 1) {
                    this.showFilterSalary = true;
                } else if (filter === 2) {
                    this.showFilterDate = true;
                } else if (filter === 3) {
                    this.showFilterPeriod = true;
                } else if (filter === 4) {
                    this.showFilterShipType = true;
                }
                setTimeout(() => {
                    this.hideFiltersAllow = true;
                }, 10);
            }
        }
    }
</script>

<style lang="scss" scoped></style>

