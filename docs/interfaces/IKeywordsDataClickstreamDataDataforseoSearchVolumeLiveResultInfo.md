[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo

# Interface: IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo

Defined in: main.ts:159837

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`KeywordsDataClickstreamDataSearchVolumeLiveItem`](../classes/KeywordsDataClickstreamDataSearchVolumeLiveItem.md)[]

Defined in: main.ts:159853

array of keywords
contains keywords and their search volume rates

***

### items\_count?

> `optional` **items\_count**: `string`

Defined in: main.ts:159850

ithe number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:159845

language code in a POST array

Note:if the keyword in the POST array appears to be misspelled, data will be returned for the correctly spelled keyword;
we use the functionality of Google Ads API to check and validate the spelling of keywords, learn more by this link

***

### location\_code?

> `optional` **location\_code**: `string`

Defined in: main.ts:159840

location code in a POST array
if there is no data, then the value is null

***

### use\_clickstream?

> `optional` **use\_clickstream**: `boolean`

Defined in: main.ts:159848

indicates if the use_clickstream parameter is active
possible values: true, false
