<template>
  <section class="instrument-section">
    <div class="inner-banner demo-2 text-center">
      <div id="breadcrumb_wrapper">
        <div class="container">
          <h2>Personnel</h2>
          <h6>人员介绍</h6>
        </div>
      </div>
    </div>
    <!--- instrument ---->
    <div class="instrument">
      <div class="container">
        <h3 class="last-updated"> 学校成员
          <small>Core Member</small>
        </h3>
        <div class="instrument-view">
          <div class="col-md-4 ins-image">
            <img :src=" basePath + '/static/images/organization/' + item.id + '_1.jpg'" :title="item.name" alt="" style="width: 100%"/>
          </div>
          <div class="col-md-8">
            <div id="detail">
              <div class="ins-name">
                <h3>{{item.name}} {{item.enName}}
                  <small>{{item.jobTitle}}</small>
                </h3>
                <p>{{item.shortDescription}}</p>
                <p>{{item.enDescription}}</p>
              </div>
              <div class="span span1" v-if="item.moreInfo.length > 0">
                <p class="left">{{item.moreInfo[0].id}}</p>
                <p class="right">{{item.moreInfo[0].description}}</p>
                <div class="clearfix"></div>
              </div>
            </div>
            <div class="clerfix"></div>
          </div>
        </div>
      </div>
    </div>
    <!--- /instrument ---->
  </section>
</template>

<script>
  export default {
    name: 'personnel',
    data() {
      return {
        item: JSON.parse(window.localStorage.getItem("personnel")),
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
