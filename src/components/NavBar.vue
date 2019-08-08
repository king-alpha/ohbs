<template>
  <div id="navbar">
    <div class="links">
      <h2 id="brand">
        <div id="menu ">
          <sui-dropdown class="icon" icon="bars" button pointing floating>
            <sui-dropdown-menu>
              <router-link
                v-for="(route, index) in routes"
                :to="route.to"
                :key="index"
                tag="sui-dropdown-item"
              >{{route.name}}</router-link>
            </sui-dropdown-menu>
          </sui-dropdown>
        </div>
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
    <div id="about-page-content" v-if="show_if('/about')">
      <div :id="about.id" v-for="(about, index) in aboutData" :key="index">
        <h3>{{about.title}}</h3>
        <div class="content">{{about.content}}</div>
      </div>
    </div>
    <div id="nav-search-wrapper">
      <search v-if="show_if('/now-selling')"></search>
    </div>
    <div id="slogan" v-if="show_if('/')">
      <h2>Orion heights business solutions</h2>
      <div>
        <i>delivering startegic success</i>
      </div>
    </div>
    <div id="property-details" v-if="show_if('/property-description')">
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
      menu: require("@/assets/images/menu.png"),
      routes: require("@/static/data.js").routes,
      aboutData: require("@/static/data.js").aboutData
    };
  },
  components: { Search },
  methods: {
    show_if(route) {
      return this.$router.history.current.path === route;
    }
  },
  computed: {
    current_route() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped>
#about-page-content {
  font-family: Lato;
  margin: 30px;
  display: flex;
  flex-direction: column;
}
#about-page-content > div:nth-child(1)::first-line {
  color: blue;
}

#about-page-content > div:nth-child(2)::first-line {
  color: greenyellow;
}
#about-page-content > div:nth-child(3)::first-line {
  color: red;
}

#about-page-content > div:nth-child(4)::first-line {
  color: orange;
}

#about-page-content > div:nth-child(even) {
  margin-left: auto;
}

#about-page-content > div:not(:first-of-type) {
  margin-top: 40px;
}

#about-page-content > div {
  padding: 15px;
  border-radius: 6px;
  color: #000;
  background: #fff;
  width: 40%;
}

#about-page-content .content {
  font-size: 1.3em;
  word-spacing: 2px;
  line-height: 1.3;
}

.active {
  border-bottom: 2px solid #fff;
}

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
  display: flex;
  justify-content: center;
  align-items: center;
}

#brand > div:first-of-type {
  margin-right: 6px;
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

/* .router-link-exact-active {
} */

@media (min-width: 901px) {
  #brand > div:first-of-type {
    display: none;
  }
}

@media (max-width: 900px) {
  .links > div {
    display: none;
  }

  #brand {
    margin-left: 3px;
  }
}

/* mobile L */
@media only screen and (max-width: 425px) {
  #slogan h2,
  #property-details h2 {
    font-size: 1.5em;
    margin-bottom: 30px;
  }

  #about-page-content > div {
    width: 100%;
  }
}
</style>


