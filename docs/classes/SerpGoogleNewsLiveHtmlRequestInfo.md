[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleNewsLiveHtmlRequestInfo

# Class: SerpGoogleNewsLiveHtmlRequestInfo

Defined in: main.ts:50361

## Implements

- [`ISerpGoogleNewsLiveHtmlRequestInfo`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleNewsLiveHtmlRequestInfo**(`data?`): `SerpGoogleNewsLiveHtmlRequestInfo`

Defined in: main.ts:50458

#### Parameters

##### data?

[`ISerpGoogleNewsLiveHtmlRequestInfo`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md)

#### Returns

`SerpGoogleNewsLiveHtmlRequestInfo`

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:50437

parsing depth
optional field
number of results in SERP
default value: 100
max value: 700
Note: your account will be billed per each SERP containing up to 100 results;
thus, setting a depth above 100 may result in additional charges if the search engine returns more than 100 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`ISerpGoogleNewsLiveHtmlRequestInfo`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md).[`depth`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md#depth)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:50377

keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”;
if this field contains such parameters as ‘allinanchor:’, ‘allintext:’, ‘allintitle:’, ‘allinurl:’, ‘define:’, ‘filetype:’, ‘id:’, ‘inanchor:’, ‘info:’, ‘intext:’, ‘intitle:’, ‘inurl:’, ‘link:’, ‘related:’, ‘site:’, the charge per task will be multiplied by 5
Note: queries containing the ‘cache:’ parameter are not supported and will return a validation error
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`ISerpGoogleNewsLiveHtmlRequestInfo`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md).[`keyword`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:50415

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available locations of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Implementation of

[`ISerpGoogleNewsLiveHtmlRequestInfo`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:50408

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available locations of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[`ISerpGoogleNewsLiveHtmlRequestInfo`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:50391

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
2840

#### Implementation of

[`ISerpGoogleNewsLiveHtmlRequestInfo`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:50401

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

[`ISerpGoogleNewsLiveHtmlRequestInfo`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md).[`location_coordinate`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:50384

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpGoogleNewsLiveHtmlRequestInfo`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md#location_name)

***

### max\_crawl\_pages?

> `optional` **max\_crawl\_pages**: `number`

Defined in: main.ts:50444

page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Implementation of

[`ISerpGoogleNewsLiveHtmlRequestInfo`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md).[`max_crawl_pages`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md#max_crawl_pages)

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:50421

device operating system
optional field
note that this API provides results for desktop only
choose from the following values: windows, macos
default value: windows

#### Implementation of

[`ISerpGoogleNewsLiveHtmlRequestInfo`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md).[`os`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md#os)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:50428

search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc.

#### Implementation of

[`ISerpGoogleNewsLiveHtmlRequestInfo`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md).[`se_domain`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md#se_domain)

***

### search\_param?

> `optional` **search\_param**: `string`

Defined in: main.ts:50448

additional parameters of the search query
optional field
get the list of available parameters and additional details here

#### Implementation of

[`ISerpGoogleNewsLiveHtmlRequestInfo`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md).[`search_param`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md#search_param)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:50454

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleNewsLiveHtmlRequestInfo`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md).[`tag`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md#tag)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:50367

direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://www.google.co.uk/search?q=%20rank%20tracker%20api&hl=en&gl=GB&uule=w+CAIQIFISCXXeIa8LoNhHEZkq1d1aOpZS

#### Implementation of

[`ISerpGoogleNewsLiveHtmlRequestInfo`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md).[`url`](../interfaces/ISerpGoogleNewsLiveHtmlRequestInfo.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:50467

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:50496

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleNewsLiveHtmlRequestInfo`

Defined in: main.ts:50489

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleNewsLiveHtmlRequestInfo`
