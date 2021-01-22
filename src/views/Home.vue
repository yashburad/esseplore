<template>
  <div class="home">
    <ImageHeader :add="style(this.add)" :content="content" />
    <b-container fluid class="dining-events">
      <b-row>
        <b-col sm="12" style="margin-top:-20px;  ">
          <b-form class="d-inline-flex">
            <b-datepicker class="mr-sm-4 calendar" placeholder="">
              <label style="width:170px;"></label>
              <b-datepicker
                class="mr-sm-4 calendar"
                placeholder=""
              ></b-datepicker>
            </b-datepicker>
            <!-- <b-datepicker
              class="mr-sm-4 calendar"
              placeholder=""
            ></b-datepicker> -->
            <b-input-group class=" mb-2 mr-sm-4 mb-sm-0">
              <b-input
                id="guest inline-form-input-username"
                placeholder=""
              ></b-input>
            </b-input-group>
            <b-button class="search">Search</b-button>
          </b-form>
        </b-col>
        <!-- <b-col offset-md="2" sm="8" style="margin-top:-20px;  ">
          <b-form>
            <b-row>
              <b-col class="px-0" sm="6">
                <date-picker
                  format="D-MMM-YYYY"
                  v-model="value1"
                  type="date"
                  range
                  placeholder="Select date range"
                />
              </b-col>
              <b-col class="px-0" sm="4">
                <div class="guest d-flex pl-3 text-left bg-white">
                  <i class="fa fa-group" style="color:#ff6480"></i>
                  <h6 class="pl-3 m-0">1 guest</h6>
                  <div style="float:right">
                    <span class="ml-3 rounded-circle">- </span>
                    <span class="ml-3 rounded-circle">+ </span>
                  </div>
                </div>
              </b-col>
              <b-col class="px-0" sm="2">
                <b-button class="search">Search</b-button>
              </b-col>
              <b-form-spinbutton
                id="sb-inline"
                v-model="value"
                inline
              ></b-form-spinbutton>
            </b-row>
          </b-form>
        </b-col> -->
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
    <HireAChef :background="style" :url="this.hire" />
    <HomeChef />
    <ExploreCuisines />
  </div>
</template>

<script>
// import DatePicker from "vue2-datepicker";
// import "vue2-datepicker/index.css";
// @ is an alias to /src
import ImageHeader from "@/components/ImageHeader.vue";
import DiningEvents from "@/components/DiningEvents.vue";
import Experiences from "@/components/Experiences.vue";
import HireAChef from "@/components/HireAChef.vue";
import HomeChef from "@/components/HomeChef.vue";
import ExploreCuisines from "@/components/ExploreCuisines.vue";

export default {
  name: "Home",
  components: {
    ImageHeader,
    DiningEvents,
    Experiences,
    HireAChef,
    HomeChef,
    ExploreCuisines,
    // DatePicker,
  },
  data() {
    return {
      arrow: '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
      value1: [new Date(2019, 9, 8), new Date(2019, 9, 19)],
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
        {
          url: require("@/assets/dining-3.jpg"),
          content: "An evening of satays  Singapore’s …",
        },
        {
          url: require("@/assets/dining-3.jpg"),
          content: "An evening of satays at  …",
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
.rounded-circle {
  border: 1px solid;
  height: 24px;
  width: 24px;
  text-align: center;
  cursor: pointer;
  float: right;
}

.guest {
  height: 50px;
  box-shadow: 0 3.5px 3px 0 rgba(12, 20, 61, 0.11);
  border-radius: 5px;
  align-items: center;
  width: 80%;
}

.mx-icon-calendar {
  left: 8px !important;
  right: auto;
  color: #ff6480;
}

.mx-input {
  padding: 6px 30px 6px 40px !important;
}

.mx-input-wrapper:hover .mx-icon-clear + .mx-icon-calendar {
  display: block !important;
}

.chef {
  background-color: lightsalmon;
  z-index: 0;
  height: 250px;
  /* transform: rotate(25deg); */
  border-radius: 50px;
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
