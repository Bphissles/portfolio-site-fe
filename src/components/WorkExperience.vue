<template>
  <section class="work-entry">
    <div class="headline">
      <h3 class="heading-03 big italic green" v-html="data.position"></h3>
      <p class="company blue">{{ data.company }}</p>
      <p><small>{{ data.startDate }}</small> - <small>{{ data.currentEmployer ? 'Current' : data.endDate }}</small></p>
    </div>
    <ul class="responsibilities">
      <li v-for="elem in data.body">
        <p>{{ elem }}</p>
      </li>
    </ul>

  </section>
</template>

<script>
export default {
  props: ["data"],
  name: "work-experience"
}
</script>

<style lang="scss" scoped>
  .work-entry {
    padding-top: 32px;
    padding-bottom: 16px;
    border-bottom: 1px solid #636D76;

    .headline {
      .heading-03, .company {
        margin-bottom: 4px;
      }
      margin-bottom: 24px;
    }

    .responsibilities {
      padding-left: 16px;
      margin-bottom: 24px;
    }
  }
</style>