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
     *
     * @property heatmapData
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
     *
     * @property hideColHeader
     */
    hideColHeader: {
      type: Boolean,
      value: false,
      observer: '_hideColHeaderChanged'
    },

    /**
     * This property controls when to show/hide the Row Headers
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
     * This property sets the aggregation method
     *
     * @property aggregationType
     */
    aggregationType: {
      type: String,
      value: "",
      observer: '_calculateAggregation'
    },

    /**
     * This property controls when to show/hide the Aggregations
     *
     * @property showAggregation
     */
    showAggregation: {
      type: Boolean,
      value: false
    },

    /**
     * This property contains all the available aggregation types
     *
     * @property availableAggregations
     */
    availableAggregations: {
      type: Array,
      value: [
        "AVERAGE",
        "MAX",
        "MIN",
        "SUM",
        "COUNT",
        "STD"
      ]
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
          // tableData[iCol].push(undefined);
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
      this._calculateAggregation(this.aggregationType, "");
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
      var cHelper = Polymer.dom(this.root).querySelector(".color-helper");
      if (cHelper) {
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
    var rowHeader = Polymer.dom(this.root).querySelector(".table-row-header");
    var scale = Polymer.dom(this.nextElementSibling.root).querySelector(".scale-container");
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
    var temp = this.heatmapData[col].map(function(el, i) { return {"index": i, "value": el ? typeof el.value === "number" ? el.value : -Infinity : -Infinity}});
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
    var temp = this.heatmapData.map(function(el, i) { return {"index": i, "value": el[row] ? typeof el[row].value === "number" ? el[row].value : -Infinity : -Infinity}});
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
  },

  _calculateAggregation: function(n, o) {
    if(this.aggregationType && this.aggregationType != null && n && n !== o && this.availableAggregations && this.availableAggregations.indexOf(n.toUpperCase()) !== -1 && this.heatmapData.length > 0) {
      this.set("showAggregation", true);
      var rowAggregation = [],
        colAggregation = [],
        data = this.heatmapData.map(hd => hd.map(v => v.value)),
        colDigits = data.map(hd => hd.map(a => a && typeof a === "number" ? (a + "").split(".")[1].length : 0).reduce((a,b,i) => i === 0 ? b : a > b ? b : a)),
        rowDigits = data[0].map((hd,i) => data.map(a => a[i] && typeof a[i] === "number" ? (a[i] + "").split(".")[1].length : 0).reduce((a,b,i) => i === 0 ? b : a > b ? b : a));
      this.set("rowAggregatedData", []);
      this.set("colAggregatedData", []);
      switch (n.toUpperCase()) {
        case "SUM":
          rowAggregation = data[0].map((c,i) => data.reduce((a,b) => a + (b[i] && typeof b[i] === "number" ? b[i] : 0),0));
          colAggregation = data.map(c => c.reduce((a,b) => a + (b && typeof b === "number" ? b : 0), 0));
          break;
        case "AVERAGE":
          rowAggregation = data[0].map((c,i) => (data.reduce((a,b) => a + (b[i] && typeof b[i] === "number" ? b[i] : 0),0))/data.reduce((a,b) => a + (b[i] && typeof b[i] === "number" ? 1 : 0),0));
          colAggregation = data.map((c,i) => (c.reduce((a,b) => a + (b && typeof b === "number" ? b : 0), 0))/data[i].reduce((a,b) => a + (b && typeof b === "number" ? 1 : 0),0));
          break;
        case "STD":
          rowAggregation = data[0].map((c,i) => (data.reduce((a,b) => a + (b[i] && typeof b[i] === "number" ? b[i] : 0),0))/data.reduce((a,b) => a + (b[i] && typeof b[i] === "number" ? 1 : 0),0));
          rowAggregation = data[0].map((c,i) => Math.sqrt((data.reduce((a,b) => a + (b[i] && typeof b[i] === "number" ? Math.pow((b[i] - rowAggregation[i]),2) : 0), 0))/data.reduce((a,b) => a + (b[i] && typeof b[i] === "number" ? 1 : 0),0)));
          colAggregation = data.map((c,i) => (c.reduce((a,b) => a + (b && typeof b === "number" ? b : 0), 0))/data[i].reduce((a,b) => a + (b && typeof b === "number" ? 1 : 0),0));
          colAggregation = data.map((c,i) => Math.sqrt((c.reduce((a,b) => a + (b && typeof b === "number" ? Math.pow((b - colAggregation[i]),2): 0), 0))/data[i].reduce((a,b) => a + (b && typeof b === "number" ? 1 : 0),0)));
          break;
        case "MAX":
          rowAggregation = data[0].map((c,i) => data.reduce((a,b,j) => typeof b[i] === "number" ? a > b[i] ? a : b[i] : a,-Infinity));
          colAggregation = data.map(c => c.reduce((a,b,i) => typeof b === "number" ? a > b ? a : b : a, -Infinity));
          break;
        case "MIN":
          rowAggregation = data[0].map((c,i) => data.reduce((a,b,j) => typeof b[i] === "number" ? a < b[i] ? a : b[i] : a,Infinity));
          colAggregation = data.map(c => c.reduce((a,b,i) => typeof b === "number" ? a < b ? a : b : a, Infinity));
          break;
        default: //COUNT
          rowAggregation = data[0].map((c,i) => data.reduce((a,b) => a + (b[i] && typeof b[i] === "number" ? 1 : 0),0));
          colAggregation = data.map((c,i) => data[i].reduce((a,b) => a + (b && typeof b === "number" ? 1 : 0),0));
      }

      colAggregation = colAggregation.map((v,i) => (v + "").substr(0,(v + "").split(".")[0].length + 2 + colDigits[i]));
      rowAggregation = rowAggregation.map((v,i) => (v + "").substr(0,(v + "").split(".")[0].length + 2 + rowDigits[i]));
      this.set("rowAggregatedData", rowAggregation);
      this.set("colAggregatedData", colAggregation);
    }
    else if(this.aggregationType && o && n && o !== n && this.availableAggregations.indexOf(n.toUpperCase()) === -1) {
      this.set("aggregationType", o);
      this.set("showAggregation", false);
    }
  },

  _getColAggregation: function(i) {
    return this.colAggregatedData ? this.colAggregatedData[i] : '';
  }
});
