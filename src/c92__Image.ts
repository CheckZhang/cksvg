/**
 * Created by Chack on 2015/3/16.
 */
module cksvg{
    export class Image extends cksvg.DisplayObject{
        constructor(url:string,width?:number,height?:number){
            super();
            var temp = cksvg.makeSVG("image",{width:width,height:height});
            temp["href"].baseVal=url;
            this._$dom = $(temp);
        }
    }
}