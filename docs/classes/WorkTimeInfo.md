[**Documentation**](../README.md)

***

[Documentation](../README.md) / WorkTimeInfo

# Class: WorkTimeInfo

Defined in: main.ts:24178

## Implements

- [`IWorkTimeInfo`](../interfaces/IWorkTimeInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new WorkTimeInfo**(`data`?): `WorkTimeInfo`

Defined in: main.ts:24186

#### Parameters

##### data?

[`IWorkTimeInfo`](../interfaces/IWorkTimeInfo.md)

#### Returns

`WorkTimeInfo`

## Properties

### hour?

> `optional` **hour**: `number`

Defined in: main.ts:24180

hours in the 24-hour format

#### Implementation of

[`IWorkTimeInfo`](../interfaces/IWorkTimeInfo.md).[`hour`](../interfaces/IWorkTimeInfo.md#hour)

***

### minute?

> `optional` **minute**: `number`

Defined in: main.ts:24182

minutes

#### Implementation of

[`IWorkTimeInfo`](../interfaces/IWorkTimeInfo.md).[`minute`](../interfaces/IWorkTimeInfo.md#minute)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:24195

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:24213

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `WorkTimeInfo`

Defined in: main.ts:24206

#### Parameters

##### data

`any`

#### Returns

`WorkTimeInfo`
