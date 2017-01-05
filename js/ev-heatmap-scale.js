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
    },

    /**
     * This property contains the Scale From color.
     *
     * @property scaleColorFrom
     */
    scaleColorFrom: {
      type: String,
      observer: '_scaleColorFromChanged'
    },

    /**
     * This property contains the Scale To color.
     *
     * @property scaleColorTo
     */
    scaleColorTo: {
      type: String,
      observer: '_scaleColorToChanged'
    }
  },

  attached: function() {
    this._scaleChanged(this.scale, []);

    var cHelper = Polymer.dom(this.previousElementSibling.root).querySelector(".color-helper");
    if (cHelper) {
      cHelper = window.getComputedStyle(cHelper);
      this.scaleColorFrom = cHelper.backgroundColor;
      this.scaleColorTo = cHelper.color;
    }
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
  },

  _scaleColorFromChanged: function(newColor, oldColor) {
    if (newColor && newColor !== oldColor) {
      var scale = Polymer.dom(this.root).querySelector(".scale-gradient");
      scale.style.background = "linear-gradient(to top, " + newColor + ", " + this.scaleColorTo + ")";
    }
  },

  _scaleColorToChanged: function(newColor, oldColor) {
    if (newColor && newColor !== oldColor) {
      var scale = Polymer.dom(this.root).querySelector(".scale-gradient");
      scale.style.background = "linear-gradient(to top, " + this.scaleColorFrom + ", " + newColor + ")";
    }
  }
});
