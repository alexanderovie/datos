[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusyWorkingTimeInfo

# Class: BusyWorkingTimeInfo

Defined in: main.ts:222804

## Implements

- [`IBusyWorkingTimeInfo`](../interfaces/IBusyWorkingTimeInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusyWorkingTimeInfo**(`data`?): `BusyWorkingTimeInfo`

Defined in: main.ts:222814

#### Parameters

##### data?

[`IBusyWorkingTimeInfo`](../interfaces/IBusyWorkingTimeInfo.md)

#### Returns

`BusyWorkingTimeInfo`

## Properties

### popular\_index?

> `optional` **popular\_index**: `number`

Defined in: main.ts:222810

popularity index
relative time-bound popularity index measured from 0 to 100;
higher value corresponds to a busier time of a day

#### Implementation of

[`IBusyWorkingTimeInfo`](../interfaces/IBusyWorkingTimeInfo.md).[`popular_index`](../interfaces/IBusyWorkingTimeInfo.md#popular_index)

***

### time?

> `optional` **time**: [`WorkTimeInfo`](WorkTimeInfo.md)

Defined in: main.ts:222806

busy hours

#### Implementation of

[`IBusyWorkingTimeInfo`](../interfaces/IBusyWorkingTimeInfo.md).[`time`](../interfaces/IBusyWorkingTimeInfo.md#time)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:222823

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:222841

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusyWorkingTimeInfo`

Defined in: main.ts:222834

#### Parameters

##### data

`any`

#### Returns

`BusyWorkingTimeInfo`
