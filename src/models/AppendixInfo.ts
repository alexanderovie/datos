export interface IAppendixInfo   {
        
        task_post?: number
        
        task_get?: number
        
        tasks_ready?: number
        
        live?: number

    [key: string]: any;

    }

export class AppendixInfo  implements IAppendixInfo {

    task_post?: number;

    task_get?: number;

    tasks_ready?: number;

    live?: number;

    [key: string]: any;


    constructor(data?: IAppendixInfo) {

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
            this.task_post = data["task_post"];
            this.task_get = data["task_get"];
            this.tasks_ready = data["tasks_ready"];
            this.live = data["live"];
        }
    }

    static fromJS(data: any): AppendixInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["task_post"] = this.task_post;
        data["task_get"] = this.task_get;
        data["tasks_ready"] = this.tasks_ready;
        data["live"] = this.live;
        return data;
    }
}