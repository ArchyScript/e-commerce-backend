<template>
  <div class="about">
    <div class="d-flex">
      <h1>Admin</h1>

      <!-- <v-spacer></v-spacer>

      <h2 class="text-transform-uppercase mx-5">{{ activeEdit }}</h2> -->
    </div>

    <v-divider></v-divider>

    <template>
      <v-card>
        <v-tabs
          next-icon="mdi-arrow-right-bold-box-outline"
          prev-icon="mdi-arrow-left-bold-box-outline"
          show-arrows
          color="deep-purple accent-4"
          right
        >
          <v-tabs-slider color="deep-purple accent-4"></v-tabs-slider>
          <v-tab @click="toggleEdit('architect')"> Architect </v-tab>
          <v-tab @click="toggleEdit('architecture')"> Architecture </v-tab>
          <v-tab @click="toggleEdit('gallery')"> Gallery </v-tab>

          <v-tab-item v-show="displayArchitect">
            <Architect />
          </v-tab-item>

          <v-tab-item v-show="displayArchitecture">
            <Architecture />
          </v-tab-item>

          <v-tab-item v-show="displayGallery">
            <Gallery />
          </v-tab-item>
        </v-tabs>
      </v-card>
    </template>
  </div>
</template>

<script>
import Architect from "./Architect.vue";
import Architecture from "./Architecture.vue";
import Gallery from "./Gallery.vue";

export default {
  name: "Admin",

  data: () => ({
    activeEdit: "",
    displayArchitect: false,
    displayArchitecture: false,
    displayGallery: false,
  }),

  components: {
    Architect,
    Architecture,
    Gallery,
  },

  methods: {
    defaultBooleans() {
      this.displayArchitect = false;
      this.displayArchitecture = false;
      this.displayGallery = false;
    },
    toggleEdit(event) {
      this.defaultBooleans();
      this.activeEdit = event;
      if (event == "architect") return (this.displayArchitect = true);
      if (event == "architecture")
        return (this.displayArcdisplayArchitecturehitect = true);
      if (event == "gallery") return (this.displayGallery = true);
    },
  },

  created() {
    this.toggleEdit("architect");
  },
};
</script>

