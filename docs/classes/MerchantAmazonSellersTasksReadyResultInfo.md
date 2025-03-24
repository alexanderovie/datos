[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonSellersTasksReadyResultInfo

# Class: MerchantAmazonSellersTasksReadyResultInfo

Defined in: main.ts:207544

## Implements

- [`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MerchantAmazonSellersTasksReadyResultInfo**(`data`?): `MerchantAmazonSellersTasksReadyResultInfo`

Defined in: main.ts:207563

#### Parameters

##### data?

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md)

#### Returns

`MerchantAmazonSellersTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:207553

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:207557

URL for collecting the results of Amazon Sellers Advanced task

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:207559

URL for collecting the results of Amazon Sellers HTML task

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:207547

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:207549

search engine specified when setting the task

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:207551

type of search engine

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:207555

user-defined task identifier

#### Implementation of

[`IMerchantAmazonSellersTasksReadyResultInfo`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantAmazonSellersTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:207572

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:207595

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `MerchantAmazonSellersTasksReadyResultInfo`

Defined in: main.ts:207588

#### Parameters

##### data

`any`

#### Returns

`MerchantAmazonSellersTasksReadyResultInfo`
