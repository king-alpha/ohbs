<template>
  <div id="landing-page" class="nav-bar-wrapper">
    <nav-bar></nav-bar>
    <h2>services</h2>
    <div id="services">
      <div class="service-group">
        <div class="service">
          <img src="@/assets/images/home.png" alt="call-center" />
          <div class="details">
            <label>real estate management and agency</label>
            <div class="readmore">Read More</div>
          </div>
        </div>
        <div class="service">
          <img src="@/assets/images/goal.png" alt="call-center" />
          <div class="details">
            <label>business Development</label>
            <div class="readmore">Read More</div>
          </div>
        </div>
      </div>
      <div class="service-group">
        <div class="service">
          <img src="@/assets/images/instagram.png" alt="call-center" />
          <div class="details">
            <label>brand managemnt and development</label>
            <div class="readmore">Read More</div>
          </div>
        </div>
        <div class="service">
          <img src="@/assets/images/growth.png" alt="call-center" />
          <div class="details">
            <label>distribution and sales</label>
            <div class="readmore">Read More</div>
          </div>
        </div>
        <div class="service">
          <img src="@/assets/images/call-center.png" alt="call-center" />
          <div class="details">
            <label>marketing consuling services</label>
            <div class="readmore">Read More</div>
          </div>
        </div>
      </div>
    </div>
    <cards></cards>
    <div id="why-choose-us">
      <h2>Why choose us ?</h2>
      <label>We deliver strategic success by empowering our clients through a comprehensive assessment of their business objectives, identifying and redefining key variables that will facilitate the attainment of market leadership. To survive and grow in business, a superior product or service offering is the key. At Orion Heights Business Solutions, we believe strategy is all about creating distinction by choosing different set of activities to create a unique mix of value. We help our clients achieve market leadership by creating sustainable competitive advantage. Hence, our focus is to deliver value through exhaustive execution of business strategies that guarantee unparalleled outcomes.</label>
    </div>
    <div id="landing-page-recent-blog">
      <h2>Recent Blog</h2>
      <recent-blog></recent-blog>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import RecentBlog from "./RecentBlog";
import Cards from "./Cards";

export default {
  name: "landing-page",
  components: { NavBar, Cards, RecentBlog }
};
</script>

<style scoped>
#why-choose-us {
  padding: 20px;
  width: 70%;
  margin: 0 auto;
}

#why-choose-us h2,
#services {
  margin-bottom: 20px;
}

#why-choose-us label {
  font-size: 1.5em;
  opacity: 0.8;
}

h2 {
  text-align: center;
  color: blue;
  text-transform: uppercase;
  padding: 15px 0;
}

.details label {
  color: blue;
  text-transform: capitalize;
}

.service-group {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.service {
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
}

.readmore {
  color: rgb(255, 166, 0);
  padding: 5px;
  cursor: pointer;
  font-style: italic;
  text-align: center;
}

.service img {
  width: 125px;
}

#landing-page-recent-blog {
  background-color: #f3f3f3ec;
  padding: 18px 50px;
}

#landing-page-recent-blog h2 {
  text-transform: capitalize;
  font-style: italic;
}

@media only screen and (min-width: 426px) {
  .service-group:first-child {
    margin-bottom: 50px;
  }
}

@media only screen and (max-width: 425px) {
  .service {
    text-align: center;
    width: 425px;
    margin: 30px auto;
  }

  .service-group:first-child {
    margin-bottom: 0;
  }

  #landing-page-recent-blog {
    padding: 18px 15px;
  }
}
</style>
