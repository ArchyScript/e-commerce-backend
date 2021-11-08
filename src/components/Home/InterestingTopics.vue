<template>
  <div>
    <div class="text-center">
      <h3>Interesting Topics</h3>
    </div>

    <v-sheet class="mx-auto" elevation="8" width="100%">
      <v-slide-group
        v-model="model"
        class="pa-4"
        center-active
        show-arrows
      >
        <v-slide-item
          v-for="card in cards"
          :key="card.id"
          v-slot="{ active, toggle }"
        >
          <v-card
            color="grey lighten-1"
            class="ma-4"
            height="230"
            width="230"
            @click="toggle"
          >
            <v-img
              src="@/img/dark-2.jpeg"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="180px"
            >
            </v-img>

            <v-card-actions>
              <v-btn color="secondary" block outlined> Learn More </v-btn>
            </v-card-actions>
            <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template> 

<script>
export default {
  data: () => ({
    model: null,
    cards: [
      {
        id: 1,
        title: "Home sweet home",
        subtitle: "Subtitle",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quisquam quo dignissimos ratione. Numquam accusantiumamet delectus quibusdam tenetur a.",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
      },
      {
        id: 2,
        title: "Favorite road trips",
        subtitle: "Subtitle",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quisquam quo dignissimos ratione. Numquam accusantiumamet delectus quibusdam tenetur a.",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      },
      {
        id: 3,
        title: "Favorite road trips",
        subtitle: "Subtitle",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quisquam quo dignissimos ratione. Numquam accusantiumamet delectus quibusdam tenetur a.",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      },
      {
        id: 2,
        title: "Favorite road trips",
        subtitle: "Subtitle",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quisquam quo dignissimos ratione. Numquam accusantiumamet delectus quibusdam tenetur a.",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      },
      {
        id: 3,
        title: "Favorite road trips",
        subtitle: "Subtitle",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quisquam quo dignissimos ratione. Numquam accusantiumamet delectus quibusdam tenetur a.",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      },
      {
        id: 4,
        title: "Best airlines",
        subtitle: "Subtitle",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quisquam quo dignissimos ratione. Numquam accusantiumamet delectus quibusdam tenetur a.",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
      },
    ],
  }),
};
</script> 