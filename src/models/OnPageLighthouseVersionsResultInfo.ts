import { AvailibleVersions, IAvailibleVersions } from "./AvailibleVersions";


export interface IOnPageLighthouseVersionsResultInfo   {
        
        availible_versions?: AvailibleVersions[] | undefined

    [key: string]: any;

    }

export class OnPageLighthouseVersionsResultInfo  implements IOnPageLighthouseVersionsResultInfo {

    availible_versions?: AvailibleVersions[] | undefined;

    [key: string]: any;


    constructor(data?: IOnPageLighthouseVersionsResultInfo) {

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
            if (Array.isArray(data["availible_versions"])) {
                this.availible_versions = [];
                for (let item of data["availible_versions"]) {
                    this.availible_versions.push(AvailibleVersions.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): OnPageLighthouseVersionsResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageLighthouseVersionsResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["availible_versions"] = null;
        if (Array.isArray(this.availible_versions)) {
            data["availible_versions"] = [];
            for (let item of this.availible_versions) {
                if (item && typeof item.toJSON === "function") {
                    data["availible_versions"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}