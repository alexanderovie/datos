[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceQuoteLiveHtmlRequestInfo

# Class: SerpGoogleFinanceQuoteLiveHtmlRequestInfo

Defined in: main.ts:93706

## Implements

- [`ISerpGoogleFinanceQuoteLiveHtmlRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceQuoteLiveHtmlRequestInfo**(`data`?): `SerpGoogleFinanceQuoteLiveHtmlRequestInfo`

Defined in: main.ts:93766

#### Parameters

##### data?

[`ISerpGoogleFinanceQuoteLiveHtmlRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlRequestInfo.md)

#### Returns

`SerpGoogleFinanceQuoteLiveHtmlRequestInfo`

## Properties

### device?

> `optional` **device**: `string`

Defined in: main.ts:93747

device type
optional field
possible value: desktop

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlRequestInfo.md).[`device`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlRequestInfo.md#device)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:93715

ticker or stock symbol
required field
in this field you can pass the ticker symbol of publicly traded shares of a particular stock or security on a particular stock exchange;
you can specify up to 700 characters in the keyword field;
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlRequestInfo.md).[`keyword`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:93743

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:93736

full name of search engine language
required field if you don’t specify language_code 
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:93729

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/serp/google/locations
example:
2840

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:93722

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to  https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlRequestInfo.md#location_name)

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:93751

device operating system
optional field
possible values: windows

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlRequestInfo.md).[`os`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlRequestInfo.md#os)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:93762

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlRequestInfo.md).[`tag`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlRequestInfo.md#tag)

***

### window?

> `optional` **window**: `string`

Defined in: main.ts:93756

time window for google_finance_quote graph
optional field
possible values: 1D, 5D, 1M, 6M, YTD, 1Y, 5Y, MAX
default value: 1D

#### Implementation of

[`ISerpGoogleFinanceQuoteLiveHtmlRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlRequestInfo.md).[`window`](../interfaces/ISerpGoogleFinanceQuoteLiveHtmlRequestInfo.md#window)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:93775

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:93800

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceQuoteLiveHtmlRequestInfo`

Defined in: main.ts:93793

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceQuoteLiveHtmlRequestInfo`
