<template>
  <div class="header">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand>
        <router-link to="/">
          <img class="ep-logo" src="@/assets/ep-logo@2x.png" />
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/explore">Explore</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/homedining">Home Dining</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/bazaar">Bazaar</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/chefdetails">chefdetails</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/chefdescription">chefdescription</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/summary">summary</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/paymentsuccess">paymentsuccess</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/introduceguests">IntroduceGuests</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <router-link to="/signup">Sign up</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="account" to="/explore">Account</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style>
.navbar {
  background-color: #6056d6 !important;
  padding-left: 10px;
  /* height: 37.5px; */
}

.header a {
  /* font-family: Muli !important; */
  font-family: "Muli", sans-serif;
  font-weight: 500 !important;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff !important;
}

.header a a:hover {
  text-decoration: none !important;
  padding-bottom: 5px;
  border-bottom: 1px solid red;
}

.account {
  border: 1px dotted;
  height: 20px;
  padding: 5px 10px;
  border-radius: 3.5px;
}

.account1 {
  width: 12px;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.18);
  border-radius: 50%;
}
</style>

<script>
// @ is an alias to /src
// import Logo from "@/assets/ep-logo.png";

export default {};
</script>
