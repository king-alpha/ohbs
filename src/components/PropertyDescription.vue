<template>
  <div id="property-description-wrapper">
    <div id="property-description" class="nav-bar-wrapper">
      <nav-bar></nav-bar>
      <div id="content">
        <div id="property-details">
          <div id="gallery-wrapper">
            <img :src="active_image" alt />
            <div id="gallery">
              <img
                :class="{active: active_image === image}"
                @click="set_active_image(image)"
                :src="image"
                v-for="(image, index) in images"
                :key="index"
              />
            </div>
          </div>
          <div id="details">
            <div id="price">
              <label>Price</label>
              <div>$300,000</div>
            </div>
            <div id="description">
              <label>Description</label>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, beatae. Animi corrupti at quidem impedit, aut dolor exercitationem molestias quibusdam, unde culpa laudantium? Inventore numquam molestiae dolore repellat fugit blanditiis.</div>
            </div>
          </div>
        </div>
        <div id="contact-us">
          <h2>Conect with us to buy this property</h2>
          <sui-form>
            <sui-form-field>
              <label>Full Name</label>
              <sui-input ref="input" focus placeholder="e.g Ben Parker" />
            </sui-form-field>
            <sui-form-field>
              <label>Email</label>
              <sui-input ref="input" focus placeholder="e.g benparker@gmail.com" />
            </sui-form-field>
            <sui-form-field>
              <label>Phone Number</label>
              <sui-input ref="input" focus placeholder="e.g 0246412463" />
            </sui-form-field>
            <div id="send">
              <sui-button positive @click.prevent>send</sui-button>
            </div>
          </sui-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";

export default {
  name: "property-decription",
  data() {
    return {
      active_image: require("@/assets/images/img2.jpg"),
      images: [
        require("@/assets/images/img3.jpg"),
        require("@/assets/images/img2.jpg"),
        require("@/assets/images/img4.jpg")
      ]
    };
  },
  methods: {
    set_active_image(image) {
      this.active_image = image;
    }
  },
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
  border-radius: 4px;
}

#gallery {
  /* border-top: 1px solid #d1d1d1; */
  margin-top: 15px;
  display: flex;
  justify-content: center;
}

#gallery img {
  cursor: pointer;
  width: 12%;
  margin: 10px;
}

#gallery img.active {
  border-radius: 7px;
  padding: 5px;
}

#content {
  display: flex;
  padding: 40px;
}

#gallery-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  /* border: 1px solid #f2f2f2; */
}

#property-details {
  width: 70%;
}

#contact-us {
  width: 30%;
  border: 1px solid #f2f2f2;
  padding: 15px;
  margin-left: 35px;
  height: 390px;
}

#contact-us h2,
#send {
  text-align: center;
}

#details {
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  padding: 20px;
  font-size: 1.3em;
}

#price > div {
  margin-top: 10px;
  font-size: 1.7em;
  color: blue;
}

#description {
  margin-top: 30px;
}

#description > div {
  margin-top: 10px;
  font-size: 16px;
}
</style>
