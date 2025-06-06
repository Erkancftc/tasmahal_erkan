$(function() {
    var LocsA = [
        {
            lat: 40.740178,
            lon: -74.190194,
            title: 'Property 1',
            html: [ '<div class="single-location bg-theme">',
                        '<thumb class="thumb">',
                            '<a href="property-details.html"><img src="assets/img/property/property_inner_1.jpg" alt="img"></a>',
                            '<div class="property-card-tag">Residence</div>',
                        '</thumb>',
                        '<div class="media-body">',
                            '<h4 class="title"><a href="property-details.html">Apartments Auckland</a></h4>',
                            '<p class="price text-theme2">$895.00</p>',
                            '<a class="location" href="property-details.html"><span class="icon"><img src="assets/img/icon/location-dot.svg" alt="img"></span>Brooklyn, New York 11233, United States</a>',
                            '<div class="property-card-meta">',
                                '<span><img src="assets/img/icon/property-icon1-1.svg" alt="img">Bed 4</span>',
                                '<span><img src="assets/img/icon/property-icon1-2.svg" alt="img">Bath 2</span>',
                                '<span><img src="assets/img/icon/property-icon1-3.svg" alt="img">1500 sqft</span>',
                            '</div>',
                        '</div>',
                    '</div>'
                ].join(''),
            icon: 'assets/img/icon/map-marker.svg',
        },
        {
            lat: 40.733617,
            lon: -74.101150,
            title: 'Property 2',
            html: [ '<div class="single-location bg-theme">',
                        '<thumb class="thumb">',
                            '<a href="property-details.html"><img src="assets/img/property/property_inner_3.jpg" alt="img"></a>',
                            '<div class="property-card-tag">Residence</div>',
                        '</thumb>',
                        '<div class="media-body">',
                            '<h4 class="title"><a href="property-details.html">Serenity Villa</a></h4>',
                            '<p class="price text-theme2">$895.00</p>',
                            '<a class="location" href="property-details.html"><span class="icon"><img src="assets/img/icon/location-dot.svg" alt="img"></span>Brooklyn, New York 11233, United States</a>',
                            '<div class="property-card-meta">',
                                '<span><img src="assets/img/icon/property-icon1-1.svg" alt="img">Bed 4</span>',
                                '<span><img src="assets/img/icon/property-icon1-2.svg" alt="img">Bath 2</span>',
                                '<span><img src="assets/img/icon/property-icon1-3.svg" alt="img">1500 sqft</span>',
                            '</div>',
                        '</div>',
                    '</div>'
                ].join(''),
            icon: 'assets/img/icon/map-marker.svg',
        },
        {
            lat: 40.743011,
            lon: -74.247100,
            title: 'Property 3',
            html: [ '<div class="single-location bg-theme">',
                        '<thumb class="thumb">',
                            '<a href="property-details.html"><img src="assets/img/property/property_inner_7.jpg" alt="img"></a>',
                            '<div class="property-card-tag">Residence</div>',
                        '</thumb>',
                        '<div class="media-body">',
                            '<h4 class="title"><a href="property-details.html">Kledokan Residence</a></h4>',
                            '<p class="price text-theme2">$895.00</p>',
                            '<a class="location" href="property-details.html"><span class="icon"><img src="assets/img/icon/location-dot.svg" alt="img"></span>Brooklyn, New York 11233, United States</a>',
                            '<div class="property-card-meta">',
                                '<span><img src="assets/img/icon/property-icon1-1.svg" alt="img">Bed 4</span>',
                                '<span><img src="assets/img/icon/property-icon1-2.svg" alt="img">Bath 2</span>',
                                '<span><img src="assets/img/icon/property-icon1-3.svg" alt="img">1500 sqft</span>',
                            '</div>',
                        '</div>',
                    '</div>'
                ].join(''),
            icon: 'assets/img/icon/map-marker.svg',
        },
        {
            lat: 40.711150,
            lon: -74.214998,
            title: 'Property 4',
            html: [ '<div class="single-location bg-theme">',
                        '<thumb class="thumb">',
                            '<a href="property-details.html"><img src="assets/img/property/property_inner_4.jpg" alt="img"></a>',
                            '<div class="property-card-tag">Residence</div>',
                        '</thumb>',
                        '<div class="media-body">',
                            '<h4 class="title"><a href="property-details.html">Villa Berkel-Enschot</a></h4>',
                            '<p class="price text-theme2">$895.00</p>',
                            '<a class="location" href="property-details.html"><span class="icon"><img src="assets/img/icon/location-dot.svg" alt="img"></span>Brooklyn, New York 11233, United States</a>',
                            '<div class="property-card-meta">',
                                '<span><img src="assets/img/icon/property-icon1-1.svg" alt="img">Bed 4</span>',
                                '<span><img src="assets/img/icon/property-icon1-2.svg" alt="img">Bath 2</span>',
                                '<span><img src="assets/img/icon/property-icon1-3.svg" alt="img">1500 sqft</span>',
                            '</div>',
                        '</div>',
                    '</div>'
                ].join(''),
            icon: 'assets/img/icon/map-marker.svg',
        },
        {
            lat: 40.711150,
            lon: -74.544998,
            title: 'Property 5',
            html: [ '<div class="single-location bg-theme">',
                        '<thumb class="thumb">',
                            '<a href="property-details.html"><img src="assets/img/property/property_inner_6.jpg" alt="img"></a>',
                            '<div class="property-card-tag">Residence</div>',
                        '</thumb>',
                        '<div class="media-body">',
                            '<h4 class="title"><a href="property-details.html">Permai Residence</a></h4>',
                            '<p class="price text-theme2">$895.00</p>',
                            '<a class="location" href="property-details.html"><span class="icon"><img src="assets/img/icon/location-dot.svg" alt="img"></span>Brooklyn, New York 11233, United States</a>',
                            '<div class="property-card-meta">',
                                '<span><img src="assets/img/icon/property-icon1-1.svg" alt="img">Bed 4</span>',
                                '<span><img src="assets/img/icon/property-icon1-2.svg" alt="img">Bath 2</span>',
                                '<span><img src="assets/img/icon/property-icon1-3.svg" alt="img">1500 sqft</span>',
                            '</div>',
                        '</div>',
                    '</div>'
                ].join(''),
            icon: 'assets/img/icon/map-marker.svg',
        }                
    ];
    new Maplace({
        locations: LocsA,
        controls_on_map: false,
        map_options: {
            zoom: 12,
            scrollwheel: false,
            stopover: true
        }
    }).Load();

});


