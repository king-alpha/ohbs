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
            "Did you know that buying and selling of a typical home today entails lots of processes? At Orion Heights Business Solutions, our agents walk you through each process towards a dependable conclusion. With Orion Heights Business Solutions, you can expect an established, exhaustive approach to real-estate management and agency. These are some of the reasons why you should consider doing business with us."
        },
        {
          title: "business development",
          img_src: require("@/assets/images/goal.png"),
          details:
            "We deliver strategic success by empowering our clients through a comprehensive assessment of their business objectives, identifying and redefining key variables that will facilitate the attainment of market leadership. To survive and grow in business, a superior product or service offering is the key. At Orion Heights Business Solutions, we believe strategy is all about creating distinction by choosing different set of activities to create a unique mix of value. We help our clients achieve market leadership by creating sustainable competitive advantage. Hence, our focus is to deliver value through exhaustive execution of business strategies that guarantee unparalleled outcomes."
        },
        {
          title: "brand development",
          img_src: require("@/assets/images/instagram.png"),
          details:
            "Your brand identity is your company’s personality. Image and consistency play a significant role in branding., hence, we build a brand DNA that delivers on the company’s value proposition. \
There are various brands in the market today, competing for recognition and placement in the minds of their target audience. At Orion Heights Business Solutions, a brand is all about the perception of a product, service or a person on the consumers’ mind. We employ relevant and infallible evolving mechanisms to ensure that we deliver on our value proposition “Delivering Strategic Success” \
” to our clients. Our objective as a business is to help clients gain strategic success which will invariably result in increased profitability and enhanced customer loyalty through positive associations and awareness of their brand.\
We deliver strategic success through the utilization of distinctive marketing and brand strategies in order to increase the perceived value of a product or service, which ensures fulfillment in customer expectations and unswerving customer \
satisfaction.  At Orion Heights Business Solutions, we superintend all aspects of the consumer's brand association in order to deliver the relevant and unparalleled brand experience."
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
            "Orion Heights Business Solutions provides its client with a business development road map that leads to the creation of enduring value from customers, markets, and through sustainable relationships. Key areas of expertise are: Holistic system analysis and alignment through the identification of business issues and key prioritie \
preparation of a strategic blueprint that facilitates successful execution of business ideas \
Process optimization \
Creation of campaigns that respond effectively to consumer inclinations \
value chain analysis \
Our Customer Relationship Management solution entails 360-degree view of the customer."
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

