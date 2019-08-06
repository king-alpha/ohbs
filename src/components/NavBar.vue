<template>
  <div id="navbar">
    <div class="links">
      <h2 id="brand">
        <!-- <i class="user icon"></i> -->
        <router-link to="/">OHBS</router-link>
      </h2>
      <div
        class="link"
        :class="{active: current_route === route.to}"
        v-for="(route, index) in routes"
        :key="index"
      >
        <router-link :to="route.to">{{route.name}}</router-link>
      </div>
      <div class="link">
        <i class="large user circle icon"></i>
      </div>
    </div>
    <div id="nav-search-wrapper">
      <search v-if="show_search"></search>
    </div>
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
  data() {
    return {
      routes: [
        {
          to: "/",
          name: "Home"
        },
        {
          to: "/services",
          name: "Services"
        },
        {
          to: "/now-selling",
          name: "now selling"
        },
        {
          to: "/about",
          name: "About"
        },
        {
          to: "/blog",
          name: "blog"
        }
      ]
    };
  },
  components: { Search },
  computed: {
    current_route() {
      return this.$route.path;
    },
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
  display: flex;
  flex-direction: column;
  height: 100%;
  color: #fff;
  padding: 5px;
}

#slogan,
#property-details {
  margin: auto;
  text-align: center;
  /* display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  flex-direction: column; */
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
  margin-left: 20px;
}

.links {
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  margin-right: 80px;
  justify-content: center;
}

.link {
  text-transform: uppercase;
  margin: 10px;
}

.link:last-of-type {
  height: 22px;
  margin-left: 0;
  padding-left: 10px;
  border-left: 1px solid #fff;
}

.active {
  margin: 10px 10px 30px;
  border-bottom: 2px solid #fff;
}

@media only screen and (max-width: 425px) {
  #slogan h2,
  #property-details h2 {
    font-size: 1.5em;
    margin-bottom: 30px;
  }
}
</style>


