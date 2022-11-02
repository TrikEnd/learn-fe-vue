<template>
   
   <router-link  to="/"></router-link> 
  <router-view></router-view>
</template>

<script>


import atasHeader from '@/components/atasHeader.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: "App",
  components: {
    Header,
    Footer,
    atasHeader,
  },

  


}

</script>

<style>

.tumbal {
  text-indent: -99999px;
}

</style>
