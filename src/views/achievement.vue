<!DOCTYPE html>
<html xmlns:th="http://www.w3.org/1999/xhtml">
<head th:include="/thymeleaf/header :: header('先锋教育::教学成果')"></head>
<head>

</head>
<body>
<div id="top"></div>
<!-- header -->
<div th:include="/thymeleaf/navTop :: navtop(3)" class="sidebar-collapse"></div>
<!-- //header -->

<!-- instruments-section -->
<section class="instruments-section">
    <div class="inner-banner demo-2 text-center">
        <div id="breadcrumb_wrapper">
            <div class="container">
                <h2>Achievements</h2>
                <h6>教学成果</h6>
            </div>
        </div>
    </div>
    <!--- instruments ---->
    <div class="instruments">
        <div class="container">
            <div class="row">
                <h3 class="last-updated"> 先锋的教学成果
                    <small>Achievements</small>
                </h3>
                <p>
                    <strong>导师制</strong>是先锋的核心，每个先锋学员都有一名指导老师，帮助学员解决学习生活中的各项问题，有针对性的进行个性化的学习指导。
                    导师扮演两种角色：一是镜子，在跟学员不断的交流中让学员看清自己，进而搬走困扰前进的“石头”。二是催化剂，在学习共同体，导师扮演者催化剂的角色，推进学习共同体一起针对某些主题深入学习下去。
                </p>
                <p>
                    The mentor system is the core of the Pioneer School. Each pioneer student has an mentor to help the
                    students solve various problems in the study and life, and to carry out personalized learning
                    guidance.
                    The mentor plays two roles: First, the mirror, in the constant communication with the students, let
                    the students see themselves, and then move away the "stone" that is in the way.
                    The second is the catalyst, as we all in the learning community, the role of the mentor as a
                    catalyst, and the promotion of the learning community to further study on certain topics.
                </p>
                <!--Horizontal Tab-->
            </div>
            <div class="row" style="margin-top: 30px;">
                <h3 class="last-updated"> 先锋的历届毕业生
                    <small>Pioneer Previous Graduates</small>
                </h3>
                <div class="lab-instruments" id="detail">
                    <div id="parentHorizontalTab">
                        <ul class="resp-tabs-list hor_1">
                            <li>2018</li>
                            <li>2017</li>
                            <li>2016</li>
                            <li>2015-1992</li>
                        </ul>
                        <div class="resp-tabs-container hor_1">
                            <div>
                                <div v-for="(item, index) in staffList" :key="item.id">
                                    <div v-if="item.type == 'f'" class="col-md-3 jm-item first">
                                        <div class="jm-item-wrapper">
                                            <div class="jm-item-image">
                                                <img v-if="item.id != 'lxw'"
                                                     :src="'/static/images/organization/' + item.id +'_1.jpg'"
                                                     :alt="item.name">
                                                <img v-else :src="'/static/images/organization/' + item.id +'_2.jpg'"
                                                     :alt="item.name">
                                                <span class="jm-item-overlay"> </span>
                                                <div class="jm-item-button"><a
                                                        :href="'/faculty_staff/single?name=' + item.id">View</a></div>
                                            </div>
                                            <div class="jm-item-title">{{item.name}} {{item.enName}}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div>
                                <div v-for="(item, index) in staffList" :key="item.id">
                                    <div v-if="item.category.indexOf('1')!=-1 && item.type == 'f'">
                                        <div class="col-md-3 jm-item first">
                                            <div class="jm-item-wrapper">
                                                <div class="jm-item-image">
                                                    <img v-if="item.id != 'lxw'"
                                                         :src="'/static/images/organization/' + item.id +'_1.jpg'"
                                                         :alt="item.name">
                                                    <img v-else :src="'/static/images/organization/' + item.id +'_2.jpg'"
                                                         :alt="item.name">
                                                    <span class="jm-item-overlay"> </span>
                                                    <div class="jm-item-button"><a
                                                            :href="'/faculty_staff/single?name=' + item.id">View</a>
                                                    </div>
                                                </div>
                                                <div class="jm-item-title">{{item.name}} {{item.enName}}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div>
                                <div v-for="(item, index) in staffList" :key="item.id">
                                    <div v-if="item.category.indexOf('2')!=-1 && item.type == 'f'">
                                        <div class="col-md-3 jm-item first">
                                            <div class="jm-item-wrapper">
                                                <div class="jm-item-image">
                                                    <img v-if="item.id != 'lxw'"
                                                         :src="'/static/images/organization/' + item.id +'_1.jpg'"
                                                         :alt="item.name">
                                                    <img v-else :src="'/static/images/organization/' + item.id +'_2.jpg'"
                                                         :alt="item.name">
                                                    <span class="jm-item-overlay"> </span>
                                                    <div class="jm-item-button"><a
                                                            :href="'/faculty_staff/single?name=' + item.id">View</a>
                                                    </div>
                                                </div>
                                                <div class="jm-item-title">{{item.name}} {{item.enName}}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div>
                                <div v-for="(item, index) in staffList" :key="item.id">
                                    <div v-if="item.category.indexOf('7')!=-1 && item.type == 'f'">
                                        <div class="col-md-3 jm-item first">
                                            <div class="jm-item-wrapper">
                                                <div class="jm-item-image">
                                                    <img v-if="item.id != 'lxw'"
                                                         :src="'/static/images/organization/' + item.id +'_1.jpg'"
                                                         :alt="item.name">
                                                    <img v-else :src="'/static/images/organization/' + item.id +'_2.jpg'"
                                                         :alt="item.name">
                                                    <span class="jm-item-overlay"> </span>
                                                    <div class="jm-item-button"><a
                                                            :href="'/faculty_staff/single?name=' + item.id">View</a>
                                                    </div>
                                                </div>
                                                <div class="jm-item-title">{{item.name}} {{item.enName}}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--- /instruments ---->
</section>
<!-- //instruments-section -->

<!-- footer -->
<div th:include="/thymeleaf/footer :: footer" id="copyright"></div>
<!-- //footer -->

<!-- script -->
<div th:include="/thymeleaf/js :: load_js"></div>
<!-- //script -->

<!-- for easy-responsive-tabs -->
<script src="/static/scripts/easyResponsiveTabs.js"></script>
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