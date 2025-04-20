[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo

# Class: SerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo

Defined in: main.ts:95262

## Implements

- [`ISerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo**(`data?`): `SerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo`

Defined in: main.ts:95314

#### Parameters

##### data?

[`ISerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo.md)

#### Returns

`SerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo`

## Properties

### category?

> `optional` **category**: `string`

Defined in: main.ts:95304

category of financial instruments to search for
optional field
possible values: all, stock, index, mutual_fund, currency, futures
default value: all

#### Implementation of

[`ISerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo.md).[`category`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo.md#category)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:95271

company or financial instrument name
required field
in this field, you can enter the name of a company or financial instrument to search for relevant tickers;
you can specify up to 700 characters in the keyword field;
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`ISerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo.md).[`keyword`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:95299

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Implementation of

[`ISerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:95292

full name of search engine language
required field if you don’t specify language_code 
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[`ISerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:95285

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/serp/google/locations
example:
2840

#### Implementation of

[`ISerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:95278

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to  https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo.md#location_name)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:95310

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo.md).[`tag`](../interfaces/ISerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:95323

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:95346

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo`

Defined in: main.ts:95339

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo`
