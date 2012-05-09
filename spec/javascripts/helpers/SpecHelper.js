beforeEach(function() {
  this.addMatchers({
    toBePlaying: function(expectedSong) {
      var player = this.actual;
      return player.currentlyPlayingSong === expectedSong && 
             player.isPlaying;
    }
  });
});

// Add RequireJS to the DOM
var requireScriptEl = document.createElement("script");
requireScriptEl.setAttribute("type", "text/javascript");
requireScriptEl.setAttribute("data-main", "/public/javascripts/main");
requireScriptEl.setAttribute("src", "/public/javascripts/libs/require/require.js");
var headEl = document.getElementsByTagName("head")[0];
headEl.appendChild(requireScriptEl);

// Path javascripts
var SCRIPT_ROOT = "../../../public/javascripts/";

// Loads a single AMD module.
var loadModule = function(name, path, delay) {
  if (!window[name]) {
    console.log("Loading module " + name)
    require([SCRIPT_ROOT + path], function(module) {
      console.log("Loaded module " + name)
      window[name] = module;
    });
    waits((delay || 100));
  }
};
