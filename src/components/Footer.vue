<template>
  <footer class="app-footer">
    <div class="footer-top" style="z-index:1">
    </div>
    <div class="footer" style="z-index:1">
      <div class="container">
        <div class="footer-grids">
          <div class="col-md-4 footer-grid-left">
            <h3>微信公众号
              <small><strong>WeChat Account</strong></small>
            </h3>
            <img style="width: 180px; height: 180px; left: 100px" :src=" basePath + '/static/images/weChat.jpg'"/>
          </div>
          <div class="col-md-4 footer-grid-left">
            <h3>联系信息
              <small><strong>Contact Information</strong></small>
            </h3>
            <ul>
              <li><span><i style="margin-left: -15px; margin-right: 15px;" class="fa fa-map-marker"></i></span>成都市武侯区天府四街仁美大源印象三栋五楼</li>
              <li><span><i style="margin-left: -15px; margin-right: 15px;" class="fa fa-phone"></i></span>座机<small>Phone</small>:(028) 83964698</li>
              <li><span><i style="margin-left: -15px; margin-right: 15px;" class="fa fa-phone"></i></span>电话<small>TEL</small>: 17780622519</li>
              <li><span><i style="margin-left: -15px; margin-right: 15px;" class="fa fa-envelope"></i></span><a href="mailto:875699924@qq.com">875699924@qq.com</a></li>
              <li><span><i style="margin-left: -15px; margin-right: 15px;" class="fa fa-qq"></i></span><a href="//wpa.qq.com/msgrd?v=3&uin=821978672&site=qq&menu=yes">点击联系桔子老师</a></li>
              <li><span><i style="margin-left: -15px; margin-right: 15px;" class="fa fa-exclamation-circle"></i></span>如果您想参观社区，请提前三日联系我们。
              </li>
            </ul>

          </div>
          <div class="col-md-4 footer-grid-left">
            <h3>先锋教育简介
              <small><strong>BRIEF INTRODUCTION</strong></small>
            </h3>
            <p style="text-align:justify; margin-left: -10px; margin-top:-15px">先锋教育是民间小型个性化教育机构。学校以学会做人、学会思考、学会学习、学会交流、学会合作
              (Good Character、Critical Thinking、Life-long Learning、Communication & Collaboration)
              之“五会”作为教育目标，采用了问题式教学、项目式教学、学生自治、导师制等个性化教育方式来帮助学生调动主动学习的求知欲，
              让学生通过丰富的创造力和审辩思维去探究并面对现实和未来生活。10年间，这所微小机构有300余名学生考入全美排名前100的大学。
              <i>- The Entire Pioneer Team</i></p>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="footer-bottom">
          <div class="footer-bottom-left">
            <p> Copyright ©2018 成都知识城教育咨询有限公司 xianfengedu.org 版权所有</p>
            <p> 蜀ICP备19003079号</p>
          </div>
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
