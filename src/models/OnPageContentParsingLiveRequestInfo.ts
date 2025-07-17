export interface IOnPageContentParsingLiveRequestInfo   {
        
        /** URL of the content to parse
required field
URL of the page to parse
example:
https://www.fujielectric.com/ */
        url?: string | undefined
        
        /** custom user agent
optional field
custom user agent for crawling a website
example: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36

default value: Mozilla/5.0 (compatible; RSiteAuditor) */
        custom_user_agent?: string | undefined
        
        /** preset for browser screen parameters
optional field
if you use this field, you don’t need to indicate browser_screen_width, browser_screen_height, browser_screen_scale_factor
possible values:
desktop, mobile, tablet
desktop preset will apply the following values:
browser_screen_width: 1920
browser_screen_height: 1080
browser_screen_scale_factor: 1
mobile preset will apply the following values:
browser_screen_width: 390
browser_screen_height: 844
browser_screen_scale_factor: 3
tablet preset will apply the following values:
browser_screen_width: 1024
browser_screen_height: 1366
browser_screen_scale_factor: 2
Note: to use this parameter, set enable_javascript or enable_browser_rendering to true */
        browser_preset?: string | undefined
        
        /** browser screen width
optional field
you can set a custom browser screen width to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
Note: to use this parameter, set enable_javascript or enable_browser_rendering to true
minimum value, in pixels: 240
maximum value, in pixels: 9999 */
        browser_screen_width?: number | undefined
        
        /** browser screen height
optional field
you can set a custom browser screen height to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
Note: to use this parameter, set enable_javascript or enable_browser_rendering to true
minimum value, in pixels: 240
maximum value, in pixels: 9999 */
        browser_screen_height?: number | undefined
        
        /** browser screen scale factor
optional field
you can set a custom browser screen resolution ratio to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
Note: to use this parameter, set enable_javascript or enable_browser_rendering to true
minimum value: 0.5
maximum value: 3 */
        browser_screen_scale_factor?: number | undefined
        
        /** store HTML of a crawled page
optional field
set to true if you want to get the HTML of the page using the OnPage Raw HTML endpoint
default value: false */
        store_raw_html?: boolean | undefined
        
        /** disable the cookie popup 
optional field
set to true if you want to disable the popup requesting cookie consent from the user;
default value:
false */
        disable_cookie_popup?: boolean | undefined
        
        /** language header for accessing the website
optional field
all locale formats are supported (xx, xx-XX, xxx-XX, etc.)
Note: if you do not specify this parameter, some websites may deny access; in this case, pages will be returned with the 'type':'broken in the response array */
        accept_language?: string | undefined
        
        /** load javascript on a page
optional field
set to true if you want to load the scripts available on a page
default value: false
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page */
        enable_javascript?: boolean | undefined
        
        /** emulate browser rendering to measure Core Web Vitals
optional field
by using this parameter you will be able to emulate a browser when loading a web page;
enable_browser_rendering loads styles, images, fonts, animations, videos, and other resources on a page;
default value: false
set to true to obtain Core Web Vitals (FID, CLS, LCP) metrics in the response;
if you use this field, enable_javascript, and load_resources parameters must be set to true
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page */
        enable_browser_rendering?: boolean | undefined
        
        /** enable XMLHttpRequest on a page
optional field
set to true if you want our crawler to request data from a web server using the XMLHttpRequest object
default value:
false
if you use this field, enable_javascript must be set to true; */
        enable_xhr?: boolean | undefined
        
        /** switch proxy pool
optional field
if true, additional proxy pools will be used to obtain the requested data;
the parameter can be used if a multitude of tasks is set simultaneously, resulting in occasional rate-limit and/or site_unreachable errors */
        switch_pool?: boolean | undefined
        
        /** proxy pool
optional field
you can choose a location of the proxy pool that will be used to obtain the requested data;
the parameter can be used if page content is inaccessible in one of the locations, resulting in occasional site_unreachable errors
possible values: us, de */
        ip_pool_for_scan?: string | undefined
        
        /** return page content as markdown
optional field
if set to true, the markdown-formatted content of the page will be returned in the page_as_markdown field of the response;
default value: false */
        markdown_view?: boolean | undefined

    [key: string]: any;

    }

export class OnPageContentParsingLiveRequestInfo  implements IOnPageContentParsingLiveRequestInfo {
    
    /** URL of the content to parse
required field
URL of the page to parse
example:
https://www.fujielectric.com/ */

    url?: string | undefined;
    
    /** custom user agent
optional field
custom user agent for crawling a website
example: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36

default value: Mozilla/5.0 (compatible; RSiteAuditor) */

    custom_user_agent?: string | undefined;
    
    /** preset for browser screen parameters
optional field
if you use this field, you don’t need to indicate browser_screen_width, browser_screen_height, browser_screen_scale_factor
possible values:
desktop, mobile, tablet
desktop preset will apply the following values:
browser_screen_width: 1920
browser_screen_height: 1080
browser_screen_scale_factor: 1
mobile preset will apply the following values:
browser_screen_width: 390
browser_screen_height: 844
browser_screen_scale_factor: 3
tablet preset will apply the following values:
browser_screen_width: 1024
browser_screen_height: 1366
browser_screen_scale_factor: 2
Note: to use this parameter, set enable_javascript or enable_browser_rendering to true */

