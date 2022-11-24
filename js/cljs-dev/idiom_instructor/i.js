// Compiled by ClojureScript 1.11.60 {:optimizations :whitespace}
goog.provide('idiom_instructor.i');
goog.require('cljs.core');
goog.require('idiom_instructor.known_pattern');
idiom_instructor.i.apply_safe = (function idiom_instructor$i$apply_safe(f,col,vis,lazy_QMARK_){
try{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"res","res",-1395007879),f.call(null,col),new cljs.core.Keyword(null,"lazy?","lazy?",2035907855),lazy_QMARK_,new cljs.core.Keyword(null,"vis","vis",1600557322),vis], null);
}catch (e5152){var ex = e5152;
return null;
}});
idiom_instructor.i.instruct_known_idiom = (function idiom_instructor$i$instruct_known_idiom(origin,applied){
var G__5153 = idiom_instructor.known_pattern.known_patterns;
var G__5153__$1 = (((G__5153 == null))?null:cljs.core.keep.call(null,(function (p__5154){
var vec__5155 = p__5154;
var f = cljs.core.nth.call(null,vec__5155,(0),null);
var vis = cljs.core.nth.call(null,vec__5155,(1),null);
var lazy_QMARK_ = cljs.core.nth.call(null,vec__5155,(2),null);
var temp__5720__auto__ = idiom_instructor.i.apply_safe.call(null,f,origin,vis,lazy_QMARK_);
if(cljs.core.truth_(temp__5720__auto__)){
var ans = temp__5720__auto__;
var and__5043__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"res","res",-1395007879).cljs$core$IFn$_invoke$arity$1(ans),applied);
if(and__5043__auto__){
return ans;
} else {
return and__5043__auto__;
}
} else {
return null;
}
}),G__5153));
var G__5153__$2 = (((G__5153__$1 == null))?null:cljs.core.filter.call(null,cljs.core.identity,G__5153__$1));
if((G__5153__$2 == null)){
return null;
} else {
return cljs.core.first.call(null,G__5153__$2);
}
});
idiom_instructor.i.instruct_idiom = (function idiom_instructor$i$instruct_idiom(origin,applied){
var or__5045__auto__ = idiom_instructor.i.instruct_known_idiom.call(null,origin,applied);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vis","vis",1600557322),(new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),(new cljs.core.List(null,applied,null,(1),null)),(2),null)),(3),null)),new cljs.core.Keyword(null,"lazy?","lazy?",2035907855),false], null);
}
});
