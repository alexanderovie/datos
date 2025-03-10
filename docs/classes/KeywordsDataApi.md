[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataApi

# Class: KeywordsDataApi

Defined in: main.ts:9957

## Constructors

### new KeywordsDataApi()

> **new KeywordsDataApi**(`baseUrl`?, `http`?): [`KeywordsDataApi`](KeywordsDataApi.md)

Defined in: main.ts:9962

#### Parameters

##### baseUrl?

`string`

##### http?

###### fetch

#### Returns

[`KeywordsDataApi`](KeywordsDataApi.md)

## Properties

### jsonParseReviver()

> `protected` **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

Defined in: main.ts:9960

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`any`

## Methods

### bingAudienceEstimationIndustries()

> **bingAudienceEstimationIndustries**(): `Promise`\<[`KeywordsDataBingAudienceEstimationIndustriesResponseInfo`](KeywordsDataBingAudienceEstimationIndustriesResponseInfo.md)\>

Defined in: main.ts:11711

#### Returns

`Promise`\<[`KeywordsDataBingAudienceEstimationIndustriesResponseInfo`](KeywordsDataBingAudienceEstimationIndustriesResponseInfo.md)\>

Successful operation

***

### bingAudienceEstimationJobFunctions()

> **bingAudienceEstimationJobFunctions**(): `Promise`\<[`KeywordsDataBingAudienceEstimationJobFunctionsResponseInfo`](KeywordsDataBingAudienceEstimationJobFunctionsResponseInfo.md)\>

Defined in: main.ts:11674

#### Returns

`Promise`\<[`KeywordsDataBingAudienceEstimationJobFunctionsResponseInfo`](KeywordsDataBingAudienceEstimationJobFunctionsResponseInfo.md)\>

Successful operation

***

### bingAudienceEstimationLive()

> **bingAudienceEstimationLive**(`body`): `Promise`\<[`KeywordsDataBingAudienceEstimationLiveResponseInfo`](KeywordsDataBingAudienceEstimationLiveResponseInfo.md)\>

Defined in: main.ts:11871

#### Parameters

##### body

[`KeywordsDataBingAudienceEstimationLiveRequestInfo`](KeywordsDataBingAudienceEstimationLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataBingAudienceEstimationLiveResponseInfo`](KeywordsDataBingAudienceEstimationLiveResponseInfo.md)\>

Successful operation

***

### bingAudienceEstimationTaskGet()

> **bingAudienceEstimationTaskGet**(`id`): `Promise`\<[`KeywordsDataBingAudienceEstimationTaskGetResponseInfo`](KeywordsDataBingAudienceEstimationTaskGetResponseInfo.md)\>

Defined in: main.ts:11830

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`KeywordsDataBingAudienceEstimationTaskGetResponseInfo`](KeywordsDataBingAudienceEstimationTaskGetResponseInfo.md)\>

Successful operation

***

### bingAudienceEstimationTaskPost()

> **bingAudienceEstimationTaskPost**(`body`): `Promise`\<[`KeywordsDataBingAudienceEstimationTaskPostResponseInfo`](KeywordsDataBingAudienceEstimationTaskPostResponseInfo.md)\>

Defined in: main.ts:11749

#### Parameters

##### body

[`KeywordsDataBingAudienceEstimationTaskPostRequestInfo`](KeywordsDataBingAudienceEstimationTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataBingAudienceEstimationTaskPostResponseInfo`](KeywordsDataBingAudienceEstimationTaskPostResponseInfo.md)\>

Successful operation

***

### bingAudienceEstimationTasksReady()

> **bingAudienceEstimationTasksReady**(): `Promise`\<[`KeywordsDataBingAudienceEstimationTasksReadyResponseInfo`](KeywordsDataBingAudienceEstimationTasksReadyResponseInfo.md)\>

Defined in: main.ts:11790

#### Returns

`Promise`\<[`KeywordsDataBingAudienceEstimationTasksReadyResponseInfo`](KeywordsDataBingAudienceEstimationTasksReadyResponseInfo.md)\>

Successful operation

***

### bingKeywordPerformanceLive()

> **bingKeywordPerformanceLive**(`body`): `Promise`\<[`KeywordsDataBingKeywordPerformanceLiveResponseInfo`](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md)\>

Defined in: main.ts:12400

#### Parameters

##### body

[`KeywordsDataBingKeywordPerformanceLiveRequestInfo`](KeywordsDataBingKeywordPerformanceLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceLiveResponseInfo`](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md)\>

Successful operation

***

### bingKeywordPerformanceTaskGet()

> **bingKeywordPerformanceTaskGet**(`id`): `Promise`\<[`KeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md)\>

Defined in: main.ts:12359

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md)\>

Successful operation

***

### bingKeywordPerformanceTaskPost()

> **bingKeywordPerformanceTaskPost**(`body`): `Promise`\<[`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)\>

Defined in: main.ts:12278

#### Parameters

##### body

[`KeywordsDataBingKeywordPerformanceTaskPostRequestInfo`](KeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)\>

Successful operation

***

### bingKeywordPerformanceTasksReady()

> **bingKeywordPerformanceTasksReady**(): `Promise`\<[`KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)\>

Defined in: main.ts:12319

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)\>

Successful operation

***

### bingKeywordsForKeywordsLive()

> **bingKeywordsForKeywordsLive**(`body`): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](KeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md)\>

