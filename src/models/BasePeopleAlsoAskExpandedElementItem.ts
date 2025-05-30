import { ApiException, throwException } from "./ApiException"

export interface IBasePeopleAlsoAskExpandedElementItem   {
        
        /** type of element */
        type?: string | undefined

    [key: string]: any;

    }

export class BasePeopleAlsoAskExpandedElementItem  implements IBasePeopleAlsoAskExpandedElementItem {
    
    /** type of element */

    type?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBasePeopleAlsoAskExpandedElementItem) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    this.discriminator = "BaseSerpElementItem";

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.type = data["type"];
        }
    }

    static fromJS(data: any): BasePeopleAlsoAskExpandedElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "people_also_ask_expanded_element") {

            const { PeopleAlsoAskExpandedElementSerpElementItem } = require('./PeopleAlsoAskExpandedElementSerpElementItem');
            let result = new PeopleAlsoAskExpandedElementSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "people_also_ask_ai_overview_expanded_element") {

            const { PeopleAlsoAskAiOverviewExpandedElementSerpElementItem } = require('./PeopleAlsoAskAiOverviewExpandedElementSerpElementItem');
            let result = new PeopleAlsoAskAiOverviewExpandedElementSerpElementItem();
            result.init(data);
            return result;
        }

        let result = new BasePeopleAlsoAskExpandedElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        return data;
    }
}