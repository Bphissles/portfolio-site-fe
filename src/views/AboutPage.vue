<script setup>
  import Heading from "@/components/Heading.vue"
  import HeadingWithCopy from "@/components/HeadingWithCopy.vue";
  import Comment from "@/components/Comment.vue";
  import WorkExperience from "@/components/WorkExperience.vue";
  import sanity from "@/client";
</script>

<template>
  <main>
    <div class="wrapper">
      <Heading projectName="" heading="Yo, my name is Benjamin Hislop." subHeading="I'm a good human"/>
      <HeadingWithCopy class="tracking-in-expand" heading="Summary" bodyCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse." />
      <!-- Begin: HubSpot Academy - SEO Badge -->
      <div class='academy-badge'>
        <a href='https://app.hubspot.com/academy/achievements/pv65k170/en/1/benjamin-hislop/seo' title='SEO'>
          <img src='https://hubspot-credentials-na1.s3.amazonaws.com/prod/badges/user/87941956f13b4f808b04506577f95e03.png' />
        </a>
      </div>
      <!-- End: HubSpot Academy - SEO Badge -->
      <section class="work tracking-in-expand">
        <p class="bold">Work Experience</p>
        <template v-for="(jobs, index) in workExperience"  :key="index">
          <WorkExperience :data="jobs" />
        </template>
      </section>
      
      <Comment class="orange" comment="I also worked in a gold mine, and bartended for a long time"/>
      <HeadingWithCopy heading="Thing's I'm Good At" bodyCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse." />
      <HeadingWithCopy heading="Fun facts" bodyCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse." />
    </div>
  </main>
</template>

<script>

const query = `*[_type == "jobHistory"]{
  company,
  position,
  currentEmployer,
  startDate,
  endDate,
  body
}[0...50] | order(startDate desc)`;
export default {
  name: "about-page",
  components: { Heading, HeadingWithCopy, WorkExperience, Comment },
  data() {
    return {
        workExperience: [],  
        extraCardTemp: 3,
      }
  },
  mounted() {
    sanity.fetch(query).then(
      (data) => {
        this.workExperience = data
      },
      (error) => {
        this.error = error;
      }
    );
  }  
}
</script>

<style lang="scss" scoped>
.green {
  margin-bottom: 48px;
}
.work {
  margin-bottom: 48px;
}
</style>