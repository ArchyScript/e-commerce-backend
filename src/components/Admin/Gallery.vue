<template>
  <div>
    <v-container>
      <div>
        <h3>Gallery</h3>
      </div>

      <v-divider></v-divider>

      <v-form ref="form" outlined>
        <v-container>
          <div class="text-center mb-2">
            <h4>Biodata</h4>
          </div>

          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                :rules="[rules.required]"
                label="First Name"
                :value="firstName"
                placeholder="First Name"
                outlined
                dense
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="Other Names"
                :value="otherNames"
                placeholder="Other Names"
                outlined
                dense
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                :rules="[rules.required]"
                label="Last Name"
                :value="lastName"
                placeholder="Last Name"
                outlined
                dense
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                :rules="[rules.required]"
                label="Age"
                type="number"
                placeholder="Age"
                :value="age"
                outlined
                dense
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-file-input label="Add Picture" outlined dense></v-file-input>
            </v-col>

            <v-col cols="12">
              <v-textarea
                :rules="[rules.required, rules.length(250)]"
                outlined
                label="Biography"
                :value="biography"
                placeholder="Architects biography..."
                dense
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>

        <v-divider></v-divider>

        <v-container>
          <div class="text-center mb-2">
            <h4>Project(s)</h4>
          </div>

          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                :rules="[rules.required]"
                label="First Name"
                placeholder="First Name"
                outlined
                dense
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="Other Names"
                placeholder="Other Names"
                outlined
                dense
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-textarea
                :rules="[rules.length(10)]"
                outlined
                label="Favourite Quote(s)"
                value=""
                placeholder="Architects biography..."
                dense
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>

        <v-divider></v-divider>

        <v-container>
          <div class="text-center mb-2">
            <h4>Contributions</h4>
          </div>

          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                :rules="[rules.required]"
                label="First Name"
                placeholder="First Name"
                outlined
                dense
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="Other Names"
                placeholder="Other Names"
                outlined
                dense
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-textarea
                :rules="[rules.length(10)]"
                outlined
                label="Favourite Quote(s)"
                value=""
                placeholder="Architects biography..."
                dense
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>

        <template>
          <v-row>
            <v-col cols="12" class="d-flex text-center">
              <v-btn
                outlined
                class="ma-2"
                @click="submitNewArchitectInfo('test')"
              >
                Create New
                <v-icon right> mdi-map </v-icon>
              </v-btn>

              <v-btn
                outlined
                class="ma-2"
                @click="submitNewArchitectInfo('test')"
              >
                Update
                <v-icon right> mdi-map </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </template>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    firstName: "",
    otherNames: "",
    lastName: "",
    age: 0,
    biography: "",
    rules: {
      length: (len) => (v) =>
        (v || "").length >= len || `Invalid character length, required ${len}`,
      required: (v) => !!v || "This field is required",
    },
  }),
  methods: {
    submitNewArchitectInfo(event) {
      console.log(event);
    },
  },
};
</script>