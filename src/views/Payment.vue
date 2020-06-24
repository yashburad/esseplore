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
          <b-col class="text-left" style="height:1200px" sm="7">
            <b-form>Personal Information</b-form>
          </b-col>
          <b-col class="text-left p-0 payment-section pb-3" sm="4" offset-md="1">
            <PaymentDescription />
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </b-container>
</template>

<script>
// @ is an alias to /src
import PaymentDescription from "@/components/PaymentDescription.vue";

export default {
  name: "Payment",
  components: { PaymentDescription },
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