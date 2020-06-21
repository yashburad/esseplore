<template>
  <div class="ChefDescription">
    <ImageHeader :add="style(this.add)" />
    <b-container class="pt-5">
      <b-row class="p-4 p-sm-0" style>
        <b-col sm="8">
          <b-row class="page-direction">
            <span style="color:#575757;">
              <i class="fa fa-home"></i> > Hire A Chef >
            </span>
            Chef Shirley Goh
          </b-row>
          <b-row class="d-block text-left">
            <h5 class="food-type mt-3">Lunch</h5>
            <h3 class="font-weight-bold mt-2">Local Asian Fusion Dinner</h3>
            <p>
              {{this.description}}…
              <button @click="readmore" class="read-more">Read More ...</button>
            </p>
            <div>
              <button class="chef-cuisine">MALAY</button>
              <button class="chef-cuisine ml-3">PERANAKAN</button>
            </div>
          </b-row>
        </b-col>
        <b-col sm="4"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageHeader from "@/components/ImageHeader.vue";

export default {
  name: "ChefDescription",
  components: {
    ImageHeader

    // Carousel,
  },
  data() {
    return {
      add: require("@/assets/dining-3.jpg"),
      description:
        "Singaporean classics infused with love and tender care in sourcing as well as process. Chef Yan cuts no corners, from vegetables hand-cut to the perfect thickness to arduously"
    };
  },
  methods: {
    style(add) {
      var style = 'background-image: url("' + add + '")';
      return style;
    }
  }
};
</script>

<style lang="sass">
.ChefDescription
    .page-direction
        padding-bottom: 20px
        border-bottom: solid 0.5px rgba(224, 224, 224, 0.44)
    .food-type
        color: #ff6480

    .chef-cuisine
        color: #ff6480
        border: none
        padding: 5px 20px
        border-radius: 2px
        background: rgba(255, 100, 128, 0.12)
    .read-more
        border: none
        background: transparent
        color: #ff6480
        padding: 0px
        &:hover
            text-decoration: underline
</style>
