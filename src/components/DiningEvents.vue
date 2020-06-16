<template>
  <b-col class="d-md-flex" sm="12">
    <b-col
      v-for="content in contents"
      :key="content['content']"
      class="events"
      sm="4"
    >
      <div class="red-flash"><i class="fa fa-flash"></i></div>
      <div class="lightning-content">
        <p>{{ content["content"] }}</p>
      </div>
      <img style="width:100%" :src="content['url']" alt="abc" /> </b-col
  ></b-col>
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
.lightning-content {
  position: absolute;
  top: 60%;
  height: 40%;
  width: 90%;
  z-index: 100;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.4) 65%
  );
}

.lightning-content p {
  color: white;
  font-size: 20px;
  width: 70%;
  text-align: left;
  margin-left: 5%;
  margin-top: 5%;
  font-weight: bold;
  font-family: Graphit;
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
