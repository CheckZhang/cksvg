/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c1__Container.ts"/>
module cksvg{
    export class Path extends DisplayObject{
        constructor(fill:string="blue",stroke:string="red",strokeWidth:number=1){
            super();
            this._$dom = $(cksvg.makeSVG("path")).attr({d:""}).css({fill:fill,stroke:stroke,strokeWidth:strokeWidth});
        }
        public clear():cksvg.Path{
            this._$dom.attr("d","");
            return this;
        }
        public moveTo(x:number,y:number):cksvg.Path{
            this._$dom.attr("d",this._$dom.attr("d")+" M"+cksvg.formatPoints([[x,y]]));
            return this;
        }
        public lineTo(x:number,y:number):cksvg.Path{
            this._$dom.attr("d",this._$dom.attr("d")+" L"+cksvg.formatPoints([[x,y]]));
            return this;
        }
        public ellipticalArc(rx:number,ry:number,x:number,y:number,xAxisRotation:number=0,largeArcFlag:boolean=false,sweepFlag:boolean=true):cksvg.Path{
            this._$dom.attr("d",this._$dom.attr("d")+" A"+rx+" "+ry+" "+xAxisRotation+" "+(largeArcFlag?1:0)+" "+(sweepFlag?1:0)+" "+x+" "+y);
            return this;
        }
        public curveTo(x1:number,y1:number,x2:number,y2:number,x:number,y:number):cksvg.Path{
            this._$dom.attr("d",this._$dom.attr("d")+" C"+cksvg.formatPoints([[x1,y1],[x2,y2],[x,y]]));
            return this;
        }
        public smoothCurveTo(x2:number,y2:number,x:number,y:number):cksvg.Path{
            this._$dom.attr("d",this._$dom.attr("d")+" S"+cksvg.formatPoints([[x2,y2],[x,y]]));
            return this;
        }
        public quadraticBelzierCurve(x1:number,y1:number,x2:number,y2:number,x:number,y:number):cksvg.Path{
            this._$dom.attr("d",this._$dom.attr("d")+" Q"+cksvg.formatPoints([[x1,y1],[x2,y2],[x,y]]));
            return this;
        }
        public smoothQuadraticBelzierCurveTo(x1:number,y1:number,x2:number,y2:number,x:number,y:number):cksvg.Path{
            this._$dom.attr("d",this._$dom.attr("d")+" T"+cksvg.formatPoints([[x1,y1],[x2,y2],[x,y]]));
            return this;
        }
        public horizontalLineTo(x:number):cksvg.Path{
            this._$dom.attr("d",this._$dom.attr("d")+" H"+x);
            return this;
        }
        public verticalLineTo(y:number):cksvg.Path{
            this._$dom.attr("d",this._$dom.attr("d")+" V"+y);
            return this;
        }
        public closePath():cksvg.Path{
            this._$dom.attr("d",this._$dom.attr("d")+" Z");
            return this;
        }
    }
}
