<template>
  <div class="summary">
    <b-container fluid class="booking-summary">
      <b-container>
        <b-row class="py-3">
          <h5 class="p-0 m-0">
            <i class="fa fa-arrow-left" aria-hidden="true"></i> Booking Summary
          </h5>
        </b-row>
      </b-container>
    </b-container>
    <b-container>
      <b-row class="booking-heading">
        <b-col offset-md="1" sm="10">
          <b-row>
            <b-col sm="3">
              <img
                style="width:100%;"
                src="@/assets/fa-905-d-73-c-182764-cb-4-af-73-f-592-e-96-a-89.jpg"
              />
            </b-col>
            <b-col sm="9" style="text-align:left;">
              <h4 style="text-align:left;font-weight:bold;">
                Local Asian Fusion Dinner in Singapore
              </h4>
              <p muted style="color:rgba(27, 39, 73, 0.54);">
                Chef Shirley Goh
              </p>
              <p class="schedule">
                <i class="fa fa-calendar" aria-hidden="true"></i> 8 Oct 2020 -
                24 Oct 2020
              </p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="10" offset-md="1">
          <table class="table">
            <thead>
              <tr>
                <th style="text-align:left; width:40%;">Description</th>
                <th scope="col" style="width:15%;">Rate</th>
                <th scope="col" style="width:20%;">Quantity</th>
                <th scope="col" style="text-align:right;width:20%">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr class="first-row" style="margin-top:100px;">
                <td class="d-flex" style="text-align:left">
                  <h5><i class="fa fa-user"></i> Pax</h5>
                </td>
                <td scope="col" style="color:#ff6480; font-size:24px;">
                  <!-- <div class="d-flex" style="text-align:center;"> -->
                  <p><sup>S$</sup>100</p>
                  <!-- </div> -->
                </td>
                <td scope="col" style>
                  <h4>
                    {{ quantity }}
                    <button
                      type="button"
                      @click="change(-1)"
                      class="btn btn-circle btn-sm"
                    >
                      -
                    </button>
                    <button
                      type="button"
                      @click="change(1)"
                      class="btn btn-circle btn-sm"
                    >
                      +
                    </button>
                  </h4>
                </td>
                <td scope="col" style="text-align:right; font-size:16px;">
                  <sup>S$</sup>400
                </td>
              </tr>
              <tr class="menu" style="text-align:left;">
                <td colspan="4">
                  <h4 style="padding-left:40px;">Menu</h4>
                </td>
              </tr>
              <tr class="menu" style="text-align:left;">
                <td colspan="4">
                  <h5 class="menu-content">APPETIZER</h5>
                  <h6 style="padding-left:40px;">TOFU SATAY</h6>
                </td>
              </tr>
              <tr class="menu" style="text-align:left;">
                <td colspan="4">
                  <h5 class="menu-content">MAIN COURSE</h5>
                  <h6 style="padding-left:40px;">TOFU SATAY</h6>
                </td>
              </tr>
              <tr class="menu" style="text-align:left;">
                <td colspan="4">
                  <h5 class="menu-content">DESSERT</h5>
                  <h6 style="padding-left:40px;">TOFU SATAY</h6>
                </td>
              </tr>
              <tr class="first-row" style="margin-top:100px;">
                <td colspan="3" class="d-flex" style="text-align:left">
                  <h5 @click="toggle">
                    <i class="fa">
                      <img src="@/assets/group-2612.svg" />
                    </i>
                    Wine &#9662;
                  </h5>
                </td>
              </tr>

              <tr
                class="wine-table"
                :style="
                  this.show
                    ? 'display:table-row;height:auto;'
                    : 'display:none;height:0px;'
                "
              >
                <td class="d-flex" style="text-align:left">
                  <div>
                    <h5 class="menu-content">APPETIZER</h5>
                    <h6 style="padding-left:40px;">TOFU SATAY</h6>
                  </div>
                </td>

                <td scope="col" style="color:#ff6480; font-size:24px;">
                  <p><sup>S$</sup>100</p>
                </td>
                <td scope="col" style>
                  <h4>
                    {{ quantity }}
                    <button
                      type="button"
                      @click="change(-1)"
                      class="btn btn-circle btn-sm"
                    >
                      -
                    </button>
                    <button
                      type="button"
                      @click="change(1)"
                      class="btn btn-circle btn-sm"
                    >
                      +
                    </button>
                  </h4>
                </td>
                <td scope="col" style="text-align:right; font-size:16px;">
                  <sup>S$</sup>400
                </td>

                <!-- </tr> -->
              </tr>
              <tr
                class="wine-table"
                :style="
                  this.show
                    ? 'display:table-row;height:auto;'
                    : 'display:none;height:0px;'
                "
              >
                <td class="d-flex" style="text-align:left">
                  <div>
                    <h5 class="menu-content">APPETIZER</h5>
                    <h6 style="padding-left:40px;">TOFU SATAY</h6>
                  </div>
                </td>

                <td scope="col" style="color:#ff6480; font-size:24px;">
                  <p><sup>S$</sup>100</p>
                </td>
                <td scope="col" style>
                  <h4>
                    {{ quantity }}
                    <button
                      type="button"
                      @click="change(-1)"
                      class="btn btn-circle btn-sm"
                    >
                      -
                    </button>
                    <button
                      type="button"
                      @click="change(1)"
                      class="btn btn-circle btn-sm"
                    >
                      +
                    </button>
                  </h4>
                </td>
                <td scope="col" style="text-align:right; font-size:16px;">
                  <sup>S$</sup>400
                </td>

                <!-- </tr> -->
              </tr>
              <tr>
                <td colspan="3"></td>
                <!-- <td></td>
                <td></td>-->
                <td style="text-align:right;">
                  <p>
                    Total :
                    <span class="price">S$284</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="3" offset="9">
          <button class="summary-next">NEXT</button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
