<template>
  <div class="image">
    <b-container fluid class="background" :style="add">
      <b-row class="row1">
        <b-col class="authentic">{{ content }}</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: { add: String, content: String },
  data: function() {
    return {};
  },
  computed: function() {},
  methods: {},
};
</script>

<style>
.background {
  height: 400px;
  background-position: center;
  background-size: cover;
  position: relative;
}

.row1 {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.17);
  position: relative;
}

.authentic {
  top: 70%;
  height: 76.5px;
  text-shadow: 0 1.5px 3.5px rgba(0, 0, 0, 0.58);
  font-family: cursive;
  font-size: 46.5px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: -0.65px;
  text-align: center;
  color: #ffffff;
}
</style>
