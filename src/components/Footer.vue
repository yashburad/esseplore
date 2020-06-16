<template>
  <footer>
    <b-container fluid class="footer">
      <b-row>
        <b-col sm="3" offset-md="1"
          ><img
            class="ep-logo"
            src="@/assets/ep-logo@2x.png"
            style="opacity:0.47 "
          />
          <p class="content">
            Esseplore is an AI-driven travel app that lets users to explore the
            world like a local through authentic, hyperlocal experiences
            customised to their interests.
          </p>
          <i class="fa fa-facebook"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-twitter"></i>
          <i class="fa fa-linkedin"></i>
        </b-col>
        <b-col sm="2" class="about-us" style="padding-top:22px;"
          ><h5>ABOUT US</h5>
          <ul>
            <li>Our Team</li>
            <li>How it Works</li>
            <li>Things to do</li>
            <li>Home Dining</li>
            <li>Bazaar</li>
          </ul>
        </b-col>
        <b-col sm="2" style="padding-top:22px;"
          ><h5>CONTACT</h5>
          <p style="margin-bottom:5px;"><span>09538911048</span></p>
          <p style="margin-bottom:5px;"><span>wecare@esseplore.com</span></p>
          <span
            >Esseplore Ptd Ltd, Unit <br />
            03-63, 81 Ayer Rajah <br />
            Crescent, Singapore 139957</span
          >
        </b-col>
        <b-col sm="3" style="padding-top:22px;"
          ><h5>BLOGS</h5>
          <div class="footer-blogs">
            <img src="@/assets/dining-3@2x.jpg" alt="abc" />
            <span
              >Walking Down Haji Lane<br />
              Don't miss our Haji Lane on your next visit to Singapore</span
            >
          </div>
          <div class="footer-blogs">
            <img src="@/assets/dining-3@2x.jpg" alt="abc" />
            <span
              >Walking Down Haji Lane<br />
              Don't miss our Haji Lane on your next visit to Singapore</span
            >
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<style scoped>
footer {
  width: 100vw;
  background: #33323c;
  /* height: 50vh; */
}

@media screen and (min-width: 992px) {
  .about-us {
    padding-left: 50px;
  }
}

.footer .row {
  padding: 40px 0px 40px 40px;
}

.footer {
  text-align: left;
  color: #9e9ea1;
}

.fa {
  padding: 10px;
}

.footer .content {
  margin-top: 20px;
}

.footer ul {
  list-style: none;
  padding: 5px 0px 0px 0px !important;
}
.footer-blogs {
  display: flex;
  margin-top: 10px;
}
.footer-blogs img {
  width: 100px;
  /* height: 30.5px; */
  border-radius: 2.5px;
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.16);
  margin-right: 10px;
}

.footer h5 {
  /* width: 40.5px; */
  /* height: 11px; */
  /* font-family: OpenSans; */
  font-size: 16px;

  font-weight: 800;
  /*
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #9e9ea1; */
}
</style>
