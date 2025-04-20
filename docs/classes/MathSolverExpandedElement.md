[**Documentation**](../README.md)

***

[Documentation](../README.md) / MathSolverExpandedElement

# Class: MathSolverExpandedElement

Defined in: main.ts:38763

## Implements

- [`IMathSolverExpandedElement`](../interfaces/IMathSolverExpandedElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MathSolverExpandedElement**(`data?`): `MathSolverExpandedElement`

Defined in: main.ts:38774

#### Parameters

##### data?

[`IMathSolverExpandedElement`](../interfaces/IMathSolverExpandedElement.md)

#### Returns

`MathSolverExpandedElement`

## Properties

### solution?

> `optional` **solution**: `string`[]

Defined in: main.ts:38770

solution of the element
displays steps to solve the mathematical equation as specified in the element

#### Implementation of

[`IMathSolverExpandedElement`](../interfaces/IMathSolverExpandedElement.md).[`solution`](../interfaces/IMathSolverExpandedElement.md#solution)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:38767

title of the carousel item

#### Implementation of

[`IMathSolverExpandedElement`](../interfaces/IMathSolverExpandedElement.md).[`title`](../interfaces/IMathSolverExpandedElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:38765

type of element

#### Implementation of

[`IMathSolverExpandedElement`](../interfaces/IMathSolverExpandedElement.md).[`type`](../interfaces/IMathSolverExpandedElement.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:38783

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:38806

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `MathSolverExpandedElement`

Defined in: main.ts:38799

#### Parameters

##### data

`any`

#### Returns

`MathSolverExpandedElement`
