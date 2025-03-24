[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceQuoteLiveAdvancedRequestInfo

# Class: SerpGoogleFinanceQuoteLiveAdvancedRequestInfo

Defined in: main.ts:93264

## Implements

- [`ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceQuoteLiveAdvancedRequestInfo**(`data`?): `SerpGoogleFinanceQuoteLiveAdvancedRequestInfo`

Defined in: main.ts:93325

#### Parameters

##### data?

[`ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo.md)

#### Returns

`SerpGoogleFinanceQuoteLiveAdvancedRequestInfo`

## Properties

### device?

> `optional` **device**: `string`

Defined in: main.ts:93305

device type
optional field
possible value: desktop

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo.md).[`device`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo.md#device)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:93273

ticker or stock symbol
required field
in this field you can pass the ticker symbol of publicly traded shares of a particular stock or security on a particular stock exchange;
you can specify up to 700 characters in the keyword field;
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo.md).[`keyword`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:93301

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:93294

full name of search engine language
required field if you don’t specify language_code 
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:93287

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/serp/google/locations
example:
2840

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:93280

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to  https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo.md#location_name)

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:93309

device operating system
optional field
possible values: windows

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo.md).[`os`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo.md#os)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:93321

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo.md).[`tag`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo.md#tag)

***

### window?

> `optional` **window**: `string`

Defined in: main.ts:93315

time window for google_finance_quote graph
optional field
possible values: 1D, 5D, 1M, 6M, YTD, 1Y, 5Y, MAX
default value: 1D
Note: if you specify a value that is different from 1D, the charge per task will be multiplied by 2

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo.md).[`window`](../interfaces/ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo.md#window)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:93334

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:93359

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceQuoteLiveAdvancedRequestInfo`

Defined in: main.ts:93352

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceQuoteLiveAdvancedRequestInfo`
