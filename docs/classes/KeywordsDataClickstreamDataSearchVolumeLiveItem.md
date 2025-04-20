[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataClickstreamDataSearchVolumeLiveItem

# Class: KeywordsDataClickstreamDataSearchVolumeLiveItem

Defined in: main.ts:159816

## Implements

- [`IKeywordsDataClickstreamDataSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataSearchVolumeLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordsDataClickstreamDataSearchVolumeLiveItem**(`data?`): `KeywordsDataClickstreamDataSearchVolumeLiveItem`

Defined in: main.ts:159827

#### Parameters

##### data?

[`IKeywordsDataClickstreamDataSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataSearchVolumeLiveItem.md)

#### Returns

`KeywordsDataClickstreamDataSearchVolumeLiveItem`

## Properties

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:159818

keyword provided in the POST array

#### Implementation of

[`IKeywordsDataClickstreamDataSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataSearchVolumeLiveItem.md).[`keyword`](../interfaces/IKeywordsDataClickstreamDataSearchVolumeLiveItem.md#keyword)

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](MonthlySearches.md)[]

Defined in: main.ts:159823

monthly search volume rates
array of objects with search volume rates in a certain month of a year

#### Implementation of

[`IKeywordsDataClickstreamDataSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataSearchVolumeLiveItem.md).[`monthly_searches`](../interfaces/IKeywordsDataClickstreamDataSearchVolumeLiveItem.md#monthly_searches)

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:159820

current search volume rate of a keyword

#### Implementation of

[`IKeywordsDataClickstreamDataSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataSearchVolumeLiveItem.md).[`search_volume`](../interfaces/IKeywordsDataClickstreamDataSearchVolumeLiveItem.md#search_volume)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:159836

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:159859

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordsDataClickstreamDataSearchVolumeLiveItem`

Defined in: main.ts:159852

#### Parameters

##### data

`any`

#### Returns

`KeywordsDataClickstreamDataSearchVolumeLiveItem`
