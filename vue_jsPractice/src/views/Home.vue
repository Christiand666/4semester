<template>
  <div class="home">
    <v-container>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Name
              </th>
              <th class="text-left">
                Done
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in items"
              :key="item.name"
            >
              <td>{{ item.name }}</td>
              <td>
                <v-checkbox
                  v-model="item.done"
                  label="Færdig?"
                ></v-checkbox>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <div class="col-12">
        <v-card
        class="mx-auto"
        max-width="400"
        >
          <v-form
          lazy-validation
          ref="form"
          >
            <v-text-field
              label="Name"
              :counter="25"
              required
              v-model="name"
            ></v-text-field>
            <v-btn
              block
              color="primary"
              v-on:click="AddTodo()"
            > {{ this.text }} </v-btn>
          </v-form>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  data() {
    return {
      items: [
        { name: 'lav mad', done: false },
        { name: 'Spank daddy', done: true }

      ],
      name: "",
      text: "Spanked"
    }
  },
  methods: {
    AddTodo: function() {
      this.items.push({ name: this.name, done: false });
    }
  }
}
</script>