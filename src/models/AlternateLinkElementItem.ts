import { BaseOnPageLinkItemInfo, IBaseOnPageLinkItemInfo } from "./BaseOnPageLinkItemInfo";
import { ApiException, throwException } from "./ApiException"

export interface IAlternateLinkElementItem  extends IBaseOnPageLinkItemInfo    {

    [key: string]: any;

    }

export class AlternateLinkElementItem  extends BaseOnPageLinkItemInfo   implements IAlternateLinkElementItem {

    [key: string]: any;


    constructor(data?: IAlternateLinkElementItem) {
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

    static fromJS(data: any): AlternateLinkElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new AlternateLinkElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        return data;
    }
}