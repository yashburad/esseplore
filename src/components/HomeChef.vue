<template>
  <b-container fluid class="homechefs">
    <b-row
      ><b-col sm="6" style="padding-left:25px;"
        ><h2 style="font-style:italic; margin-bottom:40px;">
          HomeChefs For Hire Near You
        </h2></b-col
      ></b-row
    >
    <b-row
      ><b-col sm="5" offset-md="1" class="mb-3"
        ><div class="homechef-content">
          <p>Robert Kini</p>
        </div>
        <img
          style="width:100%"
          src="@/assets/089-e-3341-a-82-d-324-e-8723-ea-9501-ea-34-dc.jpg"/></b-col
      ><b-col sm="5" class="mb-3"
        ><div class="homechef-content">
          <p>Robert Kini</p>
        </div>
        <img
          style="width:100%"
          src="@/assets/089-e-3341-a-82-d-324-e-8723-ea-9501-ea-34-dc.jpg"/></b-col
    ></b-row>
  </b-container>
</template>

<script>
export default {
  props: {},
  data: function() {
    return {};
  },
  methods: {},
};
</script>

<style>
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
    width: 93%;
  }
}

.homechef-content p {
  color: white;
  font-size: 20px;
  width: 70%;
  text-align: left;
  margin-left: 5%;
  margin-top: 20%;
  font-weight: bold;
}

.homechefs {
  background-color: #f4f5f7;
  padding: 100px 15px 0px 15px;
  box-shadow: 0px 14px #f4f5f7;
}
</style>
