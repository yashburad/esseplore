<template>
  <b-container>
    <b-row class="lightning1">
      <b-col class="d-flex" sm="12">
        <b-col style="text-align:left;" sm="5">
          <h4 style="font-weight:bold;letter-spacing:1px;font-weight:200;">
            Upcoming Home Dining Events
          </h4>
        </b-col>
      </b-col>
      <b-col class="d-md-flex" sm="12">
        <b-col
          v-for="content in contents"
          :key="content['content']"
          class="events1"
          sm="4"
        >
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
              <span style="font-size:19px;">S$100</span>
              <h6 class="per-guest">per guest</h6>
            </div>
          </div>
          <div class="m-2" style="text-align:left">
            <p>
              <i class="fa fa-calendar"></i> 8 Oct 2020
              <span style="float:right"
                ><i class="fa fa-clock-o"></i>6:30 PM - 8:30 PM</span
              >
            </p>
          </div>
        </b-col></b-col
      >
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: { contents: Array },
  data: function() {
    return {};
  },
  methods: {},
};
</script>

<style>
.top-box {
  padding-bottom: 20px;
}

.fa-clock-o {
  margin-right: 10px;
}
.per-guest {
  color: #929dbb;
  font-size: 12px;
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
  width: 30%;
  text-align: right;
}

.fa-calendar {
  margin-right: 10px;
}

.lightning1 {
  padding-bottom: 20px;
}

.events1 {
  margin: 20px 20px 20px 0px;
  background-color: white;
  padding: 0px !important;
}

.events1 img {
}
</style>
