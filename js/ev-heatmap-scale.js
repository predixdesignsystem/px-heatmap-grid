/**
 * Created by ricardobreder on 12/22/16.
 */
Polymer({

  is: 'ev-heatmap-scale',

  properties: {
    /**
     * This property holds the scale set by the user
     *
     * @property scale
     */
    scale: {
      type: Array,
      value: [0, 100],
      observer: '_scaleChanged'
    },

    /**
     * This property holds the computed scale object
     *
     * @property computedScale
     */
    computedScale: {
      type: Object,
      value: {
        "min": 0,
        "mid": 50,
        "max": 100
      }
    }
  },

  attached: function() {
    this._scaleChanged(this.scale, []);
  },

  _scaleChanged: function(newScale, oldScale) {
    if(newScale !== oldScale && newScale && newScale.length === 2 && this.computedScale) {
      var computedScale = {
        "min": newScale[0],
        "mid": Math.round((newScale[1] - newScale[0]) / 2),
        "max": newScale[1]
      }
      this.set("computedScale", computedScale);
    }
  }
});
