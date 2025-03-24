[**Documentation**](../README.md)

***

[Documentation](../README.md) / WorkTime

# Class: WorkTime

Defined in: main.ts:222752

## Implements

- [`IWorkTime`](../interfaces/IWorkTime.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new WorkTime**(`data`?): `WorkTime`

Defined in: main.ts:222759

#### Parameters

##### data?

[`IWorkTime`](../interfaces/IWorkTime.md)

#### Returns

`WorkTime`

## Properties

### work\_hours?

> `optional` **work\_hours**: [`WorkHours`](WorkHours.md)

Defined in: main.ts:222755

open hours
information about work hours of the local establishment

#### Implementation of

[`IWorkTime`](../interfaces/IWorkTime.md).[`work_hours`](../interfaces/IWorkTime.md#work_hours)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:222768

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:222785

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `WorkTime`

Defined in: main.ts:222778

#### Parameters

##### data

`any`

#### Returns

`WorkTime`
