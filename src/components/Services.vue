<template>
  <div id="services" class="nav-bar-wrapper">
    <nav-bar></nav-bar>
    <div id="service-list">
      <div class="service" v-for="(service, index) in services" :key="index">
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
      services: [
        {
          title: "Real estate management",
          img_src: require("@/assets/images/home.png"),
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ad expedita hic. Eius molestiae labore ex expedita, eveniet tenetur voluptas eligendi ut praesentium impedit enim repellendus nihil, fugit veritatis consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quia et voluptatibus, reiciendis quos officia explicabo, non sint totam impedit assumenda aperiam praesentium tenetur maxime amet facere porro iste obcaecati?"
        },
        {
          title: "business development",
          img_src: require("@/assets/images/goal.png"),
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ad expedita hic. Eius molestiae labore ex expedita, eveniet tenetur voluptas eligendi ut praesentium impedit enim repellendus nihil, fugit veritatis consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quia et voluptatibus, reiciendis quos officia explicabo, non sint totam impedit assumenda aperiam praesentium tenetur maxime amet facere porro iste obcaecati?"
        },
        {
          title: "brand development",
          img_src: require("@/assets/images/instagram.png"),
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ad expedita hic. Eius molestiae labore ex expedita, eveniet tenetur voluptas eligendi ut praesentium impedit enim repellendus nihil, fugit veritatis consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quia et voluptatibus, reiciendis quos officia explicabo, non sint totam impedit assumenda aperiam praesentium tenetur maxime amet facere porro iste obcaecati?"
        },
        {
          title: "distribution and sales",
          img_src: require("@/assets/images/growth.png"),
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ad expedita hic. Eius molestiae labore ex expedita, eveniet tenetur voluptas eligendi ut praesentium impedit enim repellendus nihil, fugit veritatis consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quia et voluptatibus, reiciendis quos officia explicabo, non sint totam impedit assumenda aperiam praesentium tenetur maxime amet facere porro iste obcaecati?"
        },
        {
          title: "marketing and consulting",
          img_src: require("@/assets/images/call-center.png"),
          details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ad expedita hic. Eius molestiae labore ex expedita, eveniet tenetur voluptas eligendi ut praesentium impedit enim repellendus nihil, fugit veritatis consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quia et voluptatibus, reiciendis quos officia explicabo, non sint totam impedit assumenda aperiam praesentium tenetur maxime amet facere porro iste obcaecati?"
        }
      ]
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
</style>

