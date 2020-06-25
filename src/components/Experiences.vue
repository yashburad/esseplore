<template>
  <b-container fluid class="bestselling">
    <b-row class="p-5">
      <b-col sm="12"><h4 style="">BestSelling Experiences</h4></b-col>
    </b-row>
    <b-container>
      <b-row>
        <carousel
          class="w-100"
          :responsive="{
            0: { items: 1, nav: false, autoplay: true },
            600: { items: 4, nav: true, dots: false },
          }"
          :navText="[left, right]"
        >
          <b-col class="experiences"
            ><div class="cards">
              <div class="crop">
                <img src="@/assets/image-6.png" />
              </div>
              <h6>An evening</h6>
              <p style="text-align:left;">
                22 Feb 2020
                <span style="float:right;">
                  2:00-6:00
                </span>
              </p>
            </div></b-col
          >
          <b-col class="experiences"
            ><div class="cards">
              <div class="crop">
                <img src="@/assets/image-6.png" />
              </div>
              <h6>An evening</h6>
              <p style="text-align:left;">
                22 Feb 2020
                <span style="float:right;">
                  2:00-6:00
                </span>
              </p>
            </div></b-col
          >
          <b-col class="experiences"
            ><div class="cards">
              <div class="crop">
                <img src="@/assets/dining-3.jpg" />
              </div>
              <h6>An evening</h6>
              <p style="text-align:left;">
                22 Feb 2020
                <span style="float:right;">
                  2:00-6:00
                </span>
              </p>
            </div></b-col
          >
          <b-col class="experiences"
            ><div class="cards">
              <div class="crop">
                <img src="@/assets/dining-3.jpg" />
              </div>
              <h6>An evening</h6>
              <p style="text-align:left;">
                22 Feb 2020
                <span style="float:right;">
                  2:00-6:00
                </span>
              </p>
            </div></b-col
          >
          <b-col class="experiences"
            ><div class="cards">
              <div class="crop">
                <img src="@/assets/dining-3.jpg" />
              </div>
              <h6>An evening</h6>
              <p style="text-align:left;">
                22 Feb 2020
                <span style="float:right;">
                  2:00-6:00
                </span>
              </p>
            </div></b-col
          >
        </carousel>
      </b-row>
    </b-container>
    <b-row>
      <b-col>
        <b-button class="explore-more" pill
          ><i class="fa fa-cutlery"></i> Explore more Home Dining
          Experiences</b-button
        >
      </b-col>
    </b-row>
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
.crop {
  width: 100%;
  height: 320px;
  overflow: hidden;
}
/* .crop img {
  width: 400px;
  height: 300px;
  margin: -75px 0 0 -100px;
} */

.bestselling .owl-prev {
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
.bestselling .owl-next {
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

.fa-cutlery {
  margin-right: 20px;
}
.explore-more {
  margin-top: 40px;
  margin-bottom: 80px;

  background-color: #929dbb !important;
  border-color: #929dbb !important;
  padding: 20px 40px 20px 40px !important;
  letter-spacing: 1px;
}

.bestselling h4 {
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 5px;
}
.bestselling {
  padding-top: 40px;
  background: #f4f5f7;
  z-index: 100;
  position: relative;
}

.experiences {
  padding: 10px !important;
}

.cards h6 {
  margin-top: 10px;
  color: black;
  text-align: left;
  font-weight: bold;
}

.cards p {
  margin-bottom: 0px !important;
}
.experiences img {
  /* width: 100%; */
  height: 100%;
}

.cards {
  background: white;
  padding: 10px !important;
}

.cards-details {
  text-align: left;
}
</style>
