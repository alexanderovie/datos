[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingOrganicLiveAdvancedRequestInfo

# Class: SerpBingOrganicLiveAdvancedRequestInfo

Defined in: main.ts:68529

## Implements

- [`ISerpBingOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpBingOrganicLiveAdvancedRequestInfo**(`data?`): `SerpBingOrganicLiveAdvancedRequestInfo`

Defined in: main.ts:68664

#### Parameters

##### data?

[`ISerpBingOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md)

#### Returns

`SerpBingOrganicLiveAdvancedRequestInfo`

## Properties

### browser\_screen\_height?

> `optional` **browser\_screen\_height**: `number`

Defined in: main.ts:68641

browser screen height
optional field
you can set a custom browser screen height to calculate pixel rankings for a particular device;
by default, the parameter is set to:
1080 for desktop;
640 for mobile on android;
812 for mobile on iOS;
Note: to use this parameter, set calculate_rectangles to true

#### Implementation of

[`ISerpBingOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md).[`browser_screen_height`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md#browser_screen_height)

***

### browser\_screen\_resolution\_ratio?

> `optional` **browser\_screen\_resolution\_ratio**: `number`

Defined in: main.ts:68650

browser screen resolution ratio
optional field
you can set a custom browser screen resolution ratio to calculate pixel rankings for a particular device;
by default, the parameter is set to:
1 for desktop;
3 for mobile on android;
3 for mobile on iOS;
Note: to use this parameter, set calculate_rectangles to true

#### Implementation of

[`ISerpBingOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md).[`browser_screen_resolution_ratio`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md#browser_screen_resolution_ratio)

***

### browser\_screen\_width?

> `optional` **browser\_screen\_width**: `number`

Defined in: main.ts:68632

browser screen width
optional field
you can set a custom browser screen width to calculate pixel rankings for a particular device;
by default, the parameter is set to:
1920 for desktop;
360 for mobile on android;
375 for mobile on iOS;
Note: to use this parameter, set calculate_rectangles to true

#### Implementation of

[`ISerpBingOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md).[`browser_screen_width`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md#browser_screen_width)

***

### calculate\_rectangles?

> `optional` **calculate\_rectangles**: `boolean`

Defined in: main.ts:68623

calcualte pixel rankings for SERP elements in advanced results
optional field
pixel ranking refers to the distance between the result snippet and top left corner of the screen;
Visit Help Center to learn more>>
by default, the parameter is set to false
Note: if set to true, the charge per task will be multiplied by 2

#### Implementation of

[`ISerpBingOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md).[`calculate_rectangles`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md#calculate_rectangles)

***

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:68609

parsing depth
optional field
number of results in SERP
default value: 100
max value: 700
Note: your account will be billed per each SERP containing up to 100 results;
thus, setting a depth above 100 may result in additional charges if the search engine returns more than 100 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`ISerpBingOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md).[`depth`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md#depth)

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:68593

device type
optional field
can take the values:desktop, mobile
default value: desktop

#### Implementation of

[`ISerpBingOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md).[`device`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md#device)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:68544

keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”
if this field contains such parameters as ‘allinanchor:’, ‘allintext:’, ‘allintitle:’, ‘allinurl:’, ‘define:’, ‘filetype:’, ‘id:’, ‘inanchor:’, ‘info:’, ‘intext:’, ‘intitle:’, ‘inurl:’, ‘link:’, ‘related:’, ‘site:’ the charge per task will be multiplied by 5
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`ISerpBingOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md).[`keyword`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:68588

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/bing/languages
example:
en

#### Implementation of

[`ISerpBingOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md).[`language_code`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:68581

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/bing/languages
example:
English

#### Implementation of

[`ISerpBingOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md).[`language_name`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:68566

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/bing/locations
example:
2840

#### Implementation of

[`ISerpBingOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md).[`location_code`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:68574

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
example:
53.476225,-2.243572

#### Implementation of

[`ISerpBingOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md).[`location_coordinate`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:68559

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/bing/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpBingOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md).[`location_name`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md#location_name)

***

### max\_crawl\_pages?

> `optional` **max\_crawl\_pages**: `number`

Defined in: main.ts:68616

page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Implementation of

[`ISerpBingOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md).[`max_crawl_pages`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md#max_crawl_pages)

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:68600

device operating system
optional field
if you specify desktop in the device field, choose from the following values: windows, macos
default value: windows
if you specify mobile in the device field, choose from the following values: android, ios
default value: android

#### Implementation of

[`ISerpBingOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md).[`os`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md#os)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:68552

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`ISerpBingOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md).[`priority`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md#priority)

***

### search\_param?

> `optional` **search\_param**: `string`

Defined in: main.ts:68654

additional parameters of the search query
optional field
get the list of available parameters and additional details here

#### Implementation of

[`ISerpBingOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md).[`search_param`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md#search_param)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:68660

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpBingOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md).[`tag`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md#tag)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:68535

direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://www.bing.com/search?q=rank%20checker&count=50&first=1&setlang=en&cc=US&safesearch=Moderate&FORM=SEPAGE

#### Implementation of

[`ISerpBingOrganicLiveAdvancedRequestInfo`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md).[`url`](../interfaces/ISerpBingOrganicLiveAdvancedRequestInfo.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:68673

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:68707

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpBingOrganicLiveAdvancedRequestInfo`

Defined in: main.ts:68700

#### Parameters

##### data

`any`

#### Returns

`SerpBingOrganicLiveAdvancedRequestInfo`