/*-------------------------------------------------------------
    14. Maplace.js
---------------------------------------------------------------*/

/**
* Maplace.js
*
* Copyright (c) 2013 Daniele Moraschi
* Licensed under the MIT license
* For all details and documentation:
* http://maplacejs.com
*
* @version  0.2.10
* @preserve
*/
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b(require("jquery")):a.Maplace=b(a.jQuery)}(this,function(a){"use strict";function b(b){this.VERSION="0.2.10",this.loaded=!1,this.markers=[],this.circles=[],this.oMap=!1,this.view_all_key="all",this.infowindow=null,this.maxZIndex=0,this.ln=0,this.oMap=!1,this.oBounds=null,this.map_div=null,this.canvas_map=null,this.controls_wrapper=null,this.current_control=null,this.current_index=null,this.Polyline=null,this.Polygon=null,this.Fusion=null,this.directionsService=null,this.directionsDisplay=null,this.o={debug:!1,map_div:"#gmap",controls_div:"#controls",generate_controls:!0,controls_type:"dropdown",controls_cssclass:"",controls_title:"",controls_on_map:!0,controls_applycss:!0,controls_position:google.maps.ControlPosition.RIGHT_TOP,type:"marker",view_all:!0,view_all_text:"View All",pan_on_click:!0,start:0,locations:[],shared:{},map_options:{mapTypeId:google.maps.MapTypeId.ROADMAP},stroke_options:{strokeColor:"#0000FF",strokeOpacity:.8,strokeWeight:2,fillColor:"#0000FF",fillOpacity:.4},directions_options:{travelMode:google.maps.TravelMode.DRIVING,unitSystem:google.maps.UnitSystem.METRIC,optimizeWaypoints:!1,provideRouteAlternatives:!1,avoidHighways:!1,avoidTolls:!1},circle_options:{radius:100,visible:!0},styles:{},fusion_options:{},directions_panel:null,draggable:!1,editable:!1,show_infowindows:!0,show_markers:!0,infowindow_type:"bubble",listeners:{},beforeViewAll:function(){},afterViewAll:function(){},beforeShow:function(a,b,c){},afterShow:function(a,b,c){},afterCreateMarker:function(a,b,c){},beforeCloseInfowindow:function(a,b){},afterCloseInfowindow:function(a,b){},beforeOpenInfowindow:function(a,b,c){},afterOpenInfowindow:function(a,b,c){},afterRoute:function(a,b,c){},onPolylineClick:function(a){},onPolygonClick:function(a){},circleRadiusChanged:function(a,b,c){},circleCenterChanged:function(a,b,c){},drag:function(a,b,c){},dragEnd:function(a,b,c){},dragStart:function(a,b,c){}},this.AddControl("dropdown",c),this.AddControl("list",d),b&&"directions"===b.type&&(!b.show_markers&&(b.show_markers=!1),!b.show_infowindows&&(b.show_infowindows=!1)),a.extend(!0,this.o,b)}var c,d;return c={activateCurrent:function(a){this.html_element.find("select").val(a)},getHtml:function(){var b,c,d=this,e="";if(this.ln>1){for(e+='<select class="dropdown controls '+this.o.controls_cssclass+'">',this.ShowOnMenu(this.view_all_key)&&(e+='<option value="'+this.view_all_key+'">'+this.o.view_all_text+"</option>"),c=0;c<this.ln;c+=1)this.ShowOnMenu(c)&&(e+='<option value="'+(c+1)+'">'+(this.o.locations[c].title||"#"+(c+1))+"</option>");e+="</select>",e=a(e).bind("change",function(){d.ViewOnMap(this.value)})}return b=this.o.controls_title,this.o.controls_title&&(b=a('<div class="controls_title"></div>').css(this.o.controls_applycss?{fontWeight:"bold",fontSize:this.o.controls_on_map?"12px":"inherit",padding:"3px 10px 5px 0"}:{}).append(this.o.controls_title)),this.html_element=a('<div class="wrap_controls"></div>').append(b).append(e),this.html_element}},d={html_a:function(b,c,d){var e=this,f=c||b+1,g=d||this.o.locations[b].title,h=a('<a data-load="'+f+'" id="ullist_a_'+f+'" href="#'+f+'" title="'+g+'"><span>'+(g||"#"+(b+1))+"</span></a>");return h.css(this.o.controls_applycss?{color:"#666",display:"block",padding:"5px",fontSize:this.o.controls_on_map?"12px":"inherit",textDecoration:"none"}:{}),h.on("click",function(b){b.preventDefault();var c=a(this).attr("data-load");e.ViewOnMap(c)}),h},activateCurrent:function(a){this.html_element.find("li").removeClass("active"),this.html_element.find("#ullist_a_"+a).parent().addClass("active")},getHtml:function(){var b,c,e=a("<ul class='ullist controls "+this.o.controls_cssclass+"'></ul>").css(this.o.controls_applycss?{margin:0,padding:0,listStyleType:"none"}:{});for(this.ShowOnMenu(this.view_all_key)&&e.append(a("<li></li>").append(d.html_a.call(this,!1,this.view_all_key,this.o.view_all_text))),c=0;c<this.ln;c++)this.ShowOnMenu(c)&&e.append(a("<li></li>").append(d.html_a.call(this,c)));return b=this.o.controls_title,this.o.controls_title&&(b=a('<div class="controls_title"></div>').css(this.o.controls_applycss?{fontWeight:"bold",padding:"3px 10px 5px 0",fontSize:this.o.controls_on_map?"12px":"inherit"}:{}).append(this.o.controls_title)),this.html_element=a('<div class="wrap_controls"></div>').append(b).append(e),this.html_element}},b.prototype.controls={},b.prototype.create_objMap=function(){var b,c=this,d=0;for(b in this.o.styles)this.o.styles.hasOwnProperty(b)&&(0===d&&(this.o.map_options.mapTypeControlOptions={mapTypeIds:[google.maps.MapTypeId.ROADMAP]}),d++,this.o.map_options.mapTypeControlOptions.mapTypeIds.push("map_style_"+d));if(this.loaded)c.oMap.setOptions(this.o.map_options);else try{this.map_div.css({position:"relative",overflow:"hidden"}),this.canvas_map=a("<div>").addClass("canvas_map").css({width:"100%",height:"100%"}).appendTo(this.map_div),this.oMap=new google.maps.Map(this.canvas_map.get(0),this.o.map_options)}catch(e){this.debug("create_objMap::"+this.map_div.selector,e.toString())}d=0;for(b in this.o.styles)this.o.styles.hasOwnProperty(b)&&(d++,this.oMap.mapTypes.set("map_style_"+d,new google.maps.StyledMapType(this.o.styles[b],{name:b})),this.oMap.setMapTypeId("map_style_"+d))},b.prototype.add_markers_to_objMap=function(){var a,b,c=this.o.type||"marker";switch(c){case"marker":for(a=0;a<this.ln;a++)b=this.create_objPoint(a),this.create.marker.call(this,a,b);break;default:this.create[c].apply(this)}},b.prototype.create_objPoint=function(b){var c=a.extend({},this.o.locations[b]),d=void 0===c.visible?void 0:c.visible;return!c.type&&(c.type=this.o.type),c.map=this.oMap,c.position=new google.maps.LatLng(c.lat,c.lon),c.zIndex=void 0===c.zIndex?1e4:c.zIndex+100,c.visible=void 0===d?this.o.show_markers:d,this.o.maxZIndex=c.zIndex>this.maxZIndex?c.zIndex:this.maxZIndex,c.image&&(c.icon=new google.maps.MarkerImage(c.image,new google.maps.Size(c.image_w||32,c.image_h||32),new google.maps.Point(0,0),new google.maps.Point((c.image_w||32)/2,(c.image_h||32)/2))),c},b.prototype.create_objCircle=function(b){var c,d,e;return e=a.extend({},b),c=a.extend({},this.o.stroke_options),d=a.extend({},this.o.circle_options),a.extend(c,b.stroke_options||{}),a.extend(e,c),a.extend(d,b.circle_options||{}),a.extend(e,d),e.center=b.position,e.draggable=!1,e.zIndex=b.zIndex>0?b.zIndex-10:1,e},b.prototype.add_markerEv=function(a,b,c){var d=this;google.maps.event.addListener(c,"click",function(e){d.CloseInfoWindow(),d.o.beforeShow.call(d,a,b,c),d.o.show_infowindows&&b.show_infowindow!==!1&&d.open_infowindow(a,c,e),d.o.pan_on_click&&b.pan_on_click!==!1&&(d.oMap.panTo(b.position),b.zoom&&d.oMap.setZoom(b.zoom)),d.current_control&&d.o.generate_controls&&d.current_control.activateCurrent&&d.current_control.activateCurrent.call(d,a+1),d.current_index=a,d.o.afterShow.call(d,a,b,c)}),b.draggable&&this.add_dragEv(a,b,c)},b.prototype.add_circleEv=function(a,b,c){var d=this;google.maps.event.addListener(c,"click",function(){d.ViewOnMap(a+1)}),google.maps.event.addListener(c,"center_changed",function(){d.o.circleCenterChanged.call(d,a,b,c)}),google.maps.event.addListener(c,"radius_changed",function(){d.o.circleRadiusChanged.call(d,a,b,c)}),b.draggable&&this.add_dragEv(a,b,c)},b.prototype.add_dragEv=function(a,b,c){var d=this;google.maps.event.addListener(c,"drag",function(e){var f,g;if(c.getPosition)f=c.getPosition();else{if(!c.getCenter)return;f=c.getCenter()}if(d.circles[a]&&d.circles[a].setCenter(f),d.Polyline?g="Polyline":d.Polygon&&(g="Polygon"),g){for(var h=d[g].getPath(),i=h.getArray(),j=[],k=0;k<i.length;++k)j[k]=a===k?new google.maps.LatLng(f.lat(),f.lng()):new google.maps.LatLng(i[k].lat(),i[k].lng());d[g].setPath(new google.maps.MVCArray(j)),d.add_polyEv(g)}d.o.drag.call(d,a,b,c)}),google.maps.event.addListener(c,"dragend",function(){d.o.dragEnd.call(d,a,b,c)}),google.maps.event.addListener(c,"dragstart",function(){d.o.dragStart.call(d,a,b,c)}),google.maps.event.addListener(c,"center_changed",function(){d.markers[a]&&c.getCenter&&d.markers[a].setPosition(c.getCenter()),d.o.drag.call(d,a,b,c)})},b.prototype.add_polyEv=function(a){var b=this;google.maps.event.addListener(this[a].getPath(),"set_at",function(c,d){b.trigger_polyEv(a,c,d)}),google.maps.event.addListener(this[a].getPath(),"insert_at",function(c,d){b.trigger_polyEv(a,c,d)})},b.prototype.trigger_polyEv=function(a,b,c){var d=this[a].getPath().getAt(b),e=new google.maps.LatLng(d.lat(),d.lng());this.markers[b]&&this.markers[b].setPosition(e),this.circles[b]&&this.circles[b].setCenter(e),this.o["on"+a+"Changed"](b,c,this[a].getPath().getArray())},b.prototype.create={marker:function(a,b,c){if("circle"===b.type&&!c){var d=this.create_objCircle(b);b.visible||(d.draggable=b.draggable),c=new google.maps.Circle(d),this.add_circleEv(a,d,c),this.circles[a]=c}return b.type="marker",c=new google.maps.Marker(b),this.add_markerEv(a,b,c),this.oBounds.extend(b.position),this.markers[a]=c,this.o.afterCreateMarker.call(this,a,b,c),c},circle:function(){var a,b,c,d;for(a=0;a<this.ln;a++)b=this.create_objPoint(a),"circle"===b.type&&(c=this.create_objCircle(b),b.visible||(c.draggable=b.draggable),d=new google.maps.Circle(c),this.add_circleEv(a,c,d),this.circles[a]=d),b.type="marker",this.create.marker.call(this,a,b,d)},polyline:function(){var b,c,d=a.extend({},this.o.stroke_options);for(d.path=[],d.draggable=this.o.draggable,d.editable=this.o.editable,d.map=this.oMap,d.zIndex=this.o.maxZIndex+100,b=0;b<this.ln;b++)c=this.create_objPoint(b),this.create.marker.call(this,b,c),d.path.push(c.position);this.Polyline?this.Polyline.setOptions(d):this.Polyline=new google.maps.Polyline(d),this.add_polyEv("Polyline")},polygon:function(){var b,c,d=this,e=a.extend({},this.o.stroke_options);for(e.path=[],e.draggable=this.o.draggable,e.editable=this.o.editable,e.map=this.oMap,e.zIndex=this.o.maxZIndex+100,b=0;b<this.ln;b++)c=this.create_objPoint(b),this.create.marker.call(this,b,c),e.path.push(c.position);this.Polygon?this.Polygon.setOptions(e):this.Polygon=new google.maps.Polygon(e),google.maps.event.addListener(this.Polygon,"click",function(a){d.o.onPolygonClick.call(d,a)}),this.add_polyEv("Polygon")},fusion:function(){this.o.fusion_options.styles=[this.o.stroke_options],this.o.fusion_options.map=this.oMap,this.Fusion?this.Fusion.setOptions(this.o.fusion_options):this.Fusion=new google.maps.FusionTablesLayer(this.o.fusion_options)},directions:function(){var b,c,d,e,f,g=this,h=[],i=0;for(b=0;b<this.ln;b++)c=this.create_objPoint(b),0===b?e=c.position:b===this.ln-1?f=c.position:(d=this.o.locations[b].stopover===!0,h.push({location:c.position,stopover:d})),this.create.marker.call(this,b,c);this.o.directions_options.origin=e,this.o.directions_options.destination=f,this.o.directions_options.waypoints=h,this.directionsService||(this.directionsService=new google.maps.DirectionsService),this.directionsDisplay?this.directionsDisplay.setOptions({draggable:this.o.draggable}):this.directionsDisplay=new google.maps.DirectionsRenderer({draggable:this.o.draggable}),this.directionsDisplay.setMap(this.oMap),this.o.directions_panel&&(this.o.directions_panel=a(this.o.directions_panel),this.directionsDisplay.setPanel(this.o.directions_panel.get(0))),this.o.draggable&&google.maps.event.addListener(this.directionsDisplay,"directions_changed",function(){var a=g.directionsDisplay.getDirections();i=g.compute_distance(g.directionsDisplay.directions),g.o.afterRoute.call(g,i,a.status,a)}),this.directionsService.route(this.o.directions_options,function(a,b){b===google.maps.DirectionsStatus.OK&&(i=g.compute_distance(a),g.directionsDisplay.setDirections(a)),g.o.afterRoute.call(g,i,b,a)})}},b.prototype.compute_distance=function(a){var b,c=0,d=a.routes[0],e=d.legs.length;for(b=0;b<e;b++)c+=d.legs[b].distance.value;return c},b.prototype.type_to_open={bubble:function(a){var b=this,c={content:a.html||""};a.infoWindowMaxWidth&&(c.maxWidth=a.infoWindowMaxWidth),this.infowindow=new google.maps.InfoWindow(c),google.maps.event.addListener(this.infowindow,"closeclick",function(){b.CloseInfoWindow()})}},b.prototype.open_infowindow=function(a,b,c){var d=this.o.locations[a],e=this.o.infowindow_type;d.html&&this.type_to_open[e]&&(this.o.beforeOpenInfowindow.call(this,a,d,b),this.type_to_open[e].call(this,d),this.infowindow.open(this.oMap,b),this.o.afterOpenInfowindow.call(this,a,d,b))},b.prototype.get_html_controls=function(){return this.controls[this.o.controls_type]&&this.controls[this.o.controls_type].getHtml?(this.current_control=this.controls[this.o.controls_type],this.current_control.getHtml.apply(this)):""},b.prototype.generate_controls=function(){if(!this.o.controls_on_map)return this.controls_wrapper.empty(),void this.controls_wrapper.append(this.get_html_controls());var b=a('<div class="on_gmap '+this.o.controls_type+' gmap_controls"></div>').css(this.o.controls_applycss?{margin:"5px"}:{}),c=a(this.get_html_controls()).css(this.o.controls_applycss?{background:"#fff",padding:"5px",border:"1px solid #eee",boxShadow:"rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px",maxHeight:this.map_div.find(".canvas_map").outerHeight()-80,minWidth:100,overflowY:"auto",overflowX:"hidden"}:{});b.append(c),this.oMap.controls[this.o.controls_position].clear(),this.oMap.controls[this.o.controls_position].push(b.get(0))},b.prototype.init_map=function(){var a=this;this.Polyline&&this.Polyline.setMap(null),this.Polygon&&this.Polygon.setMap(null),this.Fusion&&this.Fusion.setMap(null),this.directionsDisplay&&this.directionsDisplay.setMap(null);for(var b=this.markers.length-1;b>=0;b-=1)try{this.markers[b]&&this.markers[b].setMap(null)}catch(c){a.debug("init_map::markers::setMap",c.stack)}this.markers.length=0,this.markers=[];for(var d=this.circles.length-1;d>=0;d-=1)try{this.circles[d]&&this.circles[d].setMap(null)}catch(c){a.debug("init_map::circles::setMap",c.stack)}this.circles.length=0,this.circles=[],this.o.controls_on_map&&this.oMap.controls&&this.oMap.controls[this.o.controls_position].forEach(function(b,c){try{a.oMap.controls[this.o.controls_position].removeAt(c)}catch(d){a.debug("init_map::removeAt",d.stack)}}),this.oBounds=new google.maps.LatLngBounds},b.prototype.perform_load=function(){this.CloseInfoWindow(),1===this.ln?(this.o.map_options.set_center?this.oMap.setCenter(new google.maps.LatLng(this.o.map_options.set_center[0],this.o.map_options.set_center[1])):(this.oMap.fitBounds(this.oBounds),this.ViewOnMap(1)),this.o.map_options.zoom&&this.oMap.setZoom(this.o.map_options.zoom)):0===this.ln?(this.o.map_options.set_center?this.oMap.setCenter(new google.maps.LatLng(this.o.map_options.set_center[0],this.o.map_options.set_center[1])):this.oMap.fitBounds(this.oBounds),this.oMap.setZoom(this.o.map_options.zoom||1)):(this.oMap.fitBounds(this.oBounds),"number"==typeof(this.o.start-0)&&this.o.start>0&&this.o.start<=this.ln?this.ViewOnMap(this.o.start):this.o.map_options.set_center?this.oMap.setCenter(new google.maps.LatLng(this.o.map_options.set_center[0],this.o.map_options.set_center[1])):this.ViewOnMap(this.view_all_key),this.o.map_options.zoom&&this.oMap.setZoom(this.o.map_options.zoom))},b.prototype.debug=function(a,b){return this.o.debug&&console.log(a,b),this},b.prototype.AddControl=function(a,b){return a&&b?(this.controls[a]=b,this):(self.debug("AddControl",'Missing "name" and "func" callback.'),!1)},b.prototype.CloseInfoWindow=function(){return this.infowindow&&(this.current_index||0===this.current_index)&&(this.o.beforeCloseInfowindow.call(this,this.current_index,this.o.locations[this.current_index]),this.infowindow.close(),this.infowindow=null,this.o.afterCloseInfowindow.call(this,this.current_index,this.o.locations[this.current_index])),this},b.prototype.ShowOnMenu=function(a){if(a===this.view_all_key&&this.o.view_all&&this.ln>1)return!0;if(a=parseInt(a,10),"number"==typeof(a-0)&&a>=0&&a<this.ln){var b=this.o.locations[a].on_menu!==!1;if(b)return!0}return!1},b.prototype.ViewOnMap=function(a){if(a===this.view_all_key)this.o.beforeViewAll.call(this),this.current_index=a,this.o.locations.length>0&&this.o.generate_controls&&this.current_control&&this.current_control.activateCurrent&&this.current_control.activateCurrent.apply(this,[a]),this.oMap.fitBounds(this.oBounds),this.o.afterViewAll.call(this);else if(a=parseInt(a,10),"number"==typeof(a-0)&&a>0&&a<=this.ln)try{google.maps.event.trigger(this.markers[a-1],"click")}catch(b){this.debug("ViewOnMap::trigger",b.stack)}return this},b.prototype.SetLocations=function(a,b){return this.o.locations=a,b&&this.Load(),this},b.prototype.AddLocations=function(b,c){var d=this;return a.isArray(b)&&a.each(b,function(a,b){d.o.locations.push(b)}),a.isPlainObject(b)&&this.o.locations.push(b),c&&this.Load(),this},b.prototype.AddLocation=function(b,c,d){return a.isPlainObject(b)&&this.o.locations.splice(c,0,b),d&&this.Load(),this},b.prototype.RemoveLocations=function(b,c){var d=this,e=0;return a.isArray(b)?a.each(b,function(a,b){b-e<d.ln&&d.o.locations.splice(b-e,1),e++}):b<this.ln&&this.o.locations.splice(b,1),c&&this.Load(),this},b.prototype.Loaded=function(){return this.loaded},b.prototype._init=function(){this.ln=this.o.locations.length;for(var b=0;b<this.ln;b++){var c=a.extend({},this.o.shared);this.o.locations[b]=a.extend(c,this.o.locations[b]),this.o.locations[b].html&&(this.o.locations[b].html=this.o.locations[b].html.replace("%index",b+1),this.o.locations[b].html=this.o.locations[b].html.replace("%title",this.o.locations[b].title||""))}return this.map_div=a(this.o.map_div),this.controls_wrapper=a(this.o.controls_div),this},b.prototype.Load=function(b){a.extend(!0,this.o,b),b&&b.locations&&(this.o.locations=b.locations),this._init(),this.o.visualRefresh===!1?google.maps.visualRefresh=!1:google.maps.visualRefresh=!0,this.init_map(),this.create_objMap(),this.add_markers_to_objMap(),this.ln>1&&this.o.generate_controls||this.o.force_generate_controls?(this.o.generate_controls=!0,this.generate_controls()):this.o.generate_controls=!1;var c=this;if(this.loaded)this.perform_load();else{google.maps.event.addListenerOnce(this.oMap,"idle",function(){c.perform_load()});for(var d in this.o.listeners)this.o.listeners.hasOwnProperty(d)&&google.maps.event.addListener(this.oMap,d,this.o.listeners[d])}return this.loaded=!0,this},b});