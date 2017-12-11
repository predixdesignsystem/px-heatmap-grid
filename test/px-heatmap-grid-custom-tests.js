suite('px-heatmap-grid with full dataset', function () {
  let heatmapEl, data, aggregationsTypes, aggregationsResults;

  setup(function (done) {
    heatmapEl = fixture('ev_heatmap_1');
    aggregationsTypes = ["average", "sum", "max", "min", "count", "std"];
    data = [{ "row": "Application 1", "col": "Operator 1", "value": 9.237 }, { "row": "Application 1", "col": "Operator 2", "value": 0.336 }, { "row": "Application 1", "col": "Operator 3", "value": 25.862 }, { "row": "Application 1", "col": "Operator 4", "value": 51.117 }, { "row": "Application 1", "col": "Operator 5", "value": 6.908 }, { "row": "Application 1", "col": "Operator 6", "value": 67.247 }, { "row": "Application 2", "col": "Operator 1", "value": 26.597 }, { "row": "Application 2", "col": "Operator 2", "value": 6.106 }, { "row": "Application 2", "col": "Operator 3", "value": 39.643 }, { "row": "Application 2", "col": "Operator 4", "value": 61.585 }, { "row": "Application 2", "col": "Operator 5", "value": 10.774 }, { "row": "Application 2", "col": "Operator 6", "value": 40.802 }, { "row": "Application 3", "col": "Operator 1", "value": 31.57 }, { "row": "Application 3", "col": "Operator 2", "value": 74.492 }, { "row": "Application 3", "col": "Operator 3", "value": 54.752 }, { "row": "Application 3", "col": "Operator 4", "value": 21.026 }, { "row": "Application 3", "col": "Operator 5", "value": 42.339 }, { "row": "Application 3", "col": "Operator 6", "value": 14.896 }, { "row": "Application 4", "col": "Operator 1", "value": 95.94 }, { "row": "Application 4", "col": "Operator 2", "value": 77.545 }, { "row": "Application 4", "col": "Operator 3", "value": 52.142 }, { "row": "Application 4", "col": "Operator 4", "value": 53.869 }, { "row": "Application 4", "col": "Operator 5", "value": 26.531 }, { "row": "Application 4", "col": "Operator 6", "value": 86.428 }, { "row": "Application 5", "col": "Operator 1", "value": 68.452 }, { "row": "Application 5", "col": "Operator 2", "value": 40.916 }, { "row": "Application 5", "col": "Operator 3", "value": 56.627 }, { "row": "Application 5", "col": "Operator 4", "value": 9.98 }, { "row": "Application 5", "col": "Operator 5", "value": 78.38 }, { "row": "Application 5", "col": "Operator 6", "value": 5.887 }, { "row": "Application 6", "col": "Operator 1", "value": 87.706 }, { "row": "Application 6", "col": "Operator 2", "value": 63.358 }, { "row": "Application 6", "col": "Operator 3", "value": 30.674 }, { "row": "Application 6", "col": "Operator 4", "value": 50.473 }, { "row": "Application 6", "col": "Operator 5", "value": 76.512 }, { "row": "Application 6", "col": "Operator 6", "value": 29.124 }, { "row": "Application 7", "col": "Operator 1", "value": 23.596 }, { "row": "Application 7", "col": "Operator 2", "value": 24.408 }, { "row": "Application 7", "col": "Operator 3", "value": 47.1 }, { "row": "Application 7", "col": "Operator 4", "value": 3.892 }, { "row": "Application 7", "col": "Operator 5", "value": 77.998 }, { "row": "Application 7", "col": "Operator 6", "value": 80.21 }, { "row": "Application 8", "col": "Operator 1", "value": 26.671 }, { "row": "Application 8", "col": "Operator 2", "value": 25.657 }, { "row": "Application 8", "col": "Operator 3", "value": 62.89 }, { "row": "Application 8", "col": "Operator 4", "value": 34.644 }, { "row": "Application 8", "col": "Operator 5", "value": 39.228 }, { "row": "Application 8", "col": "Operator 6", "value": 90.37 }, { "row": "Application 9", "col": "Operator 1", "value": 36.293 }, { "row": "Application 9", "col": "Operator 2", "value": 42.247 }, { "row": "Application 9", "col": "Operator 3", "value": 48.674 }, { "row": "Application 9", "col": "Operator 4", "value": 47.848 }, { "row": "Application 9", "col": "Operator 5", "value": 53.175 }, { "row": "Application 9", "col": "Operator 6", "value": 13.383 }, { "row": "Application 10", "col": "Operator 1", "value": 49.658 }, { "row": "Application 10", "col": "Operator 2", "value": 83.477 }, { "row": "Application 10", "col": "Operator 3", "value": 11.854 }, { "row": "Application 10", "col": "Operator 4", "value": 23.832 }, { "row": "Application 10", "col": "Operator 5", "value": 39.586 }, { "row": "Application 10", "col": "Operator 6", "value": 70.742 }];
    aggregationsResults = { "row": [{ "average": 26.7845, "sum": 160.707, "max": 67.247, "min": 0.336, "count": 6, "std": 24.6057 }, { "average": 30.9178, "sum": 185.507, "max": 61.585, "min": 6.106, "count": 6, "std": 18.9489 }, { "average": 39.8458, "sum": 239.075, "max": 74.492, "min": 14.896, "count": 6, "std": 20.3057 }, { "average": 65.4091, "sum": 392.455, "max": 95.94, "min": 26.531, "count": 6, "std": 23.6005 }, { "average": 43.3736, "sum": 260.242, "max": 78.38, "min": 5.887, "count": 6, "std": 27.5573 }, { "average": 56.3078, "sum": 337.847, "max": 87.706, "min": 29.124, "count": 6, "std": 21.8855 }, { "average": 42.8673, "sum": 257.204, "max": 80.21, "min": 3.892, "count": 6, "std": 28.5124 }, { "average": 46.5766, "sum": 279.46, "max": 90.37, "min": 25.657, "count": 6, "std": 23.1453 }, { "average": 40.27, "sum": 241.62, "max": 53.175, "min": 13.383, "count": 6, "std": 13.148 }, { "average": 46.5248, "sum": 279.149, "max": 83.477, "min": 11.854, "count": 6, "std": 24.9229 }], "col": [{ "average": 45.572, "sum": 455.72, "max": 95.94, "min": 9.237, "count": 10, "std": 27.6677 }, { "average": 43.8542, "sum": 438.542, "max": 83.477, "min": 0.336, "count": 10, "std": 28.396 }, { "average": 43.0218, "sum": 430.218, "max": 62.89, "min": 11.854, "count": 10, "std": 15.0962 }, { "average": 35.8266, "sum": 358.266, "max": 61.585, "min": 3.892, "count": 10, "std": 19.0631 }, { "average": 45.1431, "sum": 451.431, "max": 78.38, "min": 6.908, "count": 10, "std": 25.0917 }, { "average": 49.9089, "sum": 499.089, "max": 90.37, "min": 5.887, "count": 10, "std": 31.0426 }] };

    var event = new CustomEvent('set-heatmap-data', { detail: { data: data } });
    heatmapEl.dispatchEvent(event);

    flush(() => {
      done();
    });
  });

  test('Check main element exists', function (done) {
    assert.isTrue(heatmapEl !== undefined, "px-heatmap-grid doesn't exist");
    assert.isTrue(heatmapEl !== null, "px-heatmap-grid is empty");
    done();
  });

  test('Check table element exists', function (done) {
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table');
    assert.isTrue(tableEl !== undefined, "px-heatmap-grid-table doesn't exist");
    assert.isTrue(tableEl !== null, "px-heatmap-grid-table is empty");
    done();
  });

  test('Check scale element exists', function (done) {
    var scaleEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-scale');
    assert.isTrue(scaleEl !== undefined, "px-heatmap-grid-scale doesn't exist");
    assert.isTrue(scaleEl !== null, "px-heatmap-grid-scale is empty");
    done();
  });

  test('Check row header element exists', function (done) {
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table'),
      rowHeader = Polymer.dom(tableEl.root).querySelector('.table-row-header');
    assert.isTrue(rowHeader !== undefined, "row header element doesn't exist");
    assert.isTrue(rowHeader !== null, "row header element is empty");
    done();
  });

  test('Check column header element exists', function (done) {
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table'),
      colHeader = Polymer.dom(tableEl.root).querySelector('.col-header');
    assert.isTrue(colHeader !== undefined, "column header element doesn't exist");
    assert.isTrue(colHeader !== null, "column header element is empty");
    done();
  });

  test('Check table column element exists', function (done) {
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table'),
      tableCol = Polymer.dom(tableEl.root).querySelector('.table-column');
    assert.isTrue(tableCol !== undefined, "table column element doesn't exist");
    assert.isTrue(tableCol !== null, "table column element is empty");
    done();
  });

  test('Check cell element exists', function (done) {
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table'),
      cell = Polymer.dom(tableEl.root).querySelector('.table-cell');
    assert.isTrue(cell !== undefined, "cell element doesn't exist");
    assert.isTrue(cell !== null, "cell element is empty");
    done();
  });

  test('Check row headers have correct data', function (done) {
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table'),
      rowHeader = Polymer.dom(tableEl.root).querySelectorAll('.row-header'),
      headers = [];
    heatmapEl.hideRowHeader = false;
    rowHeader.forEach(function (x) {
      headers.push(x.querySelector('span').innerText.trim());
    });

    data.forEach(function (item) {
      assert.notEqual(headers.indexOf("" + item.row), -1, "'" + item.row + "' not found in row headers");
    });
    done();
  });

  test('Check column headers have correct data', function (done) {
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table'),
      colHeader = Polymer.dom(tableEl.root).querySelectorAll('.col-header'),
      headers = [];
    heatmapEl.hideColHeader = false;
    colHeader.forEach(function (x) {
      headers.push(x.querySelector('span').innerText.trim());
    });

    data.forEach(function (item) {
      assert.notEqual(headers.indexOf("" + item.col), -1, "'" + item.col + "' not found in column headers");
    });
    done();
  });

  test('Check table cells have correct data', function (done) {
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table'),
      tableCells = Polymer.dom(tableEl.root).querySelectorAll('.table-cell'),
      cells = [];
    tableCells.forEach(function (x) {
      cells.push(x.innerText.trim());
    });
    data.forEach(function (item) {
      assert.notEqual(cells.indexOf(item.value.toString()), -1, "'" + item.value + "' not found in cells");
    });
    done();
  });

  test('Check hide/show color scale functionality', function (done) {
    var scaleEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-scale');
    assert.isFalse(heatmapEl.hideScale, "px-heatmap-grid hideScale property was supposed to be false");
    assert.notEqual(window.getComputedStyle(scaleEl).display, 'none', "scale element was not supposed to be hidden");
    heatmapEl.toggleScale();

    assert.isTrue(heatmapEl.hideScale, "px-heatmap-grid hideScale property was supposed to be true");
    assert.equal(window.getComputedStyle(scaleEl).display, 'none', "scale element was supposed to be hidden");
    done();
  });

  test('Check hide/show row headers functionality', function (done) {
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table'),
      rowHeader = Polymer.dom(tableEl.root).querySelector('.table-row-header');
    assert.isFalse(heatmapEl.hideRowHeader, "px-heatmap-grid hideRowHeader property was supposed to be false");
    assert.equal(window.getComputedStyle(rowHeader).display, "flex", "row header element was not supposed to be hidden");

    heatmapEl.toggleRowHeader();
    setTimeout(function () {
      assert.isTrue(heatmapEl.hideRowHeader, "px-heatmap-grid hideRowHeader property was supposed to be true");
      assert.equal(window.getComputedStyle(rowHeader).display, "none", "row header element was supposed to be hidden");
      done();
    }, 10);
  });

  test('Check hide/show column headers functionality', function (done) {
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table'),
      colHeader = Polymer.dom(tableEl.root).querySelectorAll('.col-header'),
      rowHeader = Polymer.dom(tableEl.root).querySelector('.table-row-header');
    assert.isFalse(heatmapEl.hideColHeader, "px-heatmap-grid hideColHeader property was supposed to be false");
    assert.isFalse(rowHeader.classList.contains('disable-col-header'), "row header should not contain class 'disable-col-header'");
    colHeader.forEach(function (x) {
      assert.equal(window.getComputedStyle(x).display, "flex", "row header '" + x.innerText + "' was not supposed to be hidden");
    });

    heatmapEl.toggleColHeader();
    setTimeout(function () {
      assert.isTrue(heatmapEl.hideColHeader, "px-heatmap-grid hideColHeader property was supposed to be true");
      assert.isTrue(rowHeader.classList.contains('disable-col-header'), "row header should contain class 'disable-col-header'");
      colHeader.forEach(function (x) {
        assert.equal(window.getComputedStyle(x).display, "none", "row header '" + x.innerText + "' was supposed to be hidden");
      });
      done();
    }, 10);
  });

  test('Check scale min/max functionality', function (done) {
    assert.equal(heatmapEl.scaleMin, 0, "Scale min default was supposed to be '0'");
    assert.equal(heatmapEl.scaleMax, 100, "Scale max default was supposed to be '100'");
    heatmapEl.setRange(20, 80);
    setTimeout(function () {
      assert.equal(heatmapEl.scaleMin, 20, "Scale min was supposed to be '20'");
      assert.equal(heatmapEl.scaleMax, 80, "Scale max was supposed to be '80'");
      done();
    }, 10);
  });

  test('Check Aggregation functionality', function (done) {
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table');
    aggregationsTypes.map(function (at) {
      heatmapEl.set("aggregationType", at);
      tableEl.rowAggregatedData.map(function (d, i) {
        assert.equal(Math.round(d), Math.round(aggregationsResults.row[i][at]), at + " aggregation for row " + i + " failed");
      });

      tableEl.colAggregatedData.map(function (d, i) {
        assert.equal(Math.round(d), Math.round(aggregationsResults.col[i][at]), at + " aggregation for column " + i + " failed");
      });
    });
    done();
  });

  test('Check Sorting functionality', function (done) {
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table');
    var e = {
      "model": {
        "index": 0
      }
    };
    var minI, maxI;

    tableEl.heatmapData.forEach(function (a, i) {
      heatmapEl.set("heatmapData", []);
      heatmapEl.set("heatmapData", data);
      e.model.index = i;
      tableEl._sortCol(e);
      minI = tableEl.heatmapData[i].map(function (x, j) {
        return x ? typeof x.value === "number" ? j : undefined : undefined;
      }).reduce(function (a, b) {
        return b ? a < b ? a : b : a;
      });
      maxI = tableEl.heatmapData[i].map(function (x, j) {
        return x ? typeof x.value === "number" ? j : undefined : undefined;
      }).reduce(function (a, b) {
        return b ? a > b ? a : b : a;
      });
      assert.equal(tableEl.heatmapData[i][minI].value, aggregationsResults.col[i].min, "sorting ascending on column " + i + " failed");
      assert.equal(tableEl.heatmapData[i][maxI].value, aggregationsResults.col[i].max, "sorting ascending on column " + i + " failed");
      tableEl._sortCol(e);
      minI = tableEl.heatmapData[i].map(function (x, j) {
        return x ? typeof x.value === "number" ? j : undefined : undefined;
      }).reduce(function (a, b) {
        return b ? a < b ? a : b : a;
      });
      maxI = tableEl.heatmapData[i].map(function (x, j) {
        return x ? typeof x.value === "number" ? j : undefined : undefined;
      }).reduce(function (a, b) {
        return b ? a > b ? a : b : a;
      });
      assert.equal(tableEl.heatmapData[i][minI].value, aggregationsResults.col[i].max, "sorting descending on column " + i + " failed");
      assert.equal(tableEl.heatmapData[i][maxI].value, aggregationsResults.col[i].min, "sorting descending on column " + i + " failed");
    });

    tableEl.heatmapData[0].map(function (a, i) {
      heatmapEl.set("heatmapData", []);
      heatmapEl.set("heatmapData", data);
      e.model.index = i;
      tableEl._sortRow(e);
      minI = tableEl.heatmapData.map(function (x, j) {
        return x[i] && typeof x[i].value === "number" ? j : undefined;
      }).reduce(function (a, b) {
        return b ? a < b ? a : b : a;
      });
      maxI = tableEl.heatmapData.map(function (x, j) {
        return x[i] && typeof x[i].value === "number" ? j : undefined;
      }).reduce(function (a, b) {
        return b ? a > b ? a : b : a;
      });
      assert.equal(tableEl.heatmapData[minI][i].value, aggregationsResults.row[i].min, "sorting ascending on row " + i + " failed");
      assert.equal(tableEl.heatmapData[maxI][i].value, aggregationsResults.row[i].max, "sorting ascending on row " + i + " failed");
      tableEl._sortRow(e);
      minI = tableEl.heatmapData.map(function (x, j) {
        return x[i] && typeof x[i].value === "number" ? j : undefined;
      }).reduce(function (a, b) {
        return b ? a < b ? a : b : a;
      });
      maxI = tableEl.heatmapData.map(function (x, j) {
        return x[i] && typeof x[i].value === "number" ? j : undefined;
      }).reduce(function (a, b) {
        return b ? a > b ? a : b : a;
      });
      assert.equal(tableEl.heatmapData[minI][i].value, aggregationsResults.row[i].max, "sorting descending on row " + i + " failed");
      assert.equal(tableEl.heatmapData[maxI][i].value, aggregationsResults.row[i].min, "sorting descending on row " + i + " failed");
    });
    done();
  });

  test('Check hide/show values functionality', function (done) {
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table'),
      values = Polymer.dom(tableEl.root).querySelectorAll('.cell-values span');
    heatmapEl.hideValues = false;
    values.forEach(function (v) {
      // Hidden is not supported in IE 10, so using display property instead
      assert.notEqual(window.getComputedStyle(v).display, 'none', "cell was not supposed to be hidden");
    });

    heatmapEl.toggleValues();
    setTimeout(function () {
      values.forEach(function (v) {
        // Hidden is not supported in IE 10, so using display property instead
        assert.equal(window.getComputedStyle(v).display, 'none', "cell " + v.innerText + " was supposed to be hidden");
      });
      done();
    }, 10)
  });

  test('Check scale color changes are propagated', function (done) {
    var scaleEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-scale'),
      colorFrom = scaleEl.scaleColorFrom,
      colorTo = scaleEl.scaleColorTo;
    heatmapEl.setColors('rgb(204,204,204)', 'rgb(0,255,119');
    heatmapEl.setRange(0, 100);
    heatmapEl.toggleHeaders();
    heatmapEl.toggleScale();
    heatmapEl.toggleValues();
    setTimeout(function () {
      colorFrom = scaleEl.scaleColorFrom;
      colorTo = scaleEl.scaleColorTo;
      assert.equal(heatmapEl._scaleColorFrom, colorFrom, 'From colors at heatmap and scale should be the same');
      assert.equal(heatmapEl._scaleColorTo, colorTo, 'To colors at heatmap and scale should be the same');
      assert.equal(heatmapEl._scaleColorFrom, colorFrom, 'From colors should be the same');
      assert.equal(heatmapEl._scaleColorTo, colorTo, 'To colors should be the same');
      done()
    }, 10);
  });
});

