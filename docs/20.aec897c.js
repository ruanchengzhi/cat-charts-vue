(window.webpackJsonpCatCharts=window.webpackJsonpCatCharts||[]).push([[20],{86:function(s,a,t){"use strict";t.r(a);var r={components:{}},n=t(0),p=Object(n.a)(r,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("玫瑰图")]),s._v(" "),t("block-demo",{attrs:{tip:"",source:"<template>\n  <s-chart>\n    <s-pie\n      :attrs=\"attrs\"\n      :data=\"pieData\"\n      :data-fields=\"dataFields\"\n      :css-text=\"text\"\n      :css-guideLine=\"true\"\n      :css-guideText=\"true\"\n    />\n    <s-legend />\n    <s-tooltip :attrs=\"tooltipAttrs\"/>\n  </s-chart>\n</template>\n<script>\n  export default {\n    data: function() {\n      return {\n        attrs: {\n          rose: true,\n          startAngle: Math.PI * 1,\n          endAngle: Math.PI * 1.5\n        },\n        pieData: [\n          {\n            year: '2001',\n            population: 41.8\n          },\n          {\n            year: '2002',\n            population: 38\n          },\n          {\n            year: '2003',\n            population: 33.7\n          },\n          {\n            year: '2004',\n            population: 30.7\n          },\n          {\n            year: '2005',\n            population: 25.8\n          },\n          {\n            year: '2006',\n            population: 31.7\n          },\n          {\n            year: '2007',\n            population: 33\n          },\n          {\n            year: '2008',\n            population: 46\n          },\n          {\n            year: '2009',\n            population: 38.3\n          },\n          {\n            year: '2010',\n            population: 28\n          },\n          {\n            year: '2011',\n            population: 42.5\n          },\n          {\n            year: '2012',\n            population: 30.3\n          }\n        ],\n        tooltipAttrs:{\n        \tformatter: data => `居民负债比：${data.year}: ${data.population}%`\n        },\n        dataFields: { x: 'year', y: 'population' },\n        text: (attrs, data, i) => {\n          return { text: data.label }\n        }\n      }\n    }\n  }\n<\/script>\n"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-chart")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-pie")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attrs"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"pieData"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":data-fields")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dataFields"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":css-text")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"text"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":css-guideLine")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":css-guideText")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n    />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-legend")]),s._v(" />")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-tooltip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attrs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tooltipAttrs"')]),s._v("/>")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("s-chart")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attrs")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rose")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("startAngle")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".PI * "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("endAngle")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".PI * "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.5")]),s._v("\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pieData")]),s._v(": [\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2001'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("41.8")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2002'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("38")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2003'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33.7")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2004'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30.7")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2005'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25.8")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2006'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31.7")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2007'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2008'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("46")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2009'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("38.3")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2010'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("28")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2011'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("42.5")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("year")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2012'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("population")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30.3")]),s._v("\n          }\n        ],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tooltipAttrs")]),s._v(":{\n        \t"),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("formatter")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("data")]),s._v(" =>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`居民负债比："),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${data.year}")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${data.population}")]),s._v("%`")]),s._v("\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dataFields")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'year'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'population'")]),s._v(" },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("attrs, data, i")]),s._v(") =>")]),s._v(" {\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": data.label }\n        }\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],1)},[],!1,null,null,null);a.default=p.exports}}]);