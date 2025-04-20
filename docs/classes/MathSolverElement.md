[**Documentation**](../README.md)

***

[Documentation](../README.md) / MathSolverElement

# Class: MathSolverElement

Defined in: main.ts:38835

## Implements

- [`IMathSolverElement`](../interfaces/IMathSolverElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MathSolverElement**(`data?`): `MathSolverElement`

Defined in: main.ts:38845

#### Parameters

##### data?

[`IMathSolverElement`](../interfaces/IMathSolverElement.md)

#### Returns

`MathSolverElement`

## Properties

### expanded\_element?

> `optional` **expanded\_element**: [`MathSolverExpandedElement`](MathSolverExpandedElement.md)[]

Defined in: main.ts:38841

expanded element

#### Implementation of

[`IMathSolverElement`](../interfaces/IMathSolverElement.md).[`expanded_element`](../interfaces/IMathSolverElement.md#expanded_element)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:38839

title of a given link element

#### Implementation of

[`IMathSolverElement`](../interfaces/IMathSolverElement.md).[`title`](../interfaces/IMathSolverElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:38837

type of element

#### Implementation of

[`IMathSolverElement`](../interfaces/IMathSolverElement.md).[`type`](../interfaces/IMathSolverElement.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:38854

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:38877

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `MathSolverElement`

Defined in: main.ts:38870

#### Parameters

##### data

`any`

#### Returns

`MathSolverElement`
