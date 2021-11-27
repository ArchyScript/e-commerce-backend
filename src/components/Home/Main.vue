<template>
  <div>
    <Home />

    <v-divider></v-divider>

    <Categories /> 

    <!-- <Adsense /> -->

    <v-divider></v-divider>

    <Contact/>

  </div>
</template>

<script>
import Home from "./Home.vue";
// import GettingStarted from "./GettingStarted.vue";
import Categories from "./Categories.vue";
// import Adsense from "./Adsense.vue";
import Contact from "./Contact.vue";
// import UsefulLinks from "./UsefulLinks.vue";

export default {
  data: () => ({}),
  components: {
    Home,
    // GettingStarted,
    Categories,
    // Adsense,
    Contact,
    // UsefulLinks,
  },
};
</script>