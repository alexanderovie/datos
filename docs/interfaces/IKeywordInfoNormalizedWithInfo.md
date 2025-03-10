[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordInfoNormalizedWithInfo

# Interface: IKeywordInfoNormalizedWithInfo

Defined in: main.ts:103321

## Indexable

\[`key`: `string`\]: `any`

## Properties

### is\_normalized?

> `optional` **is\_normalized**: `boolean`

Defined in: main.ts:103329

keyword info is normalized
if true, values are normalized with Bing data

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

Defined in: main.ts:103324

date and time when the clickstream dataset was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”

***

### monthly\_searches?

> `optional` **monthly\_searches**: [`MonthlySearches`](../classes/MonthlySearches.md)[]

Defined in: main.ts:103332

monthly clickstream search volume rates
array of objects with clickstream search volume rates in a certain month of a year

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:103326

monthly average clickstream search volume rate