suite('px-heatmap-grid with dataset with empty cells', function () {
  let heatmapEl, data, aggregationsTypes, aggregationsResults;

  setup(function (done) {
    heatmapEl = fixture('ev_heatmap_2');
    aggregationsTypes = ["average", "sum", "max", "min", "count", "std"];
    data = [{ "row": "Application 1", "col": "Operator 1", "value": 8.603 }, { "row": "Application 1", "col": "Operator 2", "value": 89.537 }, { "row": "Application 1", "col": "Operator 3", "value": 68.59 }, { "row": "Application 1", "col": "Operator 4", "value": 17.775 }, { "row": "Application 1", "col": "Operator 5", "value": 33.812 }, { "row": "Application 1", "col": "Operator 6", "value": 8.305 }, { "row": "Application 2", "col": "Operator 1", "value": 19.385 }, { "row": "Application 2", "col": "Operator 2", "value": 74.264 }, { "row": "Application 2", "col": "Operator 3", "value": 56.71 }, { "row": "Application 2", "col": "Operator 4", "value": 75.748 }, { "row": "Application 2", "col": "Operator 5", "value": 49.978 }, { "row": "Application 2", "col": "Operator 6", "value": 30.889 }, { "row": "Application 3", "col": "Operator 1", "value": 46.458 }, { "row": "Application 3", "col": "Operator 2", "value": 75.381 }, { "row": "Application 3", "col": "Operator 4", "value": 89.074 }, { "row": "Application 3", "col": "Operator 5", "value": 99.09 }, { "row": "Application 3", "col": "Operator 6", "value": 62.344 }, { "row": "Application 4", "col": "Operator 1", "value": 63.614 }, { "row": "Application 4", "col": "Operator 2", "value": 95.741 }, { "row": "Application 4", "col": "Operator 3", "value": 15.411 }, { "row": "Application 4", "col": "Operator 4", "value": 69.277 }, { "row": "Application 4", "col": "Operator 5", "value": 61.908 }, { "row": "Application 4", "col": "Operator 6", "value": 88.557 }, { "row": "Application 5", "col": "Operator 2", "value": 19.395 }, { "row": "Application 5", "col": "Operator 3", "value": 94.812 }, { "row": "Application 5", "col": "Operator 4", "value": 65.547 }, { "row": "Application 5", "col": "Operator 5", "value": 72.323 }, , { "row": "Application 6", "col": "Operator 1", "value": 43.975 }, { "row": "Application 6", "col": "Operator 2", "value": 9.665 }, { "row": "Application 6", "col": "Operator 3", "value": 8.003 }, { "row": "Application 6", "col": "Operator 4", "value": 91.239 }, { "row": "Application 6", "col": "Operator 5", "value": 49.417 }, { "row": "Application 6", "col": "Operator 6", "value": 49.825 }, { "row": "Application 7", "col": "Operator 1", "value": 22.604 }, { "row": "Application 7", "col": "Operator 2", "value": 34.573 }, { "row": "Application 7", "col": "Operator 3", "value": 89.617 }, { "row": "Application 7", "col": "Operator 5", "value": 34.839 }, { "row": "Application 7", "col": "Operator 6", "value": 2.874 }, { "row": "Application 8", "col": "Operator 1", "value": 86.023 }, { "row": "Application 8", "col": "Operator 2", "value": 2.067 }, { "row": "Application 8", "col": "Operator 3", "value": 60.478 }, { "row": "Application 8", "col": "Operator 4", "value": 63.746 }, { "row": "Application 8", "col": "Operator 5", "value": 62.09 }, { "row": "Application 8", "col": "Operator 6", "value": 84.216 }, { "row": "Application 9", "col": "Operator 1", "value": 22.56 }, { "row": "Application 9", "col": "Operator 2", "value": 60.009 }, { "row": "Application 9", "col": "Operator 3", "value": 10.153 }, { "row": "Application 9", "col": "Operator 4", "value": 40.938 }, { "row": "Application 9", "col": "Operator 5", "value": 97.975 }, { "row": "Application 9", "col": "Operator 6", "value": 86.65 }, { "row": "Application 10", "col": "Operator 1", "value": 39.07 }, { "row": "Application 10", "col": "Operator 2", "value": 28.732 }, { "row": "Application 10", "col": "Operator 3", "value": 16.753 }, { "row": "Application 10", "col": "Operator 4", "value": 66.526 }, { "row": "Application 10", "col": "Operator 5", "value": 51.551 }, { "row": "Application 10", "col": "Operator 6", "value": 73.657 }];
    aggregationsResults = { "row": [{ "average": 37.77, "sum": 226.622, "max": 89.537, "min": 8.305, "count": 6, "std": 30.994 }, { "average": 51.162, "sum": 306.974, "max": 75.748, "min": 19.385, "count": 6, "std": 20.781 }, { "average": 74.469, "sum": 372.347, "max": 99.09, "min": 46.458, "count": 5, "std": 18.718 }, { "average": 65.751, "sum": 394.508, "max": 95.741, "min": 15.411, "count": 6, "std": 25.772 }, { "average": 63.019, "sum": 252.077, "max": 94.812, "min": 19.395, "count": 4, "std": 27.417 }, { "average": 42.02, "sum": 252.124, "max": 91.239, "min": 8.003, "count": 6, "std": 28.124 }, { "average": 36.901, "sum": 184.507, "max": 89.617, "min": 2.874, "count": 5, "std": 28.812 }, { "average": 59.77, "sum": 358.62, "max": 86.023, "min": 2.067, "count": 6, "std": 27.803 }, { "average": 53.047, "sum": 318.285, "max": 97.975, "min": 10.153, "count": 6, "std": 31.916 }, { "average": 46.048, "sum": 276.289, "max": 73.657, "min": 16.753, "count": 6, "std": 20.077 }], "col": [{ "average": 39.143, "sum": 352.292, "max": 86.023, "min": 8.603, "count": 9, "std": 22.961 }, { "average": 48.936, "sum": 489.364, "max": 95.741, "min": 2.067, "count": 10, "std": 32.447 }, { "average": 46.725, "sum": 420.527, "max": 94.812, "min": 8.003, "count": 9, "std": 32.719 }, { "average": 64.43, "sum": 579.87, "max": 91.239, "min": 17.775, "count": 9, "std": 21.634 }, { "average": 61.298, "sum": 612.983, "max": 99.09, "min": 33.812, "count": 10, "std": 21.716 }, { "average": 54.146, "sum": 487.317, "max": 88.557, "min": 2.874, "count": 9, "std": 31.415 }] };

    var event = new CustomEvent('set-heatmap-data', { detail: { data: data } });
    heatmapEl.dispatchEvent(event);

    flush(() => {
      done();
    });
  });

  test('Check table cells have correct data', function (done) {
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table'),
      tableCells = Polymer.dom(tableEl.root).querySelectorAll('.table-cell'),
      cells = [];
    tableCells.forEach(function (x) {
      cells.push(x.innerText.trim());
    });

    data.forEach(function (item) {
      assert.notEqual(cells.indexOf(item.value.toString()), -1, "'" + item.value + "' not found in cells");
    });
    done();
  });

  test('Check Aggregation functionality', function (done) {
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table');
    aggregationsTypes.map(function (at) {
      heatmapEl.set("aggregationType", at);
      tableEl.rowAggregatedData.map(function (d, i) {
        assert.equal(Math.round(d), Math.round(aggregationsResults.row[i][at]), at + " aggregation for row " + i + " failed");
      });

      tableEl.colAggregatedData.map(function (d, i) {
        assert.equal(Math.round(d), Math.round(aggregationsResults.col[i][at]), at + " aggregation for column " + i + " failed");
      });
    });
    done();
  });

  test('Check Sorting functionality', function (done) {
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table');
    var e = {
      "model": {
        "index": 0
      }
    };
    var minI, maxI;

    tableEl.heatmapData.forEach(function (a, i) {
      heatmapEl.set("heatmapData", []);
      heatmapEl.set("heatmapData", data);
      e.model.index = i;
      tableEl._sortCol(e);
      minI = tableEl.heatmapData[i].map(function (x, j) {
        return x ? typeof x.value === "number" ? j : undefined : undefined;
      }).reduce(function (a, b) {
        return b ? a < b ? a : b : a;
      });
      maxI = tableEl.heatmapData[i].map(function (x, j) {
        return x ? typeof x.value === "number" ? j : undefined : undefined;
      }).reduce(function (a, b) {
        return b ? a > b ? a : b : a;
      });
      assert.equal(tableEl.heatmapData[i][minI].value, aggregationsResults.col[i].min, "sorting ascending on column " + i + " failed");
      assert.equal(tableEl.heatmapData[i][maxI].value, aggregationsResults.col[i].max, "sorting ascending on column " + i + " failed");
      tableEl._sortCol(e);
      minI = tableEl.heatmapData[i].map(function (x, j) {
        return x ? typeof x.value === "number" ? j : undefined : undefined;
      }).reduce(function (a, b) {
        return b ? a < b ? a : b : a;
      });
      maxI = tableEl.heatmapData[i].map(function (x, j) {
        return x ? typeof x.value === "number" ? j : undefined : undefined;
      }).reduce(function (a, b) {
        return b ? a > b ? a : b : a;
      });
      assert.equal(tableEl.heatmapData[i][minI].value, aggregationsResults.col[i].max, "sorting descending on column " + i + " failed");
      assert.equal(tableEl.heatmapData[i][maxI].value, aggregationsResults.col[i].min, "sorting descending on column " + i + " failed");
    });

    tableEl.heatmapData[0].map(function (a, i) {
      heatmapEl.set("heatmapData", []);
      heatmapEl.set("heatmapData", data);
      e.model.index = i;
      tableEl._sortRow(e);
      minI = tableEl.heatmapData.map(function (x, j) {
        return x[i] && typeof x[i].value === "number" ? j : undefined;
      }).reduce(function (a, b) {
        return b ? a < b ? a : b : a;
      });
      maxI = tableEl.heatmapData.map(function (x, j) {
        return x[i] && typeof x[i].value === "number" ? j : undefined;
      }).reduce(function (a, b) {
        return b ? a > b ? a : b : a;
      });
      assert.equal(tableEl.heatmapData[minI][i].value, aggregationsResults.row[i].min, "sorting ascending on row " + i + " failed");
      assert.equal(tableEl.heatmapData[maxI][i].value, aggregationsResults.row[i].max, "sorting ascending on row " + i + " failed");
      tableEl._sortRow(e);
      minI = tableEl.heatmapData.map(function (x, j) {
        return x[i] && typeof x[i].value === "number" ? j : undefined;
      }).reduce(function (a, b) {
        return b ? a < b ? a : b : a;
      });
      maxI = tableEl.heatmapData.map(function (x, j) {
        return x[i] && typeof x[i].value === "number" ? j : undefined;
      }).reduce(function (a, b) {
        return b ? a > b ? a : b : a;
      });
      assert.equal(tableEl.heatmapData[minI][i].value, aggregationsResults.row[i].max, "sorting descending on row " + i + " failed");
      assert.equal(tableEl.heatmapData[maxI][i].value, aggregationsResults.row[i].min, "sorting descending on row " + i + " failed");
    });
    done();
  });

});

suite('px-heatmap-grid with dataset with invalid values', function () {
  let heatmapEl, data, aggregationsTypes, aggregationsResults;

  setup(function (done) {
    heatmapEl = fixture('ev_heatmap_3');
    aggregationsTypes = ["average", "sum", "max", "min", "count", "std"];
    data = [{ "row": "Application 1", "col": "Operator 1", "value": 85.651 }, { "row": "Application 1", "col": "Operator 2", "value": 54.251 }, { "row": "Application 1", "col": "Operator 3", "value": 70.229 }, { "row": "Application 1", "col": "Operator 4", "value": 54.366 }, { "row": "Application 1", "col": "Operator 5", "value": 78.091 }, { "row": "Application 1", "col": "Operator 6", "value": 22.564 }, { "row": "Application 2", "col": "Operator 1", "value": 51.261 }, { "row": "Application 2", "col": "Operator 2", "value": 58.457 }, { "row": "Application 2", "col": "Operator 3", "value": 92.955 }, { "row": "Application 2", "col": "Operator 4", "value": 94.763 }, { "row": "Application 2", "col": "Operator 5", "value": 48.937 }, { "row": "Application 2", "col": "Operator 6", "value": 85.941 }, { "row": "Application 3", "col": "Operator 1", "value": 14.319 }, { "row": "Application 3", "col": "Operator 2", "value": 35.905 }, { "row": "Application 3", "col": "Operator 3", "value": "test" }, { "row": "Application 3", "col": "Operator 4", "value": 20.284 }, { "row": "Application 3", "col": "Operator 5", "value": 28.862 }, { "row": "Application 3", "col": "Operator 6", "value": 63.715 }, { "row": "Application 4", "col": "Operator 1", "value": 60.431 }, { "row": "Application 4", "col": "Operator 2", "value": 54.107 }, { "row": "Application 4", "col": "Operator 3", "value": 39.751 }, { "row": "Application 4", "col": "Operator 4", "value": 39.108 }, { "row": "Application 4", "col": "Operator 5", "value": 87.24 }, { "row": "Application 4", "col": "Operator 6", "value": 27.19 }, { "row": "Application 5", "col": "Operator 1", "value": "---" }, { "row": "Application 5", "col": "Operator 2", "value": 77.792 }, { "row": "Application 5", "col": "Operator 3", "value": 93.829 }, { "row": "Application 5", "col": "Operator 4", "value": 68.315 }, { "row": "Application 5", "col": "Operator 5", "value": 11.272 }, { "row": "Application 5", "col": "Operator 6", "value": "invalid" }, { "row": "Application 6", "col": "Operator 1", "value": 70.785 }, { "row": "Application 6", "col": "Operator 2", "value": 53.297 }, { "row": "Application 6", "col": "Operator 3", "value": 30.282 }, { "row": "Application 6", "col": "Operator 4", "value": 78.051 }, { "row": "Application 6", "col": "Operator 5", "value": 21.798 }, { "row": "Application 6", "col": "Operator 6", "value": 6.237 }, { "row": "Application 7", "col": "Operator 1", "value": 54.17 }, { "row": "Application 7", "col": "Operator 2", "value": 2.815 }, { "row": "Application 7", "col": "Operator 3", "value": 52.392 }, { "row": "Application 7", "col": "Operator 4", "value": "error" }, { "row": "Application 7", "col": "Operator 5", "value": 85.671 }, { "row": "Application 7", "col": "Operator 6", "value": 74.732 }, { "row": "Application 8", "col": "Operator 1", "value": 76.023 }, { "row": "Application 8", "col": "Operator 2", "value": 55.935 }, { "row": "Application 8", "col": "Operator 3", "value": 93.17 }, { "row": "Application 8", "col": "Operator 4", "value": 28.235 }, { "row": "Application 8", "col": "Operator 5", "value": 35.471 }, { "row": "Application 8", "col": "Operator 6", "value": 72.261 }, { "row": "Application 9", "col": "Operator 1", "value": 30.355 }, { "row": "Application 9", "col": "Operator 2", "value": 89.564 }, { "row": "Application 9", "col": "Operator 3", "value": 81.569 }, { "row": "Application 9", "col": "Operator 4", "value": 44.315 }, { "row": "Application 9", "col": "Operator 5", "value": 96.762 }, { "row": "Application 9", "col": "Operator 6", "value": 79.777 }, { "row": "Application 10", "col": "Operator 1", "value": 22.198 }, { "row": "Application 10", "col": "Operator 2", "value": 63.323 }, { "row": "Application 10", "col": "Operator 3", "value": 54.384 }, { "row": "Application 10", "col": "Operator 4", "value": 82.436 }, { "row": "Application 10", "col": "Operator 5", "value": 29.051 }, { "row": "Application 10", "col": "Operator 6", "value": 21.279 }];
    aggregationsResults = { "row": [{ "average": 60.858, "sum": 365.152, "max": 85.651, "min": 22.564, "count": 6, "std": 20.622 }, { "average": 72.052, "sum": 432.314, "max": 94.763, "min": 48.937, "count": 6, "std": 19.566 }, { "average": 32.617, "sum": 163.085, "max": 63.715, "min": 14.319, "count": 5, "std": 17.198 }, { "average": 51.304, "sum": 307.827, "max": 87.24, "min": 27.19, "count": 6, "std": 19.348 }, { "average": 62.802, "sum": 251.208, "max": 93.829, "min": 11.272, "count": 4, "std": 31.117 }, { "average": 43.408, "sum": 260.45, "max": 78.051, "min": 6.237, "count": 6, "std": 26.039 }, { "average": 53.956, "sum": 269.78, "max": 85.671, "min": 2.815, "count": 5, "std": 28.479 }, { "average": 60.182, "sum": 361.095, "max": 93.17, "min": 28.235, "count": 6, "std": 22.855 }, { "average": 70.39, "sum": 422.342, "max": 96.762, "min": 30.355, "count": 6, "std": 24.354 }, { "average": 45.445, "sum": 272.671, "max": 82.436, "min": 21.279, "count": 6, "std": 22.953 }], "col": [{ "average": 51.688, "sum": 465.193, "max": 85.651, "min": 14.319, "count": 9, "std": 23.367 }, { "average": 54.544, "sum": 545.446, "max": 89.564, "min": 2.815, "count": 10, "std": 22.105 }, { "average": 67.617, "sum": 608.561, "max": 93.829, "min": 30.282, "count": 9, "std": 22.999 }, { "average": 56.652, "sum": 509.873, "max": 94.763, "min": 20.284, "count": 9, "std": 24.282 }, { "average": 52.315, "sum": 523.155, "max": 96.762, "min": 11.272, "count": 10, "std": 29.957 }, { "average": 50.41, "sum": 453.696, "max": 85.941, "min": 6.237, "count": 9, "std": 28.839 }] };

    var event = new CustomEvent('set-heatmap-data', { detail: { data: data } });
    heatmapEl.dispatchEvent(event);

    flush(() => {
      done();
    });
  });

  test('Check table cells have correct data', function (done) {
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table'),
      tableCells = Polymer.dom(tableEl.root).querySelectorAll('.table-cell'),
      cells = [];
    tableCells.forEach(function (x) {
      cells.push(x.innerText.trim());
    });

    data.forEach(function (item) {
      assert.notEqual(cells.indexOf(item.value.toString()), -1, "'" + item.value + "' not found in cells");
    });
    done();
  });

  test('Check Aggregation functionality', function (done) {
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table');
    aggregationsTypes.map(function (at) {
      heatmapEl.set("aggregationType", at);
      tableEl.rowAggregatedData.map(function (d, i) {
        assert.equal(Math.round(d), Math.round(aggregationsResults.row[i][at]), at + " aggregation for row " + i + " failed");
      });

      tableEl.colAggregatedData.map(function (d, i) {
        assert.equal(Math.round(d), Math.round(aggregationsResults.col[i][at]), at + " aggregation for column " + i + " failed");
      });
    });
    done();
  });

  test('Check Sorting functionality', function (done) {
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table');
    var e = {
      "model": {
        "index": 0
      }
    };
    var minI, maxI;

    tableEl.heatmapData.forEach(function (a, i) {
      heatmapEl.set("heatmapData", []);
      heatmapEl.set("heatmapData", data);
      e.model.index = i;
      tableEl._sortCol(e);
      minI = tableEl.heatmapData[i].map(function (x, j) {
        return x ? typeof x.value === "number" ? j : undefined : undefined;
      }).reduce(function (a, b) {
        return b ? a < b ? a : b : a;
      });
      maxI = tableEl.heatmapData[i].map(function (x, j) {
        return x ? typeof x.value === "number" ? j : undefined : undefined;
      }).reduce(function (a, b) {
        return b ? a > b ? a : b : a;
      });
      assert.equal(tableEl.heatmapData[i][minI].value, aggregationsResults.col[i].min, "sorting ascending on column " + i + " failed");
      assert.equal(tableEl.heatmapData[i][maxI].value, aggregationsResults.col[i].max, "sorting ascending on column " + i + " failed");
      tableEl._sortCol(e);
      minI = tableEl.heatmapData[i].map(function (x, j) {
        return x ? typeof x.value === "number" ? j : undefined : undefined;
      }).reduce(function (a, b) {
        return b ? a < b ? a : b : a;
      });
      maxI = tableEl.heatmapData[i].map(function (x, j) {
        return x ? typeof x.value === "number" ? j : undefined : undefined;
      }).reduce(function (a, b) {
        return b ? a > b ? a : b : a;
      });
      assert.equal(tableEl.heatmapData[i][minI].value, aggregationsResults.col[i].max, "sorting descending on column " + i + " failed");
      assert.equal(tableEl.heatmapData[i][maxI].value, aggregationsResults.col[i].min, "sorting descending on column " + i + " failed");
    });

    tableEl.heatmapData[0].map(function (a, i) {
      heatmapEl.set("heatmapData", []);
      heatmapEl.set("heatmapData", data);
      e.model.index = i;
      tableEl._sortRow(e);
      minI = tableEl.heatmapData.map(function (x, j) {
        return x[i] && typeof x[i].value === "number" ? j : undefined;
      }).reduce(function (a, b) {
        return b ? a < b ? a : b : a;
      });
      maxI = tableEl.heatmapData.map(function (x, j) {
        return x[i] && typeof x[i].value === "number" ? j : undefined;
      }).reduce(function (a, b) {
        return b ? a > b ? a : b : a;
      });
      assert.equal(tableEl.heatmapData[minI][i].value, aggregationsResults.row[i].min, "sorting ascending on row " + i + " failed");
      assert.equal(tableEl.heatmapData[maxI][i].value, aggregationsResults.row[i].max, "sorting ascending on row " + i + " failed");
      tableEl._sortRow(e);
      minI = tableEl.heatmapData.map(function (x, j) {
        return x[i] && typeof x[i].value === "number" ? j : undefined;
      }).reduce(function (a, b) {
        return b ? a < b ? a : b : a;
      });
      maxI = tableEl.heatmapData.map(function (x, j) {
        return x[i] && typeof x[i].value === "number" ? j : undefined;
      }).reduce(function (a, b) {
        return b ? a > b ? a : b : a;
      });
      assert.equal(tableEl.heatmapData[minI][i].value, aggregationsResults.row[i].max, "sorting descending on row " + i + " failed");
      assert.equal(tableEl.heatmapData[maxI][i].value, aggregationsResults.row[i].min, "sorting descending on row " + i + " failed");
    });
    done();
  });

});