Defined in: main.ts:12199

#### Parameters

##### body

[`KeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](KeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md)\>

Successful operation

***

### bingKeywordsForKeywordsTaskGet()

> **bingKeywordsForKeywordsTaskGet**(`id`): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md)\>

Defined in: main.ts:12158

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md)\>

Successful operation

***

### bingKeywordsForKeywordsTaskPost()

> **bingKeywordsForKeywordsTaskPost**(`body`): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)\>

Defined in: main.ts:12077

#### Parameters

##### body

[`KeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)\>

Successful operation

***

### bingKeywordsForKeywordsTasksReady()

> **bingKeywordsForKeywordsTasksReady**(): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md)\>

Defined in: main.ts:12118

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md)\>

Successful operation

***

### bingKeywordsForSiteLive()

> **bingKeywordsForSiteLive**(`body`): `Promise`\<[`KeywordsDataBingKeywordsForSiteLiveResponseInfo`](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md)\>

Defined in: main.ts:12035

#### Parameters

##### body

[`KeywordsDataBingKeywordsForSiteLiveRequestInfo`](KeywordsDataBingKeywordsForSiteLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteLiveResponseInfo`](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md)\>

Successful operation

***

### bingKeywordsForSiteTaskGet()

> **bingKeywordsForSiteTaskGet**(`id`): `Promise`\<[`KeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md)\>

Defined in: main.ts:11994

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md)\>

Successful operation

***

### bingKeywordsForSiteTaskPost()

> **bingKeywordsForSiteTaskPost**(`body`): `Promise`\<[`KeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](KeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md)\>

Defined in: main.ts:11913

#### Parameters

##### body

[`KeywordsDataBingKeywordsForSiteTaskPostRequestInfo`](KeywordsDataBingKeywordsForSiteTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](KeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md)\>

Successful operation

***

### bingKeywordsForSiteTasksReady()

> **bingKeywordsForSiteTasksReady**(): `Promise`\<[`KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)\>

Defined in: main.ts:11954

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)\>

Successful operation

***

### bingSearchVolumeHistoryLive()

> **bingSearchVolumeHistoryLive**(`body`): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](KeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md)\>

Defined in: main.ts:12601

#### Parameters

##### body

[`KeywordsDataBingSearchVolumeHistoryLiveRequestInfo`](KeywordsDataBingSearchVolumeHistoryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](KeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md)\>

Successful operation

***

### bingSearchVolumeHistoryTaskGet()

> **bingSearchVolumeHistoryTaskGet**(`id`): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md)\>

Defined in: main.ts:12560

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md)\>

Successful operation

***

### bingSearchVolumeHistoryTaskPost()

> **bingSearchVolumeHistoryTaskPost**(`body`): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md)\>

Defined in: main.ts:12479

#### Parameters

##### body

[`KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo`](KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md)\>

Successful operation

***

### bingSearchVolumeHistoryTasksReady()

> **bingSearchVolumeHistoryTasksReady**(): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md)\>

Defined in: main.ts:12520

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md)\>

Successful operation

***

### bingSearchVolumeLive()

> **bingSearchVolumeLive**(`body`): `Promise`\<[`KeywordsDataBingSearchVolumeLiveResponseInfo`](KeywordsDataBingSearchVolumeLiveResponseInfo.md)\>

Defined in: main.ts:11633

#### Parameters

##### body

[`KeywordsDataBingSearchVolumeLiveRequestInfo`](KeywordsDataBingSearchVolumeLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeLiveResponseInfo`](KeywordsDataBingSearchVolumeLiveResponseInfo.md)\>

Successful operation

***

### bingSearchVolumeTaskGet()

> **bingSearchVolumeTaskGet**(`id`): `Promise`\<[`KeywordsDataBingSearchVolumeTaskGetResponseInfo`](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md)\>

Defined in: main.ts:11592

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeTaskGetResponseInfo`](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md)\>

Successful operation

***

### bingSearchVolumeTaskPost()

> **bingSearchVolumeTaskPost**(`body`): `Promise`\<[`KeywordsDataBingSearchVolumeTaskPostResponseInfo`](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md)\>

Defined in: main.ts:11511

#### Parameters

##### body

[`KeywordsDataBingSearchVolumeTaskPostRequestInfo`](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeTaskPostResponseInfo`](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md)\>

Successful operation

***

### bingSearchVolumeTasksReady()

> **bingSearchVolumeTasksReady**(): `Promise`\<[`KeywordsDataBingSearchVolumeTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md)\>

Defined in: main.ts:11552

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md)\>

Successful operation

***

### clickstreamDataBulkSearchVolumeLive()

> **clickstreamDataBulkSearchVolumeLive**(`body`): `Promise`\<[`KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md)\>

Defined in: main.ts:12764

#### Parameters

##### body

[`KeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md)\>

Successful operation

***

### clickstreamDataDataforseoSearchVolumeLive()

> **clickstreamDataDataforseoSearchVolumeLive**(`body`): `Promise`\<[`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md)\>

Defined in: main.ts:12680

#### Parameters

##### body

[`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md)\>

Successful operation

***

### clickstreamDataGlobalSearchVolumeLive()

> **clickstreamDataGlobalSearchVolumeLive**(`body`): `Promise`\<[`KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md)\>

Defined in: main.ts:12722

#### Parameters

##### body

[`KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md)\>

