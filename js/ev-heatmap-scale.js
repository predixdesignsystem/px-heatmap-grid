/**
 * Created by ricardobreder on 12/22/16.
 */
Polymer({

  is: 'ev-heatmap-scale',

  properties: {
    /**
     * Holds the scale set by the user
     *
     * @property scale
     */
    scale: {
      type: Array,
      value: [0, 100],
      observer: '_scaleChanged'
    },

    /**
     * Holds the computed scale object
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
     * Contains the Scale From color.
     *
     * @property scaleColorFrom
     */
    scaleColorFrom: {
      type: String,
      observer: '_scaleColorFromChanged'
    },

    /**
     * Contains the Scale To color.
     *
     * @property scaleColorTo
     */
    scaleColorTo: {
      type: String,
      observer: '_scaleColorToChanged'
    }
  },

  /**
   * After the component is attached to the DOM
   * call _lookupColors to grab the default colors
   * and save them internally.
   * Also calls _scaleChanged to grab the scale
   * properties and save them internally.
   */
  attached: function() {
    this._scaleChanged(this.scale, []);
    this._lookupColors();
  },

  /**
   * Observes the changes to scale and updates
   * the computedScale if newScale contains valid data
   * and newScale is different than oldScale data.
   *
   * @param {Array<number>} newScale The new scale data.
   * @param {Array<number>} oldScale The old scale data.
   *
   * @method _scaleChanged
   * @private
   */
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

  /**
   * Observes the changes to scaleColorFrom and
   * updates the scale background gradient if
   * newColor contains valid data and newColor is
   * different than oldColor data.
   *
   * @param {string} newColor The new from color in RGB or hex format.
   * @param {string} oldColor The old from color.
   *
   * @method _scaleColorFromChanged
   * @private
   */
  _scaleColorFromChanged: function(newColor, oldColor) {
    if (newColor && newColor !== oldColor) {
      var scale = Polymer.dom(this.root).querySelector(".scale-gradient");
      scale.style.background = "linear-gradient(to top, " + newColor + ", " + this.scaleColorTo + ")";
      this._lookupColors();
    }
  },

  /**
   * Observes the changes to scaleColorTo and
   * updates the scale background gradient if
   * newColor contains valid data and newColor
   * is different than oldColor data.
   *
   * @param {string} newColor The new to color in RGB or hex format.
   * @param {string} oldColor The old to color.
   *
   * @method _scaleColorToChanged
   * @private
   */
  _scaleColorToChanged: function(newColor, oldColor) {
    if (newColor && newColor !== oldColor) {
      var scale = Polymer.dom(this.root).querySelector(".scale-gradient");
      scale.style.background = "linear-gradient(to top, " + this.scaleColorFrom + ", " + newColor + ")";
      this._lookupColors();
    }
  },

  /**
   * Gets the background properties of the scale
   * element to convert the from and to colors to
   * a RGB string and saves them in scaleColorFrom
   * and scaleColorTo properties.
   * Sends and event with the new colors, the event
   * bubbles up.
   *
   * @method _lookupColors
   * @private
   */
  _lookupColors: function() {
    var iColor, sColor, eColor, event;

    // The style backgroundImage works better cross browsers than the background style
    iColor = window.getComputedStyle(Polymer.dom(this.root).querySelector('.scale-gradient')).backgroundImage;
    sColor = iColor.indexOf('linear-gradient');
    eColor = iColor.indexOf(')', sColor) + 1;
    sColor = iColor.indexOf('rgb', sColor);
    this.scaleColorFrom = iColor.substr(sColor, eColor - sColor);
    sColor = iColor.indexOf('rgb', sColor + 3);
    eColor = iColor.indexOf(')', sColor) + 1;
    this.scaleColorTo = iColor.substr(sColor, eColor - sColor);

    // Dispatch an event to notify the color change with the new properties in the
    // event detail property. The event bubbles up.
    event = new CustomEvent('scale-colors-changed', {bubbles: true, detail: {from: this.scaleColorFrom, to: this.scaleColorTo}});
    this.dispatchEvent(event);
  }
});
