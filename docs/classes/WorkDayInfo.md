[**Documentation**](../README.md)

***

[Documentation](../README.md) / WorkDayInfo

# Class: WorkDayInfo

Defined in: main.ts:24130

## Implements

- [`IWorkDayInfo`](../interfaces/IWorkDayInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new WorkDayInfo**(`data?`): `WorkDayInfo`

Defined in: main.ts:24138

#### Parameters

##### data?

[`IWorkDayInfo`](../interfaces/IWorkDayInfo.md)

#### Returns

`WorkDayInfo`

## Properties

### close?

> `optional` **close**: [`WorkTimeInfo`](WorkTimeInfo.md)

Defined in: main.ts:24134

closing time

#### Implementation of

[`IWorkDayInfo`](../interfaces/IWorkDayInfo.md).[`close`](../interfaces/IWorkDayInfo.md#close)

***

### open?

> `optional` **open**: [`WorkTimeInfo`](WorkTimeInfo.md)

Defined in: main.ts:24132

opening time

#### Implementation of

[`IWorkDayInfo`](../interfaces/IWorkDayInfo.md).[`open`](../interfaces/IWorkDayInfo.md#open)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:24147

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:24165

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `WorkDayInfo`

Defined in: main.ts:24158

#### Parameters

##### data

`any`

#### Returns

`WorkDayInfo`