Successful operation

***

### dataforseoTrendsDemographyLive()

> **dataforseoTrendsDemographyLive**(`body`): `Promise`\<[`KeywordsDataDataforseoTrendsDemographyLiveResponseInfo`](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md)\>

Defined in: main.ts:11353

#### Parameters

##### body

[`KeywordsDataDataforseoTrendsDemographyLiveRequestInfo`](KeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsDemographyLiveResponseInfo`](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md)\>

Successful operation

***

### dataforseoTrendsExploreLive()

> **dataforseoTrendsExploreLive**(`body`): `Promise`\<[`KeywordsDataDataforseoTrendsExploreLiveResponseInfo`](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md)\>

Defined in: main.ts:11269

#### Parameters

##### body

[`KeywordsDataDataforseoTrendsExploreLiveRequestInfo`](KeywordsDataDataforseoTrendsExploreLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsExploreLiveResponseInfo`](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md)\>

Successful operation

***

### dataforseoTrendsMergedDataLive()

> **dataforseoTrendsMergedDataLive**(`body`): `Promise`\<[`KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)\>

Defined in: main.ts:11395

#### Parameters

##### body

[`KeywordsDataDataforseoTrendsMergedDataLiveRequestInfo`](KeywordsDataDataforseoTrendsMergedDataLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)\>

Successful operation

***

### dataforseoTrendsSubregionInterestsLive()

> **dataforseoTrendsSubregionInterestsLive**(`body`): `Promise`\<[`KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md)\>

Defined in: main.ts:11311

#### Parameters

##### body

[`KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md)\>

Successful operation

***

### googleAdsAdTrafficByKeywordsLive()

> **googleAdsAdTrafficByKeywordsLive**(`body`): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md)\>

Defined in: main.ts:10825

#### Parameters

##### body

[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md)\>

Successful operation

***

### googleAdsAdTrafficByKeywordsTaskGet()

> **googleAdsAdTrafficByKeywordsTaskGet**(`id`): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md)\>

Defined in: main.ts:10784

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md)\>

Successful operation

***

### googleAdsAdTrafficByKeywordsTaskPost()

> **googleAdsAdTrafficByKeywordsTaskPost**(`body`): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md)\>

Defined in: main.ts:10703

#### Parameters

##### body

[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostRequestInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md)\>

Successful operation

***

### googleAdsAdTrafficByKeywordsTasksReady()

> **googleAdsAdTrafficByKeywordsTasksReady**(): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md)\>

Defined in: main.ts:10744

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md)\>

Successful operation

***

### googleAdsKeywordsForKeywordsLive()

> **googleAdsKeywordsForKeywordsLive**(`body`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo.md)\>

Defined in: main.ts:10661

#### Parameters

##### body

[`KeywordsDataGoogleAdsKeywordsForKeywordsLiveRequestInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo.md)\>

Successful operation

***

### googleAdsKeywordsForKeywordsTaskGet()

> **googleAdsKeywordsForKeywordsTaskGet**(`id`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)\>

Defined in: main.ts:10620

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)\>

Successful operation

***

### googleAdsKeywordsForKeywordsTaskPost()

> **googleAdsKeywordsForKeywordsTaskPost**(`body`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md)\>

Defined in: main.ts:10539

#### Parameters

##### body

[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md)\>

Successful operation

***

### googleAdsKeywordsForKeywordsTasksReady()

> **googleAdsKeywordsForKeywordsTasksReady**(): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md)\>

Defined in: main.ts:10580

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md)\>

Successful operation

***

### googleAdsKeywordsForSiteLive()

> **googleAdsKeywordsForSiteLive**(`body`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)\>

Defined in: main.ts:10497

#### Parameters

##### body

[`KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)\>

Successful operation

***

### googleAdsKeywordsForSiteTaskGet()

> **googleAdsKeywordsForSiteTaskGet**(`id`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo.md)\>

Defined in: main.ts:10456

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo.md)\>

Successful operation

***

### googleAdsKeywordsForSiteTaskPost()

> **googleAdsKeywordsForSiteTaskPost**(`body`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md)\>

Defined in: main.ts:10375

#### Parameters

##### body

[`KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md)\>

Successful operation

***

### googleAdsKeywordsForSiteTasksReady()

> **googleAdsKeywordsForSiteTasksReady**(): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md)\>

Defined in: main.ts:10416

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md)\>

Successful operation

***

### googleAdsSearchVolumeLive()

> **googleAdsSearchVolumeLive**(`body`): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)\>

Defined in: main.ts:10333

#### Parameters

##### body

[`KeywordsDataGoogleAdsSearchVolumeLiveRequestInfo`](KeywordsDataGoogleAdsSearchVolumeLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)\>

Successful operation

***

### googleAdsSearchVolumeTaskGet()

> **googleAdsSearchVolumeTaskGet**(`id`): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md)\>

Defined in: main.ts:10292

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md)\>

Successful operation

***

### googleAdsSearchVolumeTaskPost()

> **googleAdsSearchVolumeTaskPost**(`body`): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md)\>

Defined in: main.ts:10211

#### Parameters

##### body

[`KeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo`](KeywordsDataGoogleAdsSearchVolumeTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md)\>

Successful operation

***

### googleAdsSearchVolumeTasksReady()

> **googleAdsSearchVolumeTasksReady**(): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo.md)\>

