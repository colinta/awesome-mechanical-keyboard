<template>
  <vuetable ref="vuetable"
    api-url="http://localhost:8080/switches.json"
    :fields="['name', 'brand', 'img']"
    :show-sort-icons="true"
    data-path="data"
    pagination-path=""
  ></vuetable>
</template>

<script>
import Vuetable from 'vuetable-2'

export default {
  components: {
    Vuetable
  }
}
</script>