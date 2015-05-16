/**
 * Created by Chack on 2015/3/14.
 */
var cksvg;
(function (cksvg) {
    function supportsSvg() {
        var svg = "http://www.w3.org/TR/SVG11/feature#Shape";
        return document.implementation.hasFeature(svg, "1.0") || document.implementation.hasFeature(svg, "1.1");
    }
    cksvg.supportsSvg = supportsSvg;
    var formatRegExp = /\{(\d+)(:[^\}]+)?\}/g;
    function format(fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var values = arguments;
        return fmt.replace(formatRegExp, function (match, index, placeholderFormat) {
            var value = values[parseInt(index, 10) + 1];
            return value.toString();
        });
    }
    cksvg.format = format;
    function formatPoints(points) {
        var temp = [];
        for (var i in points) {
            var p = points[i];
            temp.push(p.join(" "));
        }
        return temp.join(",");
    }
    cksvg.formatPoints = formatPoints;
    var SVG_NS = "http://www.w3.org/2000/svg";
    var XLINK_NS = "http://www.w3.org/1999/xlink";
    var ATTR_MAP = {
        "className": "class",
        "svgHref": "href"
    };
    var NS_MAP = {
        "svgHref": XLINK_NS
    };
    function makeSVG(tag, attributes) {
        var elem = document.createElementNS(SVG_NS, tag);
        for (var attribute in attributes) {
            var name = (attribute in ATTR_MAP ? ATTR_MAP[attribute] : attribute);
            var value = attributes[attribute];
            if (attribute in NS_MAP)
                elem.setAttributeNS(NS_MAP[attribute], name, value);
            else
                elem.setAttribute(name, value);
        }
        return elem;
    }
    cksvg.makeSVG = makeSVG;
})(cksvg || (cksvg = {}));
//# sourceMappingURL=b0__Core.js.map