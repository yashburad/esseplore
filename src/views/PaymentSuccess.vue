<template>
  <div>
    <b-container class="payment-success" fluid>
      <b-container class="payment">
        <b-row>
          <b-col class="payment-box" sm="10" offset-md="1">
            <h3>Your Home Chef is confirmed!</h3>
            <h6>Your Home Chef is getting ready to audit your venue.</h6>
          </b-col>
          <b-col class="experience-code" sm="10" offset-md="1"
            ><b-row class="payment-details">
              <b-col class="image" sm="5">
                <img
                  style="width:100%"
                  src="@/assets/fa-905-d-73-c-182764-cb-4-af-73-f-592-e-96-a-89@3x.jpg"
                />
                <img class="chef-photo1" src="@/assets/dsc-1405@3x.png" />
              </b-col>
              <b-col class="details" sm="7">
                <div
                  style="border-bottom:1px solid #dfe0e5; padding-bottom:10px;"
                >
                  <h5 class="mb-1">Local Asian Fusion Dinner in Singapore</h5>
                  <span style="color:#1b2749;">Chef Martin Yan</span>
                </div>
                <div class="mt-2 details1">
                  <p class="mb-0">
                    <i class="fa fa-calendar" style="color: #929dbb;"></i>8 Oct
                    2020
                  </p>
                  <div class="mt-1 d-flex">
                    <p>
                      <i class="fa fa-map-marker" style="color: #929dbb;"></i>
                    </p>
                    <span class="location"
                      >180 Paya Lebar Road #07-06 Yi Guang Factory Building,
                      409032, Singapore</span
                    >
                  </div>
                </div>
              </b-col>
            </b-row>
            <b-col sm="1"></b-col>
            <b-col sm="12">
              <h6>Your Experience Code</h6>
              <h6>
                Keep this code handy before the event and share it with your
                Home Chef on their arrival.
              </h6>
            </b-col></b-col
          >
        </b-row>
        <b-row> </b-row>
      </b-container>
    </b-container>
  </div>
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
.experience-code {
  background-image: linear-gradient(to bottom, #ffffff 7%, #e8eaf0 123%);
  height: 300px;
}

.location {
  padding-left: 15px;
  font-weight: 200;
  color: #ff6480;
  line-height: 1.33;
}
/* .payment-details .details .details1 {
  padding-left: 10px;
} */
.payment-details .details {
  text-align: left;
  color: black;
  padding: 20px 10px 20px 10px !important;
}

.payment-details .chef-photo1 {
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 80px;
}

.payment-details .image {
  padding: 20px !important;
}

.payment-details {
  background: white;
  margin: 0px 10px !important;
  border-radius: 5px;
  color: black;
  position: inherit;
  margin-top: 100px;
  top: -35%;
  box-shadow: 0 4px 6px 0 rgba(12, 20, 61, 0.06);
}

.payment-box {
  margin-top: 100px;
  background: #ff6480;
  padding: 50px 50px 150px 50px;
  color: white;
}

.payment-box h4 {
  letter-spacing: 1px;
}

.payment-success {
  background: rgba(0, 0, 0, 0.11);
}
</style>
