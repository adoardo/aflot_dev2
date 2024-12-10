<template>
  <footer :class="fstyle">
    <div class="container container-footer">
      <div :class="flinkstyle">
        <a href="/vacancies" class="footer-a">Морские вакансии</a>
        <a href="/resumes" class="footer-a">Анкеты моряков</a>
        <a href="/navy" class="footer-a">Морской флот</a>
        <a href="/flot-dock" class="footer-a">Морские документы</a>
        <a href="/work-sea" class="footer-a">Начать работу в море</a>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    props: {
      lnkStyle: {
        type: String,
        default: 'footer-block footer-block-white'
      },
      footerStyle: {
        type: String,
        default: 'footer'
      }
    },
    data() {
      return {
        flinkstyle: this.lnkStyle,
        fstyle: this.footerStyle
      }
    }
  }
</script>

<style lang="scss" scoped></style>
