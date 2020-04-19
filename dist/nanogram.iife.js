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

var Nanogram=function(){"use strict";var t=function(){return(t=Object.assign||function(t){for(var o,n=1,r=arguments.length;n<r;n++)for(var e in o=arguments[n])Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);return t}).apply(this,arguments)};function o(t,o,n,r){return new(n||(n=Promise))((function(e,i){function l(t){try{u(r.next(t))}catch(t){i(t)}}function a(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){var o;t.done?e(t.value):(o=t.value,o instanceof n?o:new n((function(t){t(o)}))).then(l,a)}u((r=r.apply(t,o||[])).next())}))}function n(t,o){var n,r,e,i,l={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(e=2&i[0]?r.return:i[0]?r.throw||((e=r.return)&&e.call(r),0):r.next)&&!(e=e.call(r,i[1])).done)return e;switch(r=0,e&&(i=[2&i[0],e.value]),i[0]){case 0:case 1:e=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(e=l.trys,(e=e.length>0&&e[e.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!e||i[1]>e[0]&&i[1]<e[3])){l.label=i[1];break}if(6===i[0]&&l.label<e[1]){l.label=e[1],e=i;break}if(e&&l.label<e[2]){l.label=e[2],l.ops.push(i);break}e[2]&&l.ops.pop(),l.trys.pop();continue}i=o.call(t,l)}catch(t){i=[6,t],r=0}finally{n=e=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}return function(){function r(){this.INSTAGRAM_HOSTNAME="https://www.instagram.com/",this.SHARED_DATA_TEG_EXP=/^[\w\W]*<script type="text\/javascript">window._sharedData = ({[\w\W]*});<\/script>[\w\W]*$/g}return r.prototype.buildUrl=function(t){return""+this.INSTAGRAM_HOSTNAME+t},r.prototype.parseJSON=function(t){console.log(t);try{var o=t.replace(this.SHARED_DATA_TEG_EXP,"$1");return JSON.parse(o)}catch(t){console.error("Nanogram: failure during parsing JSON.\nError message: "+t.message)}},r.prototype.HTTP=function(t){return o(this,void 0,void 0,(function(){var o;return n(this,(function(n){switch(n.label){case 0:return[4,fetch(t,{method:"GET",redirect:"follow"}).then((function(t){if(t.ok)return t.text();console.error("Nanogram: error during request.\nProbably making too many requests to the Instagram application.\nAlso check method parameters.")}))];case 1:return(o=n.sent())?[2,this.parseJSON(o)]:[2]}}))}))},r.logError=function(t){var o="Nanogram: please provide a valid "+t.join(" and ");console.error(o)},r.prototype.getMediaByUsername=function(t){var e,i,l;return o(this,void 0,void 0,(function(){var o,a,u,c;return n(this,(function(n){switch(n.label){case 0:return o={profile:null,ok:!1},t?(a=this.buildUrl(t),[4,this.HTTP(a)]):(r.logError(["username"]),[2,o]);case 1:return u=n.sent(),(c=null===(l=null===(i=null===(e=null==u?void 0:u.entry_data)||void 0===e?void 0:e.ProfilePage[0])||void 0===i?void 0:i.graphql)||void 0===l?void 0:l.user)&&(o.profile=c,o.ok=!0),[2,o]}}))}))},r.prototype.getMediaByTag=function(t){var e,i;return o(this,void 0,void 0,(function(){var o,l,a,u;return n(this,(function(n){switch(n.label){case 0:return o={tag:null,ok:!1},t?(l=this.buildUrl("explore/tags/"+t),[4,this.HTTP(l)]):(r.logError(["tag"]),[2,o]);case 1:return a=n.sent(),(u=null===(i=null===(e=null==a?void 0:a.entry_data)||void 0===e?void 0:e.TagPage[0])||void 0===i?void 0:i.graphql.hashtag)&&(o.tag=u,o.ok=!0),[2,o]}}))}))},r.prototype.getMediaByLocation=function(t,e){var i,l,a;return o(this,void 0,void 0,(function(){var o,u,c,s;return n(this,(function(n){switch(n.label){case 0:return o={location:null,ok:!1},void 0!==t&&e?(u=this.buildUrl("explore/locations/"+t+"/"+e),[4,this.HTTP(u)]):(r.logError(["location id","place name"]),[2,o]);case 1:return c=n.sent(),(s=null===(a=null===(l=null===(i=null==c?void 0:c.entry_data)||void 0===i?void 0:i.LocationsPage[0])||void 0===l?void 0:l.graphql)||void 0===a?void 0:a.location)&&(o.location=s,o.ok=!0),[2,o]}}))}))},r.prototype.getCountries=function(){var t,r;return o(this,void 0,void 0,(function(){var o,e,i,l;return n(this,(function(n){switch(n.label){case 0:return o={country_list:null,ok:!1},e=this.buildUrl("explore/locations/"),[4,this.HTTP(e)];case 1:return i=n.sent(),(l=null===(r=null===(t=null==i?void 0:i.entry_data)||void 0===t?void 0:t.LocationsDirectoryPage[0])||void 0===r?void 0:r.country_list)&&(o.country_list=l,o.ok=!0),[2,o]}}))}))},r.prototype.getCitiesByCountryId=function(e){var i;return o(this,void 0,void 0,(function(){var o,l,a,u,c,s;return n(this,(function(n){switch(n.label){case 0:return o={city_list:null,country_info:null,ok:!1},e?(l=this.buildUrl("explore/locations/"+e),[4,this.HTTP(l)]):(r.logError(["country id"]),[2,o]);case 1:return a=n.sent(),u=t({},null===(i=null==a?void 0:a.entry_data)||void 0===i?void 0:i.LocationsDirectoryPage[0]),c=u.city_list,s=u.country_info,c&&(o.city_list=c,o.ok=!0),s&&(o.country_info=s,o.ok=!0),[2,o]}}))}))},r.prototype.getPlacesByCityId=function(e){var i;return o(this,void 0,void 0,(function(){var o,l,a,u,c,s,d;return n(this,(function(n){switch(n.label){case 0:return o={place:{city_info:null,country_info:null,location_list:null},ok:!1},e?(l=this.buildUrl("explore/locations/"+e),[4,this.HTTP(l)]):(r.logError(["city id"]),[2,o]);case 1:return a=n.sent(),u=t({},null===(i=null==a?void 0:a.entry_data)||void 0===i?void 0:i.LocationsDirectoryPage[0]),c=u.city_info,s=u.country_info,d=u.location_list,c&&(o.place.city_info=c,o.ok=!0),s&&(o.place.country_info=s,o.ok=!0),d&&(o.place.location_list=d,o.ok=!0),[2,o]}}))}))},r.prototype.getMediaByPlaceId=function(t){var e,i;return o(this,void 0,void 0,(function(){var o,l,a,u;return n(this,(function(n){switch(n.label){case 0:return o={location:null,ok:!1},t?(l=this.buildUrl("explore/locations/"+t),[4,this.HTTP(l)]):(r.logError(["place id"]),[2,o]);case 1:return a=n.sent(),(u=null===(i=null===(e=null==a?void 0:a.entry_data)||void 0===e?void 0:e.LocationsPage[0])||void 0===i?void 0:i.graphql.location)&&(o.location=u,o.ok=!0),[2,o]}}))}))},r.prototype.getMediaBySearchQuery=function(t){return o(this,void 0,void 0,(function(){var o,e,i,l,a,u;return n(this,(function(n){switch(n.label){case 0:return o={media:{users:null,hashtags:null,places:null},ok:!1},t?(e=this.buildUrl("web/search/topsearch/?context=blended&query="+t+"&include_reel=true"),[4,this.HTTP(e)]):(r.logError(["search query"]),[2,o]);case 1:return i=n.sent(),l=i.users,a=i.hashtags,u=i.places,l&&(o.media.users=l,o.ok=!0),a&&(o.media.hashtags=a,o.ok=!0),u&&(o.media.places=u,o.ok=!0),[2,o]}}))}))},r}()}();