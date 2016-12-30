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
    },

    /**
     * This property controls when to show/hide the Column Headers
     */
    hideColHeader: {
      type: Boolean,
      value: false,
      observer: '_hideColHeaderChanged'
    },

    /**
     * This property controls when to show/hide the Row Headers
     */
    hideRowHeader: {
      type: Boolean,
      value: false
    }
  },

  attached: function() {
    this._dataChanged(this.data, []);
    this._configChanged(this.config, {});
  },

  _dataChanged: function(newData, oldData) {
    var self = this;
    if(newData != oldData && newData && newData.length) {
      var rows = [];
      var cols = [];
      var tableData = [];
      var nColor = [];
      var iRow = -1;
      var iCol = -1;

      newData.forEach(function(cell) {
        iRow = Object.values(rows).indexOf(cell.row);
        iCol = Object.values(cols).indexOf(cell.col);
        if (iCol === -1) {
          cols.push(cell.col);
          tableData.push([]);
          iCol = cols.length - 1;
        };
        if (iRow === -1) {
          rows.push(cell.row);
          tableData[iCol].push([]);
          iRow = rows.length - 1;
        };
        nColor = self.config != undefined ? self._calculateColor(cell.value) : [255, 255, 255];
        tableData[iCol][iRow] = {
          "value": cell.value,
          "color": "" + nColor[0] + "," + nColor[1] + "," + nColor[2]
        };
      });

      this.set("heatmapData", []);
      this.set("rows", rows);
      this.set("cols", cols);
      this.set("heatmapData", tableData);
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
  },

  _getColHeader: function(iCol) {
    return this.cols[iCol];
  },

  _hideColHeaderChanged: function(newValue, oldValue) {
    var rowHeader = document.querySelector(".table-row-header");
    var scale = document.querySelector(".scale-container");
    if (newValue !== undefined && newValue !== oldValue) {
      if (rowHeader) {
        newValue === false ? rowHeader.classList.remove("disable-col-header") : rowHeader.classList.add("disable-col-header");
      }
      if (scale) {
        newValue === false ? scale.classList.remove("disable-col-header") : scale.classList.add("disable-col-header");
      }
    }
  },

  _sortCol: function(e) {
    var col = e.model.index;
    var order = this.sortColOrder ? this.sortColOrder.index === col ? !this.sortColOrder.order : true : true;
    this.sortColOrder = {
      "index": col,
      "order": order
    };
    var temp = this.heatmapData[col].map(function(el, i) { return {"index": i, "value": el.value}});
    temp.sort((a, b) => order ? a.value - b.value : b.value - a.value);
    var newData = this.heatmapData.map(hd => temp.map(t => hd[t.index]));
    var rows = this.rows;
    var newRows = temp.map(t => rows[t.index]);
    this.set("heatmapData", []);
    this.set("rows", []);
    this.set("heatmapData", newData);
    this.set("rows", newRows);
  },

  _sortRow: function(e) {
    var row = e.model.index;
    var order = this.sortRowOrder ? this.sortRowOrder.index === row ? !this.sortRowOrder.order : true : true;
    this.sortRowOrder = {
      "index": row,
      "order": order
    };
    var temp = this.heatmapData.map(function(el, i) { return {"index": i, "value": el[row].value}});
    var hd = this.heatmapData;
    temp.sort((a,b) => order ? a.value - b.value : b.value - a.value);
    var newData = temp.map(t => hd[t.index]);
    var cols = this.cols;
    var newCols = temp.map(t => cols[t.index]);
    this.set("cols", []);
    this.set("heatmapData", []);
    this.set("cols", newCols);
    this.set("heatmapData", newData);
  },

  _sortingIcon: function(i,h,d) {
    if (this.sortColOrder && h.toLowerCase() === 'col') {
      return this.sortColOrder.index === i ? d.toLowerCase() === 'up' ? !this.sortColOrder.order : this.sortColOrder.order : true;
    }
    else if (this.sortRowOrder && h.toLowerCase() === 'row') {
      return this.sortRowOrder.index === i ? d.toLowerCase() === 'up' ? !this.sortRowOrder.order : this.sortRowOrder.order : true;
    }
    return true;
  }
});
