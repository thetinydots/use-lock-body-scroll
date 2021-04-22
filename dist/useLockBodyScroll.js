Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function useLockBodyScroll() {
    react.useLayoutEffect(function () {
        var originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = "hidden";
        return function () {
            document.body.style.overflow = originalStyle;
        };
    }, []);
}

exports.default = useLockBodyScroll;
//# sourceMappingURL=useLockBodyScroll.js.map
