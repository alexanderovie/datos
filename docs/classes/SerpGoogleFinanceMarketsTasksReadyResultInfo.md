[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceMarketsTasksReadyResultInfo

# Class: SerpGoogleFinanceMarketsTasksReadyResultInfo

Defined in: main.ts:90762

## Implements

- [`ISerpGoogleFinanceMarketsTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceMarketsTasksReadyResultInfo**(`data?`): `SerpGoogleFinanceMarketsTasksReadyResultInfo`

Defined in: main.ts:90787

#### Parameters

##### data?

[`ISerpGoogleFinanceMarketsTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTasksReadyResultInfo.md)

#### Returns

`SerpGoogleFinanceMarketsTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:90772

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleFinanceMarketsTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleFinanceMarketsTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:90780

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleFinanceMarketsTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleFinanceMarketsTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:90783

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleFinanceMarketsTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleFinanceMarketsTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:90777

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleFinanceMarketsTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleFinanceMarketsTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:90765

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleFinanceMarketsTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleFinanceMarketsTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:90767

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleFinanceMarketsTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleFinanceMarketsTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:90770

type of search engine
example: finance_markets

#### Implementation of

[`ISerpGoogleFinanceMarketsTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleFinanceMarketsTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:90774

user-defined task identifier

#### Implementation of

[`ISerpGoogleFinanceMarketsTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceMarketsTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleFinanceMarketsTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:90796

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:90820

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceMarketsTasksReadyResultInfo`

Defined in: main.ts:90813

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceMarketsTasksReadyResultInfo`
