<template>
  <b-container class="explore-cuisines" fluid>
    <b-row
      ><b-col sm="5">
        <h4>Explore More Cuisines</h4>
      </b-col>
    </b-row>
    <b-container>
      <b-row>
        <b-col
          ><div class="cuisine">
            <img
              style="width:100%"
              src="@/assets/089-e-3341-a-82-d-324-e-8723-ea-9501-ea-34-dc.jpg"
            />
            <h5>ITALIAN</h5>
          </div></b-col
        >
        <b-col
          ><div class="cuisine">
            <img
              style="width:100%"
              src="@/assets/089-e-3341-a-82-d-324-e-8723-ea-9501-ea-34-dc.jpg"
            />
            <h5>ITALIAN</h5>
          </div></b-col
        ><b-col
          ><div class="cuisine">
            <img
              style="width:100%"
              src="@/assets/089-e-3341-a-82-d-324-e-8723-ea-9501-ea-34-dc.jpg"
            />
            <h5>ITALIAN</h5>
          </div></b-col
        ><b-col
          ><div class="cuisine">
            <img
              style="width:100%"
              src="@/assets/089-e-3341-a-82-d-324-e-8723-ea-9501-ea-34-dc.jpg"
            />
            <h5>ITALIAN</h5>
          </div></b-col
        >
      </b-row>
      <b-row>
        <b-col
          ><div class="cuisine">
            <img
              style="width:100%"
              src="@/assets/089-e-3341-a-82-d-324-e-8723-ea-9501-ea-34-dc.jpg"
            />
            <h5>ITALIAN</h5>
          </div></b-col
        >
        <b-col
          ><div class="cuisine">
            <img
              style="width:100%"
              src="@/assets/089-e-3341-a-82-d-324-e-8723-ea-9501-ea-34-dc.jpg"
            />
            <h5>ITALIAN</h5>
          </div></b-col
        ><b-col
          ><div class="cuisine">
            <img
              style="width:100%"
              src="@/assets/089-e-3341-a-82-d-324-e-8723-ea-9501-ea-34-dc.jpg"
            />
            <h5>ITALIAN</h5>
          </div></b-col
        ><b-col
          ><div class="cuisine">
            <img
              style="width:100%"
              src="@/assets/089-e-3341-a-82-d-324-e-8723-ea-9501-ea-34-dc.jpg"
            />
            <h5>ITALIAN</h5>
          </div></b-col
        >
      </b-row>
    </b-container>
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
.cuisine h5 {
  letter-spacing: 1.38px;
  font-weight: 400;
  margin-top: 30px;
  font-size: medium;
}

.cuisine {
  margin-top: 50px;
  padding: 20px 20px 10px 20px !important;
  border: solid 0.3px rgba(18, 18, 18, 0.2);
}

.cuisine img {
  box-shadow: 0 6.5px 8px 0 rgba(0, 0, 0, 0.5);
}

.explore-cuisines {
  padding-top: 100px;
  margin-bottom: 200px;
}

.explore-cuisines h4 {
  opacity: 0.2;
}

@media screen and (max-width: 992px) {
  .explore-cuisines .row {
    display: block;
  }
}
</style>
