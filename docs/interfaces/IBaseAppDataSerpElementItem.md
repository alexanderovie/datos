[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBaseAppDataSerpElementItem

# Interface: IBaseAppDataSerpElementItem

Defined in: main.ts:24103

## Extended by

- [`IAppDataGooglePlaySearchOrganicSerpElementItem`](IAppDataGooglePlaySearchOrganicSerpElementItem.md)
- [`IAppDataAppStoreSearchOrganicSerpElementItem`](IAppDataAppStoreSearchOrganicSerpElementItem.md)
- [`IAppDataGooglePlayInfoOrganicSerpElementItem`](IAppDataGooglePlayInfoOrganicSerpElementItem.md)
- [`IAppDataGooglePlayReviewsSearchSerpElementItem`](IAppDataGooglePlayReviewsSearchSerpElementItem.md)
- [`IAppDataAppStoreInfoOrganicSerpElementItem`](IAppDataAppStoreInfoOrganicSerpElementItem.md)
- [`IAppDataAppStoreReviewsSearchSerpElementItem`](IAppDataAppStoreReviewsSearchSerpElementItem.md)

## Properties

### position?

> `optional` **position**: `string`

Defined in: main.ts:24115

the alignment of the element in SERP
can take the following values:
left, right

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:24111

absolute rank in SERP
absolute position among all the elements in SERP

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:24108

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

Defined in: main.ts:24119

average rating of the app

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:24117

title of the app

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24105

type of element
