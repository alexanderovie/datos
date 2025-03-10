[**Documentation**](../README.md)

***

[Documentation](../README.md) / ConceptInfo

# Class: ConceptInfo

Defined in: main.ts:138229

## Implements

- [`IConceptInfo`](../interfaces/IConceptInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ConceptInfo()

> **new ConceptInfo**(`data`?): [`ConceptInfo`](ConceptInfo.md)

Defined in: main.ts:138237

#### Parameters

##### data?

[`IConceptInfo`](../interfaces/IConceptInfo.md)

#### Returns

[`ConceptInfo`](ConceptInfo.md)

## Properties

### concept\_group?

> `optional` **concept\_group**: [`ConceptGroupInfo`](ConceptGroupInfo.md)

Defined in: main.ts:138233

the concept group of the concept details

#### Implementation of

[`IConceptInfo`](../interfaces/IConceptInfo.md).[`concept_group`](../interfaces/IConceptInfo.md#concept_group)

***

### name?

> `optional` **name**: `string`

Defined in: main.ts:138231

the concept name for the keyword in the concept_group

#### Implementation of

[`IConceptInfo`](../interfaces/IConceptInfo.md).[`name`](../interfaces/IConceptInfo.md#name)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:138246

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:138264

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ConceptInfo`](ConceptInfo.md)

Defined in: main.ts:138257

#### Parameters

##### data

`any`

#### Returns

[`ConceptInfo`](ConceptInfo.md)
