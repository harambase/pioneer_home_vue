<template>
<!-- instrument-section -->
<section class="instrument-section">
    <div class="inner-banner demo-2 text-center">
        <div id="breadcrumb_wrapper">
            <div class="container">
                <h2>Admission Guide</h2>
                <h6>先锋招生简章</h6>
            </div>
        </div>
    </div>
    <!--- instrument ---->
    <div class="instrument">
        <div class="container">
            <h3 class="last-updated"> 先锋教育学校招生简章
                <small> Admission Guide</small>
            </h3>
            <div class="instrument-view">
                <div class="row">
                    <div class="col-md-4 timing" style="margin-left: 4%;">
                        <div class="opening-hours" style="margin-bottom: 25%;">
                            <h3><i class="fa fa-info"></i>招生信息 Admission Info</h3>
                            <ul>
                                <li><span><i class="fa fa-calendar"></i></span></li>
                                <li>春季3月1日开学，秋季9月1日开学</li>
                                <div class="clearfix"></div>
                            </ul>
                            <ul>
                                <li><span><i class="fa fa-money"></i></span></li>
                                <li>学费及生活费: ￥4万一学期</li>
                                <div class="clearfix"></div>
                            </ul>
                            <ul>
                                <li><span><i class="fa fa-users"></i> </span></li>
                                <li>招收15-18岁学生（特殊情况可放宽到13岁）</li>
                                <div class="clearfix"></div>
                            </ul>
                            <a @click="$router.push({path:'/faq'})" class="btn btn-info btn-info_2 pull-left" style="cursor:pointer; padding: 10px 20px; margin-top: 20px; font-size: 16px;">常见问题 FAQ</a>
                        </div>
                        <div class="opening-hours">
                            <h3><i class="fa fa-phone"></i>联系我们 Contact Us</h3>
                            <ul>
                                <li><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span></li>
                                <li>成都市新都区斑竹园镇北欧知识城云兴路8号</li>
                                <div class="clearfix"></div>
                            </ul>
                            <ul>
                                <li><span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></li>
                                <li>+028 83964698</li>
                                <div class="clearfix"></div>
                            </ul>
                            <ul>
                                <li><span class="glyphicon glyphicon-phone" aria-hidden="true"></span></li>
                                <li>17780622519</li>
                                <div class="clearfix"></div>
                            </ul>
                            <ul>
                                <li><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></li>
                                <li><a href="875699924@qq.com">875699924@qq.com</a></li>
                                <div class="clearfix"></div>
                            </ul>
                            <ul>
                                <li><span><i class="fa fa-qq"></i></span></li>
                                <li><a href="//wpa.qq.com/msgrd?v=3&uin=821978672&site=qq&menu=yes">点击联系桔子老师</a></li>
                                <div class="clearfix"></div>
                            </ul>
                            <ul>
                                <li><span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span></li>
                                <li>如果您想参观学校，请提前三日联系我们。</li>
                                <div class="clearfix"></div>
                            </ul>
                        </div>
                        <div class="help">
                            <h3><i class="fa fa-pencil-square-o"></i>先锋学校简介</h3>
                            <p>先锋教育学校是民间小型个性化教育机构。学校以学会做人、学会思考、学会学习、学会交流、学会合作
                                (Good Character、Critical Thinking、Life-long Learning、Communication & Collaboration)
                                之“五会”作为教育目标，采用了问题式教学、项目式教学、学生自治、导师制等个性化教育方式来帮助学生调动主动学习的求知欲，
                                让学生通过丰富的创造力和审辩思维去探究并面对现实和未来生活。10年间，这所微小学校有300余名学生考入全美排名前100的大学。
                                <i>- The Entire Pioneer Team</i></p>
                            <a @click="$router.push({path:'/about'})" style="cursor: pointer;" class="btn btn-default_2 pull-left">阅读更多 Read More</a>
                        </div>
                    </div>
                    <div class="col-md-7 abt-dec">

                        <h2>亲爱的家长、莘莘学子们<small>Greetings to Parents and Students</small></h2>
                        <div class="grid-single">
                            <div class="single-one"><span><i class="fa fa-calendar"></i>2018/07/08 </span></div>
                            <div class="single-one"><span><i class="fa fa-user"></i>先锋教育</span></div>
                            <!--<div class="single-one"><span><i class="fa fa-heart"></i>400</span></div>-->
                            <div class="clearfix"> </div>
                        </div>
                        <p class="diff">也许你已经历了中考、高考的历练，也许你正走在初中、高中的求学之路上，在这些年的学习生涯中，你的好奇心、你的求知欲是否还在？
                            是否还强烈地保持着？你是否有思考过，学习意味着求知，还是自省？意味着求职，还是自我实现？我与家族、与社会，我与国家、与世界有着怎样的联系？
                            你是否有去找寻，更丰富的学习方式、更全面的思考角度、更人文的教育模式？</p>
                        <p>在这里、在成都的一角，有这样的一所学校，她实践了十余年的非常规、个性化教育模式，送走了三百余位学子到美国读中学、大学且成绩优异。</p>
                        <p>
                            这里不只是学习英语，

                            我们学哲学与心理学——从思想深处理解世界；
                            我们学艺术——在中国艺术的熏陶和中西方艺术的对比研究中，加深对自己的文化认知和文化认同；
                            我们学历史——使学生们了解重要的历史与政治趋势，了解道德标准和伦理问题，培育知情、负责、人道的公民；
                            我们学游戏——培养学生在团队中与他人沟通、合作，领导团队，同时在合作与竞争并存的社会中，学会与其他人或组织电子竞技；
                            当然，我们学体育——不仅从中锻鍊学生的体魄，也是精神的修炼，观察、思考、合作等等学习皆含蕴其中。
                                           <p>
                            我们所有的学习都围绕着先锋的“五会”而展开：学会做人、学会思考、学会学习、学会交流、学会合作。
                            让每位学子找到自己的人生目标，快乐、自信地成为独立而有思想的人材，是先锋教育的首要目的，而留学只是我们架设的一座桥梁。

                        这就是先锋的教育，迥异于我们以前所理解的学习方式。我们的课堂从教室到公园，到博物馆，到大学校园，有远近的城市、乡村的学校，还有遍布城市各个角落的公益组织。</p><p>
                            我们的老师，有中国人、外国人，有硕士、博士、还有同学、乡民、小学生、行业精英、NGO成员……还有最重要的老师——大自然。
                            我们对中西方文化兼容并蓄，并践行古老的中国教育智慧——有教无类、因材施教，在充分给予每位学子个性化指导的同时，导师以身作则，化人于无声、于无形。
                        </p>
                        <h3>
                            欢迎有思想、有远见的你加入先锋！
                        </h3>

                    </div>
                </div>
            </div>


            <div class="clerfix"></div>
        </div>
    </div>
    <!--- /instrument ---->
</section>
<!-- //instrument-section -->

</template>

<script>
  export default {
    name: 'faq',
  }
</script>
