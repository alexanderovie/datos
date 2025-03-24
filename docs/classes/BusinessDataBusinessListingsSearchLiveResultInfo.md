[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataBusinessListingsSearchLiveResultInfo

# Class: BusinessDataBusinessListingsSearchLiveResultInfo

Defined in: main.ts:223396

## Implements

- [`IBusinessDataBusinessListingsSearchLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataBusinessListingsSearchLiveResultInfo**(`data`?): `BusinessDataBusinessListingsSearchLiveResultInfo`

Defined in: main.ts:223415

#### Parameters

##### data?

[`IBusinessDataBusinessListingsSearchLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md)

#### Returns

`BusinessDataBusinessListingsSearchLiveResultInfo`

## Properties

### count?

> `optional` **count**: `number`

Defined in: main.ts:223401

item types
the number of items in the items array

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md).[`count`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md#count)

***

### items?

> `optional` **items**: [`BusinessDataBusinessListingsSearchLiveItem`](BusinessDataBusinessListingsSearchLiveItem.md)[]

Defined in: main.ts:223411

encountered item types
types of search engine results encountered in the items array;
possible item types: business_listing

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md).[`items`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md#items)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:223403

offset in the results array of returned businesses

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md).[`offset`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md#offset)

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:223407

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md).[`offset_token`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md#offset_token)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:223398

total number of results in our database relevant to your request

#### Implementation of

[`IBusinessDataBusinessListingsSearchLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md).[`total_count`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:223424

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:223449

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataBusinessListingsSearchLiveResultInfo`

Defined in: main.ts:223442

#### Parameters

##### data

`any`

#### Returns

`BusinessDataBusinessListingsSearchLiveResultInfo`
