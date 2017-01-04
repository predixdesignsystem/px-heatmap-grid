Polymer({

  is: 'ev-heatmap',

  properties: {
    /**
     * This is the property that holds the heatmap data.
     *
     * @property heatmapData
     */
    heatmapData: {
      type: Object,
      notify: true,
      value: []
    },

    /**
     * Use this properties to set the scale lower limit
     *
     * @property scaleMin
     */
    scaleMin: {
      type: Number,
      value: 0,
      observer: '_scaleChanged'
    },

    /**
     * Use this properties to set the scale upper limit
     *
     * @property scaleMax
     */
    scaleMax: {
      type: Number,
      value: 100,
      observer: '_scaleChanged'
    },

    /**
     * Use this property to show/hide the scale
     *
     * @property hideScale
     */
    hideScale: {
      type: Boolean,
      value: false
    },

    /**
     * Use this property to show/hide the Column Header
     *
     * @property hideColHeader
     */
    hideColHeader: {
      type: Boolean,
      value: false
    },

    /**
     * Use this property to show/hide the Row Header
     *
     * @property hideRowHeader
     */
    hideRowHeader: {
      type: Boolean,
      value: false
    },

    /**
     * This property controls when to show/hide the Values in the cells
     */
    hideValues: {
      type: Boolean,
      value: false
    },

    /**
     * Use this property to set the aggregation type.
     * The aggregation result is truncated at the number of
     * significant digits + 1.
     *
     * @property aggregationType
     */
    aggregationType: {
      type: String,
      value: "disabled"
    }
  },

  _scaleChanged: function(newScale, oldScale) {
    if(newScale !== oldScale && newScale) {
      this.set("scale", [this.scaleMin, this.scaleMax]);
    }
  }
});
