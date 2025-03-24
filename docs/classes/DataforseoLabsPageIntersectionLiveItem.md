[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsPageIntersectionLiveItem

# Class: DataforseoLabsPageIntersectionLiveItem

Defined in: main.ts:121102

## Implements

- [`IDataforseoLabsPageIntersectionLiveItem`](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsPageIntersectionLiveItem**(`data`?): `DataforseoLabsPageIntersectionLiveItem`

Defined in: main.ts:121114

#### Parameters

##### data?

[`IDataforseoLabsPageIntersectionLiveItem`](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md)

#### Returns

`DataforseoLabsPageIntersectionLiveItem`

## Properties

### intersection\_result?

> `optional` **intersection\_result**: `object`

Defined in: main.ts:121110

contains data on the SERP elements found for the returned keyword
data will be provided in separate arrays for each URL you specified in the pages object when setting a task;
depending on the number of specified URLs, it can contain from 1 to 20 arrays named respectively

#### Index Signature

\[`key`: `string`\]: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

#### Implementation of

[`IDataforseoLabsPageIntersectionLiveItem`](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md).[`intersection_result`](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md#intersection_result)

***

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

Defined in: main.ts:121106

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsPageIntersectionLiveItem`](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md#keyword_data)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:121104

search engine type

#### Implementation of

[`IDataforseoLabsPageIntersectionLiveItem`](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md#se_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:121123

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:121148

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsPageIntersectionLiveItem`

Defined in: main.ts:121141

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsPageIntersectionLiveItem`
