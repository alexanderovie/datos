import { EventDates, IEventDates } from "./EventDates";
import { LocationInfo, ILocationInfo } from "./LocationInfo";
import { InformationAndTicketsElement, IInformationAndTicketsElement } from "./InformationAndTicketsElement";
import { BaseSerpElementItem, IBaseSerpElementItem } from "./BaseSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IEventItemSerpElementItem  extends IBaseSerpElementItem    {
        
        /** title of the element */
        title?: string | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** search URL with refinement parameters */
        url?: string | undefined
        
        /** URL of the image featured in the element */
        image_url?: string | undefined
        
        /** dates when the event takes place
if there are none, equals null */
        event_dates?: EventDates | undefined
        
        /** information about the event’s venue */
        location_info?: LocationInfo | undefined
        
        /** additional information and ticket purchase options */
        information_and_tickets?: InformationAndTicketsElement[] | undefined

    [key: string]: any;

    }

export class EventItemSerpElementItem  extends BaseSerpElementItem   implements IEventItemSerpElementItem {
    
    /** title of the element */

    title?: string | undefined;
    
    /** description of the results element in SERP */

    description?: string | undefined;
    
    /** search URL with refinement parameters */

    url?: string | undefined;
    
    /** URL of the image featured in the element */

    image_url?: string | undefined;
    
    /** dates when the event takes place
if there are none, equals null */

    event_dates?: EventDates | undefined;
    
    /** information about the event’s venue */

    location_info?: LocationInfo | undefined;
    
    /** additional information and ticket purchase options */

    information_and_tickets?: InformationAndTicketsElement[] | undefined;

    [key: string]: any;


    constructor(data?: IEventItemSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.title = data["title"];
            this.description = data["description"];
            this.url = data["url"];
            this.image_url = data["image_url"];
            this.event_dates = data["event_dates"] ? EventDates.fromJS(data["event_dates"]) : <any>undefined;
            this.location_info = data["location_info"] ? LocationInfo.fromJS(data["location_info"]) : <any>undefined;
            if (Array.isArray(data["information_and_tickets"])) {
                this.information_and_tickets = [];
                for (let item of data["information_and_tickets"]) {
                    this.information_and_tickets.push(InformationAndTicketsElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): EventItemSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new EventItemSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["description"] = this.description;
        data["url"] = this.url;
        data["image_url"] = this.image_url;
        data["event_dates"] = this.event_dates ? EventDates.fromJS(this.event_dates)?.toJSON() : <any>undefined;
        data["location_info"] = this.location_info ? LocationInfo.fromJS(this.location_info)?.toJSON() : <any>undefined;
        data["information_and_tickets"] = null;
        if (Array.isArray(this.information_and_tickets)) {
            data["information_and_tickets"] = [];
            for (let item of this.information_and_tickets) {
                if (item && typeof item.toJSON === "function") {
                    data["information_and_tickets"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}