import { BaseOnPageLinkItemInfo, IBaseOnPageLinkItemInfo } from "./BaseOnPageLinkItemInfo";
import { ApiException, throwException } from "./ApiException"

export interface ILinkLinkElementItem  extends IBaseOnPageLinkItemInfo    {

    [key: string]: any;

    }

export class LinkLinkElementItem  extends BaseOnPageLinkItemInfo   implements ILinkLinkElementItem {

    [key: string]: any;


    constructor(data?: ILinkLinkElementItem) {
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

    static fromJS(data: any): LinkLinkElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new LinkLinkElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        return data;
    }
}