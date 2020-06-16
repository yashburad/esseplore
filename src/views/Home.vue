<template>
  <div class="home">
    <ImageHeader :add="style()" :content="content" />
    <b-container fluid class="dining-events">
      <b-row>
        <b-col sm="12" style="margin-top:-20px;  ">
          <b-form class="d-inline-flex">
            <b-datepicker class="mr-sm-4 calendar" placeholder="">
              <label style="width:170px;"></label>
            </b-datepicker>

            <b-input-group class=" mb-2 mr-sm-4 mb-sm-0">
              <b-input
                id="guest inline-form-input-username"
                placeholder=""
              ></b-input>
            </b-input-group>

            <b-button class="search">Search</b-button>
          </b-form>
        </b-col>
      </b-row>
      <b-container>
        <b-row class="lightning">
          <b-col class="d-flex" sm="12">
            <b-col style="text-align:left;" sm="4"
              ><h4>Lightning Dining Events</h4></b-col
            ><b-col sm="4"></b-col>
            <b-col sm="4"
              ><h6 class="mt-2">
                Last few hours before these events vanish
              </h6></b-col
            ></b-col
          >
          <DiningEvents :contents="diningevents" />
        </b-row>
      </b-container>
    </b-container>
    <b-container fluid>
      <b-row>
        <b-col class="p-5" sm="5" offset="1">
          <h2
            style="text-align:left; 
              font-weight: 800;"
          >
            Carefully curated <br />
            flavours by leading Chef <br />
            Yeo Kian Tiong &#8594;
          </h2>
          <p style="text-align:left">
            With Esseplore, Chef KT handpicks some of <br />
            Singapore’s best home cooks and help them to<br />
            build their own culinary business… Read More
          </p>
        </b-col>
        <b-col class="chef" sm="3">
          <!-- <img style="z-index:0;" src="@/assets/image-32.jpg" /> -->
          <img
            style="height: 500px;  transform: rotate(-25deg);
            margin-top: -160px;"
            src="@/assets/image-30.png"
          />
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="bestselling">
      <b-row class="p-5">
        <b-col sm="12"><h4 style="">BestSelling Experiences</h4></b-col>
      </b-row>
      <b-row></b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageHeader from "@/components/ImageHeader.vue";
import DiningEvents from "@/components/DiningEvents.vue";

export default {
  name: "Home",
  components: { ImageHeader, DiningEvents },
  data() {
    return {
      add: require("@/assets/dining-3.jpg"),
      content: "Authentic Dining Experiences",
      diningevents: [
        {
          url: require("@/assets/dining-3.jpg"),
          content: "An evening of satays at Singapore’s …",
        },
        {
          url: require("@/assets/dining-3.jpg"),
          content: "An evening of satays at Singapore’s …",
        },
        {
          url: require("@/assets/dining-3.jpg"),
          content: "An evening of satays at Singapore’s …",
        },
      ],
    };
  },
  methods: {
    style() {
      var style = 'background-image: url("' + this.add + '")';
      return style;
    },
  },
};
</script>

<style>
.chef {
  background-color: lightsalmon;
  z-index: 0;
  height: 300px;
  transform: rotate(25deg);
  border-radius: 50px;
}
.bestselling h4 {
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 5px;
}
.bestselling {
  padding-top: 40px;
  background: #f4f5f7;
  height: 500px;
  z-index: 100;
  position: relative;
}

.dining-events {
  background: #f4f5f7;
  padding-bottom: 150px;
}

.btn-secondary {
  background-color: #ff6480 !important;
  padding: 10px;
}

.bi-calendar {
  color: #ff6480;
}

.b-datepicker:hover .bi-calendar {
  color: #ff6480 !important;
}

.search {
  border-radius: 5% !important;
}
.guest {
  border-radius: 5% !important;
  padding: 5px !important;
}
.calendar {
  border-radius: 5% !important;
  /* width: 200px !important; */
  padding: 5px !important;
}

.calendar label {
  width: 170px;
}
</style>
