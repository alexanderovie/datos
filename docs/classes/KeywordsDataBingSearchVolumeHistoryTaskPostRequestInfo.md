[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo

# Class: KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo

Defined in: main.ts:158026

## Implements

- [`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo**(`data?`): `KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`

Defined in: main.ts:158138

#### Parameters

##### data?

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md)

#### Returns

`KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:158093

starting date of the time range
optional field
minimum value: two years back from today’s date
maximum value: one day from today’s date
date format: "yyyy-mm-dd"
example:
"2020-01-01"
Note: we do not recommend using a custom time range
Note 2: if date_from and date_to parameters are not specified, the data will be returned for the past 24 months
if you specify the period parameter:
with value weekly, you will get results for the past 15 weeks
with value daily, you will get results for the past 45 days

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md).[`date_from`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md#date_from)

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:158106

ending date of the time range
optional field
minimum value: two years back from today’s date;
maximum value: one day from today’s date;
date format: "yyyy-mm-dd"
example:
"2020-03-15"
Note: we do not recommend using a custom time range
Note 2: if date_from and date_to parameters are not specified, the data will be returned for the past 24 months
if you specify the period parameter:
with value weekly, you will get results for the past 15 weeks
with value daily, you will get results for the past 45 days

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md).[`date_to`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md#date_to)

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:158071

device type
optional field
specify this field if you want to get the data for a particular device type
possible values: mobile, desktop, tablet, non_smartphones
default value:  mobile, desktop, tablet, non_smartphones

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md).[`device`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md#device)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:158033

keywords
required field
The maximum number of keywords you can specify: 1000
The maximum number of characters for each keyword: 100
the specified keywords will be converted to lowercase, data will be provided in a separate array
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md).[`keywords`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md#keywords)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:158065

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engines with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/search_volume_history/locations_and_languages

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md).[`language_code`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:158060

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engines with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/search_volume_history/locations_and_languages

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md).[`language_name`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:158047

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/search_volume_history/locations_and_languages
example:
2840

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md#location_code)

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

Defined in: main.ts:158055

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the data will be provided for the country the specified coordinates belong to
example:
52.6178549,-155.352142

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md#location_coordinate)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:158040

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/search_volume_history/locations_and_languages
example:
London,England,United Kingdom

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md#location_name)

***

### period?

> `optional` **period**: `string`

Defined in: main.ts:158080

aggregates the returned data to a certain time period
optional field
specify this field if you want to get the data in monthly, weekly or daily format
possible values: monthly, weekly, daily
monthly – returns data up to past 24 months
weekly – returns data up to past 15 weeks
daily – returns data up to past 45 days
default value:  monthly

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md).[`period`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md#period)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:158128

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md#pingback_url)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:158117

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md).[`postback_url`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md#postback_url)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:158134

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md).[`tag`](../interfaces/IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:158147

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:158180

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`

Defined in: main.ts:158173

#### Parameters

##### data

`any`

#### Returns

`KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`
