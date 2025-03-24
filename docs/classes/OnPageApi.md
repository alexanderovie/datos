[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageApi

# Class: OnPageApi

Defined in: main.ts:14018

## Constructors

### Constructor

> **new OnPageApi**(`baseUrl`?, `http`?): `OnPageApi`

Defined in: main.ts:14023

#### Parameters

##### baseUrl?

`string`

##### http?

###### fetch

#### Returns

`OnPageApi`

## Properties

### jsonParseReviver()

> `protected` **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

Defined in: main.ts:14021

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`any`

## Methods

### contentParsing()

> **contentParsing**(`body`): `Promise`\<[`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)\>

Defined in: main.ts:14865

#### Parameters

##### body

[`OnPageContentParsingRequestInfo`](OnPageContentParsingRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)\>

Successful operation

***

### contentParsingLive()

> **contentParsingLive**(`body`): `Promise`\<[`OnPageContentParsingLiveResponseInfo`](OnPageContentParsingLiveResponseInfo.md)\>

Defined in: main.ts:14907

#### Parameters

##### body

[`OnPageContentParsingLiveRequestInfo`](OnPageContentParsingLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageContentParsingLiveResponseInfo`](OnPageContentParsingLiveResponseInfo.md)\>

Successful operation

***

### duplicateContent()

> **duplicateContent**(`body`): `Promise`\<[`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)\>

Defined in: main.ts:14487

#### Parameters

##### body

[`OnPageDuplicateContentRequestInfo`](OnPageDuplicateContentRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)\>

Successful operation

***

### duplicateTags()

> **duplicateTags**(`body`): `Promise`\<[`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)\>

Defined in: main.ts:14445

#### Parameters

##### body

[`OnPageDuplicateTagsRequestInfo`](OnPageDuplicateTagsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)\>

Successful operation

***

### forceStop()

> **forceStop**(`body`): `Promise`\<[`OnPageForceStopResponseInfo`](OnPageForceStopResponseInfo.md)\>

Defined in: main.ts:14116

#### Parameters

##### body

[`OnPageForceStopRequestInfo`](OnPageForceStopRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageForceStopResponseInfo`](OnPageForceStopResponseInfo.md)\>

Successful operation

***

### instantPages()

> **instantPages**(`body`): `Promise`\<[`OnPageInstantPagesResponseInfo`](OnPageInstantPagesResponseInfo.md)\>

Defined in: main.ts:14949

#### Parameters

##### body

[`OnPageInstantPagesRequestInfo`](OnPageInstantPagesRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageInstantPagesResponseInfo`](OnPageInstantPagesResponseInfo.md)\>

Successful operation

***

### keywordDensity()

> **keywordDensity**(`body`): `Promise`\<[`OnPageKeywordDensityResponseInfo`](OnPageKeywordDensityResponseInfo.md)\>

Defined in: main.ts:14697

#### Parameters

##### body

[`OnPageKeywordDensityRequestInfo`](OnPageKeywordDensityRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageKeywordDensityResponseInfo`](OnPageKeywordDensityResponseInfo.md)\>

Successful operation

***

### lighthouseAudits()

> **lighthouseAudits**(): `Promise`\<[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)\>

Defined in: main.ts:15027

#### Returns

`Promise`\<[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)\>

Successful operation

***

### lighthouseLiveJson()

> **lighthouseLiveJson**(`body`): `Promise`\<[`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)\>

Defined in: main.ts:15226

#### Parameters

##### body

[`OnPageLighthouseLiveJsonRequestInfo`](OnPageLighthouseLiveJsonRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)\>

Successful operation

***

### lighthouseTaskGetJson()

> **lighthouseTaskGetJson**(`id`): `Promise`\<[`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)\>

Defined in: main.ts:15185

#### Parameters

##### id

`string`

task identifier
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Returns

`Promise`\<[`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)\>

Successful operation

***

### lighthouseTaskPost()

> **lighthouseTaskPost**(`body`): `Promise`\<[`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)\>

Defined in: main.ts:15102

#### Parameters

##### body

[`OnPageLighthouseTaskPostRequestInfo`](OnPageLighthouseTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)\>

Successful operation

***

### lighthouseTasksReady()

> **lighthouseTasksReady**(): `Promise`\<[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)\>

Defined in: main.ts:15143

#### Returns

`Promise`\<[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)\>

Successful operation

***

### lighthouseVersions()

> **lighthouseVersions**(): `Promise`\<[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)\>

Defined in: main.ts:15064

#### Returns

`Promise`\<[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)\>

Successful operation

***

### links()

> **links**(`body`): `Promise`\<[`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)\>

Defined in: main.ts:14529

#### Parameters

##### body

[`OnPageLinksRequestInfo`](OnPageLinksRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)\>

Successful operation

***

### microdata()

> **microdata**(`body`): `Promise`\<[`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)\>

Defined in: main.ts:14739

#### Parameters

##### body

[`OnPageMicrodataRequestInfo`](OnPageMicrodataRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)\>

Successful operation

***

### nonIndexable()

> **nonIndexable**(`body`): `Promise`\<[`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)\>

Defined in: main.ts:14613

#### Parameters

##### body

[`OnPageNonIndexableRequestInfo`](OnPageNonIndexableRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)\>

Successful operation

***

### onPageAvailableFilters()

> **onPageAvailableFilters**(): `Promise`\<[`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)\>

Defined in: main.ts:14157

#### Returns

`Promise`\<[`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)\>

Successful operation

***

### onPageErrors()

> **onPageErrors**(`body`): `Promise`\<[`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)\>

Defined in: main.ts:14074

#### Parameters

##### body

[`OnPageErrorsRequestInfo`](OnPageErrorsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)\>

Successful operation

***

### onPageIdList()

> **onPageIdList**(`body`): `Promise`\<[`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)\>

Defined in: main.ts:14032

#### Parameters

##### body

[`OnPageIdListRequestInfo`](OnPageIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)\>

Successful operation

***

### onPageLighthouseLanguages()

> **onPageLighthouseLanguages**(): `Promise`\<[`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)\>

Defined in: main.ts:14990

#### Returns

`Promise`\<[`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)\>

Successful operation

***

### onPageTasksReady()

> **onPageTasksReady**(): `Promise`\<[`OnPageTasksReadyResponseInfo`](OnPageTasksReadyResponseInfo.md)\>

Defined in: main.ts:14236

#### Returns

`Promise`\<[`OnPageTasksReadyResponseInfo`](OnPageTasksReadyResponseInfo.md)\>

Successful operation

***

### pages()

> **pages**(`body`): `Promise`\<[`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)\>

Defined in: main.ts:14319

#### Parameters

##### body

[`OnPagePagesRequestInfo`](OnPagePagesRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)\>

Successful operation

***

### pagesByResource()

> **pagesByResource**(`body`): `Promise`\<[`OnPagePagesByResourceResponseInfo`](OnPagePagesByResourceResponseInfo.md)\>

Defined in: main.ts:14361

#### Parameters

##### body

[`OnPagePagesByResourceRequestInfo`](OnPagePagesByResourceRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPagePagesByResourceResponseInfo`](OnPagePagesByResourceResponseInfo.md)\>

Successful operation

***

### pageScreenshot()

> **pageScreenshot**(`body`): `Promise`\<[`OnPagePageScreenshotResponseInfo`](OnPagePageScreenshotResponseInfo.md)\>

Defined in: main.ts:14823

#### Parameters

##### body

[`OnPagePageScreenshotRequestInfo`](OnPagePageScreenshotRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPagePageScreenshotResponseInfo`](OnPagePageScreenshotResponseInfo.md)\>

Successful operation

***

### processContentParsing()

> `protected` **processContentParsing**(`response`): `Promise`\<[`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)\>

Defined in: main.ts:14885

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)\>

***

### processContentParsingLive()

> `protected` **processContentParsingLive**(`response`): `Promise`\<[`OnPageContentParsingLiveResponseInfo`](OnPageContentParsingLiveResponseInfo.md)\>

Defined in: main.ts:14927

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageContentParsingLiveResponseInfo`](OnPageContentParsingLiveResponseInfo.md)\>

***

### processDuplicateContent()

> `protected` **processDuplicateContent**(`response`): `Promise`\<[`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)\>

Defined in: main.ts:14507

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)\>

***

### processDuplicateTags()

> `protected` **processDuplicateTags**(`response`): `Promise`\<[`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)\>

Defined in: main.ts:14465

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)\>

***

### processForceStop()

> `protected` **processForceStop**(`response`): `Promise`\<[`OnPageForceStopResponseInfo`](OnPageForceStopResponseInfo.md)\>

Defined in: main.ts:14136

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageForceStopResponseInfo`](OnPageForceStopResponseInfo.md)\>

***

### processInstantPages()

> `protected` **processInstantPages**(`response`): `Promise`\<[`OnPageInstantPagesResponseInfo`](OnPageInstantPagesResponseInfo.md)\>

Defined in: main.ts:14969

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageInstantPagesResponseInfo`](OnPageInstantPagesResponseInfo.md)\>

***

### processKeywordDensity()

> `protected` **processKeywordDensity**(`response`): `Promise`\<[`OnPageKeywordDensityResponseInfo`](OnPageKeywordDensityResponseInfo.md)\>

Defined in: main.ts:14717

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageKeywordDensityResponseInfo`](OnPageKeywordDensityResponseInfo.md)\>

