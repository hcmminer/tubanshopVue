<template>
  <div>
    <Announcement />
    <Navbar />
    <Slider />
  </div>
</template>
<script>
import Announcement from "./components/Announcement.vue";
import Navbar from "./components/Navbar.vue";
import Slider from "./components/Slider";
export default {
  name: "App",
  data: () => ({
    //
  }),
  components: {
    Navbar,
    Announcement,
    Slider,
  },
};
</script>
