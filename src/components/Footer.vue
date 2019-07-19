<template>
  <footer class="app-footer">
    <div class="footer-top" style="z-index:1">
    </div>
    <div class="footer" style="z-index:1">
      <div class="container">
        <div class="footer-grids">
          <div class="col-md-4 footer-grid-left" style="margin-bottom: 10px;">
            <h3>微信公众号
              <small><strong>WeChat Account</strong></small>
            </h3>
            <img style="width: 180px; height: 180px; left: 100px" :src=" basePath + '/static/images/weChat.jpg'"/>
          </div>
          <div class="col-md-4 footer-grid-left" style="margin-bottom: 10px;">
            <h3>联系信息
              <small><strong>Contact Information</strong></small>
            </h3>
            <ul>
              <li><span><i style="margin-left: -15px; margin-right: 15px;" class="fa fa-map-marker"></i></span>四川省成都市武侯区天府四街仁美大源印象三栋五楼</li>
              <li><span><i style="margin-left: -15px; margin-right: 15px;" class="fa fa-phone"></i></span>座机<small>Phone</small>：(028) 83964698</li>
              <li><span><i style="margin-left: -15px; margin-right: 15px;" class="fa fa-phone-square"></i></span>电话<small>TEL</small>： 17780622519</li>
              <li><span><i style="margin-left: -15px; margin-right: 15px;" class="fa fa-wechat"></i></span>微信<small>WECHAT</small>：18328420537</li>
              <li><span><i style="margin-left: -15px; margin-right: 15px;" class="fa fa-envelope"></i></span><a href="mailto:875699924@qq.com">875699924@qq.com</a></li>
              <li><span><i style="margin-left: -15px; margin-right: 15px;" class="fa fa-qq"></i></span><a href="//wpa.qq.com/msgrd?v=3&uin=821978672&site=qq&menu=yes">点击QQ联系桔子老师</a></li>
              <li><span><i style="margin-left: -15px; margin-right: 15px;" class="fa fa-exclamation-circle"></i></span>如果您想参观社区，请提前三日联系我们。
              </li>
            </ul>

          </div>
          <div class="col-md-4 footer-grid-left" style="margin-bottom: 10px;">
            <h3>先锋教育简介
              <small><strong>Brief INTRODUCTION</strong></small>
            </h3>
            <p style="text-align:justify; margin-left: -10px; margin-top:-15px">关于先锋教育 Pioneer Education
              1998年先锋教育创办于北京，现于成都、深圳有两个实体学习社区。在先锋教育这一终身学习者社区中，以项目式学习、社会化学习、导师制、社区自治、自主游学等方式，调动社区学习者的主动性和求知欲，支持学习者自然而然地成长。在以学习者为中心的个性化教育中，先锋教育相信“人人皆可成材”，这始于尊重与信任，终于责任与自由。
              先锋教育20年来，共有400多名学习者从先锋走入耶鲁大学、哥伦比亚大学等美国大学及美国排名前100名的文理学院。
              <i>- The Entire Pioneer Team</i></p>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="footer-bottom" style="text-align: center; color: #ffffff; font-size: .8em;">
            <p> ©2019 成都知识城教育咨询有限公司 xianfengedu.cn 版权所有</p>
            <p> 蜀ICP备19003079号-1</p>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
  p {
    margin: 0px;
    padding: 0px 0 0px 0;
    line-height: 15px;
    font-weight: 600;
  }
</style>
<script>
  export default {
    name: 'c-footer',
    data() {
      return {
        basePath: basePath
      }
    }
  }
</script>
