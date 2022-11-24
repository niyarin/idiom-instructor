// Compiled by ClojureScript 1.11.60 {:optimizations :whitespace}
goog.provide('cljs.core.logic');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.walk');
cljs.core.logic._STAR_logic_dbs_STAR_ = cljs.core.PersistentVector.EMPTY;

/**
 * @interface
 */
cljs.core.logic.IUnifyTerms = function(){};

var cljs$core$logic$IUnifyTerms$_unify_terms$dyn_2383 = (function (u,v,s){
var x__5393__auto__ = (((u == null))?null:u);
var m__5394__auto__ = (cljs.core.logic._unify_terms[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,u,v,s);
} else {
var m__5392__auto__ = (cljs.core.logic._unify_terms["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,u,v,s);
} else {
throw cljs.core.missing_protocol.call(null,"IUnifyTerms.-unify-terms",u);
}
}
});
cljs.core.logic._unify_terms = (function cljs$core$logic$_unify_terms(u,v,s){
if((((!((u == null)))) && ((!((u.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 == null)))))){
return u.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3(u,v,s);
} else {
return cljs$core$logic$IUnifyTerms$_unify_terms$dyn_2383.call(null,u,v,s);
}
});


/**
 * @interface
 */
cljs.core.logic.IUnifyWithNil = function(){};

var cljs$core$logic$IUnifyWithNil$_unify_with_nil$dyn_2384 = (function (v,u,s){
var x__5393__auto__ = (((v == null))?null:v);
var m__5394__auto__ = (cljs.core.logic._unify_with_nil[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,v,u,s);
} else {
var m__5392__auto__ = (cljs.core.logic._unify_with_nil["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,v,u,s);
} else {
throw cljs.core.missing_protocol.call(null,"IUnifyWithNil.-unify-with-nil",v);
}
}
});
cljs.core.logic._unify_with_nil = (function cljs$core$logic$_unify_with_nil(v,u,s){
if((((!((v == null)))) && ((!((v.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3 == null)))))){
return v.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3(v,u,s);
} else {
return cljs$core$logic$IUnifyWithNil$_unify_with_nil$dyn_2384.call(null,v,u,s);
}
});


/**
 * @interface
 */
cljs.core.logic.IUnifyWithObject = function(){};

var cljs$core$logic$IUnifyWithObject$_unify_with_object$dyn_2385 = (function (v,u,s){
var x__5393__auto__ = (((v == null))?null:v);
var m__5394__auto__ = (cljs.core.logic._unify_with_object[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,v,u,s);
} else {
var m__5392__auto__ = (cljs.core.logic._unify_with_object["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,v,u,s);
} else {
throw cljs.core.missing_protocol.call(null,"IUnifyWithObject.-unify-with-object",v);
}
}
});
cljs.core.logic._unify_with_object = (function cljs$core$logic$_unify_with_object(v,u,s){
if((((!((v == null)))) && ((!((v.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3 == null)))))){
return v.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3(v,u,s);
} else {
return cljs$core$logic$IUnifyWithObject$_unify_with_object$dyn_2385.call(null,v,u,s);
}
});


/**
 * @interface
 */
cljs.core.logic.IUnifyWithLVar = function(){};

var cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$dyn_2386 = (function (v,u,s){
var x__5393__auto__ = (((v == null))?null:v);
var m__5394__auto__ = (cljs.core.logic._unify_with_lvar[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,v,u,s);
} else {
var m__5392__auto__ = (cljs.core.logic._unify_with_lvar["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,v,u,s);
} else {
throw cljs.core.missing_protocol.call(null,"IUnifyWithLVar.-unify-with-lvar",v);
}
}
});
cljs.core.logic._unify_with_lvar = (function cljs$core$logic$_unify_with_lvar(v,u,s){
if((((!((v == null)))) && ((!((v.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3 == null)))))){
return v.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3(v,u,s);
} else {
return cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$dyn_2386.call(null,v,u,s);
}
});


/**
 * @interface
 */
cljs.core.logic.IUnifyWithLSeq = function(){};

var cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$dyn_2387 = (function (v,u,s){
var x__5393__auto__ = (((v == null))?null:v);
var m__5394__auto__ = (cljs.core.logic._unify_with_lseq[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,v,u,s);
} else {
var m__5392__auto__ = (cljs.core.logic._unify_with_lseq["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,v,u,s);
} else {
throw cljs.core.missing_protocol.call(null,"IUnifyWithLSeq.-unify-with-lseq",v);
}
}
});
cljs.core.logic._unify_with_lseq = (function cljs$core$logic$_unify_with_lseq(v,u,s){
if((((!((v == null)))) && ((!((v.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3 == null)))))){
return v.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3(v,u,s);
} else {
return cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$dyn_2387.call(null,v,u,s);
}
});


/**
 * @interface
 */
cljs.core.logic.IUnifyWithSequential = function(){};

var cljs$core$logic$IUnifyWithSequential$_unify_with_seq$dyn_2388 = (function (v,u,s){
var x__5393__auto__ = (((v == null))?null:v);
var m__5394__auto__ = (cljs.core.logic._unify_with_seq[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,v,u,s);
} else {
var m__5392__auto__ = (cljs.core.logic._unify_with_seq["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,v,u,s);
} else {
throw cljs.core.missing_protocol.call(null,"IUnifyWithSequential.-unify-with-seq",v);
}
}
});
cljs.core.logic._unify_with_seq = (function cljs$core$logic$_unify_with_seq(v,u,s){
if((((!((v == null)))) && ((!((v.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3 == null)))))){
return v.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3(v,u,s);
} else {
return cljs$core$logic$IUnifyWithSequential$_unify_with_seq$dyn_2388.call(null,v,u,s);
}
});


/**
 * @interface
 */
cljs.core.logic.IUnifyWithMap = function(){};

var cljs$core$logic$IUnifyWithMap$_unify_with_map$dyn_2389 = (function (v,u,s){
var x__5393__auto__ = (((v == null))?null:v);
var m__5394__auto__ = (cljs.core.logic._unify_with_map[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,v,u,s);
} else {
var m__5392__auto__ = (cljs.core.logic._unify_with_map["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,v,u,s);
} else {
throw cljs.core.missing_protocol.call(null,"IUnifyWithMap.-unify-with-map",v);
}
}
});
cljs.core.logic._unify_with_map = (function cljs$core$logic$_unify_with_map(v,u,s){
if((((!((v == null)))) && ((!((v.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 == null)))))){
return v.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3(v,u,s);
} else {
return cljs$core$logic$IUnifyWithMap$_unify_with_map$dyn_2389.call(null,v,u,s);
}
});


/**
 * @interface
 */
cljs.core.logic.IReifyTerm = function(){};

var cljs$core$logic$IReifyTerm$_reify_term$dyn_2390 = (function (v,s){
var x__5393__auto__ = (((v == null))?null:v);
var m__5394__auto__ = (cljs.core.logic._reify_term[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,v,s);
} else {
var m__5392__auto__ = (cljs.core.logic._reify_term["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,v,s);
} else {
throw cljs.core.missing_protocol.call(null,"IReifyTerm.-reify-term",v);
}
}
});
cljs.core.logic._reify_term = (function cljs$core$logic$_reify_term(v,s){
if((((!((v == null)))) && ((!((v.cljs$core$logic$IReifyTerm$_reify_term$arity$2 == null)))))){
return v.cljs$core$logic$IReifyTerm$_reify_term$arity$2(v,s);
} else {
return cljs$core$logic$IReifyTerm$_reify_term$dyn_2390.call(null,v,s);
}
});


/**
 * @interface
 */
cljs.core.logic.IWalkTerm = function(){};

var cljs$core$logic$IWalkTerm$_walk_term$dyn_2391 = (function (v,s){
var x__5393__auto__ = (((v == null))?null:v);
var m__5394__auto__ = (cljs.core.logic._walk_term[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,v,s);
} else {
var m__5392__auto__ = (cljs.core.logic._walk_term["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,v,s);
} else {
throw cljs.core.missing_protocol.call(null,"IWalkTerm.-walk-term",v);
}
}
});
cljs.core.logic._walk_term = (function cljs$core$logic$_walk_term(v,s){
if((((!((v == null)))) && ((!((v.cljs$core$logic$IWalkTerm$_walk_term$arity$2 == null)))))){
return v.cljs$core$logic$IWalkTerm$_walk_term$arity$2(v,s);
} else {
return cljs$core$logic$IWalkTerm$_walk_term$dyn_2391.call(null,v,s);
}
});


/**
 * @interface
 */
cljs.core.logic.IOccursCheckTerm = function(){};

var cljs$core$logic$IOccursCheckTerm$_occurs_check_term$dyn_2392 = (function (v,x,s){
var x__5393__auto__ = (((v == null))?null:v);
var m__5394__auto__ = (cljs.core.logic._occurs_check_term[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,v,x,s);
} else {
var m__5392__auto__ = (cljs.core.logic._occurs_check_term["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,v,x,s);
} else {
throw cljs.core.missing_protocol.call(null,"IOccursCheckTerm.-occurs-check-term",v);
}
}
});
cljs.core.logic._occurs_check_term = (function cljs$core$logic$_occurs_check_term(v,x,s){
if((((!((v == null)))) && ((!((v.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3 == null)))))){
return v.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3(v,x,s);
} else {
return cljs$core$logic$IOccursCheckTerm$_occurs_check_term$dyn_2392.call(null,v,x,s);
}
});


/**
 * @interface
 */
cljs.core.logic.IBuildTerm = function(){};

var cljs$core$logic$IBuildTerm$_build_term$dyn_2393 = (function (u,s){
var x__5393__auto__ = (((u == null))?null:u);
var m__5394__auto__ = (cljs.core.logic._build_term[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,u,s);
} else {
var m__5392__auto__ = (cljs.core.logic._build_term["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,u,s);
} else {
throw cljs.core.missing_protocol.call(null,"IBuildTerm.-build-term",u);
}
}
});
cljs.core.logic._build_term = (function cljs$core$logic$_build_term(u,s){
if((((!((u == null)))) && ((!((u.cljs$core$logic$IBuildTerm$_build_term$arity$2 == null)))))){
return u.cljs$core$logic$IBuildTerm$_build_term$arity$2(u,s);
} else {
return cljs$core$logic$IBuildTerm$_build_term$dyn_2393.call(null,u,s);
}
});


/**
 * @interface
 */
cljs.core.logic.IBind = function(){};

var cljs$core$logic$IBind$_bind$dyn_2394 = (function (this$,g){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs.core.logic._bind[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,g);
} else {
var m__5392__auto__ = (cljs.core.logic._bind["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,g);
} else {
throw cljs.core.missing_protocol.call(null,"IBind.-bind",this$);
}
}
});
cljs.core.logic._bind = (function cljs$core$logic$_bind(this$,g){
if((((!((this$ == null)))) && ((!((this$.cljs$core$logic$IBind$_bind$arity$2 == null)))))){
return this$.cljs$core$logic$IBind$_bind$arity$2(this$,g);
} else {
return cljs$core$logic$IBind$_bind$dyn_2394.call(null,this$,g);
}
});


/**
 * @interface
 */
cljs.core.logic.IMPlus = function(){};

var cljs$core$logic$IMPlus$_mplus$dyn_2395 = (function (a,f){
var x__5393__auto__ = (((a == null))?null:a);
var m__5394__auto__ = (cljs.core.logic._mplus[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,a,f);
} else {
var m__5392__auto__ = (cljs.core.logic._mplus["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,a,f);
} else {
throw cljs.core.missing_protocol.call(null,"IMPlus.-mplus",a);
}
}
});
cljs.core.logic._mplus = (function cljs$core$logic$_mplus(a,f){
if((((!((a == null)))) && ((!((a.cljs$core$logic$IMPlus$_mplus$arity$2 == null)))))){
return a.cljs$core$logic$IMPlus$_mplus$arity$2(a,f);
} else {
return cljs$core$logic$IMPlus$_mplus$dyn_2395.call(null,a,f);
}
});


/**
 * @interface
 */
cljs.core.logic.ITake = function(){};

var cljs$core$logic$ITake$_take_STAR_$dyn_2396 = (function (a){
var x__5393__auto__ = (((a == null))?null:a);
var m__5394__auto__ = (cljs.core.logic._take_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,a);
} else {
var m__5392__auto__ = (cljs.core.logic._take_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,a);
} else {
throw cljs.core.missing_protocol.call(null,"ITake.-take*",a);
}
}
});
cljs.core.logic._take_STAR_ = (function cljs$core$logic$_take_STAR_(a){
if((((!((a == null)))) && ((!((a.cljs$core$logic$ITake$_take_STAR_$arity$1 == null)))))){
return a.cljs$core$logic$ITake$_take_STAR_$arity$1(a);
} else {
return cljs$core$logic$ITake$_take_STAR_$dyn_2396.call(null,a);
}
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.IPrintWithWriter}
*/
cljs.core.logic.Pair = (function (lhs,rhs){
this.lhs = lhs;
this.rhs = rhs;
this.cljs$lang$protocol_mask$partition0$ = 2149580818;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.logic.Pair.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return ((cljs.core._EQ_.call(null,self__.lhs,other.lhs)) && (cljs.core._EQ_.call(null,self__.rhs,other.rhs)));
}));

(cljs.core.logic.Pair.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (2);
}));

(cljs.core.logic.Pair.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,i){
var self__ = this;
var ___$1 = this;
var G__2397 = i;
switch (G__2397) {
case (0):
return self__.lhs;

break;
case (1):
return self__.rhs;

break;
default:
throw (new Error("Index out of bounds"));

}
}));

(cljs.core.logic.Pair.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,i,not_found){
var self__ = this;
var ___$1 = this;
var G__2398 = i;
switch (G__2398) {
case (0):
return self__.lhs;

break;
case (1):
return self__.rhs;

break;
default:
return not_found;

}
}));

(cljs.core.logic.Pair.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
return cljs.core._write.call(null,writer,["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.lhs)," . ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.rhs),")"].join(''));
}));

(cljs.core.logic.Pair.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"lhs","lhs",-1482353675,null),new cljs.core.Symbol(null,"rhs","rhs",1411174788,null)], null);
}));

