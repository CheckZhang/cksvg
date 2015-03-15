/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c1__Container.ts"/>
module cksvg{
    class Graphic{
        public type:string;
        public points:Vec2[];
        constructor(type:string,points:Vec2[]){
            this.type = type;
            this.points = points;

        }

        public toString():string{
            for(var i in this.points){
                var p:Vec2 = this.points[i];
                return this.type+p[0]+" "+p[1];
            }
        }
    }

    export class Path extends DisplayObject{
        public fill:string;
        public stroke:string;
        public strokeWidth:number;
        private _graphics:Graphic[]=[];
        constructor(fill:string="blue",stroke:string="red",strokeWidth:number=1){
            super();
            this.fill = fill;
            this.stroke = stroke;
            this.strokeWidth = strokeWidth;
            this._$dom = $(cksvg.makeSVG("path"));
        }

        private formatPoints():string{
            var temp:string[]=[];
            for(var i in this._graphics){
                var c:Graphic = this._graphics[i];
                temp.push(c.toString());
            }
            return temp.join(" ");
        }

        public moveTo(x:number,y:number):cksvg.Path{
            this._graphics.push(new Graphic("M",[vec2.fromValues(x,y)]));
            return this;
        }
        public lineTo(x:number,y:number):cksvg.Path{
            this._graphics.push(new Graphic("L",[vec2.fromValues(x,y)]));
            return this;
        }
        public curveTo(x1:number,y1:number,x2:number,y2:number,x3:number,y3:number):cksvg.Path{
            this._graphics.push(new Graphic("C",[vec2.fromValues(x1,y1),vec2.fromValues(x2,y2),vec2.fromValues(x3,y3)]))
            return this;
        }
        public smoothCurveTo(x1:number,y1:number,x2:number,y2:number,x3:number,y3:number):cksvg.Path{
            this._graphics.push(new Graphic("S",[vec2.fromValues(x1,y1),vec2.fromValues(x2,y2),vec2.fromValues(x3,y3)]))
            return this;
        }
        public quadraticBelzierCurve(x1:number,y1:number,x2:number,y2:number,x3:number,y3:number):cksvg.Path{
            this._graphics.push(new Graphic("Q",[vec2.fromValues(x1,y1),vec2.fromValues(x2,y2),vec2.fromValues(x3,y3)]))
            return this;
        }
        public smoothQuadraticBelzierCurveTo(x1:number,y1:number,x2:number,y2:number,x3:number,y3:number):cksvg.Path{
            this._graphics.push(new Graphic("T",[vec2.fromValues(x1,y1),vec2.fromValues(x2,y2),vec2.fromValues(x3,y3)]))
            return this;
        }
        public closePath():cksvg.Path{
            this._graphics.push(new Graphic("Z",[]));
            return this;
        }
        public render(gMatrix?:Mat2d):void{
            super.render(gMatrix);
            this._$dom.attr("d",this.formatPoints()).css({fill:this.fill,stroke:this.stroke,"stroke-width":this.strokeWidth,opacity:this.opacity});
        }
    }
}
