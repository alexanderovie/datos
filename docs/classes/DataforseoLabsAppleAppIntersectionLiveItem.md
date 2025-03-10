[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAppleAppIntersectionLiveItem

# Class: DataforseoLabsAppleAppIntersectionLiveItem

Defined in: main.ts:134441

## Implements

- [`IDataforseoLabsAppleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAppleAppIntersectionLiveItem()

> **new DataforseoLabsAppleAppIntersectionLiveItem**(`data`?): [`DataforseoLabsAppleAppIntersectionLiveItem`](DataforseoLabsAppleAppIntersectionLiveItem.md)

Defined in: main.ts:134453

#### Parameters

##### data?

[`IDataforseoLabsAppleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveItem.md)

#### Returns

[`DataforseoLabsAppleAppIntersectionLiveItem`](DataforseoLabsAppleAppIntersectionLiveItem.md)

## Properties

### intersection\_result?

> `optional` **intersection\_result**: `object`

Defined in: main.ts:134449

contains SERP data for the returned keyword
data will be provided in separate arrays for each app ID you specified in the app_ids object when setting a task;
depending on the number of specified app IDs, it can contain from 1 to 20 arrays named respectively

#### Index Signature

\[`key`: `string`\]: [`AppDataAppStoreSearchOrganicSerpElementItem`](AppDataAppStoreSearchOrganicSerpElementItem.md)

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveItem.md).[`intersection_result`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveItem.md#intersection_result)

***

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

Defined in: main.ts:134445

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveItem.md#keyword_data)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:134443

search engine type

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveItem.md#se_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:134462

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:134487

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAppleAppIntersectionLiveItem`](DataforseoLabsAppleAppIntersectionLiveItem.md)

Defined in: main.ts:134480

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAppleAppIntersectionLiveItem`](DataforseoLabsAppleAppIntersectionLiveItem.md)
