[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonAsinTasksReadyResultInfo

# Class: MerchantAmazonAsinTasksReadyResultInfo

Defined in: main.ts:205502

## Implements

- [`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MerchantAmazonAsinTasksReadyResultInfo**(`data`?): `MerchantAmazonAsinTasksReadyResultInfo`

Defined in: main.ts:205522

#### Parameters

##### data?

[`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md)

#### Returns

`MerchantAmazonAsinTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:205512

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:205516

URL for collecting the results of the Amazon ASIN Advanced task

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:205518

URL for collecting the results of the Amazon ASIN HTML task

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:205505

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:205507

search engine specified when setting the task

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:205510

type of search engine
can take the following values: shopping

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:205514

user-defined task identifier

#### Implementation of

[`IMerchantAmazonAsinTasksReadyResultInfo`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantAmazonAsinTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:205531

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:205554

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `MerchantAmazonAsinTasksReadyResultInfo`

Defined in: main.ts:205547

#### Parameters

##### data

`any`

#### Returns

`MerchantAmazonAsinTasksReadyResultInfo`
