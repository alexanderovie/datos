[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceExploreLiveHtmlRequestInfo

# Class: SerpGoogleFinanceExploreLiveHtmlRequestInfo

Defined in: main.ts:89515

## Implements

- [`ISerpGoogleFinanceExploreLiveHtmlRequestInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleFinanceExploreLiveHtmlRequestInfo()

> **new SerpGoogleFinanceExploreLiveHtmlRequestInfo**(`data`?): [`SerpGoogleFinanceExploreLiveHtmlRequestInfo`](SerpGoogleFinanceExploreLiveHtmlRequestInfo.md)

Defined in: main.ts:89566

#### Parameters

##### data?

[`ISerpGoogleFinanceExploreLiveHtmlRequestInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlRequestInfo.md)

#### Returns

[`SerpGoogleFinanceExploreLiveHtmlRequestInfo`](SerpGoogleFinanceExploreLiveHtmlRequestInfo.md)

## Properties

### device?

> `optional` **device**: `string`

Defined in: main.ts:89547

device type
optional field
possible value: desktop

#### Implementation of

[`ISerpGoogleFinanceExploreLiveHtmlRequestInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlRequestInfo.md).[`device`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlRequestInfo.md#device)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:89543

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Implementation of

[`ISerpGoogleFinanceExploreLiveHtmlRequestInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:89536

full name of search engine language
required field if you don’t specify language_code 
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[`ISerpGoogleFinanceExploreLiveHtmlRequestInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:89529

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/serp/google/locations
example:
2840

#### Implementation of

[`ISerpGoogleFinanceExploreLiveHtmlRequestInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:89522

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to  https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpGoogleFinanceExploreLiveHtmlRequestInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlRequestInfo.md#location_name)

***

### news\_type?

> `optional` **news\_type**: `string`

Defined in: main.ts:89556

financial news filters
optional field
possible values: top_stories, local_market, world_markets
default value: top_stories

#### Implementation of

[`ISerpGoogleFinanceExploreLiveHtmlRequestInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlRequestInfo.md).[`news_type`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlRequestInfo.md#news_type)

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:89551

device operating system
optional field
possible values: windows

#### Implementation of

[`ISerpGoogleFinanceExploreLiveHtmlRequestInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlRequestInfo.md).[`os`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlRequestInfo.md#os)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:89562

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleFinanceExploreLiveHtmlRequestInfo`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlRequestInfo.md).[`tag`](../interfaces/ISerpGoogleFinanceExploreLiveHtmlRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:89575

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:89599

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleFinanceExploreLiveHtmlRequestInfo`](SerpGoogleFinanceExploreLiveHtmlRequestInfo.md)

Defined in: main.ts:89592

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleFinanceExploreLiveHtmlRequestInfo`](SerpGoogleFinanceExploreLiveHtmlRequestInfo.md)
