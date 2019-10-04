function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function chatTmpl(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {".\u002Fsrc\u002Fchat\u002Fchat.pug":".chat\r\n    .chat_container\r\n        .header\r\n            h2 You are loggin in as...\r\n        .chat-box\r\n            each message in messages\r\n                .message-box.left-img\r\n                    .picture\r\n                        img(src='https:\u002F\u002Funsplash.it\u002F200\u002F200\u002F?random')\r\n                        span.time= message.time\r\n                    .message\r\n                        span= message.name\r\n                        p= message.text\r\n"};
;var locals_for_with = (locals || {});(function (messages) {;pug_debug_line = 1;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cdiv class=\"chat\"\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cdiv class=\"chat_container\"\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cdiv class=\"header\"\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "You are loggin in as...\u003C\u002Fh2\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cdiv class=\"chat-box\"\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
// iterate messages
;(function(){
  var $$obj = messages;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var message = $$obj[pug_index0];
;pug_debug_line = 7;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cdiv class=\"message-box left-img\"\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cdiv class=\"picture\"\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cimg src=\"https:\u002F\u002Funsplash.it\u002F200\u002F200\u002F?random\"\u002F\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cspan class=\"time\"\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = message.time) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cdiv class=\"message\"\u003E";
;pug_debug_line = 12;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 12;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = message.name) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = message.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var message = $$obj[pug_index0];
;pug_debug_line = 7;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cdiv class=\"message-box left-img\"\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cdiv class=\"picture\"\u003E";
;pug_debug_line = 9;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cimg src=\"https:\u002F\u002Funsplash.it\u002F200\u002F200\u002F?random\"\u002F\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cspan class=\"time\"\u003E";
;pug_debug_line = 10;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = message.time) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cdiv class=\"message\"\u003E";
;pug_debug_line = 12;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 12;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = message.name) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 13;pug_debug_filename = ".\u002Fsrc\u002Fchat\u002Fchat.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = message.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"messages" in locals_for_with?locals_for_with.messages:typeof messages!=="undefined"?messages:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}