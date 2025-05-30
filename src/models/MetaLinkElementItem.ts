import { BaseOnPageLinkItemInfo, IBaseOnPageLinkItemInfo } from "./BaseOnPageLinkItemInfo";
import { ApiException, throwException } from "./ApiException"

export interface IMetaLinkElementItem  extends IBaseOnPageLinkItemInfo    {

    [key: string]: any;

    }

export class MetaLinkElementItem  extends BaseOnPageLinkItemInfo   implements IMetaLinkElementItem {

    [key: string]: any;


    constructor(data?: IMetaLinkElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }

    static fromJS(data: any): MetaLinkElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new MetaLinkElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        return data;
    }
}