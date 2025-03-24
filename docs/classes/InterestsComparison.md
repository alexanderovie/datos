[**Documentation**](../README.md)

***

[Documentation](../README.md) / InterestsComparison

# Class: InterestsComparison

Defined in: main.ts:148586

## Implements

- [`IInterestsComparison`](../interfaces/IInterestsComparison.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new InterestsComparison**(`data`?): `InterestsComparison`

Defined in: main.ts:148595

#### Parameters

##### data?

[`IInterestsComparison`](../interfaces/IInterestsComparison.md)

#### Returns

`InterestsComparison`

## Properties

### absolute\_items?

> `optional` **absolute\_items**: [`AbsoluteItems`](AbsoluteItems.md)[]

Defined in: main.ts:148591

keyword popularity rates across all locations
values in this array represent percentages relative to the maximum value across all locations

#### Implementation of

[`IInterestsComparison`](../interfaces/IInterestsComparison.md).[`absolute_items`](../interfaces/IInterestsComparison.md#absolute_items)

***

### items?

> `optional` **items**: [`AbsoluteItems`](AbsoluteItems.md)[]

Defined in: main.ts:148588

contains keyword popularity and related data

#### Implementation of

[`IInterestsComparison`](../interfaces/IInterestsComparison.md).[`items`](../interfaces/IInterestsComparison.md#items)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:148604

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:148630

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `InterestsComparison`

Defined in: main.ts:148623

#### Parameters

##### data

`any`

#### Returns

`InterestsComparison`
