// Compiled by ClojureScript 1.11.60 {:optimizations :whitespace}
goog.provide('idiom_instructor.core');
goog.require('cljs.core');
goog.require('idiom_instructor.i');
goog.require('clojure.edn');
goog.require('cljs.pprint');
goog.require('clojure.browser.dom');
idiom_instructor.core.fire = (function idiom_instructor$core$fire(){
var idiom_area = document.getElementById("idiom_area");
var origin = clojure.edn.read_string.call(null,clojure.browser.dom.get_value.call(null,document.getElementById("origin_area")));
var applied = clojure.edn.read_string.call(null,clojure.browser.dom.get_value.call(null,document.getElementById("applied_area")));
var idiom = idiom_instructor.i.instruct_idiom.call(null,origin,applied);
clojure.browser.dom.remove_children.call(null,"idiom_area");

return clojure.browser.dom.append.call(null,idiom_area,clojure.browser.dom.element.call(null,(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__3357_3361 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__3358_3362 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__3359_3363 = true;
var _STAR_print_fn_STAR__temp_val__3360_3364 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__3359_3363);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__3360_3364);

try{cljs.pprint.pprint.call(null,new cljs.core.Keyword(null,"vis","vis",1600557322).cljs$core$IFn$_invoke$arity$1(idiom));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__3358_3362);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__3357_3361);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})()));
});