(cljs.core.logic.Pair.cljs$lang$type = true);

(cljs.core.logic.Pair.cljs$lang$ctorStr = "cljs.core.logic/Pair");

(cljs.core.logic.Pair.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.logic/Pair");
}));

/**
 * Positional factory function for cljs.core.logic/Pair.
 */
cljs.core.logic.__GT_Pair = (function cljs$core$logic$__GT_Pair(lhs,rhs){
return (new cljs.core.logic.Pair(lhs,rhs));
});

cljs.core.logic.pair = (function cljs$core$logic$pair(lhs,rhs){
return (new cljs.core.logic.Pair(lhs,rhs));
});
cljs.core.logic.lvar_QMARK_ = (function cljs$core$logic$lvar_QMARK_(x){
return (x instanceof cljs.core.logic.LVar);
});

/**
 * @interface
 */
cljs.core.logic.ISubstitutions = function(){};

var cljs$core$logic$ISubstitutions$_occurs_check$dyn_2401 = (function (this$,u,v){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs.core.logic._occurs_check[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,u,v);
} else {
var m__5392__auto__ = (cljs.core.logic._occurs_check["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,u,v);
} else {
throw cljs.core.missing_protocol.call(null,"ISubstitutions.-occurs-check",this$);
}
}
});
cljs.core.logic._occurs_check = (function cljs$core$logic$_occurs_check(this$,u,v){
if((((!((this$ == null)))) && ((!((this$.cljs$core$logic$ISubstitutions$_occurs_check$arity$3 == null)))))){
return this$.cljs$core$logic$ISubstitutions$_occurs_check$arity$3(this$,u,v);
} else {
return cljs$core$logic$ISubstitutions$_occurs_check$dyn_2401.call(null,this$,u,v);
}
});

var cljs$core$logic$ISubstitutions$_ext$dyn_2402 = (function (this$,u,v){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs.core.logic._ext[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,u,v);
} else {
var m__5392__auto__ = (cljs.core.logic._ext["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,u,v);
} else {
throw cljs.core.missing_protocol.call(null,"ISubstitutions.-ext",this$);
}
}
});
cljs.core.logic._ext = (function cljs$core$logic$_ext(this$,u,v){
if((((!((this$ == null)))) && ((!((this$.cljs$core$logic$ISubstitutions$_ext$arity$3 == null)))))){
return this$.cljs$core$logic$ISubstitutions$_ext$arity$3(this$,u,v);
} else {
return cljs$core$logic$ISubstitutions$_ext$dyn_2402.call(null,this$,u,v);
}
});

var cljs$core$logic$ISubstitutions$_ext_no_check$dyn_2403 = (function (this$,u,v){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs.core.logic._ext_no_check[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,u,v);
} else {
var m__5392__auto__ = (cljs.core.logic._ext_no_check["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,u,v);
} else {
throw cljs.core.missing_protocol.call(null,"ISubstitutions.-ext-no-check",this$);
}
}
});
cljs.core.logic._ext_no_check = (function cljs$core$logic$_ext_no_check(this$,u,v){
if((((!((this$ == null)))) && ((!((this$.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3 == null)))))){
return this$.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3(this$,u,v);
} else {
return cljs$core$logic$ISubstitutions$_ext_no_check$dyn_2403.call(null,this$,u,v);
}
});

var cljs$core$logic$ISubstitutions$_walk$dyn_2404 = (function (this$,v){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs.core.logic._walk[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,v);
} else {
var m__5392__auto__ = (cljs.core.logic._walk["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,v);
} else {
throw cljs.core.missing_protocol.call(null,"ISubstitutions.-walk",this$);
}
}
});
cljs.core.logic._walk = (function cljs$core$logic$_walk(this$,v){
if((((!((this$ == null)))) && ((!((this$.cljs$core$logic$ISubstitutions$_walk$arity$2 == null)))))){
return this$.cljs$core$logic$ISubstitutions$_walk$arity$2(this$,v);
} else {
return cljs$core$logic$ISubstitutions$_walk$dyn_2404.call(null,this$,v);
}
});

var cljs$core$logic$ISubstitutions$_walk_STAR_$dyn_2405 = (function (this$,v){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs.core.logic._walk_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,v);
} else {
var m__5392__auto__ = (cljs.core.logic._walk_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,v);
} else {
throw cljs.core.missing_protocol.call(null,"ISubstitutions.-walk*",this$);
}
}
});
cljs.core.logic._walk_STAR_ = (function cljs$core$logic$_walk_STAR_(this$,v){
if((((!((this$ == null)))) && ((!((this$.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2 == null)))))){
return this$.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2(this$,v);
} else {
return cljs$core$logic$ISubstitutions$_walk_STAR_$dyn_2405.call(null,this$,v);
}
});

var cljs$core$logic$ISubstitutions$_unify$dyn_2406 = (function (this$,u,v){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs.core.logic._unify[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,u,v);
} else {
var m__5392__auto__ = (cljs.core.logic._unify["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,u,v);
} else {
throw cljs.core.missing_protocol.call(null,"ISubstitutions.-unify",this$);
}
}
});
cljs.core.logic._unify = (function cljs$core$logic$_unify(this$,u,v){
if((((!((this$ == null)))) && ((!((this$.cljs$core$logic$ISubstitutions$_unify$arity$3 == null)))))){
return this$.cljs$core$logic$ISubstitutions$_unify$arity$3(this$,u,v);
} else {
return cljs$core$logic$ISubstitutions$_unify$dyn_2406.call(null,this$,u,v);
}
});

var cljs$core$logic$ISubstitutions$_reify_lvar_name$dyn_2407 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.logic._reify_lvar_name[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,_);
} else {
var m__5392__auto__ = (cljs.core.logic._reify_lvar_name["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ISubstitutions.-reify-lvar-name",_);
}
}
});
cljs.core.logic._reify_lvar_name = (function cljs$core$logic$_reify_lvar_name(_){
if((((!((_ == null)))) && ((!((_.cljs$core$logic$ISubstitutions$_reify_lvar_name$arity$1 == null)))))){
return _.cljs$core$logic$ISubstitutions$_reify_lvar_name$arity$1(_);
} else {
return cljs$core$logic$ISubstitutions$_reify_lvar_name$dyn_2407.call(null,_);
}
});

var cljs$core$logic$ISubstitutions$_reify_STAR_$dyn_2408 = (function (this$,v){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs.core.logic._reify_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,v);
} else {
var m__5392__auto__ = (cljs.core.logic._reify_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,v);
} else {
throw cljs.core.missing_protocol.call(null,"ISubstitutions.-reify*",this$);
}
}
});
cljs.core.logic._reify_STAR_ = (function cljs$core$logic$_reify_STAR_(this$,v){
if((((!((this$ == null)))) && ((!((this$.cljs$core$logic$ISubstitutions$_reify_STAR_$arity$2 == null)))))){
return this$.cljs$core$logic$ISubstitutions$_reify_STAR_$arity$2(this$,v);
} else {
return cljs$core$logic$ISubstitutions$_reify_STAR_$dyn_2408.call(null,this$,v);
}
});

var cljs$core$logic$ISubstitutions$_reify$dyn_2409 = (function (this$,v){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs.core.logic._reify[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$,v);
} else {
var m__5392__auto__ = (cljs.core.logic._reify["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$,v);
} else {
throw cljs.core.missing_protocol.call(null,"ISubstitutions.-reify",this$);
}
}
});
cljs.core.logic._reify = (function cljs$core$logic$_reify(this$,v){
if((((!((this$ == null)))) && ((!((this$.cljs$core$logic$ISubstitutions$_reify$arity$2 == null)))))){
return this$.cljs$core$logic$ISubstitutions$_reify$arity$2(this$,v);
} else {
return cljs$core$logic$ISubstitutions$_reify$dyn_2409.call(null,this$,v);
}
});






cljs.core.logic.not_found = ({});
/**
 * Similar to Scheme assq, xs must be a List of Pairs
 */
cljs.core.logic.assq = (function cljs$core$logic$assq(k,xs){
var xs__$1 = cljs.core._seq.call(null,xs);
while(true){
if((xs__$1 == null)){
return cljs.core.logic.not_found;
} else {
var x = cljs.core._first.call(null,xs__$1);
var lhs = x.lhs;
if((k === lhs)){
return x.rhs;
} else {
var G__2412 = cljs.core._next.call(null,xs__$1);
xs__$1 = G__2412;
continue;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.logic.ITake}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.logic.IBind}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.logic.IMPlus}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.logic.ISubstitutions}
*/
cljs.core.logic.Substitutions = (function (s,c,_meta){
this.s = s;
this.c = c;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2149974016;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.logic.Substitutions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.logic.Substitutions(self__.s,self__.c,new_meta));
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return (((this$__$1 === o)) || ((((o instanceof cljs.core.logic.Substitutions)) && (cljs.core._EQ_.call(null,self__.s,o.s)))));
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer.call(null,self__.s,writer,opts);
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_reify_STAR_$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
var v__$1 = cljs.core.logic._walk.call(null,this$__$1,v);
return cljs.core.logic._reify_term.call(null,v__$1,this$__$1);
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_ext_no_check$arity$3 = (function (this$,u,v){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.logic.Substitutions(cljs.core.conj.call(null,self__.s,(new cljs.core.logic.Pair(u,v))),self__.c,self__._meta));
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_ext$arity$3 = (function (this$,u,v){
var self__ = this;
var this$__$1 = this;
if(((new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695).cljs$core$IFn$_invoke$arity$1(self__._meta)) && (cljs.core.logic._occurs_check.call(null,this$__$1,u,v)))){
return cljs.core.logic.fail.call(null,this$__$1);
} else {
return cljs.core.logic._ext_no_check.call(null,this$__$1,u,v);
}
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_walk$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
if(cljs.core.logic.lvar_QMARK_.call(null,v)){
var rhs = cljs.core.logic.assq.call(null,v,self__.s);
var vp = cljs.core.logic._walk.call(null,this$__$1,rhs);
if((cljs.core.logic.not_found === vp)){
return v;
} else {
return vp;
}
} else {
return v;

}
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_unify$arity$3 = (function (this$,u,v){
var self__ = this;
var this$__$1 = this;
if((u === v)){
return this$__$1;
} else {
var u__$1 = cljs.core.logic._walk.call(null,this$__$1,u);
var v__$1 = cljs.core.logic._walk.call(null,this$__$1,v);
if((u__$1 === v__$1)){
return this$__$1;
} else {
return cljs.core.logic._unify_terms.call(null,u__$1,v__$1,this$__$1);
}
}
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_walk_STAR_$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
var v__$1 = cljs.core.logic._walk.call(null,this$__$1,v);
return cljs.core.logic._walk_term.call(null,v__$1,this$__$1);
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_reify$arity$2 = (function (this$,v){
var self__ = this;
var this$__$1 = this;
var v__$1 = cljs.core.logic._walk_STAR_.call(null,this$__$1,v);
return cljs.core.logic._walk_STAR_.call(null,cljs.core.logic._reify_STAR_.call(null,cljs.core.logic.empty_s,v__$1),v__$1);
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_occurs_check$arity$3 = (function (this$,u,v){
var self__ = this;
var this$__$1 = this;
var v__$1 = cljs.core.logic._walk.call(null,this$__$1,v);
return cljs.core.logic._occurs_check_term.call(null,v__$1,u,this$__$1);
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$ISubstitutions$_reify_lvar_name$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.symbol.call(null,["_.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,self__.s))].join(''));
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$IBind$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){
var self__ = this;
var this$__$1 = this;
return g.call(null,this$__$1);
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$IMPlus$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.logic.choice.call(null,this$__$1,f);
}));

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$ITake$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(cljs.core.logic.Substitutions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
}));

(cljs.core.logic.Substitutions.cljs$lang$type = true);

(cljs.core.logic.Substitutions.cljs$lang$ctorStr = "cljs.core.logic/Substitutions");

(cljs.core.logic.Substitutions.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.logic/Substitutions");
}));

/**
 * Positional factory function for cljs.core.logic/Substitutions.
 */
cljs.core.logic.__GT_Substitutions = (function cljs$core$logic$__GT_Substitutions(s,c,_meta){
return (new cljs.core.logic.Substitutions(s,c,_meta));
});

cljs.core.logic.make_s = (function cljs$core$logic$make_s(var_args){
var G__2414 = arguments.length;
switch (G__2414) {
case 1:
return cljs.core.logic.make_s.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.logic.make_s.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.logic.make_s.cljs$core$IFn$_invoke$arity$1 = (function (s){
return (new cljs.core.logic.Substitutions(s,cljs.core.List.EMPTY,null));
}));

(cljs.core.logic.make_s.cljs$core$IFn$_invoke$arity$2 = (function (s,c){
return (new cljs.core.logic.Substitutions(s,c,null));
}));

(cljs.core.logic.make_s.cljs$lang$maxFixedArity = 2);

cljs.core.logic.empty_s = cljs.core.logic.make_s.call(null,cljs.core.List.EMPTY,null);
cljs.core.logic.subst_QMARK_ = (function cljs$core$logic$subst_QMARK_(x){
return (x instanceof cljs.core.logic.Substitutions);
});
cljs.core.logic.to_s = (function cljs$core$logic$to_s(v){
var s = cljs.core.reduce.call(null,(function (l,p__2416){
var vec__2417 = p__2416;
var k = cljs.core.nth.call(null,vec__2417,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__2417,(1),null);
return cljs.core.conj.call(null,l,cljs.core.logic.pair.call(null,k,v__$1));
}),cljs.core.List.EMPTY,v);
return cljs.core.logic.make_s.call(null,s);
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.logic.IUnifyWithObject}
 * @implements {cljs.core.logic.IUnifyWithNil}
 * @implements {cljs.core.logic.IUnifyWithLSeq}
 * @implements {cljs.core.logic.IUnifyTerms}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.logic.IWalkTerm}
 * @implements {cljs.core.logic.IOccursCheckTerm}
 * @implements {cljs.core.logic.IReifyTerm}
 * @implements {cljs.core.logic.IUnifyWithLVar}
 * @implements {cljs.core.logic.Object}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.logic.IUnifyWithSequential}
 * @implements {cljs.core.logic.IUnifyWithMap}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.logic.LVar = (function (name,meta){
this.name = name;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 2154168320;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.logic.LVar.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
}));

(cljs.core.logic.LVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._write.call(null,writer,["<lvar:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name),">"].join(''));
}));

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithMap$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic._ext.call(null,s,v__$1,u);
}));

(cljs.core.logic.LVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
}));

(cljs.core.logic.LVar.prototype.cljs$core$logic$IOccursCheckTerm$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LVar.prototype.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3 = (function (v,x,s){
var self__ = this;
var v__$1 = this;
return cljs.core._EQ_.call(null,cljs.core.logic._walk.call(null,s,v__$1),x);
}));

(cljs.core.logic.LVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._hash.call(null,self__.name);
}));

(cljs.core.logic.LVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
var and__5043__auto__ = (o instanceof cljs.core.logic.LVar);
if(and__5043__auto__){
var o__$1 = o;
return (self__.name === o__$1.name);
} else {
return and__5043__auto__;
}
}));

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLVar$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic._ext_no_check.call(null,s,u,v__$1);
}));

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithSequential$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic._ext.call(null,s,v__$1,u);
}));

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyTerms$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){
var self__ = this;
var u__$1 = this;
return cljs.core.logic._unify_with_lvar.call(null,v,u__$1,s);
}));

(cljs.core.logic.LVar.prototype.cljs$core$logic$IWalkTerm$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LVar.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){
var self__ = this;
var v__$1 = this;
return v__$1;
}));

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLSeq$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic._ext.call(null,s,v__$1,u);
}));

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithObject$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic._ext.call(null,s,v__$1,u);
}));

(cljs.core.logic.LVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.logic.LVar(self__.name,self__.meta));
}));

(cljs.core.logic.LVar.prototype.cljs$core$logic$IReifyTerm$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LVar.prototype.cljs$core$logic$IReifyTerm$_reify_term$arity$2 = (function (v,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic._ext.call(null,s,v__$1,cljs.core.logic._reify_lvar_name.call(null,s));
}));

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithNil$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic._ext_no_check.call(null,s,v__$1,u);
}));

(cljs.core.logic.LVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
}));

(cljs.core.logic.LVar.cljs$lang$type = true);

(cljs.core.logic.LVar.cljs$lang$ctorStr = "cljs.core.logic/LVar");

(cljs.core.logic.LVar.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.logic/LVar");
}));

/**
 * Positional factory function for cljs.core.logic/LVar.
 */
cljs.core.logic.__GT_LVar = (function cljs$core$logic$__GT_LVar(name,meta){
return (new cljs.core.logic.LVar(name,meta));
});

cljs.core.logic.lvar_sym_counter = cljs.core.atom.call(null,(0));
cljs.core.logic.lvar = (function cljs$core$logic$lvar(var_args){
var G__2421 = arguments.length;
switch (G__2421) {
case 0:
return cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"gen","gen",1783106829,null));
}));

(cljs.core.logic.lvar.cljs$core$IFn$_invoke$arity$1 = (function (name){
var name__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,cljs.core.logic.lvar_sym_counter,cljs.core.inc))].join('');
return (new cljs.core.logic.LVar(name__$1,null));
}));

(cljs.core.logic.lvar.cljs$lang$maxFixedArity = 1);


/**
 * @interface
 */
cljs.core.logic.LConsSeq = function(){};

var cljs$core$logic$LConsSeq$_lfirst$dyn_2423 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs.core.logic._lfirst[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$);
} else {
var m__5392__auto__ = (cljs.core.logic._lfirst["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"LConsSeq.-lfirst",this$);
}
}
});
cljs.core.logic._lfirst = (function cljs$core$logic$_lfirst(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$logic$LConsSeq$_lfirst$arity$1 == null)))))){
return this$.cljs$core$logic$LConsSeq$_lfirst$arity$1(this$);
} else {
return cljs$core$logic$LConsSeq$_lfirst$dyn_2423.call(null,this$);
}
});

var cljs$core$logic$LConsSeq$_lnext$dyn_2424 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (cljs.core.logic._lnext[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,this$);
} else {
var m__5392__auto__ = (cljs.core.logic._lnext["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"LConsSeq.-lnext",this$);
}
}
});
cljs.core.logic._lnext = (function cljs$core$logic$_lnext(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$logic$LConsSeq$_lnext$arity$1 == null)))))){
return this$.cljs$core$logic$LConsSeq$_lnext$arity$1(this$);
} else {
return cljs$core$logic$LConsSeq$_lnext$dyn_2424.call(null,this$);
}
});


cljs.core.logic.failed_QMARK_ = (function cljs$core$logic$failed_QMARK_(x){
return (x instanceof cljs.core.logic.Fail);
});
cljs.core.logic.lcons_QMARK_ = (function cljs$core$logic$lcons_QMARK_(x){
return (x instanceof cljs.core.logic.LCons);
});
cljs.core.logic.lcons_pr_seq = (function cljs$core$logic$lcons_pr_seq(x){
if(cljs.core.logic.lcons_QMARK_.call(null,x)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,cljs.core.logic._lfirst.call(null,x),cljs.core.logic.lcons_pr_seq.call(null,cljs.core.logic._lnext.call(null,x)));
}),null,null));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),(new cljs.core.List(null,x,null,(1),null)),(2),null));

}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.logic.IUnifyWithObject}
 * @implements {cljs.core.logic.IUnifyWithNil}
 * @implements {cljs.core.logic.IUnifyWithLSeq}
 * @implements {cljs.core.logic.IUnifyTerms}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.logic.IWalkTerm}
 * @implements {cljs.core.logic.LConsSeq}
 * @implements {cljs.core.logic.IOccursCheckTerm}
 * @implements {cljs.core.logic.IReifyTerm}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.logic.IUnifyWithSequential}
 * @implements {cljs.core.logic.IUnifyWithMap}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.logic.LCons = (function (a,d,meta){
this.a = a;
this.d = d;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 2149974016;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.logic.LCons.prototype.cljs$core$logic$LConsSeq$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LCons.prototype.cljs$core$logic$LConsSeq$_lfirst$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
}));

(cljs.core.logic.LCons.prototype.cljs$core$logic$LConsSeq$_lnext$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.d;
}));

(cljs.core.logic.LCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,cljs.core.logic.lcons_pr_seq.call(null,this$__$1));
}));

(cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithMap$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic.fail.call(null,s);
}));

(cljs.core.logic.LCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
}));

(cljs.core.logic.LCons.prototype.cljs$core$logic$IOccursCheckTerm$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LCons.prototype.cljs$core$logic$IOccursCheckTerm$_occurs_check_term$arity$3 = (function (v,x,s){
var self__ = this;
var v__$1 = this;
var v__$2 = v__$1;
var x__$1 = x;
var s__$1 = s;
while(true){
if(cljs.core.logic.lcons_QMARK_.call(null,v__$2)){
var or__5045__auto__ = cljs.core.logic._occurs_check.call(null,s__$1,x__$1,cljs.core.logic._lfirst.call(null,v__$2));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__2425 = cljs.core.logic._lnext.call(null,v__$2);
var G__2426 = x__$1;
var G__2427 = s__$1;
v__$2 = G__2425;
x__$1 = G__2426;
s__$1 = G__2427;
continue;
}
} else {
return cljs.core.logic._occurs_check.call(null,s__$1,x__$1,v__$2);
}
break;
}
}));

(cljs.core.logic.LCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (this$__$1 === o);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var and__5043__auto__ = (o instanceof cljs.core.logic.LCons);
if(and__5043__auto__){
var me = this$__$1;
var you = o;
while(true){
if((me == null)){
return (you == null);
} else {
if(cljs.core.logic.lvar_QMARK_.call(null,me)){
return true;
} else {
if(cljs.core.logic.lvar_QMARK_.call(null,you)){
return true;
} else {
if(((cljs.core.logic.lcons_QMARK_.call(null,me)) && (cljs.core.logic.lcons_QMARK_.call(null,you)))){
var mef = cljs.core.logic._lfirst.call(null,me);
var youf = cljs.core.logic._lfirst.call(null,you);
var and__5043__auto____$1 = ((cljs.core._EQ_.call(null,mef,youf)) || (((cljs.core.logic.lvar_QMARK_.call(null,mef)) || (cljs.core.logic.lvar_QMARK_.call(null,youf)))));
if(and__5043__auto____$1){
var G__2428 = cljs.core.logic._lnext.call(null,me);
var G__2429 = cljs.core.logic._lnext.call(null,you);
me = G__2428;
you = G__2429;
continue;
} else {
return and__5043__auto____$1;
}
} else {
return cljs.core._EQ_.call(null,me,you);

}
}
}
}
break;
}
} else {
return and__5043__auto__;
}
}
}));

(cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithSequential$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithSequential$_unify_with_seq$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic._unify_with_lseq.call(null,u,v__$1,s);
}));

(cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyTerms$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){
var self__ = this;
var u__$1 = this;
return cljs.core.logic._unify_with_lseq.call(null,v,u__$1,s);
}));

(cljs.core.logic.LCons.prototype.cljs$core$logic$IWalkTerm$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LCons.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic.lcons.call(null,cljs.core.logic._walk_STAR_.call(null,s,cljs.core.logic._lfirst.call(null,v__$1)),cljs.core.logic._walk_STAR_.call(null,s,cljs.core.logic._lnext.call(null,v__$1)));
}));

(cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithLSeq$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithLSeq$_unify_with_lseq$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
var u__$1 = u;
var v__$2 = v__$1;
var s__$1 = s;
while(true){
if(cljs.core.logic.lvar_QMARK_.call(null,u__$1)){
return cljs.core.logic._unify.call(null,s__$1,u__$1,v__$2);
} else {
if(cljs.core.logic.lvar_QMARK_.call(null,v__$2)){
return cljs.core.logic._unify.call(null,s__$1,v__$2,u__$1);
} else {
if(((cljs.core.logic.lcons_QMARK_.call(null,u__$1)) && (cljs.core.logic.lcons_QMARK_.call(null,v__$2)))){
var s__$2 = cljs.core.logic._unify.call(null,s__$1,cljs.core.logic._lfirst.call(null,u__$1),cljs.core.logic._lfirst.call(null,v__$2));
if((!(cljs.core.logic.failed_QMARK_.call(null,s__$2)))){
var G__2430 = cljs.core.logic._lnext.call(null,u__$1);
var G__2431 = cljs.core.logic._lnext.call(null,v__$2);
var G__2432 = s__$2;
u__$1 = G__2430;
v__$2 = G__2431;
s__$1 = G__2432;
continue;
} else {
return s__$2;
}
} else {
return cljs.core.logic._unify.call(null,s__$1,u__$1,v__$2);

}
}
}
break;
}
}));

(cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithObject$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithObject$_unify_with_object$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic.fail.call(null,s);
}));

(cljs.core.logic.LCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.logic.LCons(self__.a,self__.d,new_meta));
}));

(cljs.core.logic.LCons.prototype.cljs$core$logic$IReifyTerm$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LCons.prototype.cljs$core$logic$IReifyTerm$_reify_term$arity$2 = (function (v,s){
var self__ = this;
var v__$1 = this;
var v__$2 = v__$1;
var s__$1 = s;
while(true){
if(cljs.core.logic.lcons_QMARK_.call(null,v__$2)){
var G__2433 = cljs.core.logic._lnext.call(null,v__$2);
var G__2434 = cljs.core.logic._reify_STAR_.call(null,s__$1,cljs.core.logic._lfirst.call(null,v__$2));
v__$2 = G__2433;
s__$1 = G__2434;
continue;
} else {
return cljs.core.logic._reify_STAR_.call(null,s__$1,v__$2);
}
break;
}
}));

(cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithNil$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LCons.prototype.cljs$core$logic$IUnifyWithNil$_unify_with_nil$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic.fail.call(null,s);
}));

(cljs.core.logic.LCons.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
}));

(cljs.core.logic.LCons.cljs$lang$type = true);

(cljs.core.logic.LCons.cljs$lang$ctorStr = "cljs.core.logic/LCons");

(cljs.core.logic.LCons.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.logic/LCons");
}));

/**
 * Positional factory function for cljs.core.logic/LCons.
 */
cljs.core.logic.__GT_LCons = (function cljs$core$logic$__GT_LCons(a,d,meta){
return (new cljs.core.logic.LCons(a,d,meta));
});

/**
 * Constructs a sequence a with an improper tail d if d is a logic variable.
 */
cljs.core.logic.lcons = (function cljs$core$logic$lcons(a,d){
if(((cljs.core.coll_QMARK_.call(null,d)) || ((d == null)))){
return cljs.core.cons.call(null,a,cljs.core.seq.call(null,d));
} else {
return (new cljs.core.logic.LCons(a,d,null));
}
});
(cljs.core.logic.IUnifyTerms["null"] = true);

(cljs.core.logic._unify_terms["null"] = (function (u,v,s){
return cljs.core.logic._unify_with_nil.call(null,v,u,s);
}));

(cljs.core.logic.IUnifyTerms["_"] = true);

(cljs.core.logic._unify_terms["_"] = (function (u,v,s){
if(cljs.core.sequential_QMARK_.call(null,u)){
return cljs.core.logic._unify_with_seq.call(null,v,u,s);
} else {
return cljs.core.logic._unify_with_object.call(null,v,u,s);
}
}));

(cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyTerms$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){
var u__$1 = this;
return cljs.core.logic._unify_with_map.call(null,v,u__$1,s);
}));

(cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyTerms$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){
var u__$1 = this;
return cljs.core.logic._unify_with_map.call(null,v,u__$1,s);
}));
(cljs.core.logic.IUnifyWithNil["null"] = true);

(cljs.core.logic._unify_with_nil["null"] = (function (v,u,s){
return s;
}));

(cljs.core.logic.IUnifyWithNil["_"] = true);

(cljs.core.logic._unify_with_nil["_"] = (function (v,u,s){
return cljs.core.logic.fail.call(null,s);
}));
(cljs.core.logic.IUnifyWithObject["null"] = true);

(cljs.core.logic._unify_with_object["null"] = (function (v,u,s){
return cljs.core.logic.fail.call(null,s);
}));

(cljs.core.logic.IUnifyWithObject["_"] = true);

(cljs.core.logic._unify_with_object["_"] = (function (v,u,s){
if(cljs.core._EQ_.call(null,u,v)){
return s;
} else {
return cljs.core.logic.fail.call(null,s);
}
}));
(cljs.core.logic.IUnifyWithLVar["null"] = true);

(cljs.core.logic._unify_with_lvar["null"] = (function (v,u,s){
return cljs.core.logic._ext_no_check.call(null,s,u,v);
}));

(cljs.core.logic.IUnifyWithLVar["_"] = true);

(cljs.core.logic._unify_with_lvar["_"] = (function (v,u,s){
return cljs.core.logic._ext.call(null,s,u,v);
}));
(cljs.core.logic.IUnifyWithLSeq["null"] = true);

(cljs.core.logic._unify_with_lseq["null"] = (function (v,u,s){
return cljs.core.logic.fail.call(null,s);
}));

(cljs.core.logic.IUnifyWithLSeq["_"] = true);

(cljs.core.logic._unify_with_lseq["_"] = (function (v,u,s){
if(((cljs.core.sequential_QMARK_.call(null,v)) && ((!((v == null)))))){
var u__$1 = u;
var v__$1 = cljs.core._seq.call(null,v);
var s__$1 = s;
while(true){
if((!((v__$1 == null)))){
if(cljs.core.logic.lcons_QMARK_.call(null,u__$1)){
var s__$2 = cljs.core.logic._unify.call(null,s__$1,cljs.core.logic._lfirst.call(null,u__$1),cljs.core._first.call(null,v__$1));
if((!(cljs.core.logic.failed_QMARK_.call(null,s__$2)))){
var G__2435 = cljs.core.logic._lnext.call(null,u__$1);
var G__2436 = cljs.core._next.call(null,v__$1);
var G__2437 = s__$2;
u__$1 = G__2435;
v__$1 = G__2436;
s__$1 = G__2437;
continue;
} else {
return s__$2;
}
} else {
return cljs.core.logic._unify.call(null,s__$1,u__$1,v__$1);
}
} else {
if(cljs.core.logic.lvar_QMARK_.call(null,u__$1)){
return cljs.core.logic._unify.call(null,s__$1,u__$1,cljs.core.List.EMPTY);
} else {
return cljs.core.logic.fail.call(null,s__$1);
}
}
break;
}
} else {
return cljs.core.logic.fail.call(null,s);
}
}));
(cljs.core.logic.IUnifyWithSequential["null"] = true);

(cljs.core.logic._unify_with_seq["null"] = (function (v,u,s){
return cljs.core.logic.fail.call(null,s);
}));

(cljs.core.logic.IUnifyWithSequential["_"] = true);

(cljs.core.logic._unify_with_seq["_"] = (function (v,u,s){
if(((cljs.core.sequential_QMARK_.call(null,v)) && ((!((v == null)))))){
var u__$1 = cljs.core._seq.call(null,u);
var v__$1 = cljs.core._seq.call(null,v);
var s__$1 = s;
while(true){
if((!((u__$1 == null)))){
if((!((v__$1 == null)))){
var s__$2 = cljs.core.logic._unify.call(null,s__$1,cljs.core._first.call(null,u__$1),cljs.core._first.call(null,v__$1));
if((!(cljs.core.logic.failed_QMARK_.call(null,s__$2)))){
var G__2438 = cljs.core._next.call(null,u__$1);
var G__2439 = cljs.core._next.call(null,v__$1);
var G__2440 = s__$2;
u__$1 = G__2438;
v__$1 = G__2439;
s__$1 = G__2440;
continue;
} else {
return s__$2;
}
} else {
return cljs.core.logic.fail.call(null,s__$1);
}
} else {
if((!((v__$1 == null)))){
return cljs.core.logic.fail.call(null,s__$1);
} else {
return s__$1;
}
}
break;
}
} else {
return cljs.core.logic.fail.call(null,s);
}
}));
cljs.core.logic.unify_with_map_STAR_ = (function cljs$core$logic$unify_with_map_STAR_(v,u,s){
if((!((cljs.core.count.call(null,v) === cljs.core.count.call(null,u))))){
return cljs.core.logic.fail.call(null,s);
} else {
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,u));
var s__$1 = s;
while(true){
if(ks){
var kf = cljs.core.first.call(null,ks);
var vf = cljs.core.get.call(null,v,kf,cljs.core.logic.not_found);
if((vf === cljs.core.logic.not_found)){
return cljs.core.logic.fail.call(null,s__$1);
} else {
var s__$2 = cljs.core.logic._unify.call(null,s__$1,cljs.core.get.call(null,u,kf),vf);
if((!(cljs.core.logic.failed_QMARK_.call(null,s__$2)))){
var G__2441 = cljs.core.next.call(null,ks);
var G__2442 = s__$2;
ks = G__2441;
s__$1 = G__2442;
continue;
} else {
return cljs.core.logic.fail.call(null,s__$2);
}
}
} else {
return s__$1;
}
break;
}
}
});
(cljs.core.logic.IUnifyWithMap["null"] = true);

