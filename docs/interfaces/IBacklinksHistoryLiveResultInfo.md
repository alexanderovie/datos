[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksHistoryLiveResultInfo

# Interface: IBacklinksHistoryLiveResultInfo

Defined in: main.ts:163185

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:163192

starting date of the time range
in the UTC format: “yyyy-mm-dd”
example:
2019-01-01

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:163197

ending date of the time range
in the UTC format: "yyyy-mm-dd"
example:
"2019-01-15"

***

### items?

> `optional` **items**: [`BacklinksHistoryLiveItem`](../classes/BacklinksHistoryLiveItem.md)[]

Defined in: main.ts:163203

contains historical backlink data for the specified domain
the data is provided month-by-month;
the metrics are aggregated according to the backlinks the specified domain had on the first day of each given month

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:163199

the number of results returned in the items array

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:163187

target from the POST array