Defined in: main.ts:10252

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo.md)\>

Successful operation

***

### googleAdsStatus()

> **googleAdsStatus**(): `Promise`\<[`KeywordsDataGoogleAdsStatusResponseInfo`](KeywordsDataGoogleAdsStatusResponseInfo.md)\>

Defined in: main.ts:10054

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsStatusResponseInfo`](KeywordsDataGoogleAdsStatusResponseInfo.md)\>

Successful operation

***

### googleTrendsCategories()

> **googleTrendsCategories**(): `Promise`\<[`KeywordsDataGoogleTrendsCategoriesResponseInfo`](KeywordsDataGoogleTrendsCategoriesResponseInfo.md)\>

Defined in: main.ts:10985

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsCategoriesResponseInfo`](KeywordsDataGoogleTrendsCategoriesResponseInfo.md)\>

Successful operation

***

### googleTrendsExploreLive()

> **googleTrendsExploreLive**(`body`): `Promise`\<[`KeywordsDataGoogleTrendsExploreLiveResponseInfo`](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md)\>

Defined in: main.ts:11145

#### Parameters

##### body

[`KeywordsDataGoogleTrendsExploreLiveRequestInfo`](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreLiveResponseInfo`](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md)\>

Successful operation

***

### googleTrendsExploreTaskGet()

> **googleTrendsExploreTaskGet**(`id`): `Promise`\<[`KeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md)\>

Defined in: main.ts:11104

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md)\>

Successful operation

***

### googleTrendsExploreTaskPost()

> **googleTrendsExploreTaskPost**(`body`): `Promise`\<[`KeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](KeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)\>

Defined in: main.ts:11023

#### Parameters

##### body

[`KeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](KeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)\>

Successful operation

***

### googleTrendsExploreTasksReady()

> **googleTrendsExploreTasksReady**(): `Promise`\<[`KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)\>

Defined in: main.ts:11064

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)\>

Successful operation

***

### keywordsDataBingKeywordPerformanceLocationsAndLanguages()

> **keywordsDataBingKeywordPerformanceLocationsAndLanguages**(): `Promise`\<[`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)\>

Defined in: main.ts:12240

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)\>

Successful operation

***

### keywordsDataBingLanguages()

> **keywordsDataBingLanguages**(): `Promise`\<[`KeywordsDataBingLanguagesResponseInfo`](KeywordsDataBingLanguagesResponseInfo.md)\>

Defined in: main.ts:11473

#### Returns

`Promise`\<[`KeywordsDataBingLanguagesResponseInfo`](KeywordsDataBingLanguagesResponseInfo.md)\>

Successful operation

***

### keywordsDataBingLocations()

> **keywordsDataBingLocations**(): `Promise`\<[`KeywordsDataBingLocationsResponseInfo`](KeywordsDataBingLocationsResponseInfo.md)\>

Defined in: main.ts:11436

#### Returns

`Promise`\<[`KeywordsDataBingLocationsResponseInfo`](KeywordsDataBingLocationsResponseInfo.md)\>

Successful operation

***

### keywordsDataBingSearchVolumeHistoryLocationsAndLanguages()

> **keywordsDataBingSearchVolumeHistoryLocationsAndLanguages**(): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md)\>

Defined in: main.ts:12441

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md)\>

Successful operation

***

### keywordsDataClickstreamDataLocationsAndLanguages()

> **keywordsDataClickstreamDataLocationsAndLanguages**(): `Promise`\<[`KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo`](KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo.md)\>

Defined in: main.ts:12642

#### Returns

`Promise`\<[`KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo`](KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo.md)\>

Successful operation

***

### keywordsDataDataforseoTrendsLocations()

> **keywordsDataDataforseoTrendsLocations**(): `Promise`\<[`KeywordsDataDataforseoTrendsLocationsResponseInfo`](KeywordsDataDataforseoTrendsLocationsResponseInfo.md)\>

Defined in: main.ts:11186

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsLocationsResponseInfo`](KeywordsDataDataforseoTrendsLocationsResponseInfo.md)\>

Successful operation

***

### keywordsDataDataforseoTrendsLocationsCountry()

> **keywordsDataDataforseoTrendsLocationsCountry**(`country`): `Promise`\<[`KeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](KeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md)\>

Defined in: main.ts:11228

#### Parameters

##### country

`string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](KeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md)\>

Successful operation

***

### keywordsDataErrors()

> **keywordsDataErrors**(`body`): `Promise`\<[`KeywordsDataErrorsResponseInfo`](KeywordsDataErrorsResponseInfo.md)\>

Defined in: main.ts:10013

#### Parameters

##### body

[`KeywordsDataErrorsRequestInfo`](KeywordsDataErrorsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataErrorsResponseInfo`](KeywordsDataErrorsResponseInfo.md)\>

Successful operation

***

### keywordsDataGoogleAdsLanguages()

> **keywordsDataGoogleAdsLanguages**(): `Promise`\<[`KeywordsDataGoogleAdsLanguagesResponseInfo`](KeywordsDataGoogleAdsLanguagesResponseInfo.md)\>

Defined in: main.ts:10173

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsLanguagesResponseInfo`](KeywordsDataGoogleAdsLanguagesResponseInfo.md)\>

Successful operation

***

### keywordsDataGoogleAdsLocations()

> **keywordsDataGoogleAdsLocations**(): `Promise`\<[`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)\>

