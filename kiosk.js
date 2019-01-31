
var exec = require('cordova/exec');

var KioskPlugin = {

    exitKiosk: function () {
        exec(null, null, "KioskPlugin", "exitKiosk", []);
    },
    
    killApp: function () {
        exec(null, null, "KioskPlugin", "killApp", []);
    },

    open: function (fileName, contentType, callbackContext) {
        contentType = contentType || '';
        callbackContext = callbackContext || {};
        exec(callbackContext.success || null, callbackContext.error || null, 'KioskPlugin', 'open', [fileName, contentType]);
    },
    
    isInKiosk: function (callback) {
        exec(function(out){
            callback(out=="true");
        }, function(error){
            alert("KioskPlugin.isInKiosk failed: "+error);
        }, "KioskPlugin", "isInKiosk", []);
    },

    initKiosk: function (callback) {
        exec(function(out){
            callback(out=="true");
        }, function(error){
            alert("KioskPlugin.initKiosk failed: "+error);
        }, "KioskPlugin", "initKiosk", []);
    }
    
}

module.exports = KioskPlugin;

