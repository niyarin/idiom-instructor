// Compiled by ClojureScript 1.11.60 {:optimizations :whitespace}
goog.provide('idiom_instructor.known_pattern');
goog.require('cljs.core');
goog.require('idiom_instructor.macro');
idiom_instructor.known_pattern.decompose_expr = (function idiom_instructor$known_pattern$decompose_expr(expr){
var temp__5720__auto__ = (function (){var and__5043__auto__ = (expr instanceof cljs.core.Keyword);
if(and__5043__auto__){
var or__5045__auto__ = cljs.core.re_matches.call(null,/([^-]*)-([^-]*)/,cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),(1)));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto____$1 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"red","red",-969428204),null,new cljs.core.Keyword(null,"blue","blue",-622100620),null,new cljs.core.Keyword(null,"purple","purple",-876021126),null], null), null).call(null,expr);
if(cljs.core.truth_(and__5043__auto____$1)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,expr,null], null);
} else {
return and__5043__auto____$1;
}
}
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var vec__2163 = temp__5720__auto__;
var _ = cljs.core.nth.call(null,vec__2163,(0),null);
var color = cljs.core.nth.call(null,vec__2163,(1),null);
var shape = cljs.core.nth.call(null,vec__2163,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,color),cljs.core.keyword.call(null,shape)], null);
} else {
return null;
}
});
idiom_instructor.known_pattern.construct_expr = (function idiom_instructor$known_pattern$construct_expr(color,shape){
if(cljs.core.truth_(color)){
return cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((color instanceof cljs.core.Keyword))?cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),(1)):color)),(cljs.core.truth_(shape)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((shape instanceof cljs.core.Keyword))?cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape),(1)):shape))].join(''):"")].join(''));
} else {
return null;
}
});
idiom_instructor.known_pattern.make_color_change_pattern_fn = (function idiom_instructor$known_pattern$make_color_change_pattern_fn(pattern){
return (function (expr){
var temp__5718__auto__ = idiom_instructor.known_pattern.decompose_expr.call(null,expr);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__2166 = temp__5718__auto__;
var color = cljs.core.nth.call(null,vec__2166,(0),null);
var shape = cljs.core.nth.call(null,vec__2166,(1),null);
return idiom_instructor.known_pattern.construct_expr.call(null,pattern.call(null,color),shape);
} else {
return expr;
}
});
});
idiom_instructor.known_pattern.add_blue = idiom_instructor.known_pattern.make_color_change_pattern_fn.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"purple","purple",-876021126)], null));
idiom_instructor.known_pattern.remove_blue = idiom_instructor.known_pattern.make_color_change_pattern_fn.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"blue","blue",-622100620),null,new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"red","red",-969428204)], null));
idiom_instructor.known_pattern.decompose_expr.call(null,new cljs.core.Keyword(null,"blue","blue",-622100620));
idiom_instructor.known_pattern.add_red = idiom_instructor.known_pattern.make_color_change_pattern_fn.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"purple","purple",-876021126)], null));
idiom_instructor.known_pattern.remove_red = idiom_instructor.known_pattern.make_color_change_pattern_fn.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"purple","purple",-876021126)], null));
idiom_instructor.known_pattern.contain_blue_QMARK_ = (function idiom_instructor$known_pattern$contain_blue_QMARK_(expr){
var temp__5720__auto__ = idiom_instructor.known_pattern.decompose_expr.call(null,expr);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__2169 = temp__5720__auto__;
var color = cljs.core.nth.call(null,vec__2169,(0),null);
var shape = cljs.core.nth.call(null,vec__2169,(1),null);
return cljs.core.boolean$.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blue","blue",-622100620),null,new cljs.core.Keyword(null,"purple","purple",-876021126),null], null), null).call(null,color));
} else {
return null;
}
});
idiom_instructor.known_pattern.contain_red_QMARK_ = (function idiom_instructor$known_pattern$contain_red_QMARK_(expr){
var temp__5720__auto__ = idiom_instructor.known_pattern.decompose_expr.call(null,expr);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__2172 = temp__5720__auto__;
var color = cljs.core.nth.call(null,vec__2172,(0),null);
var shape = cljs.core.nth.call(null,vec__2172,(1),null);
return cljs.core.boolean$.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"red","red",-969428204),null,new cljs.core.Keyword(null,"purple","purple",-876021126),null], null), null).call(null,color));
} else {
return null;
}
});
idiom_instructor.known_pattern.generate_update_key_patterns = (function idiom_instructor$known_pattern$generate_update_key_patterns(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (INPUT){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__2175){
var vec__2176 = p__2175;
var k = cljs.core.nth.call(null,vec__2176,(0),null);
var v = cljs.core.nth.call(null,vec__2176,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[idiom_instructor.known_pattern.add_blue.call(null,k),v],null));
}),INPUT));
}),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"vector","vector",-751469611,null),cljs.core.list(new cljs.core.Symbol(null,"add-blue","add-blue",422289562,null),new cljs.core.Symbol(null,"k","k",-505765866,null)),new cljs.core.Symbol(null,"v","v",1661996586,null)))),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentArrayMap.EMPTY))),false],null)),(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (INPUT){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__2179){
var vec__2180 = p__2179;
var k = cljs.core.nth.call(null,vec__2180,(0),null);
var v = cljs.core.nth.call(null,vec__2180,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[idiom_instructor.known_pattern.remove_blue.call(null,k),v],null));
}),INPUT));
}),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"vector","vector",-751469611,null),cljs.core.list(new cljs.core.Symbol(null,"remove-blue","remove-blue",1597491763,null),new cljs.core.Symbol(null,"k","k",-505765866,null)),new cljs.core.Symbol(null,"v","v",1661996586,null)))),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentArrayMap.EMPTY))),false],null)),(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (INPUT){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__2183){
var vec__2184 = p__2183;
var k = cljs.core.nth.call(null,vec__2184,(0),null);
var v = cljs.core.nth.call(null,vec__2184,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[idiom_instructor.known_pattern.add_red.call(null,k),v],null));
}),INPUT));
}),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"vector","vector",-751469611,null),cljs.core.list(new cljs.core.Symbol(null,"add-red","add-red",-1880434583,null),new cljs.core.Symbol(null,"k","k",-505765866,null)),new cljs.core.Symbol(null,"v","v",1661996586,null)))),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentArrayMap.EMPTY))),false],null)),(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (INPUT){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__2187){
var vec__2188 = p__2187;
var k = cljs.core.nth.call(null,vec__2188,(0),null);
var v = cljs.core.nth.call(null,vec__2188,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[idiom_instructor.known_pattern.remove_red.call(null,k),v],null));
}),INPUT));
}),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"vector","vector",-751469611,null),cljs.core.list(new cljs.core.Symbol(null,"remove-red","remove-red",-322673412,null),new cljs.core.Symbol(null,"k","k",-505765866,null)),new cljs.core.Symbol(null,"v","v",1661996586,null)))),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentArrayMap.EMPTY))),false],null))], null);
});
idiom_instructor.known_pattern.generate_update_vals_patterns = (function idiom_instructor$known_pattern$generate_update_vals_patterns(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (INPUT){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.second,cljs.core.map.call(null,(function (p__2191){
var vec__2192 = p__2191;
var k = cljs.core.nth.call(null,vec__2192,(0),null);
var v = cljs.core.nth.call(null,vec__2192,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,idiom_instructor.known_pattern.remove_blue.call(null,v)],null));
}),INPUT)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"k","k",-505765866,null),cljs.core.list(new cljs.core.Symbol(null,"remove-blue","remove-blue",1597491763,null),new cljs.core.Symbol(null,"v","v",1661996586,null))))),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),new cljs.core.Symbol(null,"second","second",1195829517,null)),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentArrayMap.EMPTY))),false],null))], null);
});
idiom_instructor.known_pattern.generate_mapcat_patterns = (function idiom_instructor$known_pattern$generate_mapcat_patterns(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (INPUT){
return cljs.core.mapcat.call(null,cljs.core.val,INPUT);
}),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null)], null),cljs.core.list(new cljs.core.Symbol(null,"mapcat","mapcat",-601348859,null),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null))),false],null))], null);
});
idiom_instructor.known_pattern.generate_filter_patterns = (function idiom_instructor$known_pattern$generate_filter_patterns(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (INPUT){
return cljs.core.filter.call(null,idiom_instructor.known_pattern.contain_blue_QMARK_,INPUT);
}),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null)], null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),new cljs.core.Symbol(null,"contain-blue?","contain-blue?",-779915243,null),new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null))),true],null)),(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (INPUT){
return cljs.core.filter.call(null,idiom_instructor.known_pattern.contain_red_QMARK_,INPUT);
}),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null)], null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),new cljs.core.Symbol(null,"contain-red?","contain-red?",-411492869,null),new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null))),true],null)),(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (INPUT){
return cljs.core.filter.call(null,cljs.core.coll_QMARK_,INPUT);
}),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null)], null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null))),true],null)),(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (INPUT){
return cljs.core.filter.call(null,cljs.core.odd_QMARK_,INPUT);
}),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null)], null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null))),true],null)),(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (INPUT){
return cljs.core.filter.call(null,cljs.core.even_QMARK_,INPUT);
}),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null)], null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null))),true],null))], null);
});
idiom_instructor.known_pattern.generate_zipmap_patterns = (function idiom_instructor$known_pattern$generate_zipmap_patterns(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (INPUT){
return cljs.core.zipmap.call(null,cljs.core.first.call(null,INPUT),cljs.core.second.call(null,INPUT));
}),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null)], null),cljs.core.list(new cljs.core.Symbol(null,"zipmap","zipmap",-690049687,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null)),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null)))),false],null))], null);
});
idiom_instructor.known_pattern.generate_distinct_patterns = (function idiom_instructor$known_pattern$generate_distinct_patterns(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (INPUT){
return cljs.core.distinct.call(null,INPUT);
}),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null)], null),cljs.core.list(new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null))),false],null))], null);
});
idiom_instructor.known_pattern.generate_reductions_patterns = (function idiom_instructor$known_pattern$generate_reductions_patterns(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (INPUT){
return cljs.core.reductions.call(null,cljs.core._PLUS_,INPUT);
}),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null)], null),cljs.core.list(new cljs.core.Symbol(null,"reductions","reductions",549963952,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null))),false],null))], null);
});
idiom_instructor.known_pattern.generate_flat_patterns = (function idiom_instructor$known_pattern$generate_flat_patterns(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (INPUT){
return cljs.core.flatten.call(null,INPUT);
}),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null)], null),cljs.core.list(new cljs.core.Symbol(null,"flatten","flatten",-1441633353,null),new cljs.core.Symbol(null,"INPUT","INPUT",239922791,null))),false],null))], null);
});
idiom_instructor.known_pattern.known_patterns = cljs.core.concat.call(null,idiom_instructor.known_pattern.generate_update_key_patterns.call(null),idiom_instructor.known_pattern.generate_filter_patterns.call(null),idiom_instructor.known_pattern.generate_zipmap_patterns.call(null),idiom_instructor.known_pattern.generate_reductions_patterns.call(null),idiom_instructor.known_pattern.generate_flat_patterns.call(null),idiom_instructor.known_pattern.generate_update_vals_patterns.call(null),idiom_instructor.known_pattern.generate_distinct_patterns.call(null),idiom_instructor.known_pattern.generate_mapcat_patterns.call(null));
