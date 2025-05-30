import { MicrodataInspectionInfo, IMicrodataInspectionInfo } from "./MicrodataInspectionInfo";
import { ApiException, throwException } from "./ApiException"

export interface IOnPageMicrodataItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** information related to microdata validation */
        inspection_info?: MicrodataInspectionInfo | undefined

    [key: string]: any;

    }

export class OnPageMicrodataItem  implements IOnPageMicrodataItem {
    
    /** type of element */

    type?: string | undefined;
    
    /** information related to microdata validation */

    inspection_info?: MicrodataInspectionInfo | undefined;

    [key: string]: any;


    constructor(data?: IOnPageMicrodataItem) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.type = data["type"];
            this.inspection_info = data["inspection_info"] ? MicrodataInspectionInfo.fromJS(data["inspection_info"]) : <any>undefined;
        }
    }

    static fromJS(data: any): OnPageMicrodataItem {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageMicrodataItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["inspection_info"] = this.inspection_info ? MicrodataInspectionInfo.fromJS(this.inspection_info)?.toJSON() : <any>undefined;
        return data;
    }
}