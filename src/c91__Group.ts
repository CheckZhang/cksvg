/**
 * Created by Chack on 2015/3/15.
 */
module cksvg{
    export class Group extends cksvg.Container{
        constructor(){
            super();
            this._$dom = $(cksvg.makeSVG("g"));
        }
    }
}