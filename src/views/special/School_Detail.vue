<template>
  <section class="instrument-section">
    <div class="inner-banner demo-2 text-center">
      <div id="breadcrumb_wrapper">
        <div class="container">
          <h2>Universities</h2>
          <h6>先锋的合作院校</h6>
        </div>
      </div>
    </div>
    <!--- instrument ---->
    <div class="instrument">
      <div class="container">
        <h3 class="last-updated"><a @click="$router.push({path: '/liberal_arts_college'})" style="color: white; ">先锋的合作院校</a>
          <small>Universities</small>
        </h3>
        <div class="instrument-view">
          <div id="detail">
            <div class="row">
              <div class="col-md-4 ins-image">
                <img :src="basePath + '/static/images/universities/' + item.shortName + '_1.jpg'"
                     title="instrument"
                     alt=""/>
                <p class="diff">
                  <a :href="item.homePage">
                    <small>访问官网 Visit Homepage</small>
                  </a>
                </p>
                <div v-for="(list, i) in item.financial" :key="list.id">
                  <div v-if="i==0" class="span span1">
                    <p class="left">学费/生活费 Financial</p>
                    <div class="clearfix"></div>
                  </div>
                  <div v-if="i==0" class="span span2">
                    <p class="left">{{list.id}}</p>
                    <p class="right">{{list.description}}</p>
                    <div class="clearfix"></div>
                  </div>
                  <div v-if="i==1" class="span span1">
                    <p class="left">{{list.id}}</p>
                    <p class="right">{{list.description}}</p>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
              <div class="col-md-8 ins-details">
                <div class="ins-name">
                  <h3>{{item.name}}<br> <a :href="item.homePage">
                    <small>{{item.enName}}</small>
                  </a>
                  </h3>

                  <h4 style="margin-top: 30px;"><strong>学校简介
                    <small>School Introduction</small>
                  </strong></h4>
                  <p>{{item.shortDescription}}</p>
                  <h4><strong>学校活动
                    <small>School Activities</small>
                  </strong></h4>
                  <p>{{item.activity}}</p>
                  <h4><strong>学校荣誉
                    <small>School Rewards</small>
                  </strong></h4>
                  <p>{{item.rewards}}</p>
                </div>
                <div v-for="(list, i) in item.overview" :key="list.id">

                  <div v-if="i%2==0" class="span span1">
                    <p class="left">{{list.id}}</p>
                    <p class="right">{{list.description}}</p>
                    <div class="clearfix"></div>
                  </div>
                  <div v-if="i==(item.overview.length-1)" class="span span4">
                    <p class="left">{{list.id}}</p>
                    <p class="right">{{list.description}}</p>
                    <div class="clearfix"></div>
                  </div>
                  <div v-if="i%2==1 && i!=(item.overview.length-1)" class="span span2">
                    <p class="left">{{list.id}}</p>
                    <p class="right">{{list.description}}</p>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
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
    name: 'school',
    data() {
      return {
        item: JSON.parse(window.localStorage.getItem("school")),
        basePath: basePath,
      }
    },
    mounted(){
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
