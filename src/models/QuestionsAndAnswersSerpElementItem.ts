import { QuestionsAndAnswersElement, IQuestionsAndAnswersElement } from "./QuestionsAndAnswersElement";
import { Rectangle, IRectangle } from "./Rectangle";
import { BaseSerpElementItem, IBaseSerpElementItem } from "./BaseSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IQuestionsAndAnswersSerpElementItem  extends IBaseSerpElementItem    {
        
        /** contains arrays of specific images */
        items?: QuestionsAndAnswersElement[] | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: Rectangle | undefined

    [key: string]: any;

    }

export class QuestionsAndAnswersSerpElementItem  extends BaseSerpElementItem   implements IQuestionsAndAnswersSerpElementItem {
    
    /** contains arrays of specific images */

    items?: QuestionsAndAnswersElement[] | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: Rectangle | undefined;

    [key: string]: any;


    constructor(data?: IQuestionsAndAnswersSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(QuestionsAndAnswersElement.fromJS(item));
                }
            }
            this.rectangle = data["rectangle"] ? Rectangle.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): QuestionsAndAnswersSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new QuestionsAndAnswersSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        data["rectangle"] = this.rectangle ? Rectangle.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}