***

### processLighthouseAudits()

> `protected` **processLighthouseAudits**(`response`): `Promise`\<[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)\>

Defined in: main.ts:15043

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)\>

***

### processLighthouseLiveJson()

> `protected` **processLighthouseLiveJson**(`response`): `Promise`\<[`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)\>

Defined in: main.ts:15246

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)\>

***

### processLighthouseTaskGetJson()

> `protected` **processLighthouseTaskGetJson**(`response`): `Promise`\<[`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)\>

Defined in: main.ts:15204

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)\>

***

### processLighthouseTaskPost()

> `protected` **processLighthouseTaskPost**(`response`): `Promise`\<[`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)\>

Defined in: main.ts:15122

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)\>

***

### processLighthouseTasksReady()

> `protected` **processLighthouseTasksReady**(`response`): `Promise`\<[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)\>

Defined in: main.ts:15159

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)\>

***

### processLighthouseVersions()

> `protected` **processLighthouseVersions**(`response`): `Promise`\<[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)\>

Defined in: main.ts:15080

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)\>

***

### processLinks()

> `protected` **processLinks**(`response`): `Promise`\<[`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)\>

Defined in: main.ts:14549

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)\>

***

### processMicrodata()

> `protected` **processMicrodata**(`response`): `Promise`\<[`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)\>

Defined in: main.ts:14759

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)\>

***

### processNonIndexable()

> `protected` **processNonIndexable**(`response`): `Promise`\<[`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)\>

Defined in: main.ts:14633

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)\>

***

### processOnPageAvailableFilters()

> `protected` **processOnPageAvailableFilters**(`response`): `Promise`\<[`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)\>

Defined in: main.ts:14173

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)\>

***

### processOnPageErrors()

> `protected` **processOnPageErrors**(`response`): `Promise`\<[`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)\>

Defined in: main.ts:14094

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)\>

***

### processOnPageIdList()

> `protected` **processOnPageIdList**(`response`): `Promise`\<[`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)\>

Defined in: main.ts:14052

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)\>

***

### processOnPageLighthouseLanguages()

> `protected` **processOnPageLighthouseLanguages**(`response`): `Promise`\<[`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)\>

Defined in: main.ts:15006

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)\>

***

### processOnPageTasksReady()

> `protected` **processOnPageTasksReady**(`response`): `Promise`\<[`OnPageTasksReadyResponseInfo`](OnPageTasksReadyResponseInfo.md)\>

