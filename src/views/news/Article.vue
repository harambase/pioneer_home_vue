<template>
  <section class="error">
    <div class="inner-banner demo-2 text-center">
      <div id="breadcrumb_wrapper">
        <div class="container">
          <h2>Articles</h2>
          <h6>学校资讯</h6>
        </div>
      </div>
    </div>
    <!--- blog ---->
    <div class="blog">
      <div class="container">
        <div class="bolg-posts" id="detail">
          <div v-if="i === 1">
            <div v-for="index in articleList.length">
              <div class="col-md-12 blog-top">
                <div v-bind:class="{'blog-in': true, 'blog-in1' : index%2==1}">
                  <a @click="doClick(articleList[index-1])" class="blog-post">
                    <!--<img :src="articleList[index-1].cover + '&tp=webp&wxfrom=5&wx_lazy=1'" alt=" ">-->
                  </a>
                  <div class="blog-grid">
                    <div class="date">
                      <span class="date-in"><i class="fa fa-calendar"></i>{{articleList[index-1].time}}</span>
                      <a @click="doClick(articleList[index-1])" class="comments"><i class="fa fa-user"></i>
                        {{articleList[index-1].author}}
                      </a>
                      <div class="clearfix"></div>
                    </div>
                    <h3>
                      <a @click="doClick(articleList[index-1])">{{articleList[index-1].title}}
                      </a>
                    </h3>
                    <p>{{articleList[index-1].abstract}}</p>
                    <a @click="doClick(articleList[index-1])" class="smore">阅读更多 READ MORE</a>
                  </div>
                  <div class="clearfix"></div>
                </div>
                <i class="black"> </i>
              </div>
            </div>
          </div>

          <div class="clearfix"></div>
          <ul class="start">
            <li><a href="#"><span class="prev" v-on:click="i=1">上一页 Prev</span></a></li>
            <li>
              <span v-if="i == 1">1</span>
              <a v-else href="#" v-on:click="i=1">1</a>
            </li>
            <li>
              <span v-if="i == 2">2</span>
              <a v-else href="#" v-on:click="i=2">2</a>
            </li>
            <li><a href="#" class="next" v-on:click="i=2">下一页 Next</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!--- /Blog ---->
  </section>
</template>
<script>
  import axios from 'axios';

  export default {
    name: 'p_article',
    data() {
      return {
        basePath: basePath,
        articleList: '',
        i: 1
      }
    },
    mounted() {
      axios.get(basePath + '/article').then(response => {
        this.articleList = response.data;
      })
    },
    methods: {
      doClick(item) {
        window.localStorage.setItem('article', JSON.stringify(item));
        this.$router.push({path: '/news/article/single'});
      }
    }
  }
</script>
