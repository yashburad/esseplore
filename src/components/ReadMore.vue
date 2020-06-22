<template>
  <p class="text-left">
    {{ this.str }}
    <button class="read-more" @click="readmore(readmore1)">
      {{ this.read }}
    </button>
  </p>
</template>

<script>
export default {
  props: { data: String },
  name: "ReadMore",
  components: {},
  data() {
    return {
      str: this.data.substring(0, 165),
      read: "Read More",
      readmore1: true,
    };
  },
  methods: {
    readmore(x) {
      if (x) {
        this.str = this.data;
        this.read = "Read Less";
        this.readmore1 = false;
      } else {
        this.str = this.data.substring(0, 165);
        this.read = "Read More";
        this.readmore1 = true;
      }
    },
  },
};
</script>