Defined in: main.ts:14252

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageTasksReadyResponseInfo`](OnPageTasksReadyResponseInfo.md)\>

***

### processPages()

> `protected` **processPages**(`response`): `Promise`\<[`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)\>

Defined in: main.ts:14339

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)\>

***

### processPagesByResource()

> `protected` **processPagesByResource**(`response`): `Promise`\<[`OnPagePagesByResourceResponseInfo`](OnPagePagesByResourceResponseInfo.md)\>

Defined in: main.ts:14381

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPagePagesByResourceResponseInfo`](OnPagePagesByResourceResponseInfo.md)\>

***

### processPageScreenshot()

> `protected` **processPageScreenshot**(`response`): `Promise`\<[`OnPagePageScreenshotResponseInfo`](OnPagePageScreenshotResponseInfo.md)\>

Defined in: main.ts:14843

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPagePageScreenshotResponseInfo`](OnPagePageScreenshotResponseInfo.md)\>

***

### processRawHtml()

> `protected` **processRawHtml**(`response`): `Promise`\<[`OnPageRawHtmlResponseInfo`](OnPageRawHtmlResponseInfo.md)\>

Defined in: main.ts:14801

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageRawHtmlResponseInfo`](OnPageRawHtmlResponseInfo.md)\>

***

### processRedirectChains()

> `protected` **processRedirectChains**(`response`): `Promise`\<[`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)\>

Defined in: main.ts:14591

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)\>

***

### processResources()

> `protected` **processResources**(`response`): `Promise`\<[`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)\>

Defined in: main.ts:14423

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)\>

***

### processSummary()

> `protected` **processSummary**(`response`): `Promise`\<[`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)\>

Defined in: main.ts:14297

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)\>

***

### processTaskPost()

> `protected` **processTaskPost**(`response`): `Promise`\<[`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)\>

Defined in: main.ts:14215

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)\>

***

### processWaterfall()

> `protected` **processWaterfall**(`response`): `Promise`\<[`OnPageWaterfallResponseInfo`](OnPageWaterfallResponseInfo.md)\>

Defined in: main.ts:14675

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageWaterfallResponseInfo`](OnPageWaterfallResponseInfo.md)\>

***

### rawHtml()

> **rawHtml**(`body`): `Promise`\<[`OnPageRawHtmlResponseInfo`](OnPageRawHtmlResponseInfo.md)\>

Defined in: main.ts:14781

#### Parameters

##### body

[`OnPageRawHtmlRequestInfo`](OnPageRawHtmlRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageRawHtmlResponseInfo`](OnPageRawHtmlResponseInfo.md)\>

Successful operation

***

### redirectChains()

> **redirectChains**(`body`): `Promise`\<[`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)\>

Defined in: main.ts:14571

#### Parameters

##### body

[`OnPageRedirectChainsRequestInfo`](OnPageRedirectChainsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)\>

Successful operation

***

### resources()

> **resources**(`body`): `Promise`\<[`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)\>

Defined in: main.ts:14403

#### Parameters

##### body

[`OnPageResourcesRequestInfo`](OnPageResourcesRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)\>

Successful operation

***

### summary()

> **summary**(`id`): `Promise`\<[`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)\>

Defined in: main.ts:14278

#### Parameters

##### id

`string`

task identifier
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Returns

`Promise`\<[`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)\>

Successful operation

***

### taskPost()

> **taskPost**(`body`): `Promise`\<[`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)\>

Defined in: main.ts:14195

#### Parameters

##### body

[`OnPageTaskPostRequestInfo`](OnPageTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)\>

Successful operation

***

### waterfall()

> **waterfall**(`body`): `Promise`\<[`OnPageWaterfallResponseInfo`](OnPageWaterfallResponseInfo.md)\>

Defined in: main.ts:14655

#### Parameters

##### body

[`OnPageWaterfallRequestInfo`](OnPageWaterfallRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageWaterfallResponseInfo`](OnPageWaterfallResponseInfo.md)\>

Successful operation
