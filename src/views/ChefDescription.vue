<template>
  <div class="ChefDescription">
    <ImageHeader :add="style(this.add)" />
    <b-container class="top-box" fluid>
      <b-row class="page-direction">
        <b-col sm="11" offset-md="1">
          <span style="color:#575757;">
            <i class="fa fa-home"></i> > Dining Experience >
          </span>
          Chef Martin Yan
        </b-col>
      </b-row>
      <b-row class="chef-details">
        <b-col sm="2" offset-md="1"
          ><img class="chef-photo" src="@/assets/dsc-1405.jpg" />
        </b-col>
        <b-col class="chef-details1" sm="9"
          ><h4>Chef Shirley Gos</h4>
          <p>
            Celebrity Chef. TV Show Host. Founder of Yan Can Cooking School
          </p>
          <span
            >Yan began teaching Chinese cooking for a college extension program.
            He has hosted over 1,500 episodes of the PBS cooking show Yan Can
            Cook since 1982. Yan began teaching Chinese cooking for a college
            extension program. He has hosted over 1,500 episodes of the PBS
            cooking show Yan Can Cook since 1982.</span
          >
        </b-col>
      </b-row>
    </b-container>
    <HireChefMenu />
    <Carousel />
  </div>
</template>

<script>
// @ is an alias to /src
import ImageHeader from "@/components/ImageHeader.vue";
import HireChefMenu from "@/components/HireChefMenu.vue";
import Carousel from "@/components/Carousel.vue";

export default {
  name: "ChefDescription",
  components: {
    ImageHeader,
    HireChefMenu,
    Carousel,
  },
  data() {
    return {
      add: require("@/assets/dining-3.jpg"),
    };
  },
  methods: {
    style(add) {
      var style = 'background-image: url("' + add + '")';
      return style;
    },
  },
};
</script>

<style>
.top-box {
  box-shadow: 0 1.5px 28px 0 rgba(0, 0, 0, 0.16);
}

.chef-details {
  text-align: left;
}

.chef-details1 {
  padding-top: 40px;
}

.chef-details1 span {
  /* color: antiquewhite; */
  font-weight: 300;
}

.chef-photo {
  height: 250px;
}

.background {
  height: 350px !important;
}

.page-direction {
  padding-top: 40px;
  text-align: left;
}
</style>
