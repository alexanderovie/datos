[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksTimeseriesNewLostSummaryLiveResultInfo

# Interface: IBacklinksTimeseriesNewLostSummaryLiveResultInfo

Defined in: main.ts:172419

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:172426

starting date of the time range
in the UTC format: “yyyy-mm-dd”
example:
2019-01-01

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:172431

ending date of the time range
in the UTC format: "yyyy-mm-dd"
example:
"2019-01-15"

***

### group\_range?

> `optional` **group\_range**: `string`

Defined in: main.ts:172433

group_range from the POST array

***

### items?

> `optional` **items**: [`BacklinksTimeseriesNewLostSummaryLiveItem`](../classes/BacklinksTimeseriesNewLostSummaryLiveItem.md)[]

Defined in: main.ts:172437

contains relevant backlinks and referring domains data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:172435

the number of results returned in the items array

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:172421

target from a POST array
