[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsLiveItem

# Class: DataforseoLabsLiveItem

Defined in: main.ts:112138

## Implements

- [`IDataforseoLabsLiveItem`](../interfaces/IDataforseoLabsLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsLiveItem**(`data`?): `DataforseoLabsLiveItem`

Defined in: main.ts:112148

#### Parameters

##### data?

[`IDataforseoLabsLiveItem`](../interfaces/IDataforseoLabsLiveItem.md)

#### Returns

`DataforseoLabsLiveItem`

## Properties

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

Defined in: main.ts:112142

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsLiveItem`](../interfaces/IDataforseoLabsLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsLiveItem.md#keyword_data)

***

### ranked\_serp\_element?

> `optional` **ranked\_serp\_element**: [`RankedSerpElement`](RankedSerpElement.md)

Defined in: main.ts:112144

contains data on the domain’s SERP element found for the returned keyword

#### Implementation of

[`IDataforseoLabsLiveItem`](../interfaces/IDataforseoLabsLiveItem.md).[`ranked_serp_element`](../interfaces/IDataforseoLabsLiveItem.md#ranked_serp_element)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:112140

search engine type

#### Implementation of

[`IDataforseoLabsLiveItem`](../interfaces/IDataforseoLabsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsLiveItem.md#se_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:112157

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:112176

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsLiveItem`

Defined in: main.ts:112169

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsLiveItem`