    browser_preset?: string | undefined;
    
    /** browser screen width
optional field
you can set a custom browser screen width to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
Note: to use this parameter, set enable_javascript or enable_browser_rendering to true
minimum value, in pixels: 240
maximum value, in pixels: 9999 */

    browser_screen_width?: number | undefined;
    
    /** browser screen height
optional field
you can set a custom browser screen height to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
Note: to use this parameter, set enable_javascript or enable_browser_rendering to true
minimum value, in pixels: 240
maximum value, in pixels: 9999 */

    browser_screen_height?: number | undefined;
    
    /** browser screen scale factor
optional field
you can set a custom browser screen resolution ratio to perform audit for a particular device;
if you use this field, you don’t need to indicate browser_preset as it will be ignored;
Note: to use this parameter, set enable_javascript or enable_browser_rendering to true
minimum value: 0.5
maximum value: 3 */

    browser_screen_scale_factor?: number | undefined;
    
    /** store HTML of a crawled page
optional field
set to true if you want to get the HTML of the page using the OnPage Raw HTML endpoint
default value: false */

    store_raw_html?: boolean | undefined;
    
    /** disable the cookie popup 
optional field
set to true if you want to disable the popup requesting cookie consent from the user;
default value:
false */

    disable_cookie_popup?: boolean | undefined;
    
    /** language header for accessing the website
optional field
all locale formats are supported (xx, xx-XX, xxx-XX, etc.)
Note: if you do not specify this parameter, some websites may deny access; in this case, pages will be returned with the 'type':'broken in the response array */

    accept_language?: string | undefined;
    
    /** load javascript on a page
optional field
set to true if you want to load the scripts available on a page
default value: false
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page */

    enable_javascript?: boolean | undefined;
    
    /** emulate browser rendering to measure Core Web Vitals
optional field
by using this parameter you will be able to emulate a browser when loading a web page;
enable_browser_rendering loads styles, images, fonts, animations, videos, and other resources on a page;
default value: false
set to true to obtain Core Web Vitals (FID, CLS, LCP) metrics in the response;
if you use this field, enable_javascript, and load_resources parameters must be set to true
Note: if you use this parameter, additional charges will apply; learn more about the cost of tasks with this parameter in our help article; the cost can be calculated on the Pricing Page */

    enable_browser_rendering?: boolean | undefined;
    
    /** enable XMLHttpRequest on a page
optional field
set to true if you want our crawler to request data from a web server using the XMLHttpRequest object
default value:
false
if you use this field, enable_javascript must be set to true; */

    enable_xhr?: boolean | undefined;
    
    /** switch proxy pool
optional field
if true, additional proxy pools will be used to obtain the requested data;
the parameter can be used if a multitude of tasks is set simultaneously, resulting in occasional rate-limit and/or site_unreachable errors */

    switch_pool?: boolean | undefined;
    
    /** proxy pool
optional field
you can choose a location of the proxy pool that will be used to obtain the requested data;
the parameter can be used if page content is inaccessible in one of the locations, resulting in occasional site_unreachable errors
possible values: us, de */

    ip_pool_for_scan?: string | undefined;
    
    /** return page content as markdown
optional field
if set to true, the markdown-formatted content of the page will be returned in the page_as_markdown field of the response;
default value: false */

    markdown_view?: boolean | undefined;

    [key: string]: any;


    constructor(data?: IOnPageContentParsingLiveRequestInfo) {

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
            this.url = data["url"];
            this.custom_user_agent = data["custom_user_agent"];
            this.browser_preset = data["browser_preset"];
            this.browser_screen_width = data["browser_screen_width"];
            this.browser_screen_height = data["browser_screen_height"];
            this.browser_screen_scale_factor = data["browser_screen_scale_factor"];
            this.store_raw_html = data["store_raw_html"];
            this.disable_cookie_popup = data["disable_cookie_popup"];
            this.accept_language = data["accept_language"];
            this.enable_javascript = data["enable_javascript"];
            this.enable_browser_rendering = data["enable_browser_rendering"];
            this.enable_xhr = data["enable_xhr"];
            this.switch_pool = data["switch_pool"];
            this.ip_pool_for_scan = data["ip_pool_for_scan"];
            this.markdown_view = data["markdown_view"];
        }
    }

    static fromJS(data: any): OnPageContentParsingLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageContentParsingLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["url"] = this.url;
        data["custom_user_agent"] = this.custom_user_agent;
        data["browser_preset"] = this.browser_preset;
        data["browser_screen_width"] = this.browser_screen_width;
        data["browser_screen_height"] = this.browser_screen_height;
        data["browser_screen_scale_factor"] = this.browser_screen_scale_factor;
        data["store_raw_html"] = this.store_raw_html;
        data["disable_cookie_popup"] = this.disable_cookie_popup;
        data["accept_language"] = this.accept_language;
        data["enable_javascript"] = this.enable_javascript;
        data["enable_browser_rendering"] = this.enable_browser_rendering;
        data["enable_xhr"] = this.enable_xhr;
        data["switch_pool"] = this.switch_pool;
        data["ip_pool_for_scan"] = this.ip_pool_for_scan;
        data["markdown_view"] = this.markdown_view;
        return data;
    }
}