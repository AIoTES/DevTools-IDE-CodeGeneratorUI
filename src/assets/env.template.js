(function(window) {
    window.env = window.env || {};
  
    // Environment variables
    window["env"]["CODEGENERATOR_PATH"] = "${CODEGENERATOR_PATH}";
    window["env"]["AIOTES_HOSTNAME"] = "${AIOTES_HOSTNAME}";
    window["env"]["AIOTES_API_PORT"] = "${AIOTES_API_PORT}";

  })(this);