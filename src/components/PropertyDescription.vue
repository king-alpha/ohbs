<template>
  <div id="property-description-wrapper">
    <div id="property-description" class="nav-bar-wrapper">
      <nav-bar></nav-bar>
      <div id="content">
        <div id="property-details">
          <img src="../assets/images/img2.jpg" alt srcset />
        </div>
        <div id="contact-us">
          <label>Conect with us to buy this property</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";

export default {
  name: "property-decription",
  components: { NavBar }
};
</script>

<style scoped>
#property-description-wrapper {
  background-color: #000;
  /* opacity: 0.5; */
}

img {
  width: inherit;
}

#content {
  display: flex;
  padding: 40px;
}

#property-details {
  width: 70%;
  /* flex-grow: 1; */
  border: 1px solid black;
}

#contact-us {
  /* flex-grow: 1; */
}
</style>
