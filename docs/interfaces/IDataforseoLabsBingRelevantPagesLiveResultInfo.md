[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsBingRelevantPagesLiveResultInfo

# Interface: IDataforseoLabsBingRelevantPagesLiveResultInfo

Defined in: main.ts:131523

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsRelevantPagesLiveItem`](../classes/DataforseoLabsRelevantPagesLiveItem.md)[]

Defined in: main.ts:131539

relevant pages and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:131537

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:131533

language code in a POST array
if there is no data, then the value is null

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:131530

location code in a POST array
if there is no data, then the value is null

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:131525

search engine type

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:131527

target domain in a POST array

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:131535

total amount of results in our database relevant to your request
