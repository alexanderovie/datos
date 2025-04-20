[**Documentation**](../README.md)

***

[Documentation](../README.md) / PopularTimes

# Class: PopularTimes

Defined in: main.ts:223394

## Implements

- [`IPopularTimes`](../interfaces/IPopularTimes.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new PopularTimes**(`data?`): `PopularTimes`

Defined in: main.ts:223401

#### Parameters

##### data?

[`IPopularTimes`](../interfaces/IPopularTimes.md)

#### Returns

`PopularTimes`

## Properties

### popular\_times\_by\_days?

> `optional` **popular\_times\_by\_days**: `object`

Defined in: main.ts:223397

popular hours
information about busy hours of the local establishment on each day of the week

#### Index Signature

\[`key`: `string`\]: [`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md)[]

#### Implementation of

[`IPopularTimes`](../interfaces/IPopularTimes.md).[`popular_times_by_days`](../interfaces/IPopularTimes.md#popular_times_by_days)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:223410

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:223433

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `PopularTimes`

Defined in: main.ts:223426

#### Parameters

##### data

`any`

#### Returns

`PopularTimes`
