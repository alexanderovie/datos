[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsLiveItem

# Class: DataforseoLabsLiveItem

Defined in: main.ts:112260

## Implements

- [`IDataforseoLabsLiveItem`](../interfaces/IDataforseoLabsLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsLiveItem**(`data?`): `DataforseoLabsLiveItem`

Defined in: main.ts:112270

#### Parameters

##### data?

[`IDataforseoLabsLiveItem`](../interfaces/IDataforseoLabsLiveItem.md)

#### Returns

`DataforseoLabsLiveItem`

## Properties

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

Defined in: main.ts:112264

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsLiveItem`](../interfaces/IDataforseoLabsLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsLiveItem.md#keyword_data)

***

### ranked\_serp\_element?

> `optional` **ranked\_serp\_element**: [`RankedSerpElement`](RankedSerpElement.md)

Defined in: main.ts:112266

contains data on the domain’s SERP element found for the returned keyword

#### Implementation of

[`IDataforseoLabsLiveItem`](../interfaces/IDataforseoLabsLiveItem.md).[`ranked_serp_element`](../interfaces/IDataforseoLabsLiveItem.md#ranked_serp_element)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:112262

search engine type

#### Implementation of

[`IDataforseoLabsLiveItem`](../interfaces/IDataforseoLabsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsLiveItem.md#se_type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:112279

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:112298

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsLiveItem`

Defined in: main.ts:112291

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsLiveItem`
