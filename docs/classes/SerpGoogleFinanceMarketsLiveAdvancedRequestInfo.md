[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceMarketsLiveAdvancedRequestInfo

# Class: SerpGoogleFinanceMarketsLiveAdvancedRequestInfo

Defined in: main.ts:91460

## Implements

- [`ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceMarketsLiveAdvancedRequestInfo**(`data?`): `SerpGoogleFinanceMarketsLiveAdvancedRequestInfo`

Defined in: main.ts:91511

#### Parameters

##### data?

[`ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo.md)

#### Returns

`SerpGoogleFinanceMarketsLiveAdvancedRequestInfo`

## Properties

### device?

> `optional` **device**: `string`

Defined in: main.ts:91492

device type
optional field
possible value: desktop

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo.md).[`device`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo.md#device)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:91488

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:91481

full name of search engine language
required field if you don’t specify language_code 
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:91474

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/serp/google/locations
example:
2840

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:91467

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to  https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo.md#location_name)

***

### market\_type?

> `optional` **market\_type**: `string`

Defined in: main.ts:91501

type of google finance market
optional field
possible values: most-active, indexes, indexes/americas, indexes/europe-middle-east-africa, indexes/asia-pacific, gainers, losers, climate-leaders, cryptocurrencies, currencies
default value: most-active

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo.md).[`market_type`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo.md#market_type)

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:91496

device operating system
optional field
possible values: windows

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo.md).[`os`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo.md#os)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:91507

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo.md).[`tag`](../interfaces/ISerpGoogleFinanceMarketsLiveAdvancedRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:91520

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:91544

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceMarketsLiveAdvancedRequestInfo`

Defined in: main.ts:91537

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceMarketsLiveAdvancedRequestInfo`
