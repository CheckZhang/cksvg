/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c1__Container.ts"/>
module cksvg{
    export class Polygon extends DisplayObject{
        public points:number[][] = [];
        public fill:string;
        public stroke:string;
        public strokeWidth:number;
        constructor(points:number[][],fill?:string,stroke?:string,strokeWidth?:number){
            super();
            this.points = points;
            this.fill = fill;
            this.stroke = stroke;
            this.strokeWidth = strokeWidth;
            this._$dom = $(cksvg.makeSVG("polygon"));
        }

        private formatPoints():string{
            var temp:string[]=[];
            for(var i in this.points){
                var p:number[] = this.points[i];
                var v:Vec2 = vec2.fromValues(p[0],p[1]);
                vec2.transformMat2d(v,v,this._sumMatrix);
                temp.push( v[0]+","+v[1]);
            }
            return temp.join(" ");
        }

        public render(gMatrix?:Mat2d):void{
            super.render(gMatrix);
            this._$dom.attr("points",this.formatPoints()).css({fill:this.fill,stroke:this.stroke,"stroke-width":this.strokeWidth,opacity:this.opacity});
        }
    }
}
