[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordsForSiteLiveRequestInfo

# Class: KeywordsDataBingKeywordsForSiteLiveRequestInfo

Defined in: main.ts:154346

## Implements

- [`IKeywordsDataBingKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordsDataBingKeywordsForSiteLiveRequestInfo**(`data?`): `KeywordsDataBingKeywordsForSiteLiveRequestInfo`

Defined in: main.ts:154434

#### Parameters

##### data?

[`IKeywordsDataBingKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md)

#### Returns

`KeywordsDataBingKeywordsForSiteLiveRequestInfo`

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:154403

starting date of the time range
optional field
if you don’t specify this field, data will be provided for the last 12 months
date format: "yyyy-mm-dd"
example:
"2020-01-01"
Note: we do not recommend using a custom time range for the past year’s dates

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md).[`date_from`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md#date_from)

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:154414

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

[`IKeywordsDataBingKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md).[`date_to`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md#date_to)

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:154395

device type
optional field
specify this field if you want to get the data for a particular device typepossible values: all, mobile, desktop, tablet
default value: all

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md).[`device`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md#device)

***

### keywords\_negative?

> `optional` **keywords\_negative**: `string`[]

Defined in: main.ts:154390

keywords negative array
optional field
These keywords will be ignored in the results array;
You can specify a maximum of 200 terms that you want to exclude from the results;
the specified keywords will be converted to lowercase format

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md).[`keywords_negative`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md#keywords_negative)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:154384

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
supported languages:
en, fr, de

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md).[`language_code`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:154378

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
supported languages:
English, French, German

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md).[`language_name`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:154364

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
2840

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:154372

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the data will be provided for the country the specified coordinates belong to
example:
52.6178549,-155.352142

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md).[`location_coordinate`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:154357

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
London,England,United Kingdom

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md#location_name)

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:154424

Bing search partners type
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Bing, Yahoo, AOL and partner sites that host Bing, AOL, and Yahoo search.
default value: false – results are returned for Bing, AOL, and Yahoo search networks

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md).[`search_partners`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md#search_partners)

***

### sort\_by?

> `optional` **sort\_by**: `string`

Defined in: main.ts:154419

results sorting parameters
optional field
Use these parameters to sort the results by search_volume, cpc, competition or relevance in the descending order
default value: relevance

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md).[`sort_by`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md#sort_by)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:154430

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md).[`tag`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md#tag)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:154350

domain or URL
required field
the domain name or URL of the target website

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md).[`target`](../interfaces/IKeywordsDataBingKeywordsForSiteLiveRequestInfo.md#target)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:154443

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:154476

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordsDataBingKeywordsForSiteLiveRequestInfo`

Defined in: main.ts:154469

#### Parameters

##### data

`any`

#### Returns

`KeywordsDataBingKeywordsForSiteLiveRequestInfo`
