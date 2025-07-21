export interface IAppMetricsInfo   {
        
        /** number of organic SERPs where the product ranks #1 */
        pos_1?: number
        
        /** number of organic SERPs where the product ranks #2-3 */
        pos_2_3?: number
        
        /** number of organic SERPs where the product ranks #4-10 */
        pos_4_10?: number
        
        /** number of organic SERPs where the product ranks #11-100 */
        pos_11_100?: number
        
        /** total count of Amazon organic SERPs that contain the product */
        count?: number
        
        /** total search volume of the product’s ranking keywords in organic SERP */
        search_volume?: number

    [key: string]: any;

    }

export class AppMetricsInfo  implements IAppMetricsInfo {
    
    /** number of organic SERPs where the product ranks #1 */

    pos_1?: number;
    
    /** number of organic SERPs where the product ranks #2-3 */

    pos_2_3?: number;
    
    /** number of organic SERPs where the product ranks #4-10 */

    pos_4_10?: number;
    
    /** number of organic SERPs where the product ranks #11-100 */

    pos_11_100?: number;
    
    /** total count of Amazon organic SERPs that contain the product */

    count?: number;
    
    /** total search volume of the product’s ranking keywords in organic SERP */

    search_volume?: number;

    [key: string]: any;


    constructor(data?: IAppMetricsInfo) {

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
            this.pos_1 = data["pos_1"];
            this.pos_2_3 = data["pos_2_3"];
            this.pos_4_10 = data["pos_4_10"];
            this.pos_11_100 = data["pos_11_100"];
            this.count = data["count"];
            this.search_volume = data["search_volume"];
        }
    }

    static fromJS(data: any): AppMetricsInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppMetricsInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["pos_1"] = this.pos_1;
        data["pos_2_3"] = this.pos_2_3;
        data["pos_4_10"] = this.pos_4_10;
        data["pos_11_100"] = this.pos_11_100;
        data["count"] = this.count;
        data["search_volume"] = this.search_volume;
        return data;
    }
}