<template>
  <div id="recent-blog">
    <div id="cards">
      <div class="ui three stackable cards">
        <div class="card" v-for="(blog, index) in blogs" :key="index">
          <div class="image">
            <img :src="blog.img_src" alt="house" />
          </div>
          <div class="content">
            <div class="description">{{blog.created_at}}</div>
            <div class="header blog-title">{{blog.title}}</div>
            <div class="blog-content">{{blog.content}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          title: "The power of marketing by samuel abu",
          created_at: "Jan 20, 2019",
          img_src: require("@/assets/images/Cost-Advantage-3.jpg"),
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem enim quo quae rem cum earum aliquam, fugit exercitationem omnis ipsa minus facilis voluptate vel voluptas vitae sapiente dolorum nostrum consectetur!"
        },
        {
          title: "The power of marketing by samuel abu",
          created_at: "Jan 20, 2019",
          img_src: require("@/assets/images/Cost-Advantage-3.jpg"),
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem enim quo quae rem cum earum aliquam, fugit exercitationem omnis ipsa minus facilis voluptate vel voluptas vitae sapiente dolorum nostrum consectetur!"
        },
        {
          title: "The power of marketing by samuel abu",
          created_at: "Jan 20, 2019",
          img_src: require("@/assets/images/Cost-Advantage-3.jpg"),
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem enim quo quae rem cum earum aliquam, fugit exercitationem omnis ipsa minus facilis voluptate vel voluptas vitae sapiente dolorum nostrum consectetur!"
        }
      ]
    };
  },
  name: "recent-blog"
};
</script>

<style>
.blog-content {
  margin-top: 15px;
}

.blog-title {
  margin-top: 10px !important;
  color: blue !important;
}
</style>
