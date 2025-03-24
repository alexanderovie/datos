[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleProductSpecTasksReadyResultInfo

# Class: MerchantGoogleProductSpecTasksReadyResultInfo

Defined in: main.ts:200758

## Implements

- [`IMerchantGoogleProductSpecTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MerchantGoogleProductSpecTasksReadyResultInfo**(`data`?): `MerchantGoogleProductSpecTasksReadyResultInfo`

Defined in: main.ts:200778

#### Parameters

##### data?

[`IMerchantGoogleProductSpecTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResultInfo.md)

#### Returns

`MerchantGoogleProductSpecTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:200768

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantGoogleProductSpecTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:200772

URL for collecting the results of the Google Shopping Product Specifications Advanced task

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantGoogleProductSpecTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:200774

URL for collecting the results of the Google Shopping Product Specifications HTML task

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantGoogleProductSpecTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:200761

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantGoogleProductSpecTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:200763

search engine specified when setting the task

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantGoogleProductSpecTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:200766

type of search engine
can take the following values: shopping_specifications

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantGoogleProductSpecTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:200770

user-defined task identifier

#### Implementation of

[`IMerchantGoogleProductSpecTasksReadyResultInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantGoogleProductSpecTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:200787

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:200810

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `MerchantGoogleProductSpecTasksReadyResultInfo`

Defined in: main.ts:200803

#### Parameters

##### data

`any`

#### Returns

`MerchantGoogleProductSpecTasksReadyResultInfo`
