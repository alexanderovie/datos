[**Documentation**](../README.md)

***

[Documentation](../README.md) / WorkHours

# Class: WorkHours

Defined in: main.ts:44415

## Implements

- [`IWorkHours`](../interfaces/IWorkHours.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new WorkHours**(`data?`): `WorkHours`

Defined in: main.ts:44424

#### Parameters

##### data?

[`IWorkHours`](../interfaces/IWorkHours.md)

#### Returns

`WorkHours`

## Properties

### current\_status?

> `optional` **current\_status**: `string`

Defined in: main.ts:44420

current status of the establishment
indicates whether the establishment is opened or closed

#### Implementation of

[`IWorkHours`](../interfaces/IWorkHours.md).[`current_status`](../interfaces/IWorkHours.md#current_status)

***

### timetable?

> `optional` **timetable**: `object`

Defined in: main.ts:44417

work hours timetable

#### Index Signature

\[`key`: `string`\]: [`WorkDayInfo`](WorkDayInfo.md)[]

#### Implementation of

[`IWorkHours`](../interfaces/IWorkHours.md).[`timetable`](../interfaces/IWorkHours.md#timetable)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:44433

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:44457

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `WorkHours`

Defined in: main.ts:44450

#### Parameters

##### data

`any`

#### Returns

`WorkHours`
