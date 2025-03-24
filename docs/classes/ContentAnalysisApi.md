[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentAnalysisApi

# Class: ContentAnalysisApi

Defined in: main.ts:15265

## Constructors

### Constructor

> **new ContentAnalysisApi**(`baseUrl`?, `http`?): `ContentAnalysisApi`

Defined in: main.ts:15270

#### Parameters

##### baseUrl?

`string`

##### http?

###### fetch

#### Returns

`ContentAnalysisApi`

## Properties

### jsonParseReviver()

> `protected` **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

Defined in: main.ts:15268

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`any`

## Methods

### categoryTrendsLive()

> **categoryTrendsLive**(`body`): `Promise`\<[`ContentAnalysisCategoryTrendsLiveResponseInfo`](ContentAnalysisCategoryTrendsLiveResponseInfo.md)\>

Defined in: main.ts:15679

#### Parameters

##### body

[`ContentAnalysisCategoryTrendsLiveRequestInfo`](ContentAnalysisCategoryTrendsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentAnalysisCategoryTrendsLiveResponseInfo`](ContentAnalysisCategoryTrendsLiveResponseInfo.md)\>

Successful operation

***

### contentAnalysisAvailableFilters()

> **contentAnalysisAvailableFilters**(): `Promise`\<[`ContentAnalysisAvailableFiltersResponseInfo`](ContentAnalysisAvailableFiltersResponseInfo.md)\>

Defined in: main.ts:15320

#### Returns

`Promise`\<[`ContentAnalysisAvailableFiltersResponseInfo`](ContentAnalysisAvailableFiltersResponseInfo.md)\>

Successful operation

***

### contentAnalysisCategories()

> **contentAnalysisCategories**(): `Promise`\<[`ContentAnalysisCategoriesResponseInfo`](ContentAnalysisCategoriesResponseInfo.md)\>

Defined in: main.ts:15431

#### Returns

`Promise`\<[`ContentAnalysisCategoriesResponseInfo`](ContentAnalysisCategoriesResponseInfo.md)\>

Successful operation

***

### contentAnalysisIdList()

> **contentAnalysisIdList**(`body`): `Promise`\<[`ContentAnalysisIdListResponseInfo`](ContentAnalysisIdListResponseInfo.md)\>

Defined in: main.ts:15279

#### Parameters

##### body

[`ContentAnalysisIdListRequestInfo`](ContentAnalysisIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentAnalysisIdListResponseInfo`](ContentAnalysisIdListResponseInfo.md)\>

Successful operation

***

### contentAnalysisLanguages()

> **contentAnalysisLanguages**(): `Promise`\<[`ContentAnalysisLanguagesResponseInfo`](ContentAnalysisLanguagesResponseInfo.md)\>

Defined in: main.ts:15394

#### Returns

`Promise`\<[`ContentAnalysisLanguagesResponseInfo`](ContentAnalysisLanguagesResponseInfo.md)\>

Successful operation

***

### contentAnalysisLocations()

> **contentAnalysisLocations**(): `Promise`\<[`ContentAnalysisLocationsResponseInfo`](ContentAnalysisLocationsResponseInfo.md)\>

Defined in: main.ts:15357

#### Returns

`Promise`\<[`ContentAnalysisLocationsResponseInfo`](ContentAnalysisLocationsResponseInfo.md)\>

Successful operation

***

### contentAnalysisSummaryLive()

> **contentAnalysisSummaryLive**(`body`): `Promise`\<[`ContentAnalysisSummaryLiveResponseInfo`](ContentAnalysisSummaryLiveResponseInfo.md)\>

Defined in: main.ts:15511

#### Parameters

##### body

[`ContentAnalysisSummaryLiveRequestInfo`](ContentAnalysisSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentAnalysisSummaryLiveResponseInfo`](ContentAnalysisSummaryLiveResponseInfo.md)\>

Successful operation

***

### phraseTrendsLive()

> **phraseTrendsLive**(`body`): `Promise`\<[`ContentAnalysisPhraseTrendsLiveResponseInfo`](ContentAnalysisPhraseTrendsLiveResponseInfo.md)\>

Defined in: main.ts:15637

#### Parameters

##### body

[`ContentAnalysisPhraseTrendsLiveRequestInfo`](ContentAnalysisPhraseTrendsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentAnalysisPhraseTrendsLiveResponseInfo`](ContentAnalysisPhraseTrendsLiveResponseInfo.md)\>

Successful operation

***

### processCategoryTrendsLive()

> `protected` **processCategoryTrendsLive**(`response`): `Promise`\<[`ContentAnalysisCategoryTrendsLiveResponseInfo`](ContentAnalysisCategoryTrendsLiveResponseInfo.md)\>

Defined in: main.ts:15699

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentAnalysisCategoryTrendsLiveResponseInfo`](ContentAnalysisCategoryTrendsLiveResponseInfo.md)\>

***

### processContentAnalysisAvailableFilters()

> `protected` **processContentAnalysisAvailableFilters**(`response`): `Promise`\<[`ContentAnalysisAvailableFiltersResponseInfo`](ContentAnalysisAvailableFiltersResponseInfo.md)\>

Defined in: main.ts:15336

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentAnalysisAvailableFiltersResponseInfo`](ContentAnalysisAvailableFiltersResponseInfo.md)\>

