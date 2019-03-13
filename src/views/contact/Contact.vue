<template>
  <section class="contact">
    <div class="inner-banner demo-2 text-center">
      <div id="breadcrumb_wrapper">
        <div class="container">
          <h2>Contact Information</h2>
          <h6>联系我们</h6>
        </div>
      </div>
    </div>
    <!--contact-->
    <div class="contact">
      <div class="container">
        <div class="map">
          <h4>地图信息 Map Information</h4>
          <div id="map">
            <div style="width:100%;height:600px;border:#ccc solid 1px;" id="dituContent"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style type="text/css">
  .iw_poi_title {
    color: #CC5522;
    font-size: 14px;
    font-weight: bold;
    overflow: hidden;
    padding-right: 13px;
    white-space: nowrap
  }

  .iw_poi_content {
    font: 12px arial, sans-serif;
    overflow: visible;
    padding-top: 4px;
    white-space: -moz-pre-wrap;
    word-wrap: break-word
  }
</style>
<script>
  export default {
    name: 'contact',
    data(){
      return{
        basePath: basePath
      }
    },
    mounted() {
      initMap();//创建和初始化地图
    }
  }

  //创建和初始化地图函数：
  function initMap() {
    createMap();//创建地图
    setMapEvent();//设置地图事件
    addMapControl();//向地图添加控件
    addMarker();//向地图中添加marker
  }

  //创建地图函数：
  function createMap() {
    var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
    var point = new BMap.Point(104.051509, 30.54877);//定义一个中心点坐标
    map.centerAndZoom(point, 18);//设定地图的中心点和坐标并将地图显示在地图容器中
    window.map = map;//将map变量存储在全局
  }

  //地图事件设置函数：
  function setMapEvent() {
    map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
    map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
    map.enableScrollWheelZoom();//启用鼠标双击放大，默认启用(可不写)
  }

  //地图控件添加函数：
  function addMapControl() {
    //向地图中添加缩放控件
    var ctrl_nav = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL});
    map.addControl(ctrl_nav);
    //向地图中添加缩略图控件
    var ctrl_ove = new BMap.OverviewMapControl({anchor: BMAP_ANCHOR_TOP_RIGHT, isOpen: 0});
    map.addControl(ctrl_ove);
    //向地图中添加比例尺控件
    var ctrl_sca = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT});
    map.addControl(ctrl_sca);
  }

  //标注点数组
  var markerArr = [{
    title: "先锋教育",
    content: "手机：17780622519<br/>固话：028－83964698<br/>电子邮箱：875699924@qq.com<br/>地址：成都市武侯区天府四街仁美大源印象三栋五楼",
    point: "104.051509|30.54877",
    isOpen: 0,
    icon: {w: 21, h: 21, l: 0, t: 0, x: 6, lb: 5}
  }
  ];

  //创建marker
  function addMarker() {
    for (var i = 0; i < markerArr.length; i++) {
      var json = markerArr[i];
      var p0 = json.point.split("|")[0];
      var p1 = json.point.split("|")[1];
      var point = new BMap.Point(p0, p1);
      var marker = new BMap.Marker(point);  // 创建标注
      var iw = createInfoWindow(i);
      var label = new BMap.Label(json.title, {"offset": new BMap.Size(json.icon.lb - json.icon.x + 10, -20)});
      marker.setLabel(label);
      map.addOverlay(marker);
      label.setStyle({
        borderColor: "#808080",
        color: "#333",
        cursor: "pointer"
      });

      (function () {
        var index = i;
        var _iw = createInfoWindow(i);
        var _marker = marker;
        _marker.openInfoWindow(_iw);
        _marker.addEventListener("click", function () {
          this.openInfoWindow(_iw);
        });
        _iw.addEventListener("open", function () {
          _marker.getLabel().hide();
        })
        _iw.addEventListener("close", function () {
          _marker.getLabel().show();
        })
        label.addEventListener("click", function () {
          _marker.openInfoWindow(_iw);
        })
        if (!!json.isOpen) {
          label.hide();
          _marker.openInfoWindow(_iw);
        }
      })()
    }
  }

  //创建InfoWindow
  function createInfoWindow(i) {
    var json = markerArr[i];
    var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>" + json.content + "</div>");
    return iw;
  }

</script>
