[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo

# Class: DataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo

Defined in: main.ts:122748

## Implements

- [`IDataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo**(`data?`): `DataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo`

Defined in: main.ts:122800

#### Parameters

##### data?

[`IDataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo.md)

#### Returns

`DataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo`

## Properties

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:122758

keywords
required field
The maximum number of keywords you can specify: 700
The maximum number of characters for each keyword: 80
The maximum number of words for each keyword phrase: 10
the specified keywords will be converted to lowercase format, data will be provided in a separate array
note that if some of the keywords specified in this array are omitted in the results you receive, then our database doesn’t contain such keywords and cannot return data on them
you will not be charged for the keywords omitted in the results
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IDataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo.md).[`keywords`](../interfaces/IDataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo.md#keywords)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:122790

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[`IDataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:122782

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[`IDataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:122774

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:122766

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Implementation of

[`IDataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo.md#location_name)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:122796

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:122809

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:122835

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo`

Defined in: main.ts:122828

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsGoogleHistoricalKeywordDataLiveRequestInfo`
