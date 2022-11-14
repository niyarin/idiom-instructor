(ns idiom-instructor.macro)

(defmacro fn-vis [f]
  `(vector ~f (quote ~f) false))

(defmacro fn-vis-lazy [f lazy?]
  `(vector ~f (quote ~f) ~lazy?))
