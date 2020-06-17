<template>
  <b-container class="hire" :style="background(url)" fluid>
    <b-row>
      <b-col class="" sm="3" offset="1"
        ><div class="hire-chef pt-4">
          <h1>Hire A Chef</h1>
          <p>
            We have handpicked some of the best home chefs in Singapore whom you
            can invite to come over and turn your kitchen into a masterchef’s
            kitchen.
          </p>
          <b-button pill class="hire-chef1">
            <i class="fa fa-cutlery"></i> Chef Shirley Goh</b-button
          >
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: { background: Function, url: String },
  data: function() {
    return {};
  },
  computed: function() {},
  methods: {},
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
</style>
