[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksCompetitorsLiveItem

# Class: BacklinksCompetitorsLiveItem

Defined in: main.ts:169262

## Implements

- [`IBacklinksCompetitorsLiveItem`](../interfaces/IBacklinksCompetitorsLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksCompetitorsLiveItem**(`data?`): `BacklinksCompetitorsLiveItem`

Defined in: main.ts:169277

#### Parameters

##### data?

[`IBacklinksCompetitorsLiveItem`](../interfaces/IBacklinksCompetitorsLiveItem.md)

#### Returns

`BacklinksCompetitorsLiveItem`

## Properties

### intersections?

> `optional` **intersections**: `number`

Defined in: main.ts:169273

indicates the number of backlink intersections with the target specified in the POST array

#### Implementation of

[`IBacklinksCompetitorsLiveItem`](../interfaces/IBacklinksCompetitorsLiveItem.md).[`intersections`](../interfaces/IBacklinksCompetitorsLiveItem.md#intersections)

***

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:169271

domain rank
domain rank across all domains in the database
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksCompetitorsLiveItem`](../interfaces/IBacklinksCompetitorsLiveItem.md).[`rank`](../interfaces/IBacklinksCompetitorsLiveItem.md#rank)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:169266

competitor domain

#### Implementation of

[`IBacklinksCompetitorsLiveItem`](../interfaces/IBacklinksCompetitorsLiveItem.md).[`target`](../interfaces/IBacklinksCompetitorsLiveItem.md#target)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:169264

type of element

#### Implementation of

[`IBacklinksCompetitorsLiveItem`](../interfaces/IBacklinksCompetitorsLiveItem.md).[`type`](../interfaces/IBacklinksCompetitorsLiveItem.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:169286

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:169306

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksCompetitorsLiveItem`

Defined in: main.ts:169299

#### Parameters

##### data

`any`

#### Returns

`BacklinksCompetitorsLiveItem`
