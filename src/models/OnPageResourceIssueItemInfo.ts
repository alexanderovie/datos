export interface IOnPageResourceIssueItemInfo   {
        
        /** line where the error was found */
        line?: number
        
        /** column where the error was found */
        column?: number
        
        /** text message of the error
the full list of possible HTML errors can be found here */
        message?: string
        
        /** status code of the error
possible values:
0 — Unidentified Error;
501 — Html Parse Error;
1501 — JS Parse Error;
2501 — CSS Parse Error;
3501 — Image Parse Error;
3502 — Image Scale Is Zero;
3503 — Image Size Is Zero;
3504 — Image Format Invalid */
        status_code?: number

    [key: string]: any;

    }

export class OnPageResourceIssueItemInfo  implements IOnPageResourceIssueItemInfo {
    
    /** line where the error was found */

    line?: number;
    
    /** column where the error was found */

    column?: number;
    
    /** text message of the error
the full list of possible HTML errors can be found here */

    message?: string;
    
    /** status code of the error
possible values:
0 — Unidentified Error;
501 — Html Parse Error;
1501 — JS Parse Error;
2501 — CSS Parse Error;
3501 — Image Parse Error;
3502 — Image Scale Is Zero;
3503 — Image Size Is Zero;
3504 — Image Format Invalid */

    status_code?: number;

    [key: string]: any;


    constructor(data?: IOnPageResourceIssueItemInfo) {

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
            this.line = data["line"];
            this.column = data["column"];
            this.message = data["message"];
            this.status_code = data["status_code"];
        }
    }

    static fromJS(data: any): OnPageResourceIssueItemInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageResourceIssueItemInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["line"] = this.line;
        data["column"] = this.column;
        data["message"] = this.message;
        data["status_code"] = this.status_code;
        return data;
    }
}