suite('px-heatmap-grid with dataset without headers', function() {
  let heatmapEl, data, aggregationsTypes, aggregationsResults;

  setup(function(done) {
    heatmapEl = fixture('ev_heatmap_4');
    aggregationsTypes = ["average","sum","max","min","count","std"];
    data = [["",50.122,0.842,60.073,85.093,""],[19.304,97.435,8.625,59.224,73.484,67.464],[7.213,53.338,"test",95.467,48.129,85.09],[26.784,10.642,5.1,28.582,5.385,72.147],["---",47.306,7.215,73.494,88.1,"invalid"],[39.416,58.45,83.115,63.859,13.903,51.432],[48.324,"",56.584,"error",65.847,96.1],[34.64,6.023,75.429,58.49,47.203,11.122],[60.067,4.552,40.957,25.02,87.715,35.073],["",47.024,92.69,23.478,66.112,""]];
    aggregationsResults = {"row":[{"average":49.032,"sum":196.13,"max":85.093,"min":0.842,"count":4,"std":30.601},{"average":54.256,"sum":325.536,"max":97.435,"min":8.625,"count":6,"std":30.922},{"average":57.847,"sum":289.237,"max":95.467,"min":7.213,"count":5,"std":31.099},{"average":24.773,"sum":148.64,"max":72.147,"min":5.1,"count":6,"std":23.185},{"average":54.028,"sum":216.115,"max":88.1,"min":7.215,"count":4,"std":30.726},{"average":51.695,"sum":310.175,"max":83.115,"min":13.903,"count":6,"std":21.447},{"average":66.713,"sum":266.855,"max":96.1,"min":48.324,"count":4,"std":18.063},{"average":38.817,"sum":232.907,"max":75.429,"min":6.023,"count":6,"std":24.69},{"average":42.23,"sum":253.384,"max":87.715,"min":4.552,"count":6,"std":26.317},{"average":57.326,"sum":229.304,"max":92.69,"min":23.478,"count":4,"std":25.395}],"col":[{"average":33.678,"sum":235.748,"max":60.067,"min":7.213,"count":7,"std":16.471},{"average":41.654,"sum":374.892,"max":97.435,"min":4.552,"count":9,"std":28.422},{"average":41.173,"sum":370.557,"max":92.69,"min":0.842,"count":9,"std":34.903},{"average":54.187,"sum":487.687,"max":95.467,"min":23.478,"count":9,"std":22.847},{"average":58.097,"sum":580.971,"max":88.1,"min":5.385,"count":10,"std":27.958},{"average":59.775,"sum":418.428,"max":96.1,"min":11.122,"count":7,"std":27.306}]};

    var event = new CustomEvent('set-heatmap-data', {detail: {data: data}});
    heatmapEl.dispatchEvent(event);

    flush(()=>{
      done();
    });
  });

  test('Check table cells have correct data', function(done){
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table'),
      tableCells = Polymer.dom(tableEl.root).querySelectorAll('.table-cell'),
      cells = [];
    tableCells.forEach(function (x) {
      cells.push(x.innerText.trim());
    });

    data.forEach(function (item) {
      item.forEach(function (value) {
        assert.notEqual(cells.indexOf(value.toString()), -1, "'" + value + "' not found in cells");
      });
    });
    done();
  });

});

