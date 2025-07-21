export interface IStreamingQualityElement   {
        
        /** type of element */
        type?: string
        
        /** label of the quality element */
        label?: string
        
        /** video width in pixels */
        width?: number
        
        /** video height in pixels */
        height?: number
        
        /** bit rate of the video */
        bitrate?: number
        
        /** media type of the video */
        mime_type?: string
        
        /** frame rate of the video */
        fps?: number

    [key: string]: any;

    }

export class StreamingQualityElement  implements IStreamingQualityElement {
    
    /** type of element */

    type?: string;
    
    /** label of the quality element */

    label?: string;
    
    /** video width in pixels */

    width?: number;
    
    /** video height in pixels */

    height?: number;
    
    /** bit rate of the video */

    bitrate?: number;
    
    /** media type of the video */

    mime_type?: string;
    
    /** frame rate of the video */

    fps?: number;

    [key: string]: any;


    constructor(data?: IStreamingQualityElement) {

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
            this.type = data["type"];
            this.label = data["label"];
            this.width = data["width"];
            this.height = data["height"];
            this.bitrate = data["bitrate"];
            this.mime_type = data["mime_type"];
            this.fps = data["fps"];
        }
    }

    static fromJS(data: any): StreamingQualityElement {
        data = typeof data === 'object' ? data : {};


        let result = new StreamingQualityElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["label"] = this.label;
        data["width"] = this.width;
        data["height"] = this.height;
        data["bitrate"] = this.bitrate;
        data["mime_type"] = this.mime_type;
        data["fps"] = this.fps;
        return data;
    }
}