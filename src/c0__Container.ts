/**
 * Created by Chack on 2015/3/14.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c1__DisplayObject.ts"/>
module cksvg{
    export class Container extends cksvg.DisplayObject{
        private _children:DisplayObject[] = [];
        public numChildren:number = 0;

        public addChild(d:DisplayObject):void{
            this._children.push(d);
            this.numChildren = this._children.length;
            this._$dom.append(d.dom());
            if(d.parent) d.parent.removeChild(d);
            d.parent = this;
        }

        public addChildAt(d:DisplayObject,i:number):void{
            this._children.push(d);
            if(i>this.numChildren-1){
                this.addChild(d);
                return;
            }else if(i<0){
                i = 0;
            }
            d.dom().insertAfter(this._$dom.children().eq(i));
            if(d.parent){
                d.parent.removeChild(d);
            }
            d.parent = this;
            this.numChildren = this._children.length;
        }

        public removeChild(d:DisplayObject):boolean{
            var index = this.indexOf(d);
            if(index>=0){
                this._children.splice(index,1);
                return true;
            }
            return false;
        }

        public indexOf(d:DisplayObject){
            return this._children.indexOf(d);
        }

        public render(gMatrix?:Mat2d):void{
            super.render(gMatrix);

            for(var i in this._children){
                var dis:DisplayObject = this._children[i];
                dis.render(this._sumMatrix);
            }
        }
    }
}
