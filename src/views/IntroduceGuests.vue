<template>
  <b-container fluid class="guests">
    <b-row class="py-5 bg-white">
      <b-col class="d-flex mb-3" sm="1" offset-md="2">
        <a class="arrow">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </a>
      </b-col>
      <b-col class="text-left" sm="5">
        <h5 class="font-weight-bold">Introduce Your Guests</h5>
        <p style="opacity:0.5">
          Share key information about your guests that will, possibly, help the
          Home Chef create a better experience for them.
        </p>
      </b-col>
      <b-col class="text-left" sm="3">
        <button class="savesubmit">Save & Submit</button>
      </b-col>
    </b-row>
    <b-container>
      <b-row class="py-5 border-bottom">
        <b-col class sm="1" offset-md="1">
          <img class="guest-image" src="@/assets/dsc-1405@3x.png" />
        </b-col>
        <b-col class="guest-name" sm="3">
          <h5>
            You
            <span>(Srishti)</span>
          </h5>
        </b-col>
      </b-row>
      <b-row v-for="(guests,index) in form" :key="index" class="py-5 border-bottom">
        <b-col class sm="1" offset-md="1">
          <div @click="add" class="circle">
            <i class="fa fa-plus"></i>
          </div>
        </b-col>

        <b-col class="text-left" sm="9">
          <b-form style="display:grid" v-if="true">
            <b-form-group>
              <input
                :class="guests.changer?'input-name1':'input-name'"
                v-model="guests.name"
                type="text"
                :readonly="!guests.changer"
                required
              />
              <i
                :style="guests.changer?'display:none':''"
                style="color: rgba(160, 165 ,179, 0.4);"
                @click="change(index)"
                class="material-icons"
              >edit</i>

              <a
                class="pl-4"
                style="color:#4795ff"
                :style="guests.changer?'':'display:none'"
                @click="change(index)"
              >
                <i class="fa fa-check" aria-hidden="true"></i> Update
              </a>
            </b-form-group>

            <div class="dietary-preferences bg-white">
              <b-button v-b-toggle="'collapse-1'+index" variant="white" class="dietary">
                Pick Dietary Preferences
                <span
                  style="color:#ff6480;font-size:14px;"
                >({{guests.DietaryPreferences.length}})</span>
                <span style="float:right;">&#9662;</span>
              </b-button>
              <b-collapse :id="'collapse-1'+index">
                <b-card>
                  <b-button
                    pill
                    :class="guests.DietaryPreferences.includes('noalcohol')?'selected mr-2 mb-2':'not-selected mr-2 mb-2'"
                    @click="DietAdd(index,'noalcohol')"
                    type="button"
                  >No Alcohol</b-button>
                  <b-button
                    pill
                    :class="guests.DietaryPreferences.includes('Non-Vegetarian')?'selected mr-2 mb-2':'not-selected mr-2 mb-2'"
                    @click="DietAdd(index,'Non-Vegetarian')"
                    type="button"
                  >Non-Vegetarian</b-button>
                  <b-button
                    pill
                    :class="guests.DietaryPreferences.includes('No Pork')?'selected mr-2 mb-2':'not-selected mr-2 mb-2'"
                    @click="DietAdd(index,'No Pork')"
                    type="button"
                  >No Pork</b-button>
                  <b-button
                    pill
                    :class="guests.DietaryPreferences.includes('No Meat - Seafood Only')?'selected mr-2 mb-2':'not-selected mr-2 mb-2'"
                    @click="DietAdd(index,'No Meat - Seafood Only')"
                    type="button"
                  >No Meat - Seafood Only</b-button>
                  <b-button
                    pill
                    :class="guests.DietaryPreferences.includes('No Mushroom')?'selected mr-2 mb-2':'not-selected mr-2 mb-2'"
                    @click="DietAdd(index,'No Mushroom')"
                    type="button"
                  >No Mushroom</b-button>
                </b-card>
              </b-collapse>
            </div>
            <div class="food-allergies mt-4 bg-white">
              <b-button v-b-toggle="'collapse-2'+index" variant="white" class="dietary mt-2">
                Pick Food Allergies
                <span
                  style="color:#ff6480;font-size:14px;"
                >({{guests.FoodAllergies.length}})</span>
                <span style="float:right;">&#9662;</span>
              </b-button>
              <b-collapse :id="'collapse-2'+index">
                <b-card>
                  <b-button
                    pill
                    :class="guests.FoodAllergies.includes('noalcohol')?'selected mr-2 mb-2':'not-selected mr-2 mb-2'"
                    @click="FoodAdd(index,'noalcohol')"
                    type="button"
                  >No Alcohol</b-button>
                  <b-button
                    pill
                    :class="guests.FoodAllergies.includes('Non-Vegetarian')?'selected mr-2 mb-2':'not-selected mr-2 mb-2'"
                    @click="FoodAdd(index,'Non-Vegetarian')"
                    type="button"
                  >Non-Vegetarian</b-button>
                  <b-button
                    pill
                    :class="guests.FoodAllergies.includes('No Pork')?'selected mr-2 mb-2':'not-selected mr-2 mb-2'"
                    @click="FoodAdd(index,'No Pork')"
                    type="button"
                  >No Pork</b-button>
                  <b-button
                    pill
                    :class="guests.FoodAllergies.includes('No Meat - Seafood Only')?'selected mr-2 mb-2':'not-selected mr-2 mb-2'"
                    @click="FoodAdd(index,'No Meat - Seafood Only')"
                    type="button"
                  >No Meat - Seafood Only</b-button>
                  <b-button
                    pill
                    :class="guests.FoodAllergies.includes('No Mushroom')?'selected mr-2 mb-2':'not-selected mr-2 mb-2'"
                    @click="FoodAdd(index,'No Mushroom')"
                    type="button"
                  >No Mushroom</b-button>
                </b-card>
              </b-collapse>
            </div>
          </b-form>
        </b-col>
      </b-row>
      <b-row class="pt-5">
        <b-col sm="3" offset-md="8" class="text-right">
          <button class="savesubmit">Save & Submit</button>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
