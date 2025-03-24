[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonProductsTasksReadyResultInfo

# Class: MerchantAmazonProductsTasksReadyResultInfo

Defined in: main.ts:203894

## Implements

- [`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MerchantAmazonProductsTasksReadyResultInfo**(`data`?): `MerchantAmazonProductsTasksReadyResultInfo`

Defined in: main.ts:203914

#### Parameters

##### data?

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md)

#### Returns

`MerchantAmazonProductsTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:203904

date when the task was posted (in the UTC format)

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:203908

URL for collecting the results of the Amazon Products Advanced task

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:203910

URL for collecting the results of the Amazon Products HTML task

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:203897

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`id`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:203899

search engine specified when setting the task

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`se`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:203902

type of search engine
can take the following values: organic

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`se_type`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:203906

user-defined task identifier

#### Implementation of

[`IMerchantAmazonProductsTasksReadyResultInfo`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md).[`tag`](../interfaces/IMerchantAmazonProductsTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:203923

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:203946

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `MerchantAmazonProductsTasksReadyResultInfo`

Defined in: main.ts:203939

#### Parameters

##### data

`any`

#### Returns

`MerchantAmazonProductsTasksReadyResultInfo`