(cljs.core.logic._unify_with_map["null"] = (function (v,u,s){
return cljs.core.logic.fail.call(null,s);
}));

(cljs.core.logic.IUnifyWithMap["_"] = true);

(cljs.core.logic._unify_with_map["_"] = (function (v,u,s){
return cljs.core.logic.fail.call(null,s);
}));

(cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithMap$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){
var v__$1 = this;
return cljs.core.logic.unify_with_map_STAR_.call(null,v__$1,u,s);
}));

(cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithMap$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){
var v__$1 = this;
return cljs.core.logic.unify_with_map_STAR_.call(null,v__$1,u,s);
}));
(cljs.core.logic.IReifyTerm["null"] = true);

(cljs.core.logic._reify_term["null"] = (function (v,s){
return s;
}));

(cljs.core.logic.IReifyTerm["_"] = true);

(cljs.core.logic._reify_term["_"] = (function (v,s){
if(cljs.core.sequential_QMARK_.call(null,v)){
var v__$1 = v;
var s__$1 = s;
while(true){
if(cljs.core.seq.call(null,v__$1)){
var G__2443 = cljs.core.next.call(null,v__$1);
var G__2444 = cljs.core.logic._reify_STAR_.call(null,s__$1,cljs.core.first.call(null,v__$1));
v__$1 = G__2443;
s__$1 = G__2444;
continue;
} else {
return s__$1;
}
break;
}
} else {
return s;
}
}));
cljs.core.logic.walk_term_map_STAR_ = (function cljs$core$logic$walk_term_map_STAR_(v,s){
var v__$1 = cljs.core._seq.call(null,v);
var r = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((!((v__$1 == null)))){
var vec__2448 = cljs.core._first.call(null,v__$1);
var vfk = cljs.core.nth.call(null,vec__2448,(0),null);
var vfv = cljs.core.nth.call(null,vec__2448,(1),null);
var G__2451 = cljs.core._next.call(null,v__$1);
var G__2452 = cljs.core._assoc_BANG_.call(null,r,vfk,cljs.core.logic._walk_STAR_.call(null,s,vfv));
v__$1 = G__2451;
r = G__2452;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,r);
}
break;
}
});
(cljs.core.logic.IWalkTerm["null"] = true);

(cljs.core.logic._walk_term["null"] = (function (v,s){
return null;
}));

(cljs.core.logic.IWalkTerm["_"] = true);

(cljs.core.logic._walk_term["_"] = (function (v,s){
if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core.map.call(null,(function (p1__2453_SHARP_){
return cljs.core.logic._walk_STAR_.call(null,s,p1__2453_SHARP_);
}),v);
} else {
return v;
}
}));

(cljs.core.PersistentVector.prototype.cljs$core$logic$IWalkTerm$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){
var v__$1 = this;
var v__$2 = cljs.core._seq.call(null,v__$1);
var r = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if((!((v__$2 == null)))){
var G__2454 = cljs.core._next.call(null,v__$2);
var G__2455 = cljs.core._conj_BANG_.call(null,r,cljs.core.logic._walk_STAR_.call(null,s,cljs.core.first.call(null,v__$2)));
v__$2 = G__2454;
r = G__2455;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,r);
}
break;
}
}));

(cljs.core.PersistentHashMap.prototype.cljs$core$logic$IWalkTerm$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){
var v__$1 = this;
return cljs.core.logic.walk_term_map_STAR_.call(null,v__$1,s);
}));
(cljs.core.logic.IOccursCheckTerm["null"] = true);

(cljs.core.logic._occurs_check_term["null"] = (function (v,x,s){
return false;
}));

(cljs.core.logic.IOccursCheckTerm["_"] = true);

(cljs.core.logic._occurs_check_term["_"] = (function (v,x,s){
if(cljs.core.sequential_QMARK_.call(null,v)){
var v__$1 = cljs.core.seq.call(null,v);
var x__$1 = x;
var s__$1 = s;
while(true){
if((!((v__$1 == null)))){
var or__5045__auto__ = cljs.core.logic._occurs_check.call(null,s__$1,x__$1,cljs.core._first.call(null,v__$1));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__2456 = cljs.core._next.call(null,v__$1);
var G__2457 = x__$1;
var G__2458 = s__$1;
v__$1 = G__2456;
x__$1 = G__2457;
s__$1 = G__2458;
continue;
}
} else {
return false;
}
break;
}
} else {
return false;
}
}));
cljs.core.logic.mplus = (function cljs$core$logic$mplus(a,f){
if((((!((a == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === a.cljs$core$logic$IMPlus$))))?true:false):false)){
return cljs.core.logic._mplus.call(null,a,f);
} else {
return (new cljs.core.logic.Choice(a,f));
}
});
cljs.core.logic.take_STAR_ = (function cljs$core$logic$take_STAR_(x){
if((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$logic$ITake$))))?true:false):false)){
return cljs.core.logic._take_STAR_.call(null,x);
} else {
return (new cljs.core.List(null,x,null,(1),null));
}
});

/**
* @constructor
 * @implements {cljs.core.logic.ITake}
 * @implements {cljs.core.logic.IBind}
 * @implements {cljs.core.logic.IMPlus}
*/
cljs.core.logic.Choice = (function (a,f){
this.a = a;
this.f = f;
});
(cljs.core.logic.Choice.prototype.cljs$core$logic$IBind$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Choice.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){
var self__ = this;
var this$__$1 = this;
return cljs.core.logic.mplus.call(null,g.call(null,self__.a),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind.call(null,self__.f,g);
}))));
}));

(cljs.core.logic.Choice.prototype.cljs$core$logic$IMPlus$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Choice.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,fp){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.logic.Choice(self__.a,(new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus.call(null,fp.call(null),self__.f);
})))));
}));

(cljs.core.logic.Choice.prototype.cljs$core$logic$ITake$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Choice.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,self__.a,(new cljs.core.LazySeq(null,(function (){
return cljs.core.logic.take_STAR_.call(null,self__.f);
}),null,null)));
}),null,null));
}));

(cljs.core.logic.Choice.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null);
}));

(cljs.core.logic.Choice.cljs$lang$type = true);

(cljs.core.logic.Choice.cljs$lang$ctorStr = "cljs.core.logic/Choice");

(cljs.core.logic.Choice.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.logic/Choice");
}));

/**
 * Positional factory function for cljs.core.logic/Choice.
 */
cljs.core.logic.__GT_Choice = (function cljs$core$logic$__GT_Choice(a,f){
return (new cljs.core.logic.Choice(a,f));
});

cljs.core.logic.choice = (function cljs$core$logic$choice(a,f){
return (new cljs.core.logic.Choice(a,f));
});

/**
* @constructor
 * @implements {cljs.core.logic.ITake}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.logic.IBind}
 * @implements {cljs.core.logic.IMPlus}
*/
cljs.core.logic.Inc = (function (f){
this.f = f;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.logic.Inc.prototype.call = (function (self__){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.f.call(null);
}));

(cljs.core.logic.Inc.prototype.apply = (function (self__,args2461){
var self__ = this;
var self____$1 = this;
var args__5260__auto__ = cljs.core.aclone.call(null,args2461);
return self____$1.call.apply(self____$1,[self____$1].concat((((args__5260__auto__.length > (20)))?(function (){var G__2462 = args__5260__auto__.slice((0),(20));
G__2462.push(args__5260__auto__.slice((20)));

return G__2462;
})():args__5260__auto__)));
}));

(cljs.core.logic.Inc.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return self__.f.call(null);
}));

(cljs.core.logic.Inc.prototype.cljs$core$logic$IBind$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Inc.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.logic.Inc((function (){
var a = self__.f.call(null);
return cljs.core.logic._bind.call(null,a,g);
})));
}));

(cljs.core.logic.Inc.prototype.cljs$core$logic$IMPlus$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Inc.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,fp){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus.call(null,fp.call(null),this$__$1);
})));
}));

(cljs.core.logic.Inc.prototype.cljs$core$logic$ITake$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Inc.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.logic.take_STAR_.call(null,self__.f.call(null));
}),null,null));
}));

(cljs.core.logic.Inc.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null);
}));

(cljs.core.logic.Inc.cljs$lang$type = true);

(cljs.core.logic.Inc.cljs$lang$ctorStr = "cljs.core.logic/Inc");

(cljs.core.logic.Inc.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.logic/Inc");
}));

/**
 * Positional factory function for cljs.core.logic/Inc.
 */
cljs.core.logic.__GT_Inc = (function cljs$core$logic$__GT_Inc(f){
return (new cljs.core.logic.Inc(f));
});


/**
* @constructor
 * @implements {cljs.core.logic.ITake}
 * @implements {cljs.core.logic.IBind}
 * @implements {cljs.core.logic.IMPlus}
*/
cljs.core.logic.Fail = (function (a){
this.a = a;
});
(cljs.core.logic.Fail.prototype.cljs$core$logic$IBind$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Fail.prototype.cljs$core$logic$IBind$_bind$arity$2 = (function (this$,g){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(cljs.core.logic.Fail.prototype.cljs$core$logic$IMPlus$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Fail.prototype.cljs$core$logic$IMPlus$_mplus$arity$2 = (function (this$,fp){
var self__ = this;
var this$__$1 = this;
return fp;
}));

(cljs.core.logic.Fail.prototype.cljs$core$logic$ITake$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Fail.prototype.cljs$core$logic$ITake$_take_STAR_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.List.EMPTY;
}));

(cljs.core.logic.Fail.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null)], null);
}));

(cljs.core.logic.Fail.cljs$lang$type = true);

(cljs.core.logic.Fail.cljs$lang$ctorStr = "cljs.core.logic/Fail");

(cljs.core.logic.Fail.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.logic/Fail");
}));

/**
 * Positional factory function for cljs.core.logic/Fail.
 */
cljs.core.logic.__GT_Fail = (function cljs$core$logic$__GT_Fail(a){
return (new cljs.core.logic.Fail(a));
});

/**
 * A goal that always succeeds.
 */
cljs.core.logic.succeed = (function cljs$core$logic$succeed(a){
return a;
});
/**
 * A goal that always fails.
 */
cljs.core.logic.fail = (function cljs$core$logic$fail(a){
return (new cljs.core.logic.Fail(a));
});
cljs.core.logic.s_SHARP_ = cljs.core.logic.succeed;
cljs.core.logic.u_SHARP_ = cljs.core.logic.fail;

/**
 * @interface
 */
cljs.core.logic.IIfA = function(){};

