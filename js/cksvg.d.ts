/// <reference path="../src/header/jquery.d.ts" />
/// <reference path="../src/header/glmatrix.d.ts" />
/**
 * Created by Chack on 2015/3/14.
 */
declare module cksvg {
    function format(fmt: string, ...args: any[]): string;
    function formatPoints(points: number[][]): string;
    function makeSVG(tag: string, attributes?: Object): Element;
}
/**
 * Created by Chack on 2015/3/14.
 */
declare module cksvg {
    class DisplayObject {
        protected _$dom: JQuery;
        x: number;
        y: number;
        rotation: number;
        opacity: number;
        scaleX: number;
        scaleY: number;
        protected _matrix: Mat2d;
        protected _sumMatrix: Mat2d;
        render(gMatrix?: Mat2d): void;
        dom(): JQuery;
        matrix(): Mat2d;
        matrix(max: Mat2d): void;
    }
}
/**
 * Created by Chack on 2015/3/14.
 */
declare module cksvg {
    class Container extends cksvg.DisplayObject {
        private _children;
        numChildren: number;
        addChild(d: DisplayObject): void;
        removeChild(d: DisplayObject): boolean;
        indexOf(d: DisplayObject): number;
        render(gMatrix?: Mat2d): void;
    }
}
/**
 * Created by Chack on 2015/3/14.
 */
declare module cksvg {
    class Stage extends cksvg.Container {
        stageWidth: number;
        stageHeight: number;
        constructor($dom: JQuery);
        private onResize();
        render(gMatrix?: Mat2d): void;
    }
}
/**
 * Created by Chack on 2015/3/14.
 */
declare module cksvg {
    class Polygon extends DisplayObject {
        constructor(points: number[][], fill?: string, stroke?: string, strokeWidth?: number);
    }
}
/**
 * Created by Chack on 2015/3/14.
 */
declare module cksvg {
    class Line extends cksvg.DisplayObject {
        constructor(x1: number, y1: number, x2: number, y2: number, stroke?: string, strokeWidth?: number);
    }
}
/**
 * Created by Chack on 2015/3/14.
 */
declare module cksvg {
    class Rect extends cksvg.DisplayObject {
        constructor(width: number, height: number, fill?: string, rx?: number, ry?: number, stroke?: string, strokeWidth?: number);
    }
}
/**
 * Created by Chack on 2015/3/14.
 */
declare module cksvg {
    class Circle extends cksvg.DisplayObject {
        constructor(r: number, cx: number, cy: number, fill?: string, stroke?: string, strokeWidth?: number);
    }
}
/**
 * Created by Chack on 2015/3/14.
 */
declare module cksvg {
    class Ellipse extends cksvg.DisplayObject {
        constructor(rx: number, ry: number, cx: number, cy: number, fill?: string, stroke?: string, strokeWidth?: number);
    }
}
/**
 * Created by Chack on 2015/3/14.
 */
declare module cksvg {
    class Polyline extends DisplayObject {
        constructor(points: number[][], fill?: string, stroke?: string, strokeWidth?: number);
    }
}
/**
 * Created by Chack on 2015/3/15.
 */
declare module cksvg {
    class Text extends DisplayObject {
        constructor(text: string, fill?: string, stroke?: string, strokeWidth?: number, letterSpacing?: number, wordSpacing?: number, writingMode?: string);
    }
}
/**
 * Created by Chack on 2015/3/15.
 */
declare module cksvg {
    class Group extends cksvg.Container {
        constructor();
    }
}
/**
 * Created by Chack on 2015/3/16.
 */
declare module cksvg {
    class Image extends cksvg.DisplayObject {
        constructor(url: string, width?: number, height?: number);
    }
}
/**
 * Created by Chack on 2015/3/14.
 */
declare module cksvg {
    class Path extends DisplayObject {
        constructor(fill?: string, stroke?: string, strokeWidth?: number);
        clear(): cksvg.Path;
        moveTo(x: number, y: number): cksvg.Path;
        lineTo(x: number, y: number): cksvg.Path;
        ellipticalArc(rx: number, ry: number, x: number, y: number, xAxisRotation?: number, largeArcFlag?: boolean, sweepFlag?: boolean): cksvg.Path;
        curveTo(x1: number, y1: number, x2: number, y2: number, x: number, y: number): cksvg.Path;
        smoothCurveTo(x2: number, y2: number, x: number, y: number): cksvg.Path;
        quadraticBelzierCurve(x1: number, y1: number, x2: number, y2: number, x: number, y: number): cksvg.Path;
        smoothQuadraticBelzierCurveTo(x1: number, y1: number, x2: number, y2: number, x: number, y: number): cksvg.Path;
        horizontalLineTo(x: number): cksvg.Path;
        verticalLineTo(y: number): cksvg.Path;
        closePath(): cksvg.Path;
    }
}
