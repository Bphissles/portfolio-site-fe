<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav id="main-nav">
    <RouterLink to="/">
      <img src="../assets/images/system/sample-icon.png" alt="Ben Hislop" width="125"  />
    </RouterLink>
    <div class="nav-links">
      <p>
        <RouterLink to="/calculator">Calculator</RouterLink>
      </p>
      <p>
        <RouterLink to="/binary-adder">Binary Adder</RouterLink>
      </p>
      <p>
        <RouterLink to="/number-converter">Number Converter</RouterLink>
      </p>
      <p>
        <RouterLink to="/logic-gate-simulator">Gate Simulator</RouterLink>
      </p>
      <p>
        <RouterLink to="/flash-cards">Flash Cards</RouterLink>
      </p>
      <p>
        <RouterLink to="/traffic-light-controller">Traffic Light Controller</RouterLink>
      </p>
      <!-- <p class="">
        <RouterLink to="/about">About</RouterLink> <i class="arrow"></i>
      </p> -->
      <!-- <p class="">
        <RouterLink to="/contact">Contact</RouterLink> <i class="arrow"></i>
      </p> -->
      <!-- <p class="">
        <RouterLink to="/">Projects</RouterLink> <i class="arrow"></i>
      </p> -->
    </div>
  </nav>
</template>

<script>
export default {
  name: "navigation",
}
</script>

<style lang="scss" scoped>
#main-nav {
  padding: 30px;
  margin-bottom: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav-links {
    p {
      letter-spacing: 0.005em;
      margin-bottom: 14px;
      white-space: nowrap;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  @media (min-width: 640px) {
    padding-inline: 0;
    padding-bottom: 30px;
  }

  @media (min-width: 768px) {
    position: fixed;
    flex-direction: column;
    align-items: baseline;
    padding: 30px;
    padding-right: 23px;
    height: calc(100dvh - 60px);
    width: 153px;
    left: 0;
    top: 0;
  }

  @media (min-width: 992px) {
    padding: 60px 26px 60px 55px;
    height: calc(100dvh - 120px);
  }

  @media (min-width: 1200px) {
    padding: 60px 0px 60px 55px;
  }
}
</style>
