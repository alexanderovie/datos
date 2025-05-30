import { MessageInfo, IMessageInfo } from "./MessageInfo";
import { ApiException, throwException } from "./ApiException"

export interface IMicrodataFieldsInfo   {
        
        /** field name
name of the data field */
        name?: string | undefined
        
        /** list of microdata types */
        types?: string[] | undefined
        
        /** microdata value
microdata value specified on a target web page */
        value?: string | undefined
        
        /** list of microdata types */
        test_results?: MessageInfo[] | undefined
        
        /** microdata fields
an array of objects containing data fields related to the certain microdata type */
        fields?: MicrodataFieldsInfo | undefined

    [key: string]: any;

    }

export class MicrodataFieldsInfo  implements IMicrodataFieldsInfo {
    
    /** field name
name of the data field */

    name?: string | undefined;
    
    /** list of microdata types */

    types?: string[] | undefined;
    
    /** microdata value
microdata value specified on a target web page */

    value?: string | undefined;
    
    /** list of microdata types */

    test_results?: MessageInfo[] | undefined;
    
    /** microdata fields
an array of objects containing data fields related to the certain microdata type */

    fields?: MicrodataFieldsInfo | undefined;

    [key: string]: any;


    constructor(data?: IMicrodataFieldsInfo) {

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
            this.name = data["name"];
            this.types = data["types"];
            this.value = data["value"];
            if (Array.isArray(data["test_results"])) {
                this.test_results = [];
                for (let item of data["test_results"]) {
                    this.test_results.push(MessageInfo.fromJS(item));
                }
            }
            this.fields = data["fields"] ? MicrodataFieldsInfo.fromJS(data["fields"]) : <any>undefined;
        }
    }

    static fromJS(data: any): MicrodataFieldsInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MicrodataFieldsInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["name"] = this.name;
        data["types"] = this.types;
        data["value"] = this.value;
        data["test_results"] = null;
        if (Array.isArray(this.test_results)) {
            data["test_results"] = [];
            for (let item of this.test_results) {
                if (item && typeof item.toJSON === "function") {
                    data["test_results"].push(item?.toJSON());
                }
            }
        }
        data["fields"] = this.fields ? MicrodataFieldsInfo.fromJS(this.fields)?.toJSON() : <any>undefined;
        return data;
    }
}