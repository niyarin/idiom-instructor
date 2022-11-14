(defproject idiom-instructor "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [jakarta.xml.bind/jakarta.xml.bind-api "2.3.2"]
                 [org.glassfish.jaxb/jaxb-runtime "2.3.2"]
                 [org.clojure/clojurescript "1.11.60"]
                 [org.clojure/core.logic "1.0.1"]
                 ]
  :repl-options {:init-ns idiom-instructor.core}
  :plugins [[lein-cljsbuild "1.1.8"]
            [lein-cljfmt "0.9.0"]]
  :cljsbuild {:builds [{:source-paths ["src"]
                        :compiler
                          {:optimizations :whitespace
                           :output-to "resources/public/js/dev.js"
                           :output-dir "resources/public/js/cljs-dev"
                           :pretty-print true}}]})
