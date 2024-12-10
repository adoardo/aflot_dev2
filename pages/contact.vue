<template>
    <NuxtLayout class="main section-hero section-hero-post section-back-none" name="custom">
        <section class="section-about">
            <div class="container">
                <div class="about">
                    <h1 class="about-title">
                        Контакты
                    </h1>
                    <!-- /.about-title -->


                    <div class="contact-block">
                        <div class="contact-info">
                            <div class="contact-part">
                                <div class="contact-title">Контактная информация:</div>
                                <!-- /.contact-title -->
                                <div class="contact-content">
                                    <div class="contact-item">
                                        <div class="contact-item__title">Email</div>
                                        <!-- /.contact-item__title -->
                                        <a href="mailto: aflot.rf@mail.ru" class="contact-item__text">
                                            aflot.rf@mail.ru</a>
                                        <!-- /.contact-item__text -->
                                    </div>
                                    <!-- /.contact-item -->
                                    <div class="contact-item">
                                        <div class="contact-item__title">Телефон</div>
                                        <!-- /.contact-item__title -->
                                        <a href="mailto: 89046257545" class="contact-item__text"> 89046257545</a>
                                        <!-- /.contact-item__text -->
                                    </div>
                                    <!-- /.contact-item -->
                                    <div class="contact-item">
                                        <div class="contact-item__title">WhatsApp</div>
                                        <!-- /.contact-item__title -->
                                        <a href=" https://wa.me/79046257545" class="contact-item__text">89046257545</a>
                                        <!-- /.contact-item__text -->
                                    </div>
                                    <!-- /.contact-item -->
                                </div>
                                <!-- /.contact-content -->
                            </div>
                            <!-- /.contact-part -->
                            <div class="contact-line"></div>
                            <!-- /.contact-line -->
                            <div class="contact-part">
                                <div class="contact-title">Реквизиты:</div>
                                <!-- /.contact-title -->
                                <div class="contact-content">
                                    <div class="contact-item">
                                        <div class="contact-item__text">
                                            ИП Березина Анастасия Александровна
                                        </div>
                                        <!-- /.contact-item__text -->
                                    </div>
                                    <!-- /.contact-item -->

                                    <div class="contact-item">
                                        <div class="contact-item__title">
                                            Юридический адрес
                                        </div>
                                        <!-- /.contact-item__title -->
                                        <div class="contact-item__text">
                                            Владивосток , Мордовцева 3, 501 офис
                                        </div>
                                        <!-- /.contact-item__text -->
                                    </div>
                                    <!-- /.contact-item -->

                                    <div class="contact-item">
                                        <div class="contact-item__title">
                                            ИНН
                                        </div>
                                        <!-- /.contact-item__title -->
                                        <div class="contact-item__text">
                                            650303308603
                                        </div>
                                        <!-- /.contact-item__text -->
                                    </div>
                                    <!-- /.contact-item -->


                                </div>
                                <!-- /.contact-content -->
                            </div>
                            <!-- /.contact-part -->
                        </div>
                        <!-- /.contact-info -->
                        <div class="contact-right">
                            <div class="contact-title">
                                Обратная связь:
                            </div>
                            <!-- /.contact-title -->

                            <form action="" class="contact-form">
                                <label for="name" class="contact-label">
                                    <span>Фамилия</span>
                                    <input id="name" type="text" placeholder="Имя"
                                           class="contact-input contact-input-name">
                                </label>
                                <!-- /.contact-label -->

                                <div class="contact-form-part">
                                    <label for="email" class="contact-label">
                                        <span>Email</span>
                                        <input id="email" placeholder="Почта" type="email" class="contact-input">
                                    </label>
                                    <!-- /.contact-label -->
                                    <label for="phone" class="contact-label">
                                        <span>Номер телефона</span>
                                        <input id="phone" placeholder="Телефон" type="tel" class="contact-input">
                                    </label>
                                    <!-- /.contact-label -->

                                </div>
                                <!-- /.contact-form-part -->

                                <textarea name="" id="" placeholder="Ваш вопрос" class="contact-textarea"></textarea>

                                <img src="assets/img/contact/image.png" alt="" class="contact-rep">
                                <label for="check" class="contact-label contact-label-check">
                                    <input id="check" type="checkbox" class="contact-check">
                                    <span class="contact-check__text">
        Я даю согласие на обработку
        <a href="#">персональных данных</a>
    </span>
                                    <!-- /.contact-check__text -->
                                </label>
                                <!-- /.contact-label -->

                                <button type="submit" class="contact-button">
                                    Отправить <span>→</span>
                                </button>
                                <!-- /.contact-button -->
                            </form>
                            <!-- /.contact-form -->

                        </div>
                        <!-- /.contact-right -->
                    </div>
                    <!-- /.contact-block -->
                </div>
                <!-- /.about -->
            </div>
            <!-- /.container -->
        </section>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
    input {
        &.error {
            border-color: #9b2719;
        }
    }
</style>
