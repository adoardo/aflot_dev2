import { ref } from "vue"
export const menu = ref([
  { name: 'Новости', link: '/news'},
  { name: 'Тарифы', link: '/tarif'},
  { name: 'О сервисе', link: '/about'},
  { name: 'Контакты', link: '/contact'},
  { name: 'Аукцион', link: '/about-page/auction'},
])

export const MenuSea = ref([
  { name: 'Морские вакансии', link: '/vacancies'},
  { name: 'Анкеты моряков', link: '/resumes'},
  { name: 'Морской флот', link: '/navy'},
  { name: 'Морские документы', link: '/flot-dock'},
  { name: 'Начать работу в море', link: '/work-sea'},
])
export const MenuSeaHome = ref([
  { name: 'Морские <br/>вакансии', link: '/vacancies'},
  { name: 'Анкеты <br/>моряков', link: '/resumes'},
  { name: 'Морской <br/>флот', link: '/navy'},
  { name: 'Морские <br/>документы', link: '/flot-dock'},
  { name: 'Начать работу <br/>в море', link: '/work-sea'},
])

export const MenuCompany = ref([
  { name: 'Создать новую вакансию', link: '/company/new', icon: 'lk-about-1.svg'},
  { name: 'Вакансии', link: '/company/vacansies?tab=0', icon: 'lk-about-2.svg'},
  { name: 'Черновики', link: '/company/vacansies?tab=1', icon: 'lk-about-3.svg'},
  { name: 'Неактуальные вакансии', link: '/company/vacansies?tab=2', icon: 'lk-about-4.svg'},
  { name: 'Принятые моряки', link: '/company/accepted-sailors', icon: 'lk-about-13.svg'},
  { name: 'Входящие отклики', link: '/company/incoming-responses', icon: 'lk-about-13.svg'},
  { name: 'Исходящие предложения', link: '/company/outgoing-offers', icon: 'lk-about-12.svg'},
  { name: 'Избранное / Черный список', link: '/company/featured-sailor', icon: 'lk-about-5.svg'},
  { name: 'Статистика', link: '/company/statistics', icon: 'lk-about-6.svg'},
  //{ name: 'Платные услуги', link: '', icon: 'lk-about-7.svg'},
  { name: 'Баланс', link: '/company/balance', icon: 'lk-about-8.svg'},
  { name: 'История операций', link: '/company/operation-history', icon: 'lk-about-3.svg'},
  { name: 'Настройки профиля', link: '/company/profile', icon: 'lk-about-9.svg'},

  { name: 'Создание рассылки', link: '/company/mailings/create-newsletter', icon: 'lk-about-3.svg'},
  { name: 'Общие результаты ', link: '/company/mailings/mailing-results', icon: 'lk-about-3.svg'},
  { name: 'Результаты конкретной рассылки ', link: '/company/mailings/specific-newsletter', icon: 'lk-about-3.svg'},



])

