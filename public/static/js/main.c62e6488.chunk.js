(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{172:function(e,t,a){e.exports=a(395)},177:function(e,t,a){},394:function(e,t,a){},395:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(70),o=a.n(i),r=a(3),s=a(4),c=a(6),u=a(5),m=a(7),p=(a(177),a(16)),d=a.n(p),g=a(33),h=a(27),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).genericSync=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(h.a)({},n,l))},a.handleSubmit=function(e){e.preventDefault(),d.a.post("".concat("https://u-xer.herokuapp.com/api","/signup"),a.state,{withCredentials:!0}).then((function(e){var t=e.data.userDoc;a.props.onUserChange(t)})).catch((function(e){console.log("Error in signup: ",e)}))},a.state={fullName:"",email:"",password:"",message:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.fullName,a=e.email,n=e.password;return console.log("is user in signup: ",this.props.currentUser),this.props.currentUser?l.a.createElement(g.a,{to:"/"}):l.a.createElement("section",{className:"signup-page"},l.a.createElement("h2",null,"Sign up"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Full name:"),l.a.createElement("input",{type:"text",value:t,onChange:this.genericSync,name:"fullName",palceholder:"Anabel"}),l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"email",value:a,onChange:this.genericSync,name:"email",placeholder:"user@uxer.com"}),l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",value:n,onChange:this.genericSync,name:"password",placeholder:"*************"}),l.a.createElement("button",null,"Sign up")),this.state.message&&l.a.createElement("div",null,this.state.message))}}]),t}(l.a.Component),E=a(170),f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"add-location-form"},l.a.createElement("form",{onSubmit:function(t){return e.props.addFormHandler(t)}},l.a.createElement("div",null,l.a.createElement("p",null,"Title"),l.a.createElement("input",{className:"input-element",onChange:this.props.inputHandler,type:"text",name:"title",value:this.props.title})),l.a.createElement("div",null,l.a.createElement("p",null,"Description"),l.a.createElement("textarea",{className:"textarea-element",onChange:this.props.inputHandler,type:"text",name:"description",value:this.props.description})),l.a.createElement("div",null,l.a.createElement("p",null,"Latitude"),l.a.createElement("input",{className:"input-element",onChange:this.props.inputHandler,type:"number",name:"lat",value:this.props.lat})),l.a.createElement("div",null,l.a.createElement("p",null,"Longitude"),l.a.createElement("input",{className:"input-element",onChange:this.props.inputHandler,type:"number",name:"lng",value:this.props.lng})),l.a.createElement("div",null,l.a.createElement("div",{className:"images-container"},l.a.createElement("div",{className:"image-box"},l.a.createElement("button",{className:"image-button"},"Image 1"),l.a.createElement("img",{src:"",alt:""}),l.a.createElement("input",{name:"image1",className:"image-input",type:"file",onChange:this.props.fileUploadHandler})),l.a.createElement("div",{className:"image-box"},l.a.createElement("button",{className:"image-button"},"Image 2"),l.a.createElement("img",{src:"",alt:""}),l.a.createElement("input",{name:"image2",className:"image-input",type:"file",onChange:this.props.fileUploadHandler})),l.a.createElement("div",{className:"image-box"},l.a.createElement("button",{className:"image-button"},"Image 3"),l.a.createElement("img",{src:"",alt:""}),l.a.createElement("input",{name:"image3",className:"image-input",type:"file",onChange:this.props.fileUploadHandler})),l.a.createElement("div",{className:"image-box"},l.a.createElement("button",{className:"image-button"},"Image 4"),l.a.createElement("img",{src:"",alt:""}),l.a.createElement("input",{name:"image4",className:"image-input",type:"file",onChange:this.props.fileUploadHandler})),l.a.createElement("div",{className:"image-box"},l.a.createElement("button",{className:"image-button"},"Image 5"),l.a.createElement("img",{src:"",alt:""}),l.a.createElement("input",{name:"image5",className:"image-input",type:"file",onChange:this.props.fileUploadHandler})),l.a.createElement("div",{className:"image-box"},l.a.createElement("button",{className:"image-button"},"Image 6"),l.a.createElement("img",{src:"",alt:""}),l.a.createElement("input",{name:"image6",className:"image-input",type:"file",onChange:this.props.fileUploadHandler})))),l.a.createElement("button",{className:"btn"},"Save"),l.a.createElement("button",{className:"btn",onClick:this.props.addLocationToggle},"Cancel")))}}]),t}(l.a.Component),v=a(171),y=a(25),C=a(45),L=[{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#b39964"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#f19a9e"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#181818"},{lightness:16}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{lightness:17},{color:"#525252"}]}];var N=Object(C.withScriptjs)(Object(C.withGoogleMap)((function(e){var t=Object(n.useState)(null),a=Object(v.a)(t,2),i=a[0],o=a[1];return l.a.createElement(C.GoogleMap,{defaultZoom:10,defaultCenter:{lat:e.latitude,lng:e.longitude},defaultOptions:{styles:L,disableDoubleClickZoom:!0},onDblClick:function(t){e.addLocationToggle(),e.inputCoordinatesHandle(t)}},e.visibleLocations.map((function(e){return l.a.createElement(C.Marker,{key:e._id,position:{lat:e.lat,lng:e.lng},onClick:function(){o(e)}})})),i&&l.a.createElement(C.InfoWindow,{position:{lat:i.lat,lng:i.lng},onCloseClick:function(){o(null)}},l.a.createElement("div",null,l.a.createElement("h1",null,i.title),l.a.createElement(y.b,{to:{pathname:"/details",state:{location:i}}}," ",l.a.createElement("button",null,"  Details")))))}))),j=function(e){function t(e){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"edit-location-form"},l.a.createElement("h1",null,"Edit Location"),l.a.createElement("form",{onSubmit:function(t){e.props.editFormHandler(t),e.props.editLocationToggle()}},l.a.createElement("div",null,l.a.createElement("p",null,"Title"),l.a.createElement("input",{className:"input-element",onChange:this.props.inputHandler,type:"text",name:"title",value:this.props.title})),l.a.createElement("div",null,l.a.createElement("p",null,"Description"),l.a.createElement("textarea",{className:"textarea-element",onChange:this.props.inputHandler,type:"text",name:"description",value:this.props.description})),l.a.createElement("div",null,l.a.createElement("p",null,"Latitude"),l.a.createElement("input",{className:"input-element",onChange:this.props.inputHandler,type:"number",name:"lat",value:this.props.lat})),l.a.createElement("div",null,l.a.createElement("p",null,"Longitude"),l.a.createElement("input",{className:"input-element",onChange:this.props.inputHandler,type:"number",name:"lng",value:this.props.lng})),l.a.createElement("div",null),l.a.createElement("button",{className:"btn"},"Save"),l.a.createElement("button",{className:"btn",onClick:this.props.editLocationToggle},"Cancel")))}}]),t}(l.a.Component),O=a(100),T=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).inputHandler=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(h.a)({},t,n))},a.commentFormHandler=function(e){e.preventDefault();var t={author:a.props.currentUser._id,content:a.state.content,locationId:a.props.locationId};d.a.post("".concat("https://u-xer.herokuapp.com/api","/comments"),t).then((function(e){console.log("this is the toggle for the comment that is not working"),a.props.addCommentToggle()})).catch((function(e){console.log(e)}))},a.state={content:"",locationId:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.commentFormHandler},l.a.createElement("input",{type:"text",onChange:this.inputHandler,name:"content",value:this.state.content}),l.a.createElement("button",null,"submit")))}}]),t}(l.a.Component),x=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getLocation=function(){var e=a.props.location.state.location;a.setState({locationId:e._id,title:e.title,description:e.description,lat:e.lat,lng:e.lng,id:e._id,imageUrl:e.imageUrl,comments:e.comments,locationReady:!0})},a.editLocationToggle=function(){a.setState({editLocation:!a.state.editLocation})},a.addCommentToggle=function(){a.setState({addComment:!a.state.addComment})},a.inputHandler=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(h.a)({},t,n))},a.editFormHandler=function(e){e.preventDefault();var t={title:a.state.title,description:a.state.description,lat:a.state.lat,lng:a.state.lng};d.a.post("".concat("https://u-xer.herokuapp.com/api","/locations/").concat(a.state.id),t).then((function(e){a.props.getAllLocations(),a.addLocationToggle()})).catch((function(e){console.log(e)}))},a.editLocationRender=function(){if(a.state.editLocation)return l.a.createElement("div",null,l.a.createElement(j,{inputHandler:a.inputHandler,editFormHandler:a.editFormHandler,title:a.state.title,description:a.state.description,lat:a.state.lat,lng:a.state.lng,editLocationToggle:a.editLocationToggle}))},a.renderDetails=function(){if(a.state.locationReady)return l.a.createElement("div",{className:"location-wrapper"},l.a.createElement("div",{className:"location-details-container"},l.a.createElement("div",{className:"details-box"},l.a.createElement("button",{className:"btn",onClick:function(){return a.props.history.push("/home")}},"Close"),l.a.createElement("button",{onClick:a.editLocationToggle,className:"btn"},"Edit"),l.a.createElement("button",{onClick:a.addCommentToggle,className:"btn"},"Comment"),l.a.createElement(O.a,null,a.state.imageUrl.map((function(e,t){return l.a.createElement(O.a.Item,{key:t},l.a.createElement("img",{className:"carousel-image",src:e,alt:"First slide"}))}))),l.a.createElement("h1",null,a.state.title),l.a.createElement("p",null,a.state.description)),l.a.createElement("div",{className:"comments-box"},l.a.createElement("h1",null,"Comments here"),a.state.addComment&&l.a.createElement(T,{addCommentToggle:a.addCommentToggle,locationId:a.state.locationId,currentUser:a.props.currentUser}),a.state.comments.map((function(e,t){return l.a.createElement("p",null,e.content)}))),a.editLocationRender()))},a.state={title:"",description:"",lat:"",lng:"",imageUrl:[],comments:[],editLocation:!1,locationReady:!1,addComment:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getLocation()}},{key:"render",value:function(){return console.log(this.state.comments),l.a.createElement("div",null,this.renderDetails())}}]),t}(l.a.Component),U=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).addLocationToggle=function(){a.setState({addLocation:!a.state.addLocation,title:"",description:"",lat:"",lng:"",imageUrl:[]})},a.editLocationToggle=function(){a.setState({editLocation:!a.state.editLocation})},a.currentLocationDetails=function(e){a.setState({currentLocation:e})},a.addLocationRender=function(){if(a.state.addLocation)return l.a.createElement("div",null,l.a.createElement(f,{inputHandler:a.inputHandler,fileUploadHandler:a.fileUploadHandler,addFormHandler:a.addFormHandler,title:a.state.title,description:a.state.description,lat:a.state.lat,lng:a.state.lng,addLocationToggle:a.addLocationToggle}))},a.inputHandler=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(h.a)({},t,n))},a.fileUploadHandler=function(e){var t=Object(E.a)(a.state.imageUrl);t.push(e.target.files[0]),a.setState({imageUrl:t})},a.inputCoordinatesHandle=function(e){a.setState({lat:e.latLng.lat(),lng:e.latLng.lng()})},a.addFormHandler=function(e){e.preventDefault();var t=new FormData;t.append("title",a.state.title),t.append("description",a.state.description),t.append("lat",a.state.lat),t.append("lng",a.state.lng),a.state.imageUrl.forEach((function(e,n){t.append("imageUrl",a.state.imageUrl[n])})),d.a.post("".concat("https://u-xer.herokuapp.com/api","/locations"),t).then((function(e){a.props.getAllLocations(),a.setState({title:"",description:"",lat:"",lng:"",imageUrl:""}),a.addLocationToggle()})).catch((function(e){console.log(e)}))},a.state={title:"",description:"",lat:"",lng:"",imageUrl:[],currentLocation:"",addLocation:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,this.props.locationsReady&&l.a.createElement("div",{className:"newMap"},l.a.createElement(N,{detailsToggle:this.detailsToggle,inputCoordinatesHandle:this.inputCoordinatesHandle,addLocationToggle:this.addLocationToggle,visibleLocations:this.props.visibleLocations,latitude:this.props.latitude,longitude:this.props.longitude,googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=".concat("AIzaSyCUhYwwUWxIHm23Xi6x5XcsX0m1_fPFBpE"),loadingElement:l.a.createElement("div",{style:{height:"100%"}}),containerElement:l.a.createElement("div",{style:{height:"100%"}}),mapElement:l.a.createElement("div",{style:{height:"100%"}})})),this.addLocationRender())}}]),t}(l.a.Component),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).genericSync=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(h.a)({},n,l))},a.handleSubmit=function(e){e.preventDefault(),d.a.post("".concat("https://u-xer.herokuapp.com/api","/login"),a.state,{withCredentials:!0}).then((function(e){var t=e.data.userDoc;console.log("user login: ",t),a.props.onUserChange(t),a.props.history.push("/")})).catch((function(e){console.log(e)}))},a.state={email:"",password:"",message:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=(e.fullName,e.email),a=e.password;return this.props.currentUser?l.a.createElement(g.a,{to:"/"}):l.a.createElement("section",{className:"login-page"},l.a.createElement("h2",null,"Log in"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"email",value:t,onChange:this.genericSync,name:"email",placeholder:"user@uxer.com"}),l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",value:a,onChange:this.genericSync,name:"password",placeholder:"**************"}),l.a.createElement("button",null,"Login")))}}]),t}(l.a.Component),S=function(e){function t(e){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"sidebar-container"},l.a.createElement("div",{className:"user-info-container"},l.a.createElement("div",{className:"profile-image-container"}),l.a.createElement("p",{className:"user-name"},"User Name")),l.a.createElement("div",{className:"sidebar-element"},l.a.createElement("button",{onClick:this.props.addLocationToggle},"Add Location")),l.a.createElement("div",{className:"sidebar-element"},l.a.createElement("button",null,"Favorites")),l.a.createElement("div",{className:"sidebar-element"},l.a.createElement("button",null,"Search")),l.a.createElement("div",{className:"sidebar-element"},l.a.createElement("button",null,"List All")),this.props.currentUser&&l.a.createElement("h1",null,this.props.currentUser.fullName),this.props.currentUser?l.a.createElement("div",null,l.a.createElement(y.c,{className:"",to:"/home"},"U-Xer"),l.a.createElement("button",{className:"",onClick:this.props.logout},"Logout")):l.a.createElement("div",null,l.a.createElement(y.c,{className:"",to:"/signup-page"}," Signup "),l.a.createElement(y.c,{className:"",to:"/login"}," Login ")))}}]),t}(l.a.Component),H=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"pimg1"},l.a.createElement("div",{class:"ptext"},l.a.createElement("span",{class:"border"},"Parallax Website"))),l.a.createElement("section",{class:"section section-light"},l.a.createElement("h2",null,"Section One"),l.a.createElement("p",null,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam impedit nemo rerum dicta, laboriosam, corporis natus quis quibusdam, quod nulla odit. Voluptates ab commodi eaque tenetur nam, laborum architecto, aliquam adipisci inventore sequi asperiores quidem! Pariatur totam accusamus vero fuga nesciunt voluptatum est distinctio illo ex assumenda! Incidunt, fugiat expedita, consequuntur ipsum magnam vero commodi eligendi dolor doloremque, ducimus dolore dicta voluptate minima harum explicabo perferendis sint quas voluptatum. Voluptatibus, voluptates? Nostrum laborum debitis culpa maiores labore ipsa amet, temporibus illum iste necessitatibus, blanditiis saepe. Nam assumenda asperiores minima veritatis libero ex, sit ducimus eveniet expedita culpa laudantium pariatur quis.")),l.a.createElement("div",{class:"pimg2"},l.a.createElement("div",{class:"ptext"},l.a.createElement("span",{class:"border"},"Image 2 Text"))),l.a.createElement("section",{class:"section section-dark"},l.a.createElement("h2",null,"Section Two"),l.a.createElement("p",null,"Lorem ipsum dolor, Voluptates ab commodi eaque tenetur nam, laborum architecto, aliquam adipisci inventore sequi asperiores quidem! Pariatur totam accusamus vero fuga nesciunt voluptatum est distinctio illo ex assumenda! Incidunt, fugiat expedita, consequuntur ipsum magnam vero commodi eligendi dolor doloremque, ducimus dolore dicta voluptate minima harum explicabo perferendis sint quas voluptatum. Voluptatibus, voluptates? Nostrum laborum debitis culpa maiores labore ipsa amet,")),l.a.createElement("div",{class:"pimg3"},l.a.createElement("div",{class:"ptext"},l.a.createElement("span",{class:"border"},"Image 3 Text"))),l.a.createElement("section",{class:"section section-dark"},l.a.createElement("h2",null,"Section Three"),l.a.createElement("p",null,"Lorem ipsum dolor, Voluptates ab commodi eaque tenetur nam, laborum architecto, aliquam adipisci inventore sequi asperiores quidem! Pariatur totam accusamus vero fuga nesciunt voluptatum est distinctio illo ex assumenda! Incidunt, fugiat expedita, consequuntur ipsum magnam vero commodi eligendi dolor doloremque, ducimus dolore dicta voluptate minima harum explicabo perferendis sint quas voluptatum. Voluptatibus, voluptates? Nostrum laborum debitis culpa maiores labore ipsa amet,")),l.a.createElement("div",{class:"pimg1"},l.a.createElement("div",{class:"ptext"},l.a.createElement("span",{class:"border"},"Parallax Website"))))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getAllLocations=function(){d.a.get("".concat("https://u-xer.herokuapp.com/api","/locations")).then((function(e){a.setState({allLocations:e.data,visibleLocations:e.data,locationsReady:!0})})).catch((function(e){console.log(e)}))},a.logout=function(){d.a.post("".concat("https://u-xer.herokuapp.com/api","/logout"),{},{withCredentials:!0}).then((function(e){a.setState({currentUser:e.userDoc}),a.props.history.push("/login")})).catch((function(e){console.log(e)}))},a.editLocationToggle=function(){a.setState({editLocation:!a.state.editLocation})},a.state={currentUser:null,allLocations:[],visibleLocations:[],latitude:25.7617,longitude:-80.1918,locationsReady:!1,coordinatesReady:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getAllLocations(),this.requestUserToDB()}},{key:"requestUserToDB",value:function(){var e=this;d.a.get("".concat("https://u-xer.herokuapp.com/api","/checkuser"),{withCredentials:!0}).then((function(t){console.log("Im getting user");var a=t.data.userDoc;e.syncCurrentUSer(a),console.log("Check user in app: ",a)})).catch((function(e){console.log("Err while getting the user from the checkuser route: ",e)}))}},{key:"syncCurrentUSer",value:function(e){this.setState({currentUser:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(g.d,null,l.a.createElement(g.b,{exact:!0,path:"/",render:function(){return l.a.createElement(H,null)}}),l.a.createElement(g.b,{exact:!0,path:"/home",render:function(){return l.a.createElement(U,{currentUser:e.state.currentUser,coordinatesReady:e.state.coordinatesReady,visibleLocations:e.state.visibleLocations,locationsReady:e.state.locationsReady,getAllLocations:e.getAllLocations,latitude:e.state.latitude,longitude:e.state.longitude})}}),l.a.createElement(g.b,{exact:!0,path:"/signup-page",render:function(){return l.a.createElement(b,{currentUser:e.state.currentUser,onUserChange:function(t){return e.syncCurrentUSer(t)}})}}),l.a.createElement(g.b,{exact:!0,path:"/login",render:function(t){return l.a.createElement(k,Object.assign({},t,{currentUser:e.state.currentUser,onUserChange:function(t){return e.syncCurrentUSer(t)}}))}}),l.a.createElement(g.b,{exact:!0,path:"/details",render:function(t){return l.a.createElement(x,Object.assign({},t,{getAllLocations:e.getAllLocations,editLocationToggle:e.editLocationToggle,currentUser:e.state.currentUser}))}})),l.a.createElement(S,{logout:this.logout,currentUser:this.state.currentUser}))}}]),t}(l.a.Component),q=Object(g.g)(w);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(394);o.a.render(l.a.createElement(y.a,null,l.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[172,1,2]]]);
//# sourceMappingURL=main.c62e6488.chunk.js.map