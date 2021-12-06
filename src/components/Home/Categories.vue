<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <v-subheader class="text-h4 justify-center">Categories</v-subheader>
        </v-col>

        <v-col cols="12">
          <div class="text-center">
            <!-- <v-btn
              @click="activeCategory = 'simple_app'"
              :color="activeCategory == 'simple_app' ? 'success' : ''"
              class="mx-2 px-3 mb-3"
              outlined
            >
              New Product
            </v-btn> -->
            <!-- <v-btn
              @click="activeCategory = 'simple_app'"
              :color="activeCategory == 'simple_app' ? 'success' : ''"
              class="mx-2 px-3 mb-3"
              outlined
            >
              Simple App
            </v-btn> -->
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

<v-col col="12">
          <v-row justify="center">
            <v-col
              v-for="eachProduct in allAvailableProducts"
              :key="eachProduct._id"
              cols="12"
              sm="6"
              md="4"
            >
              <v-card>
                <v-img
                  :src="eachProduct.product_image_details.src"
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
                    {{ eachProduct.product_name }}
                  </v-card-title>
                </v-img>

                <v-card-actions>
                  <v-btn color="orange lighten-2" text>Description</v-btn>

                  <v-spacer></v-spacer>

                  <v-btn icon @click="showDescription(eachProduct._id)">
                    <v-icon>
                      {{
                        eachProduct._id === productId
                          ? 'mdi-chevron-up'
                          : 'mdi-chevron-down'
                      }}
                    </v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="eachProduct._id === productId">
                    <v-card-text>
                      {{ eachProduct.description }}
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>

              <v-divider></v-divider>

              <v-card-actions>
                <v-btn
                  color="teal darken-3"
                  @click="viewProductDetails(eachProduct)"
                  outlined
                  text
                >
                  View Details
                  <v-icon right dark>mdi-information-variant</v-icon>
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                  color="dark"
                  @click="addItemToCart(eachProduct)"
                  outlined
                  text
                >
                  Add Cart
                  <v-icon right dark>mdi-cart-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="">
import axios from 'axios'

export default {
  name: 'Portfolio',
  data: () => ({
    productId: '',
    BASE_URL:
      'https://archyscript-e-commerce-backend.herokuapp.com/api/products',
    activeCategory: 'simple_app',
    dialog: false,
    allAvailableProducts: [],
  }),

  created() {
    axios
      .get(this.BASE_URL)
      .then((response) => {
        this.allAvailableProducts = response.data
        console.log(this.allAvailableProducts)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  methods: {
    gotoLinkAddress() {
      // window.open(link, '_blank')
    },
    viewProductDetails(product) {
      // this.dialog = true
      console.log(product)
    },
    showDescription(product_id) {
      console.log(product_id)
      if (this.productId == product_id) return (this.productId = '')
      if (this.productId != product_id) return (this.productId = product_id)
    },
    addItemToCart(product) {
      console.log(product)
    },
  },
}
</script>

<style lang="css" scoped></style>
