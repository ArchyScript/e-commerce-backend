<template>
  <div>
    <v-container>
      <div>
        <h3>New Architecture</h3>
      </div>

    <v-divider></v-divider>
    
      <v-form enctype="multipart/form-data">
        <v-row>
          <v-col cols="12" sm="6">
            <v-file-input
              label="Add Picture"
              @change="selectFile"
              ref="fileInput"
              outlined
            ></v-file-input>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              :value="structureName"
              label="Structure Name"
              outlined
              filled
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              :value="uniqueFeature"
              v-model="uniqueFeature"
              label="Unique Feature"
              outlined
              filled
            ></v-text-field>
          </v-col>

          <v-col ccols="12" sm="6">
            <v-select
              v-model="category"
              :items="categories"
              outlined
              multiple
              chips
              solo
              prepend-icon="mdi-map"
              item-text="type"
              label="Categories"
              single-line
            ></v-select>
          </v-col>

          <v-col ccols="12" sm="6">
            <v-select
              v-model="selectedCountry"
              :hint="`${selectedCountry.country}, ${selectedCountry.abbr}`"
              :items="location"
              outlined
              prepend-icon="mdi-map"
              item-text="country"
              item-value="abbr"
              hide-details
              label="Select design location"
              return-object
              single-line
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              :value="selectedCountry.abbr"
              label="Continent"
              filled
              disabled
              outlined
              readonly
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-checkbox
              v-model="stillExist"
              label="Does building STILL exist?"
            ></v-checkbox>
          </v-col>

          <v-col cols="12" sm="6">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Date Completed"
                  prepend-icon="mdi-calendar"
                  outlined
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12">
            <v-textarea
              :rules="[rules.required, rules.length(50)]"
              outlined
              label="Unique Feature"
              :value="uniqueFeature"
              v-model="uniqueFeature"
              no-resize
              rows="3"
              placeholder="Structure's unique feature..."
              dense
            ></v-textarea>
          </v-col>

          <v-col cols="12">
            <v-textarea
              :rules="[rules.required, rules.length(250)]"
              outlined
              no-resize
              rows="5"
              label="About Structure"
              v-model="description"
              :value="description"
              placeholder="Architects biography..."
              dense
            ></v-textarea>
          </v-col>

          <v-col cols="12" class="text-center">
            <v-btn outlined class="ma-2" @click="submitNewArchitecture">
              Submit
              <v-icon right> mdi-map </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "Architecture",
  data: () => ({
    inputFile: "",
    name: "",
    description: "",
    structureName: "",
    uniqueFeature: "",
    stillExist: false,
    architectId: "616d983af7cb004d6805c7d6",
    allRequest: [],
    singleRequest: {},
    selectedCountry: { country: "", abbr: "" },
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    category: [],
    rules: {
      length: (len) => (v) =>
        (v || "").length >= len || `Invalid character length, required ${len}`,
      required: (v) => !!v || "This field is required",
    },
    categories: [
      { type: "Florida", abbr: "FL" },
      { type: "Georgia", abbr: "GA" },
      { type: "Nebraska", abbr: "NE" },
      { type: "California", abbr: "CA" },
      { type: "New York", abbr: "NY" },
    ],
    location: [
      { country: "Florida", abbr: "FL" },
      { country: "Georgia", abbr: "GA" },
      { country: "Nebraska", abbr: "NE" },
      { country: "California", abbr: "CA" },
      { country: "Georgia", abbr: "GA" },
      { country: "Nebraska", abbr: "NE" },
      { country: "California", abbr: "CA" },
      { country: "Georgia", abbr: "GA" },
      { country: "Nebraska", abbr: "NE" },
      { country: "California", abbr: "CA" },
      { country: "New York", abbr: "NY" },
    ],
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
    ],
  }),
  // methods: {
  //   submitNewArchitecture() {
  //     console.log(this.category);
  //   },
  //   selectFile() {
  //     // this.inputFile = this.$refs.fileInput.files[0]
  //     console.log(this.$refs.fileInput.files);
  //     // console.log(this.inputFile)
  //   },
  //   postRequest() {
  //     // console.log(this.title);
  //     // console.log(this.description);

  //     const postData = {
  //       title: this.title,
  //       description: this.description,
  //     };

  //     axios
  //       .post("http://localhost:5000/api/architects", postData)
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  //   getSingle() {
  //     console.log("get single");
  //     axios
  //       .get(`http://localhost:5000/api/architects/${this.architectId}`)
  //       .then((response) => {
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //     // const sendGetRequest = async () => {
  //     //   try {
  //     //     const resp = await axios.get(
  //     //       `http://localhost:5000/api/architects/${this.architectId}`
  //     //     );
  //     //     console.log(resp.data);
  //     //   } catch (err) {
  //     //     console.error(err);
  //     //   }
  //     // };

  //     // sendGetRequest();
  //   },

  //   editSingle() {
  //     console.log("get single");
  //     axios
  //       .get(`http://localhost:5000/api/architects/${this.architectId}`)
  //       .then((response) => {
  //         console.log(response.data);
  //         this.title = response.data.title;
  //         this.description = response.data.description;
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },

  //   deleteSingle() {
  //     console.log("get single");
  //     axios
  //       .delete(`http://localhost:5000/api/architects/${this.architectId}`)
  //       .then((response) => {
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },

  //   updateSingle() {
  //     console.log("get single");
  //     const updateData = {
  //       _id: this.architectId,
  //       title: this.title,
  //       description: this.description,
  //     };

  //     axios
  //       .put(
  //         `http://localhost:5000/api/architects/${this.architectId}`,
  //         updateData
  //       )
  //       .then((response) => {
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },

  //   getAll() {
  //     console.log("get all");
  //     axios
  //       .get(`http://localhost:5000/api/architects`)
  //       .then((response) => {
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  // },
};
</script> 



      <!-- <template>
        <v-btn block outlined @click="getSingle"> Get Single </v-btn>
      </template>

      <template>
        <v-btn block outlined @click="getAll"> Get All </v-btn>
      </template>

      <template>
        <v-btn block outlined @click="updateSingle"> Update Single </v-btn>
      </template>

      <template>
        <v-btn block outlined @click="editSingle"> Edit Single </v-btn>
      </template>

      <template>
        <v-btn block outlined @click="deleteSingle"> Delete Single </v-btn>
      </template>

      <template>
        <v-btn block outlined @click="postRequest"> Post Request </v-btn>
      </template> -->