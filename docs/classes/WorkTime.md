[**Documentation**](../README.md)

***

[Documentation](../README.md) / WorkTime

# Class: WorkTime

Defined in: main.ts:220343

## Implements

- [`IWorkTime`](../interfaces/IWorkTime.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new WorkTime()

> **new WorkTime**(`data`?): [`WorkTime`](WorkTime.md)

Defined in: main.ts:220350

#### Parameters

##### data?

[`IWorkTime`](../interfaces/IWorkTime.md)

#### Returns

[`WorkTime`](WorkTime.md)

## Properties

### work\_hours?

> `optional` **work\_hours**: [`WorkHours`](WorkHours.md)

Defined in: main.ts:220346

open hours
information about work hours of the local establishment

#### Implementation of

[`IWorkTime`](../interfaces/IWorkTime.md).[`work_hours`](../interfaces/IWorkTime.md#work_hours)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:220359

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:220376

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`WorkTime`](WorkTime.md)

Defined in: main.ts:220369

#### Parameters

##### data

`any`

#### Returns

[`WorkTime`](WorkTime.md)
