[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantTasksReadyResultInfo

# Class: MerchantTasksReadyResultInfo

Defined in: main.ts:197542

## Implements

- [`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MerchantTasksReadyResultInfo**(`data`?): `MerchantTasksReadyResultInfo`

Defined in: main.ts:197561

#### Parameters

##### data?

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md)

#### Returns

`MerchantTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:197551

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:197555

URL for collecting the results of the Amazon Reviews Advanced task

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:197557

URL for collecting the results of the Amazon Reviews HTML task

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:197545

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:197547

search engine specified when setting the task

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:197549

type of search engine

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:197553

user-defined task identifier

#### Implementation of

[`IMerchantTasksReadyResultInfo`](../interfaces/IMerchantTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:197570

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:197593

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `MerchantTasksReadyResultInfo`

Defined in: main.ts:197586

#### Parameters

##### data

`any`

#### Returns

`MerchantTasksReadyResultInfo`
