import { BaseGoogleFinanceSerpElementItem, IBaseGoogleFinanceSerpElementItem } from "./BaseGoogleFinanceSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleFinanceAboutSerpElementItem  extends IBaseGoogleFinanceSerpElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** displayed name of the market index
example: E-mini Dow ($5) */
        displayed_name?: string | undefined
        
        /** company description */
        description?: string | undefined
        
        /** source of information provided in description */
        description_source_url?: string | undefined
        
        /** Chief Executive Officer of the company */
        ceo?: string | undefined
        
        /** date when the company was founded
in the format: “yyyy-mm-ddThh-mm-ssZ”
example:
1993-04-05T00:00:00Z */
        founded?: string | undefined
        
        /** company headquarters */
        headquarters?: string | undefined
        
        /** company website */
        website?: string | undefined
        
        /** number of company employees */
        employees?: number | undefined

    [key: string]: any;

    }

export class GoogleFinanceAboutSerpElementItem  extends BaseGoogleFinanceSerpElementItem   implements IGoogleFinanceAboutSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;
    
    /** displayed name of the market index
example: E-mini Dow ($5) */

    displayed_name?: string | undefined;
    
    /** company description */

    description?: string | undefined;
    
    /** source of information provided in description */

    description_source_url?: string | undefined;
    
    /** Chief Executive Officer of the company */

    ceo?: string | undefined;
    
    /** date when the company was founded
in the format: “yyyy-mm-ddThh-mm-ssZ”
example:
1993-04-05T00:00:00Z */

    founded?: string | undefined;
    
    /** company headquarters */

    headquarters?: string | undefined;
    
    /** company website */

    website?: string | undefined;
    
    /** number of company employees */

    employees?: number | undefined;

    [key: string]: any;


    constructor(data?: IGoogleFinanceAboutSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.displayed_name = data["displayed_name"];
            this.description = data["description"];
            this.description_source_url = data["description_source_url"];
            this.ceo = data["ceo"];
            this.founded = data["founded"];
            this.headquarters = data["headquarters"];
            this.website = data["website"];
            this.employees = data["employees"];
        }
    }

    static fromJS(data: any): GoogleFinanceAboutSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleFinanceAboutSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["displayed_name"] = this.displayed_name;
        data["description"] = this.description;
        data["description_source_url"] = this.description_source_url;
        data["ceo"] = this.ceo;
        data["founded"] = this.founded;
        data["headquarters"] = this.headquarters;
        data["website"] = this.website;
        data["employees"] = this.employees;
        return data;
    }
}