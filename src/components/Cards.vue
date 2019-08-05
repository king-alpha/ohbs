<template>
  <div id="cards-wrapper">
    <h2 v-if="should_show">New on the Market</h2>
    <div id="cards">
      <div class="ui three stackable cards">
        <div class="card" v-for="(card, index) in now_selling" :key="index">
          <div class="image">
            <img :src="card.img_src" alt="house" />
          </div>
          <a
            @click="routeTo('/property-description')"
            class="ui red top left attached label"
          >For Sale</a>
          <div class="content">
            <div @click="routeTo('/property-description')" class="header">{{card.title}}</div>
            <div class="description">
              <i class="map marker alternate icon"></i>
              {{card.description}}
            </div>
            <div class="description price">GHC {{card.price}}</div>
            <div class="details">
              <div class="detail-items">
                <div class="detail-item">Beds</div>
                <div class="detail-item">Baths</div>
                <div class="detail-item">Sqft</div>
              </div>
              <div class="detail-values">
                <div class="detail-value">{{card.meta.beds}}</div>
                <div class="detail-value">{{card.meta.baths}}</div>
                <div class="detail-value">{{card.meta.sqft}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cards",
  data() {
    return {
      now_selling: [
        {
          title: "4 bedroom house",
          description: "east legon, prampram",
          img_src: require("@/assets/images/img1.jpg"),
          price: "450.00",
          meta: {
            beds: 4,
            baths: 3,
            sqft: 5500
          }
        },
        {
          title: "4 bedroom house",
          description: "east legon, prampram",
          img_src: require("@/assets/images/img2.jpg"),
          price: "450.00",
          meta: {
            beds: 4,
            baths: 3,
            sqft: 5500
          }
        },
        {
          title: "4 bedroom house",
          description: "east legon, prampram",
          img_src: require("@/assets/images/img3.jpg"),
          price: "450.00",
          meta: {
            beds: 4,
            baths: 3,
            sqft: 5500
          }
        }
      ]
    };
  },
  methods: {
    routeTo(link) {
      this.$router.push(link);
    }
  },
  computed: {
    should_show() {
      return this.$router.history.current.path === "/";
    }
  }
};
</script>

<style scoped>
#cards-wrapper {
  background-color: #f3f3f3ec;
}

#cards-wrapper h2 {
  padding-top: 8px;
  text-align: center;
  color: blue;
}

#cards {
  padding: 18px 50px;
}

#cards .card {
  margin-top: 25px !important;
}

.top.left.attached.label {
  margin: 15px !important;
  margin-top: 20px !important;
}

.header {
  text-transform: capitalize;
  cursor: pointer;
}

.price {
  color: blue !important;
}

.description {
  text-transform: capitalize;
}

.details {
  max-width: 50%;
}

.details,
.price {
  margin-top: 17px;
}
.detail-items,
.detail-values {
  display: flex;
  justify-content: space-between;
}

.detail-item {
  text-transform: uppercase;
}

.detail-value {
  font-weight: 600;
  font-size: 1.2em;
}
</style>
