<template>
  <section class="instrument-section">
    <div class="inner-banner demo-2 text-center">
      <div id="breadcrumb_wrapper">
        <div class="container">
          <h2>Article</h2>
          <h6>先锋资讯</h6>
        </div>
      </div>
    </div>
    <!--- instrument ---->
    <div class="instrument">
      <div class="container">
        <h3 class="last-updated"> Article
          <small>先锋资讯</small>
        </h3>
        <div class="instrument-view">
          <div id="detail">
            <div class="ins-name">
              <h3>{{item.name}} {{item.enName}}
                <small>{{item.time}}</small>
              </h3>
              <p v-html='item.body'></p>
              <p></p>
            </div>
          </div>
          <div class="clerfix"></div>
        </div>
      </div>
    </div>
    <!--- /instrument ---->
  </section>
</template>

<script>
  export default {
    name: 'single_article',
    data() {
      return {
        item: JSON.parse(window.localStorage.getItem("article")),
        basePath: basePath,
      }
    },
    mounted() {
      let speed = 10;
      let timer = setInterval(function () {
        this.scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (this.scrollTop > 0) {
          this.scrollTop = (this.scrollTop - speed > 0) ? (this.scrollTop - speed) : 0;
          speed += 20;
          window.scrollTo(0, this.scrollTop);
        } else {
          clearInterval(timer);
        }
      }, 16);
      window.localStorage.clear();
    }
  }
</script>
