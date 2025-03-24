[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceQuoteTaskPostRequestInfo

# Class: SerpGoogleFinanceQuoteTaskPostRequestInfo

Defined in: main.ts:92142

## Implements

- [`ISerpGoogleFinanceQuoteTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceQuoteTaskPostRequestInfo**(`data`?): `SerpGoogleFinanceQuoteTaskPostRequestInfo`

Defined in: main.ts:92238

#### Parameters

##### data?

[`ISerpGoogleFinanceQuoteTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md)

#### Returns

`SerpGoogleFinanceQuoteTaskPostRequestInfo`

## Properties

### device?

> `optional` **device**: `string`

Defined in: main.ts:92191

device type
optional field
possible value: desktop

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md).[`device`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md#device)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:92151

ticker or stock symbol
required field
in this field you can pass the ticker symbol of publicly traded shares of a particular stock or security on a particular stock exchange;
you can specify up to 700 characters in the keyword field;
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md).[`keyword`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:92179

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:92172

full name of search engine language
required field if you don’t specify language_code 
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:92165

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/serp/google/locations
example:
2840

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:92158

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to  https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md#location_name)

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:92195

device operating system
optional field
possible values: windows

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md).[`os`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md#os)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:92234

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md).[`pingback_url`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md#pingback_url)

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:92223

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:: advanced, html

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md).[`postback_data`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md#postback_data)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:92218

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md).[`postback_url`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md#postback_url)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:92187

task priority
optional field
can take the following values:
1 – normal execution priority (set by default);
2 – high execution priority
You will be additionally charged for the tasks with high execution priority;
The cost can be calculated on the Pricing page

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md).[`priority`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md#priority)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:92207

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md).[`tag`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md#tag)

***

### window?

> `optional` **window**: `string`

Defined in: main.ts:92201

time window for google_finance_quote graph
optional field
possible values: 1D, 5D, 1M, 6M, YTD, 1Y, 5Y, MAX
default value: 1D
Note: if you specify a value that is different from 1D, the charge per task will be multiplied by 2

#### Implementation of

[`ISerpGoogleFinanceQuoteTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md).[`window`](../interfaces/ISerpGoogleFinanceQuoteTaskPostRequestInfo.md#window)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:92247

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:92276

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceQuoteTaskPostRequestInfo`

Defined in: main.ts:92269

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceQuoteTaskPostRequestInfo`
