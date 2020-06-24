<template>
  <!-- <b-container class="payment" fluid></b-container> -->
  <b-container fluid class="payment">
    <b-container fluid class="checkout-header">
      <b-container>
        <b-row class="py-3">
          <h5 class="p-0 m-0">
            <i class="fa fa-arrow-left" aria-hidden="true"></i> Checkout
          </h5>
        </b-row>
      </b-container>
    </b-container>
    <b-container fluid>
      <b-container>
        <b-row class="pt-5">
          <b-col class="text-left" style="height:1200px" sm="7">Personal Information</b-col>
          <b-col class="text-left p-0 payment-section pb-3" sm="4" offset-md="1">
            <div>
              <div style="position:relative">
                <img
                  class="px-3 py-3"
                  style="width:100%;"
                  src="@/assets/fa-905-d-73-c-182764-cb-4-af-73-f-592-e-96-a-89@3x.jpg"
                />
                <img class="chef-photo1" src="@/assets/dsc-1405@3x.png" />
              </div>

              <div class="pt-3 px-3">
                <h6 class="font-weight-bold" style="width:80%">
                  Local Asian Fusion Dinner
                  in Singapore
                </h6>
                <div class="d-flex pb-3 align-items-center border-bottom">
                  <h5 style="color:#ff6480" class="m-0">S$80</h5>
                  <span cl style="font-size:12px; color:#929dbb" class="ml-2">per guest</span>
                </div>
                <div class="d-flex py-3 align-items-center border-bottom" style="font-size:12px">
                  <p class="m-0 w-100">
                    <i class="fa fa-calendar"></i>
                    8 Oct 2020
                    <span style="float:right">
                      <i class="fa fa-clock mr-1"></i>6:30 PM - 8:30 PM
                    </span>
                  </p>
                </div>
                <div class="d-flex py-3 align-items-center border-bottom">
                  <p class="m-0 w-100">
                    S$80 x 3 Guests
                    <span style="float:right">S$240</span>
                  </p>
                </div>
                <div class="py-3 align-items-center border-bottom">
                  <h6 class>Wine</h6>
                  <div class="d-flex mb-3" style="color:rgba(0,0,0,0.4)">
                    <div style="width:60%">SAINT EMILION GRAND CRU - Chateau Simard 2009</div>
                    <div class="text-right" style="width:40%">+ S$12</div>
                  </div>
                  <div class="d-flex mb-3" style="color:rgba(0,0,0,0.4)">
                    <div style="width:60%">SAINT EMILION GRAND CRU - Chateau Simard 2009</div>
                    <div class="text-right" style="width:40%">+ S$12</div>
                  </div>
                </div>

                <div class="d-flex py-3 align-items-center">
                  <p class="m-0 w-100" style="font-size:20px;">
                    Total
                    <span style="float:right">S$240</span>
                  </p>
                </div>

                <button class="makepayment w-100 mb-2">Make Payment</button>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </b-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Payment",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="sass">
.payment

    .checkout-header
        background-color: #f7f7f9

    .payment-section
        background-color: #f7f7f9
        height: fit-content

        .chef-photo1
            position: absolute
            left: 0
            bottom: 0
            width: 80px

        .makepayment
            border: none
            background: #ff6480
            color: white
            padding: 20px
            font-size: 20px
            text-transform: uppercase
</style>