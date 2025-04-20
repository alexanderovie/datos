[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceExploreTaskPostRequestInfo

# Class: SerpGoogleFinanceExploreTaskPostRequestInfo

Defined in: main.ts:87332

## Implements

- [`ISerpGoogleFinanceExploreTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceExploreTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceExploreTaskPostRequestInfo**(`data?`): `SerpGoogleFinanceExploreTaskPostRequestInfo`

Defined in: main.ts:87419

#### Parameters

##### data?

[`ISerpGoogleFinanceExploreTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceExploreTaskPostRequestInfo.md)

#### Returns

`SerpGoogleFinanceExploreTaskPostRequestInfo`

## Properties

### device?

> `optional` **device**: `string`

Defined in: main.ts:87372

device type
optional field
possible value: desktop

#### Implementation of

[`ISerpGoogleFinanceExploreTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceExploreTaskPostRequestInfo.md).[`device`](../interfaces/ISerpGoogleFinanceExploreTaskPostRequestInfo.md#device)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:87360

search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en

#### Implementation of

[`ISerpGoogleFinanceExploreTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceExploreTaskPostRequestInfo.md).[`language_code`](../interfaces/ISerpGoogleFinanceExploreTaskPostRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:87353

full name of search engine language
required field if you don’t specify language_code 
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English

#### Implementation of

[`ISerpGoogleFinanceExploreTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceExploreTaskPostRequestInfo.md).[`language_name`](../interfaces/ISerpGoogleFinanceExploreTaskPostRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:87346

search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/serp/google/locations
example:
2840

#### Implementation of

[`ISerpGoogleFinanceExploreTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceExploreTaskPostRequestInfo.md).[`location_code`](../interfaces/ISerpGoogleFinanceExploreTaskPostRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:87339

full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to  https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom

#### Implementation of

[`ISerpGoogleFinanceExploreTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceExploreTaskPostRequestInfo.md).[`location_name`](../interfaces/ISerpGoogleFinanceExploreTaskPostRequestInfo.md#location_name)

***

### news\_type?

> `optional` **news\_type**: `string`

Defined in: main.ts:87382

financial news filters
optional field
possible values: top_stories, local_market, world_markets
default value: top_stories
Note: if you specify local_market or world_markets, the charge per task will be multiplied by 2

#### Implementation of

[`ISerpGoogleFinanceExploreTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceExploreTaskPostRequestInfo.md).[`news_type`](../interfaces/ISerpGoogleFinanceExploreTaskPostRequestInfo.md#news_type)

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:87376

device operating system
optional field
possible values: windows

#### Implementation of

[`ISerpGoogleFinanceExploreTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceExploreTaskPostRequestInfo.md).[`os`](../interfaces/ISerpGoogleFinanceExploreTaskPostRequestInfo.md#os)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:87415

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

[`ISerpGoogleFinanceExploreTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceExploreTaskPostRequestInfo.md).[`pingback_url`](../interfaces/ISerpGoogleFinanceExploreTaskPostRequestInfo.md#pingback_url)

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:87404

postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
possible values:: advanced, html

#### Implementation of

[`ISerpGoogleFinanceExploreTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceExploreTaskPostRequestInfo.md).[`postback_data`](../interfaces/ISerpGoogleFinanceExploreTaskPostRequestInfo.md#postback_data)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:87399

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

[`ISerpGoogleFinanceExploreTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceExploreTaskPostRequestInfo.md).[`postback_url`](../interfaces/ISerpGoogleFinanceExploreTaskPostRequestInfo.md#postback_url)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:87368

task priority
optional field
can take the following values:
1 – normal execution priority (set by default);
2 – high execution priority
You will be additionally charged for the tasks with high execution priority;
The cost can be calculated on the Pricing page

#### Implementation of

[`ISerpGoogleFinanceExploreTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceExploreTaskPostRequestInfo.md).[`priority`](../interfaces/ISerpGoogleFinanceExploreTaskPostRequestInfo.md#priority)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:87388

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpGoogleFinanceExploreTaskPostRequestInfo`](../interfaces/ISerpGoogleFinanceExploreTaskPostRequestInfo.md).[`tag`](../interfaces/ISerpGoogleFinanceExploreTaskPostRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:87428

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:87456

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceExploreTaskPostRequestInfo`

Defined in: main.ts:87449

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceExploreTaskPostRequestInfo`
