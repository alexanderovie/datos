[**Documentation**](../README.md)

***

[Documentation](../README.md) / SearchVolumeTrend

# Class: SearchVolumeTrend

Defined in: main.ts:103724

## Implements

- [`ISearchVolumeTrend`](../interfaces/ISearchVolumeTrend.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SearchVolumeTrend**(`data?`): `SearchVolumeTrend`

Defined in: main.ts:103734

#### Parameters

##### data?

[`ISearchVolumeTrend`](../interfaces/ISearchVolumeTrend.md)

#### Returns

`SearchVolumeTrend`

## Properties

### monthly?

> `optional` **monthly**: `number`

Defined in: main.ts:103726

search volume change in percent compared to the previous month

#### Implementation of

[`ISearchVolumeTrend`](../interfaces/ISearchVolumeTrend.md).[`monthly`](../interfaces/ISearchVolumeTrend.md#monthly)

***

### quarterly?

> `optional` **quarterly**: `number`

Defined in: main.ts:103728

search volume change in percent compared to the previous quarter

#### Implementation of

[`ISearchVolumeTrend`](../interfaces/ISearchVolumeTrend.md).[`quarterly`](../interfaces/ISearchVolumeTrend.md#quarterly)

***

### yearly?

> `optional` **yearly**: `number`

Defined in: main.ts:103730

search volume change in percent compared to the previous year

#### Implementation of

[`ISearchVolumeTrend`](../interfaces/ISearchVolumeTrend.md).[`yearly`](../interfaces/ISearchVolumeTrend.md#yearly)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:103743

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:103762

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SearchVolumeTrend`

Defined in: main.ts:103755

#### Parameters

##### data

`any`

#### Returns

`SearchVolumeTrend`
