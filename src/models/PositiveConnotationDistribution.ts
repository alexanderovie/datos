import { ContentAnalysisSummaryInfo, IContentAnalysisSummaryInfo } from "./ContentAnalysisSummaryInfo";


export interface IPositiveConnotationDistribution   {
        
        positive?: ContentAnalysisSummaryInfo | undefined
        
        negative?: ContentAnalysisSummaryInfo | undefined
        
        neutral?: ContentAnalysisSummaryInfo | undefined

    [key: string]: any;

    }

export class PositiveConnotationDistribution  implements IPositiveConnotationDistribution {

    positive?: ContentAnalysisSummaryInfo | undefined;

    negative?: ContentAnalysisSummaryInfo | undefined;

    neutral?: ContentAnalysisSummaryInfo | undefined;

    [key: string]: any;


    constructor(data?: IPositiveConnotationDistribution) {

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
            this.positive = data["positive"] ? ContentAnalysisSummaryInfo.fromJS(data["positive"]) : <any>undefined;
            this.negative = data["negative"] ? ContentAnalysisSummaryInfo.fromJS(data["negative"]) : <any>undefined;
            this.neutral = data["neutral"] ? ContentAnalysisSummaryInfo.fromJS(data["neutral"]) : <any>undefined;
        }
    }

    static fromJS(data: any): PositiveConnotationDistribution {
        data = typeof data === 'object' ? data : {};


        let result = new PositiveConnotationDistribution();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["positive"] = this.positive ? ContentAnalysisSummaryInfo.fromJS(this.positive)?.toJSON() : <any>undefined;
        data["negative"] = this.negative ? ContentAnalysisSummaryInfo.fromJS(this.negative)?.toJSON() : <any>undefined;
        data["neutral"] = this.neutral ? ContentAnalysisSummaryInfo.fromJS(this.neutral)?.toJSON() : <any>undefined;
        return data;
    }
}