[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordAnnotations

# Class: KeywordAnnotations

Defined in: main.ts:138285

## Implements

- [`IKeywordAnnotations`](../interfaces/IKeywordAnnotations.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordAnnotations()

> **new KeywordAnnotations**(`data`?): [`KeywordAnnotations`](KeywordAnnotations.md)

Defined in: main.ts:138291

#### Parameters

##### data?

[`IKeywordAnnotations`](../interfaces/IKeywordAnnotations.md)

#### Returns

[`KeywordAnnotations`](KeywordAnnotations.md)

## Properties

### concepts?

> `optional` **concepts**: [`ConceptInfo`](ConceptInfo.md)[]

Defined in: main.ts:138287

the list of concepts for the keyword

#### Implementation of

[`IKeywordAnnotations`](../interfaces/IKeywordAnnotations.md).[`concepts`](../interfaces/IKeywordAnnotations.md#concepts)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:138300

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:138321

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordAnnotations`](KeywordAnnotations.md)

Defined in: main.ts:138314

#### Parameters

##### data

`any`

#### Returns

[`KeywordAnnotations`](KeywordAnnotations.md)
