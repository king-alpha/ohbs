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
            "We deliver strategic success by empowering our clients through a comprehensive assessment of their business objectives, identifying and redefining key variables that will facilitate the attainment of market leadership. To survive and grow in business, a superior product or service offering is the key. At Orion Heights Business Solutions, we believe strategy is all about creating distinction by choosing different set of activities to create a unique mix of value. We help our clients achieve market leadership by creating sustainable competitive advantage. Hence, our focus is to deliver value through exhaustive execution of business strategies that guarantee unparalleled outcomes."
        },
        {
          title: "business development",
          img_src: require("@/assets/images/goal.png"),
          details:
            "Did you know that buying and selling of a typical home today entails lots of processes? At Orion Heights Business Solutions, our agents walk you through each process towards a dependable conclusion. With Orion Heights Business Solutions, you can expect an established, exhaustive approach to real-estate management and agency. These are some of the reasons why you should consider doing business with us."
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
            "To every manufacturer, importer or wholesaler, distribution is a key part of their business. From their base of operation to the final consumer, we offer efficient and cost-effective distribution by optimizing the supply chain management process. We will optimize your sales volume by distributing to identified gaps in the market. If your company is looking for strategic positioning, we are at your service to deliver tailored and success delivery solution which focuses mainly on optimizing your brand experience. "
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

