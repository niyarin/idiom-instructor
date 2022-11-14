(ns idiom-instructor.core
  (:require ;[clojure.core.logic :as lgc]
            [idiom-instructor.i :as i]
            [clojure.edn :as edn]
            [cljs.pprint :as pprint]
            [clojure.browser.dom :as dom]))

(defn fire []
  (let [idiom_area (.getElementById js/document "idiom_area")
        origin (edn/read-string (dom/get-value (.getElementById js/document "origin_area")))
        applied (edn/read-string (dom/get-value (.getElementById js/document "applied_area")))
        idiom (i/instruct-idiom origin applied)]
    (dom/remove-children "idiom_area")
    (dom/append idiom_area (dom/element (with-out-str (pprint/pprint (:vis idiom)))))))
