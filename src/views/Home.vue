<template>
  <div class="home">
    <ImageHeader :add="style(this.add)" :content="content" />
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
      <DiningEvents :contents="diningevents" />
    </b-container>
    <b-container fluid>
      <b-row>
        <b-col class="p-5 mb-3" sm="5" offset="1">
          <h2
            style="text-align:left; 
              font-weight: 800;"
          >
            Carefully curated <br />
            flavours by leading Chef <br />
            Yeo Kian Tiong &#8594;
          </h2>
          <p style="text-align:left; margin-top:40px;">
            With Esseplore, Chef KT handpicks some of <br />
            Singapore’s best home cooks and help them to<br />
            build their own culinary business… Read More
          </p>
        </b-col>
        <b-col class="chef" sm="2">
          <img
            style="height: 500px;  
            margin-top: -160px;"
            src="@/assets/image-30.png"
          />
        </b-col>
      </b-row>
    </b-container>
    <Experiences />
    <b-container class="hire" :style="style(add)" fluid>
      <b-row>
        <b-col class="" sm="3" offset="1"
          ><div class="hire-chef pt-4">
            <h1>Hire A Chef</h1>
            <p>
              We have handpicked some of the best home chefs in Singapore whom
              you can invite to come over and turn your kitchen into a
              masterchef’s kitchen.
            </p>
            <b-button pill class="hire-chef1">
              <i class="fa fa-cutlery"></i> Chef Shirley Goh</b-button
            >
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageHeader from "@/components/ImageHeader.vue";
import DiningEvents from "@/components/DiningEvents.vue";
import Experiences from "@/components/Experiences.vue";

export default {
  name: "Home",
  components: { ImageHeader, DiningEvents, Experiences },
  data() {
    return {
      add: require("@/assets/dining-3.jpg"),
      hire: require("@/assets/dsc-1400.jpg"),
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
    style(add) {
      var style = 'background-image: url("' + add + '")';
      return style;
    },
  },
};
</script>

<style>
.hire {
  background-position: center;
  background-size: cover;
  height: 500px;
}

.chef {
  background-color: lightsalmon;
  z-index: 0;
  height: 250px;
  /* transform: rotate(25deg); */
  border-radius: 50px;
}

.hire-chef {
  /* height: 300px; */
  padding: 5px;
  background: #3f434d;
}

.hire-chef p {
  margin-top: 15px;
  text-align: justify;
  color: white;
  font-size: 16px;
  line-height: 1.7;
  letter-spacing: -0.19px;
}

.hire-chef h1 {
  color: white;
  font-family: cursive;
}

.hire-chef1 {
  background-color: #ff6480 !important;
  position: relative;
  top: 20px;
  height: 50px;
}

.dining-events {
  background: #f4f5f7;
  padding-bottom: 150px;
}

.bi-calendar {
  color: #ff6480;
}

.b-datepicker:hover .bi-calendar {
  color: #ff6480 !important;
}

.search {
  border-radius: 5% !important;
  background-color: #ff6480 !important;
  padding: 10px;
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