var cljs$core$logic$IIfA$_ifa$dyn_2463 = (function (b,gs,c){
var x__5393__auto__ = (((b == null))?null:b);
var m__5394__auto__ = (cljs.core.logic._ifa[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,b,gs,c);
} else {
var m__5392__auto__ = (cljs.core.logic._ifa["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,b,gs,c);
} else {
throw cljs.core.missing_protocol.call(null,"IIfA.-ifa",b);
}
}
});
cljs.core.logic._ifa = (function cljs$core$logic$_ifa(b,gs,c){
if((((!((b == null)))) && ((!((b.cljs$core$logic$IIfA$_ifa$arity$3 == null)))))){
return b.cljs$core$logic$IIfA$_ifa$arity$3(b,gs,c);
} else {
return cljs$core$logic$IIfA$_ifa$dyn_2463.call(null,b,gs,c);
}
});


/**
 * @interface
 */
cljs.core.logic.IIfU = function(){};

var cljs$core$logic$IIfU$_ifu$dyn_2464 = (function (b,gs,c){
var x__5393__auto__ = (((b == null))?null:b);
var m__5394__auto__ = (cljs.core.logic._ifu[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,b,gs,c);
} else {
var m__5392__auto__ = (cljs.core.logic._ifu["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,b,gs,c);
} else {
throw cljs.core.missing_protocol.call(null,"IIfU.-ifu",b);
}
}
});
cljs.core.logic._ifu = (function cljs$core$logic$_ifu(b,gs,c){
if((((!((b == null)))) && ((!((b.cljs$core$logic$IIfU$_ifu$arity$3 == null)))))){
return b.cljs$core$logic$IIfU$_ifu$arity$3(b,gs,c);
} else {
return cljs$core$logic$IIfU$_ifu$dyn_2464.call(null,b,gs,c);
}
});

(cljs.core.logic.Fail.prototype.cljs$core$logic$IIfA$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Fail.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){
var b__$1 = this;
if(cljs.core.truth_(c)){
return cljs.core.force.call(null,c);
} else {
return null;
}
}));
(cljs.core.logic.Fail.prototype.cljs$core$logic$IIfU$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Fail.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){
var b__$1 = this;
if(cljs.core.truth_(c)){
return cljs.core.force.call(null,c);
} else {
return null;
}
}));
(cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfA$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){
var b__$1 = this;
var b__$2 = b__$1;
var G__2468 = gs;
var vec__2469 = G__2468;
var seq__2470 = cljs.core.seq.call(null,vec__2469);
var first__2471 = cljs.core.first.call(null,seq__2470);
var seq__2470__$1 = cljs.core.next.call(null,seq__2470);
var g0 = first__2471;
var gr = seq__2470__$1;
var b__$3 = b__$2;
var G__2468__$1 = G__2468;
while(true){
var b__$4 = b__$3;
var vec__2475 = G__2468__$1;
var seq__2476 = cljs.core.seq.call(null,vec__2475);
var first__2477 = cljs.core.first.call(null,seq__2476);
var seq__2476__$1 = cljs.core.next.call(null,seq__2476);
var g0__$1 = first__2477;
var gr__$1 = seq__2476__$1;
if(cljs.core.truth_(g0__$1)){
var temp__5720__auto__ = g0__$1.call(null,b__$4);
if(cljs.core.truth_(temp__5720__auto__)){
var b__$5 = temp__5720__auto__;
var G__2478 = b__$5;
var G__2479 = gr__$1;
b__$3 = G__2478;
G__2468__$1 = G__2479;
continue;
} else {
return null;
}
} else {
return b__$4;
}
break;
}
}));
(cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfU$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Substitutions.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){
var b__$1 = this;
var b__$2 = b__$1;
var G__2483 = gs;
var vec__2484 = G__2483;
var seq__2485 = cljs.core.seq.call(null,vec__2484);
var first__2486 = cljs.core.first.call(null,seq__2485);
var seq__2485__$1 = cljs.core.next.call(null,seq__2485);
var g0 = first__2486;
var gr = seq__2485__$1;
var b__$3 = b__$2;
var G__2483__$1 = G__2483;
while(true){
var b__$4 = b__$3;
var vec__2490 = G__2483__$1;
var seq__2491 = cljs.core.seq.call(null,vec__2490);
var first__2492 = cljs.core.first.call(null,seq__2491);
var seq__2491__$1 = cljs.core.next.call(null,seq__2491);
var g0__$1 = first__2492;
var gr__$1 = seq__2491__$1;
if(cljs.core.truth_(g0__$1)){
var temp__5720__auto__ = g0__$1.call(null,b__$4);
if(cljs.core.truth_(temp__5720__auto__)){
var b__$5 = temp__5720__auto__;
var G__2493 = b__$5;
var G__2494 = gr__$1;
b__$3 = G__2493;
G__2483__$1 = G__2494;
continue;
} else {
return null;
}
} else {
return b__$4;
}
break;
}
}));
(cljs.core.logic.Inc.prototype.cljs$core$logic$IIfA$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Inc.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){
var b__$1 = this;
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic._ifa.call(null,b__$1.call(null),gs,c);
})));
}));

(cljs.core.logic.Inc.prototype.cljs$core$logic$IIfU$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Inc.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){
var b__$1 = this;
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic._ifu.call(null,b__$1.call(null),gs,c);
})));
}));
(cljs.core.logic.Choice.prototype.cljs$core$logic$IIfA$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Choice.prototype.cljs$core$logic$IIfA$_ifa$arity$3 = (function (b,gs,c){
var b__$1 = this;
return cljs.core.reduce.call(null,cljs.core.logic._bind,b__$1,gs);
}));
(cljs.core.logic.Choice.prototype.cljs$core$logic$IIfU$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.Choice.prototype.cljs$core$logic$IIfU$_ifu$arity$3 = (function (b,gs,c){
var b__$1 = this;
return cljs.core.reduce.call(null,cljs.core.logic._bind,b__$1.a,gs);
}));
/**
 * A relation where a is nil
 */
cljs.core.logic.nilo = (function cljs$core$logic$nilo(a){
return (function (a__2108__auto__){
var temp__5718__auto__ = cljs.core.logic._unify.call(null,a__2108__auto__,null,a);
if(cljs.core.truth_(temp__5718__auto__)){
var b__2109__auto__ = temp__5718__auto__;
return b__2109__auto__;
} else {
return cljs.core.logic.fail.call(null,a__2108__auto__);
}
});
});
/**
 * A relation where a is the empty list
 */
cljs.core.logic.emptyo = (function cljs$core$logic$emptyo(a){
return (function (a__2108__auto__){
var temp__5718__auto__ = cljs.core.logic._unify.call(null,a__2108__auto__,cljs.core.List.EMPTY,a);
if(cljs.core.truth_(temp__5718__auto__)){
var b__2109__auto__ = temp__5718__auto__;
return b__2109__auto__;
} else {
return cljs.core.logic.fail.call(null,a__2108__auto__);
}
});
});
/**
 * A relation where l is a collection, such that a is the first of l 
 *   and d is the rest of l
 */
cljs.core.logic.conso = (function cljs$core$logic$conso(a,d,l){
return (function (a__2108__auto__){
var temp__5718__auto__ = cljs.core.logic._unify.call(null,a__2108__auto__,cljs.core.logic.lcons.call(null,a,d),l);
if(cljs.core.truth_(temp__5718__auto__)){
var b__2109__auto__ = temp__5718__auto__;
return b__2109__auto__;
} else {
return cljs.core.logic.fail.call(null,a__2108__auto__);
}
});
});
/**
 * A relation where l is a collection, such that a is the first of l
 */
cljs.core.logic.firsto = (function cljs$core$logic$firsto(l,a){
return (function (a__2120__auto__){
return (new cljs.core.logic.Inc((function (){
var d = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"d","d",-682293345,null));
return cljs.core.logic._bind.call(null,a__2120__auto__,cljs.core.logic.conso.call(null,a,d,l));
})));
});
});
/**
 * A relation where l is a collection, such that d is the rest of l
 */
cljs.core.logic.resto = (function cljs$core$logic$resto(l,d){
return (function (a__2120__auto__){
return (new cljs.core.logic.Inc((function (){
var a = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"a","a",-482876059,null));
return cljs.core.logic._bind.call(null,a__2120__auto__,(function (a__2108__auto__){
var temp__5718__auto__ = cljs.core.logic._unify.call(null,a__2108__auto__,cljs.core.logic.lcons.call(null,a,d),l);
if(cljs.core.truth_(temp__5718__auto__)){
var b__2109__auto__ = temp__5718__auto__;
return b__2109__auto__;
} else {
return cljs.core.logic.fail.call(null,a__2108__auto__);
}
}));
})));
});
});
/**
 * A relation where l is a collection, such that l contains x
 */
cljs.core.logic.membero = (function cljs$core$logic$membero(x,l){
return (function (a2495){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a2495,(function (a__2120__auto__){
return (new cljs.core.logic.Inc((function (){
var tail = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"tail","tail",494507963,null));
return cljs.core.logic._bind.call(null,a__2120__auto__,(function (a__2108__auto__){
var temp__5718__auto__ = cljs.core.logic._unify.call(null,a__2108__auto__,cljs.core.logic.lcons.call(null,x,tail),l);
if(cljs.core.truth_(temp__5718__auto__)){
var b__2109__auto__ = temp__5718__auto__;
return b__2109__auto__;
} else {
return cljs.core.logic.fail.call(null,a__2108__auto__);
}
}));
})));
})),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind.call(null,a2495,(function (a__2120__auto__){
return (new cljs.core.logic.Inc((function (){
var head = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"head","head",869147608,null));
var tail = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"tail","tail",494507963,null));
return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__2120__auto__,(function (a__2108__auto__){
var temp__5718__auto__ = cljs.core.logic._unify.call(null,a__2108__auto__,cljs.core.logic.lcons.call(null,head,tail),l);
if(cljs.core.truth_(temp__5718__auto__)){
var b__2109__auto__ = temp__5718__auto__;
return b__2109__auto__;
} else {
return cljs.core.logic.fail.call(null,a__2108__auto__);
}
})),cljs.core.logic.membero.call(null,x,tail));
})));
}));
}))));
})));
});
});
/**
 * A relation where x, y, and z are proper collections, 
 *   such that z is y appended to x
 */
cljs.core.logic.appendo = (function cljs$core$logic$appendo(x,y,z){
return (function (a2496){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic.mplus.call(null,cljs.core.logic._bind.call(null,a2496,(function (a__2120__auto__){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__2120__auto__,(function (a__2108__auto__){
var temp__5718__auto__ = cljs.core.logic._unify.call(null,a__2108__auto__,cljs.core.List.EMPTY,x);
if(cljs.core.truth_(temp__5718__auto__)){
var b__2109__auto__ = temp__5718__auto__;
return b__2109__auto__;
} else {
return cljs.core.logic.fail.call(null,a__2108__auto__);
}
})),(function (a__2120__auto____$1){
return (new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind.call(null,a__2120__auto____$1,(function (a__2108__auto__){
var temp__5718__auto__ = cljs.core.logic._unify.call(null,a__2108__auto__,y,z);
if(cljs.core.truth_(temp__5718__auto__)){
var b__2109__auto__ = temp__5718__auto__;
return b__2109__auto__;
} else {
return cljs.core.logic.fail.call(null,a__2108__auto__);
}
}));
})));
}));
})));
})),(new cljs.core.logic.Inc((function (){
return cljs.core.logic._bind.call(null,a2496,(function (a__2120__auto__){
return (new cljs.core.logic.Inc((function (){
var a = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"a","a",-482876059,null));
var d = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"d","d",-682293345,null));
return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__2120__auto__,(function (a__2108__auto__){
var temp__5718__auto__ = cljs.core.logic._unify.call(null,a__2108__auto__,cljs.core.logic.lcons.call(null,a,d),x);
if(cljs.core.truth_(temp__5718__auto__)){
var b__2109__auto__ = temp__5718__auto__;
return b__2109__auto__;
} else {
return cljs.core.logic.fail.call(null,a__2108__auto__);
}
})),(function (a__2120__auto____$1){
return (new cljs.core.logic.Inc((function (){
var r = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"r","r",1169147337,null));
return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__2120__auto____$1,(function (a__2108__auto__){
var temp__5718__auto__ = cljs.core.logic._unify.call(null,a__2108__auto__,cljs.core.logic.lcons.call(null,a,r),z);
if(cljs.core.truth_(temp__5718__auto__)){
var b__2109__auto__ = temp__5718__auto__;
return b__2109__auto__;
} else {
return cljs.core.logic.fail.call(null,a__2108__auto__);
}
})),cljs.core.logic.appendo.call(null,d,y,r));
})));
}));
})));
}));
}))));
})));
});
});
cljs.core.logic.prefix = (function cljs$core$logic$prefix(s,_LT_s){
if(cljs.core._EQ_.call(null,s,_LT_s)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.conj.call(null,cljs.core.logic.prefix.call(null,cljs.core.rest.call(null,s),_LT_s),cljs.core.first.call(null,s));
}
});

