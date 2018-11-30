<template>
  <section class="error">
    <div class="inner-banner demo-2 text-center">
      <div id="breadcrumb_wrapper">
        <div class="container">
          <h2>WeChat Official Accounts Platform</h2>
          <h6>微信公众平台</h6>
        </div>
      </div>
    </div>
    <!--- blog ---->
    <div class="blog">
      <div class="container">
        <div class="bolg-posts" id="detail">
          <div v-if="i === 1">
            <div v-for="index in 5">
              <div class="col-md-12 blog-top">
                <div v-bind:class="{'blog-in': true, 'blog-in1' : index%2==1}">
                  <a :href="weChatList[index-1].content_url.replace(/amp;/g, '')"
                     class="blog-post">
                    <img :src="weChatList[index-1].cover + '&tp=webp&wxfrom=5&wx_lazy=1'" alt=" ">
                  </a>
                  <div class="blog-grid">
                    <div class="date">
                      <span class="date-in"><i class="fa fa-calendar"></i>{{new Date(weChatList[index-1].datetime*1000).toLocaleString()}}</span>
                      <a :href="weChatList[index-1].content_url.replace(/amp;/g, '')"
                         class="comments"><i class="fa fa-user"></i>
                        {{weChatList[index-1].author}}</a>
                      <div class="clearfix"></div>
                    </div>
                    <h3><a :href="weChatList[index-1].content_url.replace(/amp;/g, '')">{{weChatList[index-1].title}}</a>
                    </h3>
                    <p>{{weChatList[index-1].abstract}}</p>
                    <a :href="weChatList[index-1].content_url.replace(/amp;/g, '')"
                       class="smore">阅读更多 READ MORE</a>
                  </div>
                  <div class="clearfix"></div>
                </div>
                <i class="black"> </i>
              </div>
            </div>
          </div>
          <div v-else>
            <div v-for="index in 5">
              <div class="col-md-12 blog-top">
                <div v-bind:class="{'blog-in': true, 'blog-in1' : index%2==1}">
                  <a :href="weChatList[index+4].content_url.replace(/amp;/g, '')"
                     class="blog-post">
                    <img :src="weChatList[index+4].cover + '&tp=webp&wxfrom=5&wx_lazy=1'">
                  </a>
                  <div class="blog-grid">
                    <div class="date">
                      <span class="date-in"><i class="fa fa-calendar"></i>{{new Date(weChatList[index+4].datetime*1000).toLocaleString()}}</span>
                      <div class="clearfix"></div>
                    </div>
                    <h3><a :href="weChatList[index+4].content_url.replace(/amp;/g, '')">{{weChatList[index+4].title}}</a>
                    </h3>
                    <p>{{weChatList[index+4].abstract}}</p>
                    <a :href="weChatList[index+4].content_url.replace(/amp;/g, '')"
                       class="smore">阅读更多 READ MORE</a>
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
    name: 'wechat',
    data() {
      return {
        basePath: basePath,
        weChatList: '',
        i: 1
      }
    },
    mounted() {
      axios.get(basePath + '/wechat').then(response => {
        this.weChatList = response.data.article;
      })
    }
  }
</script>
