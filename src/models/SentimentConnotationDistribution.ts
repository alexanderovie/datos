import { ContentAnalysisSummaryInfo, IContentAnalysisSummaryInfo } from "./ContentAnalysisSummaryInfo";


export interface ISentimentConnotationDistribution   {
        
        anger?: ContentAnalysisSummaryInfo | undefined
        
        happiness?: ContentAnalysisSummaryInfo | undefined
        
        love?: ContentAnalysisSummaryInfo | undefined
        
        sadness?: ContentAnalysisSummaryInfo | undefined
        
        share?: ContentAnalysisSummaryInfo | undefined
        
        fun?: ContentAnalysisSummaryInfo | undefined

    [key: string]: any;

    }

export class SentimentConnotationDistribution  implements ISentimentConnotationDistribution {

    anger?: ContentAnalysisSummaryInfo | undefined;

    happiness?: ContentAnalysisSummaryInfo | undefined;

    love?: ContentAnalysisSummaryInfo | undefined;

    sadness?: ContentAnalysisSummaryInfo | undefined;

    share?: ContentAnalysisSummaryInfo | undefined;

    fun?: ContentAnalysisSummaryInfo | undefined;

    [key: string]: any;


    constructor(data?: ISentimentConnotationDistribution) {

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
            this.anger = data["anger"] ? ContentAnalysisSummaryInfo.fromJS(data["anger"]) : <any>undefined;
            this.happiness = data["happiness"] ? ContentAnalysisSummaryInfo.fromJS(data["happiness"]) : <any>undefined;
            this.love = data["love"] ? ContentAnalysisSummaryInfo.fromJS(data["love"]) : <any>undefined;
            this.sadness = data["sadness"] ? ContentAnalysisSummaryInfo.fromJS(data["sadness"]) : <any>undefined;
            this.share = data["share"] ? ContentAnalysisSummaryInfo.fromJS(data["share"]) : <any>undefined;
            this.fun = data["fun"] ? ContentAnalysisSummaryInfo.fromJS(data["fun"]) : <any>undefined;
        }
    }

    static fromJS(data: any): SentimentConnotationDistribution {
        data = typeof data === 'object' ? data : {};


        let result = new SentimentConnotationDistribution();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["anger"] = this.anger ? ContentAnalysisSummaryInfo.fromJS(this.anger)?.toJSON() : <any>undefined;
        data["happiness"] = this.happiness ? ContentAnalysisSummaryInfo.fromJS(this.happiness)?.toJSON() : <any>undefined;
        data["love"] = this.love ? ContentAnalysisSummaryInfo.fromJS(this.love)?.toJSON() : <any>undefined;
        data["sadness"] = this.sadness ? ContentAnalysisSummaryInfo.fromJS(this.sadness)?.toJSON() : <any>undefined;
        data["share"] = this.share ? ContentAnalysisSummaryInfo.fromJS(this.share)?.toJSON() : <any>undefined;
        data["fun"] = this.fun ? ContentAnalysisSummaryInfo.fromJS(this.fun)?.toJSON() : <any>undefined;
        return data;
    }
}