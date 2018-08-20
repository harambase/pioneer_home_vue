<!DOCTYPE html>
<html xmlns:th="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
<head th:include="/thymeleaf/header :: header('先锋教育::教职员工')"></head>

<body>
<!-- header -->
<div th:include="/thymeleaf/navTop :: navtop(2)" class="sidebar-collapse"></div>
<!-- //header -->

<!-- instrument-section -->
<section class="instrument-section">
    <div class="inner-banner demo-2 text-center">
        <div id="breadcrumb_wrapper">
            <div class="container">
                <h2>Curriculum</h2>
                <h6>先锋教学实践</h6>
            </div>
        </div>
    </div>
    <!--- technologies ---->
    <div class="row">
        <div class="container">
            <div class="col-md-4">
                <div class="terms">
                    <div class="instrument-view">
                        <div class="col-md-6 ins-image">
                            <img src="/static/images/logo.png" title="instrument" alt=""/>
                        </div>
                        <div id="detail2">
                            <div v-for="(item, index) in staffList" :key="item.id">
                                <div v-if="item.id === id" class="col-md-6 ins-details">
                                    <div class="ins-name">
                                        <h3>{{item.name}} {{item.enName}}
                                            <small>{{item.jobTitle}}</small>
                                        </h3>
                                        <p>{{item.shortDescription}}</p>
                                        <p>{{item.enDescription}}</p>
                                    </div>
                                    <div>
                                        <div class="span span1">
                                            <p class="left">{{list.id}}</p>
                                            <p class="right">{{list.description}}</p>
                                            <div class="clearfix"></div>
                                        </div>
                                        <div class="span span2">
                                            <p class="left">{{list.id}}</p>
                                            <p class="right">{{list.description}}</p>
                                            <div class="clearfix"></div>
                                        </div>
                                        <div class="span span1">
                                            <p class="left">{{list.id}}</p>
                                            <p class="right">{{list.description}}</p>
                                            <div class="clearfix"></div>
                                        </div>
                                        <div class="span span4">
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
            <div class="col-md-8">
                <div class="instruments">
                    <div class="row">
                        <h3 class="last-updated"> 先锋的课程设置
                            <small>Curriculum</small>
                        </h3>
                        <p>
                            <strong>学习方式很重要</strong>在先锋除了上课之外，还有很多的非传统课堂活动，比如支教、运动会、春游、游学、公益等等，这些活动是和课堂同等重要的。而这些也是方式也统统是可以获得学分的。
                            我们希望学员们可以打开视野，突破固有的对学习的想象，真正找到自己喜欢的领域钻进去，深入的学下去，然后将相关的学习技能迁移到其他必须的领域。
                        </p>
                        <p>
                            In addition to class, there are many non-traditional classroom activities, such as teaching, sports, spring, study, public welfare, etc. These activities are as important as the classroom. And these are all ways to get credits.
                            We hope that students can open their horizons, break through the inherent imagination of learning, truly find the areas they like to go in, learn in depth, and then transfer relevant learning skills to other necessary fields.
                        </p>
                        <div>
                            <div class="span span1">
                                <p class="left">{{list.id}}</p>
                                <p class="right">{{list.description}}</p>
                                <div class="clearfix"></div>
                            </div>
                            <div class="span span2">
                                <p class="left">{{list.id}}</p>
                                <p class="right">{{list.description}}</p>
                                <div class="clearfix"></div>
                            </div>
                            <div class="span span1">
                                <p class="left">{{list.id}}</p>
                                <p class="right">{{list.description}}</p>
                                <div class="clearfix"></div>
                            </div>
                            <div class="span span4">
                                <p class="left">{{list.id}}</p>
                                <p class="right">{{list.description}}</p>
                                <div class="clearfix"></div>
                            </div>
                        </div>

                    </div>
                    <div class="row" style="margin-top: 30px;">
                        <h3 class="last-updated"> 先锋的教学实践
                            <small>Practice</small>
                        </h3>

                    </div>
                    <div class="row" style="margin-top: 30px;">
                        <h3 class="last-updated"> 先锋的课堂
                            <small>Moments</small>
                        </h3>
                        <div id="grid-gallery" class="grid-gallery">
                            <section class="grid-wrap">
                                <ul class="grid">
                                    <li class="grid-sizer"></li><!-- for Masonry column width -->
                                    <li>
                                        <figure>
                                            <img src="https://mmbiz.qpic.cn/mmbiz_jpg/XWhLcYPv76J2o2Q77BianzicKnSfOoJUJ2kPjfzESGOZ1taygt0UPzsyvvnqlZvBia0812JticEyHWsw3vIbycibFPg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1"/>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="http://3992202.s21i-3.faidns.com/2/ABUIABACGAAg58KeqAUotPyXUjCAEDjVCg%211000x1000.jpg"
                                                 alt="img02"/>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="http://3992202.s21i-3.faidns.com/2/ABUIABACGAAgkMOeqAUo-rGl9QYwgBA41Qo%211000x1000.jpg"
                                                 alt="img03"/>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="http://3992202.s21i-3.faidns.com/2/ABUIABACGAAg-8eeqAUop9jipQUwgBA41Qo%211000x1000.jpg"
                                                 alt="img04"/>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="https://mmbiz.qpic.cn/mmbiz_jpg/XWhLcYPv76IpEpLZiczicQ620uXRQwR2JnMpM78kiaV89dG0osMbSNxtucwCiaxBgsdBib2YXfiaaD4SGE3hUxJabYHg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1"
                                                 alt="img05"/>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="https://mmbiz.qpic.cn/mmbiz_jpg/XWhLcYPv76Km6bPvd4AXLc2OhA62JpRPYycicujGZKlDdWK5pOsCI1J6CTQepudNDLIQNgOgOhzTgISkIxgjEFw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1"
                                                 alt="img06"/>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="https://mmbiz.qpic.cn/mmbiz_jpg/XWhLcYPv76Km6bPvd4AXLc2OhA62JpRPeGiaRXSDFOsaQibmWxncDAOQrFbktXSib4sLtMtmwmIJKa0PAicUicSnIzQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1"
                                                 alt="img01"/>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="http://mmbiz.qpic.cn/mmbiz_jpg/XWhLcYPv76Img4LnAnaxlG9Fm87TytrcuZYWhdVsbvTEictvicEwEb80cJHRaEdEibjr930MmWkoJrT9tHYbYibydw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1"
                                                 alt="img02"/>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="http://mmbiz.qpic.cn/mmbiz_jpg/XWhLcYPv76Img4LnAnaxlG9Fm87TytrcrJwo3rDXWCPHKBYJVCRlhib1Umxl0AQkDzelImbicPNE6Ticic2MZcv89Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1"
                                                 alt="img03"/>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="https://mmbiz.qpic.cn/mmbiz_jpg/XWhLcYPv76JkQngg4ZTicw0oYtGwEj524eZ5iaADjxcpajLfBUiaBwKeCBmef4T7TYnykhCUP4tMRVVlgeJ8B1CAQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1"
                                                 alt="img04"/>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="https://mmbiz.qpic.cn/mmbiz_jpg/XWhLcYPv76JkQngg4ZTicw0oYtGwEj524wPRlIgMemaDQiakIdX9maib2LtzCKuB9EgPgcEnyEOOr8pH3tHB4Qic4A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1"
                                                 alt="img05"/>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="https://mmbiz.qpic.cn/mmbiz_jpg/XWhLcYPv76JkQngg4ZTicw0oYtGwEj524JrwSK1qt4va9brn62LPKhOT9psnia7BJs88P8JbqEick596pv169MX6Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1"
                                                 alt="img01"/>
                                        </figure>
                                    </li>

                                </ul>
                            </section><!-- // grid-wrap -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--- /instrument ---->
