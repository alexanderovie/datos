[**Documentation**](../README.md)

***

[Documentation](../README.md) / ITripadvisorSearchOrganicBusinessDataSerpElementItem

# Interface: ITripadvisorSearchOrganicBusinessDataSerpElementItem

Defined in: main.ts:237625

## Extends

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### category?

> `optional` **category**: `string`

Defined in: main.ts:237638

place category

***

### is\_sponsored?

> `optional` **is\_sponsored**: `boolean`

Defined in: main.ts:237634

indicates a sponsored placement
if true, related tripadvisor_search_organic item is a paid advertising on Tripadvisor

***

### price\_rate?

> `optional` **price\_rate**: `string`

Defined in: main.ts:237640

average price rate

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:23100

absolute rank among all the elements

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`rank_absolute`](IBaseBusinessDataSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:23098

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`rank_group`](IBaseBusinessDataSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

Defined in: main.ts:237642

the rating score of the establishment submitted by the reviewers

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:237636

the total number of reviews

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:237627

name of the business entity

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23095

type of element

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`type`](IBaseBusinessDataSerpElementItem.md#type)

***

### url\_path?

> `optional` **url\_path**: `string`

Defined in: main.ts:237631

URL path of the business entity
URL path to the Tripadvisor page of the business entity
you can use this identifier to collect reviews for the business entity using Tripadvisor Reviews
