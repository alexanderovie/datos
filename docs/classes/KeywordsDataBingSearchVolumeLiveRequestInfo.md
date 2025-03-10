[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeLiveRequestInfo

# Class: KeywordsDataBingSearchVolumeLiveRequestInfo

Defined in: main.ts:148891

## Implements

- [`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeLiveRequestInfo()

> **new KeywordsDataBingSearchVolumeLiveRequestInfo**(`data`?): [`KeywordsDataBingSearchVolumeLiveRequestInfo`](KeywordsDataBingSearchVolumeLiveRequestInfo.md)

Defined in: main.ts:148978

#### Parameters

##### data?

[`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeLiveRequestInfo`](KeywordsDataBingSearchVolumeLiveRequestInfo.md)

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:148952

starting date of the time range
optional field
if you don’t specify this field, data will be provided for the last 12 months
minimum value: two years back from today’s date
date format: "yyyy-mm-dd"
example:
"2020-01-01"
Note: we do not recommend using a custom time range for the past year’s dates

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[`date_from`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#date_from)

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:148963

ending date of the time range
optional field
if you don’t specify this field, data will be provided for the last 12 months;
minimum value: two years back from today’s date;
maximum value: one month from today’s date;
note: we do not recommend using a custom time range for the past year’s dates;
date format: "yyyy-mm-dd"
example:
"2020-03-15"
Note: we do not recommend using a custom time range for the past year’s dates

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[`date_to`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#date_to)

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:148938

device type
optional field
specify this field if you want to get the data for a particular device type;
possible values: all, mobile, desktop, tablet
default value: all

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[`device`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#device)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:148898

keywords
required field
The maximum number of keywords you can specify: 1000
The maximum number of characters for each keyword: 100
the specified keywords will be converted to lowercase, data will be provided in a separate array
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[`keywords`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#keywords)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:148932

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
supported languages:
en, fr, de

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[`language_code`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:148926

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
supported languages:
English, French, German

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[`language_name`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:148912

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
2840

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:148920

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the data will be provided for the country the specified coordinates belong to
example:
52.6178549,-155.352142

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[`location_coordinate`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:148905

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
London,England,United Kingdom

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#location_name)

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:148968

Bing search partners type
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Bing, Yahoo, AOL and partner sites that host Bing, AOL, and Yahoo search.
default value: false – results are returned for Bing, AOL, and Yahoo search networks

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[`search_partners`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#search_partners)

***

### sort\_by?

> `optional` **sort\_by**: `string`

Defined in: main.ts:148943

results sorting parameters
optional field
Use these parameters to sort the results by search_volume, cpc, competition or relevance in the descending order
default value: relevance

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[`sort_by`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#sort_by)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:148974

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataBingSearchVolumeLiveRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md).[`tag`](../interfaces/IKeywordsDataBingSearchVolumeLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:148987

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:149019

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingSearchVolumeLiveRequestInfo`](KeywordsDataBingSearchVolumeLiveRequestInfo.md)

Defined in: main.ts:149012

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingSearchVolumeLiveRequestInfo`](KeywordsDataBingSearchVolumeLiveRequestInfo.md)
