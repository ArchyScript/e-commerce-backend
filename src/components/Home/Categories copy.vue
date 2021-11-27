<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <v-subheader class="text-h4 justify-center"> Categories </v-subheader>
        </v-col>

        <v-col cols="12">
          <div class="text-center">
            <v-btn
              @click="activeCategory = 'simple_app'"
              :color="activeCategory == 'simple_app' ? 'success' : ''"
              class="mx-2 px-3 mb-3"
              outlined
            >
              Simple App
            </v-btn>
            <!--
            <v-btn
              @click="activeCategory = 'instrument'"
              :color="activeCategory == 'instrument' ? 'success' : ''"
              class="mx-2 px-3 mb-3"
              outlined
            >
              Instruments
            </v-btn>
            <v-btn
              @click="activeCategory = 'clone'"
              :color="activeCategory == 'clone' ? 'success' : ''"
              class="mx-2 px-3 mb-3"
              outlined
            >
              Clone Sites
            </v-btn> -->
          </div>
        </v-col>

        <v-dialog v-model="dialog" persistent max-width="80%">
          <!-- <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    Open Dialog
                  </v-btn>
                </template> -->
          <v-card>
            <v-row>
              <v-col>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="400px"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>

              <v-col>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="400px"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
            </v-row>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">
                Disagree
              </v-btn>
              <v-btn color="green darken-1" text @click="dialog = false">
                Agree
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-col col="12">
          <v-row justify="center" v-if="activeCategory == 'simple_app'">
            <v-col
              v-for="simple_app in simple_apps"
              :key="simple_app.title"
              cols="12"
              sm="6"
              md="4"
            >
              <!-- <template v-if="simple_app.available"> -->
              <v-card>
                <v-img
                  :src="simple_app.src"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                  <v-card-title class="text-h5 font-weight-bold">
                    {{ simple_app.title }}
                  </v-card-title>
                </v-img>

                <v-card-actions>
                  <v-btn color="orange lighten-2" text> Description </v-btn>

                  <v-spacer></v-spacer>

                  <v-btn icon @click="showDescription(simple_app.title)">
                    <v-icon>
                      {{
                        simple_app.title === projectTitle
                          ? "mdi-chevron-up"
                          : "mdi-chevron-down"
                      }}
                    </v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="simple_app.title === projectTitle">
                    <v-card-text>
                      {{ simple_app.description }}
                    </v-card-text>

                    <v-btn
                      color="dark"
                      outlined
                      text
                      @click="gotoLinkAddress(simple_app.link.github)"
                    >
                      View Details
                      <v-icon right dark> mdi-github </v-icon>
                    </v-btn>
                  </div>
                </v-expand-transition>
              </v-card>

              <v-divider></v-divider>

              <!-- <v-card-actions>
                <v-btn outlined> test </v-btn>

                <v-spacer></v-spacer>

                <v-btn icon title="click me">
                  <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon title="click me">
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>

                <v-btn icon title="click me">
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions> -->

              <v-card-actions>
                <v-btn color="teal darken-3" outlined text>
                  Preview
                  <v-icon right dark> mdi-cart-variant </v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn color="dark" outlined text>
                  Add Cart
                  <v-icon right dark> mdi-cart-variant </v-icon>
                </v-btn>
              </v-card-actions>
              <!-- </template> -->
            </v-col>
          </v-row>

          <v-row justify="center" v-if="activeCategory == 'clone'">
            <v-col
              v-for="clone in clones"
              :key="clone.title"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <!-- <template v-if="clone.available"> -->
              <v-card>
                <v-img
                  :src="clone.src"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                  <v-card-title class="text-h5 font-weight-bold">
                    {{ clone.title }}
                  </v-card-title>
                </v-img>

                <v-card-actions>
                  <v-btn color="orange lighten-2" text> Description </v-btn>

                  <v-spacer></v-spacer>

                  <v-btn icon @click="showDescription(clone.title)">
                    <v-icon>
                      {{
                        clone.title === projectTitle
                          ? "mdi-chevron-up"
                          : "mdi-chevron-down"
                      }}
                    </v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="clone.title === projectTitle">
                    <v-divider></v-divider>

                    <v-card-text>
                      {{ clone.description }}
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>

              <v-divider></v-divider>

              <v-card-actions>
                <v-btn
                  color="teal darken-3"
                  outlined
                  text
                  @click="gotoLinkAddress(clone.link.deployed)"
                >
                  Preview
                  <v-icon right dark> mdi-open-in-new </v-icon>
                </v-btn>

                <v-btn
                  color="dark"
                  outlined
                  text
                  @click="gotoLinkAddress(clone.link.github)"
                >
                  Github
                  <v-icon right dark> mdi-github </v-icon>
                </v-btn>
              </v-card-actions>
              <!-- </template> -->
            </v-col>
          </v-row>

          <v-row justify="center" v-if="activeCategory == 'instrument'">
            <v-col
              v-for="instrument in instruments"
              :key="instrument.title"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <!-- <template v-if="instrument.available"> -->
              <v-card>
                <v-img
                  :src="instrument.src"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                  <v-card-title class="text-h5 font-weight-bold">
                    {{ instrument.title }}
                  </v-card-title>
                </v-img>

                <v-card-actions>
                  <v-btn color="orange lighten-2" text> Description </v-btn>

                  <v-spacer></v-spacer>

                  <v-btn icon @click="showDescription(instrument.title)">
                    <v-icon>
                      {{
                        instrument.title === projectTitle
                          ? "mdi-chevron-up"
                          : "mdi-chevron-down"
                      }}
                    </v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="instrument.title === projectTitle">
                    <v-divider></v-divider>

                    <v-card-text>
                      {{ instrument.description }}
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>

              <v-divider></v-divider>

              <v-card-actions>
                <v-btn
                  color="teal darken-3"
                  outlined
                  text
                  @click="gotoLinkAddress(instrument.link.deployed)"
                >
                  Preview
                  <v-icon right dark> mdi-cart-variant </v-icon>
                </v-btn>

                <v-btn
                  color="dark"
                  outlined
                  text
                  @click="gotoLinkAddress(instrument.link.github)"
                >
                  Github
                  <v-icon right dark> mdi-github </v-icon>
                </v-btn>
              </v-card-actions>
              <!-- </template> -->
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="">
export default {
  name: "Portfolio",
  data: () => ({
    projectTitle: "",
    activeCategory: "simple_app",
    dialog: true,
    simple_apps: [
      {
        title: "Typing Game",
        description: `A typiing game that helps it's users improve their typing skills... A point is giving for each successfully typed word and a countdown timer is set... The user can has the option to selectselect different level and  each of this levels have varying countdown timer`,
        // description: `["item 1", "item 2", "item 3"] ... responsivenes : ["monile", "desktop"]`,
        techs: [{ title: "HTML", icon: "mdi-home", ratio: "" }],
        link: {
          deployed: "https://archyscript-typing-game.netlify.app/",
          github: "https://github.com/ArchyScript/typing_game.git",
          citonhub: "https://www.citonhub.com/run-panel/692471289",
        },
        src: "",
        available: true,
      },
      {
        title: "Simple Store",
        description: `A simple store that allows it users ... create a PRODUCER account and login with the details to add product to the store ... add available product in store to CART and purchase them...  This store demo doesn't use a backend or any database technology to store data, rather, it uses the inbuilt browsers LocalStorage (NOT A REAlTIME DATABASE) to store data temporarily`,
        // description: `["item 1", "item 2", "item 3"]`,
        techs: [{ title: "HTML", icon: "mdi-home", ratio: "" }],
        link: {
          deployed: "https://archyscript-simple-store.netlify.app/",
          github: "https://github.com/ArchyScript/simple_store.git",
          citonhub: "",
        },
        src: "",
        available: true,
      },
      {
        title: "Tic Tac Toe Game",
        description: `A TIC TAC TOE game that allows it users set player names, keep track of players score, detects if a particular game is a tie and reset players score`,
        // description: `["item 1", "item 2", "item 3"]`,
        techs: [{ title: "HTML", icon: "mdi-home", ratio: "" }],
        link: {
          deployed: "https://archyscript-tic-tac-toe-game.netlify.app/",
          github: "https://github.com/ArchyScript/tic-tac-toe-game.git",
          citonhub: "https://www.citonhub.com/run-panel/325777815",
        },
        src: "",
        available: true,
      },
      {
        title: "Simple Responsive Dashboard",
        description: `A simple responsive dashboard design`,
        // description: `["item 1", "item 2", "item 3"]`,
        techs: [{ title: "HTML", icon: "mdi-home", ratio: "" }],
        link: {
          deployed: "https://simple-responsive-dashboard.netlify.app/",
          github:
            "https://github.com/ArchyScript/simple_responsive_dashboard.git",
          citonhub: "",
        },
        src: "",
        available: true,
      },
      {
        title: "Simple Calculator",
        description: `A simple calculator that can perform all basic arithmetic operations.`,
        // description: `["item 1", "item 2", "item 3"]`,
        techs: [{ title: "HTML", icon: "mdi-home", ratio: "" }],
        link: {
          deployed: "https://archyscript-simple-calculator.netlify.app/",
          github: "https://github.com/ArchyScript/simple_calculator.git",
          citonhub: "",
        },
        src: "",
        available: true,
      },
      {
        title: "Virtual Keyboard",
        description: `A virtual keyboard that allows user type words and displays output for the user... User can change keyboard colour, height, fonts etc.`,
        // description: `["item 1", "item 2", "item 3"]`,
        techs: [{ title: "HTML", icon: "mdi-home", ratio: "" }],
        link: {
          deployed: "https://archyscript-virtual-keyboard.netlify.app/",
          github: "https://github.com/ArchyScript/virtual_keyboard.git",
          citonhub: "",
        },
        src: "",
        available: true,
      },
      {
        title: "Random Quote Generator",
        description: `Genarates random quote for users`,
        // description: `["item 1", "item 2", "item 3"]`,
        techs: [{ title: "HTML", icon: "mdi-home", ratio: "" }],
        link: {
          deployed: "https://archyscript-quote-generator.netlify.app/",
          github: "https://github.com/ArchyScript/random_quote_generator.git",
          citonhub: "",
        },
        src: "",
        available: true,
      },
    ],

    clones: [
      {
        title: "Airbnb",
        description: `An Airbnb clone... not very responsive though (best viewed on desktop or tablet)`,
        // description: `["item 1", "item 2", "item 3"]`,
        techs: [{ title: "HTML", icon: "mdi-home", ratio: "" }],
        link: {
          deployed: "https://archyscript-airbnb-clone.netlify.app/",
          github: "https://github.com/ArchyScript/airbnb_clone.git",
          citonhub: "",
        },
        src: "",
        available: true,
      },
      {
        title: "Gmail Clone",
        description: `A Gmail clone with a darkmode feature... best viewed on tablet and dektop`,
        // description: `["item 1", "item 2", "item 3"]`,
        techs: [{ title: "HTML", icon: "mdi-home", ratio: "" }],
        link: {
          deployed: "https://archyscript-gmail-clone.netlify.app/",
          github: "https://github.com/ArchyScript/gmail_clone.git",
          citonhub: "",
        },
        src: "",
        available: true,
      },
    ],

    instruments: [
      {
        title: "My Portfolio",
        description: `My portfolio website which includes programming languages I uses and their ratings accordingly... my contact info etc. (same as this page)`,
        // description: `["item 1", "item 2", "item 3"]`,
        techs: [{ title: "HTML", icon: "mdi-home", ratio: "" }],
        link: {
          deployed: "https://archyscript-portfolio.netlify.app/",
          github: "https://github.com/ArchyScript",
          citonhub: "",
        },
        src: "",
        available: true,
      },
    ],
  }),

  methods: {
    gotoLinkAddress(link) {
      window.open(link, "_blank");
      // window.location.href = link;
    },
    showDescription() {
      this.dialog = true;
    },
    addItemToCart(title) {
      this.dialog = true;
      if (this.projectTitle == title) return (this.projectTitle = "");
      if (this.projectTitle != title) return (this.projectTitle = title);
    },
  },
};
</script>

<style lang="css" scoped>
</style>