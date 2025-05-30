import { BaseOnPageLinkItemInfo, IBaseOnPageLinkItemInfo } from "./BaseOnPageLinkItemInfo";
import { ApiException, throwException } from "./ApiException"

export interface ICanonicalLinkElementItem  extends IBaseOnPageLinkItemInfo    {

    [key: string]: any;

    }

export class CanonicalLinkElementItem  extends BaseOnPageLinkItemInfo   implements ICanonicalLinkElementItem {

    [key: string]: any;


    constructor(data?: ICanonicalLinkElementItem) {
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

    static fromJS(data: any): CanonicalLinkElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new CanonicalLinkElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        return data;
    }
}