suite('px-heatmap-grid with single array dataset', function() {
  let heatmapEl, data, aggregationsTypes, aggregationsResults;

  setup(function(done) {
    heatmapEl = fixture('ev_heatmap_5');
    aggregationsTypes = ["average","sum","max","min","count","std"];
    data = [27.927,96.706,72.122,95.842,69.363,81.98,35.381,53.73,60.676,16.866,78.003];
    aggregationsResults = {"row":[{"average":62.599,"sum":688.596,"max":96.706,"min":16.866,"count":11,"std":25.467}]};

    var event = new CustomEvent('set-heatmap-data', {detail: {data: data}});
    heatmapEl.dispatchEvent(event);

    flush(()=>{
      done();
    });
  });

  test('Check table cells have correct data', function(done){
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table'),
      tableCells = Polymer.dom(tableEl.root).querySelectorAll('.table-cell'),
      cells = [];
    tableCells.forEach(function (x) {
      cells.push(x.innerText.trim());
    });

    data.forEach(function (value) {
      assert.notEqual(cells.indexOf(value.toString()), -1, "'" + value + "' not found in cells");
    });
    done();
  });

  test('Check Sorting functionality', function(done){
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table');
    var e = {
      "model": {
        "index": 0
      }
    };
    var minI, maxI;

    tableEl.heatmapData[0].map(function(a,i) {
      heatmapEl.set("heatmapData", []);
      heatmapEl.set("heatmapData", data);
      e.model.index = i;
      tableEl._sortRow(e);
      minI = tableEl.heatmapData.map(function (x, j) {
        return x[i] && typeof x[i].value === "number" ? j : undefined;
      }).reduce(function (a, b) {
        return b ? a < b ? a : b : a;
      });
      maxI = tableEl.heatmapData.map(function (x, j) {
        return x[i] && typeof x[i].value === "number" ? j : undefined;
      }).reduce(function (a, b) {
        return b ? a > b ? a : b : a;
      });
      assert.equal(tableEl.heatmapData[minI][i].value, aggregationsResults.row[i].min, "sorting ascending on row " + i + " failed");
      assert.equal(tableEl.heatmapData[maxI][i].value, aggregationsResults.row[i].max, "sorting ascending on row " + i + " failed");
      tableEl._sortRow(e);
      minI = tableEl.heatmapData.map(function (x, j) {
        return x[i] && typeof x[i].value === "number" ? j : undefined;
      }).reduce(function (a, b) {
        return b ? a < b ? a : b : a;
      });
      maxI = tableEl.heatmapData.map(function (x, j) {
        return x[i] && typeof x[i].value === "number" ? j : undefined;
      }).reduce(function (a, b) {
        return b ? a > b ? a : b : a;
      });
      assert.equal(tableEl.heatmapData[minI][i].value, aggregationsResults.row[i].max, "sorting descending on row " + i + " failed");
      assert.equal(tableEl.heatmapData[maxI][i].value, aggregationsResults.row[i].min, "sorting descending on row " + i + " failed");
    });
    done();
  });

});

