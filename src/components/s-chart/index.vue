<template>
  <div class="cat-charts">
    <slot></slot>
  </div>
</template>
<script>
import { Chart } from '@qcharts/core'
import { bus } from '../../utils'
export default {
  name: 's-chart',
  props: {
    pos: { type: Array, default: () => [0, 0] },
    size: {
      type: Array,
      default: () => ['100%', '100%']
    },
    data: { type: Array, default: [] },
    dataFields: { type: Object, default: () => {} },
    forceFit: {
      type: Boolean,
      default: true
    }
  },
  data: () => {
    return {
      chart: null,
      visuals: [],
      plugins: []
    }
  },
  watch: {
    data: {
      deep: true,
      handler(data) {
        this.chart.source(data, this.dataFields)
      }
    }
  },
  created: function() {
    this[bus].on('addVisuals', data => {
      this.visuals.push(data)
    })
    this[bus].on('addPlugins', data => {
      this.plugins.push(data)
    })
  },
  mounted() {
    this.chart = new Chart({
      container: this.$el,
      size: this.size,
      pos: this.pos
    })
    this.chart.source(this.data, this.dataFields)
    this.$listeners &&
      Object.keys(this.$listeners).forEach(event => {
        this.chart.on(`chart:${event}`, this.$listeners[event])
      })

    this.visuals.forEach(element => {
      element.rows &&
        element.visual.source(this.chart.dataset.selectRows(element.rows))
      this.chart.add(element.visual)
    })
    this.plugins.forEach(element => {
      this.chart.add(element)
    })
    this.chart.render()
  },
  methods: {
    append(element) {
      this.chart.$group.append(element)
    }
  }
}
</script>
<style>
.cat-charts {
  position: relative;
  height: 100%;
}
</style>
