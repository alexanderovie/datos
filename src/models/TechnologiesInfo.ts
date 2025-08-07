export interface ITechnologiesInfo   {
        
        add_ons?: { [key: string]: string[]; } | undefined
        
        analytics?: { [key: string]: string[]; } | undefined
        
        web_development?: { [key: string]: string[]; } | undefined
        
        security?: { [key: string]: string[]; } | undefined
        
        business_tools?: { [key: string]: string[]; } | undefined
        
        sales?: { [key: string]: string[]; } | undefined
        
        other?: { [key: string]: string[]; } | undefined
        
        user_generated_content?: { [key: string]: string[]; } | undefined
        
        booking?: { [key: string]: string[]; } | undefined
        
        privacy?: { [key: string]: string[]; } | undefined
        
        servers?: { [key: string]: string[]; } | undefined
        
        location?: { [key: string]: string[]; } | undefined
        
        content?: { [key: string]: string[]; } | undefined
        
        media?: { [key: string]: string[]; } | undefined
        
        marketing?: { [key: string]: string[]; } | undefined
        
        communication?: { [key: string]: string[]; } | undefined
        
        utilities?: { [key: string]: string[]; } | undefined

    [key: string]: any;

    }

export class TechnologiesInfo  implements ITechnologiesInfo {

    add_ons?: { [key: string]: string[]; } | undefined;

    analytics?: { [key: string]: string[]; } | undefined;

    web_development?: { [key: string]: string[]; } | undefined;

    security?: { [key: string]: string[]; } | undefined;

    business_tools?: { [key: string]: string[]; } | undefined;

    sales?: { [key: string]: string[]; } | undefined;

    other?: { [key: string]: string[]; } | undefined;

    user_generated_content?: { [key: string]: string[]; } | undefined;

    booking?: { [key: string]: string[]; } | undefined;

    privacy?: { [key: string]: string[]; } | undefined;

    servers?: { [key: string]: string[]; } | undefined;

    location?: { [key: string]: string[]; } | undefined;

    content?: { [key: string]: string[]; } | undefined;

    media?: { [key: string]: string[]; } | undefined;

    marketing?: { [key: string]: string[]; } | undefined;

    communication?: { [key: string]: string[]; } | undefined;

    utilities?: { [key: string]: string[]; } | undefined;

    [key: string]: any;


    constructor(data?: ITechnologiesInfo) {

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
            this.add_ons = data["add_ons"];
            this.analytics = data["analytics"];
            this.web_development = data["web_development"];
            this.security = data["security"];
            this.business_tools = data["business_tools"];
            this.sales = data["sales"];
            this.other = data["other"];
            this.user_generated_content = data["user_generated_content"];
            this.booking = data["booking"];
            this.privacy = data["privacy"];
            this.servers = data["servers"];
            this.location = data["location"];
            this.content = data["content"];
            this.media = data["media"];
            this.marketing = data["marketing"];
            this.communication = data["communication"];
            this.utilities = data["utilities"];
        }
    }

    static fromJS(data: any): TechnologiesInfo {
        data = typeof data === 'object' ? data : {};


        let result = new TechnologiesInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["add_ons"] = this.add_ons;
        data["analytics"] = this.analytics;
        data["web_development"] = this.web_development;
        data["security"] = this.security;
        data["business_tools"] = this.business_tools;
        data["sales"] = this.sales;
        data["other"] = this.other;
        data["user_generated_content"] = this.user_generated_content;
        data["booking"] = this.booking;
        data["privacy"] = this.privacy;
        data["servers"] = this.servers;
        data["location"] = this.location;
        data["content"] = this.content;
        data["media"] = this.media;
        data["marketing"] = this.marketing;
        data["communication"] = this.communication;
        data["utilities"] = this.utilities;
        return data;
    }
}