(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{172:function(e,t,a){e.exports=a(395)},177:function(e,t,a){},394:function(e,t,a){},395:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(70),r=a.n(o),i=a(3),s=a(4),c=a(6),m=a(5),u=a(7),p=(a(177),a(16)),d=a.n(p),g=a(33),h=a(27),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).genericSync=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(h.a)({},n,l))},a.handleSubmit=function(e){e.preventDefault(),d.a.post("".concat("https://u-xer.herokuapp.com/api","/signup"),a.state,{withCredentials:!0}).then((function(e){var t=e.data.userDoc;a.props.onUserChange(t)})).catch((function(e){console.log("Error in signup: ",e)}))},a.state={fullName:"",email:"",password:"",message:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.fullName,a=e.email,n=e.password;return console.log("is user in signup: ",this.props.currentUser),this.props.currentUser?l.a.createElement(g.a,{to:"/"}):l.a.createElement("section",{className:"signup-page"},l.a.createElement("h2",null,"Sign up"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Full name:"),l.a.createElement("input",{type:"text",value:t,onChange:this.genericSync,name:"fullName",palceholder:"Anabel"}),l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"email",value:a,onChange:this.genericSync,name:"email",placeholder:"user@uxer.com"}),l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",value:n,onChange:this.genericSync,name:"password",placeholder:"*************"}),l.a.createElement("button",null,"Sign up")),this.state.message&&l.a.createElement("div",null,this.state.message))}}]),t}(l.a.Component),E=a(170),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"add-location-form"},l.a.createElement("form",{onSubmit:function(t){return e.props.addFormHandler(t)}},l.a.createElement("div",null,l.a.createElement("p",null,"Title"),l.a.createElement("input",{className:"input-element",onChange:this.props.inputHandler,type:"text",name:"title",value:this.props.title})),l.a.createElement("div",null,l.a.createElement("p",null,"Description"),l.a.createElement("textarea",{className:"textarea-element",onChange:this.props.inputHandler,type:"text",name:"description",value:this.props.description})),l.a.createElement("div",null,l.a.createElement("p",null,"Latitude"),l.a.createElement("input",{className:"input-element",onChange:this.props.inputHandler,type:"number",name:"lat",value:this.props.lat})),l.a.createElement("div",null,l.a.createElement("p",null,"Longitude"),l.a.createElement("input",{className:"input-element",onChange:this.props.inputHandler,type:"number",name:"lng",value:this.props.lng})),l.a.createElement("div",null,l.a.createElement("div",{className:"image-input-box"},l.a.createElement("input",{name:"image",className:"image-input",type:"file",onChange:this.props.fileUploadHandler,multiple:!0}),l.a.createElement("button",{className:"image-input-btn"},l.a.createElement("i",{class:"far fa-image"})))),l.a.createElement("button",{className:"btn"},"Save"),l.a.createElement("button",{className:"btn",onClick:this.props.addLocationToggle},"Cancel")))}}]),t}(l.a.Component),y=a(171),v=a(22),T=a(45),N=[{featureType:"all",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:"0"},{color:"#848c92"},{lightness:"0"}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#313539"},{lightness:"0"}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#313539"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#313539"},{lightness:17},{weight:1.2}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#cfa565"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#ffffff"},{lightness:"0"},{gamma:"1"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{color:"#cfa565"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#313539"},{lightness:"0"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#313539"},{lightness:"8"},{visibility:"on"}]},{featureType:"poi.business",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#cfa565"},{lightness:"0"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#848c92"},{lightness:"25"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#313539"},{lightness:"0"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#313539"},{lightness:"5"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#313539"},{lightness:"15"},{gamma:"1"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#848c92"},{lightness:"25"},{gamma:"1"}]},{featureType:"road.arterial",elementType:"labels.text.stroke",stylers:[{color:"#313539"},{lightness:"0"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#313539"},{lightness:"10"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#848c92"},{lightness:"0"},{gamma:"1"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#313539"},{lightness:"5"},{gamma:"1"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#313539"},{lightness:"-10"},{gamma:"1"}]}];var C=Object(T.withScriptjs)(Object(T.withGoogleMap)((function(e){var t=Object(n.useState)(null),a=Object(y.a)(t,2),o=a[0],r=a[1];return l.a.createElement(T.GoogleMap,{defaultZoom:5,defaultCenter:{lat:e.latitude,lng:e.longitude},defaultOptions:{styles:N,disableDoubleClickZoom:!0,mapTypeControl:!1,streetViewControl:!1,fullscreenControl:!1},onDblClick:function(t){e.addLocationToggle(),e.inputCoordinatesHandle(t)}},e.visibleLocations.map((function(e){return l.a.createElement(T.Marker,{key:e._id,position:{lat:e.lat,lng:e.lng},onClick:function(){r(e)},icon:{url:"/marker.png",scaledSize:new window.google.maps.Size(40,40)}})})),o&&l.a.createElement(T.InfoWindow,{position:{lat:o.lat,lng:o.lng},onCloseClick:function(){r(null)}},l.a.createElement("div",{className:"info-window"},l.a.createElement("h6",null,o.title),l.a.createElement(v.b,{to:{pathname:"/details",state:{location:o}}},l.a.createElement("img",{className:"info-window-img",src:o.imageUrl[0],alt:""})))))}))),L=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"sidebar-container"},l.a.createElement(v.c,{className:"brand-sidebar",to:"/home"},"U-XER"),l.a.createElement("div",{className:"user-info-container"},l.a.createElement("div",{className:"profile-image-container"}),this.props.currentUser&&l.a.createElement("p",{className:"user-name"},"Welcome back ",this.props.currentUser.fullName,"!")),l.a.createElement("div",{className:"sidebar-element"},l.a.createElement("button",{className:"icon-btn",onClick:this.props.addLocationToggle},l.a.createElement("i",{className:"fas fa-map-marker-alt"})),l.a.createElement("p",null,"Marker")),l.a.createElement("div",{className:"sidebar-element"},l.a.createElement("button",{className:"icon-btn"},l.a.createElement("i",{className:"fas fa-heart"})),l.a.createElement("p",null,"Favorites")),l.a.createElement("div",{className:"sidebar-element"},l.a.createElement("button",{className:"icon-btn"},l.a.createElement("i",{className:"fas fa-search"})),l.a.createElement("p",null,"Search")),l.a.createElement("div",{className:"sidebar-element"},l.a.createElement("button",{className:"icon-btn"},l.a.createElement("i",{className:"fas fa-globe-americas"})),l.a.createElement("p",null,"All")),l.a.createElement("div",{className:"sidebar-element"},l.a.createElement("button",{className:"icon-btn",onClick:this.props.logout},l.a.createElement("i",{className:"fas fa-sign-out-alt"})),l.a.createElement("p",null,"Logout ")))}}]),t}(l.a.Component),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).addLocationToggle=function(){a.setState({addLocation:!a.state.addLocation,title:"",description:"",lat:"",lng:"",imageUrl:[]})},a.editLocationToggle=function(){a.setState({editLocation:!a.state.editLocation})},a.currentLocationDetails=function(e){a.setState({currentLocation:e})},a.addLocationRender=function(){if(a.state.addLocation)return l.a.createElement("div",null,l.a.createElement(b,{inputHandler:a.inputHandler,fileUploadHandler:a.fileUploadHandler,addFormHandler:a.addFormHandler,title:a.state.title,description:a.state.description,lat:a.state.lat,lng:a.state.lng,addLocationToggle:a.addLocationToggle}))},a.inputHandler=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(h.a)({},t,n))},a.fileUploadHandler=function(e){a.setState({imageUrl:Object(E.a)(e.target.files)})},a.inputCoordinatesHandle=function(e){a.setState({lat:e.latLng.lat(),lng:e.latLng.lng()})},a.addFormHandler=function(e){e.preventDefault();var t=new FormData;t.append("title",a.state.title),t.append("description",a.state.description),t.append("lat",a.state.lat),t.append("lng",a.state.lng),a.state.imageUrl.forEach((function(e,n){t.append("imageUrl",a.state.imageUrl[n])})),d.a.post("".concat("https://u-xer.herokuapp.com/api","/locations"),t).then((function(e){a.props.getAllLocations(),a.setState({title:"",description:"",lat:"",lng:"",imageUrl:""}),a.addLocationToggle()})).catch((function(e){console.log(e)}))},a.state={title:"",description:"",lat:"",lng:"",imageUrl:[],currentLocation:"",addLocation:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,this.props.locationsReady&&l.a.createElement("div",{className:"newMap"},l.a.createElement(C,{detailsToggle:this.detailsToggle,inputCoordinatesHandle:this.inputCoordinatesHandle,addLocationToggle:this.addLocationToggle,visibleLocations:this.props.visibleLocations,latitude:this.props.latitude,longitude:this.props.longitude,googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=".concat("AIzaSyCUhYwwUWxIHm23Xi6x5XcsX0m1_fPFBpE"),loadingElement:l.a.createElement("div",{style:{height:"100%"}}),containerElement:l.a.createElement("div",{style:{height:"100%"}}),mapElement:l.a.createElement("div",{style:{height:"100%"}})})),this.addLocationRender(),l.a.createElement(L,{logout:this.props.logout,currentUser:this.props.currentUser}))}}]),t}(l.a.Component),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).genericSync=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(h.a)({},n,l))},a.handleSubmit=function(e){e.preventDefault(),d.a.post("".concat("https://u-xer.herokuapp.com/api","/login"),a.state,{withCredentials:!0}).then((function(e){var t=e.data.userDoc;console.log("user login: ",t),a.props.onUserChange(t),a.props.history.push("/home")})).catch((function(e){console.log(e)}))},a.state={email:"",password:"",message:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=(e.fullName,e.email),a=e.password;return this.props.currentUser?l.a.createElement(g.a,{to:"/"}):l.a.createElement("section",{className:"login-page"},l.a.createElement("h2",null,"Log in"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"email",value:t,onChange:this.genericSync,name:"email",placeholder:"user@uxer.com"}),l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",value:a,onChange:this.genericSync,name:"password",placeholder:"**************"}),l.a.createElement("button",null,"Login")))}}]),t}(l.a.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"login-navbar"},l.a.createElement(v.c,{className:"signup-btn",to:"/signup-page"}," Signup "),l.a.createElement("span",{class:"brand-text"},"U-XER"),l.a.createElement(v.c,{className:"login-btn",to:"/login"}," Login ")),l.a.createElement("div",{className:"pimg1"},l.a.createElement("div",{class:"ptext"})),l.a.createElement("section",{className:"section section-light"},l.a.createElement("div",{className:"section-box"},l.a.createElement("div",{className:"icon"},l.a.createElement("i",{className:"fas fa-map-marked-alt"})),l.a.createElement("h3",null,"Find"),l.a.createElement("p",null,"U-XER is a collection of abandoned locations uploaded by a growing community of urban explorers and photographers around the world.")),l.a.createElement("div",{className:"section-box"},l.a.createElement("div",{className:"icon"},l.a.createElement("i",{className:"fas fa-camera"})),l.a.createElement("h3",null,"Mark"),l.a.createElement("p",null,"Share your locations so that anyone can see GPS coords and upload images of places so that everyone knows what to expect.")),l.a.createElement("div",{className:"section-box"},l.a.createElement("div",{className:"icon"},l.a.createElement("i",{className:"fas fa-lock"})),l.a.createElement("h3",null,"Protect"),l.a.createElement("p",null,"U-XER is a community for explorers and photographers that respect the sites. We protect locations, by taking only photos and leaving nothing but footprints."))),l.a.createElement("div",{className:"pimg2"},l.a.createElement("div",{className:"ptext"},l.a.createElement("span",{className:"border"},"Image 2 Text"))),l.a.createElement("section",{className:"section section-dark"}))}}]),t}(n.Component),U=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"edit-location-form"},l.a.createElement("h1",null,"Edit Location"),l.a.createElement("form",{onSubmit:function(t){e.props.editFormHandler(t),e.props.editLocationToggle()}},l.a.createElement("div",null,l.a.createElement("p",null,"Title"),l.a.createElement("input",{className:"input-element",onChange:this.props.inputHandler,type:"text",name:"title",value:this.props.title})),l.a.createElement("div",null,l.a.createElement("p",null,"Description"),l.a.createElement("textarea",{className:"textarea-element",onChange:this.props.inputHandler,type:"text",name:"description",value:this.props.description})),l.a.createElement("div",null,l.a.createElement("p",null,"Latitude"),l.a.createElement("input",{className:"input-element",onChange:this.props.inputHandler,type:"number",name:"lat",value:this.props.lat})),l.a.createElement("div",null,l.a.createElement("p",null,"Longitude"),l.a.createElement("input",{className:"input-element",onChange:this.props.inputHandler,type:"number",name:"lng",value:this.props.lng})),l.a.createElement("div",null),l.a.createElement("button",{className:"btn"},"Save"),l.a.createElement("button",{className:"btn",onClick:this.props.editLocationToggle},"Cancel")))}}]),t}(l.a.Component),x=a(100),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).inputHandler=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(h.a)({},t,n))},a.commentFormHandler=function(e){e.preventDefault();var t={author:a.props.currentUser._id,content:a.state.content,location:a.props.locationId};d.a.post("".concat("https://u-xer.herokuapp.com/api","/comments"),t).then((function(e){console.log("this is the toggle for the comment that is not working"),a.props.getComments(),a.props.addCommentToggle()})).catch((function(e){console.log(e)}))},a.state={content:"",locationId:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.commentFormHandler},l.a.createElement("input",{type:"text",className:"comment-input",onChange:this.inputHandler,name:"content",value:this.state.content}),l.a.createElement("button",{style:{display:"none"}},"submit")))}}]),t}(l.a.Component),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).getLocation=function(){var e=a.props.location.state.location;a.setState({locationId:e._id,title:e.title,description:e.description,lat:e.lat,lng:e.lng,id:e._id,imageUrl:e.imageUrl,locationReady:!0},(function(){a.getComments()}))},a.getComments=function(){d.a.get("".concat("https://u-xer.herokuapp.com/api","/comments/").concat(a.state.id)).then((function(e){console.log("this is the response",e.data),a.setState({comments:e.data})})).catch((function(e){console.log(e)}))},a.editLocationToggle=function(){a.setState({editLocation:!a.state.editLocation})},a.addCommentToggle=function(){a.setState({addComment:!a.state.addComment})},a.inputHandler=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(h.a)({},t,n))},a.editFormHandler=function(e){e.preventDefault();var t={title:a.state.title,description:a.state.description,lat:a.state.lat,lng:a.state.lng};d.a.post("".concat("https://u-xer.herokuapp.com/api","/locations/").concat(a.state.id),t).then((function(e){a.props.getAllLocations(),a.addLocationToggle()})).catch((function(e){console.log(e)}))},a.editLocationRender=function(){if(a.state.editLocation)return l.a.createElement("div",null,l.a.createElement(U,{inputHandler:a.inputHandler,editFormHandler:a.editFormHandler,title:a.state.title,description:a.state.description,lat:a.state.lat,lng:a.state.lng,editLocationToggle:a.editLocationToggle}))},a.renderDetails=function(){if(a.state.locationReady)return l.a.createElement("div",{className:"location-wrapper"},l.a.createElement("div",{className:"location-details-container"},l.a.createElement("div",{className:"details-box"},l.a.createElement(x.a,null,a.state.imageUrl.map((function(e,t){return l.a.createElement(x.a.Item,{key:t},l.a.createElement("img",{className:"carousel-image",src:e,alt:"First slide"}))}))),l.a.createElement("h1",null,a.state.title),l.a.createElement("p",null,a.state.description),l.a.createElement("button",{className:"btn",onClick:function(){return a.props.history.push("/home")}},"Close"),l.a.createElement("button",{onClick:a.editLocationToggle,className:"btn"},"Edit")),l.a.createElement("div",{className:"comments-box"},l.a.createElement("button",{onClick:a.addCommentToggle,className:"icon-btn"},l.a.createElement("i",{className:"far fa-comments"})),a.state.addComment&&l.a.createElement(S,{addCommentToggle:a.addCommentToggle,getComments:a.getComments,locationId:a.state.locationId,currentUser:a.props.currentUser}),a.state.comments.reverse().map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("p",null,e.author.fullName),l.a.createElement("div",{className:"comment-bubble"},e.content))}))),a.editLocationRender()),l.a.createElement(L,{logout:a.props.logout,currentUser:a.props.currentUser}))},a.state={title:"",description:"",lat:"",lng:"",imageUrl:[],comments:[],editLocation:!1,locationReady:!1,addComment:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getLocation()}},{key:"render",value:function(){return l.a.createElement("div",null,this.renderDetails())}}]),t}(l.a.Component),H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).getAllLocations=function(){d.a.get("".concat("https://u-xer.herokuapp.com/api","/locations")).then((function(e){a.setState({allLocations:e.data,visibleLocations:e.data,locationsReady:!0})})).catch((function(e){console.log(e)}))},a.logout=function(){d.a.post("".concat("https://u-xer.herokuapp.com/api","/logout"),{},{withCredentials:!0}).then((function(e){a.setState({currentUser:e.userDoc}),a.props.history.push("/login")})).catch((function(e){console.log(e)}))},a.editLocationToggle=function(){a.setState({editLocation:!a.state.editLocation})},a.state={currentUser:null,allLocations:[],visibleLocations:[],latitude:35.7617,longitude:-90.1918,locationsReady:!1,coordinatesReady:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getAllLocations(),this.requestUserToDB()}},{key:"requestUserToDB",value:function(){var e=this;d.a.get("".concat("https://u-xer.herokuapp.com/api","/checkuser"),{withCredentials:!0}).then((function(t){console.log("Im getting user");var a=t.data.userDoc;e.syncCurrentUSer(a),console.log("Check user in app: ",a)})).catch((function(e){console.log("Err while getting the user from the checkuser route: ",e)}))}},{key:"syncCurrentUSer",value:function(e){this.setState({currentUser:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(g.d,null,l.a.createElement(g.b,{exact:!0,path:"/",render:function(){return l.a.createElement(k,null)}}),l.a.createElement(g.b,{exact:!0,path:"/home",render:function(){return l.a.createElement(j,{logout:e.logout,currentUser:e.state.currentUser,coordinatesReady:e.state.coordinatesReady,visibleLocations:e.state.visibleLocations,locationsReady:e.state.locationsReady,getAllLocations:e.getAllLocations,latitude:e.state.latitude,longitude:e.state.longitude})}}),l.a.createElement(g.b,{exact:!0,path:"/signup-page",render:function(){return l.a.createElement(f,{currentUser:e.state.currentUser,onUserChange:function(t){return e.syncCurrentUSer(t)}})}}),l.a.createElement(g.b,{exact:!0,path:"/login",render:function(t){return l.a.createElement(O,Object.assign({},t,{currentUser:e.state.currentUser,onUserChange:function(t){return e.syncCurrentUSer(t)}}))}}),l.a.createElement(g.b,{exact:!0,path:"/details",render:function(t){return l.a.createElement(w,Object.assign({},t,{getAllLocations:e.getAllLocations,editLocationToggle:e.editLocationToggle,currentUser:e.state.currentUser,logout:e.logout}))}})))}}]),t}(l.a.Component),D=Object(g.g)(H);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(394);r.a.render(l.a.createElement(v.a,null,l.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[172,1,2]]]);
//# sourceMappingURL=main.c5a1938c.chunk.js.map