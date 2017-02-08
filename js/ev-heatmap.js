Polymer({

  is: 'ev-heatmap',

  properties: {
    /**
     * Holds the heatmap data.
     *
     * @property heatmapData
     */
    heatmapData: {
      type: Object,
      notify: true,
      value: []
    },

    /**
     * Sets the scale lower limit
     *
     * @property scaleMin
     */
    scaleMin: {
      type: Number,
      value: 0,
      observer: '_scaleChanged'
    },

    /**
     * Sets the scale upper limit
     *
     * @property scaleMax
     */
    scaleMax: {
      type: Number,
      value: 100,
      observer: '_scaleChanged'
    },

    /**
     * Show/hide the scale
     *
     * @property hideScale
     */
    hideScale: {
      type: Boolean,
      value: false
    },

    /**
     * Show/hide the Column Header
     *
     * @property hideColHeader
     */
    hideColHeader: {
      type: Boolean,
      value: false
    },

    /**
     * Show/hide the Row Header
     *
     * @property hideRowHeader
     */
    hideRowHeader: {
      type: Boolean,
      value: false
    },

    /**
     * Controls when to show/hide the Values in the cells
     */
    hideValues: {
      type: Boolean,
      value: false
    },

    /**
     * Sets the aggregation type.
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
    },

    /**
     * Sets the Scale From color.
     *
     * @property scaleColorFrom
     */
    scaleColorFrom: {
      type: String
    },

    /**
     * Sets the Scale To color.
     *
     * @property scaleColorTo
     */
    scaleColorTo: {
      type: String
    },

    /**
     * Enable / Disable loading animation
     *
     * @property loading
     */
    loading: {
      type: Boolean,
      value: false,
      observer: '_loadingChanged'
    },
    /**
     * Sent when the Heatmap Data is changed.
     *
     * @event heatmap-data-changed
     * @param {heatmapData} value The new Heatmap Data.
     */

  },

  ready: function() {
    /**
     * Listener for changing the Heatmap Data
     *
     * @event set-heatmap-data
     * @param {heatmapData} data The Heatmap Data
     */
    this.addEventListener('set-heatmap-data', function(e) {
      this.setData(e.detail.data);
    });

    this.addEventListener('scale-colors-changed', function(e) {
      e.stopPropagation();
      this.setColors(e.detail.from, e.detail.to);
    });
  },

  /**
   * Observer for the scaleMin and scaleMax properties.
   * Set the internal scale variable based on the change
   * to one of the limits of the scale.
   *
   * @param {string} newScale The value for the scale limit.
   * @param {string} oldScale THe old value.
   * @private
   *
   * @method _scaleChanged
   */
  _scaleChanged: function(newScale, oldScale) {
    if(newScale !== oldScale && newScale) {
      this.set("scale", [this.scaleMin, this.scaleMax]);
    }
  },

  /**
   * Toggles the visibility of the Color Scale
   *
   * @method toggleScale
   */
  toggleScale: function() {
    this.set('hideScale', !this.hideScale);
  },

  /**
   * Toggles the visibility of the Row Header
   *
   * @method toggleRowHeader
   */
  toggleRowHeader: function() {
    this.set('hideRowHeader', !this.hideRowHeader);
  },

  /**
   * Toggles the visibility of the Column Header
   *
   * @method toggleColHeader
   */
  toggleColHeader: function() {
    this.set('hideColHeader', !this.hideColHeader);
  },

  /**
   * Toggles the visibility of both Column and Row Headers
   *
   * @method toggleHeaders
   */
  toggleHeaders: function() {
    this.toggleColHeader();
    this.toggleRowHeader();
  },

  /**
   * Toggles the visibility of the heatmap cell values
   *
   * @method toggleValues
   */
  toggleValues: function() {
    this.set('hideValues', !this.hideValues);
  },

  /**
   * Sets the Heatmap Data
   *
   * @param {heatmapData} data The Heatmap Data.
   *
   * @method setData
   */
  setData: function(data) {
    this.set('heatmapData', data);
  },

  /**
   * Sets the range for the Heatmap Scale
   *
   * @param {number} min The scale lower limit
   * @param {number} max The scale upper limit
   *
   * @method setRange
   */
  setRange: function(min, max) {
    this.set('scaleMin', min);
    this.set('scaleMax', max);
  },

  /**
   * Sets the range colors for the Heatmap
   *
   * @param {string} from The range lower limit color
   * @param {string} to The range upper limit color
   *
   * @method setColors
   */
  setColors: function(from, to) {
    this.set('scaleColorFrom', from);
    this.set('scaleColorTo', to);
  },

  /**
   * Observer for the loading property.
   * Fixes px-spinner not removing the display none
   * style when changing finished to false.
   *
   * @param {boolean} n Hide / Show the spinner
   * @param {boolean} o The old value
   * @private
   *
   * @method _loadingChanged
   */
  _loadingChanged: function(n, o) {
    var _this = this;
    if (n !== undefined && n !== o && n) {
      setTimeout(function () {
        Polymer.dom(_this.root).querySelector('px-spinner').style.display = '';
      });
    }
  }
});
