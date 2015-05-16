/**
 * Created by Chack on 2015/3/15.
 */
///<reference path="header/jquery.d.ts"/>
///<reference path="header/glmatrix.d.ts"/>
///<reference path="b0__Core.ts"/>
///<reference path="c0__Container.ts"/>
module cksvg{
    export class Group extends cksvg.Container{
        constructor(){
            super();
            this._$dom = $(cksvg.makeSVG("g"));
        }
    }
}