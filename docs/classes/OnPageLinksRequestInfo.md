[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageLinksRequestInfo

# Class: OnPageLinksRequestInfo

Defined in: main.ts:178807

## Implements

- [`IOnPageLinksRequestInfo`](../interfaces/IOnPageLinksRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageLinksRequestInfo()

> **new OnPageLinksRequestInfo**(`data`?): [`OnPageLinksRequestInfo`](OnPageLinksRequestInfo.md)

Defined in: main.ts:178860

#### Parameters

##### data?

[`IOnPageLinksRequestInfo`](../interfaces/IOnPageLinksRequestInfo.md)

#### Returns

[`OnPageLinksRequestInfo`](OnPageLinksRequestInfo.md)

## Properties

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:178850

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["direction","=","external"]
[["domain_to","<>","example.com"],
"and",
["link_from","not_like","%example.com/blog%"]]
[["direction","=","external"],
"and",
[["link_from","like","%example.com/blog%"],"or",["link_from","like","%example.com/help%"]]]
The full list of possible filters is available by this link.

#### Implementation of

[`IOnPageLinksRequestInfo`](../interfaces/IOnPageLinksRequestInfo.md).[`filters`](../interfaces/IOnPageLinksRequestInfo.md#filters)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:178813

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[`IOnPageLinksRequestInfo`](../interfaces/IOnPageLinksRequestInfo.md).[`id`](../interfaces/IOnPageLinksRequestInfo.md#id)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:178828

the maximum number of returned links
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IOnPageLinksRequestInfo`](../interfaces/IOnPageLinksRequestInfo.md).[`limit`](../interfaces/IOnPageLinksRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:178833

offset in the results array of returned links
optional field
default value: 0
if you specify the 10 value, the first ten links in the results array will be omitted and the data will be provided for the successive links

#### Implementation of

[`IOnPageLinksRequestInfo`](../interfaces/IOnPageLinksRequestInfo.md).[`offset`](../interfaces/IOnPageLinksRequestInfo.md#offset)

***

### page\_from?

> `optional` **page\_from**: `string`

Defined in: main.ts:178818

relative page URL
optional field
if you use this field, the API response will contain only links from the specified page
note that in this field you can specify relative URLs only

#### Implementation of

[`IOnPageLinksRequestInfo`](../interfaces/IOnPageLinksRequestInfo.md).[`page_from`](../interfaces/IOnPageLinksRequestInfo.md#page_from)

***

### page\_to?

> `optional` **page\_to**: `string`

Defined in: main.ts:178823

relative page URL
optional field
if you use this field, the API response will contain only internal links pointing to the specified page
note that in this field you can specify relative URLs only

#### Implementation of

[`IOnPageLinksRequestInfo`](../interfaces/IOnPageLinksRequestInfo.md).[`page_to`](../interfaces/IOnPageLinksRequestInfo.md#page_to)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:178856

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IOnPageLinksRequestInfo`](../interfaces/IOnPageLinksRequestInfo.md).[`tag`](../interfaces/IOnPageLinksRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:178869

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:178896

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageLinksRequestInfo`](OnPageLinksRequestInfo.md)

Defined in: main.ts:178889

#### Parameters

##### data

`any`

#### Returns

[`OnPageLinksRequestInfo`](OnPageLinksRequestInfo.md)
