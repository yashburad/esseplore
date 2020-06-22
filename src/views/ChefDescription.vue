<template>
  <div class="ChefDescription">
    <ImageHeader :add="style(this.add)" />
    <b-container class="pt-5">
      <b-row class="p-4 p-sm-0" style>
        <b-col sm="8 pr-5">
          <b-row class="page-direction">
            <span style="color:#575757;">
              <i class="fa fa-home"></i> > Hire A Chef >
            </span>
            Chef Shirley Goh
          </b-row>
          <b-row class="d-block text-left">
            <h5 class="food-type mt-3">Lunch</h5>
            <h3 class="font-weight-bold mt-2">Local Asian Fusion Dinner</h3>
            <ReadMore :data="this.description" />
            <div>
              <button class="chef-cuisine">MALAY</button>
              <button class="chef-cuisine ml-3">PERANAKAN</button>
            </div>
          </b-row>
        </b-col>
        <b-col sm="4" class="booking-details p-3">
          <div class="d-flex booking-details1">
            <div class="text-left" style="width:70%;">
              <h6>Lunch</h6>
              <h6 class="font-weight-bold">
                Local Asian Fusion Dinner in Singapore
              </h6>
            </div>
            <div class="text-right pt-2" style="width:30%">
              <h4 class="mb-1" style="color:#ff6480">S$100</h4>
              <h6 class="mb-1">per pax</h6>
              <h6 class="mb-0">Min 4 pax</h6>
            </div>
          </div>
          <h6 class="text-left pt-4">
            <i class="fa fa-calendar"></i> 8 Oct 2020 - 24 Oct 2020
          </h6>
          <button class="lets-book">LET'S BOOK</button>
        </b-col>
      </b-row>
      <b-row class="pt-5">
        <b-col
          class="text-left"
          sm="8"
          style="border-bottom:solid 0.5px rgba(224, 224, 224, 0.44);"
        >
          <b-row>
            <b-col sm="4">
              <img style="height:200px;" src="@/assets/dsc-1405@3x.png" />
            </b-col>
            <b-col sm="8"
              ><h4>Chef Shirley Goh</h4>
              <h6>
                Celebrity Chef. TV Show Host. Founder of Yan Can Cooking School
              </h6>
              <ReadMore
                style="color:rgba(0,0,0,0.4);"
                :data="this.description1"
              />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="pt-4">
        <b-col sm="10">
          <b-row class="text-left mb-4"
            ><h4 class="font-weight-bold">Menu</h4>
          </b-row>
          <b-row class="text-left ">
            <b-col class="p-0 " sm="4">
              <h5>Appetizer</h5>
              <ul class="pl-3 pt-3 menu">
                <li>
                  <h6 class="font-weight-bold">Tofu Satay</h6>
                  <p style="color:rgba(0, 0, 0, 0.44);">
                    Delicately marinated bean curd grilled and served with
                    peanut sauce
                  </p>
                </li>
                <li>
                  <h6 class="font-weight-bold">Tofu Satay</h6>
                  <p style="color:rgba(0, 0, 0, 0.44);">
                    Delicately marinated bean curd grilled and served with
                    peanut sauce
                  </p>
                </li>
              </ul>
            </b-col>
            <b-col class="p-0 " sm="4">
              <h5>Main Course</h5>
              <ul class="pl-3 pt-3 menu">
                <li>
                  <h6 class="font-weight-bold">Tofu Satay</h6>
                  <p style="color:rgba(0, 0, 0, 0.44);">
                    Delicately marinated bean curd grilled and served with
                    peanut sauce
                  </p>
                </li>
                <li>
                  <h6 class="font-weight-bold">Tofu Satay</h6>
                  <p style="color:rgba(0, 0, 0, 0.44);">
                    Delicately marinated bean curd grilled and served with
                    peanut sauce
                  </p>
                </li>
              </ul>
            </b-col>
            <b-col class="p-0 " sm="4">
              <h5>Dessert</h5>
              <ul class="pl-3 pt-3 menu">
                <li>
                  <h6 class="font-weight-bold">Tofu Satay</h6>
                  <p style="color:rgba(0, 0, 0, 0.44);">
                    Delicately marinated bean curd grilled and served with
                    peanut sauce
                  </p>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">
          <h4 class="font-weight-bold">NON-ALCOHOLIC BEVERAGES</h4>
          <p>Lemon Iced Tea, Peach Iced Tea</p></b-col
        >
      </b-row>
      <b-row class="border-bottom">
        <b-col class="text-left">
          <h4 class="font-weight-bold">MEAL CLASSIFICATION</h4>
          <p class="mb-0">
            <span style="color:#45e69d;">&#10004;</span> Non-Vegetarian
          </p>
          <p><span style="color:#45e69d;">&#10004;</span> No Pork</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageHeader from "@/components/ImageHeader.vue";
import ReadMore from "@/components/ReadMore.vue";

export default {
  name: "ChefDescription",
  components: {
    ImageHeader,
    ReadMore,
    // Carousel,
  },
  data() {
    return {
      add: require("@/assets/dining-3.jpg"),
      description:
        "Singaporean classics infused with love and tender care in sourcing as well as process. Chef Yan cuts no corners, from vegetables hand-cut to the perfect thickness to arduously. Singaporean classics infused with love and tender care in sourcing as well as process. Chef Yan cuts no corners, from vegetables hand-cut to the perfect thickness to arduously",
      description1:
        "Yan began teaching Chinese cooking for a college extension program. He has hosted over 1,500 episodes of the PBS cooking show Yan Can Cook since 1982. Yan began teaching Chinese cooking for a college extension program. He has hosted over 1,500 episodes of the PBS cooking show Yan Can Cook since 1982.",
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
.ChefDescription .menu {
  /* list-style: none; */
  line-height: 1.7;
  width: 80%;
}
/* 
.ChefDescription .menu li::before {
  content: "•";
  color: white;
  border: pink;
  font-size: 26px;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
} */
</style>
<style lang="sass">
.ChefDescription

    .lets-book
        background: #ff6480
        border: none
        color: white
        padding: 20px 30px 20px 30px
        width: 100%
        font-weight:700

    .booking-details
        background: rgba(0, 0, 0, 0.04)
        height: max-content


        .booking-details1
            height: max-content
            border-bottom: 1px solid #dfe0e5
            padding-bottom: 10px

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

    .chef-info
        p
            margin-bottom:0px !important
        span
            a
                border: none
                background: transparent
                color: #ff6480
                padding: 0px
                &:hover
                    text-decoration: underline
</style>
