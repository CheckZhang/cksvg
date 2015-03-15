/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c1__Container.ts"/>
module cksvg{
    export class Stage extends cksvg.Container{
        public stageWidth:number;
        public stageHeight:number;

        constructor($dom:JQuery){
            super();
            this._$dom = $dom;
            $dom.resize(this.onResize);
            this.onResize();
        }

        private onResize():void{
            this.stageWidth = this._$dom.width();
            this.stageHeight = this._$dom.height();
            this.render();
        }

        public render(gMatrix?:Mat2d):void{
            super.render(gMatrix);
            this.dom().css("zoom",1);
        }
    }
}
