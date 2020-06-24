<template>
  <!-- <b-container class="payment" fluid></b-container> -->
  <b-container fluid class="payment p-0">
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
        <b-row class="py-5">
          <b-col class="text-left" sm="7">
            <b-row>
              <b-col sm="12">
                <b-form>
                  <b-form-group
                    id="input-group-2"
                    label="Personal Information"
                    label-for="input-2"
                  >
                    <b-row>
                      <b-col sm="6" class="mt-3">
                        <b-form-input
                          id="input-2"
                          required
                          placeholder="FIRST NAME"
                          class="forminput"
                        >
                        </b-form-input>
                      </b-col>

                      <b-col sm="6" class="mt-3">
                        <b-form-input
                          id="input-2"
                          required
                          placeholder="Enter Last Name"
                        >
                        </b-form-input>
                      </b-col>
                      <b-col sm="12" class="mt-3">
                        <b-form-input
                          id="input-1"
                          type="email"
                          required
                          placeholder="email"
                        ></b-form-input>
                      </b-col>
                      <b-col sm="12" class="mt-3">
                        <b-form-input
                          id="input-1"
                          type="tel"
                          required
                          placeholder="phone number"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                  </b-form-group>

                  <b-form-group
                    id="input-group-2"
                    label="Venue Address"
                    label-for="input-2"
                    class="border-bottom pb-3"
                  >
                    <b-row>
                      <b-col sm="12">
                        <b-form-input
                          id="input"
                          type="text"
                          required
                          placeholder="Address line 1"
                        ></b-form-input>
                      </b-col>
                      <b-col sm="12" class="mt-3">
                        <b-form-input
                          id="input"
                          type="text"
                          placeholder="Address line 2 (OPTIONAL)"
                        ></b-form-input>
                      </b-col>
                      <b-col sm="6" class="mt-3">
                        <b-form-input
                          id="input"
                          type="text"
                          placeholder="CITY"
                        ></b-form-input>
                      </b-col>
                      <b-col sm="6" class="mt-3">
                        <b-form-input
                          id="input"
                          type="text"
                          placeholder="ZIP CODE"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                  </b-form-group>
                  <b-form-group
                    id="input-group-2"
                    label="Billing Address"
                    label-for="input-2"
                    class="border-bottom pb-3"
                  >
                    <b-row>
                      <b-col sm="12">
                        <b-form-input
                          id="input"
                          type="text"
                          required
                          placeholder="Address line 1"
                        ></b-form-input>
                      </b-col>
                      <b-col sm="12" class="mt-3">
                        <b-form-input
                          id="input"
                          type="text"
                          placeholder="Address line 2 (OPTIONAL)"
                        ></b-form-input>
                      </b-col>
                      <b-col sm="6" class="mt-3">
                        <b-form-input
                          id="input"
                          type="text"
                          placeholder="CITY"
                        ></b-form-input>
                      </b-col>
                      <b-col sm="6" class="mt-3">
                        <b-form-input
                          id="input"
                          type="text"
                          placeholder="ZIP CODE"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                  </b-form-group>

                  <h5>
                    ENTER YOUR CARD DETAILS
                    <span class="ml-2" style="color:#929db8;font-size:12px;"
                      >DEBIT/CREDIT CARD ACCEPTED</span
                    >
                  </h5>
                  <b-form-group id="input-group-2" class=" pb-3">
                    <b-row class="credit-card">
                      <b-col sm="12">
                        <b-form-input
                          id="input"
                          type="text"
                          required
                          placeholder="NAME OF CARD HOLDER"
                        ></b-form-input>
                      </b-col>
                      <b-col sm="12" class="mt-3">
                        <b-form-input
                          id="input"
                          type="text"
                          placeholder="CARD NUMBER"
                        ></b-form-input>
                      </b-col>
                      <b-col sm="4" class="mt-3">
                        <b-form-input
                          id="input"
                          type="text"
                          placeholder="EXPIRY(MM/YY)"
                        ></b-form-input>
                      </b-col>
                      <b-col sm="4" offset-md="4" class="mt-3 text-right">
                        <b-form-input
                          id="input"
                          type="text"
                          placeholder="CVV"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                  </b-form-group>
                  For your security, Esseplore does not store your payment card
                  details.
                  <p style="color:#929db8;font-size:14px;">
                    We process your payment through a secured third party
                    payment gateways - Stripe. Your payment card details are
                    encrypted while being transmitted to the Stripe payment
                    gateway. Stripe has been audited u a PCI-certified auditor
                    and is certified to PCI Service Provide Level 1. This is the
                    most stringent level of certification available in the
                    payments inductry.
                  </p>
                </b-form>
              </b-col>
            </b-row>
          </b-col>
          <b-col
            class="text-left p-0 payment-section pb-3"
            sm="4"
            offset-md="1"
          >
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
  methods: {},
};
</script>

<style>
.payment ::placeholder {
  color: #929db8 !important;
  font-weight: bold;
  text-transform: uppercase;
}
</style>

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

        &:placeholder
            color:#929db8 !important

    .form-control
        color: #272727
        border-radius: 8px
        border: solid 1px #dedede
        padding: 25px
        font-size:14px
        &:placeholder
            color:#929db8 !important
            text-transform:uppercase

    .credit-card
        background: #f3f4f9
        padding: 20px 10px
        border-radius: 10px
</style>
