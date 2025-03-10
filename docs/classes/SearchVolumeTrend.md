[**Documentation**](../README.md)

***

[Documentation](../README.md) / SearchVolumeTrend

# Class: SearchVolumeTrend

Defined in: main.ts:101709

## Implements

- [`ISearchVolumeTrend`](../interfaces/ISearchVolumeTrend.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SearchVolumeTrend()

> **new SearchVolumeTrend**(`data`?): [`SearchVolumeTrend`](SearchVolumeTrend.md)

Defined in: main.ts:101719

#### Parameters

##### data?

[`ISearchVolumeTrend`](../interfaces/ISearchVolumeTrend.md)

#### Returns

[`SearchVolumeTrend`](SearchVolumeTrend.md)

## Properties

### monthly?

> `optional` **monthly**: `number`

Defined in: main.ts:101711

search volume change in percent compared to the previous month

#### Implementation of

[`ISearchVolumeTrend`](../interfaces/ISearchVolumeTrend.md).[`monthly`](../interfaces/ISearchVolumeTrend.md#monthly)

***

### quarterly?

> `optional` **quarterly**: `number`

Defined in: main.ts:101713

search volume change in percent compared to the previous quarter

#### Implementation of

[`ISearchVolumeTrend`](../interfaces/ISearchVolumeTrend.md).[`quarterly`](../interfaces/ISearchVolumeTrend.md#quarterly)

***

### yearly?

> `optional` **yearly**: `number`

Defined in: main.ts:101715

search volume change in percent compared to the previous year

#### Implementation of

[`ISearchVolumeTrend`](../interfaces/ISearchVolumeTrend.md).[`yearly`](../interfaces/ISearchVolumeTrend.md#yearly)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:101728

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:101747

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SearchVolumeTrend`](SearchVolumeTrend.md)

Defined in: main.ts:101740

#### Parameters

##### data

`any`

#### Returns

[`SearchVolumeTrend`](SearchVolumeTrend.md)