/**
 * @interface
 */
cljs.core.logic.IUnifyWithPMap = function(){};

var cljs$core$logic$IUnifyWithPMap$unify_with_pmap$dyn_2497 = (function (pmap,u,s){
var x__5393__auto__ = (((pmap == null))?null:pmap);
var m__5394__auto__ = (cljs.core.logic.unify_with_pmap[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,pmap,u,s);
} else {
var m__5392__auto__ = (cljs.core.logic.unify_with_pmap["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,pmap,u,s);
} else {
throw cljs.core.missing_protocol.call(null,"IUnifyWithPMap.unify-with-pmap",pmap);
}
}
});
cljs.core.logic.unify_with_pmap = (function cljs$core$logic$unify_with_pmap(pmap,u,s){
if((((!((pmap == null)))) && ((!((pmap.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3 == null)))))){
return pmap.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3(pmap,u,s);
} else {
return cljs$core$logic$IUnifyWithPMap$unify_with_pmap$dyn_2497.call(null,pmap,u,s);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.logic.IUnifyTerms}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.logic.IWalkTerm}
 * @implements {cljs.core.logic.IUnifyWithLVar}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.logic.IUnifyWithMap}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.logic.IUnifyWithPMap}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.logic.PMap = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.logic.PMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(cljs.core.logic.PMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k2499,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__2503 = k2499;
switch (G__2503) {
default:
return cljs.core.get.call(null,self__.__extmap,k2499,else__5346__auto__);

}
}));

(cljs.core.logic.PMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5366__auto__,p__2504){
var vec__2505 = p__2504;
var k__5367__auto__ = cljs.core.nth.call(null,vec__2505,(0),null);
var v__5368__auto__ = cljs.core.nth.call(null,vec__2505,(1),null);
return f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__);
}),init__5365__auto__,this__5363__auto____$1);
}));

(cljs.core.logic.PMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5359__auto__,pr_pair__5361__auto__,"#cljs.core.logic.PMap{",", ","}",opts__5360__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(cljs.core.logic.PMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__2498){
var self__ = this;
var G__2498__$1 = this;
return (new cljs.core.RecordIter((0),G__2498__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithMap$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
var ks = cljs.core.keys.call(null,v__$1);
var s__$1 = s;
while(true){
if(cljs.core.seq.call(null,ks)){
var kf = cljs.core.first.call(null,ks);
var uf = cljs.core.get.call(null,u,kf,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",85579791));
if(cljs.core._EQ_.call(null,uf,new cljs.core.Keyword("cljs.core.logic","not-found","cljs.core.logic/not-found",85579791))){
return cljs.core.logic.fail.call(null,s__$1);
} else {
var s__$2 = cljs.core.logic._unify.call(null,s__$1,cljs.core.get.call(null,v__$1,kf),uf);
if((!(cljs.core.logic.failed_QMARK_.call(null,s__$2)))){
var G__2513 = cljs.core.next.call(null,ks);
var G__2514 = s__$2;
ks = G__2513;
s__$1 = G__2514;
continue;
} else {
return s__$2;
}
}
} else {
return s__$1;
}
break;
}
}));

(cljs.core.logic.PMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.logic.PMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new cljs.core.logic.PMap(self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.logic.PMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.core.logic.PMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1505615244 ^ cljs.core.hash_unordered_coll.call(null,coll__5340__auto__));
}).call(null,this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(cljs.core.logic.PMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this2500,other2501){
var self__ = this;
var this2500__$1 = this;
return (((!((other2501 == null)))) && ((((this2500__$1.constructor === other2501.constructor)) && (cljs.core._EQ_.call(null,this2500__$1.__extmap,other2501.__extmap)))));
}));

(cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithLVar$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithLVar$_unify_with_lvar$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic._ext_no_check.call(null,s,u,v__$1);
}));

(cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyTerms$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyTerms$_unify_terms$arity$3 = (function (u,v,s){
var self__ = this;
var u__$1 = this;
return cljs.core.logic.unify_with_pmap.call(null,v,u__$1,s);
}));

(cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithPMap$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.PMap.prototype.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3 = (function (v,u,s){
var self__ = this;
var v__$1 = this;
return v__$1.cljs$core$logic$IUnifyWithMap$_unify_with_map$arity$3(null,u,s);
}));

(cljs.core.logic.PMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__5354__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new cljs.core.logic.PMap(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5354__auto__)),null));
}
}));

(cljs.core.logic.PMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k2499){
var self__ = this;
var this__5350__auto____$1 = this;
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k2499);
}));

(cljs.core.logic.PMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__2498){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__2508 = cljs.core.keyword_identical_QMARK_;
var expr__2509 = k__5352__auto__;
return (new cljs.core.logic.PMap(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5352__auto__,G__2498),null));
}));

(cljs.core.logic.PMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(cljs.core.logic.PMap.prototype.cljs$core$logic$IWalkTerm$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.PMap.prototype.cljs$core$logic$IWalkTerm$_walk_term$arity$2 = (function (v,s){
var self__ = this;
var v__$1 = this;
return cljs.core.logic.walk_term_map_STAR_.call(null,v__$1,s);
}));

(cljs.core.logic.PMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__2498){
var self__ = this;
var this__5342__auto____$1 = this;
return (new cljs.core.logic.PMap(G__2498,self__.__extmap,self__.__hash));
}));

(cljs.core.logic.PMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5349__auto__,(0)),cljs.core._nth.call(null,entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(cljs.core.logic.PMap.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cljs.core.logic.PMap.cljs$lang$type = true);

(cljs.core.logic.PMap.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"cljs.core.logic/PMap",null,(1),null));
}));

(cljs.core.logic.PMap.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write.call(null,writer__5390__auto__,"cljs.core.logic/PMap");
}));

/**
 * Positional factory function for cljs.core.logic/PMap.
 */
cljs.core.logic.__GT_PMap = (function cljs$core$logic$__GT_PMap(){
return (new cljs.core.logic.PMap(null,null,null));
});

/**
 * Factory function for cljs.core.logic/PMap, taking a map of keywords to field values.
 */
cljs.core.logic.map__GT_PMap = (function cljs$core$logic$map__GT_PMap(G__2502){
var extmap__5385__auto__ = (function (){var G__2511 = cljs.core.dissoc.call(null,G__2502);
if(cljs.core.record_QMARK_.call(null,G__2502)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__2511);
} else {
return G__2511;
}
})();
return (new cljs.core.logic.PMap(null,cljs.core.not_empty.call(null,extmap__5385__auto__),null));
});

(cljs.core.logic.IUnifyWithPMap["null"] = true);

(cljs.core.logic.unify_with_pmap["null"] = (function (v,u,s){
return cljs.core.logic.fail.call(null,s);
}));

(cljs.core.logic.IUnifyWithPMap["_"] = true);

(cljs.core.logic.unify_with_pmap["_"] = (function (v,u,s){
return cljs.core.logic.fail.call(null,s);
}));

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithPMap$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.logic.LVar.prototype.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3 = (function (v,u,s){
var v__$1 = this;
return cljs.core.logic._ext.call(null,s,v__$1,u);
}));

(cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithPMap$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3 = (function (v,u,s){
var v__$1 = this;
return cljs.core.logic._unify_with_map.call(null,u,v__$1,s);
}));

(cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithPMap$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.cljs$core$logic$IUnifyWithPMap$unify_with_pmap$arity$3 = (function (v,u,s){
var v__$1 = this;
return cljs.core.logic._unify_with_map.call(null,u,v__$1,s);
}));
/**
 * Given map m, returns partial map that unifies with maps even if it doesn't share all of the keys of that map.
 * Only the keys of the partial map will be unified:
 * 
 * (m/run* [q]
 *       (m/fresh [pm x]
 *              (m/== pm (partial-map {:a x}))
 *              (m/== pm {:a 1 :b 2})
 *              (m/== pm q)))
 * ;;=> ({:a 1})
 */
cljs.core.logic.partial_map = (function cljs$core$logic$partial_map(m){
return cljs.core.logic.map__GT_PMap.call(null,m);
});
cljs.core.logic.lvarq_sym_QMARK_ = (function cljs$core$logic$lvarq_sym_QMARK_(s){
return (((s instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),"?")));
});
cljs.core.logic.proc_lvar = (function cljs$core$logic$proc_lvar(lvar_expr,store){
var v = (function (){var temp__5718__auto__ = cljs.core.deref.call(null,store).call(null,lvar_expr);
if(cljs.core.truth_(temp__5718__auto__)){
var u = temp__5718__auto__;
return u;
} else {
return cljs.core.logic.lvar.call(null,lvar_expr);
}
})();
cljs.core.swap_BANG_.call(null,store,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lvar_expr,v], null));

return v;
});
cljs.core.logic.lcons_expr_QMARK_ = (function cljs$core$logic$lcons_expr_QMARK_(expr){
var and__5043__auto__ = cljs.core.seq_QMARK_.call(null,expr);
if(and__5043__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,".",".",1975675962,null),"null"], null), null),cljs.core.set.call(null,expr));
} else {
return and__5043__auto__;
}
});
cljs.core.logic.replace_lvar = (function cljs$core$logic$replace_lvar(store){
return (function (expr){
if(cljs.core.logic.lvarq_sym_QMARK_.call(null,expr)){
return cljs.core.logic.proc_lvar.call(null,expr,store);
} else {
if(cljs.core.truth_(cljs.core.logic.lcons_expr_QMARK_.call(null,expr))){
return cljs.core.logic.prep_STAR_.call(null,expr,store);
} else {
return expr;
}
}
});
});
cljs.core.logic.prep_STAR_ = (function cljs$core$logic$prep_STAR_(var_args){
var G__2516 = arguments.length;
switch (G__2516) {
case 2:
return cljs.core.logic.prep_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.logic.prep_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.logic.prep_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.logic.prep_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (expr,store){
return cljs.core.logic.prep_STAR_.call(null,expr,store,false,false);
}));

(cljs.core.logic.prep_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (expr,store,lcons_QMARK_){
return cljs.core.logic.prep_STAR_.call(null,expr,store,lcons_QMARK_,false);
}));

(cljs.core.logic.prep_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (expr,store,lcons_QMARK_,last_QMARK_){
var expr__$1 = (cljs.core.truth_((function (){var and__5043__auto__ = last_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.seq.call(null,expr);
} else {
return and__5043__auto__;
}
})())?cljs.core.first.call(null,expr):expr);
if(cljs.core.logic.lvarq_sym_QMARK_.call(null,expr__$1)){
return cljs.core.logic.proc_lvar.call(null,expr__$1,store);
} else {
if(cljs.core.seq_QMARK_.call(null,expr__$1)){
if(cljs.core.truth_((function (){var or__5045__auto__ = lcons_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.logic.lcons_expr_QMARK_.call(null,expr__$1);
}
})())){
var vec__2517 = expr__$1;
var seq__2518 = cljs.core.seq.call(null,vec__2517);
var first__2519 = cljs.core.first.call(null,seq__2518);
var seq__2518__$1 = cljs.core.next.call(null,seq__2518);
var f = first__2519;
var n = seq__2518__$1;
var skip = cljs.core._EQ_.call(null,f,new cljs.core.Symbol(null,".",".",1975675962,null));
var tail = cljs.core.logic.prep_STAR_.call(null,n,store,lcons_QMARK_,skip);
if(skip){
return tail;
} else {
return cljs.core.logic.lcons.call(null,cljs.core.logic.prep_STAR_.call(null,f,store),tail);
}
} else {
return clojure.walk.postwalk.call(null,cljs.core.logic.replace_lvar.call(null,store),expr__$1);
}
} else {
return expr__$1;

}
}
}));

