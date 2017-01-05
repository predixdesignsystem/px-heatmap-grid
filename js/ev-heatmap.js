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
     * Available aggregation types are: Average, Sum, Max
     * Min, Count, Std (Standard Deviation).
     *
     * If set to anything other than the values specified
     * above the aggregation will be disabled.
     *
     * @property aggregationType
     */
    aggregationType: {
      type: String,
      value: "disabled"
    }

    /**
     * Sent when the Heatmap Data is changed.
     *
     * @event heatmap-data-changed
     * @param {heatmapData} value The new Heatmap Data.
     */
  },

  attached: function() {
    /**
     * Listener for changing the Heatmap Data
     *
     * @event set-heatmap-data
     * @param {heatmapData} data The Heatmap Data
     */
    this.addEventListener('set-heatmap-data', function(e) {
      console.log(e);
      this.setData(e.detail.data);
    });
  },

  _scaleChanged: function(newScale, oldScale) {
    if(newScale !== oldScale && newScale) {
      this.set("scale", [this.scaleMin, this.scaleMax]);
    }
  },

  /**
   * Toggle the visibility of the Color Scale
   *
   * @method toggleScale
   */
  toggleScale: function() {
    this.set('hideScale', !this.hideScale);
  },

  /**
   * Toggle the visibility of the Row Header
   *
   * @method toggleRowHeader
   */
  toggleRowHeader: function() {
    this.set('hideRowHeader', !this.hideRowHeader);
  },

  /**
   * Toggle the visibility of the Column Header
   *
   * @method toggleColHeader
   */
  toggleColHeader: function() {
    this.set('hideColHeader', !this.hideColHeader);
  },

  /**
   * Toggle the visibility of both Column and Row Headers
   *
   * @method toggleHeaders
   */
  toggleHeaders: function() {
    this.toggleColHeader();
    this.toggleRowHeader();
  },

  /**
   * Toggle the visibility of the heatmap cell values
   *
   * @method toggleValues
   */
  toggleValues: function() {
    this.set('hideValues', !this.hideValues);
  },

  /**
   * Set the Heatmap Data
   *
   * @param {heatmapData} data The Heatmap Data.
   *
   * @method setData
   */
  setData: function(data) {
    this.set('heatmapData', data);
  },

  /**
   * Set the range for the Heatmap Scale
   *
   * @param {number} min The scale lower limit
   *
   * @param {number} max The scale upper limit
   *
   * @method setRange
   */
  setRange: function(min, max) {
    this.set('scaleMin', min);
    this.set('scaleMax', max);
  }
});
