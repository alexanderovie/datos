[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataApi

# Class: KeywordsDataApi

Defined in: main.ts:10163

## Constructors

### Constructor

> **new KeywordsDataApi**(`baseUrl`?, `http`?): `KeywordsDataApi`

Defined in: main.ts:10168

#### Parameters

##### baseUrl?

`string`

##### http?

###### fetch

#### Returns

`KeywordsDataApi`

## Properties

### jsonParseReviver()

> `protected` **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

Defined in: main.ts:10166

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

Defined in: main.ts:11917

#### Returns

`Promise`\<[`KeywordsDataBingAudienceEstimationIndustriesResponseInfo`](KeywordsDataBingAudienceEstimationIndustriesResponseInfo.md)\>

Successful operation

***

### bingAudienceEstimationJobFunctions()

> **bingAudienceEstimationJobFunctions**(): `Promise`\<[`KeywordsDataBingAudienceEstimationJobFunctionsResponseInfo`](KeywordsDataBingAudienceEstimationJobFunctionsResponseInfo.md)\>

Defined in: main.ts:11880

#### Returns

`Promise`\<[`KeywordsDataBingAudienceEstimationJobFunctionsResponseInfo`](KeywordsDataBingAudienceEstimationJobFunctionsResponseInfo.md)\>

Successful operation

***

### bingAudienceEstimationLive()

> **bingAudienceEstimationLive**(`body`): `Promise`\<[`KeywordsDataBingAudienceEstimationLiveResponseInfo`](KeywordsDataBingAudienceEstimationLiveResponseInfo.md)\>

Defined in: main.ts:12077

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

Defined in: main.ts:12036

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

Defined in: main.ts:11955

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

Defined in: main.ts:11996

#### Returns

`Promise`\<[`KeywordsDataBingAudienceEstimationTasksReadyResponseInfo`](KeywordsDataBingAudienceEstimationTasksReadyResponseInfo.md)\>

Successful operation

***

### bingKeywordPerformanceLive()

> **bingKeywordPerformanceLive**(`body`): `Promise`\<[`KeywordsDataBingKeywordPerformanceLiveResponseInfo`](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md)\>

Defined in: main.ts:12606

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

Defined in: main.ts:12565

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

Defined in: main.ts:12484

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

Defined in: main.ts:12525

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)\>

Successful operation

***

### bingKeywordsForKeywordsLive()

> **bingKeywordsForKeywordsLive**(`body`): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](KeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md)\>

Defined in: main.ts:12405

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

Defined in: main.ts:12364

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

Defined in: main.ts:12283

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

Defined in: main.ts:12324

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md)\>

Successful operation

***

### bingKeywordsForSiteLive()

> **bingKeywordsForSiteLive**(`body`): `Promise`\<[`KeywordsDataBingKeywordsForSiteLiveResponseInfo`](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md)\>

Defined in: main.ts:12241

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

Defined in: main.ts:12200

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

Defined in: main.ts:12119

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

Defined in: main.ts:12160

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)\>

Successful operation

***

### bingSearchVolumeHistoryLive()

> **bingSearchVolumeHistoryLive**(`body`): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](KeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md)\>

Defined in: main.ts:12807

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

Defined in: main.ts:12766

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

Defined in: main.ts:12685

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

Defined in: main.ts:12726

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md)\>

Successful operation

***

### bingSearchVolumeLive()

> **bingSearchVolumeLive**(`body`): `Promise`\<[`KeywordsDataBingSearchVolumeLiveResponseInfo`](KeywordsDataBingSearchVolumeLiveResponseInfo.md)\>

Defined in: main.ts:11839

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

Defined in: main.ts:11798

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

Defined in: main.ts:11717

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

Defined in: main.ts:11758

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md)\>

Successful operation

***

### clickstreamDataBulkSearchVolumeLive()

> **clickstreamDataBulkSearchVolumeLive**(`body`): `Promise`\<[`KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md)\>

Defined in: main.ts:12970

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

Defined in: main.ts:12886

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

Defined in: main.ts:12928

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

Defined in: main.ts:11559

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

Defined in: main.ts:11475

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

Defined in: main.ts:11601

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

Defined in: main.ts:11517

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

Defined in: main.ts:11031

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

Defined in: main.ts:10990

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

Defined in: main.ts:10909

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

Defined in: main.ts:10950

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md)\>

Successful operation

***

### googleAdsKeywordsForKeywordsLive()

> **googleAdsKeywordsForKeywordsLive**(`body`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo.md)\>

Defined in: main.ts:10867

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

Defined in: main.ts:10826

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

Defined in: main.ts:10745

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

Defined in: main.ts:10786

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md)\>

Successful operation

***

### googleAdsKeywordsForSiteLive()

> **googleAdsKeywordsForSiteLive**(`body`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)\>

Defined in: main.ts:10703

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

Defined in: main.ts:10662

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

Defined in: main.ts:10581

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

Defined in: main.ts:10622

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md)\>

Successful operation

***

### googleAdsSearchVolumeLive()

> **googleAdsSearchVolumeLive**(`body`): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)\>

Defined in: main.ts:10539

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

Defined in: main.ts:10498

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

Defined in: main.ts:10417

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

Defined in: main.ts:10458

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo.md)\>

Successful operation

***

### googleAdsStatus()

> **googleAdsStatus**(): `Promise`\<[`KeywordsDataGoogleAdsStatusResponseInfo`](KeywordsDataGoogleAdsStatusResponseInfo.md)\>

Defined in: main.ts:10260

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsStatusResponseInfo`](KeywordsDataGoogleAdsStatusResponseInfo.md)\>

Successful operation

***

### googleTrendsCategories()

> **googleTrendsCategories**(): `Promise`\<[`KeywordsDataGoogleTrendsCategoriesResponseInfo`](KeywordsDataGoogleTrendsCategoriesResponseInfo.md)\>

Defined in: main.ts:11191

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsCategoriesResponseInfo`](KeywordsDataGoogleTrendsCategoriesResponseInfo.md)\>

Successful operation

***

### googleTrendsExploreLive()

> **googleTrendsExploreLive**(`body`): `Promise`\<[`KeywordsDataGoogleTrendsExploreLiveResponseInfo`](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md)\>

Defined in: main.ts:11351

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

Defined in: main.ts:11310

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

Defined in: main.ts:11229

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

Defined in: main.ts:11270

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)\>

Successful operation

***

### keywordsDataBingKeywordPerformanceLocationsAndLanguages()

> **keywordsDataBingKeywordPerformanceLocationsAndLanguages**(): `Promise`\<[`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)\>

Defined in: main.ts:12446

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)\>

Successful operation

***

### keywordsDataBingLanguages()

> **keywordsDataBingLanguages**(): `Promise`\<[`KeywordsDataBingLanguagesResponseInfo`](KeywordsDataBingLanguagesResponseInfo.md)\>

Defined in: main.ts:11679

#### Returns

`Promise`\<[`KeywordsDataBingLanguagesResponseInfo`](KeywordsDataBingLanguagesResponseInfo.md)\>

Successful operation

***

### keywordsDataBingLocations()

> **keywordsDataBingLocations**(): `Promise`\<[`KeywordsDataBingLocationsResponseInfo`](KeywordsDataBingLocationsResponseInfo.md)\>

Defined in: main.ts:11642

#### Returns

`Promise`\<[`KeywordsDataBingLocationsResponseInfo`](KeywordsDataBingLocationsResponseInfo.md)\>

Successful operation

***

### keywordsDataBingSearchVolumeHistoryLocationsAndLanguages()

> **keywordsDataBingSearchVolumeHistoryLocationsAndLanguages**(): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md)\>

Defined in: main.ts:12647

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md)\>

Successful operation

***

### keywordsDataClickstreamDataLocationsAndLanguages()

> **keywordsDataClickstreamDataLocationsAndLanguages**(): `Promise`\<[`KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo`](KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo.md)\>

Defined in: main.ts:12848

#### Returns

`Promise`\<[`KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo`](KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo.md)\>

Successful operation

***

### keywordsDataDataforseoTrendsLocations()

> **keywordsDataDataforseoTrendsLocations**(): `Promise`\<[`KeywordsDataDataforseoTrendsLocationsResponseInfo`](KeywordsDataDataforseoTrendsLocationsResponseInfo.md)\>

Defined in: main.ts:11392

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsLocationsResponseInfo`](KeywordsDataDataforseoTrendsLocationsResponseInfo.md)\>

Successful operation

***

### keywordsDataDataforseoTrendsLocationsCountry()

> **keywordsDataDataforseoTrendsLocationsCountry**(`country`): `Promise`\<[`KeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](KeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md)\>

Defined in: main.ts:11434

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

Defined in: main.ts:10219

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

Defined in: main.ts:10379

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsLanguagesResponseInfo`](KeywordsDataGoogleAdsLanguagesResponseInfo.md)\>

Successful operation

***

### keywordsDataGoogleAdsLocations()

> **keywordsDataGoogleAdsLocations**(): `Promise`\<[`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)\>

Defined in: main.ts:10297

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)\>

Successful operation

***

### keywordsDataGoogleAdsLocationsCountry()

> **keywordsDataGoogleAdsLocationsCountry**(`country`): `Promise`\<[`KeywordsDataGoogleAdsLocationsCountryResponseInfo`](KeywordsDataGoogleAdsLocationsCountryResponseInfo.md)\>

Defined in: main.ts:10339

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

Defined in: main.ts:11154

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsLanguagesResponseInfo`](KeywordsDataGoogleTrendsLanguagesResponseInfo.md)\>

Successful operation

***

### keywordsDataGoogleTrendsLocations()

> **keywordsDataGoogleTrendsLocations**(): `Promise`\<[`KeywordsDataGoogleTrendsLocationsResponseInfo`](KeywordsDataGoogleTrendsLocationsResponseInfo.md)\>

Defined in: main.ts:11072

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsLocationsResponseInfo`](KeywordsDataGoogleTrendsLocationsResponseInfo.md)\>

Successful operation

***

### keywordsDataGoogleTrendsLocationsCountry()

> **keywordsDataGoogleTrendsLocationsCountry**(`country`): `Promise`\<[`KeywordsDataGoogleTrendsLocationsCountryResponseInfo`](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)\>

Defined in: main.ts:11114

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

Defined in: main.ts:10177

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

Defined in: main.ts:11933

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingAudienceEstimationIndustriesResponseInfo`](KeywordsDataBingAudienceEstimationIndustriesResponseInfo.md)\>

***

### processBingAudienceEstimationJobFunctions()

> `protected` **processBingAudienceEstimationJobFunctions**(`response`): `Promise`\<[`KeywordsDataBingAudienceEstimationJobFunctionsResponseInfo`](KeywordsDataBingAudienceEstimationJobFunctionsResponseInfo.md)\>

Defined in: main.ts:11896

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingAudienceEstimationJobFunctionsResponseInfo`](KeywordsDataBingAudienceEstimationJobFunctionsResponseInfo.md)\>

***

### processBingAudienceEstimationLive()

> `protected` **processBingAudienceEstimationLive**(`response`): `Promise`\<[`KeywordsDataBingAudienceEstimationLiveResponseInfo`](KeywordsDataBingAudienceEstimationLiveResponseInfo.md)\>

Defined in: main.ts:12097

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingAudienceEstimationLiveResponseInfo`](KeywordsDataBingAudienceEstimationLiveResponseInfo.md)\>

***

### processBingAudienceEstimationTaskGet()

> `protected` **processBingAudienceEstimationTaskGet**(`response`): `Promise`\<[`KeywordsDataBingAudienceEstimationTaskGetResponseInfo`](KeywordsDataBingAudienceEstimationTaskGetResponseInfo.md)\>

Defined in: main.ts:12055

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingAudienceEstimationTaskGetResponseInfo`](KeywordsDataBingAudienceEstimationTaskGetResponseInfo.md)\>

***

### processBingAudienceEstimationTaskPost()

> `protected` **processBingAudienceEstimationTaskPost**(`response`): `Promise`\<[`KeywordsDataBingAudienceEstimationTaskPostResponseInfo`](KeywordsDataBingAudienceEstimationTaskPostResponseInfo.md)\>

Defined in: main.ts:11975

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingAudienceEstimationTaskPostResponseInfo`](KeywordsDataBingAudienceEstimationTaskPostResponseInfo.md)\>

***

### processBingAudienceEstimationTasksReady()

> `protected` **processBingAudienceEstimationTasksReady**(`response`): `Promise`\<[`KeywordsDataBingAudienceEstimationTasksReadyResponseInfo`](KeywordsDataBingAudienceEstimationTasksReadyResponseInfo.md)\>

Defined in: main.ts:12012

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingAudienceEstimationTasksReadyResponseInfo`](KeywordsDataBingAudienceEstimationTasksReadyResponseInfo.md)\>

***

### processBingKeywordPerformanceLive()

> `protected` **processBingKeywordPerformanceLive**(`response`): `Promise`\<[`KeywordsDataBingKeywordPerformanceLiveResponseInfo`](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md)\>

Defined in: main.ts:12626

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceLiveResponseInfo`](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md)\>

***

### processBingKeywordPerformanceTaskGet()

> `protected` **processBingKeywordPerformanceTaskGet**(`response`): `Promise`\<[`KeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md)\>

Defined in: main.ts:12584

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md)\>

***

### processBingKeywordPerformanceTaskPost()

> `protected` **processBingKeywordPerformanceTaskPost**(`response`): `Promise`\<[`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)\>

Defined in: main.ts:12504

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)\>

***

### processBingKeywordPerformanceTasksReady()

> `protected` **processBingKeywordPerformanceTasksReady**(`response`): `Promise`\<[`KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)\>

Defined in: main.ts:12541

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)\>

***

### processBingKeywordsForKeywordsLive()

> `protected` **processBingKeywordsForKeywordsLive**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](KeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md)\>

Defined in: main.ts:12425

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](KeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md)\>

***

### processBingKeywordsForKeywordsTaskGet()

> `protected` **processBingKeywordsForKeywordsTaskGet**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md)\>

Defined in: main.ts:12383

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md)\>

***

### processBingKeywordsForKeywordsTaskPost()

> `protected` **processBingKeywordsForKeywordsTaskPost**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)\>

Defined in: main.ts:12303

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)\>

***

### processBingKeywordsForKeywordsTasksReady()

> `protected` **processBingKeywordsForKeywordsTasksReady**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md)\>

Defined in: main.ts:12340

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md)\>

***

### processBingKeywordsForSiteLive()

> `protected` **processBingKeywordsForSiteLive**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForSiteLiveResponseInfo`](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md)\>

Defined in: main.ts:12261

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteLiveResponseInfo`](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md)\>

***

### processBingKeywordsForSiteTaskGet()

> `protected` **processBingKeywordsForSiteTaskGet**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md)\>

Defined in: main.ts:12219

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md)\>

***

### processBingKeywordsForSiteTaskPost()

> `protected` **processBingKeywordsForSiteTaskPost**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](KeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md)\>

Defined in: main.ts:12139

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](KeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md)\>

***

### processBingKeywordsForSiteTasksReady()

> `protected` **processBingKeywordsForSiteTasksReady**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)\>

Defined in: main.ts:12176

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)\>

***

### processBingSearchVolumeHistoryLive()

> `protected` **processBingSearchVolumeHistoryLive**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](KeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md)\>

Defined in: main.ts:12827

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryLiveResponseInfo`](KeywordsDataBingSearchVolumeHistoryLiveResponseInfo.md)\>

***

### processBingSearchVolumeHistoryTaskGet()

> `protected` **processBingSearchVolumeHistoryTaskGet**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md)\>

Defined in: main.ts:12785

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskGetResponseInfo.md)\>

***

### processBingSearchVolumeHistoryTaskPost()

> `protected` **processBingSearchVolumeHistoryTaskPost**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md)\>

Defined in: main.ts:12705

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo`](KeywordsDataBingSearchVolumeHistoryTaskPostResponseInfo.md)\>

***

### processBingSearchVolumeHistoryTasksReady()

> `protected` **processBingSearchVolumeHistoryTasksReady**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md)\>

Defined in: main.ts:12742

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeHistoryTasksReadyResponseInfo.md)\>

***

### processBingSearchVolumeLive()

> `protected` **processBingSearchVolumeLive**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeLiveResponseInfo`](KeywordsDataBingSearchVolumeLiveResponseInfo.md)\>

Defined in: main.ts:11859

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeLiveResponseInfo`](KeywordsDataBingSearchVolumeLiveResponseInfo.md)\>

***

### processBingSearchVolumeTaskGet()

> `protected` **processBingSearchVolumeTaskGet**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeTaskGetResponseInfo`](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md)\>

Defined in: main.ts:11817

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeTaskGetResponseInfo`](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md)\>

***

### processBingSearchVolumeTaskPost()

> `protected` **processBingSearchVolumeTaskPost**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeTaskPostResponseInfo`](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md)\>

Defined in: main.ts:11737

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeTaskPostResponseInfo`](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md)\>

***

### processBingSearchVolumeTasksReady()

> `protected` **processBingSearchVolumeTasksReady**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md)\>

Defined in: main.ts:11774

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md)\>

***

### processClickstreamDataBulkSearchVolumeLive()

> `protected` **processClickstreamDataBulkSearchVolumeLive**(`response`): `Promise`\<[`KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md)\>

Defined in: main.ts:12990

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataBulkSearchVolumeLiveResponseInfo.md)\>

***

### processClickstreamDataDataforseoSearchVolumeLive()

> `protected` **processClickstreamDataDataforseoSearchVolumeLive**(`response`): `Promise`\<[`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md)\>

Defined in: main.ts:12906

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResponseInfo.md)\>

***

### processClickstreamDataGlobalSearchVolumeLive()

> `protected` **processClickstreamDataGlobalSearchVolumeLive**(`response`): `Promise`\<[`KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md)\>

Defined in: main.ts:12948

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo`](KeywordsDataClickstreamDataGlobalSearchVolumeLiveResponseInfo.md)\>

***

### processDataforseoTrendsDemographyLive()

> `protected` **processDataforseoTrendsDemographyLive**(`response`): `Promise`\<[`KeywordsDataDataforseoTrendsDemographyLiveResponseInfo`](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md)\>

Defined in: main.ts:11579

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsDemographyLiveResponseInfo`](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md)\>

***

### processDataforseoTrendsExploreLive()

> `protected` **processDataforseoTrendsExploreLive**(`response`): `Promise`\<[`KeywordsDataDataforseoTrendsExploreLiveResponseInfo`](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md)\>

Defined in: main.ts:11495

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsExploreLiveResponseInfo`](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md)\>

***

### processDataforseoTrendsMergedDataLive()

> `protected` **processDataforseoTrendsMergedDataLive**(`response`): `Promise`\<[`KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)\>

Defined in: main.ts:11621

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo.md)\>

***

### processDataforseoTrendsSubregionInterestsLive()

> `protected` **processDataforseoTrendsSubregionInterestsLive**(`response`): `Promise`\<[`KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md)\>

Defined in: main.ts:11537

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResponseInfo.md)\>

***

### processGoogleAdsAdTrafficByKeywordsLive()

> `protected` **processGoogleAdsAdTrafficByKeywordsLive**(`response`): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md)\>

Defined in: main.ts:11051

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md)\>

***

### processGoogleAdsAdTrafficByKeywordsTaskGet()

> `protected` **processGoogleAdsAdTrafficByKeywordsTaskGet**(`response`): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md)\>

Defined in: main.ts:11009

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md)\>

***

### processGoogleAdsAdTrafficByKeywordsTaskPost()

> `protected` **processGoogleAdsAdTrafficByKeywordsTaskPost**(`response`): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md)\>

Defined in: main.ts:10929

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md)\>

***

### processGoogleAdsAdTrafficByKeywordsTasksReady()

> `protected` **processGoogleAdsAdTrafficByKeywordsTasksReady**(`response`): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md)\>

Defined in: main.ts:10966

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md)\>

***

### processGoogleAdsKeywordsForKeywordsLive()

> `protected` **processGoogleAdsKeywordsForKeywordsLive**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo.md)\>

Defined in: main.ts:10887

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo.md)\>

***

### processGoogleAdsKeywordsForKeywordsTaskGet()

> `protected` **processGoogleAdsKeywordsForKeywordsTaskGet**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)\>

Defined in: main.ts:10845

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)\>

***

### processGoogleAdsKeywordsForKeywordsTaskPost()

> `protected` **processGoogleAdsKeywordsForKeywordsTaskPost**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md)\>

Defined in: main.ts:10765

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md)\>

***

### processGoogleAdsKeywordsForKeywordsTasksReady()

> `protected` **processGoogleAdsKeywordsForKeywordsTasksReady**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md)\>

Defined in: main.ts:10802

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md)\>

***

### processGoogleAdsKeywordsForSiteLive()

> `protected` **processGoogleAdsKeywordsForSiteLive**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)\>

Defined in: main.ts:10723

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)\>

***

### processGoogleAdsKeywordsForSiteTaskGet()

> `protected` **processGoogleAdsKeywordsForSiteTaskGet**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo.md)\>

Defined in: main.ts:10681

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo.md)\>

***

### processGoogleAdsKeywordsForSiteTaskPost()

> `protected` **processGoogleAdsKeywordsForSiteTaskPost**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md)\>

Defined in: main.ts:10601

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md)\>

***

### processGoogleAdsKeywordsForSiteTasksReady()

> `protected` **processGoogleAdsKeywordsForSiteTasksReady**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md)\>

Defined in: main.ts:10638

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md)\>

***

### processGoogleAdsSearchVolumeLive()

> `protected` **processGoogleAdsSearchVolumeLive**(`response`): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)\>

Defined in: main.ts:10559

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)\>

***

### processGoogleAdsSearchVolumeTaskGet()

> `protected` **processGoogleAdsSearchVolumeTaskGet**(`response`): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md)\>

Defined in: main.ts:10517

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md)\>

***

### processGoogleAdsSearchVolumeTaskPost()

> `protected` **processGoogleAdsSearchVolumeTaskPost**(`response`): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md)\>

Defined in: main.ts:10437

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md)\>

***

### processGoogleAdsSearchVolumeTasksReady()

> `protected` **processGoogleAdsSearchVolumeTasksReady**(`response`): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo.md)\>

Defined in: main.ts:10474

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo.md)\>

***

### processGoogleAdsStatus()

> `protected` **processGoogleAdsStatus**(`response`): `Promise`\<[`KeywordsDataGoogleAdsStatusResponseInfo`](KeywordsDataGoogleAdsStatusResponseInfo.md)\>

Defined in: main.ts:10276

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsStatusResponseInfo`](KeywordsDataGoogleAdsStatusResponseInfo.md)\>

***

### processGoogleTrendsCategories()

> `protected` **processGoogleTrendsCategories**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsCategoriesResponseInfo`](KeywordsDataGoogleTrendsCategoriesResponseInfo.md)\>

Defined in: main.ts:11207

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsCategoriesResponseInfo`](KeywordsDataGoogleTrendsCategoriesResponseInfo.md)\>

***

### processGoogleTrendsExploreLive()

> `protected` **processGoogleTrendsExploreLive**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsExploreLiveResponseInfo`](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md)\>

Defined in: main.ts:11371

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreLiveResponseInfo`](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md)\>

***

### processGoogleTrendsExploreTaskGet()

> `protected` **processGoogleTrendsExploreTaskGet**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md)\>

Defined in: main.ts:11329

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md)\>

***

### processGoogleTrendsExploreTaskPost()

> `protected` **processGoogleTrendsExploreTaskPost**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](KeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)\>

Defined in: main.ts:11249

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](KeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)\>

***

### processGoogleTrendsExploreTasksReady()

> `protected` **processGoogleTrendsExploreTasksReady**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)\>

Defined in: main.ts:11286

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)\>

***

### processKeywordsDataBingKeywordPerformanceLocationsAndLanguages()

> `protected` **processKeywordsDataBingKeywordPerformanceLocationsAndLanguages**(`response`): `Promise`\<[`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)\>

Defined in: main.ts:12462

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)\>

***

### processKeywordsDataBingLanguages()

> `protected` **processKeywordsDataBingLanguages**(`response`): `Promise`\<[`KeywordsDataBingLanguagesResponseInfo`](KeywordsDataBingLanguagesResponseInfo.md)\>

Defined in: main.ts:11695

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingLanguagesResponseInfo`](KeywordsDataBingLanguagesResponseInfo.md)\>

***

### processKeywordsDataBingLocations()

> `protected` **processKeywordsDataBingLocations**(`response`): `Promise`\<[`KeywordsDataBingLocationsResponseInfo`](KeywordsDataBingLocationsResponseInfo.md)\>

Defined in: main.ts:11658

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingLocationsResponseInfo`](KeywordsDataBingLocationsResponseInfo.md)\>

***

### processKeywordsDataBingSearchVolumeHistoryLocationsAndLanguages()

> `protected` **processKeywordsDataBingSearchVolumeHistoryLocationsAndLanguages**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md)\>

Defined in: main.ts:12663

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResponseInfo.md)\>

***

### processKeywordsDataClickstreamDataLocationsAndLanguages()

> `protected` **processKeywordsDataClickstreamDataLocationsAndLanguages**(`response`): `Promise`\<[`KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo`](KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo.md)\>

Defined in: main.ts:12864

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo`](KeywordsDataClickstreamDataLocationsAndLanguagesResponseInfo.md)\>

***

### processKeywordsDataDataforseoTrendsLocations()

> `protected` **processKeywordsDataDataforseoTrendsLocations**(`response`): `Promise`\<[`KeywordsDataDataforseoTrendsLocationsResponseInfo`](KeywordsDataDataforseoTrendsLocationsResponseInfo.md)\>

Defined in: main.ts:11408

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsLocationsResponseInfo`](KeywordsDataDataforseoTrendsLocationsResponseInfo.md)\>

***

### processKeywordsDataDataforseoTrendsLocationsCountry()

> `protected` **processKeywordsDataDataforseoTrendsLocationsCountry**(`response`): `Promise`\<[`KeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](KeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md)\>

Defined in: main.ts:11453

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataDataforseoTrendsLocationsCountryResponseInfo`](KeywordsDataDataforseoTrendsLocationsCountryResponseInfo.md)\>

***

### processKeywordsDataErrors()

> `protected` **processKeywordsDataErrors**(`response`): `Promise`\<[`KeywordsDataErrorsResponseInfo`](KeywordsDataErrorsResponseInfo.md)\>

Defined in: main.ts:10239

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataErrorsResponseInfo`](KeywordsDataErrorsResponseInfo.md)\>

***

### processKeywordsDataGoogleAdsLanguages()

> `protected` **processKeywordsDataGoogleAdsLanguages**(`response`): `Promise`\<[`KeywordsDataGoogleAdsLanguagesResponseInfo`](KeywordsDataGoogleAdsLanguagesResponseInfo.md)\>

Defined in: main.ts:10395

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsLanguagesResponseInfo`](KeywordsDataGoogleAdsLanguagesResponseInfo.md)\>

***

### processKeywordsDataGoogleAdsLocations()

> `protected` **processKeywordsDataGoogleAdsLocations**(`response`): `Promise`\<[`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)\>

Defined in: main.ts:10313

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)\>

***

### processKeywordsDataGoogleAdsLocationsCountry()

> `protected` **processKeywordsDataGoogleAdsLocationsCountry**(`response`): `Promise`\<[`KeywordsDataGoogleAdsLocationsCountryResponseInfo`](KeywordsDataGoogleAdsLocationsCountryResponseInfo.md)\>

Defined in: main.ts:10358

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsLocationsCountryResponseInfo`](KeywordsDataGoogleAdsLocationsCountryResponseInfo.md)\>

***

### processKeywordsDataGoogleTrendsLanguages()

> `protected` **processKeywordsDataGoogleTrendsLanguages**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsLanguagesResponseInfo`](KeywordsDataGoogleTrendsLanguagesResponseInfo.md)\>

Defined in: main.ts:11170

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsLanguagesResponseInfo`](KeywordsDataGoogleTrendsLanguagesResponseInfo.md)\>

***

### processKeywordsDataGoogleTrendsLocations()

> `protected` **processKeywordsDataGoogleTrendsLocations**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsLocationsResponseInfo`](KeywordsDataGoogleTrendsLocationsResponseInfo.md)\>

Defined in: main.ts:11088

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsLocationsResponseInfo`](KeywordsDataGoogleTrendsLocationsResponseInfo.md)\>

***

### processKeywordsDataGoogleTrendsLocationsCountry()

> `protected` **processKeywordsDataGoogleTrendsLocationsCountry**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsLocationsCountryResponseInfo`](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)\>

Defined in: main.ts:11133

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsLocationsCountryResponseInfo`](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)\>

***

### processKeywordsDataIdList()

> `protected` **processKeywordsDataIdList**(`response`): `Promise`\<[`KeywordsDataIdListResponseInfo`](KeywordsDataIdListResponseInfo.md)\>

Defined in: main.ts:10197

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`KeywordsDataIdListResponseInfo`](KeywordsDataIdListResponseInfo.md)\>
