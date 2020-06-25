<template>
  <b-container fluid class="homechefs">
    <b-row
      ><b-col sm="6" style="padding-left:25px;"
        ><h2 style="font-style:italic; margin-bottom:-20px;">
          HomeChefs For Hire Near You
        </h2></b-col
      ></b-row
    >
    <b-container>
      <b-row style="position:relative; top:60px;">
        <carousel
          class="w-100"
          :responsive="{
            0: { items: 1, nav: false, autoplay: true },
            600: { items: 2, nav: true, dots: false },
          }"
          :navText="[left, right]"
        >
          <b-col class="mb-3"
            ><div class="homechef-content">
              <p>Robert Kini</p>
            </div>
            <div class="crop1">
              <img
                style="width:100%"
                src="@/assets/089-e-3341-a-82-d-324-e-8723-ea-9501-ea-34-dc.jpg"
              /></div
          ></b-col>
          <b-col class="mb-3"
            ><div class="homechef-content">
              <p>Robert Kini</p>
            </div>
            <div class="crop1">
              <img
                style="width:100%"
                src="@/assets/089-e-3341-a-82-d-324-e-8723-ea-9501-ea-34-dc.jpg"
              /></div
          ></b-col>
          <b-col class="mb-3"
            ><div class="homechef-content">
              <p>Robert Kini</p>
            </div>
            <div class="crop1">
              <img
                style="width:100%"
                src="@/assets/089-e-3341-a-82-d-324-e-8723-ea-9501-ea-34-dc.jpg"
              /></div
          ></b-col>
        </carousel> </b-row
    ></b-container>
  </b-container>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: { carousel },
  data: function() {
    return {
      left: '<i class="fa fa-angle-left"></i>',
      right: '<i class="fa fa-angle-right"></i>',
    };
  },
};
</script>

<style>
.homechefs .owl-prev {
  border-radius: 50% !important;
  width: 25px;
  height: 25px;
  padding-bottom: 22px !important;
  position: absolute;
  left: -5%;
  font-size: 18px !important;
  top: 45%;
  background: white !important;
  color: #707070 !important;
  display: grid !important;
}
.homechefs .owl-next {
  border-radius: 50% !important;
  width: 25px;
  height: 25px;
  padding-bottom: 22px !important;
  position: absolute;
  right: -5%;
  font-size: 18px !important;
  font-weight: 100;
  top: 45%;
  background: white !important;
  color: #707070 !important;
  display: grid !important;
}

.crop1 {
  width: 100%;
  max-height: 500px;
  overflow: hidden;
}
.crop1 img {
  height: 100%;
}

.homechef-content {
  position: absolute;
  top: 60%;
  height: 40%;
  width: 95%;
  border-radius: 20px;
  z-index: 100;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.4) 65%
  );
}
@media screen and (max-width: 1200px) {
  .homechef-content {
    width: 92%;
  }
}

.homechef-content p {
  color: white;
  font-size: 20px;
  width: 70%;
  text-align: left;
  margin-left: 5%;
  margin-top: 15%;
  font-weight: bold;
}

.homechefs {
  background-color: #f4f5f7;
  padding: 100px 15px 0px 15px;
  box-shadow: 0px 14px 18px 9px rgba(0, 0, 0, 0.2);
}
</style>
