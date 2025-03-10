[**Documentation**](../README.md)

***

[Documentation](../README.md) / EstInfo

# Class: EstInfo

Defined in: main.ts:150201

## Implements

- [`IEstInfo`](../interfaces/IEstInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new EstInfo()

> **new EstInfo**(`data`?): [`EstInfo`](EstInfo.md)

Defined in: main.ts:150209

#### Parameters

##### data?

[`IEstInfo`](../interfaces/IEstInfo.md)

#### Returns

[`EstInfo`](EstInfo.md)

## Properties

### high?

> `optional` **high**: `number`

Defined in: main.ts:150203

indicates the upper bound of the range result

#### Implementation of

[`IEstInfo`](../interfaces/IEstInfo.md).[`high`](../interfaces/IEstInfo.md#high)

***

### low?

> `optional` **low**: `number`

Defined in: main.ts:150205

indicates the lower bound of the range result

#### Implementation of

[`IEstInfo`](../interfaces/IEstInfo.md).[`low`](../interfaces/IEstInfo.md#low)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:150218

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:150236

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`EstInfo`](EstInfo.md)

Defined in: main.ts:150229

#### Parameters

##### data

`any`

#### Returns

[`EstInfo`](EstInfo.md)
