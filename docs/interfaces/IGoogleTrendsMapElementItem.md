[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleTrendsMapElementItem

# Interface: IGoogleTrendsMapElementItem

Defined in: main.ts:146300

## Extends

- [`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### data?

> `optional` **data**: [`TrendsMapDataInfo`](../classes/TrendsMapDataInfo.md)[]

Defined in: main.ts:146302

Google Trends data from the corresponding item

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:23928

relevant keywords
the data included in the google_trends_graph element is based on the keywords listed in this array

#### Inherited from

[`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md).[`keywords`](IBaseGoogleTrendsItem.md#keywords)

***

### position?

> `optional` **position**: `number`

Defined in: main.ts:23923

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Inherited from

[`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md).[`position`](IBaseGoogleTrendsItem.md#position)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:23925

title of the element in Google Trends

#### Inherited from

[`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md).[`title`](IBaseGoogleTrendsItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23920

type of element

#### Inherited from

[`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md).[`type`](IBaseGoogleTrendsItem.md#type)
