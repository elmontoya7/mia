<template lang="pug">
  b-table(show-empty='', :items="parsedUsers", :fields="fields" striped bordered)
    template(slot='empty', slot-scope='scope')
      h4 Sin elementos
</template>

<script>
import users from '@/data/registered-users'
import schema from '@/data/user-schema'

export default {
  data () {
    return {

    }
  },
  computed: {
    parsedUsers () {
      return users
    },
    fields () {
      let f = []

      for (let data of schema) {
        for (let item of data.items) {
          f.push(item)
        }
      }

      return f
    }
  }
}
</script>