(cljs.core.logic.prep_STAR_.cljs$lang$maxFixedArity = 4);

/**
 * Prep a quoted expression. All symbols preceded by ? will
 *   be replaced with logic vars.
 */
cljs.core.logic.prep = (function cljs$core$logic$prep(expr){
var lvars = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prepped = (cljs.core.truth_(cljs.core.logic.lcons_expr_QMARK_.call(null,expr))?cljs.core.logic.prep_STAR_.call(null,expr,lvars,true):clojure.walk.postwalk.call(null,cljs.core.logic.replace_lvar.call(null,lvars),expr));
return cljs.core.with_meta.call(null,prepped,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lvars","lvars",2067253268),cljs.core.deref.call(null,lvars)], null));
});
cljs.core.logic.unify = (function cljs$core$logic$unify(s,u,v){
if((u === v)){
return s;
} else {
var u__$1 = cljs.core.logic._walk.call(null,s,u);
var v__$1 = cljs.core.logic._walk.call(null,s,v);
if((u__$1 === v__$1)){
return s;
} else {
return cljs.core.logic._unify_terms.call(null,u__$1,v__$1,s);
}
}
});
/**
 * Unify the terms u and w.
 */
cljs.core.logic.unifier_STAR_ = (function cljs$core$logic$unifier_STAR_(var_args){
var G__2525 = arguments.length;
switch (G__2525) {
case 2:
return cljs.core.logic.unifier_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___2527 = arguments.length;
var i__5770__auto___2528 = (0);
while(true){
if((i__5770__auto___2528 < len__5769__auto___2527)){
args_arr__5794__auto__.push((arguments[i__5770__auto___2528]));

var G__2529 = (i__5770__auto___2528 + (1));
i__5770__auto___2528 = G__2529;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return cljs.core.logic.unifier_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(cljs.core.logic.unifier_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (u,w){
return cljs.core.first.call(null,(function (){var opts__2131__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.logic._STAR_logic_dbs_STAR_,new cljs.core.Keyword(null,"n","n",562130025),false,new cljs.core.Keyword(null,"occurs-check","occurs-check",837479695),true], null);
var xs__2132__auto__ = cljs.core.logic._take_STAR_.call(null,(new cljs.core.logic.Inc((function (){
return (function (a__2120__auto__){
return (new cljs.core.logic.Inc((function (){
var q = cljs.core.logic.lvar.call(null,new cljs.core.Symbol(null,"q","q",-1965434072,null));
return cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,cljs.core.logic._bind.call(null,a__2120__auto__,(function (a__2108__auto__){
var temp__5718__auto__ = cljs.core.logic._unify.call(null,a__2108__auto__,u,w);
if(cljs.core.truth_(temp__5718__auto__)){
var b__2109__auto__ = temp__5718__auto__;
return b__2109__auto__;
} else {
return cljs.core.logic.fail.call(null,a__2108__auto__);
}
})),(function (a__2108__auto__){
var temp__5718__auto__ = cljs.core.logic._unify.call(null,a__2108__auto__,u,q);
if(cljs.core.truth_(temp__5718__auto__)){
var b__2109__auto__ = temp__5718__auto__;
return b__2109__auto__;
} else {
return cljs.core.logic.fail.call(null,a__2108__auto__);
}
})),(function (a__2133__auto__){
return cljs.core.logic._reify.call(null,a__2133__auto__,q);
}));
})));
}).call(null,cljs.core.with_meta.call(null,cljs.core.logic.empty_s,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reify-vars","reify-vars",-83752000),true], null),opts__2131__auto__)));
}))));
var temp__5718__auto__ = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts__2131__auto__);
if(cljs.core.truth_(temp__5718__auto__)){
var n__2134__auto__ = temp__5718__auto__;
return cljs.core.take.call(null,n__2134__auto__,xs__2132__auto__);
} else {
return xs__2132__auto__;
}
})());
}));

(cljs.core.logic.unifier_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (u,w,ts){
return cljs.core.apply.call(null,cljs.core.logic.unifier_STAR_,cljs.core.logic.unifier_STAR_.call(null,u,w),ts);
}));

/** @this {Function} */
(cljs.core.logic.unifier_STAR_.cljs$lang$applyTo = (function (seq2522){
var G__2523 = cljs.core.first.call(null,seq2522);
var seq2522__$1 = cljs.core.next.call(null,seq2522);
var G__2524 = cljs.core.first.call(null,seq2522__$1);
var seq2522__$2 = cljs.core.next.call(null,seq2522__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2523,G__2524,seq2522__$2);
}));

(cljs.core.logic.unifier_STAR_.cljs$lang$maxFixedArity = (2));

/**
 * Return the binding map that unifies terms u and w.
 *   u and w should prepped terms.
 */
cljs.core.logic.binding_map_STAR_ = (function cljs$core$logic$binding_map_STAR_(var_args){
var G__2534 = arguments.length;
switch (G__2534) {
case 2:
return cljs.core.logic.binding_map_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___2540 = arguments.length;
var i__5770__auto___2541 = (0);
while(true){
if((i__5770__auto___2541 < len__5769__auto___2540)){
args_arr__5794__auto__.push((arguments[i__5770__auto___2541]));

var G__2542 = (i__5770__auto___2541 + (1));
i__5770__auto___2541 = G__2542;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return cljs.core.logic.binding_map_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(cljs.core.logic.binding_map_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (u,w){
var lvars = cljs.core.merge.call(null,new cljs.core.Keyword(null,"lvars","lvars",2067253268).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,u)),new cljs.core.Keyword(null,"lvars","lvars",2067253268).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,w)));
var s = cljs.core.logic.unify.call(null,cljs.core.logic.empty_s,u,w);
if(cljs.core.logic.failed_QMARK_.call(null,s)){
return null;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__2535){
var vec__2536 = p__2535;
var k = cljs.core.nth.call(null,vec__2536,(0),null);
var v = cljs.core.nth.call(null,vec__2536,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.logic._reify.call(null,s,v)], null);
}),lvars));
}
}));

(cljs.core.logic.binding_map_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (u,w,ts){
return cljs.core.apply.call(null,cljs.core.logic.binding_map_STAR_,cljs.core.logic.binding_map_STAR_.call(null,u,w),ts);
}));

/** @this {Function} */
(cljs.core.logic.binding_map_STAR_.cljs$lang$applyTo = (function (seq2531){
var G__2532 = cljs.core.first.call(null,seq2531);
var seq2531__$1 = cljs.core.next.call(null,seq2531);
var G__2533 = cljs.core.first.call(null,seq2531__$1);
var seq2531__$2 = cljs.core.next.call(null,seq2531__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2532,G__2533,seq2531__$2);
}));

(cljs.core.logic.binding_map_STAR_.cljs$lang$maxFixedArity = (2));

/**
 * Unify the terms u and w. Will prep the terms.
 */
cljs.core.logic.unifier = (function cljs$core$logic$unifier(var_args){
var G__2547 = arguments.length;
switch (G__2547) {
case 2:
return cljs.core.logic.unifier.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___2549 = arguments.length;
var i__5770__auto___2550 = (0);
while(true){
if((i__5770__auto___2550 < len__5769__auto___2549)){
args_arr__5794__auto__.push((arguments[i__5770__auto___2550]));

var G__2551 = (i__5770__auto___2550 + (1));
i__5770__auto___2550 = G__2551;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return cljs.core.logic.unifier.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(cljs.core.logic.unifier.cljs$core$IFn$_invoke$arity$2 = (function (u,w){
if((!(cljs.core.logic.lcons_QMARK_.call(null,u)))){
} else {
throw (new Error("Assert failed: (not (lcons? u))"));
}

if((!(cljs.core.logic.lcons_QMARK_.call(null,w)))){
} else {
throw (new Error("Assert failed: (not (lcons? w))"));
}

var up = cljs.core.logic.prep.call(null,u);
var wp = cljs.core.logic.prep.call(null,w);
return cljs.core.logic.unifier_STAR_.call(null,up,wp);
}));

(cljs.core.logic.unifier.cljs$core$IFn$_invoke$arity$variadic = (function (u,w,ts){
return cljs.core.apply.call(null,cljs.core.logic.unifier,cljs.core.logic.unifier.call(null,u,w),ts);
}));

/** @this {Function} */
(cljs.core.logic.unifier.cljs$lang$applyTo = (function (seq2544){
var G__2545 = cljs.core.first.call(null,seq2544);
var seq2544__$1 = cljs.core.next.call(null,seq2544);
var G__2546 = cljs.core.first.call(null,seq2544__$1);
var seq2544__$2 = cljs.core.next.call(null,seq2544__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2545,G__2546,seq2544__$2);
}));

(cljs.core.logic.unifier.cljs$lang$maxFixedArity = (2));

/**
 * Return the binding map that unifies terms u and w.
 *   Will prep the terms.
 */
cljs.core.logic.binding_map = (function cljs$core$logic$binding_map(var_args){
var G__2556 = arguments.length;
switch (G__2556) {
case 2:
return cljs.core.logic.binding_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___2558 = arguments.length;
var i__5770__auto___2559 = (0);
while(true){
if((i__5770__auto___2559 < len__5769__auto___2558)){
args_arr__5794__auto__.push((arguments[i__5770__auto___2559]));

var G__2560 = (i__5770__auto___2559 + (1));
i__5770__auto___2559 = G__2560;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return cljs.core.logic.binding_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(cljs.core.logic.binding_map.cljs$core$IFn$_invoke$arity$2 = (function (u,w){
if((!(cljs.core.logic.lcons_QMARK_.call(null,u)))){
} else {
throw (new Error("Assert failed: (not (lcons? u))"));
}

if((!(cljs.core.logic.lcons_QMARK_.call(null,w)))){
} else {
throw (new Error("Assert failed: (not (lcons? w))"));
}

var up = cljs.core.logic.prep.call(null,u);
var wp = cljs.core.logic.prep.call(null,w);
return cljs.core.logic.binding_map_STAR_.call(null,up,wp);
}));

(cljs.core.logic.binding_map.cljs$core$IFn$_invoke$arity$variadic = (function (u,w,ts){
return cljs.core.apply.call(null,cljs.core.logic.binding_map,cljs.core.logic.binding_map.call(null,u,w),ts);
}));

/** @this {Function} */
(cljs.core.logic.binding_map.cljs$lang$applyTo = (function (seq2553){
var G__2554 = cljs.core.first.call(null,seq2553);
var seq2553__$1 = cljs.core.next.call(null,seq2553);
var G__2555 = cljs.core.first.call(null,seq2553__$1);
var seq2553__$2 = cljs.core.next.call(null,seq2553__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2554,G__2555,seq2553__$2);
}));

(cljs.core.logic.binding_map.cljs$lang$maxFixedArity = (2));

cljs.core.logic.to_stream = (function cljs$core$logic$to_stream(aseq){
var aseq__$1 = cljs.core.drop_while.call(null,cljs.core.nil_QMARK_,aseq);
if(cljs.core.seq.call(null,aseq__$1)){
return cljs.core.logic.choice.call(null,cljs.core.first.call(null,aseq__$1),(new cljs.core.logic.Inc((function (){
return cljs.core.logic.to_stream.call(null,cljs.core.next.call(null,aseq__$1));
}))));
} else {
return cljs.core.logic.fail.call(null,cljs.core.logic.empty_s);
}
});
