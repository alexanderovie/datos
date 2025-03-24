[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo

# Class: BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo

Defined in: main.ts:224002

## Implements

- [`IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo**(`data`?): `BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`

Defined in: main.ts:224021

#### Parameters

##### data?

[`IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md)

#### Returns

`BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`

## Properties

### count?

> `optional` **count**: `number`

Defined in: main.ts:224007

item types
the number of items in the items array

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md).[`count`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#count)

***

### items?

> `optional` **items**: [`BusinessDataBusinessListingsCategoriesAggregationLiveItem`](BusinessDataBusinessListingsCategoriesAggregationLiveItem.md)[]

Defined in: main.ts:224017

encountered item types
types of search engine results encountered in the items array;
possible item types: business_category

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md).[`items`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#items)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:224009

offset in the results array of returned categories

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md).[`offset`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#offset)

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:224013

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md).[`offset_token`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#offset_token)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:224004

total number of results in our database relevant to your request

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md).[`total_count`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:224030

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:224055

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`

Defined in: main.ts:224048

#### Parameters

##### data

`any`

#### Returns

`BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`
