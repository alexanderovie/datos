[**Documentation**](../README.md)

***

[Documentation](../README.md) / ITrustpilotSearchOrganicBusinessDataSerpElementItem

# Interface: ITrustpilotSearchOrganicBusinessDataSerpElementItem

Defined in: main.ts:237777

## Extends

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:237781

domain of the establishment

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:23439

absolute rank among all the elements

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`rank_absolute`](IBaseBusinessDataSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:23437

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`rank_group`](IBaseBusinessDataSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

Defined in: main.ts:237787

the rating score of the establishment submitted by reviewers

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:237785

the total number of reviews

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:237779

title of the establishment

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23434

type of element

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`type`](IBaseBusinessDataSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:237783

URL to the establishment
