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
    <div class="blog">
      <div class="container">
        <h3 class="last-updated"> Article
          <small>先锋资讯</small>
        </h3>
        <div class="container">
          <div class="single">
            <div class="single-top">
              <el-carousel :interval="4000" type="card" height="400px">
                <el-carousel-item v-for="index in item.pics.length" @click="dialogVisible = true">
                  <div class="row">
                    <div class="col-md-12">
                      <img :src="basePath + '/static/images/course/'+ item.pics[index-1].name" style="width:75%"/>
                    </div>
                    <div class="col-md-12">
                      <p class="eget">{{item.pics[index-1].description}}</p>
                    </div>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="top-single">
              <h3 style="text-align: center">{{item.name}}<br>
                <small>{{item.enName}}</small>
              </h3>
              <div class="grid-single">
                <div class="single-one"><span><i class="fa fa-calendar"></i>{{item.time}}</span></div>
                <div class="single-one"><span><i class="fa fa-user"></i>{{item.author}}</span></div>
                <div class="clearfix"></div>
              </div>
            </div>
            <div v-html='item.body'></div>
          </div>
        </div>
      </div>
    </div>
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
    }
  }
</script>