// @ is an alias to /src
// import GuestForm from "@/components/GuestForm.vue";

export default {
  name: "IntroduceGuests",
  components: {},
  data() {
    return {
      forms: 1,
      changer: true,
      form: [
        { name: "", DietaryPreferences: [], FoodAllergies: [], changer: true }
      ]
    };
  },
  methods: {
    add() {
      this.form.push({
        name: "",
        DietaryPreferences: [],
        FoodAllergies: [],
        changer: true
      });
    },
    change(index) {
      this.form[index].changer = !this.form[index].changer;
    },
    DietAdd(index, str) {
      var n = this.form[index].DietaryPreferences.includes(str);
      if (n) {
        const index1 = this.form[index].DietaryPreferences.indexOf(str);
        this.form[index].DietaryPreferences.splice(index1, 1);
      } else {
        this.form[index].DietaryPreferences.push(str);
      }
    },
    FoodAdd(index, str) {
      var n = this.form[index].FoodAllergies.includes(str);
      if (n) {
        const index1 = this.form[index].FoodAllergies.indexOf(str);
        this.form[index].FoodAllergies.splice(index1, 1);
      } else {
        this.form[index].FoodAllergies.push(str);
      }
    }
  }
};
</script>

<style lang="sass">
.guests
  background-color: rgba(0, 0, 0, 0.05)

  .fa-pencil
    font-family: none !important

  .card
    border: none !important
    padding-top: 0px!important

  .card-body
    padding-top: 0px!important
    padding-left: 10px!important

  .selected
    background: #ff6480
    border: none
    &:focus
      box-shadow: none
      background: #ff6480
    &:hover
      box-shadow: none
      background: #ff6480

  .not-selected
    color: #a0a5b3
    background: white
    border: #a0a5b3 1px solid
    &:focus
      box-shadow: none
      background: white
      color: #a0a5b3
      border: #a0a5b3 1px solid
    &:hover
      box-shadow: none
      background: white
      color: #a0a5b3
      border: #a0a5b3 1px solid

  .dietary
    background: white
    text-align: left
    border-radius: 5px
    color: #a0a5b3
    border: none
    padding: 15px 10px
    width: 100%
    &:focus
      border: none
      box-shadow: none
    &:hover
      color: #ff6480

  .input-name
    background: transparent
    border: none
    text-decoration: underline

  .input-name1
    border: #4795ff 2px solid
    border-radius: 5px
    &:focus
      outline: none

  .circle
    @media (max-width: 600px)
      text-align: left

  .guest-name
    @media (min-width: 600px)
      align-items: center
      display: flex
      text-align: left

  .fa-plus
    background: #e2e5ed
    border-radius: 50%
    padding: 20px
    font-size: 16px
    color: white

  .row .arrow .fa-arrow-left
    opacity: 1 !important
    margin-right: 20px
    background: rgba(160, 165, 179, 0.09)
    border-radius: 50%
    padding: 5px
    color: #a0a5b3

  .savesubmit
    color: white
    border: none
    background: #ff6480
    padding: 10px 25px

  .guest-image
    width: 100%
    @media (max-width: 600px)
      width: 40%
</style>
