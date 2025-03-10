[**Documentation**](../README.md)

***

[Documentation](../README.md) / WorkDayInfo

# Class: WorkDayInfo

Defined in: main.ts:23783

## Implements

- [`IWorkDayInfo`](../interfaces/IWorkDayInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new WorkDayInfo()

> **new WorkDayInfo**(`data`?): [`WorkDayInfo`](WorkDayInfo.md)

Defined in: main.ts:23791

#### Parameters

##### data?

[`IWorkDayInfo`](../interfaces/IWorkDayInfo.md)

#### Returns

[`WorkDayInfo`](WorkDayInfo.md)

## Properties

### close?

> `optional` **close**: [`WorkTimeInfo`](WorkTimeInfo.md)

Defined in: main.ts:23787

closing time

#### Implementation of

[`IWorkDayInfo`](../interfaces/IWorkDayInfo.md).[`close`](../interfaces/IWorkDayInfo.md#close)

***

### open?

> `optional` **open**: [`WorkTimeInfo`](WorkTimeInfo.md)

Defined in: main.ts:23785

opening time

#### Implementation of

[`IWorkDayInfo`](../interfaces/IWorkDayInfo.md).[`open`](../interfaces/IWorkDayInfo.md#open)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:23800

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:23818

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`WorkDayInfo`](WorkDayInfo.md)

Defined in: main.ts:23811

#### Parameters

##### data

`any`

#### Returns

[`WorkDayInfo`](WorkDayInfo.md)
