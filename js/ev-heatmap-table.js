/**
 * Created by ricardobreder on 12/22/16.
 */
Polymer({

  is: 'ev-heatmap-table',

  properties: {
    /**
     * This property holds the data.
     *
     * @property data
     */
    data: {
      type: Object,
      value: [],
      notify: true,
      observer: '_dataChanged'
    },

    /**
     * This property holds the rendered data
     */
    heatmapData: {
      type: Object,
      value: []
    },

    /**
     * This property holds the config info
     *
     * @property config
     */
    config: {
      type: Object,
      value: {
        "minValue": 0,
        "maxValue": 0,
        "startColor": [],
        "endColor": [],
        "factors" : []
      },
      observer: '_configChanged'
    },
    /**
     * This property holds the scale set by the user
     *
     * @property scale
     */
    scale: {
      type: Array,
      value: [0, 100],
      observer: '_scaleChanged'
    }
  },

  attached: function() {
    this._dataChanged(this.data, []);
    this._configChanged(this.config, {});
  },

  _dataChanged: function(newData, oldData) {
    var self = this;
    if(newData != oldData && newData && newData.length) {
      newData.forEach(function(line) {
        line.forEach(function(cell) {
          var nColor = self.config != undefined ? self._calculateColor(cell.value) : [255, 255, 255];
          cell["color"] = "" + nColor[0] + "," + nColor[1] + "," + nColor[2];
        });
      });
      
      // Force dom-repeat to re-render
      this.set("heatmapData", []);
      setTimeout(function() {
        self.set("heatmapData", newData);
      },100);
    }
  },

  _calculateColor: function(value) {
    var config = this.config;
    var color = [];
    return value < config.minValue ? config.minValue : value > config.maxValue ? config.maxValue : config.factors.map((x,i) => Math.round(x * value) + config.startColor[i]);
  },

  _configChanged: function(newConfig, oldConfig) {
    if(newConfig !== oldConfig && newConfig) {
      var config = this.config;
      var cHelper = document.querySelector(".color-helper");
      if (config.startColor.length === 0 && cHelper) {
        cHelper = window.getComputedStyle(cHelper);
        config.startColor = cHelper.backgroundColor.replace(/[^\d,]/g, '').split(',').map(x => x / 1);
        config.endColor = cHelper.color.replace(/[^\d,]/g, '').split(',').map(x => x / 1);
      }
      nValues = config.maxValue - config.minValue;
      config.factors = config.endColor.map((c,i) => (c - config.startColor[i]) / nValues);
      var data = [].concat(this.data);
      this.set("data", data);
    }
  },

  _scaleChanged: function(newScale, oldScale) {
    if(newScale !== oldScale && newScale && newScale.length === 2) {
      var config = this.config;
      config.minValue = newScale[0];
      config.maxValue = newScale[1];
      this.set("config", config);
      this._configChanged(config, {});
    }
  }
});
