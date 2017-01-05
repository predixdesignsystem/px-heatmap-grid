// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests(testN) {
  // Place any setup steps like variable declaration and initialization here

  var data1 = [{"row": "Application 1","col": "Operator 1","value": 9.237},{"row": "Application 1","col": "Operator 2","value": 0.336},{"row": "Application 1","col": "Operator 3","value": 25.862},{"row": "Application 1","col": "Operator 4","value": 51.117},{"row": "Application 1","col": "Operator 5","value": 6.908},{"row": "Application 1","col": "Operator 6","value": 67.247},{"row": "Application 2","col": "Operator 1","value": 26.597},{"row": "Application 2","col": "Operator 2","value": 6.106},{"row": "Application 2","col": "Operator 3","value": 39.643},{"row": "Application 2","col": "Operator 4","value": 61.585},{"row": "Application 2","col": "Operator 5","value": 10.774},{"row": "Application 2","col": "Operator 6","value": 40.802},{"row": "Application 3","col": "Operator 1","value": 31.57},{"row": "Application 3","col": "Operator 2","value": 74.492},{"row": "Application 3","col": "Operator 3","value": 54.752},{"row": "Application 3","col": "Operator 4","value": 21.026},{"row": "Application 3","col": "Operator 5","value": 42.339},{"row": "Application 3","col": "Operator 6","value": 14.896},{"row": "Application 4","col": "Operator 1","value": 95.94},{"row": "Application 4","col": "Operator 2","value": 77.545},{"row": "Application 4","col": "Operator 3","value": 52.142},{"row": "Application 4","col": "Operator 4","value": 53.869},{"row": "Application 4","col": "Operator 5","value": 26.531},{"row": "Application 4","col": "Operator 6","value": 86.428},{"row": "Application 5","col": "Operator 1","value": 68.452},{"row": "Application 5","col": "Operator 2","value": 40.916},{"row": "Application 5","col": "Operator 3","value": 56.627},{"row": "Application 5","col": "Operator 4","value": 9.98},{"row": "Application 5","col": "Operator 5","value": 78.38},{"row": "Application 5","col": "Operator 6","value": 5.887},{"row": "Application 6","col": "Operator 1","value": 87.706},{"row": "Application 6","col": "Operator 2","value": 63.358},{"row": "Application 6","col": "Operator 3","value": 30.674},{"row": "Application 6","col": "Operator 4","value": 50.473},{"row": "Application 6","col": "Operator 5","value": 76.512},{"row": "Application 6","col": "Operator 6","value": 29.124},{"row": "Application 7","col": "Operator 1","value": 23.596},{"row": "Application 7","col": "Operator 2","value": 24.408},{"row": "Application 7","col": "Operator 3","value": 47.1},{"row": "Application 7","col": "Operator 4","value": 3.892},{"row": "Application 7","col": "Operator 5","value": 77.998},{"row": "Application 7","col": "Operator 6","value": 80.21},{"row": "Application 8","col": "Operator 1","value": 26.671},{"row": "Application 8","col": "Operator 2","value": 25.657},{"row": "Application 8","col": "Operator 3","value": 62.89},{"row": "Application 8","col": "Operator 4","value": 34.644},{"row": "Application 8","col": "Operator 5","value": 39.228},{"row": "Application 8","col": "Operator 6","value": 90.37},{"row": "Application 9","col": "Operator 1","value": 36.293},{"row": "Application 9","col": "Operator 2","value": 42.247},{"row": "Application 9","col": "Operator 3","value": 48.674},{"row": "Application 9","col": "Operator 4","value": 47.848},{"row": "Application 9","col": "Operator 5","value": 53.175},{"row": "Application 9","col": "Operator 6","value": 13.383},{"row": "Application 10","col": "Operator 1","value": 49.658},{"row": "Application 10","col": "Operator 2","value": 83.477},{"row": "Application 10","col": "Operator 3","value": 11.854},{"row": "Application 10","col": "Operator 4","value": 23.832},{"row": "Application 10","col": "Operator 5","value": 39.586},{"row": "Application 10","col": "Operator 6","value": 70.742}];
  var aggregationsResults1 = {"row":[{"average":26.7845,"sum":160.707,"max":67.247,"min":0.336,"count":6,"std":24.6057},{"average":30.9178,"sum":185.507,"max":61.585,"min":6.106,"count":6,"std":18.9489},{"average":39.8458,"sum":239.075,"max":74.492,"min":14.896,"count":6,"std":20.3057},{"average":65.4091,"sum":392.455,"max":95.94,"min":26.531,"count":6,"std":23.6005},{"average":43.3736,"sum":260.242,"max":78.38,"min":5.887,"count":6,"std":27.5573},{"average":56.3078,"sum":337.847,"max":87.706,"min":29.124,"count":6,"std":21.8855},{"average":42.8673,"sum":257.204,"max":80.21,"min":3.892,"count":6,"std":28.5124},{"average":46.5766,"sum":279.46,"max":90.37,"min":25.657,"count":6,"std":23.1453},{"average":40.27,"sum":241.62,"max":53.175,"min":13.383,"count":6,"std":13.148},{"average":46.5248,"sum":279.149,"max":83.477,"min":11.854,"count":6,"std":24.9229}],"col":[{"average":45.572,"sum":455.72,"max":95.94,"min":9.237,"count":10,"std":27.6677},{"average":43.8542,"sum":438.542,"max":83.477,"min":0.336,"count":10,"std":28.396},{"average":43.0218,"sum":430.218,"max":62.89,"min":11.854,"count":10,"std":15.0962},{"average":35.8266,"sum":358.266,"max":61.585,"min":3.892,"count":10,"std":19.0631},{"average":45.1431,"sum":451.431,"max":78.38,"min":6.908,"count":10,"std":25.0917},{"average":49.9089,"sum":499.089,"max":90.37,"min":5.887,"count":10,"std":31.0426}]};
  var data2 = [{"row": "Application 1","col": "Operator 1","value": 8.603},{"row": "Application 1","col": "Operator 2","value": 89.537},{"row": "Application 1","col": "Operator 3","value": 68.59},{"row": "Application 1","col": "Operator 4","value": 17.775},{"row": "Application 1","col": "Operator 5","value": 33.812},{"row": "Application 1","col": "Operator 6","value": 8.305},{"row": "Application 2","col": "Operator 1","value": 19.385},{"row": "Application 2","col": "Operator 2","value": 74.264},{"row": "Application 2","col": "Operator 3","value": 56.71},{"row": "Application 2","col": "Operator 4","value": 75.748},{"row": "Application 2","col": "Operator 5","value": 49.978},{"row": "Application 2","col": "Operator 6","value": 30.889},{"row": "Application 3","col": "Operator 1","value": 46.458},{"row": "Application 3","col": "Operator 2","value": 75.381},{"row": "Application 3","col": "Operator 4","value": 89.074},{"row": "Application 3","col": "Operator 5","value": 99.09},{"row": "Application 3","col": "Operator 6","value": 62.344},{"row": "Application 4","col": "Operator 1","value": 63.614},{"row": "Application 4","col": "Operator 2","value": 95.741},{"row": "Application 4","col": "Operator 3","value": 15.411},{"row": "Application 4","col": "Operator 4","value": 69.277},{"row": "Application 4","col": "Operator 5","value": 61.908},{"row": "Application 4","col": "Operator 6","value": 88.557},{"row": "Application 5","col": "Operator 2","value": 19.395},{"row": "Application 5","col": "Operator 3","value": 94.812},{"row": "Application 5","col": "Operator 4","value": 65.547},{"row": "Application 5","col": "Operator 5","value": 72.323},,{"row": "Application 6","col": "Operator 1","value": 43.975},{"row": "Application 6","col": "Operator 2","value": 9.665},{"row": "Application 6","col": "Operator 3","value": 8.003},{"row": "Application 6","col": "Operator 4","value": 91.239},{"row": "Application 6","col": "Operator 5","value": 49.417},{"row": "Application 6","col": "Operator 6","value": 49.825},{"row": "Application 7","col": "Operator 1","value": 22.604},{"row": "Application 7","col": "Operator 2","value": 34.573},{"row": "Application 7","col": "Operator 3","value": 89.617},{"row": "Application 7","col": "Operator 5","value": 34.839},{"row": "Application 7","col": "Operator 6","value": 2.874},{"row": "Application 8","col": "Operator 1","value": 86.023},{"row": "Application 8","col": "Operator 2","value": 2.067},{"row": "Application 8","col": "Operator 3","value": 60.478},{"row": "Application 8","col": "Operator 4","value": 63.746},{"row": "Application 8","col": "Operator 5","value": 62.09},{"row": "Application 8","col": "Operator 6","value": 84.216},{"row": "Application 9","col": "Operator 1","value": 22.56},{"row": "Application 9","col": "Operator 2","value": 60.009},{"row": "Application 9","col": "Operator 3","value": 10.153},{"row": "Application 9","col": "Operator 4","value": 40.938},{"row": "Application 9","col": "Operator 5","value": 97.975},{"row": "Application 9","col": "Operator 6","value": 86.65},{"row": "Application 10","col": "Operator 1","value": 39.07},{"row": "Application 10","col": "Operator 2","value": 28.732},{"row": "Application 10","col": "Operator 3","value": 16.753},{"row": "Application 10","col": "Operator 4","value": 66.526},{"row": "Application 10","col": "Operator 5","value": 51.551},{"row": "Application 10","col": "Operator 6","value": 73.657}];
  var aggregationsResults2 = {"row":[{"average":37.77,"sum":226.622,"max":89.537,"min":8.305,"count":6,"std":30.994},{"average":51.162,"sum":306.974,"max":75.748,"min":19.385,"count":6,"std":20.781},{"average":74.469,"sum":372.347,"max":99.09,"min":46.458,"count":5,"std":18.718},{"average":65.751,"sum":394.508,"max":95.741,"min":15.411,"count":6,"std":25.772},{"average":63.019,"sum":252.077,"max":94.812,"min":19.395,"count":4,"std":27.417},{"average":42.02,"sum":252.124,"max":91.239,"min":8.003,"count":6,"std":28.124},{"average":36.901,"sum":184.507,"max":89.617,"min":2.874,"count":5,"std":28.812},{"average":59.77,"sum":358.62,"max":86.023,"min":2.067,"count":6,"std":27.803},{"average":53.047,"sum":318.285,"max":97.975,"min":10.153,"count":6,"std":31.916},{"average":46.048,"sum":276.289,"max":73.657,"min":16.753,"count":6,"std":20.077}],"col":[{"average":39.143,"sum":352.292,"max":86.023,"min":8.603,"count":9,"std":22.961},{"average":48.936,"sum":489.364,"max":95.741,"min":2.067,"count":10,"std":32.447},{"average":46.725,"sum":420.527,"max":94.812,"min":8.003,"count":9,"std":32.719},{"average":64.43,"sum":579.87,"max":91.239,"min":17.775,"count":9,"std":21.634},{"average":61.298,"sum":612.983,"max":99.09,"min":33.812,"count":10,"std":21.716},{"average":54.146,"sum":487.317,"max":88.557,"min":2.874,"count":9,"std":31.415}]};
  var data3 = [{"row": "Application 1","col": "Operator 1","value": 85.651},{"row": "Application 1","col": "Operator 2","value": 54.251},{"row": "Application 1","col": "Operator 3","value": 70.229},{"row": "Application 1","col": "Operator 4","value": 54.366},{"row": "Application 1","col": "Operator 5","value": 78.091},{"row": "Application 1","col": "Operator 6","value": 22.564},{"row": "Application 2","col": "Operator 1","value": 51.261},{"row": "Application 2","col": "Operator 2","value": 58.457},{"row": "Application 2","col": "Operator 3","value": 92.955},{"row": "Application 2","col": "Operator 4","value": 94.763},{"row": "Application 2","col": "Operator 5","value": 48.937},{"row": "Application 2","col": "Operator 6","value": 85.941},{"row": "Application 3","col": "Operator 1","value": 14.319},{"row": "Application 3","col": "Operator 2","value": 35.905},{"row": "Application 3","col": "Operator 3","value": "test"},{"row": "Application 3","col": "Operator 4","value": 20.284},{"row": "Application 3","col": "Operator 5","value": 28.862},{"row": "Application 3","col": "Operator 6","value": 63.715},{"row": "Application 4","col": "Operator 1","value": 60.431},{"row": "Application 4","col": "Operator 2","value": 54.107},{"row": "Application 4","col": "Operator 3","value": 39.751},{"row": "Application 4","col": "Operator 4","value": 39.108},{"row": "Application 4","col": "Operator 5","value": 87.24},{"row": "Application 4","col": "Operator 6","value": 27.19},{"row": "Application 5","col": "Operator 1","value": "---"},{"row": "Application 5","col": "Operator 2","value": 77.792},{"row": "Application 5","col": "Operator 3","value": 93.829},{"row": "Application 5","col": "Operator 4","value": 68.315},{"row": "Application 5","col": "Operator 5","value": 11.272},{"row": "Application 5","col": "Operator 6","value": "invalid"},{"row": "Application 6","col": "Operator 1","value": 70.785},{"row": "Application 6","col": "Operator 2","value": 53.297},{"row": "Application 6","col": "Operator 3","value": 30.282},{"row": "Application 6","col": "Operator 4","value": 78.051},{"row": "Application 6","col": "Operator 5","value": 21.798},{"row": "Application 6","col": "Operator 6","value": 6.237},{"row": "Application 7","col": "Operator 1","value": 54.17},{"row": "Application 7","col": "Operator 2","value": 2.815},{"row": "Application 7","col": "Operator 3","value": 52.392},{"row": "Application 7","col": "Operator 4","value": "error"},{"row": "Application 7","col": "Operator 5","value": 85.671},{"row": "Application 7","col": "Operator 6","value": 74.732},{"row": "Application 8","col": "Operator 1","value": 76.023},{"row": "Application 8","col": "Operator 2","value": 55.935},{"row": "Application 8","col": "Operator 3","value": 93.17},{"row": "Application 8","col": "Operator 4","value": 28.235},{"row": "Application 8","col": "Operator 5","value": 35.471},{"row": "Application 8","col": "Operator 6","value": 72.261},{"row": "Application 9","col": "Operator 1","value": 30.355},{"row": "Application 9","col": "Operator 2","value": 89.564},{"row": "Application 9","col": "Operator 3","value": 81.569},{"row": "Application 9","col": "Operator 4","value": 44.315},{"row": "Application 9","col": "Operator 5","value": 96.762},{"row": "Application 9","col": "Operator 6","value": 79.777},{"row": "Application 10","col": "Operator 1","value": 22.198},{"row": "Application 10","col": "Operator 2","value": 63.323},{"row": "Application 10","col": "Operator 3","value": 54.384},{"row": "Application 10","col": "Operator 4","value": 82.436},{"row": "Application 10","col": "Operator 5","value": 29.051},{"row": "Application 10","col": "Operator 6","value": 21.279}];
  var aggregationsResults3 = {"row":[{"average":60.858,"sum":365.152,"max":85.651,"min":22.564,"count":6,"std":20.622},{"average":72.052,"sum":432.314,"max":94.763,"min":48.937,"count":6,"std":19.566},{"average":32.617,"sum":163.085,"max":63.715,"min":14.319,"count":5,"std":17.198},{"average":51.304,"sum":307.827,"max":87.24,"min":27.19,"count":6,"std":19.348},{"average":62.802,"sum":251.208,"max":93.829,"min":11.272,"count":4,"std":31.117},{"average":43.408,"sum":260.45,"max":78.051,"min":6.237,"count":6,"std":26.039},{"average":53.956,"sum":269.78,"max":85.671,"min":2.815,"count":5,"std":28.479},{"average":60.182,"sum":361.095,"max":93.17,"min":28.235,"count":6,"std":22.855},{"average":70.39,"sum":422.342,"max":96.762,"min":30.355,"count":6,"std":24.354},{"average":45.445,"sum":272.671,"max":82.436,"min":21.279,"count":6,"std":22.953}],"col":[{"average":51.688,"sum":465.193,"max":85.651,"min":14.319,"count":9,"std":23.367},{"average":54.544,"sum":545.446,"max":89.564,"min":2.815,"count":10,"std":22.105},{"average":67.617,"sum":608.561,"max":93.829,"min":30.282,"count":9,"std":22.999},{"average":56.652,"sum":509.873,"max":94.763,"min":20.284,"count":9,"std":24.282},{"average":52.315,"sum":523.155,"max":96.762,"min":11.272,"count":10,"std":29.957},{"average":50.41,"sum":453.696,"max":85.941,"min":6.237,"count":9,"std":28.839}]};
  var aggregationsTypes = ["average","sum","max","min","count","std"];
  var heatmapEl, data, aggregationsResults;
  switch (testN) {
    case 1:
      heatmapEl = Polymer.dom(document).querySelector('#ev_heatmap_1');
      data = data1;
      aggregationsResults = aggregationsResults1;
      break;
    case 2:
      heatmapEl = Polymer.dom(document).querySelector('#ev_heatmap_2');
      data = data2;
      aggregationsResults = aggregationsResults2;
      break;
    case 3:
      heatmapEl = Polymer.dom(document).querySelector('#ev_heatmap_3');
      data = data3;
      aggregationsResults = aggregationsResults3;
      break;
    default:
      break;
  };

  heatmapEl.setData(data);
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
      heatmapEl.toggleScale();

      assert.isTrue(heatmapEl.hideScale, "ev-heatmap hideScale property was supposed to be true");
      assert.isTrue(scaleEl.hidden, "scale element was supposed to be hidden");
      done();
    });

    test('Check hide/show row headers functionality', function(done){
      var tableEl = Polymer.dom(heatmapEl.root).querySelector('ev-heatmap-table'),
        rowHeader = Polymer.dom(tableEl.root).querySelector('.table-row-header');
      assert.isFalse(heatmapEl.hideRowHeader, "ev-heatmap hideRowHeader property was supposed to be false");
      assert.equal(window.getComputedStyle(rowHeader).display, "flex", "row header element was not supposed to be hidden");

      heatmapEl.toggleRowHeader();
      setTimeout(function() {
        assert.isTrue(heatmapEl.hideRowHeader, "ev-heatmap hideRowHeader property was supposed to be true");
        assert.equal(window.getComputedStyle(rowHeader).display, "none", "row header element was supposed to be hidden");
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

      heatmapEl.toggleColHeader();
      setTimeout(function() {
        assert.isTrue(heatmapEl.hideColHeader, "ev-heatmap hideColHeader property was supposed to be true");
        assert.isTrue(rowHeader.classList.contains('disable-col-header'), "row header should contain class 'disable-col-header'");
        colHeader.forEach(x => assert.equal(window.getComputedStyle(x).display, "none", "row header '" + x.innerText + "' was supposed to be hidden"));
        done();
      }, 10)
    });

    test('Check scale min/max functionality', function(done){
      assert.equal(heatmapEl.scaleMin, 0, "Scale min default was supposed to be '0'");
      assert.equal(heatmapEl.scaleMax, 100, "Scale max default was supposed to be '100'");
      heatmapEl.setRange(20, 80);
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
        tableEl.rowAggregatedData.map((d,i) => assert.equal(Math.round(d), Math.round(aggregationsResults.row[i][at]), at + " aggregation for row " + i + " failed"));
        tableEl.colAggregatedData.map((d,i) => assert.equal(Math.round(d), Math.round(aggregationsResults.col[i][at]), at + " aggregation for column " + i + " failed"));
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
      var minI, maxI;

      tableEl.heatmapData.forEach(function(a,i) {
        heatmapEl.set("heatmapData", []);
        heatmapEl.set("heatmapData", data);
        e.model.index = i;
        tableEl._sortCol(e);
        minI = tableEl.heatmapData[i].map((x,j) => typeof x.value === "number" ? j : undefined).reduce((a,b) => b ? a < b ? a : b : a);
        maxI = tableEl.heatmapData[i].map((x,j) => typeof x.value === "number" ? j : undefined).reduce((a,b) => b ? a > b ? a : b : a);
        assert.equal(tableEl.heatmapData[i][minI].value, aggregationsResults.col[i].min, "sorting ascending on column " + i + " failed");
        assert.equal(tableEl.heatmapData[i][maxI].value, aggregationsResults.col[i].max, "sorting ascending on column " + i + " failed");
        tableEl._sortCol(e);
        minI = tableEl.heatmapData[i].map((x,j) => typeof x.value === "number" ? j : undefined).reduce((a,b) => b ? a < b ? a : b : a);
        maxI = tableEl.heatmapData[i].map((x,j) => typeof x.value === "number" ? j : undefined).reduce((a,b) => b ? a > b ? a : b : a);
        assert.equal(tableEl.heatmapData[i][minI].value, aggregationsResults.col[i].max, "sorting descending on column " + i + " failed");
        assert.equal(tableEl.heatmapData[i][maxI].value, aggregationsResults.col[i].min, "sorting descending on column " + i + " failed");
      });

      tableEl.heatmapData[0].map(function(a,i) {
        heatmapEl.set("heatmapData", []);
        heatmapEl.set("heatmapData", data);
        e.model.index = i;
        tableEl._sortRow(e);
        minI = tableEl.heatmapData.map((x,j) => x[i] && typeof x[i].value === "number" ? j : undefined).reduce((a,b) => b ? a < b ? a : b : a);
        maxI = tableEl.heatmapData.map((x,j) => x[i] && typeof x[i].value === "number" ? j : undefined).reduce((a,b) => b ? a > b ? a : b : a);
        assert.equal(tableEl.heatmapData[minI][i].value, aggregationsResults.row[i].min, "sorting ascending on row " + i + " failed");
        assert.equal(tableEl.heatmapData[maxI][i].value, aggregationsResults.row[i].max, "sorting ascending on row " + i + " failed");
        tableEl._sortRow(e);
        minI = tableEl.heatmapData.map((x,j) => x[i] && typeof x[i].value === "number" ? j : undefined).reduce((a,b) => b ? a < b ? a : b : a);
        maxI = tableEl.heatmapData.map((x,j) => x[i] && typeof x[i].value === "number" ? j : undefined).reduce((a,b) => b ? a > b ? a : b : a);
        assert.equal(tableEl.heatmapData[minI][i].value, aggregationsResults.row[i].max, "sorting descending on row " + i + " failed");
        assert.equal(tableEl.heatmapData[maxI][i].value, aggregationsResults.row[i].min, "sorting descending on row " + i + " failed");
      });
      done();
    });

    test('Check hide/show values functionality', function(done){
      var tableEl = Polymer.dom(heatmapEl.root).querySelector('ev-heatmap-table'),
        values = Polymer.dom(tableEl.root).querySelectorAll('.cell-values span');
      values.forEach(v => assert.isFalse(v.hidden, "cell was not supposed to be hidden"));

      heatmapEl.toggleValues();
      setTimeout(function() {
        values.forEach(v => assert.isTrue(v.hidden, "cell " + v.innerText + " was supposed to be hidden"));
        done();
      }, 10)
    });
  });
}