</section>
<!-- //instrument-section -->

<!-- footer -->
<div th:include="/thymeleaf/footer :: footer" id="copyright"></div>
<!-- //footer -->

<!-- script -->
<div th:include="/thymeleaf/js :: load_js"></div>
<!-- //script -->
<script src="/static/scripts/main1.js"></script> <!-- Resource jQuery -->
<script src="/static/scripts/imagesloaded.pkgd.min.js"></script>
<script src="/static/scripts/classie.js"></script>
<script src="/static/scripts/cbpGridGallery.js"></script>
<script>
    new CBPGridGallery(document.getElementById('grid-gallery'));
</script>
<script type="text/javascript">
    $(document).ready(function () {
        //Horizontal Tab
        $('#parentHorizontalTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function (event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });

        // Child Tab
        $('#ChildVerticalTab_1').easyResponsiveTabs({
            type: 'vertical',
            width: 'auto',
            fit: true,
            tabidentify: 'ver_1', // The tab groups identifier
            activetab_bg: '#fff', // background color for active tabs in this group
            inactive_bg: '#F5F5F5', // background color for inactive tabs in this group
            active_border_color: '#c1c1c1', // border color for active tabs heads in this group
            active_content_border_color: '#5AB1D0' // border color for active tabs contect in this group so that it matches the tab head border
        });

        //Vertical Tab
        $('#parentVerticalTab').easyResponsiveTabs({
            type: 'vertical', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            closed: 'accordion', // Start closed if in accordion view
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function (event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo2');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });
    });
</script>
<script src="/static/scripts/vue.min.js"></script>
<script>
    new Vue({
        el: '#detail',
        data: {
            id: getQueryString("name"),
            staffList: getStaffList(),
        }
    });
</script>

<a href="#" id="toTop" style="display: block;"> <span id="toTopHover" style="opacity: 1;"> </span></a>

</body>
</html>