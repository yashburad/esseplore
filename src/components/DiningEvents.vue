<template>
  <b-container>
    <b-row class="lightning">
      <b-col class="d-flex" sm="12">
        <b-col style="text-align:left;" sm="4"
          ><h4 style="font-weight:bold;">Lightning Dining Events</h4></b-col
        ><b-col sm="4"></b-col>
        <b-col sm="4"
          ><h6 class="mt-2">
            Last few hours before these events vanish
          </h6></b-col
        ></b-col
      >

      <b-col class="d-md-flex" sm="12">
        <carousel
          class="w-100"
          :responsive="{
            0: { items: 1, nav: false, autoplay: true },
            600: { items: 3, nav: true, dots: false },
          }"
          :navText="[left, right]"
        >
          <b-col
            v-for="content in contents"
            :key="content['content']"
            class="events p-0 pr-2"
          >
            <div class="red-flash"><i class="fa fa-flash"></i></div>
            <div class="lightning-content">
              <p>{{ content["content"] }}</p>
            </div>
            <img style="width:100%" :src="content['url']" alt="abc" /> </b-col
        ></carousel>
      </b-col>
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
.lightning .owl-prev {
  border-radius: 50% !important;
  width: 25px;
  height: 25px;
  padding-bottom: 22px !important;
  position: absolute;
  left: -5%;
  font-size: 24px;
  top: 30%;
  background: white !important;
  color: #707070 !important;
  display: grid !important;
}
.lightning .owl-next {
  border-radius: 50% !important;
  width: 25px;
  height: 25px;
  padding-bottom: 22px !important;
  position: absolute;
  right: -5%;
  font-size: 24px !important;
  font-weight: 100;
  top: 30%;
  background: white !important;
  color: #707070 !important;
  display: grid !important;
}

.lightning .fa-angle-left {
  font-size: 18px;
}

.lightning .fa-angle-right {
  font-size: 18px;
}

.lightning-content {
  position: absolute;
  top: 60%;
  height: 40%;
  width: 90%;
  z-index: 100;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.7) 65%
  );
}

.lightning-content p {
  color: white;
  font-size: 18px;
  width: 70%;
  text-align: left;
  margin-left: 5%;
  margin-top: 5%;
  font-weight: bold;
}

.lightning .col-sm-4 {
  padding: 0px 10px 0px 0px !important;
}

.red-flash {
  position: absolute;
  z-index: 1000;
  top: 30px;
  color: white;
  background: #ee617e;
  width: 40px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}

.lightning {
  padding-top: 80px;
}
.events {
  margin-bottom: 20px;
}
</style>
