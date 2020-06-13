(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{128:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),l=n.n(o),s=n(58),c=n.n(s),i=n(82),u=n(10),p=n(11),m=n(14),d=n(13),h=n(8),_=n.n(h),f=n(12),E=function(e){return{type:"USER_INPUT",payload:e}},b=function(e){return{type:"ADD_PROFILE",payload:e}},g=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return console.log(e.props.isAuthenticated)}},"Get State"),r.a.createElement("button",{onClick:function(){return e.props.action1()}},"Dispatch Action 1"),r.a.createElement("button",{onClick:function(){return e.props.action2()}},"Dispatch Action 2"),r.a.createElement("button",{onClick:function(){return e.props.action_creator1()}},"Dispatch Action Creator 1"),r.a.createElement("button",{onClick:function(){return e.props.action_creator2()}},"Dispatch Action Creator 2"),r.a.createElement("button",{onClick:function(){return e.props.action_creator3("User Text")}},"Dispatch Action Creator 3"),this.props.isAuthenticated?r.a.createElement("h1",null,this.props.user_text):null)}}]),n}(a.Component);var v=Object(f.b)((function(e){return{isAuthenticated:e.reducer1.isAuthenticated,user_text:e.user_reducer.user_text}}),(function(e){return{action1:function(){return e({type:"SUCCESS"})},action2:function(){return e({type:"FAILURE"})},action_creator1:function(){return e({type:"SUCCESS"})},action_creator2:function(){return e({type:"FAILURE"})},action_creator3:function(t){return e(E(t))}}}))(g),O=n(18),y=n(177),S=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(O.a,{to:"/",style:{padding:"5px"}},"Home"),r.a.createElement(O.a,{to:"/profile",style:{padding:"5px"}},"Profile"),r.a.createElement(O.a,{to:"/component1",style:{padding:"5px"}},"Component 1"),r.a.createElement(O.a,{to:"/form1",style:{padding:"5px"}},"Form 1"),r.a.createElement(O.a,{to:"/render_list",style:{padding:"5px"}},"List"),r.a.createElement(O.a,{to:"/posts",style:{padding:"5px"}},"Forum"),r.a.createElement(O.a,{to:"/private_route",style:{padding:"5px"}},"Private Route"),this.props.is_authenticated?r.a.createElement(y.a,{color:"primary",variant:"outlined",onClick:function(){return e.props.auth.logout()}},"Logout"):r.a.createElement(y.a,{color:"secondary",variant:"outlined",onClick:function(){return e.props.auth.login()}},"Login"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}}]),n}(a.Component);var C=Object(f.b)((function(e){return{is_authenticated:e.auth_reducer.is_authenticated}}))(S),j=n(23),k=Object(j.a)(),R=n(164),T=n(166),P=n(165),D=n(179),A=n(170),x=n(168),w=n(169),M=n(167),F=(n(80),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleClickOpen=function(e){return a.setState({open:!0,post_id:e})},a.handleClickClose=function(){return a.setState({open:!1,post_id:null})},a.deletePost=function(){var e=a.state.post_id;console.log(e),_.a.delete("/api/delete/post_comments",{data:{post_id:e}}).then((function(){return _.a.delete("/api/delete/post",{data:{post_id:e}}).then((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)})).then((function(){return a.handleClickClose()})).then((function(){return setTimeout((function(){return k.replace("/")}),700)}))},a.RenderProfile=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,e.profile.profile.nickname),r.a.createElement("br",null),r.a.createElement("img",{src:e.profile.profile.picture,alt:""}),r.a.createElement("br",null),r.a.createElement("h4",null,e.profile.profile.email),r.a.createElement("h5",null,e.profile.profile.name),r.a.createElement("h6",null,"Email verified"),e.profile.profile.email_verified?r.a.createElement("p",null,"YES"):r.a.createElement("p",null,"NO"))},a.RenderPost=function(e){return r.a.createElement(R.a,{style:{width:"500px",height:"200px",marginBottom:"10px",paddingBottom:"80px"}},r.a.createElement(P.a,{title:r.a.createElement(O.a,{to:{pathname:"/post/".concat(e.post.pid),state:{post:e}}},e.post.title),subheader:r.a.createElement("div",{className:"FlexColumn"},console.log(e),r.a.createElement("div",{className:"FlexRow"},e.post.date_created),r.a.createElement("div",{className:"FlexRow"},r.a.createElement(O.a,{to:{pathname:"/edit_post/".concat(e.post.pid),state:{post:e}}},r.a.createElement("button",null,"Edit")),r.a.createElement("button",{onClick:function(){return a.handleClickOpen(e.post.pid)}},"Delete")))}),r.a.createElement("br",null),r.a.createElement(T.a,null,r.a.createElement("span",{style:{overflow:"hidden"}},e.post.body)))},a.state={open:!1,post_id:null},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.db_profile[0].uid;_.a.get("/api/get/user_posts",{params:{user_id:t}}).then((function(t){return e.props.set_user_posts(t.data)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(this.RenderProfile,{profile:this.props.profile})),r.a.createElement("div",null,console.log(this.state),r.a.createElement(O.a,{to:{pathname:"/show_messages/".concat(this.state.user_id)}},r.a.createElement(y.a,{variant:"contained",color:"primary",type:"submit"},"Show Messages"))),r.a.createElement("div",null,this.props.user_posts?this.props.user_posts.map((function(t){return r.a.createElement(e.RenderPost,{post:t,key:t.pid})})):null),r.a.createElement(D.a,{open:this.state.open,onClose:this.handleClickClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(M.a,{id:"alert-dialog-title"},"Confirm delete?"),r.a.createElement(x.a,null,r.a.createElement(w.a,{id:"alert-dialog-description"},"Deleting Posts"),r.a.createElement(A.a,null,r.a.createElement(y.a,{onClick:this.deletePost},"Agree"),r.a.createElement(y.a,{onClick:this.handleClickClose},"Cancel")))))}}]),n}(a.Component)),N=Object(f.b)((function(e){return{profile:e.auth_reducer.profile,user_posts:e.posts_reducer.user_posts,db_profile:e.auth_reducer.db_profile}}),(function(e){return{set_user_posts:function(t){return e({type:"FETCH_USER_POSTS",payload:t})}}}))(F),I=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){return e.setState({value:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.input_action_creator(t.target.name.value)},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null," Input "),r.a.createElement("input",{id:"name",onChange:this.handleChange,type:"text"}),r.a.createElement("button",{type:"submit",onSubmit:function(){return e.handleSubmit}}," Submit ")),r.a.createElement("br",null),r.a.createElement("h3",null,"React State:"),r.a.createElement("p",null,this.state.value),r.a.createElement("br",null),r.a.createElement("h3",null,"Redux State:"),r.a.createElement("p",null,this.props.user_text))}}]),n}(a.Component);var U=Object(f.b)((function(e){return{user_text:e.user_reducer.user_text}}),(function(e){return{input_action_creator:function(t){return e(E(t))}}}))(I),L=function(e){return r.a.createElement("div",null,"Callback")},B=function(e){return r.a.createElement("div",null,"Private Component")},H=function(e){return r.a.createElement("div",null,"UnAuthRedirect")},V=function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,e.location.state.list_item.text),r.a.createElement("h4",null," ",e.location.state.list_item.num," "),r.a.createElement("div",null,e.location.state.list_item.bool?r.a.createElement("p",null,"Boolean is True"):r.a.createElement("p",null,"Boolean is False")))},Y=function(e){return r.a.createElement("div",{className:"FlexRowMain"},r.a.createElement("div",null,r.a.createElement("h1",null,"Signup and Create an Account"),r.a.createElement(y.a,{color:"primary",size:"large",variant:"contained",onClick:function(){return e.auth.login()}},"Signup")))},G=n(28),J=n(42),q=n.n(J),z=n(176),W=n(84),K=n.n(W),Q=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleTransition=function(){setTimeout((function(){return a.setState({opacity:1})}),400)},a.add_search_posts_to_state=function(e){a.setState({posts_search:[]}),a.setState({posts_search:Object(G.a)(e)}),a.animate_search_posts()},a.animate_search_posts=function(){a.setState({posts_search_motion:[]});var e=1;a.state.posts_search.map((function(t){setTimeout((function(){a.setState({posts_search_motion:[].concat(Object(G.a)(a.state.posts_search_motion),[t])})}),400*e),e++}))},a.add_posts_to_state=function(e){a.setState({posts:Object(G.a)(e)}),a.setState({num_posts:a.state.posts.length}),a.setState({page_range:a.state.num_posts/5}),a.slice_posts(),a.animate_posts()},a.slice_posts=function(){var e=a.state.activePage*a.state.posts_per_page,t=e-a.state.posts_per_page;a.setState({posts_slice:a.state.posts.slice(t,e)})},a.animate_posts=function(){a.setState({posts_motion:[]});var e=1;a.state.posts_slice.map((function(t){setTimeout((function(){a.setState({posts_motion:[].concat(Object(G.a)(a.state.posts_motion),[t])})}),400*e),e++}))},a.handlePageChange=function(e){a.setState({activePage:e}),setTimeout((function(){a.slice_posts()}),50),setTimeout((function(){a.animate_posts()}),100)},a.handleSearch=function(e){var t=e.target.value;_.a.get("/api/get/search_posts",{params:{search_query:t}}).then((function(e){return a.props.posts_success(e.data)})).then((function(){return a.add_search_posts_to_state(a.props.search_posts)})).catch((function(e){return console.error(e)}))},a.RenderPosts=function(e){return r.a.createElement("div",{className:"CardStyles"},r.a.createElement(R.a,null,r.a.createElement(P.a,{title:r.a.createElement(O.a,{to:{pathname:"/post/"+e.post.pid,state:{post:e}}},e.post.title),subheader:r.a.createElement("div",{className:"FlexColumn"},r.a.createElement("div",{className:"FlexRow"},q()(e.post.date_created).format("MMMM Do, YYYY | h:mm a")),r.a.createElement("div",{className:"FlexRow"},"By:",r.a.createElement(O.a,{style:{paddingLeft:"5px",textDecoration:"none"},to:{pathname:"/user/"+e.post.author,state:{post:e}}},e.post.author)),r.a.createElement("div",{className:"FlexRow"},r.a.createElement("i",{className:"material-icons"},"thumb_up"),r.a.createElement("div",{className:"notification-num-allposts"}," ",e.post.likes," ")))}),r.a.createElement("br",null),r.a.createElement(T.a,null,r.a.createElement("span",{style:{overflow:"hidden"}}," ",e.post.body," "))))},a.state={posts:[],opacity:0,posts_motion:[],num_posts:0,page_range:0,activePage:1,posts_per_page:5,posts_slice:[],posts_search:[],posts_search_motion:[]},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.handleTransition(),_.a.get("/api/get/all_posts").then((function(t){return e.props.set_posts(t.data)})).then((function(){return e.add_posts_to_state(e.props.posts)})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.is_authenticated?r.a.createElement(O.a,{to:"/add_post"},r.a.createElement(y.a,{color:"secondary",variant:"contained"},"Add Post")):r.a.createElement(O.a,{to:"/signup"},r.a.createElement(y.a,{color:"primary",variant:"contained"},"Sign Up to Add Posts")),r.a.createElement("div",null,r.a.createElement(z.a,{id:"search",label:"Search",margin:"normal",onChange:this.handleSearch})),r.a.createElement("div",null,this.state.posts_search?this.state.posts_search_motion.map((function(t){return r.a.createElement(e.RenderPosts,{key:t.pid,post:t})})):null),r.a.createElement("div",null,r.a.createElement("h1",null,"All Posts"),this.state.posts?this.state.posts_motion.map((function(t){return r.a.createElement(e.RenderPosts,{key:t.pid,post:t})})):null,r.a.createElement(K.a,{activePage:this.state.activePage,itemsCountPerPage:5,totalItemsCount:this.state.num_posts,pageRangeDisplayed:this.state.page_range,onChange:this.handlePageChange})))}}]),n}(a.Component),X=Object(f.b)((function(e){return{posts:e.posts_reducer.posts,is_authenticated:e.auth_reducer.is_authenticated,search_posts:e.posts_reducer.search_posts}}),(function(e){return{set_posts:function(t){return e({type:"FETCH_DB_POSTS",payload:t})},posts_success:function(t){return e({type:"SEARCH_POSTS_SUCCESS",payload:t})},posts_failure:function(){return e({type:"SEARCH_POSTS_FAILURE"})}}}))(Q),Z=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(t){t.preventDefault();var n=e.props.db_profile[0].uid,a=e.props.db_profile[0].username,r={title:t.target.title.value,body:t.target.body.value,username:a,uid:n};_.a.post("/api/posts/post_to_db",r).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})).then(setTimeout((function(){return k.replace("/")}),700))},e}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{action:"",onSubmit:this.handleSubmit},r.a.createElement(z.a,{id:"title",label:"Title",margin:"normal"}),r.a.createElement("br",null),r.a.createElement(z.a,{id:"body",label:"Body",multiline:!0,rows:"4",margin:"normal"}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Submit"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return k.replace("/posts")}},"Cancel")))}}]),n}(a.Component),$=Object(f.b)((function(e){return{db_profile:e.auth_reducer.db_profile}}),{})(Z),ee=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).RenderComments=function(e){return r.a.createElement("div",{className:a.state.delete_comment_id===e.comment.cid?"FadeOutComment":"CommentStyles"},r.a.createElement("h3",null,e.comment.comment),r.a.createElement("small",null,"Just Now"===e.comment.date_created?r.a.createElement("div",null," ",e.comment.isEdited?r.a.createElement("span",null," Edited "):r.a.createElement("span",null," Just Now ")):q()(e.comment.date_created).format("MMMM Do, YYYY | h:mm a")),r.a.createElement("p",null,"By: ",e.comment.author),e.cur_user_id===e.comment.user_id?r.a.createElement(y.a,{onClick:function(){return a.handleClickOpen(e.comment.cid,e.comment.comment)}},"Edit"):null)},a.handleTransition=function(){return setTimeout((function(){return a.setState({opacity:1})}),400)},a.add_comments_to_state=function(e){a.setState({comments_arr:Object(G.a)(e)}),a.animate_comments()},a.animate_comments=function(){var e=1;a.state.comments_arr.map((function(t){setTimeout((function(){a.setState({comments_motion:[].concat(Object(G.a)(a.state.comments_motion),[t])})}),400*e),e++}))},a.handleCommentSubmit=function(e){setTimeout((function(){a.setState({comments_motion:[e].concat(Object(G.a)(a.state.comments_motion))})}),50)},a.handleCommentUpdate=function(e){var t=a.state.comments_motion.findIndex((function(t){return t.cid===e.cid})),n=Object(G.a)(a.state.comments_motion);n[t]=e,a.setState({comments_motion:n})},a.handleCommentDelete=function(e){a.setState({delete_comment_id:e});var t=a.state.comments_motion.filter((function(t){return t.cid!==e}));setTimeout((function(){return a.setState({comments_motion:t})}),900)},a.handleClickOpen=function(e,t){return a.setState({open:!0,comment:t,cid:e})},a.handleClose=function(e,t){return a.setState({open:!1,comment:"",cid:""})},a.handleCommentChange=function(e){return a.setState({comment:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.setState({comment:""});var t=e.target.comment.value,n=a.props.db_profile[0].uid,r=a.props.location.state.post.post.pid,o=a.props.db_profile[0].username,l={comment:t,post_id:r,user_id:n,username:o},s={cid:54356,comment:t,user_id:n,author:o,date_created:"Just Now"};_.a.post("/api/posts/comment_to_db",l).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),window.scroll({top:0,lef:0,behavior:"smooth"}),a.handleCommentSubmit(s)},a.handleUpdate=function(){var e=a.state.comment,t=a.state.cid,n=a.props.db_profile[0].uid,r=a.props.location.state.post.post.pid,o=a.props.db_profile[0].username,l={cid:t,comment:e,post_id:r,user_id:n,username:o},s={cid:t,comment:e,post_id:r,user_id:n,author:o,date_created:"Just Now",isEdited:!0};console.log(s),_.a.put("/api/put/comment_to_db",l).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),a.handleCommentUpdate(s)},a.handleDelete=function(){var e=a.state.cid;_.a.delete("/api/delete/comment",{data:{cid:e}}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),a.handleCommentDelete(e)},a.handleLikes=function(){var e=a.props.db_profile[0].uid,t={uid:e,post_id:a.props.location.state.post.post.pid};console.log(a.props.location),_.a.put("/api/put/likes",t).then(!a.state.like_user_ids.includes(e)&&a.state.like_post?a.setState({likes:a.state.likes+1}):null).then(a.setState({like_post:!1})).catch((function(e){return console.log(e)}))},a.state={open:!1,comment:"",cid:"",opacity:0,delete_comment_id:0,comments_arr:[],comments_motion:[],cur_user_id:null,likes:a.props.location.state.post.post.likes,like_user_ids:a.props.location.state.post.post.like_user_id,like_post:!0},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;_.a.get("/api/get/all_post_comments",{params:{post_id:this.props.location.state.post.post.pid}}).then((function(t){return e.props.set_comments(t.data)})).then((function(){return e.add_comments_to_state(e.props.comments)})).catch((function(e){return console.log(e)})),this.handleTransition()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h2",null,"Post"),r.a.createElement("h4",null,this.props.location.state.post.post.title),r.a.createElement("p",null,this.props.location.state.post.post.body),r.a.createElement("p",null,this.props.location.state.post.post.author),r.a.createElement("button",{style:{cursor:"pointer"},onClick:this.props.isAuthenticated?function(){return e.handleLikes()}:function(){return k.replace("/signup")}},r.a.createElement("i",{className:"material-icons"}," thumb_up"),r.a.createElement("small",{className:"notification-num-showpost"},this.state.likes))),r.a.createElement("div",null,r.a.createElement("h2",null,"All Comments:"),this.props.comments?this.state.comments_motion.map((function(t){return r.a.createElement(e.RenderComments,{comment:t,cur_user_id:e.props.db_profile[0].uid,key:t.cid})})):null),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(z.a,{id:"comment",label:"Comment",margin:"normal"}),r.a.createElement("br",null),console.log(this.props),this.props.isAuthenticated?r.a.createElement(y.a,{type:"submit",color:"primary",variant:"contained"},"Submit"):r.a.createElement(O.a,{to:"/signup"},r.a.createElement(y.a,{color:"primary",variant:"contained"},"Sign Up to Comment")))),r.a.createElement("div",null,r.a.createElement(D.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(M.a,{id:"alert-dialog-title"},"Edit Comment"),r.a.createElement(x.a,null,r.a.createElement(w.a,{id:"alert-dialog-description"},r.a.createElement("input",{type:"text",value:this.state.comment,onChange:this.handleCommentChange})),r.a.createElement(A.a,null,r.a.createElement(y.a,{onClick:function(){e.handleUpdate(),e.handleClose()}},"Agree"),r.a.createElement(y.a,{onClick:function(){return e.handleClose()}},"Cancel"),r.a.createElement(y.a,{onClick:function(){e.handleDelete(),e.handleClose()}},"Delete"))))))}}]),n}(a.Component),te=Object(f.b)((function(e){return{comments:e.posts_reducer.comments,db_profile:e.auth_reducer.db_profile,isAuthenticated:e.auth_reducer.is_authenticated}}),(function(e){return{set_comments:function(t){return e({type:"FETCH_POST_COMMENTS",payload:t})}}}))(ee),ne=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleTitleChange=function(e){a.setState({title:e.target.value})},a.handleBodyChange=function(e){a.setState({body:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t=a.props.db_profile[0].uid,n=a.props.db_profile[0].username,r=a.props.location.state.post.post.pid,o={title:e.target.title.value,body:e.target.body.value,pid:r,uid:t,username:n};console.log(o),_.a.put("/api/put/post",o).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})).then(setTimeout((function(){return k.replace("/profile")}),700))},a.state={title:"",body:""},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.setState({title:this.props.location.state.post.post.title,body:this.props.location.state.post.post.body})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(z.a,{id:"title",label:"title",margin:"normal",value:this.state.title,onChange:this.handleTitleChange}),r.a.createElement("br",null),r.a.createElement(z.a,{id:"body",label:"body",multiline:!0,rows:"4",margin:"normal",value:this.state.body,onChange:this.handleBodyChange}),r.a.createElement(y.a,{type:"submit",variant:"outlined",color:"secondary"},"Submit")),r.a.createElement(y.a,{onClick:function(){return k.goBack()}},"Cancel"))}}]),n}(a.Component),ae=Object(f.b)((function(e){return{db_profile:e.auth_reducer.db_profile}}),{})(ne),re=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).RenderPosts=function(e){return r.a.createElement("div",{className:"CardStyles"},r.a.createElement(R.a,null,r.a.createElement(P.a,{title:r.a.createElement(O.a,{to:{pathname:"/post/"+e.post.pid,state:{post:e}}},e.post.title),subheader:r.a.createElement("div",{className:"FlexColumn"},r.a.createElement("div",{className:"FlexRow"},q()(e.post.date_created).format("MMMM Do, YYYY | h:mm a")),r.a.createElement("div",{className:"FlexRow"},"By: ",e.post.author),r.a.createElement("div",{className:"FlexRow"},r.a.createElement("i",{className:"material-icons"},"thumb_up"),r.a.createElement("div",{className:"notification-num-allposts"}," ",e.post.likes," ")))}),r.a.createElement("br",null),r.a.createElement(T.a,null,r.a.createElement("span",{style:{overflow:"hidden"}}," ",e.post.body," "))))},e.RenderProfile=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"FlexRow"},r.a.createElement("h1",null,e.profile.username)),r.a.createElement("div",{className:"FlexRow"},r.a.createElement(O.a,{to:{pathname:"/send_message/",state:{props:e}}},r.a.createElement(y.a,{variant:"contained",color:"secondary",type:"submit"},"Send Message"))))},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.location);var t=this.props.location.state.post.post.author;_.a.get("/api/get/other_user_profile_from_db",{params:{username:t}}).then((function(t){return e.props.set_profile(t.data)})).catch((function(e){return console.error(e)})),_.a.get("/api/get/other_user_posts_from_db",{params:{username:t}}).then((function(t){return e.props.set_db_posts(t.data)})).catch((function(e){return console.error(e)})),window.scrollTo({top:0,left:0})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"FlexRow"},this.props.user_profile?r.a.createElement(this.RenderProfile,{profile:this.props.user_profile[0]}):null),r.a.createElement("div",null,r.a.createElement("h3",null,"Lasted activity:"),r.a.createElement("div",null,this.props.user_posts?this.props.user_posts.map((function(t){return r.a.createElement("div",null,r.a.createElement(e.RenderPosts,{key:t.pid,post:t}),r.a.createElement("br",null))})):null)))}}]),n}(a.Component),oe=Object(f.b)((function(e){return{user_profile:e.user_reducer.other_user_db_profile,user_posts:e.user_reducer.db_other_user_posts}}),(function(e){return{set_db_posts:function(t){return e(function(e){return{type:"SET_OTHER_USER_DB_POSTS",payload:e}}(t))},set_profile:function(t){return e(function(e){return{type:"SET_OTHER_USER_DB_PROFILE",payload:e}}(t))}}}))(re),le=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(t){t.preventDefault();var n=e.props.location.state.props.profile.username,a={message_sender:e.props.db_profile[0].username,message_to:n,message_title:t.target.title.value,message_body:t.target.body.value};_.a.post("/api/post/message_to_db",a).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})).then(setTimeout((function(){k.replace("/")}),400))},e}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{action:"",onSubmit:this.handleSubmit},r.a.createElement(z.a,{id:"title",label:"Title",margin:"normal"}),r.a.createElement("br",null),r.a.createElement(z.a,{id:"body",label:"body",multiline:!0,rows:"4",margin:"normal"}),r.a.createElement("br",null),r.a.createElement(y.a,{type:"submit",variant:"outlined",color:"secondary"},"Submit"),r.a.createElement(y.a,{variant:"outlined",color:"primary",onClick:function(){return k.replace("/")}},"Cancel")))}}]),n}(a.Component),se=Object(f.b)((function(e){return{db_profile:e.auth_reducer.db_profile}}),(function(e){return{}}))(le),ce=n(173),ie=n(175),ue=n(172),pe=n(174),me=n(171),de=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).RenderMessages=function(t){var n=t.message;return r.a.createElement(me.a,null,r.a.createElement(ue.a,null,r.a.createElement("p",null,"From: ",n.message_sender),r.a.createElement("p",null,"Title: ",n.message_title),r.a.createElement("p",null,"From: ",n.message_body),r.a.createElement("small",null,t.message.date_created),r.a.createElement(O.a,{to:{pathname:"/reply_to_message",state:{props:t}}},r.a.createElement(y.a,{variant:"contained",color:"primary"},"Reply")),r.a.createElement(y.a,{variant:"outlined",color:"primary",onClick:function(){return e.deleteMessage(t.message.mid)}},"Delete"),r.a.createElement(y.a,{variant:"outlined",color:"secondary",onClick:function(){return k.goBack()}},"Cancel")))},e.deleteMessage=function(e){_.a.delete("/api/delete/user_messages",{data:{mid:e}}).then((function(e){return console.log(e)})).catch((function(e){console.log(e)})).then((function(){return setTimeout((function(){k.replace("/")}),700)}))},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.db_profile[0].username;_.a.get("/api/get/user_messages",{params:{username:t}}).then((function(t){return e.props.set_user_messages(t.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(ce.a,null,r.a.createElement(pe.a,null,r.a.createElement(me.a,null,r.a.createElement(ue.a,null,"Messages"))),r.a.createElement(ie.a,null,this.props.user_messages?this.props.user_messages.map((function(t){return r.a.createElement(e.RenderMessages,{key:t.mid,message:t})})):null)))}}]),n}(a.Component),he=Object(f.b)((function(e){return{db_profile:e.auth_reducer.db_profile,user_messages:e.user_reducer.user_messages}}),(function(e){return{set_user_messages:function(t){return e(function(e){return{type:"SET_USER_MESSAGES",payload:e}}(t))}}}))(de),_e=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(t){t.preventDefault(),console.log(e.props);var n=e.props.location.state.props.message.message_sender,a={message_sender:e.props.db_profile[0].username,message_to:n,message_title:t.target.title.value,message_body:t.target.body.value};_.a.post("/api/post/message_to_db",a).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})).then(setTimeout((function(){k.replace("/")}),400))},e}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Message:"),r.a.createElement("div",{className:"FlexColumn"},r.a.createElement("div",null,r.a.createElement("p",null,this.props.location.state.props.message.message_title)),r.a.createElement("div",null,r.a.createElement("p",null,this.props.location.state.props.message.message_body)),r.a.createElement("div",null,r.a.createElement("p",null,"By: ",this.props.location.state.props.message.message_sender))),r.a.createElement("form",{action:"",onSubmit:this.handleSubmit},r.a.createElement(z.a,{id:"title",label:"Title",margin:"normal"}),r.a.createElement("br",null),r.a.createElement(z.a,{id:"body",label:"body",multiline:!0,rows:"4",margin:"normal"}),r.a.createElement("br",null),r.a.createElement(y.a,{type:"submit",variant:"outlined",color:"secondary"},"Submit"),r.a.createElement(y.a,{variant:"outlined",color:"primary",onClick:function(){return k.replace("/")}},"Cancel")))}}]),n}(a.Component),fe=Object(f.b)((function(e){return{db_profile:e.auth_reducer.db_profile}}),(function(e){return{}}))(_e),Ee=n(85),be=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).sendProfileToDb=function(t){var n=t;_.a.post("api/posts/user_profile_to_db",n).then(_.a.get("api/get/user_profile_from_db",{params:{email:t.profile.email}}).then((function(t){return e.props.setDbProfile(t.data)})))},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated()?(this.props.loginSuccess(),this.props.addProfile(this.props.auth.userProfile),this.sendProfileToDb(this.props.auth.userProfile),k.replace("/")):(this.props.loginFailure(),this.props.removeProfile(),this.props.removeDbProfile(),k.replace("/"))}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),n}(a.Component),ge=Object(f.b)((function(e){return{}}),(function(e){return{loginSuccess:function(){return e({type:"LOGIN_SUCCESS"})},loginFailure:function(){return e({type:"LOGIN_FAILURE"})},addProfile:function(t){return e(b(t))},removeProfile:function(){return e({type:"REMOVE_PROFILE"})},setDbProfile:function(t){return e({type:"SET_DB_PROFILE",payload:t})},removeDbProfile:function(){return e({type:"REMOVE_DB_PROFILE"})}}}))(be),ve=n(7),Oe=new function e(){var t=this;Object(u.a)(this,e),this.login=function(){t.auth0.authorize()},this.handAuth=function(){t.auth0.parseHash((function(e,n){if(n){localStorage.setItem("access_token",n.accessToken),localStorage.setItem("id_token",n.idToken);var a=JSON.stringify(1e3*n.expiresIn+(new Date).getTime());localStorage.setItem("expiresAt",a),t.getProfile(),setTimeout((function(){k.replace("/auth_check")}),700)}else console.log(e)}))},this.getAccessToken=function(){return localStorage.getItem("access_token")?localStorage.getItem("access_token"):null},this.getProfile=function(){var e=t.getAccessToken();e&&t.auth0.client.userInfo(e,(function(e,n){n&&(t.userProfile={profile:n})}))},this.logout=function(){localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expiresAt"),setTimeout((function(){k.replace("/auth_check")}),200)},this.isAuthenticated=function(){var e=JSON.parse(localStorage.getItem("expiresAt"));return(new Date).getTime()<e},this.auth0=new Ee.a.WebAuth({domain:"quangminhit94.auth0.com",clientID:"Ru77tV6TPmNvvi3GSMV3g981973RV7Oc",redirectUri:"http://3.14.143.161/callback",responseType:"token id_token",scope:"openid profile email"}),this.userProfile={}},ye=function(e){var t=e.component,n=e.auth;return r.a.createElement(ve.b,{render:function(e){return!0===n.isAuthenticated()?r.a.createElement(t,Object.assign({auth:n},e)):r.a.createElement(ve.a,{to:{pathname:"/signup"}})}})},Se=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;Oe.isAuthenticated()?(this.props.login_success(),Oe.getProfile((function(){e.props.add_profile(Oe.userProfile)}))):(this.props.login_failure(),this.props.remove_profile())}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ve.c,{history:k},r.a.createElement("div",null,r.a.createElement(C,{auth:Oe}),r.a.createElement(ve.d,null,r.a.createElement(ve.b,{exact:!0,path:"/form1",component:U}),r.a.createElement(ve.b,{exact:!0,path:"/container1",render:function(){return r.a.createElement(v,{auth:Oe})}}),r.a.createElement(ve.b,{path:"/auth_check",render:function(){return r.a.createElement(ge,{auth:Oe})}}),r.a.createElement(ve.b,{path:"/redirect",component:H}),r.a.createElement(ve.b,{path:"/user/:name",component:oe}),r.a.createElement(ye,{path:"/send_message",auth:Oe,component:se}),r.a.createElement(ye,{path:"/show_messages/:id",auth:Oe,component:he}),r.a.createElement(ye,{path:"/reply_to_message",auth:Oe,component:fe}),r.a.createElement(ve.b,{path:"/posts",component:X}),r.a.createElement(ve.b,{path:"/post/:pid",component:te}),r.a.createElement(ve.b,{path:"/edit_post/:pid",component:ae}),r.a.createElement(ve.b,{path:"/add_post",component:$}),r.a.createElement(ve.b,{path:"/signup",render:function(e){return r.a.createElement(Y,Object.assign({auth:Oe},e))}}),r.a.createElement(ve.b,{path:"/callback",render:function(e){return function(e){e.location.hash&&Oe.handAuth()}(e),r.a.createElement(L,null)}}),r.a.createElement(ve.b,{path:"/list_item/:id",component:V}),r.a.createElement(ye,{path:"/private_route",auth:Oe,component:B}),r.a.createElement(ye,{path:"/profile",auth:Oe,component:N})))))}}]),n}(a.Component);var Ce=Object(f.b)(null,(function(e){return{login_success:function(){return e({type:"LOGIN_SUCCESS"})},login_failure:function(){return e({type:"LOGIN_FAILURE"})},add_profile:function(t){return e(b(t))},remove_profile:function(){return e({type:"REMOVE_PROFILE"})}}}))(Se),je=_.a.create({baseURL:"https://jsonplaceholder.typicode.com"}),ke=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={hello:null},e.fetchDataUsingFetch=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){return console.table(e)})).catch((function(e){return console.error(e)}));case 2:case"end":return e.stop()}}),e)}))),e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.renderHelloUsingAxios()}},{key:"renderHelloUsingAxios",value:function(){var e=this;_.a.get("/hello").then((function(t){return e.setState({hello:t.data})})).catch((function(e){return console.error(e)}))}},{key:"renderFromJsonPlaceholder",value:function(){je.get("/posts").then((function(e){return console.log(e.data)})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.hello?r.a.createElement("div",null,this.state.hello):null,r.a.createElement("br",null),"React",r.a.createElement(Ce,null))}}]),n}(a.Component),Re=n(6),Te={is_authenticated:!1,profile:null,db_profile:null},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"LOGIN_SUCCESS":return Object(Re.a)(Object(Re.a)({},e),{},{is_authenticated:!0});case"LOGIN_FAILURE":return Object(Re.a)(Object(Re.a)({},e),{},{is_authenticated:!1});case"ADD_PROFILE":return Object(Re.a)(Object(Re.a)({},e),{},{profile:a});case"REMOVE_PROFILE":return Object(Re.a)(Object(Re.a)({},e),{},{profile:null});case"SET_DB_PROFILE":return Object(Re.a)(Object(Re.a)({},e),{},{db_profile:a});case"REMOVE_DB_PROFILE":return Object(Re.a)(Object(Re.a)({},e),{},{db_profile:null});default:return e}},De={user_text:"test",other_user_db_profile:null,db_other_user_posts:[],user_messages:[]},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"USER_INPUT":return Object(Re.a)(Object(Re.a)({},e),{},{user_text:a});case"SET_OTHER_USER_DB_PROFILE":return Object(Re.a)(Object(Re.a)({},e),{},{other_user_db_profile:a});case"REMOVE_OTHER_USER_DB_PROFILE":return Object(Re.a)(Object(Re.a)({},e),{},{other_user_db_profile:null});case"SET_OTHER_USER_DB_POSTS":return Object(Re.a)(Object(Re.a)({},e),{},{db_other_user_posts:a});case"REMOVE_OTHER_USER_DB_POSTS":return Object(Re.a)(Object(Re.a)({},e),{},{db_other_user_posts:[]});case"SET_USER_MESSAGES":return Object(Re.a)(Object(Re.a)({},e),{},{user_messages:a});case"REMOVE_USER_MESSAGES":return Object(Re.a)(Object(Re.a)({},e),{},{user_messages:[]});default:return e}},xe={posts:[],comments:[],user_posts:[],search_posts:[]},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"FETCH_DB_POSTS":return Object(Re.a)(Object(Re.a)({},e),{},{posts:a});case"REMOVE_DB_POSTS":return Object(Re.a)(Object(Re.a)({},e),{},{posts:[]});case"FETCH_USER_POSTS":return Object(Re.a)(Object(Re.a)({},e),{},{user_posts:a});case"REMOVE_USER_POSTS":return Object(Re.a)(Object(Re.a)({},e),{},{user_posts:[]});case"SEARCH_POSTS_SUCCESS":return Object(Re.a)(Object(Re.a)({},e),{},{search_posts:a});case"SEARCH_POSTS_FAILURE":return Object(Re.a)(Object(Re.a)({},e),{},{search_posts:[]});case"FETCH_POST_COMMENTS":return Object(Re.a)(Object(Re.a)({},e),{},{comments:a});case"REMOVE_POST_COMMENTS":return Object(Re.a)(Object(Re.a)({},e),{},{comments:[]});default:return e}},Me=n(31),Fe=Object(Me.combineReducers)({auth_reducer:Pe,user_reducer:Ae,posts_reducer:we}),Ne=n(86);var Ie=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return void console.log(t)}}(),Ue=Object(Me.createStore)(Fe,Ie,Object(Ne.composeWithDevTools)(Object(Me.applyMiddleware)()));Ue.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){console.log(n)}}(Ue.getState())})),l.a.render(r.a.createElement(f.a,{store:Ue},r.a.createElement(ke,null)),document.getElementById("root"))},80:function(e,t,n){},98:function(e,t,n){e.exports=n(128)}},[[98,1,2]]]);
//# sourceMappingURL=main.7b434cab.chunk.js.map