suite('px-heatmap-grid with columns only', function() {
  let heatmapEl, data, aggregationsTypes, aggregationsResults;

  setup(function(done) {
    heatmapEl = fixture('ev_heatmap_6');
    aggregationsTypes = ["average","sum","max","min","count","std"];
    data = [{ "col":"Operator 1", "values": [33.917,51.144,59.91,69.481,50.738,95.843,81.323,87.37,72.748,50.629]},{ "col":"Operator 2", "values": [99.099,40.916,9.29,73.8,45.477,73.791,19.264,88.945,55.847,54.627]},{ "col":"Operator 3", "values": [90.542,1.382,73.407,89.504,30.439,62.797,51.97,5.628,79.652,55.344]},{ "col":"Operator 4", "values": [80.818,71.966,12.019,27.253,61.023,16.341,11.839,79.729,80.608,88.231]},{ "col":"Operator 5", "values": [82.61,59.023,97.576,96.683,20.349,81.904,32.099,90.961,31.754,98.887]},{ "col":"Operator 6", "values": [17.255,2.964,15.644,36.417,97.883,53.041,61.478,24.681,32.845,5.488]}];
    aggregationsResults = {"row":[{"average":67.373,"sum":404.241,"max":99.099,"min":17.255,"count":6,"std":30.516},{"average":37.899,"sum":227.395,"max":71.966,"min":1.382,"count":6,"std":26.911},{"average":44.641,"sum":267.846,"max":97.576,"min":9.29,"count":6,"std":34.199},{"average":65.523,"sum":393.138,"max":96.683,"min":27.253,"count":6,"std":25.631},{"average":50.984,"sum":305.909,"max":97.883,"min":20.349,"count":6,"std":24.803},{"average":63.952,"sum":383.717,"max":95.843,"min":16.341,"count":6,"std":25.243},{"average":42.995,"sum":257.973,"max":81.323,"min":11.839,"count":6,"std":24.302},{"average":62.885,"sum":377.314,"max":90.961,"min":5.628,"count":6,"std":34.371},{"average":58.909,"sum":353.454,"max":80.608,"min":31.754,"count":6,"std":20.488},{"average":58.867,"sum":353.206,"max":98.887,"min":5.488,"count":6,"std":30.031}],"col":[{"average":65.31,"sum":653.103,"max":95.843,"min":33.917,"count":10,"std":18.415},{"average":56.105,"sum":561.056,"max":99.099,"min":9.29,"count":10,"std":27.29},{"average":54.066,"sum":540.665,"max":90.542,"min":1.382,"count":10,"std":30.622},{"average":52.982,"sum":529.827,"max":88.231,"min":11.839,"count":10,"std":30.489},{"average":69.184,"sum":691.846,"max":98.887,"min":20.349,"count":10,"std":29.198},{"average":34.769,"sum":347.696,"max":97.883,"min":2.964,"count":10,"std":27.713}]};

    var event = new CustomEvent('set-heatmap-data', {detail: {data: data}});
    heatmapEl.dispatchEvent(event);

    flush(()=>{
      done();
    });
  });

  test('Check column headers have correct data', function(done){
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table'),
      colHeader = Polymer.dom(tableEl.root).querySelectorAll('.col-header'),
      headers = [];
    heatmapEl.hideColHeader = false;
    colHeader.forEach(function (x) {
      headers.push(x.querySelector('span').innerText.trim());
    });

    data.forEach(function (item) {
      assert.notEqual(headers.indexOf("" + item.col), -1, "'" + item.col + "' not found in column headers");
    });
    done();
  });

  test('Check table cells have correct data', function(done){
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table'),
      tableCells = Polymer.dom(tableEl.root).querySelectorAll('.table-cell'),
      cells = [];
    tableCells.forEach(function (x) {
      cells.push(x.innerText.trim());
    });

    data.forEach(function (item) {
      item.values.forEach(function (value) {
        assert.notEqual(cells.indexOf(value.toString()), -1, "'" + value + "' not found in cells");
      });
    });
    done();
  });

  test('Check hide/show column headers functionality', function(done){
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table'),
      colHeader = Polymer.dom(tableEl.root).querySelector('.col-header');
    assert.isFalse(heatmapEl.hideColHeader, "px-heatmap-grid hideColHeader property was supposed to be false");
    assert.equal(window.getComputedStyle(colHeader).display, "flex", "column header element was not supposed to be hidden");

    heatmapEl.toggleColHeader();
    setTimeout(function () {
      assert.isTrue(heatmapEl.hideColHeader, "px-heatmap-grid hideColHeader property was supposed to be true");
      assert.equal(window.getComputedStyle(colHeader).display, "none", "column header element was supposed to be hidden");
      done();
    }, 10);
  });

});

