/**
*
* nanogram.js
*
* @version 1.0.0
* @author webistomin
* @email: webistomin@gmail.com
* @license: MIT
*
**/

"use strict";var t=function(){return(t=Object.assign||function(t){for(var o,r=1,n=arguments.length;r<n;r++)for(var e in o=arguments[r])Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);return t}).apply(this,arguments)};function o(t,o,r,n){return new(r||(r=Promise))((function(e,i){function l(t){try{u(n.next(t))}catch(t){i(t)}}function a(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var o;t.done?e(t.value):(o=t.value,o instanceof r?o:new r((function(t){t(o)}))).then(l,a)}u((n=n.apply(t,o||[])).next())}))}function r(t,o){var r,n,e,i,l={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,n&&(e=2&i[0]?n.return:i[0]?n.throw||((e=n.return)&&e.call(n),0):n.next)&&!(e=e.call(n,i[1])).done)return e;switch(n=0,e&&(i=[2&i[0],e.value]),i[0]){case 0:case 1:e=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,n=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(e=l.trys,(e=e.length>0&&e[e.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!e||i[1]>e[0]&&i[1]<e[3])){l.label=i[1];break}if(6===i[0]&&l.label<e[1]){l.label=e[1],e=i;break}if(e&&l.label<e[2]){l.label=e[2],l.ops.push(i);break}e[2]&&l.ops.pop(),l.trys.pop();continue}i=o.call(t,l)}catch(t){i=[6,t],n=0}finally{r=e=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var n=function(){function n(){this.INSTAGRAM_HOSTNAME="https://www.instagram.com/",this.SHARED_DATA_TEG_EXP=/^[\w\W]*<script type="text\/javascript">window._sharedData = ({[\w\W]*});<\/script>[\w\W]*$/g}return n.prototype.buildUrl=function(t){return""+this.INSTAGRAM_HOSTNAME+t},n.prototype.parseJSON=function(t){console.log(t);try{var o=t.replace(this.SHARED_DATA_TEG_EXP,"$1");return JSON.parse(o)}catch(t){console.error("Nanogram: failure during parsing JSON.\nError message: "+t.message)}},n.prototype.HTTP=function(t){return o(this,void 0,void 0,(function(){var o;return r(this,(function(r){switch(r.label){case 0:return[4,fetch(t,{method:"GET",redirect:"follow"}).then((function(t){if(t.ok)return t.text();console.error("Nanogram: error during request.\nProbably making too many requests to the Instagram application.\nAlso check method parameters.")}))];case 1:return(o=r.sent())?[2,this.parseJSON(o)]:[2]}}))}))},n.logError=function(t){var o="Nanogram: please provide a valid "+t.join(" and ");console.error(o)},n.prototype.getMediaByUsername=function(t){var e,i,l;return o(this,void 0,void 0,(function(){var o,a,u,c;return r(this,(function(r){switch(r.label){case 0:return o={profile:null,ok:!1},t?(a=this.buildUrl(t),[4,this.HTTP(a)]):(n.logError(["username"]),[2,o]);case 1:return u=r.sent(),(c=null===(l=null===(i=null===(e=null==u?void 0:u.entry_data)||void 0===e?void 0:e.ProfilePage[0])||void 0===i?void 0:i.graphql)||void 0===l?void 0:l.user)&&(o.profile=c,o.ok=!0),[2,o]}}))}))},n.prototype.getMediaByTag=function(t){var e,i;return o(this,void 0,void 0,(function(){var o,l,a,u;return r(this,(function(r){switch(r.label){case 0:return o={tag:null,ok:!1},t?(l=this.buildUrl("explore/tags/"+t),[4,this.HTTP(l)]):(n.logError(["tag"]),[2,o]);case 1:return a=r.sent(),(u=null===(i=null===(e=null==a?void 0:a.entry_data)||void 0===e?void 0:e.TagPage[0])||void 0===i?void 0:i.graphql.hashtag)&&(o.tag=u,o.ok=!0),[2,o]}}))}))},n.prototype.getMediaByLocation=function(t,e){var i,l,a;return o(this,void 0,void 0,(function(){var o,u,c,s;return r(this,(function(r){switch(r.label){case 0:return o={location:null,ok:!1},void 0!==t&&e?(u=this.buildUrl("explore/locations/"+t+"/"+e),[4,this.HTTP(u)]):(n.logError(["location id","place name"]),[2,o]);case 1:return c=r.sent(),(s=null===(a=null===(l=null===(i=null==c?void 0:c.entry_data)||void 0===i?void 0:i.LocationsPage[0])||void 0===l?void 0:l.graphql)||void 0===a?void 0:a.location)&&(o.location=s,o.ok=!0),[2,o]}}))}))},n.prototype.getCountries=function(){var t,n;return o(this,void 0,void 0,(function(){var o,e,i,l;return r(this,(function(r){switch(r.label){case 0:return o={country_list:null,ok:!1},e=this.buildUrl("explore/locations/"),[4,this.HTTP(e)];case 1:return i=r.sent(),(l=null===(n=null===(t=null==i?void 0:i.entry_data)||void 0===t?void 0:t.LocationsDirectoryPage[0])||void 0===n?void 0:n.country_list)&&(o.country_list=l,o.ok=!0),[2,o]}}))}))},n.prototype.getCitiesByCountryId=function(e){var i;return o(this,void 0,void 0,(function(){var o,l,a,u,c,s;return r(this,(function(r){switch(r.label){case 0:return o={city_list:null,country_info:null,ok:!1},e?(l=this.buildUrl("explore/locations/"+e),[4,this.HTTP(l)]):(n.logError(["country id"]),[2,o]);case 1:return a=r.sent(),u=t({},null===(i=null==a?void 0:a.entry_data)||void 0===i?void 0:i.LocationsDirectoryPage[0]),c=u.city_list,s=u.country_info,c&&(o.city_list=c,o.ok=!0),s&&(o.country_info=s,o.ok=!0),[2,o]}}))}))},n.prototype.getPlacesByCityId=function(e){var i;return o(this,void 0,void 0,(function(){var o,l,a,u,c,s,d;return r(this,(function(r){switch(r.label){case 0:return o={place:{city_info:null,country_info:null,location_list:null},ok:!1},e?(l=this.buildUrl("explore/locations/"+e),[4,this.HTTP(l)]):(n.logError(["city id"]),[2,o]);case 1:return a=r.sent(),u=t({},null===(i=null==a?void 0:a.entry_data)||void 0===i?void 0:i.LocationsDirectoryPage[0]),c=u.city_info,s=u.country_info,d=u.location_list,c&&(o.place.city_info=c,o.ok=!0),s&&(o.place.country_info=s,o.ok=!0),d&&(o.place.location_list=d,o.ok=!0),[2,o]}}))}))},n.prototype.getMediaByPlaceId=function(t){var e,i;return o(this,void 0,void 0,(function(){var o,l,a,u;return r(this,(function(r){switch(r.label){case 0:return o={location:null,ok:!1},t?(l=this.buildUrl("explore/locations/"+t),[4,this.HTTP(l)]):(n.logError(["place id"]),[2,o]);case 1:return a=r.sent(),(u=null===(i=null===(e=null==a?void 0:a.entry_data)||void 0===e?void 0:e.LocationsPage[0])||void 0===i?void 0:i.graphql.location)&&(o.location=u,o.ok=!0),[2,o]}}))}))},n.prototype.getMediaBySearchQuery=function(t){return o(this,void 0,void 0,(function(){var o,e,i,l,a,u;return r(this,(function(r){switch(r.label){case 0:return o={media:{users:null,hashtags:null,places:null},ok:!1},t?(e=this.buildUrl("web/search/topsearch/?context=blended&query="+t+"&include_reel=true"),[4,this.HTTP(e)]):(n.logError(["search query"]),[2,o]);case 1:return i=r.sent(),l=i.users,a=i.hashtags,u=i.places,l&&(o.media.users=l,o.ok=!0),a&&(o.media.hashtags=a,o.ok=!0),u&&(o.media.places=u,o.ok=!0),[2,o]}}))}))},n}();module.exports=n;