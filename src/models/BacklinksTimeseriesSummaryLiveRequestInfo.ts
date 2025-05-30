import { ApiException, throwException } from "./ApiException"

export interface IBacklinksTimeseriesSummaryLiveRequestInfo   {
        
        /** domain to get data for
required field
a domain should be specified without https:// and www.
example:
'forbes.com' */
        target?: string | undefined
        
        /** starting date of the time range
optional field
this field indicates the date which will be used as a threshold for summary data;
minimum value: 2019-01-30
maximum value shouldn’t exceed the date specified in the date_to
date format: 'yyyy-mm-dd'
example:
'2021-01-01' */
        date_from?: string | undefined
        
        /** ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
minimum value shouldn’t preceed the date specified in the date_from
maximum value: today’s date
date format: 'yyyy-mm-dd'
example:
'2021-01-15' */
        date_to?: string | undefined
        
        /** time range which will be used to group the results
optional field
default value: month
possible values: day, week, month, year
note: for day, we will return items corresponding to all dates between and including date_from and date_to;
for week/month/year, we will return items corresponding to full weeks/months/years, where each item will indicate the last day of the week/month/year
for example, if you specify:
'group_range': 'month',
'date_from': '2022-03-23',
'date_to': '2022-05-13'
we will return items falling between 2022-03-01 and 2022-05-31, namely, three items corresponding to the following dates: 2022-03-31, 2022-04-30, 2022-05-31
if there is no data for a certain  day/week/month/year, we will return 0 */
        group_range?: string | undefined
        
        /** indicates if the subdomains of the target will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true */
        include_subdomains?: boolean | undefined
        
        /** defines the scale used for calculating and displaying the rank, domain_from_rank, and page_from_rank values
optional field
you can use this parameter to choose whether rank values are presented on a 0–100 or 0–1000 scale
possible values:
one_hundred — rank values are displayed on a 0–100 scale
one_thousand — rank values are displayed on a 0–1000 scale
default value: one_thousand
learn more about how this parameter works and how ranking metrics are calculated in this Help Center article */
        rank_scale?: string | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class BacklinksTimeseriesSummaryLiveRequestInfo  implements IBacklinksTimeseriesSummaryLiveRequestInfo {
    
    /** domain to get data for
required field
a domain should be specified without https:// and www.
example:
'forbes.com' */

    target?: string | undefined;
    
    /** starting date of the time range
optional field
this field indicates the date which will be used as a threshold for summary data;
minimum value: 2019-01-30
maximum value shouldn’t exceed the date specified in the date_to
date format: 'yyyy-mm-dd'
example:
'2021-01-01' */

    date_from?: string | undefined;
    
    /** ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
minimum value shouldn’t preceed the date specified in the date_from
maximum value: today’s date
date format: 'yyyy-mm-dd'
example:
'2021-01-15' */

    date_to?: string | undefined;
    
    /** time range which will be used to group the results
optional field
default value: month
possible values: day, week, month, year
note: for day, we will return items corresponding to all dates between and including date_from and date_to;
for week/month/year, we will return items corresponding to full weeks/months/years, where each item will indicate the last day of the week/month/year
for example, if you specify:
'group_range': 'month',
'date_from': '2022-03-23',
'date_to': '2022-05-13'
we will return items falling between 2022-03-01 and 2022-05-31, namely, three items corresponding to the following dates: 2022-03-31, 2022-04-30, 2022-05-31
if there is no data for a certain  day/week/month/year, we will return 0 */

    group_range?: string | undefined;
    
    /** indicates if the subdomains of the target will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true */

    include_subdomains?: boolean | undefined;
    
    /** defines the scale used for calculating and displaying the rank, domain_from_rank, and page_from_rank values
optional field
you can use this parameter to choose whether rank values are presented on a 0–100 or 0–1000 scale
possible values:
one_hundred — rank values are displayed on a 0–100 scale
one_thousand — rank values are displayed on a 0–1000 scale
default value: one_thousand
learn more about how this parameter works and how ranking metrics are calculated in this Help Center article */

    rank_scale?: string | undefined;
    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksTimeseriesSummaryLiveRequestInfo) {

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
            this.target = data["target"];
            this.date_from = data["date_from"];
            this.date_to = data["date_to"];
            this.group_range = data["group_range"];
            this.include_subdomains = data["include_subdomains"];
            this.rank_scale = data["rank_scale"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): BacklinksTimeseriesSummaryLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksTimeseriesSummaryLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["target"] = this.target;
        data["date_from"] = this.date_from;
        data["date_to"] = this.date_to;
        data["group_range"] = this.group_range;
        data["include_subdomains"] = this.include_subdomains;
        data["rank_scale"] = this.rank_scale;
        data["tag"] = this.tag;
        return data;
    }
}