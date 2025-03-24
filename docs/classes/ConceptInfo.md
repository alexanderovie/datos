[**Documentation**](../README.md)

***

[Documentation](../README.md) / ConceptInfo

# Class: ConceptInfo

Defined in: main.ts:140630

## Implements

- [`IConceptInfo`](../interfaces/IConceptInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ConceptInfo**(`data`?): `ConceptInfo`

Defined in: main.ts:140638

#### Parameters

##### data?

[`IConceptInfo`](../interfaces/IConceptInfo.md)

#### Returns

`ConceptInfo`

## Properties

### concept\_group?

> `optional` **concept\_group**: [`ConceptGroupInfo`](ConceptGroupInfo.md)

Defined in: main.ts:140634

the concept group of the concept details

#### Implementation of

[`IConceptInfo`](../interfaces/IConceptInfo.md).[`concept_group`](../interfaces/IConceptInfo.md#concept_group)

***

### name?

> `optional` **name**: `string`

Defined in: main.ts:140632

the concept name for the keyword in the concept_group

#### Implementation of

[`IConceptInfo`](../interfaces/IConceptInfo.md).[`name`](../interfaces/IConceptInfo.md#name)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:140647

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:140665

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ConceptInfo`

Defined in: main.ts:140658

#### Parameters

##### data

`any`

#### Returns

`ConceptInfo`
