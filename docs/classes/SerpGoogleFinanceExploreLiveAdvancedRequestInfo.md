[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceExploreLiveAdvancedRequestInfo

# Class: SerpGoogleFinanceExploreLiveAdvancedRequestInfo

Defined in: main.ts:89518

## Implements

- [`ISerpGoogleFinanceExploreLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceExploreLiveAdvancedRequestInfo**(`data`?): `SerpGoogleFinanceExploreLiveAdvancedRequestInfo`

Defined in: main.ts:89570

#### Parameters

##### data?

[`ISerpGoogleFinanceExploreLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedRequestInfo.md)

#### Returns

`SerpGoogleFinanceExploreLiveAdvancedRequestInfo`

## Properties

### device?

> `optional` **device**: `string`

Defined in: main.ts:89550

device type
optional field
possible value: desktop

#### Implementation of

[`ISerpGoogleFinanceExploreLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedRequestInfo.md).[`device`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedRequestInfo.md#device)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:89546

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Implementation of

[`ISerpGoogleFinanceExploreLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:89539

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[`ISerpGoogleFinanceExploreLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:89532

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/serp/google/locations
example:
2840

#### Implementation of

[`ISerpGoogleFinanceExploreLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:89525

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpGoogleFinanceExploreLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedRequestInfo.md#location_name)

***

### news\_type?

> `optional` **news\_type**: `string`

Defined in: main.ts:89560

financial news filters
optional field
possible values: top_stories, local_market, world_markets
default value: top_stories
Note: if you specify local_market or world_markets, the charge per task will be multiplied by 2

#### Implementation of

[`ISerpGoogleFinanceExploreLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedRequestInfo.md).[`news_type`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedRequestInfo.md#news_type)

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:89554

device operating system
optional field
possible values: windows

#### Implementation of

[`ISerpGoogleFinanceExploreLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedRequestInfo.md).[`os`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedRequestInfo.md#os)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:89566

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleFinanceExploreLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedRequestInfo.md).[`tag`](../interfaces/ISerpGoogleFinanceExploreLiveAdvancedRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:89579

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:89603

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceExploreLiveAdvancedRequestInfo`

Defined in: main.ts:89596

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceExploreLiveAdvancedRequestInfo`
