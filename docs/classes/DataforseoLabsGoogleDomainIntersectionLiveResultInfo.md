[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleDomainIntersectionLiveResultInfo

# Class: DataforseoLabsGoogleDomainIntersectionLiveResultInfo

Defined in: main.ts:112945

## Implements

- [`IDataforseoLabsGoogleDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleDomainIntersectionLiveResultInfo()

> **new DataforseoLabsGoogleDomainIntersectionLiveResultInfo**(`data`?): [`DataforseoLabsGoogleDomainIntersectionLiveResultInfo`](DataforseoLabsGoogleDomainIntersectionLiveResultInfo.md)

Defined in: main.ts:112965

#### Parameters

##### data?

[`IDataforseoLabsGoogleDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleDomainIntersectionLiveResultInfo`](DataforseoLabsGoogleDomainIntersectionLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`DataforseoLabsDomainIntersectionLiveItem`](DataforseoLabsDomainIntersectionLiveItem.md)[]

Defined in: main.ts:112961

contains keywords, relevant SERP elements and related data

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:112959

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:112955

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:112953

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:112947

search engine type

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#se_type)

***

### target1?

> `optional` **target1**: `string`

Defined in: main.ts:112949

the first target domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md).[`target1`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#target1)

***

### target2?

> `optional` **target2**: `string`

Defined in: main.ts:112951

the second target domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md).[`target2`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#target2)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:112957

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:112974

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:113002

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleDomainIntersectionLiveResultInfo`](DataforseoLabsGoogleDomainIntersectionLiveResultInfo.md)

Defined in: main.ts:112995

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleDomainIntersectionLiveResultInfo`](DataforseoLabsGoogleDomainIntersectionLiveResultInfo.md)
