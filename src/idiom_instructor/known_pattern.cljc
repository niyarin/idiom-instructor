(ns idiom-instructor.known-pattern
  (:require [idiom-instructor.macro :as m])
   #?(:cljs (:require-macros [idiom-instructor.macro :as m])))

(defn decompose-expr [expr]
  (when-let [[_ color shape]
             (and (keyword? expr)
                  (or (re-matches #"([^-]*)-([^-]*)"
                              (subs (str expr) 1))
                      (and (#{:red :blue :purple} expr)
                           [nil expr nil])))]
    [(keyword color) (keyword shape)]))

(defn construct-expr [color shape]
  (when color
    (keyword (str  (if (keyword? color) (subs (str color) 1) color)
                  (if shape
                    (str "-"
                         (if (keyword? shape) (subs (str shape) 1) shape))
                    "")))))

(defn make-color-change-pattern-fn [pattern]
  (fn [expr]
    (if-let [[color shape] (decompose-expr expr)]
      (construct-expr
       (pattern color)
       shape)
      expr)))

(def add-blue
  (make-color-change-pattern-fn
   {:blue :blue
    :red :purple
    :purple :purple}))

(def remove-blue
  (make-color-change-pattern-fn
   {:blue nil
    :red :red
    :purple :red}))

(decompose-expr :blue)

(def add-red
  (make-color-change-pattern-fn
   {:blue :purple
    :red :red
    :purple :purple}))

(def remove-red
  (make-color-change-pattern-fn
   {:blue :purple
    :red :red
    :purple :purple}))

(defn contain-blue? [expr]
  (when-let [[color shape] (decompose-expr expr)]
    (boolean (#{:blue :purple} color))))

(defn contain-red? [expr]
  (when-let [[color shape] (decompose-expr expr)]
    (boolean (#{:red :purple} color))))

;;;;;

(defn generate-update-key-patterns []
  [(m/fn-vis-lazy (fn [INPUT]
                  (->> INPUT
                       (map (fn [[k v]] (vector (add-blue k) v)))
                       (into {})))
                false)
   (m/fn-vis-lazy (fn [INPUT]
                  (->> INPUT
                       (map (fn [[k v]] (vector (remove-blue k) v)))
                       (into {})))
                false)
   (m/fn-vis-lazy (fn [INPUT]
                  (->> INPUT
                       (map (fn [[k v]] (vector (add-red k) v)))
                       (into {})))
                false)
   (m/fn-vis-lazy (fn [INPUT]
                  (->> INPUT
                       (map (fn [[k v]] (vector (remove-red k) v)))
                       (into {})))
                false)])

(defn generate-update-vals-patterns []
  [(m/fn-vis-lazy (fn [INPUT]
                  (->> INPUT
                       (map (fn [[k v]] (vector k (remove-blue v))))
                       (filter second)
                       (into {})))
                false)])

(defn generate-mapcat-patterns []
    [(m/fn-vis-lazy (fn [INPUT]
                       (mapcat val INPUT))
                false)])

(defn xthrow [mes]
  (throw
  #?(:clj (new Exception mes)
     :cljs (new js/Error cmes))))

(defn generate-filter-patterns []
  [(m/fn-vis-lazy (fn [INPUT] (filter contain-blue? INPUT)) true)
   (m/fn-vis-lazy (fn [INPUT] (filter contain-red? INPUT)) true)
   (m/fn-vis-lazy (fn [INPUT] (filter coll? INPUT)) true)
   (vector
     (fn [INPUT] (when (or (every? integer? INPUT)
                          (xthrow "ERROR"))
                      (filter odd? INPUT)))
     '(fn [INPUT] (filter odd? INPUT))
     true)
    (vector
     (fn [INPUT] (and (or (every? integer? INPUT)
                          (xthrow "ERROR"))
                          (filter even? INPUT)))
     '(fn [INPUT] (filter even? INPUT))
     true)
   ])

(defn generate-zipmap-patterns []
  [(m/fn-vis-lazy
     (fn [INPUT]
       (zipmap (first INPUT) (second INPUT)))
     false)])

(defn generate-distinct-patterns []
  [(m/fn-vis-lazy
     (fn [INPUT]
       (distinct INPUT))
     false)])

(defn generate-reductions-patterns []
  [(vector
     (fn [INPUT]
       (and (or (every? integer? INPUT)
                (xthrow "ERROR"))
            (reductions + INPUT)))
     '(fn [INPUT] (reductions + INPUT))
     false)])


(defn generate-flat-patterns []
  [(m/fn-vis-lazy (fn [INPUT] (flatten INPUT)) false)])

(def known-patterns
  (concat (generate-update-key-patterns)
          (generate-filter-patterns)
          (generate-zipmap-patterns)
          (generate-reductions-patterns)
          (generate-flat-patterns)
          (generate-update-vals-patterns)
          (generate-distinct-patterns)
          (generate-mapcat-patterns)
          ))
