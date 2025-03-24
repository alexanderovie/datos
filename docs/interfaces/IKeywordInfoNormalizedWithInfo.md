[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordInfoNormalizedWithInfo

# Interface: IKeywordInfoNormalizedWithInfo

Defined in: main.ts:26701

## Indexable

\[`key`: `string`\]: `any`

## Properties

### is\_normalized?

> `optional` **is\_normalized**: `string`

Defined in: main.ts:26711

keyword info is normalized
if true, values are normalized with Bing data

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

Defined in: main.ts:26706

date and time when the dataset was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

Defined in: main.ts:26714

monthly search volume rates
array of objects with search volume rates in a certain month of a year

***

### search\_volume?

> `optional` **search\_volume**: `string`

Defined in: main.ts:26708

current search volume rate of a keyword
