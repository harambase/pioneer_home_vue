<template>
  <section class="laboratory">
    <div class="inner-banner demo-2 text-center">
      <div id="breadcrumb_wrapper">
        <div class="container">
          <h2>About Pioneer Education</h2>
          <h6>关于先锋教育</h6>
        </div>
      </div>
    </div>
    <div class="technologies">
      <div class="container">
        <div class="row">
          <h3 class="last-updated">关于先锋教育
            <small>Who we are?</small>
          </h3>
          <p>
            一个只有4个老师和21位学生的民间微型学校，却创造了10年间输送了近300名学生到全美排名前100的大学，每一年可以保送10个学生到美国大学读书的“奇迹”。
            宽大的草坪，典型的希腊式圆柱，两排长廊，尖屋顶，搭配着蓝天跟白云，一晃神，你会以为你身处欧洲的某所大学。
            有一种置身殿堂的味道，仿佛远处的尘埃都挤不进这个院子。然而身边人不断发出的“好安逸噻”会一下子把你拉回现实。
            <br>
            A micro-school with only 4 teachers and 21 students has sent nearly 300 students in the past 10 years to the
            top 100 universities in the United States. Each year, 10 students can be miraculously admitted into the US
            University. Large lawns, typical Greek columns, two rows of promenades, pointed roofs, with blue sky and
            white clouds, you will think that you are in a university in Europe.
            There is a taste of being in the temple, as if the dust in the distance is not crowded into the yard.
            However, the "good sulphur" that people around me will constantly send will bring you back to reality.
          </p>
          <div class="tech-accordian">
            <el-collapse v-model="activeNames" accordion class="tech-accordian">
              <el-collapse-item name="1" active>
                <template slot="title">
                  <div class="panel-heading" role="tab" id="headingOne">
                    <h4 class="panel-title asd">
                      <span>&#8594;</span>
                      <a class="pa_italic">
                        <label class="horse1">建校历史 History</label>
                      </a>
                    </h4>
                  </div>
                </template>
                <div class="panel panel-default">
                  <div id="collapseOne" class="panel-collapse collapse in">
                    <div class="panel-body panel_text">
                      <div class="row">
                        <div class="col-md-12">
                          <p>
                            刘晓伟校长于1998年提出了“Good Character、Critical Thinking、Life-long Learning、Communication and
                            Collaboration”（学会做人、学会思考、学会学习、学会交流、学会合作）的教育目标。在思考怎样达到这些目标时，刘校长发现许多知识都可以作为载体来达成这一教育目标，唯一的前提是学生对此感兴趣。<br>
                            1998年刘校长在北京成立“北京先锋思维教育文化有限公司”，在一个幼儿园里以英语和信息技术为载体，开始实践这个教育理念
                          </p>
                          <p>
                            2002年，刘校长在上海继续实践这样的教育理念，最初仍然是以少年儿童为主要的教育对象。在之后和高中家长的一次交谈中，意识到出国对于许多中国孩子而言或许是更好的选择。于是便在当年接受了三个这样的学生作为第一批学生，这三位学生于2005年离开先锋前往美国读大学。之后，先锋学校开始以初高中生为主要招生对象。<br>
                            至此，先锋教育初具雏形。
                          </p>
                          <p>
                            2002年-2006年先锋教育主要采用在线教育的方式，2006年之后，刘校长回到成都，在家中开办私塾。
                            经过了几年的平稳发展后，2013年3月份，先锋教育学校有了实体的校园，进入了新的阶段。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </el-collapse-item>
              <el-collapse-item name="2">
                <template slot="title">
                  <div class="panel-heading" role="tab" id="headingTwo">
                    <h4 class="panel-title asd">
                      <span>&#8594;</span>
                      <a class="pa_italic collapsed">
                        <label class="horse2">先锋社区概况 Overall Of Pioneer</label>
                      </a>
                    </h4>
                  </div>
                </template>
                <div class="panel panel-default">
                  <div class="panel-collapse collapse in">
                    <div class="panel-body panel_text">
                      <p>
                        先锋教育社区位于成都市武侯区天府四街仁美大源，风景宜人。在长期的教育实践中，先锋渐渐形成了自己的特点
                      </p>
                      <h4>小规模、个性化教育</h4>
                      <p>
                        长期以来先锋的学生数量维持在20—30人内，有人觉得这样的规模只能称为一个班而非一个学校。但我们认为最重要的是做符合先锋教育理念的教育，而非要做大做强。所以在相当长的一段时间内，先锋都维持这个规模不变。
                        小规模教学的好处在于师生比高，每个学生都可以和教师充分交流，获得教师充分的关注，可以根据每个学生的不同情况实施不同的教育，做到因材施教。另一个好处是彼此的情感连接很强，大家像一家人一样。
                      </p>
                      <h4>师生同吃同住</h4>
                      <p>
                        先锋没有所谓的教师宿舍和教师食堂。所有老师包括校长在内都和学生同吃同住。先锋同样没有所谓的老师办公室，学生的教室就是老师的办公室。
                        师生同吃同住给先锋带来了非常多的好处，如师生平等，学生安全的保证，更多的教育机会，亲密的学习共同体等等等等。
                      </p>
                      <h4>提问式教育、项目式教学</h4>
                      <p>
                        体制内教育的核心之一是灌输式教育，视学生为接收、储存知识的容器。其隐藏的假设是学生一无所知，需要知识渊博的老师来帮助TA获取知识，TA是可以被控制的，学习的最终目的应该是适应社会，成为一个“精致的利己主义者”。
                        在先锋，最常见的教学方式是教师对学生的提问，像苏格拉底的精神助产术一样，帮助学生理清自己的想法，自己在做什么、到底要做什么。因为我们认为学生是充满求知欲的主动学习者，可以通过丰富的创造力和批判的精神去探究并积极面对现实生活。
                        先锋实施项目式教学已经有一段时间了，我们还鼓励学生在支教中自己当老师，亲自实施项目式教学。故差不多每个先锋的学生都渐渐熟悉、接受了项目式教学：以一个真实的问题为出发点，以项目的方式探究、解决这个问题，在整个项目的实施过程中完成对应的学习任务。
                      </p>
                      <h4>丰富的活动</h4>
                      <p>
                        支教、音乐会、露营、骑行、节日庆祝、各种讲座……先锋有着丰富的“课外”活动，实质上先锋教育没有课内、课外之分，所谓的课外活动只是体制内教育的分类而已。
                      </p>
                      <h4>学生自治</h4>
                      <p>
                        先锋推崇学生自治，我们鼓励学生尽可能地参与到校园生活、管理的各个方面。2013年3月先锋教育刚刚开始实体办学时，就产生了第一届学生政府。学生政府做了很多有意思、有价值的事情：如制定各种规章制度、公约（教室管理、安全等等）、举行各类活动（节日庆祝、支教等）等。
                      </p>
                    </div>
                  </div>
                </div>
              </el-collapse-item>
              <el-collapse-item name="3">
                <template slot="title">
                  <div class="panel-heading" role="tab">
                    <h4 class="panel-title asd">
                      <span>&#8594;</span>
                      <a class="pa_italic collapsed">
                        <label class="horse2">教育理念 Educational Concept</label>
                      </a>
                    </h4>
                  </div>
                </template>
                <div class="panel panel-default">
                  <div class="panel-collapse collapse in">
                    <div class="panel-body panel_text">
                      <div class="ins-details">
                        <p>
                          <strong>先锋的教育目标是“Good Character、Critical Thinking、Life-long Learning、Communication and
                            Collaboration”（学会做人、学会思考、学会学习、学会交流、学会合作）。在先锋，一切教育实践都是围绕“五会”来开展的。</strong><br>
                        </p>
                        <h4>学会做人</h4>
                        <p>主要指的是品格教育，即致力于让学生成为一个道德成熟、负责任、自律、有良好品格的人。</p>

                        <h4>学会思考</h4>
                        <p>在思维能力中，先锋尤其强调批判性思维和创造性思维。
                          我们认为应试教育并没有提升学生的思维水平反而在全方面的压制、消除学生的思维。而许多问题的突破口就在于思维能力的提升。
                          除了提升具体的思维能力——分析能力；分辨假设、观点、论据等的能力；综合能力等——之外，我们认为批判性思维和创造性思维还包含着对应的精神气质，即不迷信权威，乐于独立思考，对外界保持开放的心态，尊重他人，积极自信等。
                        </p>

                        <h4>学会学习</h4>
                        <p>
                          相对于体制内教育强调学习“知识”，先锋强调让学生掌握学习能力，不是“学会”，而是“会学”。因为在这个信息爆炸，知识快速更新的时代，仅仅掌握现有的知识是远远不够的，那会很快沦为新一代的“文盲”，这个时代要求学生成为一个终身学习者，自主学习者。
                          具体到学习过程。我们认为学习需要与自己的生命、生活相关。学生不是知识的容器，不是只能储存外在知识、客观知识的机器。相反，学生应该是有意义的主动建构者，是认知的主体。学生需要在生活中主动发现定义问题，确定学习目标，承担自己的责任并朝向目标努力，不断反思调控自身的学习，遇到困难和挑战也能坚持努力。
                        </p>
                        <h4>学会交流</h4>
                        <p>
                          交流能力是一个人生存与发展的必备能力，也是决定一个人成功的必要条件。
                          有些人可能会认为，几乎所有的人张口就能说话，还需要学吗？我们认为说话不等于交流。与人交流是个复杂的过程。我们需要学习如何倾听他人，尊重并欣赏不同的观点，在情景中有礼貌的表达自己的情绪、想法，不讨好，不指责，最终达成有效的沟通。
                        </p>
                        <h4>学会合作</h4>
                        <p>
                          现在的体制教育唯成绩论，非常强调竞争，事实上过度的竞争很容易造成孩子不敢面对失败，加剧他们的自我中心倾向。
                          不少家长甚至认为孩子只要成绩好就行，其他方面暂时不用管，他们恨不得孩子把自己的全部时间用在学习上，有些家长牺牲不少时间精力来帮孩子处理学习之外的事情，自己化身为一个完美的温室包围着孩子。最终结果是亲子关系紧张，孩子只会死学习，基本的生活自理能力都没有，更不用谈在当今时代至关重要的合作能力了。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </el-collapse-item>
              <el-collapse-item name="4">
                <template slot="title">
                  <div class="panel-heading" role="tab">
                    <h4 class="panel-title asd">
                      <span>&#8594;</span>
                      <a class="pa_italic collapsed">
                        <label class="horse2">校园文化 Campus Culture</label>
                      </a>
                    </h4>
                  </div>
                </template>
                <div class="panel panel-default">
                  <div class="panel-collapse collapse in">
                    <div class="panel-body panel_text">
                      <div class="ins-details">
                        <p><strong>
                          安全、自由、责任、包容，这四点是先锋教育所认同的价值观。</strong>
                        </p>
                        <h4>安全</h4>
                        <p>
                          安全是先锋学校的底线。安全除了身体上的安全外，还包括心灵上的。身体上的安全主要指身体健康，充足的营养，良好的睡眠，减少意外事件的发生。心灵上的安全主要是让学生在先锋感受到足够的安全感，不用担心受到来自老师、家长、他人的无端指责。努力让学生可以在先锋放心、舒心，认为学校是可以信赖、值得依靠的。</p>

                        <h4>自由</h4>
                        <p>自由并不是一件简单的事情。很多学生缺乏运用自由的能力，因为他们对自由怀有恐惧。习惯了过去被决定的生活，来到先锋自由的环境下会有种种不适，反而怀念过去一切被决定的安全感。
                          先锋首先做的是摆脱束缚，帮助学生尽力摆脱外界（学校、家庭）加给学生的不必要控制。这一过程需要家长的配合，也需要花费一定的时间，因为有的学生甚至已经将这些不必要的束缚内化了。
                          其次是打造一个支持环境，让学生可以在先锋这个环境下自由的探索自己的兴趣、志向所在。导师在这个过程中会给予必要的帮助和指导。
                          最后才是培养学生运用自由的能力，这包括了独立思考能力、权利意识、承担自己行动的后果等。</p>

                        <h4>责任 </h4>
                        <p>责任是与自由密切相关的，想享受自由，就需要有勇气做出选择，为自己的选择负责任。先锋的自由并不是肆无忌惮，没有规则的，而是建立在负责任的前提下的。</p>
                        <p>
                          责任还与界限有关，学生需要去学习哪些是自己的责任，哪些是别人的。自己的责任必须由自己负责，别人不能越界。比如学习、生活是自己的事情，学生需要学会自己处理好，而不是由老师和家长操劳。</p>
                        <p>责任还和社会有关，学生需要学会看待社会现实，确定自己需要扮演的角色以及应该担负的责任。</p>
                        <h4>包容 </h4>
                        <p>包容首先指的是对多元价值的尊重。</p>
                        <p>
                          先锋对学生的多元价值选择保持着包容的态度，我们尊重每一名学生的个人兴趣，给予学生最大的自由和宽容度，激励他们做自己想做的事。因为我们不认为学生成功的路径只有一条。我们相信教育是让每个学生自由的成长，找到属于他自己的价值。</p>
                        <p>包容还意味着开放。</p>
                        <p>
                          先锋学校首先是向学生家长开放的，家长有权利了解学校的方方面面，也有足够的接口来参与学校的工作。其次，先锋向外界的同行是开放的。先锋乐意与各种NGO、国内外教育同行组织进行合作交流。最后，先锋是向未来开放的，我们从未觉得自己已经是最好，相反我们认为自己还有很多进步的空间，我们乐意根据环境、根据学生来调整自己，做更好的教育。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
          <!--Horizontal Tab-->
        </div>
      </div>
    </div>
    <div class="laboratory">
      <div class="container">
        <h3 class="last-updated">校园风采
          <small>School Scenes</small>
        </h3>
        <el-carousel :interval="4000" type="card" height="550px">
          <el-carousel-item v-for="item in items" :key="item.id"
                            @click="dialogVisible = true">
            <el-card :body-style="{ padding: '0px',  background: '#eee', cursor: 'pointer'}" shadow="hover">
              <div class="ser-img">
                <img :src="item.src" style="height:500px">
              </div>
              <div style="padding: 14px;">
                <h3>{{item.title}}</h3>
                <p>{{item.description}}</p>
              </div>
            </el-card>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </section>
