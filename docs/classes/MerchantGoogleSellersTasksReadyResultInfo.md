[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleSellersTasksReadyResultInfo

# Class: MerchantGoogleSellersTasksReadyResultInfo

Defined in: main.ts:199372

## Implements

- [`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MerchantGoogleSellersTasksReadyResultInfo**(`data`?): `MerchantGoogleSellersTasksReadyResultInfo`

Defined in: main.ts:199392

#### Parameters

##### data?

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md)

#### Returns

`MerchantGoogleSellersTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:199382

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:199386

URL for collecting the results of Google Shopping Sellers Advanced task

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:199388

URL for collecting the results of Google Shopping Sellers HTML task

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:199375

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:199377

search engine specified when setting the task

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:199380

type of search engine
can take the following values: shopping

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:199384

user-defined task identifier

#### Implementation of

[`IMerchantGoogleSellersTasksReadyResultInfo`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantGoogleSellersTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:199401

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:199424

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `MerchantGoogleSellersTasksReadyResultInfo`

Defined in: main.ts:199417

#### Parameters

##### data

`any`

#### Returns

`MerchantGoogleSellersTasksReadyResultInfo`
