<template>
  <mdb-carousel :items="9" multi indicators controlls slide>
    <template #[i+1] v-for="(img, i) in basic">
      <mdb-card :key="i">
        <mdb-card-image :src="img" alt="Card image cap"></mdb-card-image>
        <mdb-card-body>
          <mdb-card-title>{{ i + 1 }}</mdb-card-title>
          <mdb-card-text
            >Some quick example text to build on the card title and make up the
            bulk of the card's content.</mdb-card-text
          >
          <mdb-btn color="primary" size="md">Button</mdb-btn>
        </mdb-card-body>
      </mdb-card>
    </template>
  </mdb-carousel>
</template>

<script>
import {
  mdbCarousel,
  mdbBtn,
  mdbCard,
  mdbCardImage,
  mdbCardText,
  mdbCardBody,
} from "mdbvue";
export default {
  name: "CarouselPage",
  components: {
    mdbCarousel,
    mdbBtn,
    mdbCard,
    mdbCardImage,
    mdbCardText,
    mdbCardBody,
  },
  data() {
    return {
      basic: [
        "https://mdbootstrap.com/img/Photos/Others/img (36).jpg",
        "https://mdbootstrap.com/img/Photos/Others/img (34).jpg",
        "https://mdbootstrap.com/img/Photos/Others/img (38).jpg",
        "https://mdbootstrap.com/img/Photos/Others/img (29).jpg",
        "https://mdbootstrap.com/img/Photos/Others/img (30).jpg",
        "https://mdbootstrap.com/img/Photos/Others/img (27).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg",
        "https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg",
      ],
    };
  },
};
</script>
