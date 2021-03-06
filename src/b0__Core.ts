/**
 * Created by Chack on 2015/3/14.
 */
module cksvg{
    export function supportsSvg():boolean {
        var svg = "http://www.w3.org/TR/SVG11/feature#Shape";
        return document.implementation.hasFeature(svg, "1.0")||document.implementation.hasFeature(svg, "1.1");
    }
    var formatRegExp = /\{(\d+)(:[^\}]+)?\}/g;
    export function format(fmt:string,...args:any[]):string{
        var values = arguments;
        return fmt.replace(formatRegExp, function(match, index, placeholderFormat) {
            var value = values[parseInt(index, 10) + 1];
            return value.toString();
        });
    }
    export function formatPoints(points:number[][]):string{
        var temp:string[]=[];
        for(var i in points){
            var p:number[] = points[i];
            temp.push( p.join(" "));
        }
        return temp.join(",");
    }

    var SVG_NS = "http://www.w3.org/2000/svg";
    var XLINK_NS = "http://www.w3.org/1999/xlink";

    var ATTR_MAP = {
        "className": "class",
        "svgHref": "href"
    };

    var NS_MAP = {
        "svgHref": XLINK_NS
    };

    export function makeSVG(tag:string, attributes?:Object):Element{
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
}