export interface IBusinessDataSocialMediaFacebookLiveResultInfo   {
        
        /** type of element */
        type?: string | undefined
        
        /** URL of the page the data is provided for
corresponding URL you specified in the targets array when setting a task */
        page_url?: string | undefined
        
        /** number of likes for the related page_url
this field shows the number of likes a page received through the Facebook Like Button embed */
        like_count?: number | undefined

    [key: string]: any;

    }

export class BusinessDataSocialMediaFacebookLiveResultInfo  implements IBusinessDataSocialMediaFacebookLiveResultInfo {
    
    /** type of element */

    type?: string | undefined;
    
    /** URL of the page the data is provided for
corresponding URL you specified in the targets array when setting a task */

    page_url?: string | undefined;
    
    /** number of likes for the related page_url
this field shows the number of likes a page received through the Facebook Like Button embed */

    like_count?: number | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataSocialMediaFacebookLiveResultInfo) {

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
            this.page_url = data["page_url"];
            this.like_count = data["like_count"];
        }
    }

    static fromJS(data: any): BusinessDataSocialMediaFacebookLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataSocialMediaFacebookLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["page_url"] = this.page_url;
        data["like_count"] = this.like_count;
        return data;
    }
}