</template>

<script>
  const picItem = [
    {
      id: 0,
      title: '旅行课风光',
      description: '这次同学们来到了龙泉山，最后面的柿子老师是资深驴友',
      src: 'http://3992202.s21i-3.faidns.com/2/ABUIABACGAAg58KeqAUotPyXUjCAEDjVCg%211000x1000.jpg'
    },
    {
      id: 1,
      title: '旅行课风光',
      description: '龙泉山上种满了桃树，正逢初春，枝头上挂满了小朵的花苞',
      src: 'http://3992202.s21i-3.faidns.com/2/ABUIABACGAAgkMOeqAUo-rGl9QYwgBA41Qo%211000x1000.jpg'
    },
    {
      id: 2,
      title: '旅行课风光',
      description: '大家在山顶上的大合照',
      src: 'http://3992202.s21i-3.faidns.com/2/ABUIABACGAAg-8eeqAUop9jipQUwgBA41Qo%211000x1000.jpg'
    },
    {
      id: 3,
      title: '体育课',
      description: '在川大球场与好奇学校的橄榄球比赛',
      src: 'https://mmbiz.qpic.cn/mmbiz_jpg/XWhLcYPv76IpEpLZiczicQ620uXRQwR2JnMpM78kiaV89dG0osMbSNxtucwCiaxBgsdBib2YXfiaaD4SGE3hUxJabYHg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1'
    },
    {
      id: 4,
      title: '体育课',
      description: '20km城市骑行',
      src: 'https://mmbiz.qpic.cn/mmbiz_jpg/XWhLcYPv76Km6bPvd4AXLc2OhA62JpRPYycicujGZKlDdWK5pOsCI1J6CTQepudNDLIQNgOgOhzTgISkIxgjEFw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1'
    },
    {
      id: 5,
      title: '体育课',
      description: '经过筹划和准备，同学们穿上安全警示背心，按各自所需准备好帽子、墨镜、饮用水，很多人迎来了人生中第一次的长途骑行',
      src: 'https://mmbiz.qpic.cn/mmbiz_jpg/XWhLcYPv76Km6bPvd4AXLc2OhA62JpRPeGiaRXSDFOsaQibmWxncDAOQrFbktXSib4sLtMtmwmIJKa0PAicUicSnIzQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1'
    },
    {
      id: 6,
      title: 'DE徒步挑战--两天一夜',
      description: '和成都DE未来训练营一同合作，举行两天一夜露营活动',
      src: 'http://mmbiz.qpic.cn/mmbiz_jpg/XWhLcYPv76Img4LnAnaxlG9Fm87TytrcuZYWhdVsbvTEictvicEwEb80cJHRaEdEibjr930MmWkoJrT9tHYbYibydw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1'
    },
    {
      id: 7,
      title: 'DE徒步挑战--两天一夜',
      description: '野外攀岩体验',
      src: 'http://mmbiz.qpic.cn/mmbiz_jpg/XWhLcYPv76Img4LnAnaxlG9Fm87TytrcrJwo3rDXWCPHKBYJVCRlhib1Umxl0AQkDzelImbicPNE6Ticic2MZcv89Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1'
    },
    {
      id: 8,
      title: '万圣节狂欢',
      description: '由学生在陈佳老师的带领下自主预备、申请预算举办的Cosplay盛宴',
      src: 'https://mmbiz.qpic.cn/mmbiz_jpg/XWhLcYPv76JkQngg4ZTicw0oYtGwEj524eZ5iaADjxcpajLfBUiaBwKeCBmef4T7TYnykhCUP4tMRVVlgeJ8B1CAQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1'
    },
    {
      id: 9,
      title: '万圣节狂欢',
      description: '大合照',
      src: 'https://mmbiz.qpic.cn/mmbiz_jpg/XWhLcYPv76JkQngg4ZTicw0oYtGwEj524JrwSK1qt4va9brn62LPKhOT9psnia7BJs88P8JbqEick596pv169MX6Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1'
    },
    {
      id: 10,
      title: '秋日草坪音乐会',
      description: '阳光，肥皂泡儿，苹果，鲜花，深蓝色的野餐布，金黄的落叶，还有轻快的长笛曲，所谓秋日，就是如此了吧',
      src: 'https://mmbiz.qpic.cn/mmbiz_jpg/XWhLcYPv76J2o2Q77BianzicKnSfOoJUJ2kPjfzESGOZ1taygt0UPzsyvvnqlZvBia0812JticEyHWsw3vIbycibFPg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1'
    },
  ];
  export default {
    name: 'about',
    data() {
      return {
        basePath: basePath,
        items: picItem,
        activeNames: '1',
      }
    }
  }
</script>
