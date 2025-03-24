[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleOrganicLiveRegularRequestInfo

# Class: SerpGoogleOrganicLiveRegularRequestInfo

Defined in: main.ts:41517

## Implements

- [`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleOrganicLiveRegularRequestInfo**(`data`?): `SerpGoogleOrganicLiveRegularRequestInfo`

Defined in: main.ts:41638

#### Parameters

##### data?

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md)

#### Returns

`SerpGoogleOrganicLiveRegularRequestInfo`

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:41598

parsing depth
optional field
number of results in SERP
default value: 100
max value: 700
Note: your account will be billed per each SERP containing up to 100 results;
thus, setting a depth above 100 may result in additional charges if the search engine returns more than 100 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`depth`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#depth)

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:41575

device type
optional field
can take the values:desktop, mobile
default value: desktop

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`device`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#device)

***

### group\_organic\_results?

> `optional` **group\_organic\_results**: `boolean`

Defined in: main.ts:41617

display related results
optional field
if set to true, the related_result element in the response will be provided as a snippet of its parent organic result;
if set to false, the related_result element will be provided as a separate organic result;
default value: true

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`group_organic_results`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#group_organic_results)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:41532

keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”;
if this field contains such parameters as ‘allinanchor:’, ‘allintext:’, ‘allintitle:’, ‘allinurl:’, ‘define:’, ‘filetype:’, ‘id:’, ‘inanchor:’, ‘info:’, ‘intext:’, ‘intitle:’, ‘inurl:’, ‘link:’, ‘site:’, the charge per task will be multiplied by 5
Note: queries containing the ‘cache:’ parameter are not supported and will return a validation error

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`keyword`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:41570

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:41563

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:41546

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
2840

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:41556

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9 (mm)
the maximum value for “radius”: 199999 (mm)
example:
53.476225,-2.243572,200

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`location_coordinate`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:41539

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#location_name)

***

### max\_crawl\_pages?

> `optional` **max\_crawl\_pages**: `number`

Defined in: main.ts:41624

page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`max_crawl_pages`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#max_crawl_pages)

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:41582

device operating system
optional field
if you specify desktop in the device field, choose from the following values: windows, macos
default value: windows
if you specify mobile in the device field, choose from the following values: android, ios
default value: android

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`os`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#os)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:41589

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc.

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`se_domain`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#se_domain)

***

### search\_param?

> `optional` **search\_param**: `string`

Defined in: main.ts:41628

additional parameters of the search query
optional field
get the list of available parameters and additional details here

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`search_param`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#search_param)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:41634

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`tag`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#tag)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:41611

target domain, subdomain, or webpage to get results for
optional field
a domain or a subdomain should be specified without https:// and www.
note that the results of target-specific tasks will only include SERP elements that contain a url string;
you can also use a wildcard (‘*’) character to specify the search pattern in SERP and narrow down the results;
examples:
example.com  – returns results for the website’s home page with URLs, such as https://example.com, or https://www.example.com/, or https://example.com/;
example.com* – returns results for the domain, including all its pages;
*example.com* – returns results for the entire domain, including all its pages and subdomains;
*example.com  – returns results for the home page regardless of the subdomain, such as https://en.example.com;
example.com/example-page  – returns results for the exact URL;
example.com/example-page*  – returns results for all domain’s URLs that start with the specified string

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`target`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#target)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:41523

direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://www.google.co.uk/search?q=%20rank%20tracker%20api&hl=en&gl=GB&uule=w+CAIQIFISCXXeIa8LoNhHEZkq1d1aOpZS

#### Implementation of

[`ISerpGoogleOrganicLiveRegularRequestInfo`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md).[`url`](../interfaces/ISerpGoogleOrganicLiveRegularRequestInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:41647

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:41679

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleOrganicLiveRegularRequestInfo`

Defined in: main.ts:41672

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleOrganicLiveRegularRequestInfo`
