[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataTrustpilotSearchTaskPostRequestInfo

# Class: BusinessDataTrustpilotSearchTaskPostRequestInfo

Defined in: main.ts:237792

## Implements

- [`IBusinessDataTrustpilotSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataTrustpilotSearchTaskPostRequestInfo**(`data?`): `BusinessDataTrustpilotSearchTaskPostRequestInfo`

Defined in: main.ts:237848

#### Parameters

##### data?

[`IBusinessDataTrustpilotSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md)

#### Returns

`BusinessDataTrustpilotSearchTaskPostRequestInfo`

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:237816

parsing depth
optional field
number of search results to be returned from the API response
we strongly recommend setting the parsing depth in the multiples of twenty because our systems processes twenty search results in a row;
default value: 10;
maximum value: 140
Note: your account will be charged for every 10 search results returned, e.g. if you specify depth: 11, you will be charged as per 20 search results

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md).[`depth`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md#depth)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:237800

keyword
required field
the keyword you specify should indicate a business category or company name;
you can specify up to 700 characters in the keyword filed;
all %## will be decoded (plus character ‘+’ will be decoded to a space character);
if you need to use the “%” character for your keyword, please specify it as “%25”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md).[`keyword`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md#keyword)

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

Defined in: main.ts:237844

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

[`IBusinessDataTrustpilotSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md#pingback_url)

***

### postback\_url?

> `optional` **postback\_url**: `string`

Defined in: main.ts:237833

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

[`IBusinessDataTrustpilotSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md).[`postback_url`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md#postback_url)

***

### priority?

> `optional` **priority**: `number`

Defined in: main.ts:237808

task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page.

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md).[`priority`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md#priority)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:237822

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataTrustpilotSearchTaskPostRequestInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md).[`tag`](../interfaces/IBusinessDataTrustpilotSearchTaskPostRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:237857

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:237879

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataTrustpilotSearchTaskPostRequestInfo`

Defined in: main.ts:237872

#### Parameters

##### data

`any`

#### Returns

`BusinessDataTrustpilotSearchTaskPostRequestInfo`