***

### processContentAnalysisCategories()

> `protected` **processContentAnalysisCategories**(`response`): `Promise`\<[`ContentAnalysisCategoriesResponseInfo`](ContentAnalysisCategoriesResponseInfo.md)\>

Defined in: main.ts:15447

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentAnalysisCategoriesResponseInfo`](ContentAnalysisCategoriesResponseInfo.md)\>

***

### processContentAnalysisIdList()

> `protected` **processContentAnalysisIdList**(`response`): `Promise`\<[`ContentAnalysisIdListResponseInfo`](ContentAnalysisIdListResponseInfo.md)\>

Defined in: main.ts:15299

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentAnalysisIdListResponseInfo`](ContentAnalysisIdListResponseInfo.md)\>

***

### processContentAnalysisLanguages()

> `protected` **processContentAnalysisLanguages**(`response`): `Promise`\<[`ContentAnalysisLanguagesResponseInfo`](ContentAnalysisLanguagesResponseInfo.md)\>

Defined in: main.ts:15410

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentAnalysisLanguagesResponseInfo`](ContentAnalysisLanguagesResponseInfo.md)\>

***

### processContentAnalysisLocations()

> `protected` **processContentAnalysisLocations**(`response`): `Promise`\<[`ContentAnalysisLocationsResponseInfo`](ContentAnalysisLocationsResponseInfo.md)\>

Defined in: main.ts:15373

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentAnalysisLocationsResponseInfo`](ContentAnalysisLocationsResponseInfo.md)\>

***

### processContentAnalysisSummaryLive()

> `protected` **processContentAnalysisSummaryLive**(`response`): `Promise`\<[`ContentAnalysisSummaryLiveResponseInfo`](ContentAnalysisSummaryLiveResponseInfo.md)\>

Defined in: main.ts:15531

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentAnalysisSummaryLiveResponseInfo`](ContentAnalysisSummaryLiveResponseInfo.md)\>

***

### processPhraseTrendsLive()

> `protected` **processPhraseTrendsLive**(`response`): `Promise`\<[`ContentAnalysisPhraseTrendsLiveResponseInfo`](ContentAnalysisPhraseTrendsLiveResponseInfo.md)\>

Defined in: main.ts:15657

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentAnalysisPhraseTrendsLiveResponseInfo`](ContentAnalysisPhraseTrendsLiveResponseInfo.md)\>

***

### processRatingDistributionLive()

> `protected` **processRatingDistributionLive**(`response`): `Promise`\<[`ContentAnalysisRatingDistributionLiveResponseInfo`](ContentAnalysisRatingDistributionLiveResponseInfo.md)\>

Defined in: main.ts:15615

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentAnalysisRatingDistributionLiveResponseInfo`](ContentAnalysisRatingDistributionLiveResponseInfo.md)\>

***

### processSearchLive()

> `protected` **processSearchLive**(`response`): `Promise`\<[`ContentAnalysisSearchLiveResponseInfo`](ContentAnalysisSearchLiveResponseInfo.md)\>

Defined in: main.ts:15489

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentAnalysisSearchLiveResponseInfo`](ContentAnalysisSearchLiveResponseInfo.md)\>

***

### processSentimentAnalysisLive()

> `protected` **processSentimentAnalysisLive**(`response`): `Promise`\<[`ContentAnalysisSentimentAnalysisLiveResponseInfo`](ContentAnalysisSentimentAnalysisLiveResponseInfo.md)\>

Defined in: main.ts:15573

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`ContentAnalysisSentimentAnalysisLiveResponseInfo`](ContentAnalysisSentimentAnalysisLiveResponseInfo.md)\>

***

### ratingDistributionLive()

> **ratingDistributionLive**(`body`): `Promise`\<[`ContentAnalysisRatingDistributionLiveResponseInfo`](ContentAnalysisRatingDistributionLiveResponseInfo.md)\>

Defined in: main.ts:15595

#### Parameters

##### body

[`ContentAnalysisRatingDistributionLiveRequestInfo`](ContentAnalysisRatingDistributionLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentAnalysisRatingDistributionLiveResponseInfo`](ContentAnalysisRatingDistributionLiveResponseInfo.md)\>

Successful operation

***

### searchLive()

> **searchLive**(`body`): `Promise`\<[`ContentAnalysisSearchLiveResponseInfo`](ContentAnalysisSearchLiveResponseInfo.md)\>

Defined in: main.ts:15469

#### Parameters

##### body

[`ContentAnalysisSearchLiveRequestInfo`](ContentAnalysisSearchLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentAnalysisSearchLiveResponseInfo`](ContentAnalysisSearchLiveResponseInfo.md)\>

Successful operation

***

### sentimentAnalysisLive()

> **sentimentAnalysisLive**(`body`): `Promise`\<[`ContentAnalysisSentimentAnalysisLiveResponseInfo`](ContentAnalysisSentimentAnalysisLiveResponseInfo.md)\>

Defined in: main.ts:15553

#### Parameters

##### body

[`ContentAnalysisSentimentAnalysisLiveRequestInfo`](ContentAnalysisSentimentAnalysisLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`ContentAnalysisSentimentAnalysisLiveResponseInfo`](ContentAnalysisSentimentAnalysisLiveResponseInfo.md)\>

Successful operation
