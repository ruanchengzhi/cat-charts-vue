## 玫瑰图

:::demo

```html
<template>
  <s-chart>
    <s-pie
      :attrs="attrs"
      :data="pieData"
      :data-fields="dataFields"
      :css-text="text"
      :css-guideLine="true"
      :css-guideText="true"
    />
    <s-legend />
    <s-tooltip :attrs="tooltipAttrs"/>
  </s-chart>
</template>
<script>
  export default {
    data: function() {
      return {
        attrs: {
          rose: true,
          startAngle: Math.PI * 1,
          endAngle: Math.PI * 1.5
        },
        pieData: [
          {
            year: '2001',
            population: 41.8
          },
          {
            year: '2002',
            population: 38
          },
          {
            year: '2003',
            population: 33.7
          },
          {
            year: '2004',
            population: 30.7
          },
          {
            year: '2005',
            population: 25.8
          },
          {
            year: '2006',
            population: 31.7
          },
          {
            year: '2007',
            population: 33
          },
          {
            year: '2008',
            population: 46
          },
          {
            year: '2009',
            population: 38.3
          },
          {
            year: '2010',
            population: 28
          },
          {
            year: '2011',
            population: 42.5
          },
          {
            year: '2012',
            population: 30.3
          }
        ],
        tooltipAttrs:{
        	formatter: data => `居民负债比：${data.year}: ${data.population}%`
        },
        dataFields: { x: 'year', y: 'population' },
        text: (attrs, data, i) => {
          return { text: data.label }
        }
      }
    }
  }
</script>
```

:::