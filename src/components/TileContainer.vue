<script setup>
  import Comment from "./Comment.vue";
  import SecondaryPreviewCard from "./SecondaryPreviewCard.vue";
</script>
<template>
  <section class="tile-container">
    <h2 class="heading-02">{{ heading }}</h2>
    <div class="tiles">
      <SecondaryPreviewCard v-for="card in cardCount" />
    </div>
    <Comment class="comment" :kanye="false" comment="Space for another comment" />
  </section>
</template>

<script>
export default {
  name: "tile-container",
  props: ["heading", "cardCount"],
  components: { SecondaryPreviewCard },
};
</script>

<style lang="scss" scoped>
.tile-container {
  margin-top: 8px;
  padding-bottom: 2rem;
  .tiles {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    .card {
      
      &:last-child {
        display: none;
      }
      &:nth-child(6) {
        display: block;
      }
    }
  }

  .comment {
    text-align: end;
  }

  @media (min-width: 375px) {
    .tiles {
      .card {
        flex: 0 0 47%;
      }
    }
  }
  @media (min-width: 640px) {
    margin-top: 8px;
  }

  @media (min-width: 992px) {
    margin-top: 28px;
  }

  @media (min-width: 1200px) {
    .tiles {
      justify-content: space-between;
      .card {
        flex: 0 0 31%;
        &:last-child {
          display: block;
        } 
      }
    }
  }
}
</style>
