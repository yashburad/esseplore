<template>
  <b-container fluid class="bestselling">
    <b-row class="p-5">
      <b-col sm="12"><h4 style="">BestSelling Experiences</h4></b-col>
    </b-row>
    <b-container>
      <b-row>
        <b-col sm="3" class="experiences"
          ><div class="cards">
            <img src="@/assets/image-6.png" />
            <h6>An evening</h6>
            <p style="text-align:left;">
              22 Feb 2020
              <span style="float:right;">
                2:00-6:00
              </span>
            </p>
          </div></b-col
        >
        <b-col sm="3" class="experiences"
          ><div class="cards">
            <img src="@/assets/image-6.png" />
            <h6>An evening</h6>
            <p style="text-align:left;">
              22 Feb 2020
              <span style="float:right;">
                2:00-6:00
              </span>
            </p>
          </div></b-col
        >
        <b-col sm="3" class="experiences"
          ><div class="cards">
            <img src="@/assets/image-6.png" />
            <h6>An evening</h6>
            <p style="text-align:left;">
              22 Feb 2020
              <span style="float:right;">
                2:00-6:00
              </span>
            </p>
          </div></b-col
        >
        <b-col sm="3" class="experiences"
          ><div class="cards">
            <img src="@/assets/image-6.png" />
            <h6>An evening</h6>
            <p style="text-align:left;">
              22 Feb 2020
              <span style="float:right;">
                2:00-6:00
              </span>
            </p>
          </div></b-col
        >
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
export default {};
</script>

<style>
.fa-cutlery {
  margin-right: 20px;
}
.explore-more {
  margin-top: 40px;
  margin-bottom: 80px;

  background-color: #929dbb !important;
  border-color: #929dbb !important;
  padding: 10px 40px 10px 40px !important;
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
  width: 100%;
}

.cards {
  background: white;
  padding: 10px !important;
}

.cards-details {
  text-align: left;
}
</style>
