<template>
  <footer class="app-footer">
    <div class="footer-top" style="z-index:1">
    </div>
    <div class="footer" style="z-index:1">
      <div class="container">
        <div class="footer-grids">
          <div class="col-md-4 footer-grid-left">
            <h3>先锋教育微信公众号
              <small>WeChat Official Account</small>
            </h3>
            <img style="width: 200px; height: 200px;" :src=" basePath + '/static/images/weChat.jpg'"/>
          </div>
          <div class="col-md-4 footer-grid-left">
            <h3>联系信息
              <small>Contact Information</small>
            </h3>
            <ul>
              <li><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>成都市新都区斑竹园镇北欧知识城云兴路8号</li>
              <li><span class="glyphicon glyphicon-earphone" aria-hidden="true"></span>+028 83964698</li>
              <li><span class="glyphicon glyphicon-phone" aria-hidden="true"></span>17780622519</li>
              <li><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span><a
                href="875699924@qq.com">875699924@qq.com</a></li>
              <li><span><i style="margin-left: -15px;" class="fa fa-qq"></i></span><a
                style="margin-left: 15px;" href="//wpa.qq.com/msgrd?v=3&uin=821978672&site=qq&menu=yes">点击联系桔子老师</a>
              </li>
              <li><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>如果您想参观学校，请提前三日联系我们。
              </li>
            </ul>

          </div>
          <div class="col-md-4 footer-grid-left">
            <h3>先锋教育学校简介
              <small>BRIEF INTRODUCTION</small>
            </h3>
            <p>先锋教育学校是民间小型个性化教育机构。学校以学会做人、学会思考、学会学习、学会交流、学会合作
              (Good Character、Critical Thinking、Life-long Learning、Communication & Collaboration)
              之“五会”作为教育目标，采用了问题式教学、项目式教学、学生自治、导师制等个性化教育方式来帮助学生调动主动学习的求知欲，
              让学生通过丰富的创造力和审辩思维去探究并面对现实和未来生活。10年间，这所微小学校有300余名学生考入全美排名前100的大学。
              <i>- The Entire Pioneer Team</i></p>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="footer-bottom">
          <div class="footer-bottom-left">
            <p> Copyright ©2018 成都知识城教育咨询有限公司 xianfengedu.org 版权所有</p>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </footer>
</template>
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
