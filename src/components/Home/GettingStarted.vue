<template>
  <div>
    <!-- <v-container>
      <v-row dense>
        <v-col v-for="(item, i) in items" :key="i" cols="12" md="4">
          <v-card>
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-avatar class="ma-3" rounded size="125" tile>
                <v-img :src="imageSrc" style="border-radius: 50%"></v-img>
              </v-avatar>

              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle>
                  <span class="d-flex flex-wrap flex-grow-1 flex-shrink-0 pr-3">
                    .dfnm,mvfd.,dfvjdb vdlvfdv;lfnvdfmhgxchbgh,jfdjhfkjc,jhv sgjdsgm,
                    ksnndlkbvpgflfg[fgfg';fg;lgflfgp[fgl;fg;lgf';fg;lfg';fkdf.lfd
                  </span>
                </v-card-subtitle>
              </div>
            </div>

            <v-divider></v-divider>

            <v-card-actions justify="center">
              <v-btn class="mr-2" flat outlined text color="warning">
                View Profile
              </v-btn>

              <v-btn class="mr-2" flat outlined text color="success">
                Contact Architect
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container> -->
    

    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card>
            <v-img
              src="@/img/dark-1.jpeg"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="150px"
            >
              <v-card-title> {{ title }} </v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container> 
   
  </div>
</template>


<script>
export default {
  data: () => ({
    title: "Getting Started",
    imageSrc: require("@/img/dark-2.jpeg"),
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
    ],
    majorLanguages: [
      {
        // logo: require("@/img/lang/js.png"),
        title: "Javascript",
        ratings: 4.5,
      },
      {
        // logo: require("@/img/lang/vue.png"),
        title: "Vue JS",
        ratings: 4,
      },
      {
        // logo: require("@/img/lang/vuetify.svg"),
        title: "Vuetify",
        ratings: 4.5,
      },
      {
        // logo: require("@/img/lang/html.png"),
        title: "HTML",
        ratings: 5,
      },
      {
        // logo: require("@/img/lang/css.png"),
        title: "CSS",
        ratings: 4,
      },
      {
        // logo: require("@/img/lang/bootstrap.png"),
        title: "Bootstrap",
        ratings: 4.5,
      },
    ],
  }),
};
</script>
