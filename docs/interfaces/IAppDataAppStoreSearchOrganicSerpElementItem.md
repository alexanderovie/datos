[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataAppStoreSearchOrganicSerpElementItem

# Interface: IAppDataAppStoreSearchOrganicSerpElementItem

Defined in: main.ts:135723

## Extends

- [`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:135725

id of the app

***

### icon?

> `optional` **icon**: `string`

Defined in: main.ts:135729

URL to the app icon

***

### is\_free?

> `optional` **is\_free**: `boolean`

Defined in: main.ts:135733

indicates whether the app is free

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:24115

the alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`position`](IBaseAppDataSerpElementItem.md#position)

***

### price?

> `optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

Defined in: main.ts:135735

price of the app

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:24111

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`rank_absolute`](IBaseAppDataSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:24108

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`rank_group`](IBaseAppDataSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

Defined in: main.ts:24119

average rating of the app

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`rating`](IBaseAppDataSerpElementItem.md#rating)

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:135731

the total number of reviews of the app

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:24117

title of the app

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`title`](IBaseAppDataSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24105

type of element

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`type`](IBaseAppDataSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:135727

URL to the app page on App Store
