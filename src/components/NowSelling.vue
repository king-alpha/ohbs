<template>
  <div id="now-selling" class="nav-bar-wrapper">
    <nav-bar></nav-bar>
    <div id="seperator"></div>
    <cards></cards>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import Cards from "./Cards";

export default {
  components: { NavBar, Cards },
  name: "now-selling"
};
</script>

<style>
#seperator {
  margin-top: 150px;
}
</style>