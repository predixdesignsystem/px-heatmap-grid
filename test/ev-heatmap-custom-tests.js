// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {
  // Place any setup steps like variable declaration and initialization here
  var heatmapEl = Polymer.dom(document).querySelector('ev-heatmap');
  var data = [
    {
      "row": "Application 1",
      "col": "Operator 1",
      "value": 16.639
    },
    {
      "row": "Application 1",
      "col": "Operator 2",
      "value": 55.464
    },
    {
      "row": "Application 1",
      "col": "Operator 3",
      "value": 56.546
    },
    {
      "row": "Application 2",
      "col": "Operator 1",
      "value": 91.049
    },
    {
      "row": "Application 2",
      "col": "Operator 2",
      "value": 21.692
    },
    {
      "row": "Application 2",
      "col": "Operator 3",
      "value": 97.234
    },
    {
      "row": "Application 3",
      "col": "Operator 1",
      "value": 34.453
    },
    {
      "row": "Application 3",
      "col": "Operator 2",
      "value": 23.453
    },
    {
      "row": "Application 3",
      "col": "Operator 3",
      "value": 48.234
    }];
  var aggregationsTypes = ["average","sum","max","min","count","std"];
  var aggregationsResults = {
    "row": [
      {
        "average": 42.8830,
        "sum": 128.6490,
        "max": 56.5460,
        "min": 16.6390,
        "count": 3,
        "std": 18.5625
      },
      {
        "average": 69.9916,
        "sum": 209.9750,
        "max": 97.2340,
        "min": 21.6920,
        "count": 3,
        "std": 34.2462
      },
      {
        "average": 35.3800,
        "sum": 106.1400,
        "max": 48.2340,
        "min": 23.4530,
        "count": 3,
        "std": 10.1380
      }
    ],
    "col": [
      {
        "average": 47.3803,
        "sum": 142.1410,
        "max": 91.0490,
        "min": 16.6390,
        "count": 3,
        "std": 31.7232
      },
      {
        "average": 33.5363,
        "sum": 100.6090,
        "max": 55.4640,
        "min": 21.6920,
        "count": 3,
        "std": 15.5218
      },
      {
        "average": 67.3380,
        "sum": 202.0140,
        "max": 97.2340,
        "min": 48.2340,
        "count": 3,
        "std": 21.4102
      }
    ]
  };
  heatmapEl.set("heatmapData", data);

  // This is the placeholder suite to place custom tests in
  // Use testCase(options) for a more convenient setup of the test cases
  suite('Custom Automation Tests for ev-heatmap', function() {
    test('Check main element exists', function(done){
      assert.isTrue(heatmapEl !== undefined, "ev-heatmap doesn't exist");
      assert.isTrue(heatmapEl !== null, "ev-heatmap is empty");
      done();
    });

    test('Check table element exists', function(done){
      var tableEl = Polymer.dom(heatmapEl.root).querySelector('ev-heatmap-table');
      assert.isTrue(tableEl !== undefined, "ev-heatmap-table doesn't exist");
      assert.isTrue(tableEl !== null, "ev-heatmap-table is empty");
      done();
    });

    test('Check scale element exists', function(done){
      var scaleEl = Polymer.dom(heatmapEl.root).querySelector('ev-heatmap-scale');
      assert.isTrue(scaleEl !== undefined, "ev-heatmap-scale doesn't exist");
      assert.isTrue(scaleEl !== null, "ev-heatmap-scale is empty");
      done();
    });

    test('Check row header element exists', function(done){
      var tableEl = Polymer.dom(heatmapEl.root).querySelector('ev-heatmap-table'),
          rowHeader = Polymer.dom(tableEl.root).querySelector('.table-row-header');
      assert.isTrue(rowHeader !== undefined, "row header element doesn't exist");
      assert.isTrue(rowHeader !== null, "row header element is empty");
      done();
    });

    test('Check column header element exists', function(done){
      var tableEl = Polymer.dom(heatmapEl.root).querySelector('ev-heatmap-table'),
        colHeader = Polymer.dom(tableEl.root).querySelector('.col-header');
      assert.isTrue(colHeader !== undefined, "column header element doesn't exist");
      assert.isTrue(colHeader !== null, "column header element is empty");
      done();
    });

    test('Check table column element exists', function(done){
      var tableEl = Polymer.dom(heatmapEl.root).querySelector('ev-heatmap-table'),
        tableCol = Polymer.dom(tableEl.root).querySelector('.table-column');
      assert.isTrue(tableCol !== undefined, "table column element doesn't exist");
      assert.isTrue(tableCol !== null, "table column element is empty");
      done();
    });

    test('Check cell element exists', function(done){
      var tableEl = Polymer.dom(heatmapEl.root).querySelector('ev-heatmap-table'),
        cell = Polymer.dom(tableEl.root).querySelector('.table-cell');
      assert.isTrue(cell !== undefined, "cell element doesn't exist");
      assert.isTrue(cell !== null, "cell element is empty");
      done();
    });

    test('Check row headers have correct data', function(done){
      var tableEl = Polymer.dom(heatmapEl.root).querySelector('ev-heatmap-table'),
        rowHeader = Polymer.dom(tableEl.root).querySelectorAll('.row-header'),
        headers = [];
      heatmapEl.hideRowHeader = false;
      rowHeader.forEach(x => headers.push(x.querySelector("span").innerText));

      data.forEach(function(item){
        assert.notEqual(headers.indexOf(""+item.row), -1, "'" + item.row + "' not found in row headers");
      });
      done();
    });

    test('Check column headers have correct data', function(done){
      var tableEl = Polymer.dom(heatmapEl.root).querySelector('ev-heatmap-table'),
        colHeader = Polymer.dom(tableEl.root).querySelectorAll('.col-header'),
        headers = [];
      heatmapEl.hideColHeader = false;
      colHeader.forEach(x => headers.push(x.querySelector("span").innerText));

      data.forEach(function(item){
        assert.notEqual(headers.indexOf(""+item.col), -1, "'" + item.col + "' not found in column headers");
      });
      done();
    });

    test('Check table cells have correct data', function(done){
      var tableEl = Polymer.dom(heatmapEl.root).querySelector('ev-heatmap-table'),
        tableCells = Polymer.dom(tableEl.root).querySelectorAll('.table-cell'),
        cells = [];
      tableCells.forEach(x => cells.push(x.innerText));

      data.forEach(function(item){
        assert.notEqual(cells.indexOf(""+item.value), -1, "'" + item.value + "' not found in cells");
      });
      done();
    });

    test('Check hide/show color scale functionality', function(done){
      var scaleEl = Polymer.dom(heatmapEl.root).querySelector('ev-heatmap-scale');
      assert.isFalse(heatmapEl.hideScale, "ev-heatmap hideScale property was supposed to be false");
      assert.isFalse(scaleEl.hidden, "scale element was not supposed to be hidden");
      heatmapEl.hideScale = true;

      assert.isTrue(heatmapEl.hideScale, "ev-heatmap hideScale property was supposed to be true");
      assert.isTrue(scaleEl.hidden, "scale element was supposed to be hidden");
      done();
    });

    test('Check hide/show row headers functionality', function(done){
      var tableEl = Polymer.dom(heatmapEl.root).querySelector('ev-heatmap-table'),
        rowHeader = Polymer.dom(tableEl.root).querySelector('.table-row-header');
      assert.isFalse(heatmapEl.hideRowHeader, "ev-heatmap hideRowHeader property was supposed to be false");
      assert.equal(window.getComputedStyle(rowHeader).display, "flex", "row header element was not supposed to be hidden");

      heatmapEl.hideRowHeader = true;
      setTimeout(function() {
        assert.isTrue(heatmapEl.hideRowHeader, "ev-heatmap hideRowHeader property was supposed to be true");
        assert.equal(window.getComputedStyle(rowHeader).display, "none", "row header element was supposed to be hidden");
        heatmapEl.set("hideRowHeader", false);
        done();
      }, 10);
    });

    test('Check hide/show column headers functionality', function(done){
      var tableEl = Polymer.dom(heatmapEl.root).querySelector('ev-heatmap-table'),
        colHeader = Polymer.dom(tableEl.root).querySelectorAll('.col-header'),
        rowHeader = Polymer.dom(tableEl.root).querySelector('.table-row-header');
      assert.isFalse(heatmapEl.hideColHeader, "ev-heatmap hideColHeader property was supposed to be false");
      assert.isFalse(rowHeader.classList.contains('disable-col-header'), "row header should not contain class 'disable-col-header'");
      colHeader.forEach(x => assert.equal(window.getComputedStyle(x).display, "block", "row header '" + x.innerText + "' was not supposed to be hidden"));

      heatmapEl.hideColHeader = true;
      setTimeout(function() {
        assert.isTrue(heatmapEl.hideColHeader, "ev-heatmap hideColHeader property was supposed to be true");
        assert.isTrue(rowHeader.classList.contains('disable-col-header'), "row header should contain class 'disable-col-header'");
        colHeader.forEach(x => assert.equal(window.getComputedStyle(x).display, "none", "row header '" + x.innerText + "' was supposed to be hidden"));
        heatmapEl.set("hideColHeader", false);
        done();
      }, 10)
    });

    test('Check scale min/max functionality', function(done){
      assert.equal(heatmapEl.scaleMin, 0, "Scale min default was supposed to be '0'");
      assert.equal(heatmapEl.scaleMax, 100, "Scale max default was supposed to be '100'");
      heatmapEl.set("scaleMin",20);
      heatmapEl.set("scaleMax", 80);
      setTimeout(function() {
        assert.equal(heatmapEl.scaleMin, 20, "Scale min was supposed to be '20'");
        assert.equal(heatmapEl.scaleMax, 80, "Scale max was supposed to be '80'");
        done();
      }, 10);
    });

    test('Check Aggregation functionality', function(done) {
      var tableEl = Polymer.dom(heatmapEl.root).querySelector('ev-heatmap-table');
      aggregationsTypes.map(function(at) {
        heatmapEl.set("aggregationType", at);
        tableEl.rowAggregatedData.map((d,i) => assert.equal(d, aggregationsResults.row[i][at], at + " aggregation for row " + i + " failed"));
        tableEl.colAggregatedData.map((d,i) => assert.equal(d, aggregationsResults.col[i][at], at + " aggregation for column " + i + " failed"));
      });
      done();
    });

    test('Check Sorting functionality', function(done){
      var tableEl = Polymer.dom(heatmapEl.root).querySelector('ev-heatmap-table');
      var e = {
        "model": {
          "index": 0
        }
      };

      tableEl.heatmapData.forEach(function(a,i) {
        heatmapEl.set("heatmapData", []);
        heatmapEl.set("heatmapData", data);
        e.model.index = i;
        tableEl._sortCol(e);
        assert.equal(tableEl.heatmapData[i][0].value, aggregationsResults.col[i].min, "sorting ascending on column " + i + " failed");
        assert.equal(tableEl.heatmapData[i][tableEl.heatmapData[0].length - 1].value, aggregationsResults.col[i].max, "sorting ascending on column " + i + " failed");
        tableEl._sortCol(e);
        assert.equal(tableEl.heatmapData[i][0].value, aggregationsResults.col[i].max, "sorting descending on column " + i + " failed");
        assert.equal(tableEl.heatmapData[i][tableEl.heatmapData[0].length - 1].value, aggregationsResults.col[i].min, "sorting descending on column " + i + " failed");
      });

      tableEl.heatmapData[0].map(function(a,i) {
        heatmapEl.set("heatmapData", []);
        heatmapEl.set("heatmapData", data);
        e.model.index = i;
        tableEl._sortRow(e);
        assert.equal(tableEl.heatmapData[0][i].value, aggregationsResults.row[i].min, "sorting ascending on row " + i + " failed");
        assert.equal(tableEl.heatmapData[tableEl.heatmapData.length - 1][i].value, aggregationsResults.row[i].max, "sorting ascending on row " + i + " failed");
        tableEl._sortRow(e);
        assert.equal(tableEl.heatmapData[0][i].value, aggregationsResults.row[i].max, "sorting descending on row " + i + " failed");
        assert.equal(tableEl.heatmapData[tableEl.heatmapData.length - 1][i].value, aggregationsResults.row[i].min, "sorting descending on row " + i + " failed");
      });
      done();
    });
  });
}
