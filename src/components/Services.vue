<template>
  <div id="services" class="nav-bar-wrapper">
    <nav-bar></nav-bar>
    <div id="service-list">
      <div v-bind:id="service.id" class="service" v-for="(service, index) in services" :key="index">
        <h2>{{service.title}}</h2>
        <img :src="service.img_src" alt="home icon" />
        <div class="details">{{service.details}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";

export default {
  name: "services",
  components: { NavBar },
  data() {
    return {
      services: require("@/static/data.js").services
    };
  }
};
</script>

<style scoped>
.service:nth-child(2),
.service:nth-child(4) {
  background-color: #fafafa !important;
}

.service {
  display: flex;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #f3f3f3;
  padding: 20px 10px 30px;
}

img {
  width: 170px;
}

.service h2 {
  text-transform: capitalize;
}

.service .details {
  padding: 10px;
}

@media only screen and (min-width: 900px) {
  .service .details {
    font-size: 1.2em;
    margin: auto 200px;
  }
}
</style>

