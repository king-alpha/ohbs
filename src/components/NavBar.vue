<template>
  <div id="navbar">
    <div class="links">
      <h2 id="brand">
        <router-link to="/">OHBS</router-link>
      </h2>
      <div class="link">
        <router-link to="/">Home</router-link>
      </div>
      <div class="link">
        <router-link to="/services">Services</router-link>
      </div>
      <div class="link active">
        <router-link to="/now-selling">now selling</router-link>
      </div>
      <div class="link">
        <router-link to="/about">About</router-link>
      </div>
      <div class="link">
        <router-link to="/blog">blog</router-link>
      </div>
      <div class="link">
        <i class="large user circle icon"></i>
      </div>
    </div>
    <search v-if="show_search"></search>
    <div id="slogan" v-if="show_slogan">
      <h2>Orion heights business solutions</h2>
      <div>
        <i>delivering startegic success</i>
      </div>
    </div>
    <div id="property-details" v-if="show_property_details">
      <h2 id="description">east legon hills, oluwa crescent</h2>
      <h2 id="price">$300,000</h2>
    </div>
  </div>
</template>

<script>
import Search from "./Search";

export default {
  name: "nav-bar",
  components: { Search },
  computed: {
    show_search() {
      return this.$router.history.current.path === "/now-selling";
    },
    show_slogan() {
      return this.$router.history.current.path === "/";
    },
    show_property_details() {
      return this.$router.history.current.path === "/property-description";
    }
  }
};
</script>

<style scoped>
#navbar {
  height: 100%;
  color: #fff;
  padding: 5px;
}

#slogan,
#property-details {
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  flex-direction: column;
}

#slogan h2,
#property-details h2 {
  text-transform: uppercase;
  font-size: 2.2em;
  margin-bottom: 45px;
}

#property-details h2:nth-child(2) {
  color: rgb(0, 230, 0);
}

#slogan div {
  text-transform: capitalize;
}

a {
  text-decoration: none;
  color: #fff !important;
  font-weight: 600;
}

#brand {
  margin-right: auto;
  margin-left: 30px;
}

.links {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-right: 80px;
  justify-content: center;
}

.link {
  margin: 10px;
  text-transform: uppercase;
}

.link:last-of-type {
  height: 22px;
  margin-left: 0;
  padding-left: 10px;
  border-left: 1px solid #fff;
}

.active {
  margin-bottom: 20px;
}
</style>