Defined in: main.ts:10091

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)\>

Successful operation

***

### keywordsDataGoogleAdsLocationsCountry()

> **keywordsDataGoogleAdsLocationsCountry**(`country`): `Promise`\<[`KeywordsDataGoogleAdsLocationsCountryResponseInfo`](KeywordsDataGoogleAdsLocationsCountryResponseInfo.md)\>

Defined in: main.ts:10133

#### Parameters

##### country

`string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsLocationsCountryResponseInfo`](KeywordsDataGoogleAdsLocationsCountryResponseInfo.md)\>

Successful operation

***

### keywordsDataGoogleTrendsLanguages()

> **keywordsDataGoogleTrendsLanguages**(): `Promise`\<[`KeywordsDataGoogleTrendsLanguagesResponseInfo`](KeywordsDataGoogleTrendsLanguagesResponseInfo.md)\>

Defined in: main.ts:10948

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsLanguagesResponseInfo`](KeywordsDataGoogleTrendsLanguagesResponseInfo.md)\>

Successful operation

***

### keywordsDataGoogleTrendsLocations()

> **keywordsDataGoogleTrendsLocations**(): `Promise`\<[`KeywordsDataGoogleTrendsLocationsResponseInfo`](KeywordsDataGoogleTrendsLocationsResponseInfo.md)\>

Defined in: main.ts:10866

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsLocationsResponseInfo`](KeywordsDataGoogleTrendsLocationsResponseInfo.md)\>

Successful operation

***

### keywordsDataGoogleTrendsLocationsCountry()

> **keywordsDataGoogleTrendsLocationsCountry**(`country`): `Promise`\<[`KeywordsDataGoogleTrendsLocationsCountryResponseInfo`](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)\>

Defined in: main.ts:10908

#### Parameters

##### country

`string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsLocationsCountryResponseInfo`](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)\>

Successful operation

***

### keywordsDataIdList()

> **keywordsDataIdList**(`body`): `Promise`\<[`KeywordsDataIdListResponseInfo`](KeywordsDataIdListResponseInfo.md)\>

Defined in: main.ts:9971

#### Parameters

##### body

[`KeywordsDataIdListRequestInfo`](KeywordsDataIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`KeywordsDataIdListResponseInfo`](KeywordsDataIdListResponseInfo.md)\>

Successful operation

***

### processBingAudienceEstimationIndustries()

> `protected` **processBingAudienceEstimationIndustries**(`response`): `Promise`\<[`KeywordsDataBingAudienceEstimationIndustriesResponseInfo`](KeywordsDataBingAudienceEstimationIndustriesResponseInfo.md)\>

Defined in: main.ts:11727

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingAudienceEstimationIndustriesResponseInfo`](KeywordsDataBingAudienceEstimationIndustriesResponseInfo.md)\>

***

### processBingAudienceEstimationJobFunctions()

> `protected` **processBingAudienceEstimationJobFunctions**(`response`): `Promise`\<[`KeywordsDataBingAudienceEstimationJobFunctionsResponseInfo`](KeywordsDataBingAudienceEstimationJobFunctionsResponseInfo.md)\>

Defined in: main.ts:11690

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingAudienceEstimationJobFunctionsResponseInfo`](KeywordsDataBingAudienceEstimationJobFunctionsResponseInfo.md)\>

***

### processBingAudienceEstimationLive()

> `protected` **processBingAudienceEstimationLive**(`response`): `Promise`\<[`KeywordsDataBingAudienceEstimationLiveResponseInfo`](KeywordsDataBingAudienceEstimationLiveResponseInfo.md)\>

Defined in: main.ts:11891

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingAudienceEstimationLiveResponseInfo`](KeywordsDataBingAudienceEstimationLiveResponseInfo.md)\>

***

### processBingAudienceEstimationTaskGet()

> `protected` **processBingAudienceEstimationTaskGet**(`response`): `Promise`\<[`KeywordsDataBingAudienceEstimationTaskGetResponseInfo`](KeywordsDataBingAudienceEstimationTaskGetResponseInfo.md)\>

Defined in: main.ts:11849

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingAudienceEstimationTaskGetResponseInfo`](KeywordsDataBingAudienceEstimationTaskGetResponseInfo.md)\>

***

### processBingAudienceEstimationTaskPost()

> `protected` **processBingAudienceEstimationTaskPost**(`response`): `Promise`\<[`KeywordsDataBingAudienceEstimationTaskPostResponseInfo`](KeywordsDataBingAudienceEstimationTaskPostResponseInfo.md)\>

Defined in: main.ts:11769

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingAudienceEstimationTaskPostResponseInfo`](KeywordsDataBingAudienceEstimationTaskPostResponseInfo.md)\>

***

### processBingAudienceEstimationTasksReady()

> `protected` **processBingAudienceEstimationTasksReady**(`response`): `Promise`\<[`KeywordsDataBingAudienceEstimationTasksReadyResponseInfo`](KeywordsDataBingAudienceEstimationTasksReadyResponseInfo.md)\>

Defined in: main.ts:11806

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingAudienceEstimationTasksReadyResponseInfo`](KeywordsDataBingAudienceEstimationTasksReadyResponseInfo.md)\>

***

### processBingKeywordPerformanceLive()

> `protected` **processBingKeywordPerformanceLive**(`response`): `Promise`\<[`KeywordsDataBingKeywordPerformanceLiveResponseInfo`](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md)\>

Defined in: main.ts:12420

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceLiveResponseInfo`](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md)\>

***

### processBingKeywordPerformanceTaskGet()

> `protected` **processBingKeywordPerformanceTaskGet**(`response`): `Promise`\<[`KeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md)\>

Defined in: main.ts:12378

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md)\>

***

### processBingKeywordPerformanceTaskPost()

> `protected` **processBingKeywordPerformanceTaskPost**(`response`): `Promise`\<[`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)\>

Defined in: main.ts:12298

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)\>

***

### processBingKeywordPerformanceTasksReady()

> `protected` **processBingKeywordPerformanceTasksReady**(`response`): `Promise`\<[`KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)\>

Defined in: main.ts:12335

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)\>

***

### processBingKeywordsForKeywordsLive()

> `protected` **processBingKeywordsForKeywordsLive**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](KeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md)\>

Defined in: main.ts:12219

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](KeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md)\>

***

### processBingKeywordsForKeywordsTaskGet()

> `protected` **processBingKeywordsForKeywordsTaskGet**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md)\>

Defined in: main.ts:12177

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md)\>

***

### processBingKeywordsForKeywordsTaskPost()

> `protected` **processBingKeywordsForKeywordsTaskPost**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)\>

Defined in: main.ts:12097

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)\>

***

### processBingKeywordsForKeywordsTasksReady()

> `protected` **processBingKeywordsForKeywordsTasksReady**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md)\>

Defined in: main.ts:12134

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md)\>

***

### processBingKeywordsForSiteLive()

> `protected` **processBingKeywordsForSiteLive**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForSiteLiveResponseInfo`](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md)\>

Defined in: main.ts:12055

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteLiveResponseInfo`](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md)\>

***

### processBingKeywordsForSiteTaskGet()

> `protected` **processBingKeywordsForSiteTaskGet**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md)\>

Defined in: main.ts:12013

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md)\>

***

### processBingKeywordsForSiteTaskPost()

> `protected` **processBingKeywordsForSiteTaskPost**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](KeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md)\>

Defined in: main.ts:11933

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](KeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md)\>

***

### processBingKeywordsForSiteTasksReady()

> `protected` **processBingKeywordsForSiteTasksReady**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)\>

Defined in: main.ts:11970

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)\>

***

### processBingSearchVolumeHistoryLive()

> `protected` **processBingSearchVolumeHistoryLive**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](KeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md)\>

Defined in: main.ts:12621

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](KeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md)\>

***

### processBingSearchVolumeHistoryTaskGet()

> `protected` **processBingSearchVolumeHistoryTaskGet**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md)\>

Defined in: main.ts:12579

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md)\>

***

### processBingSearchVolumeHistoryTaskPost()

> `protected` **processBingSearchVolumeHistoryTaskPost**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md)\>

Defined in: main.ts:12499

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md)\>

***

### processBingSearchVolumeHistoryTasksReady()

> `protected` **processBingSearchVolumeHistoryTasksReady**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md)\>

Defined in: main.ts:12536

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md)\>

***

### processBingSearchVolumeLive()

> `protected` **processBingSearchVolumeLive**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeLiveResponseInfo`](KeywordsDataBingSearchVolumeLiveResponseInfo.md)\>

Defined in: main.ts:11653

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeLiveResponseInfo`](KeywordsDataBingSearchVolumeLiveResponseInfo.md)\>

***

### processBingSearchVolumeTaskGet()

> `protected` **processBingSearchVolumeTaskGet**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeTaskGetResponseInfo`](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md)\>

Defined in: main.ts:11611

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeTaskGetResponseInfo`](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md)\>

***

### processBingSearchVolumeTaskPost()

> `protected` **processBingSearchVolumeTaskPost**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeTaskPostResponseInfo`](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md)\>

Defined in: main.ts:11531

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeTaskPostResponseInfo`](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md)\>

***

### processBingSearchVolumeTasksReady()

> `protected` **processBingSearchVolumeTasksReady**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md)\>

Defined in: main.ts:11568

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md)\>

***

### processClickstreamDataBulkSearchVolumeLive()

> `protected` **processClickstreamDataBulkSearchVolumeLive**(`response`): `Promise`\<[`KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md)\>

Defined in: main.ts:12784

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md)\>

***

### processClickstreamDataDataforseoSearchVolumeLive()

> `protected` **processClickstreamDataDataforseoSearchVolumeLive**(`response`): `Promise`\<[`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md)\>

Defined in: main.ts:12700

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md)\>

***

### processClickstreamDataGlobalSearchVolumeLive()

> `protected` **processClickstreamDataGlobalSearchVolumeLive**(`response`): `Promise`\<[`KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md)\>

Defined in: main.ts:12742

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md)\>

***

### processDataforseoTrendsDemographyLive()

> `protected` **processDataforseoTrendsDemographyLive**(`response`): `Promise`\<[`KeywordsDataDataforseoTrendsDemographyLiveResponseInfo`](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md)\>

Defined in: main.ts:11373

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsDemographyLiveResponseInfo`](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md)\>

***

### processDataforseoTrendsExploreLive()

> `protected` **processDataforseoTrendsExploreLive**(`response`): `Promise`\<[`KeywordsDataDataforseoTrendsExploreLiveResponseInfo`](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md)\>