.summary {
  margin-bottom: 40px;
}

.summary-next {
  background: #ff6480;
  border: none;
  padding: 20px 0px 20px 0px;
  color: white;
  width: 100%;
}

@media screen and (min-width: 992px) {
  .price {
    font-size: 24px;
  }
}

@media screen and (max-width: 992px) {
  .summary .menu h4 {
    padding-left: 15px !important;
  }
  .summary .menu h5 {
    padding-left: 15px !important;
  }
  .summary .menu h6 {
    padding-left: 15px !important;
  }
}

.wine-table {
  transition: 5s;
  transform: scaleY(100%);
}

.fa img {
  width: 10px;
  margin-right: 10px;
  padding-bottom: 10px;
}

.menu-content {
  padding-left: 40px;
  font-weight: bold;
  /* margin-top: 15px; */
}

.summary .menu {
  background: rgba(160, 165, 179, 0.1);
}
.btn-circle.btn-sm {
  width: 25px;
  height: 25px;
  padding: 0px 0px;
  border-radius: 15px;
  font-size: 16px;
  margin: 0px 5px;
  color: #707070;
  border: solid 0.5px #707070;
}
thead {
  background-color: rgba(203, 203, 203, 0.2) !important;
}

.first-row td {
  padding-top: 50px !important;
}

.table td {
  border-top: 0px !important;
}

.fa-user {
  color: #ff6480;
  margin-right: 10px;
}

th {
  color: #151515;
  opacity: 0.67;
  border: 0px !important;
}

.booking-summary {
  /* background-color: rgba(160, 165, 179, 0.2); */
  background-color: #f7f7f9;
}

.booking-summary h5 {
  margin-bottom: 0px !important;
}
.schedule .fa-calendar {
  margin-right: 20px;
}
.schedule {
  border-top: solid 0.5px #dfe0e5;
  padding-top: 10px;
  margin-top: -10px;
}

.fa-arrow-left {
  opacity: 0.21;
  margin-right: 20px;
}

.booking-heading {
  margin-top: 50px;
}
</style>

<script>
// @ is an alias to /src

// import Calendar

export default {
  name: "Home",
  components: {},
  data() {
    return {
      show: false,
      quantity: 1,
    };
  },
  methods: {
    change(value) {
      this.quantity += value;
    },
    toggle() {
      this.show = !this.show;
    },
  },
};
</script>