suite('px-heatmap-grid with rows only', function() {
  let heatmapEl, data, aggregationsTypes, aggregationsResults;

  setup(function(done) {
    heatmapEl = fixture('ev_heatmap_7');
    aggregationsTypes = ["average","sum","max","min","count","std"];
    data = [{ "row":"Application 1", "values": [42.27,56.33,61.766,37.095,13.403,63.378]},{ "row":"Application 2", "values": [69.04,60.093,55.894,5.104,24.562,35.816]},{ "row":"Application 3", "values": [25.558,47.288,47.282,30.134,90.535,86.107]},{ "row":"Application 4", "values": [75.97,98.994,55.965,64.349,52.851,55.576]},{ "row":"Application 5", "values": [55.66,43.552,35.643,91.663,11.339,11.435]},{ "row":"Application 6", "values": [50.814,79.112,17.333,37.953,23.23,87.134]},{ "row":"Application 7", "values": [81.881,24.794,72.906,77.667,3.945,31.83]},{ "row":"Application 8", "values": [26.353,49.151,2.575,0.034,55.255,77.813]},{ "row":"Application 9", "values": [93.709,8.372,42.865,54.183,59.237,25.553]},{ "row":"Application 10", "values": [13.085,92.618,83.185,58.496,98.688,71.385]}];
    aggregationsResults = {"row":[{"average":45.707,"sum":274.242,"max":63.378,"min":13.403,"count":6,"std":17.38},{"average":41.751,"sum":250.509,"max":69.04,"min":5.104,"count":6,"std":22.191},{"average":54.484,"sum":326.904,"max":90.535,"min":25.558,"count":6,"std":25.275},{"average":67.284,"sum":403.705,"max":98.994,"min":52.851,"count":6,"std":16.14},{"average":41.548,"sum":249.292,"max":91.663,"min":11.339,"count":6,"std":27.595},{"average":49.262,"sum":295.576,"max":87.134,"min":17.333,"count":6,"std":26.308},{"average":48.837,"sum":293.023,"max":81.881,"min":3.945,"count":6,"std":29.958},{"average":35.196,"sum":211.181,"max":77.813,"min":0.034,"count":6,"std":28.26},{"average":47.319,"sum":283.919,"max":93.709,"min":8.372,"count":6,"std":26.93},{"average":69.576,"sum":417.457,"max":98.688,"min":13.085,"count":6,"std":28.521}],"col":[{"average":53.434,"sum":534.34,"max":93.709,"min":13.085,"count":10,"std":25.411},{"average":56.03,"sum":560.304,"max":98.994,"min":8.372,"count":10,"std":26.945},{"average":47.541,"sum":475.414,"max":83.185,"min":2.575,"count":10,"std":23.14},{"average":45.667,"sum":456.678,"max":91.663,"min":0.034,"count":10,"std":27.978},{"average":43.304,"sum":433.045,"max":98.688,"min":3.945,"count":10,"std":31.63},{"average":54.602,"sum":546.027,"max":87.134,"min":11.435,"count":10,"std":25.549}]};

    var event = new CustomEvent('set-heatmap-data', {detail: {data: data}});
    heatmapEl.dispatchEvent(event);

    flush(()=>{
      done();
    });
  });

  test('Check row headers have correct data', function(done){
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table'),
      rowHeader = Polymer.dom(tableEl.root).querySelectorAll('.row-header'),
      headers = [];
    heatmapEl.hideRowHeader = false;
    rowHeader.forEach(function (x) {
      headers.push(x.querySelector('span').innerText.trim());
    });

    data.forEach(function (item) {
      assert.notEqual(headers.indexOf("" + item.row), -1, "'" + item.row + "' not found in row headers");
    });
    done();
  });

  test('Check table cells have correct data', function(done){
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table'),
      tableCells = Polymer.dom(tableEl.root).querySelectorAll('.table-cell'),
      cells = [];
    tableCells.forEach(function (x) {
      cells.push(x.innerText.trim());
    });

    data.forEach(function (item) {
      item.values.forEach(function (value) {
        assert.notEqual(cells.indexOf(value.toString()), -1, "'" + value + "' not found in cells");
      });
    });
    done();
  });

  test('Check hide/show row headers functionality', function(done){
    var tableEl = Polymer.dom(heatmapEl.root).querySelector('px-heatmap-grid-table'),
      rowHeader = Polymer.dom(tableEl.root).querySelector('.table-row-header');
    assert.isFalse(heatmapEl.hideRowHeader, "px-heatmap-grid hideRowHeader property was supposed to be false");
    assert.equal(window.getComputedStyle(rowHeader).display, "flex", "row header element was not supposed to be hidden");

    heatmapEl.toggleRowHeader();
    setTimeout(function () {
      assert.isTrue(heatmapEl.hideRowHeader, "px-heatmap-grid hideRowHeader property was supposed to be true");
      assert.equal(window.getComputedStyle(rowHeader).display, "none", "row header element was supposed to be hidden");
      done();
    }, 10);
  });

});
