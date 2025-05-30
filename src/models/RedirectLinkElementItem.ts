import { BaseOnPageLinkItemInfo, IBaseOnPageLinkItemInfo } from "./BaseOnPageLinkItemInfo";
import { ApiException, throwException } from "./ApiException"

export interface IRedirectLinkElementItem  extends IBaseOnPageLinkItemInfo    {

    [key: string]: any;

    }

export class RedirectLinkElementItem  extends BaseOnPageLinkItemInfo   implements IRedirectLinkElementItem {

    [key: string]: any;


    constructor(data?: IRedirectLinkElementItem) {
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

    static fromJS(data: any): RedirectLinkElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new RedirectLinkElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        return data;
    }
}