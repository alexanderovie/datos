[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpNaverOrganicTaskPostRequestInfo

# Class: SerpNaverOrganicTaskPostRequestInfo

Defined in: main.ts:83498

## Implements

- [`ISerpNaverOrganicTaskPostRequestInfo`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpNaverOrganicTaskPostRequestInfo**(`data`?): `SerpNaverOrganicTaskPostRequestInfo`

Defined in: main.ts:83598

#### Parameters

##### data?

[`ISerpNaverOrganicTaskPostRequestInfo`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md)

#### Returns

`SerpNaverOrganicTaskPostRequestInfo`

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:83530

parsing depth
optional field
number of results in SERP
default value: 100
max value: 700
Note: your account will be billed per each SERP containing up to 100 results;
thus, setting a depth above 100 may result in additional charges if the search engine returns more than 100 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance

#### Implementation of

[`ISerpNaverOrganicTaskPostRequestInfo`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md).[`depth`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md#depth)

***

### device?

> `optional` **device**: `string`

Defined in: main.ts:83542

device type
optional field
can take the values:desktop, mobile
default value: desktop

#### Implementation of

[`ISerpNaverOrganicTaskPostRequestInfo`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md).[`device`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md#device)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:83506

keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`ISerpNaverOrganicTaskPostRequestInfo`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md).[`keyword`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md#keyword)

***

### max\_crawl\_pages?

> `optional` **max\_crawl\_pages**: `number`

Defined in: main.ts:83537

page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center

#### Implementation of

[`ISerpNaverOrganicTaskPostRequestInfo`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md).[`max_crawl_pages`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md#max_crawl_pages)

***

### os?

> `optional` **os**: `string`

Defined in: main.ts:83549

device operating system
optional field
if you specify desktop in the device field, choose from the following values: windows, macos
default value: windows
if you specify mobile in the device field, choose from the following values: android, ios
default value: android

#### Implementation of

[`ISerpNaverOrganicTaskPostRequestInfo`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md).[`os`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md#os)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:83594

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

[`ISerpNaverOrganicTaskPostRequestInfo`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md).[`pingback_url`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md#pingback_url)

***

### postback\_data?

> `optional` **postback\_data**: `string`

Defined in: main.ts:83583

postback_url datatype
required field if you specify postback_url
corresponds to the function you used for setting a task
possible values:
regular, advanced, html

#### Implementation of

[`ISerpNaverOrganicTaskPostRequestInfo`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md).[`postback_data`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md#postback_data)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:83577

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

[`ISerpNaverOrganicTaskPostRequestInfo`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md).[`postback_url`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md#postback_url)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:83521

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`ISerpNaverOrganicTaskPostRequestInfo`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md).[`priority`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md#priority)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:83556

search engine domain
optional field
we choose the relevant search engine domain automatically
however, you can set a custom search engine domain in this field
example:
search.naver.com

#### Implementation of

[`ISerpNaverOrganicTaskPostRequestInfo`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md).[`se_domain`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md#se_domain)

***

### search\_param?

> `optional` **search\_param**: `string`

Defined in: main.ts:83560

additional parameters of the search query
optional field
get the list of available parameters and additional details here

#### Implementation of

[`ISerpNaverOrganicTaskPostRequestInfo`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md).[`search_param`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md#search_param)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:83566

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`ISerpNaverOrganicTaskPostRequestInfo`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md).[`tag`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md#tag)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:83513

direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields
in most cases, we wouldn’t recommend using this method;
example:
https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=iphone

#### Implementation of

[`ISerpNaverOrganicTaskPostRequestInfo`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md).[`url`](../interfaces/ISerpNaverOrganicTaskPostRequestInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:83607

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:83636

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpNaverOrganicTaskPostRequestInfo`

Defined in: main.ts:83629

#### Parameters

##### data

`any`

#### Returns

`SerpNaverOrganicTaskPostRequestInfo`