Defined in: main.ts:11289

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsExploreLiveResponseInfo`](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md)\>

***

### processDataforseoTrendsMergedDataLive()

> `protected` **processDataforseoTrendsMergedDataLive**(`response`): `Promise`\<[`KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)\>

Defined in: main.ts:11415

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)\>

***

### processDataforseoTrendsSubregionInterestsLive()

> `protected` **processDataforseoTrendsSubregionInterestsLive**(`response`): `Promise`\<[`KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md)\>

Defined in: main.ts:11331

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md)\>

***

### processGoogleAdsAdTrafficByKeywordsLive()

> `protected` **processGoogleAdsAdTrafficByKeywordsLive**(`response`): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md)\>

Defined in: main.ts:10845

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md)\>

***

### processGoogleAdsAdTrafficByKeywordsTaskGet()

> `protected` **processGoogleAdsAdTrafficByKeywordsTaskGet**(`response`): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md)\>

Defined in: main.ts:10803

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md)\>

***

### processGoogleAdsAdTrafficByKeywordsTaskPost()

> `protected` **processGoogleAdsAdTrafficByKeywordsTaskPost**(`response`): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md)\>

Defined in: main.ts:10723

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md)\>

***

### processGoogleAdsAdTrafficByKeywordsTasksReady()

> `protected` **processGoogleAdsAdTrafficByKeywordsTasksReady**(`response`): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md)\>

Defined in: main.ts:10760

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md)\>

***

### processGoogleAdsKeywordsForKeywordsLive()

> `protected` **processGoogleAdsKeywordsForKeywordsLive**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo.md)\>

Defined in: main.ts:10681

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo.md)\>

***

### processGoogleAdsKeywordsForKeywordsTaskGet()

> `protected` **processGoogleAdsKeywordsForKeywordsTaskGet**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)\>

Defined in: main.ts:10639

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)\>

***

### processGoogleAdsKeywordsForKeywordsTaskPost()

> `protected` **processGoogleAdsKeywordsForKeywordsTaskPost**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md)\>

Defined in: main.ts:10559

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md)\>

***

### processGoogleAdsKeywordsForKeywordsTasksReady()

> `protected` **processGoogleAdsKeywordsForKeywordsTasksReady**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md)\>

Defined in: main.ts:10596

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md)\>

***

### processGoogleAdsKeywordsForSiteLive()

> `protected` **processGoogleAdsKeywordsForSiteLive**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)\>

Defined in: main.ts:10517

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)\>

***

### processGoogleAdsKeywordsForSiteTaskGet()

> `protected` **processGoogleAdsKeywordsForSiteTaskGet**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo.md)\>

Defined in: main.ts:10475

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo.md)\>

***

### processGoogleAdsKeywordsForSiteTaskPost()

> `protected` **processGoogleAdsKeywordsForSiteTaskPost**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md)\>

Defined in: main.ts:10395

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md)\>

***

### processGoogleAdsKeywordsForSiteTasksReady()

> `protected` **processGoogleAdsKeywordsForSiteTasksReady**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md)\>

Defined in: main.ts:10432

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md)\>

***

### processGoogleAdsSearchVolumeLive()

> `protected` **processGoogleAdsSearchVolumeLive**(`response`): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)\>

Defined in: main.ts:10353

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)\>

***

### processGoogleAdsSearchVolumeTaskGet()

> `protected` **processGoogleAdsSearchVolumeTaskGet**(`response`): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md)\>

Defined in: main.ts:10311

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md)\>

***

### processGoogleAdsSearchVolumeTaskPost()

> `protected` **processGoogleAdsSearchVolumeTaskPost**(`response`): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md)\>

Defined in: main.ts:10231

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md)\>

***

### processGoogleAdsSearchVolumeTasksReady()

> `protected` **processGoogleAdsSearchVolumeTasksReady**(`response`): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo.md)\>

Defined in: main.ts:10268

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo.md)\>

***

### processGoogleAdsStatus()

> `protected` **processGoogleAdsStatus**(`response`): `Promise`\<[`KeywordsDataGoogleAdsStatusResponseInfo`](KeywordsDataGoogleAdsStatusResponseInfo.md)\>

Defined in: main.ts:10070

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsStatusResponseInfo`](KeywordsDataGoogleAdsStatusResponseInfo.md)\>

***

### processGoogleTrendsCategories()

> `protected` **processGoogleTrendsCategories**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsCategoriesResponseInfo`](KeywordsDataGoogleTrendsCategoriesResponseInfo.md)\>

Defined in: main.ts:11001

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsCategoriesResponseInfo`](KeywordsDataGoogleTrendsCategoriesResponseInfo.md)\>

***

### processGoogleTrendsExploreLive()

> `protected` **processGoogleTrendsExploreLive**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsExploreLiveResponseInfo`](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md)\>

Defined in: main.ts:11165

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreLiveResponseInfo`](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md)\>

***

### processGoogleTrendsExploreTaskGet()

> `protected` **processGoogleTrendsExploreTaskGet**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md)\>

Defined in: main.ts:11123

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md)\>

***

### processGoogleTrendsExploreTaskPost()

> `protected` **processGoogleTrendsExploreTaskPost**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](KeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)\>

Defined in: main.ts:11043

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](KeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)\>

***

### processGoogleTrendsExploreTasksReady()

> `protected` **processGoogleTrendsExploreTasksReady**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)\>

Defined in: main.ts:11080

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)\>

***

### processKeywordsDataBingKeywordPerformanceLocationsAndLanguages()

> `protected` **processKeywordsDataBingKeywordPerformanceLocationsAndLanguages**(`response`): `Promise`\<[`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)\>

Defined in: main.ts:12256

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)\>

***

### processKeywordsDataBingLanguages()

> `protected` **processKeywordsDataBingLanguages**(`response`): `Promise`\<[`KeywordsDataBingLanguagesResponseInfo`](KeywordsDataBingLanguagesResponseInfo.md)\>

Defined in: main.ts:11489

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingLanguagesResponseInfo`](KeywordsDataBingLanguagesResponseInfo.md)\>

***

### processKeywordsDataBingLocations()

> `protected` **processKeywordsDataBingLocations**(`response`): `Promise`\<[`KeywordsDataBingLocationsResponseInfo`](KeywordsDataBingLocationsResponseInfo.md)\>

Defined in: main.ts:11452

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingLocationsResponseInfo`](KeywordsDataBingLocationsResponseInfo.md)\>

***

### processKeywordsDataBingSearchVolumeHistoryLocationsAndLanguages()

> `protected` **processKeywordsDataBingSearchVolumeHistoryLocationsAndLanguages**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md)\>

Defined in: main.ts:12457

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md)\>

***

### processKeywordsDataClickstreamDataLocationsAndLanguages()

> `protected` **processKeywordsDataClickstreamDataLocationsAndLanguages**(`response`): `Promise`\<[`KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo`](KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo.md)\>

Defined in: main.ts:12658

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo`](KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo.md)\>

***

### processKeywordsDataDataforseoTrendsLocations()

> `protected` **processKeywordsDataDataforseoTrendsLocations**(`response`): `Promise`\<[`KeywordsDataDataforseoTrendsLocationsResponseInfo`](KeywordsDataDataforseoTrendsLocationsResponseInfo.md)\>

Defined in: main.ts:11202

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsLocationsResponseInfo`](KeywordsDataDataforseoTrendsLocationsResponseInfo.md)\>

***

### processKeywordsDataDataforseoTrendsLocationsCountry()

> `protected` **processKeywordsDataDataforseoTrendsLocationsCountry**(`response`): `Promise`\<[`KeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](KeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md)\>

Defined in: main.ts:11247

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](KeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md)\>

***

### processKeywordsDataErrors()

> `protected` **processKeywordsDataErrors**(`response`): `Promise`\<[`KeywordsDataErrorsResponseInfo`](KeywordsDataErrorsResponseInfo.md)\>

Defined in: main.ts:10033

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataErrorsResponseInfo`](KeywordsDataErrorsResponseInfo.md)\>

***

### processKeywordsDataGoogleAdsLanguages()

> `protected` **processKeywordsDataGoogleAdsLanguages**(`response`): `Promise`\<[`KeywordsDataGoogleAdsLanguagesResponseInfo`](KeywordsDataGoogleAdsLanguagesResponseInfo.md)\>

Defined in: main.ts:10189

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsLanguagesResponseInfo`](KeywordsDataGoogleAdsLanguagesResponseInfo.md)\>

***

### processKeywordsDataGoogleAdsLocations()

> `protected` **processKeywordsDataGoogleAdsLocations**(`response`): `Promise`\<[`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)\>

Defined in: main.ts:10107

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)\>

***

### processKeywordsDataGoogleAdsLocationsCountry()

> `protected` **processKeywordsDataGoogleAdsLocationsCountry**(`response`): `Promise`\<[`KeywordsDataGoogleAdsLocationsCountryResponseInfo`](KeywordsDataGoogleAdsLocationsCountryResponseInfo.md)\>

Defined in: main.ts:10152

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsLocationsCountryResponseInfo`](KeywordsDataGoogleAdsLocationsCountryResponseInfo.md)\>

***

### processKeywordsDataGoogleTrendsLanguages()

> `protected` **processKeywordsDataGoogleTrendsLanguages**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsLanguagesResponseInfo`](KeywordsDataGoogleTrendsLanguagesResponseInfo.md)\>

Defined in: main.ts:10964

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsLanguagesResponseInfo`](KeywordsDataGoogleTrendsLanguagesResponseInfo.md)\>

***

### processKeywordsDataGoogleTrendsLocations()

> `protected` **processKeywordsDataGoogleTrendsLocations**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsLocationsResponseInfo`](KeywordsDataGoogleTrendsLocationsResponseInfo.md)\>

Defined in: main.ts:10882

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsLocationsResponseInfo`](KeywordsDataGoogleTrendsLocationsResponseInfo.md)\>

***

### processKeywordsDataGoogleTrendsLocationsCountry()

> `protected` **processKeywordsDataGoogleTrendsLocationsCountry**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsLocationsCountryResponseInfo`](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)\>

Defined in: main.ts:10927

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsLocationsCountryResponseInfo`](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)\>

***

### processKeywordsDataIdList()

> `protected` **processKeywordsDataIdList**(`response`): `Promise`\<[`KeywordsDataIdListResponseInfo`](KeywordsDataIdListResponseInfo.md)\>

Defined in: main.ts:9991

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataIdListResponseInfo`](KeywordsDataIdListResponseInfo.md)\>
