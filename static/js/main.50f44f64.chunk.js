(this["webpackJsonpno-attention"]=this["webpackJsonpno-attention"]||[]).push([[0],{48:function(e,t,n){e.exports=n(73)},53:function(e,t,n){},54:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(23),r=n.n(l),i=(n(53),n(54),n(55),n(45)),c=n(17),s=n(10),u=n(11),h=n(13),d=n(12),m=n(14),b=n(79),p=n(80),k=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).props=e,n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(b.a,{expand:"lg",bg:"light"},o.a.createElement(b.a.Brand,null,"No Attention!"),o.a.createElement(p.a.Link,{href:"pick-book"},"Pick Book"),o.a.createElement(p.a.Link,{href:"accent"},"Accents"))}}]),t}(o.a.Component),E=n(81),w=n(75),f=n(76),v=n(77),y=n(21),g=Object(y.a)({marginLeft:"10%",marginRight:"10%",marginTop:"10px"}),S=Object(y.a)({border:"1px solid black",position:"relative",height:"100%",width:"100%",overflow:"hidden",minHeight:"92.5vh",background:"#1188BC"}),O=Object(y.a)({height:"100%",width:"100%"}),j=Object(y.a)({position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",paddingRight:"30px"}),A=Object(y.a)({position:"absolute",top:"50%",left:"90%",transform:"translate(-50%, -50%)",fontSize:"50px"}),C=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).props=e,n.books=void 0,n.books=[{name:"Cat In the Hat",author:"Dr. Seuss",description:"This book is about a cat in the hat. A very popular and widely loved book."},{name:"Fox in Socks",author:"Dr. Seuss",description:"This book is about a Fox in socks. A very popular and widely loved book."},{name:"How the Grinch Stole Christmas",author:"Dr. Seuss",description:"This book is about a grinch. A very popular and widely loved book."}],n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"renderBookCard",value:function(e){return o.a.createElement(E.a,{style:{width:"18rem"}},o.a.createElement(E.a.Body,null,o.a.createElement(E.a.Title,null,e.name),o.a.createElement(E.a.Text,null,e.description),o.a.createElement(w.a,{variant:"primary",href:e.name},"Read this book!")))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:g},o.a.createElement(f.a,null,this.books.map((function(t,n){return o.a.createElement(v.a,{key:n},e.renderBookCard(t))}))))}}]),t}(o.a.Component),x=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).props=e,n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("p",null,"I am accents")}}]),t}(o.a.Component),I={cat:{name:"The Cat in the Hat",author:"Dr. Seuss",readingLevel:"Easy",description:"A story about a cat that wears a hat. A funny cat it is!",publisher:"Random House",text:'The sun did not shine. \n        It was too wet to play.\n        So we sat in the house\n        All that cold, cold, wet day.\n        \n        I sat there with Sally.\n        We sat there, we two.\n        And I said, "How I wish\n        We had something to do!"\n        \n        Too wet to go out\n        And too cold to play ball.\n        So we sat in the house.\n        We did nothing at all.\n        \n        So all we could do was to\n        \n        Sit!\n        Sit!\n        Sit!\n        Sit!\n        \n        And we did not like it.\n        Not one little bit.\n        \n        BUMP!\n        \n        And then\n        something went BUMP!\n        How that bump made us jump!\n        \n        We looked!\n        Then we saw him step in on the mat!\n        We looked!\n        And we saw him!\n        The Cat in the Hat!\n        And he said to us,\n        "Why do you sit there like that?"\n        "I know it is wet\n        And the sun is not sunny.\n        But we can have\n        Lots of good fun that is funny!"\n        \n        "I know some good games we could play,"\n        Said the cat.\n        "I know some new tricks,"\n        Said the Cat in the Hat.\n        "A lot of good tricks.\n        I will show them to you.\n        Your mother\n        Will not mind at all if I do."\n        \n        Then Sally and I\n        Did not know what to say.\n        Our mother was out of the house\n        For the day.\n        '}},T=n(43),B=n(44),N=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).props=e,n.state=void 0,n.state={currentSlide:0},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"nextSlide",value:function(){var e=this.state.currentSlide+1,t=this.props,n=t.slides,a=t.callback;e>=n.length?a():this.setState({currentSlide:e})}},{key:"render",value:function(){var e=this,t=this.props.slides,n=this.state.currentSlide;return o.a.createElement("div",{className:O},o.a.createElement(H,{text:t[n],callback:function(){return e.nextSlide()}}))}}]),t}(o.a.Component);function H(e){var t=e.text,n=e.callback;return 0===t.replace(/ /g,"").length&&n(),o.a.createElement("div",{className:S},o.a.createElement("div",{className:j},o.a.createElement("h1",null," ",t)),o.a.createElement("div",{className:A},o.a.createElement("span",{onClick:n},o.a.createElement(B.a,{icon:T.a}))))}var W=n(78),L=function(e){function t(e){var n;Object(s.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).props=e,n.book=void 0,n.slides=void 0,n.state=void 0,n.book=I[e.location.search.substring(1)];var a=n.book.text.split("\n");return n.slides=[],a.forEach((function(e,t){t%2===0?n.slides.push(e):n.slides[Math.floor(t/2)]+=e})),n.state={showSummary:!1},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"finishSlidesCallback",value:function(){this.setState({showSummary:!0})}},{key:"generateSummaryPage",value:function(){return o.a.createElement(W.a,{striped:!0,bordered:!0,hover:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"#"),o.a.createElement("th",null,"First Name"),o.a.createElement("th",null,"Last Name"),o.a.createElement("th",null,"Username"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"1"),o.a.createElement("td",null,"Mark"),o.a.createElement("td",null,"Otto"),o.a.createElement("td",null,"@mdo")),o.a.createElement("tr",null,o.a.createElement("td",null,"2"),o.a.createElement("td",null,"Jacob"),o.a.createElement("td",null,"Thornton"),o.a.createElement("td",null,"@fat")),o.a.createElement("tr",null,o.a.createElement("td",null,"3"),o.a.createElement("td",null,"@twitter"))))}},{key:"render",value:function(){var e=this,t=this.state.showSummary,n=(this.book,this.slides);return o.a.createElement("div",null,!t&&o.a.createElement(N,{slides:n,callback:function(){return e.finishSlidesCallback()}}),t&&this.generateSummaryPage())}}]),t}(o.a.Component),D=function(){return o.a.createElement(i.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(k,null),o.a.createElement(c.a,{path:"/accent",component:x}),o.a.createElement(c.a,{path:"/pick-book",component:C}),o.a.createElement(c.a,{path:"/book",component:L})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.50f44f64.chunk.js.map