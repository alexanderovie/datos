import { DataforseoLabsGoogleSearchIntentLiveItem, IDataforseoLabsGoogleSearchIntentLiveItem } from "./DataforseoLabsGoogleSearchIntentLiveItem";


export interface IDataforseoLabsGoogleSearchIntentLiveResultInfo   {
        
        /** language code in a POST array
if there is no data, then the value is null */
        language_code?: string | undefined
        
        /** the number of results returned in the items array */
        items_count?: number | undefined
        
        /** array of items with relevant traffic estimation data */
        items?: DataforseoLabsGoogleSearchIntentLiveItem[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleSearchIntentLiveResultInfo  implements IDataforseoLabsGoogleSearchIntentLiveResultInfo {
    
    /** language code in a POST array
if there is no data, then the value is null */

    language_code?: string | undefined;
    
    /** the number of results returned in the items array */

    items_count?: number | undefined;
    
    /** array of items with relevant traffic estimation data */

    items?: DataforseoLabsGoogleSearchIntentLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleSearchIntentLiveResultInfo) {

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
            this.language_code = data["language_code"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(DataforseoLabsGoogleSearchIntentLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleSearchIntentLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleSearchIntentLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["language_code"] = this.language_code;
        data["items_count"] = this.items_count;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}