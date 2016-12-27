// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {
  // Place any setup steps like variable declaration and initialization here

  // This is the placeholder suite to place custom tests in
  // Use testCase(options) for a more convenient setup of the test cases
  suite('Custom Automation Tests for ev-heatmap', function() {
    test('Check initial value of counter', function(done){
      var counterEl = Polymer.dom(document).querySelector('ev-heatmap'),
          counterValueEl = Polymer.dom(counterEl.root).querySelector('span');
      assert.equal(counterValueEl.textContent, '0');
      done();
    });

    test('Clicking ev-heatmap increments the counter', function(done){
      var counterEl = Polymer.dom(document).querySelector('ev-heatmap'),
          counterValueEl = Polymer.dom(counterEl.root).querySelector('span');
      assert.equal(counterValueEl.textContent, '0');

      counterEl.click();
      flush(function(){
        assert.equal(counterValueEl.textContent, '1');
      });
      done();
    });
  });
}
