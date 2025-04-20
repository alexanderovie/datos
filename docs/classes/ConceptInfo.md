[**Documentation**](../README.md)

***

[Documentation](../README.md) / ConceptInfo

# Class: ConceptInfo

Defined in: main.ts:140752

## Implements

- [`IConceptInfo`](../interfaces/IConceptInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ConceptInfo**(`data?`): `ConceptInfo`

Defined in: main.ts:140760

#### Parameters

##### data?

[`IConceptInfo`](../interfaces/IConceptInfo.md)

#### Returns

`ConceptInfo`

## Properties

### concept\_group?

> `optional` **concept\_group**: [`ConceptGroupInfo`](ConceptGroupInfo.md)

Defined in: main.ts:140756

the concept group of the concept details

#### Implementation of

[`IConceptInfo`](../interfaces/IConceptInfo.md).[`concept_group`](../interfaces/IConceptInfo.md#concept_group)

***

### name?

> `optional` **name**: `string`

Defined in: main.ts:140754

the concept name for the keyword in the concept_group

#### Implementation of

[`IConceptInfo`](../interfaces/IConceptInfo.md).[`name`](../interfaces/IConceptInfo.md#name)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:140769

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:140787

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ConceptInfo`

Defined in: main.ts:140780

#### Parameters

##### data

`any`

#### Returns

`ConceptInfo`
