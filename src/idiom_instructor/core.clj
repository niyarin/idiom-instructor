(ns idiom-instructor.core
  (:require [idiom-instructor.known-pattern :as kp]))

(defn apply-safe [f col vis lazy?]
  (try
    {:res (f col) :lazy? lazy? :vis vis}
    (catch Exception ex nil)))

(defn instruct-known-idiom [origin applied]
  (some->> kp/known-patterns
           (keep (fn [[f vis lazy?]]
                   (when-let [ans (apply-safe f origin vis lazy?)]
                     (and (= (:res ans) applied)
                          ans))))
           (filter identity)
           first))

;;;;;;;;;;;;;;;;;;;;;

(defn instruct-idiom  [origin applied]
  (or (instruct-known-idiom origin applied)
      {:vis (list 'fn ['_]  applied)
       :lazy? false}))
