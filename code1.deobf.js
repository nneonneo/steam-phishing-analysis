/* from jquery-1.12.4.min.js */
/* basically a copy of https://github.com/sindresorhus/devtools-detect/blob/gh-pages/index.js
   plus an event handler that calls "debugger;" if the devtools are detected.
   Wrapped in three layers of obfuscation for silly reasons
*/
function debug322() {}
! function() {
    'use strict';
    var devtools = {
            open: false,
            orientation: null
        },
        threshold = 160,
        emitEvent = function(state, orientation) {
            window.dispatchEvent(new CustomEvent('devtoolschange', {
                detail: {
                    open: state,
                    orientation: orientation
                }
            }))
        };
    setInterval(function() {
        var widthThreshold = window.outerWidth - window.innerWidth > threshold,
            heightThreshold = window.outerHeight - window.innerHeight > threshold,
            orientation = widthThreshold ? 'vertical' : 'horizontal';
        heightThreshold && widthThreshold || !(window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized || widthThreshold || heightThreshold) ? (devtools.open && emitEvent(false, null), devtools.open = false, devtools.orientation = null) : (devtools.open && devtools.orientation === orientation || emitEvent(true, orientation), devtools.open = true, devtools.orientation = orientation)
    }, 500), 'undefined' != typeof module && module.exports ? module.exports = devtools : window.devtools = devtools
}()
window.addEventListener('devtoolschange', function(event) {
    if (true === event.detail.open) {
        var timer = setInterval(function() {
            true === window.devtools.open ? debug322() : clearInterval(timer)
        }, 1);
        debug322()
    }
})
function debug322(){
    debugger
}
