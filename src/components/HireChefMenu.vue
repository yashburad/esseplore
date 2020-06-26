<template>
  <b-container style="padding-top:80px;">
    <b-row class="lightning1">
      <b-col class="d-flex" sm="12">
        <b-col style="text-align:left;" sm="4">
          <h4 style="font-weight:bold;letter-spacing:1px;font-weight:200;">
            Hire A Chef Menu
          </h4>
        </b-col>
      </b-col>
      <b-col class="d-md-flex" sm="12">
        <carousel
          class="w-100"
          :responsive="{
            0: { items: 1, nav: false, autoplay: true },
            600: { items: 3, nav: true, dots: false },
          }"
          :navText="[left, right]"
        >
          <div
            v-for="content in contents"
            :key="content['content']"
            sm="4"
            style="padding:10px"
          >
            <b-col class="events1">
              <div class="image">
                <img
                  class="dish"
                  style="width:100%"
                  :src="content['url']"
                  alt="abc"
                />
                <img class="chef-photo1" src="@/assets/dsc-1405@3x.png" />
              </div>
              <div class="d-flex w-100 mt-3 menu1">
                <div class="content">
                  <p>Local Asian Fusion Dinner in Singapore</p>
                </div>
                <div class="content1">
                  <span style="font-size:19px;">S$100/pax</span>
                  <h6>4 to 8 pax</h6>
                </div>
              </div>
              <div class="m-2" style="text-align:left">
                <p><i class="fa fa-calendar"></i> 8 Oct 2020 - 24 Oct 2020</p>
              </div>
            </b-col>
          </div>
        </carousel></b-col
      >
    </b-row>
  </b-container>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  props: { contents: Array },
  components: { carousel },
  data: function() {
    return {
      left: '<i class="fa fa-angle-left"></i>',
      right: '<i class="fa fa-angle-right"></i>',
    };
  },
  methods: {},
};
</script>

<style>
.lightning1 .owl-prev {
  border-radius: 50% !important;
  width: 25px;
  height: 25px;
  padding-bottom: 22px !important;
  position: absolute;
  left: -5%;
  font-size: 18px !important;
  top: 40%;
  background: white !important;
  color: #707070 !important;
  display: grid !important;
}
.lightning1 .owl-next {
  border-radius: 50% !important;
  width: 25px;
  height: 25px;
  padding-bottom: 22px !important;
  position: absolute;
  right: -5%;
  font-size: 18px !important;
  font-weight: 100;
  top: 40%;
  background: white !important;
  color: #707070 !important;
  display: grid !important;
}

.image .dish {
  padding: 10px;
}

.events1 .image .chef-photo1 {
  z-index: 1000;
  position: absolute;
  /* top: 0px; */
  left: 0px;
  bottom: 0px;
  width: 80px;
  height: auto;
}

.events1 .menu1 {
  font-weight: bold;
  border-bottom: 1px solid rgba(224, 224, 224, 0.44);
  padding: 0px 20px;
}

.events1 .image {
  width: 100%;
  /* height: 200px; */
  overflow: hidden;
  position: relative;
}

.events1 .menu1 .content {
  width: 70%;
  text-align: left;
  font-size: 15px;
}
.events1 .menu1 .content1 {
  /* width: 30%; */
  text-align: right;
}

.fa-calendar {
  margin-right: 10px;
}

.lightning1 {
  padding-bottom: 20px;
}

.events1 {
  /* margin: 20px 20px 20px 0px; */
  background-color: white;
  padding: 0px !important;
}

.events1 img {
}
</style>
