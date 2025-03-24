[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPagePagesRequestInfo

# Class: OnPagePagesRequestInfo

Defined in: main.ts:177780

## Implements

- [`IOnPagePagesRequestInfo`](../interfaces/IOnPagePagesRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OnPagePagesRequestInfo**(`data`?): `OnPagePagesRequestInfo`

Defined in: main.ts:177831

#### Parameters

##### data?

[`IOnPagePagesRequestInfo`](../interfaces/IOnPagePagesRequestInfo.md)

#### Returns

`OnPagePagesRequestInfo`

## Properties

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:177807

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["meta.external_links_count","<=",50]["url","like","https://dataforseo.com/apis/dataforseo-labs-api"][["checks.high_waiting_time","=",false],
"and",["resource_type","=","html"]][["page_timing.duration_time","<",100],"and",[["checks.large_page_size","=",false],"or",["checks.high_waiting_time","=",false]]]The full list of possible filters is available by this link.

#### Implementation of

[`IOnPagePagesRequestInfo`](../interfaces/IOnPagePagesRequestInfo.md).[`filters`](../interfaces/IOnPagePagesRequestInfo.md#filters)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:177786

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[`IOnPagePagesRequestInfo`](../interfaces/IOnPagePagesRequestInfo.md).[`id`](../interfaces/IOnPagePagesRequestInfo.md#id)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:177791

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IOnPagePagesRequestInfo`](../interfaces/IOnPagePagesRequestInfo.md).[`limit`](../interfaces/IOnPagePagesRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:177796

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

#### Implementation of

[`IOnPagePagesRequestInfo`](../interfaces/IOnPagePagesRequestInfo.md).[`offset`](../interfaces/IOnPagePagesRequestInfo.md#offset)

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:177821

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
["meta.external_links_count,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["page_timing.dom_complete,asc","size,desc"]

#### Implementation of

[`IOnPagePagesRequestInfo`](../interfaces/IOnPagePagesRequestInfo.md).[`order_by`](../interfaces/IOnPagePagesRequestInfo.md#order_by)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:177827

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IOnPagePagesRequestInfo`](../interfaces/IOnPagePagesRequestInfo.md).[`tag`](../interfaces/IOnPagePagesRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:177840

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:177870

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OnPagePagesRequestInfo`

Defined in: main.ts:177863

#### Parameters

##### data

`any`

#### Returns

`OnPagePagesRequestInfo`
