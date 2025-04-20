[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem

# Class: KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem

Defined in: main.ts:160242

## Implements

- [`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem**(`data?`): `KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`

Defined in: main.ts:160256

#### Parameters

##### data?

[`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md)

#### Returns

`KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`

## Properties

### country\_distribution?

> `optional` **country\_distribution**: [`CountryDistribution`](CountryDistribution.md)[]

Defined in: main.ts:160252

distribution of clickstream by countries
represents clickstream-based search volume in available countries, as well as its respective percentage of global search volume

#### Implementation of

[`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md).[`country_distribution`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md#country_distribution)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:160245

keyword
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md).[`keyword`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md#keyword)

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:160249

clickstream-based average monthly search volume rate
represents the (approximate) number of searches for the given keyword idea based on clickstream
you can learn more about clickstream search volume in this Help Center article

#### Implementation of

[`IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md).[`search_volume`](../interfaces/IKeywordsDataClickstreamDataGlobalSearchVolumeLiveItem.md#search_volume)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:160265

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:160288

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`

Defined in: main.ts:160281

#### Parameters

##### data

`any`

#### Returns

`KeywordsDataClickstreamDataGlobalSearchVolumeLiveItem`
