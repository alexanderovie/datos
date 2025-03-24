[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataApi

# Class: BusinessDataApi

Defined in: main.ts:19528

## Constructors

### Constructor

> **new BusinessDataApi**(`baseUrl`?, `http`?): `BusinessDataApi`

Defined in: main.ts:19533

#### Parameters

##### baseUrl?

`string`

##### http?

###### fetch

#### Returns

`BusinessDataApi`

## Properties

### jsonParseReviver()

> `protected` **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

Defined in: main.ts:19531

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`any`

## Methods

### businessDataBusinessListingsLocations()

> **businessDataBusinessListingsLocations**(): `Promise`\<[`BusinessDataBusinessListingsLocationsResponseInfo`](BusinessDataBusinessListingsLocationsResponseInfo.md)\>

Defined in: main.ts:19625

#### Returns

`Promise`\<[`BusinessDataBusinessListingsLocationsResponseInfo`](BusinessDataBusinessListingsLocationsResponseInfo.md)\>

Successful operation

***

### businessDataErrors()

> **businessDataErrors**(`body`): `Promise`\<[`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)\>

Defined in: main.ts:19584

#### Parameters

##### body

[`BusinessDataErrorsRequestInfo`](BusinessDataErrorsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)\>

Successful operation

***

### businessDataGoogleLanguages()

> **businessDataGoogleLanguages**(): `Promise`\<[`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)\>

Defined in: main.ts:19902

#### Returns

`Promise`\<[`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)\>

Successful operation

***

### businessDataGoogleLocations()

> **businessDataGoogleLocations**(): `Promise`\<[`BusinessDataGoogleLocationsResponseInfo`](BusinessDataGoogleLocationsResponseInfo.md)\>

Defined in: main.ts:19820

#### Returns

`Promise`\<[`BusinessDataGoogleLocationsResponseInfo`](BusinessDataGoogleLocationsResponseInfo.md)\>

Successful operation

***

### businessDataGoogleLocationsCountry()

> **businessDataGoogleLocationsCountry**(`country`): `Promise`\<[`BusinessDataGoogleLocationsCountryResponseInfo`](BusinessDataGoogleLocationsCountryResponseInfo.md)\>

Defined in: main.ts:19862

#### Parameters

##### country

`string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`BusinessDataGoogleLocationsCountryResponseInfo`](BusinessDataGoogleLocationsCountryResponseInfo.md)\>

Successful operation

***

### businessDataIdList()

> **businessDataIdList**(`body`): `Promise`\<[`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)\>

Defined in: main.ts:19542

#### Parameters

##### body

[`BusinessDataIdListRequestInfo`](BusinessDataIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)\>

Successful operation

***

### businessDataTasksReady()

> **businessDataTasksReady**(): `Promise`\<[`BusinessDataTasksReadyResponseInfo`](BusinessDataTasksReadyResponseInfo.md)\>

Defined in: main.ts:20018

#### Returns

`Promise`\<[`BusinessDataTasksReadyResponseInfo`](BusinessDataTasksReadyResponseInfo.md)\>

Successful operation

***

### businessDataTripadvisorLanguages()

> **businessDataTripadvisorLanguages**(): `Promise`\<[`BusinessDataTripadvisorLanguagesResponseInfo`](BusinessDataTripadvisorLanguagesResponseInfo.md)\>

Defined in: main.ts:21409

#### Returns

`Promise`\<[`BusinessDataTripadvisorLanguagesResponseInfo`](BusinessDataTripadvisorLanguagesResponseInfo.md)\>

Successful operation

***

### businessDataTripadvisorLocations()

> **businessDataTripadvisorLocations**(): `Promise`\<[`BusinessDataTripadvisorLocationsResponseInfo`](BusinessDataTripadvisorLocationsResponseInfo.md)\>

Defined in: main.ts:21327

#### Returns

`Promise`\<[`BusinessDataTripadvisorLocationsResponseInfo`](BusinessDataTripadvisorLocationsResponseInfo.md)\>

Successful operation

***

### businessDataTripadvisorLocationsCountry()

> **businessDataTripadvisorLocationsCountry**(`country`): `Promise`\<[`BusinessDataTripadvisorLocationsCountryResponseInfo`](BusinessDataTripadvisorLocationsCountryResponseInfo.md)\>

Defined in: main.ts:21369

#### Parameters

##### country

`string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`BusinessDataTripadvisorLocationsCountryResponseInfo`](BusinessDataTripadvisorLocationsCountryResponseInfo.md)\>

Successful operation

***

### businessListingsAvailableFilters()

> **businessListingsAvailableFilters**(): `Promise`\<[`BusinessDataBusinessListingsAvailableFiltersResponseInfo`](BusinessDataBusinessListingsAvailableFiltersResponseInfo.md)\>

Defined in: main.ts:19699

#### Returns

`Promise`\<[`BusinessDataBusinessListingsAvailableFiltersResponseInfo`](BusinessDataBusinessListingsAvailableFiltersResponseInfo.md)\>

Successful operation

***

### businessListingsCategories()

> **businessListingsCategories**(): `Promise`\<[`BusinessDataBusinessListingsCategoriesResponseInfo`](BusinessDataBusinessListingsCategoriesResponseInfo.md)\>

Defined in: main.ts:19662

#### Returns

`Promise`\<[`BusinessDataBusinessListingsCategoriesResponseInfo`](BusinessDataBusinessListingsCategoriesResponseInfo.md)\>

Successful operation

***

### businessListingsCategoriesAggregationLive()

> **businessListingsCategoriesAggregationLive**(`body`): `Promise`\<[`BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)\>

Defined in: main.ts:19779

#### Parameters

##### body

[`BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)\>

Successful operation

***

### businessListingsSearchLive()

> **businessListingsSearchLive**(`body`): `Promise`\<[`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)\>

Defined in: main.ts:19737

#### Parameters

##### body

[`BusinessDataBusinessListingsSearchLiveRequestInfo`](BusinessDataBusinessListingsSearchLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)\>

Successful operation

***

### googleExtendedReviewsTaskGet()

> **googleExtendedReviewsTaskGet**(`id`): `Promise`\<[`BusinessDataGoogleExtendedReviewsTaskGetResponseInfo`](BusinessDataGoogleExtendedReviewsTaskGetResponseInfo.md)\>

Defined in: main.ts:20879

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`BusinessDataGoogleExtendedReviewsTaskGetResponseInfo`](BusinessDataGoogleExtendedReviewsTaskGetResponseInfo.md)\>

Successful operation

***

### googleExtendedReviewsTaskPost()

> **googleExtendedReviewsTaskPost**(`body`): `Promise`\<[`BusinessDataGoogleExtendedReviewsTaskPostResponseInfo`](BusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md)\>

Defined in: main.ts:20798

#### Parameters

##### body

[`BusinessDataGoogleExtendedReviewsTaskPostRequestInfo`](BusinessDataGoogleExtendedReviewsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleExtendedReviewsTaskPostResponseInfo`](BusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md)\>

Successful operation

***

### googleExtendedReviewsTasksReady()

> **googleExtendedReviewsTasksReady**(): `Promise`\<[`BusinessDataGoogleExtendedReviewsTasksReadyResponseInfo`](BusinessDataGoogleExtendedReviewsTasksReadyResponseInfo.md)\>

Defined in: main.ts:20839

#### Returns

`Promise`\<[`BusinessDataGoogleExtendedReviewsTasksReadyResponseInfo`](BusinessDataGoogleExtendedReviewsTasksReadyResponseInfo.md)\>

Successful operation

***

### googleHotelInfoLiveAdvanced()

> **googleHotelInfoLiveAdvanced**(`body`): `Promise`\<[`BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:20592

#### Parameters

##### body

[`BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)\>

Successful operation

***

### googleHotelInfoLiveHtml()

> **googleHotelInfoLiveHtml**(`body`): `Promise`\<[`BusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)\>

Defined in: main.ts:20634

#### Parameters

##### body

[`BusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)\>

Successful operation

***

### googleHotelInfoTaskGetAdvanced()

> **googleHotelInfoTaskGetAdvanced**(`id`): `Promise`\<[`BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:20508

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### googleHotelInfoTaskGetHtml()

> **googleHotelInfoTaskGetHtml**(`id`): `Promise`\<[`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:20551

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)\>

Successful operation

***

### googleHotelInfoTaskPost()

> **googleHotelInfoTaskPost**(`body`): `Promise`\<[`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)\>

Defined in: main.ts:20427

#### Parameters

##### body

[`BusinessDataGoogleHotelInfoTaskPostRequestInfo`](BusinessDataGoogleHotelInfoTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)\>

Successful operation

***

### googleHotelInfoTasksReady()

> **googleHotelInfoTasksReady**(): `Promise`\<[`BusinessDataGoogleHotelInfoTasksReadyResponseInfo`](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)\>

Defined in: main.ts:20468

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTasksReadyResponseInfo`](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)\>

Successful operation

***

### googleHotelSearchesLive()

> **googleHotelSearchesLive**(`body`): `Promise`\<[`BusinessDataGoogleHotelSearchesLiveResponseInfo`](BusinessDataGoogleHotelSearchesLiveResponseInfo.md)\>

Defined in: main.ts:20385

#### Parameters

##### body

[`BusinessDataGoogleHotelSearchesLiveRequestInfo`](BusinessDataGoogleHotelSearchesLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesLiveResponseInfo`](BusinessDataGoogleHotelSearchesLiveResponseInfo.md)\>

Successful operation

***

### googleHotelSearchesTaskGet()

> **googleHotelSearchesTaskGet**(`id`): `Promise`\<[`BusinessDataGoogleHotelSearchesTaskGetResponseInfo`](BusinessDataGoogleHotelSearchesTaskGetResponseInfo.md)\>

Defined in: main.ts:20344

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesTaskGetResponseInfo`](BusinessDataGoogleHotelSearchesTaskGetResponseInfo.md)\>

Successful operation

***

### googleHotelSearchesTaskPost()

> **googleHotelSearchesTaskPost**(`body`): `Promise`\<[`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)\>

Defined in: main.ts:20263

#### Parameters

##### body

[`BusinessDataGoogleHotelSearchesTaskPostRequestInfo`](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)\>

Successful operation

***

### googleHotelSearchesTasksReady()

> **googleHotelSearchesTasksReady**(): `Promise`\<[`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)\>

Defined in: main.ts:20304

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)\>

Successful operation

***

### googleMyBusinessInfoLive()

> **googleMyBusinessInfoLive**(`body`): `Promise`\<[`BusinessDataGoogleMyBusinessInfoLiveResponseInfo`](BusinessDataGoogleMyBusinessInfoLiveResponseInfo.md)\>

Defined in: main.ts:20099

#### Parameters

##### body

[`BusinessDataGoogleMyBusinessInfoLiveRequestInfo`](BusinessDataGoogleMyBusinessInfoLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoLiveResponseInfo`](BusinessDataGoogleMyBusinessInfoLiveResponseInfo.md)\>

Successful operation

***

### googleMyBusinessInfoTaskGet()

> **googleMyBusinessInfoTaskGet**(`id`): `Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md)\>

Defined in: main.ts:20058

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md)\>

Successful operation

***

### googleMyBusinessInfoTaskPost()

> **googleMyBusinessInfoTaskPost**(`body`): `Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md)\>

Defined in: main.ts:19940

#### Parameters

##### body

[`BusinessDataGoogleMyBusinessInfoTaskPostRequestInfo`](BusinessDataGoogleMyBusinessInfoTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md)\>

Successful operation

***

### googleMyBusinessInfoTasksReady()

> **googleMyBusinessInfoTasksReady**(): `Promise`\<[`BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)\>

Defined in: main.ts:19981

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)\>

Successful operation

***

### googleMyBusinessUpdatesTaskGet()

> **googleMyBusinessUpdatesTaskGet**(`id`): `Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md)\>

Defined in: main.ts:20222

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md)\>

Successful operation

***

### googleMyBusinessUpdatesTaskPost()

> **googleMyBusinessUpdatesTaskPost**(`body`): `Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)\>

Defined in: main.ts:20141

#### Parameters

##### body

[`BusinessDataGoogleMyBusinessUpdatesTaskPostRequestInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)\>

Successful operation

***

### googleMyBusinessUpdatesTasksReady()

> **googleMyBusinessUpdatesTasksReady**(): `Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md)\>

Defined in: main.ts:20182

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md)\>

Successful operation

***

### googleQuestionsAndAnswersLive()

> **googleQuestionsAndAnswersLive**(`body`): `Promise`\<[`BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo`](BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo.md)\>

Defined in: main.ts:21042

#### Parameters

##### body

[`BusinessDataGoogleQuestionsAndAnswersLiveRequestInfo`](BusinessDataGoogleQuestionsAndAnswersLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo`](BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo.md)\>

Successful operation

***

### googleQuestionsAndAnswersTaskGet()

> **googleQuestionsAndAnswersTaskGet**(`id`): `Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md)\>

Defined in: main.ts:21001

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md)\>

Successful operation

***

### googleQuestionsAndAnswersTaskPost()

> **googleQuestionsAndAnswersTaskPost**(`body`): `Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo.md)\>

Defined in: main.ts:20920

#### Parameters

##### body

[`BusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo`](BusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo.md)\>

Successful operation

***

### googleQuestionsAndAnswersTasksReady()

> **googleQuestionsAndAnswersTasksReady**(): `Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md)\>

Defined in: main.ts:20961

#### Returns

`Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md)\>

Successful operation

***

### googleReviewsTaskGet()

> **googleReviewsTaskGet**(`id`): `Promise`\<[`BusinessDataGoogleReviewsTaskGetResponseInfo`](BusinessDataGoogleReviewsTaskGetResponseInfo.md)\>

Defined in: main.ts:20757

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`BusinessDataGoogleReviewsTaskGetResponseInfo`](BusinessDataGoogleReviewsTaskGetResponseInfo.md)\>

Successful operation

***

### googleReviewsTaskPost()

> **googleReviewsTaskPost**(`body`): `Promise`\<[`BusinessDataGoogleReviewsTaskPostResponseInfo`](BusinessDataGoogleReviewsTaskPostResponseInfo.md)\>

Defined in: main.ts:20676

#### Parameters

##### body

[`BusinessDataGoogleReviewsTaskPostRequestInfo`](BusinessDataGoogleReviewsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleReviewsTaskPostResponseInfo`](BusinessDataGoogleReviewsTaskPostResponseInfo.md)\>

Successful operation

***

### googleReviewsTasksReady()

> **googleReviewsTasksReady**(): `Promise`\<[`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)\>

Defined in: main.ts:20717

#### Returns

`Promise`\<[`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)\>

Successful operation

***

### processBusinessDataBusinessListingsLocations()

> `protected` **processBusinessDataBusinessListingsLocations**(`response`): `Promise`\<[`BusinessDataBusinessListingsLocationsResponseInfo`](BusinessDataBusinessListingsLocationsResponseInfo.md)\>

Defined in: main.ts:19641

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataBusinessListingsLocationsResponseInfo`](BusinessDataBusinessListingsLocationsResponseInfo.md)\>

***

### processBusinessDataErrors()

> `protected` **processBusinessDataErrors**(`response`): `Promise`\<[`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)\>

Defined in: main.ts:19604

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)\>

***

### processBusinessDataGoogleLanguages()

> `protected` **processBusinessDataGoogleLanguages**(`response`): `Promise`\<[`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)\>

Defined in: main.ts:19918

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)\>

***

### processBusinessDataGoogleLocations()

> `protected` **processBusinessDataGoogleLocations**(`response`): `Promise`\<[`BusinessDataGoogleLocationsResponseInfo`](BusinessDataGoogleLocationsResponseInfo.md)\>

Defined in: main.ts:19836

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleLocationsResponseInfo`](BusinessDataGoogleLocationsResponseInfo.md)\>

***

### processBusinessDataGoogleLocationsCountry()

> `protected` **processBusinessDataGoogleLocationsCountry**(`response`): `Promise`\<[`BusinessDataGoogleLocationsCountryResponseInfo`](BusinessDataGoogleLocationsCountryResponseInfo.md)\>

Defined in: main.ts:19881

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleLocationsCountryResponseInfo`](BusinessDataGoogleLocationsCountryResponseInfo.md)\>

***

### processBusinessDataIdList()

> `protected` **processBusinessDataIdList**(`response`): `Promise`\<[`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)\>

Defined in: main.ts:19562

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)\>

***

### processBusinessDataTasksReady()

> `protected` **processBusinessDataTasksReady**(`response`): `Promise`\<[`BusinessDataTasksReadyResponseInfo`](BusinessDataTasksReadyResponseInfo.md)\>

Defined in: main.ts:20034

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataTasksReadyResponseInfo`](BusinessDataTasksReadyResponseInfo.md)\>

***

### processBusinessDataTripadvisorLanguages()

> `protected` **processBusinessDataTripadvisorLanguages**(`response`): `Promise`\<[`BusinessDataTripadvisorLanguagesResponseInfo`](BusinessDataTripadvisorLanguagesResponseInfo.md)\>

Defined in: main.ts:21425

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorLanguagesResponseInfo`](BusinessDataTripadvisorLanguagesResponseInfo.md)\>

***

### processBusinessDataTripadvisorLocations()

> `protected` **processBusinessDataTripadvisorLocations**(`response`): `Promise`\<[`BusinessDataTripadvisorLocationsResponseInfo`](BusinessDataTripadvisorLocationsResponseInfo.md)\>

Defined in: main.ts:21343

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorLocationsResponseInfo`](BusinessDataTripadvisorLocationsResponseInfo.md)\>

***

### processBusinessDataTripadvisorLocationsCountry()

> `protected` **processBusinessDataTripadvisorLocationsCountry**(`response`): `Promise`\<[`BusinessDataTripadvisorLocationsCountryResponseInfo`](BusinessDataTripadvisorLocationsCountryResponseInfo.md)\>

Defined in: main.ts:21388

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorLocationsCountryResponseInfo`](BusinessDataTripadvisorLocationsCountryResponseInfo.md)\>

***

### processBusinessListingsAvailableFilters()

> `protected` **processBusinessListingsAvailableFilters**(`response`): `Promise`\<[`BusinessDataBusinessListingsAvailableFiltersResponseInfo`](BusinessDataBusinessListingsAvailableFiltersResponseInfo.md)\>

Defined in: main.ts:19715

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataBusinessListingsAvailableFiltersResponseInfo`](BusinessDataBusinessListingsAvailableFiltersResponseInfo.md)\>

***

### processBusinessListingsCategories()

> `protected` **processBusinessListingsCategories**(`response`): `Promise`\<[`BusinessDataBusinessListingsCategoriesResponseInfo`](BusinessDataBusinessListingsCategoriesResponseInfo.md)\>

Defined in: main.ts:19678

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataBusinessListingsCategoriesResponseInfo`](BusinessDataBusinessListingsCategoriesResponseInfo.md)\>

***

### processBusinessListingsCategoriesAggregationLive()

> `protected` **processBusinessListingsCategoriesAggregationLive**(`response`): `Promise`\<[`BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)\>

Defined in: main.ts:19799

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)\>

***

### processBusinessListingsSearchLive()

> `protected` **processBusinessListingsSearchLive**(`response`): `Promise`\<[`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)\>

Defined in: main.ts:19757

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)\>

***

### processGoogleExtendedReviewsTaskGet()

> `protected` **processGoogleExtendedReviewsTaskGet**(`response`): `Promise`\<[`BusinessDataGoogleExtendedReviewsTaskGetResponseInfo`](BusinessDataGoogleExtendedReviewsTaskGetResponseInfo.md)\>

Defined in: main.ts:20898

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleExtendedReviewsTaskGetResponseInfo`](BusinessDataGoogleExtendedReviewsTaskGetResponseInfo.md)\>

***

### processGoogleExtendedReviewsTaskPost()

> `protected` **processGoogleExtendedReviewsTaskPost**(`response`): `Promise`\<[`BusinessDataGoogleExtendedReviewsTaskPostResponseInfo`](BusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md)\>

Defined in: main.ts:20818

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleExtendedReviewsTaskPostResponseInfo`](BusinessDataGoogleExtendedReviewsTaskPostResponseInfo.md)\>

***

### processGoogleExtendedReviewsTasksReady()

> `protected` **processGoogleExtendedReviewsTasksReady**(`response`): `Promise`\<[`BusinessDataGoogleExtendedReviewsTasksReadyResponseInfo`](BusinessDataGoogleExtendedReviewsTasksReadyResponseInfo.md)\>

Defined in: main.ts:20855

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleExtendedReviewsTasksReadyResponseInfo`](BusinessDataGoogleExtendedReviewsTasksReadyResponseInfo.md)\>

***

### processGoogleHotelInfoLiveAdvanced()

> `protected` **processGoogleHotelInfoLiveAdvanced**(`response`): `Promise`\<[`BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:20612

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)\>

***

### processGoogleHotelInfoLiveHtml()

> `protected` **processGoogleHotelInfoLiveHtml**(`response`): `Promise`\<[`BusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)\>

Defined in: main.ts:20654

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)\>

***

### processGoogleHotelInfoTaskGetAdvanced()

> `protected` **processGoogleHotelInfoTaskGetAdvanced**(`response`): `Promise`\<[`BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:20527

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md)\>

***

### processGoogleHotelInfoTaskGetHtml()

> `protected` **processGoogleHotelInfoTaskGetHtml**(`response`): `Promise`\<[`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:20570

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)\>

***

### processGoogleHotelInfoTaskPost()

> `protected` **processGoogleHotelInfoTaskPost**(`response`): `Promise`\<[`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)\>

Defined in: main.ts:20447

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)\>

***

### processGoogleHotelInfoTasksReady()

> `protected` **processGoogleHotelInfoTasksReady**(`response`): `Promise`\<[`BusinessDataGoogleHotelInfoTasksReadyResponseInfo`](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)\>

Defined in: main.ts:20484

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTasksReadyResponseInfo`](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)\>

***

### processGoogleHotelSearchesLive()

> `protected` **processGoogleHotelSearchesLive**(`response`): `Promise`\<[`BusinessDataGoogleHotelSearchesLiveResponseInfo`](BusinessDataGoogleHotelSearchesLiveResponseInfo.md)\>

Defined in: main.ts:20405

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesLiveResponseInfo`](BusinessDataGoogleHotelSearchesLiveResponseInfo.md)\>

***

### processGoogleHotelSearchesTaskGet()

> `protected` **processGoogleHotelSearchesTaskGet**(`response`): `Promise`\<[`BusinessDataGoogleHotelSearchesTaskGetResponseInfo`](BusinessDataGoogleHotelSearchesTaskGetResponseInfo.md)\>

Defined in: main.ts:20363

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesTaskGetResponseInfo`](BusinessDataGoogleHotelSearchesTaskGetResponseInfo.md)\>

***

### processGoogleHotelSearchesTaskPost()

> `protected` **processGoogleHotelSearchesTaskPost**(`response`): `Promise`\<[`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)\>

Defined in: main.ts:20283

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)\>

***

### processGoogleHotelSearchesTasksReady()

> `protected` **processGoogleHotelSearchesTasksReady**(`response`): `Promise`\<[`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)\>

Defined in: main.ts:20320

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)\>

***

### processGoogleMyBusinessInfoLive()

> `protected` **processGoogleMyBusinessInfoLive**(`response`): `Promise`\<[`BusinessDataGoogleMyBusinessInfoLiveResponseInfo`](BusinessDataGoogleMyBusinessInfoLiveResponseInfo.md)\>

Defined in: main.ts:20119

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoLiveResponseInfo`](BusinessDataGoogleMyBusinessInfoLiveResponseInfo.md)\>

***

### processGoogleMyBusinessInfoTaskGet()

> `protected` **processGoogleMyBusinessInfoTaskGet**(`response`): `Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md)\>

Defined in: main.ts:20077

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md)\>

***

### processGoogleMyBusinessInfoTaskPost()

> `protected` **processGoogleMyBusinessInfoTaskPost**(`response`): `Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md)\>

Defined in: main.ts:19960

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md)\>

***

### processGoogleMyBusinessInfoTasksReady()

> `protected` **processGoogleMyBusinessInfoTasksReady**(`response`): `Promise`\<[`BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)\>

Defined in: main.ts:19997

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)\>

***

### processGoogleMyBusinessUpdatesTaskGet()

> `protected` **processGoogleMyBusinessUpdatesTaskGet**(`response`): `Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md)\>

Defined in: main.ts:20241

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md)\>

***

### processGoogleMyBusinessUpdatesTaskPost()

> `protected` **processGoogleMyBusinessUpdatesTaskPost**(`response`): `Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)\>

Defined in: main.ts:20161

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)\>

***

### processGoogleMyBusinessUpdatesTasksReady()

> `protected` **processGoogleMyBusinessUpdatesTasksReady**(`response`): `Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md)\>

Defined in: main.ts:20198

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md)\>

***

### processGoogleQuestionsAndAnswersLive()

> `protected` **processGoogleQuestionsAndAnswersLive**(`response`): `Promise`\<[`BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo`](BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo.md)\>

Defined in: main.ts:21062

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo`](BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo.md)\>

***

### processGoogleQuestionsAndAnswersTaskGet()

> `protected` **processGoogleQuestionsAndAnswersTaskGet**(`response`): `Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md)\>

Defined in: main.ts:21020

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md)\>

***

### processGoogleQuestionsAndAnswersTaskPost()

> `protected` **processGoogleQuestionsAndAnswersTaskPost**(`response`): `Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo.md)\>

Defined in: main.ts:20940

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo.md)\>

***

### processGoogleQuestionsAndAnswersTasksReady()

> `protected` **processGoogleQuestionsAndAnswersTasksReady**(`response`): `Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md)\>

Defined in: main.ts:20977

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md)\>

***

### processGoogleReviewsTaskGet()

> `protected` **processGoogleReviewsTaskGet**(`response`): `Promise`\<[`BusinessDataGoogleReviewsTaskGetResponseInfo`](BusinessDataGoogleReviewsTaskGetResponseInfo.md)\>

Defined in: main.ts:20776

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleReviewsTaskGetResponseInfo`](BusinessDataGoogleReviewsTaskGetResponseInfo.md)\>

***

### processGoogleReviewsTaskPost()

> `protected` **processGoogleReviewsTaskPost**(`response`): `Promise`\<[`BusinessDataGoogleReviewsTaskPostResponseInfo`](BusinessDataGoogleReviewsTaskPostResponseInfo.md)\>

Defined in: main.ts:20696

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleReviewsTaskPostResponseInfo`](BusinessDataGoogleReviewsTaskPostResponseInfo.md)\>

***

### processGoogleReviewsTasksReady()

> `protected` **processGoogleReviewsTasksReady**(`response`): `Promise`\<[`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)\>

Defined in: main.ts:20733

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)\>

***

### processSocialMediaFacebookLive()

> `protected` **processSocialMediaFacebookLive**(`response`): `Promise`\<[`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)\>

Defined in: main.ts:21753

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)\>

***

### processSocialMediaPinterestLive()

> `protected` **processSocialMediaPinterestLive**(`response`): `Promise`\<[`BusinessDataSocialMediaPinterestLiveResponseInfo`](BusinessDataSocialMediaPinterestLiveResponseInfo.md)\>

Defined in: main.ts:21711

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataSocialMediaPinterestLiveResponseInfo`](BusinessDataSocialMediaPinterestLiveResponseInfo.md)\>

***

### processSocialMediaRedditLive()

> `protected` **processSocialMediaRedditLive**(`response`): `Promise`\<[`BusinessDataSocialMediaRedditLiveResponseInfo`](BusinessDataSocialMediaRedditLiveResponseInfo.md)\>

Defined in: main.ts:21795

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataSocialMediaRedditLiveResponseInfo`](BusinessDataSocialMediaRedditLiveResponseInfo.md)\>

***

### processTripadvisorReviewsTaskGet()

> `protected` **processTripadvisorReviewsTaskGet**(`response`): `Promise`\<[`BusinessDataTripadvisorReviewsTaskGetResponseInfo`](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md)\>

Defined in: main.ts:21669

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorReviewsTaskGetResponseInfo`](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md)\>

***

### processTripadvisorReviewsTaskPost()

> `protected` **processTripadvisorReviewsTaskPost**(`response`): `Promise`\<[`BusinessDataTripadvisorReviewsTaskPostResponseInfo`](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md)\>

Defined in: main.ts:21589

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorReviewsTaskPostResponseInfo`](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md)\>

***

### processTripadvisorReviewsTasksReady()

> `protected` **processTripadvisorReviewsTasksReady**(`response`): `Promise`\<[`BusinessDataTripadvisorReviewsTasksReadyResponseInfo`](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)\>

Defined in: main.ts:21626

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorReviewsTasksReadyResponseInfo`](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)\>

***

### processTripadvisorSearchTaskGet()

> `protected` **processTripadvisorSearchTaskGet**(`response`): `Promise`\<[`BusinessDataTripadvisorSearchTaskGetResponseInfo`](BusinessDataTripadvisorSearchTaskGetResponseInfo.md)\>

Defined in: main.ts:21547

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorSearchTaskGetResponseInfo`](BusinessDataTripadvisorSearchTaskGetResponseInfo.md)\>

***

### processTripadvisorSearchTaskPost()

> `protected` **processTripadvisorSearchTaskPost**(`response`): `Promise`\<[`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)\>

Defined in: main.ts:21467

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)\>

***

### processTripadvisorSearchTasksReady()

> `protected` **processTripadvisorSearchTasksReady**(`response`): `Promise`\<[`BusinessDataTripadvisorSearchTasksReadyResponseInfo`](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md)\>

Defined in: main.ts:21504

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorSearchTasksReadyResponseInfo`](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md)\>

***

### processTrustpilotReviewsTaskGet()

> `protected` **processTrustpilotReviewsTaskGet**(`response`): `Promise`\<[`BusinessDataTrustpilotReviewsTaskGetResponseInfo`](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md)\>

Defined in: main.ts:21306

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataTrustpilotReviewsTaskGetResponseInfo`](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md)\>

***

### processTrustpilotReviewsTaskPost()

> `protected` **processTrustpilotReviewsTaskPost**(`response`): `Promise`\<[`BusinessDataTrustpilotReviewsTaskPostResponseInfo`](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md)\>

Defined in: main.ts:21226

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataTrustpilotReviewsTaskPostResponseInfo`](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md)\>

***

### processTrustpilotReviewsTasksReady()

> `protected` **processTrustpilotReviewsTasksReady**(`response`): `Promise`\<[`BusinessDataTrustpilotReviewsTasksReadyResponseInfo`](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)\>

Defined in: main.ts:21263

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataTrustpilotReviewsTasksReadyResponseInfo`](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)\>

***

### processTrustpilotSearchTaskGet()

> `protected` **processTrustpilotSearchTaskGet**(`response`): `Promise`\<[`BusinessDataTrustpilotSearchTaskGetResponseInfo`](BusinessDataTrustpilotSearchTaskGetResponseInfo.md)\>

Defined in: main.ts:21184

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataTrustpilotSearchTaskGetResponseInfo`](BusinessDataTrustpilotSearchTaskGetResponseInfo.md)\>

***

### processTrustpilotSearchTaskPost()

> `protected` **processTrustpilotSearchTaskPost**(`response`): `Promise`\<[`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)\>

Defined in: main.ts:21104

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)\>

***

### processTrustpilotSearchTasksReady()

> `protected` **processTrustpilotSearchTasksReady**(`response`): `Promise`\<[`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)\>

Defined in: main.ts:21141

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)\>

***

### socialMediaFacebookLive()

> **socialMediaFacebookLive**(`body`): `Promise`\<[`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)\>

Defined in: main.ts:21733

#### Parameters

##### body

[`BusinessDataSocialMediaFacebookLiveRequestInfo`](BusinessDataSocialMediaFacebookLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)\>

Successful operation

***

### socialMediaPinterestLive()

> **socialMediaPinterestLive**(`body`): `Promise`\<[`BusinessDataSocialMediaPinterestLiveResponseInfo`](BusinessDataSocialMediaPinterestLiveResponseInfo.md)\>

Defined in: main.ts:21691

#### Parameters

##### body

[`BusinessDataSocialMediaPinterestLiveRequestInfo`](BusinessDataSocialMediaPinterestLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataSocialMediaPinterestLiveResponseInfo`](BusinessDataSocialMediaPinterestLiveResponseInfo.md)\>

Successful operation

***

### socialMediaRedditLive()

> **socialMediaRedditLive**(`body`): `Promise`\<[`BusinessDataSocialMediaRedditLiveResponseInfo`](BusinessDataSocialMediaRedditLiveResponseInfo.md)\>

Defined in: main.ts:21775

#### Parameters

##### body

[`BusinessDataSocialMediaRedditLiveRequestInfo`](BusinessDataSocialMediaRedditLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataSocialMediaRedditLiveResponseInfo`](BusinessDataSocialMediaRedditLiveResponseInfo.md)\>

Successful operation

***

### tripadvisorReviewsTaskGet()

> **tripadvisorReviewsTaskGet**(`id`): `Promise`\<[`BusinessDataTripadvisorReviewsTaskGetResponseInfo`](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md)\>

Defined in: main.ts:21650

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`BusinessDataTripadvisorReviewsTaskGetResponseInfo`](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md)\>

Successful operation

***

### tripadvisorReviewsTaskPost()

> **tripadvisorReviewsTaskPost**(`body`): `Promise`\<[`BusinessDataTripadvisorReviewsTaskPostResponseInfo`](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md)\>

Defined in: main.ts:21569

#### Parameters

##### body

[`BusinessDataTripadvisorReviewsTaskPostRequestInfo`](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataTripadvisorReviewsTaskPostResponseInfo`](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md)\>

Successful operation

***

### tripadvisorReviewsTasksReady()

> **tripadvisorReviewsTasksReady**(): `Promise`\<[`BusinessDataTripadvisorReviewsTasksReadyResponseInfo`](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)\>

Defined in: main.ts:21610

#### Returns

`Promise`\<[`BusinessDataTripadvisorReviewsTasksReadyResponseInfo`](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)\>

Successful operation

***

### tripadvisorSearchTaskGet()

> **tripadvisorSearchTaskGet**(`id`): `Promise`\<[`BusinessDataTripadvisorSearchTaskGetResponseInfo`](BusinessDataTripadvisorSearchTaskGetResponseInfo.md)\>

Defined in: main.ts:21528

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`BusinessDataTripadvisorSearchTaskGetResponseInfo`](BusinessDataTripadvisorSearchTaskGetResponseInfo.md)\>

Successful operation

***

### tripadvisorSearchTaskPost()

> **tripadvisorSearchTaskPost**(`body`): `Promise`\<[`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)\>

Defined in: main.ts:21447

#### Parameters

##### body

[`BusinessDataTripadvisorSearchTaskPostRequestInfo`](BusinessDataTripadvisorSearchTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)\>

Successful operation

***

### tripadvisorSearchTasksReady()

> **tripadvisorSearchTasksReady**(): `Promise`\<[`BusinessDataTripadvisorSearchTasksReadyResponseInfo`](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md)\>

Defined in: main.ts:21488

#### Returns

`Promise`\<[`BusinessDataTripadvisorSearchTasksReadyResponseInfo`](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md)\>

Successful operation

***

### trustpilotReviewsTaskGet()

> **trustpilotReviewsTaskGet**(`id`): `Promise`\<[`BusinessDataTrustpilotReviewsTaskGetResponseInfo`](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md)\>

Defined in: main.ts:21287

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`BusinessDataTrustpilotReviewsTaskGetResponseInfo`](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md)\>

Successful operation

***

### trustpilotReviewsTaskPost()

> **trustpilotReviewsTaskPost**(`body`): `Promise`\<[`BusinessDataTrustpilotReviewsTaskPostResponseInfo`](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md)\>

Defined in: main.ts:21206

#### Parameters

##### body

[`BusinessDataTrustpilotReviewsTaskPostRequestInfo`](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataTrustpilotReviewsTaskPostResponseInfo`](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md)\>

Successful operation

***

### trustpilotReviewsTasksReady()

> **trustpilotReviewsTasksReady**(): `Promise`\<[`BusinessDataTrustpilotReviewsTasksReadyResponseInfo`](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)\>

Defined in: main.ts:21247

#### Returns

`Promise`\<[`BusinessDataTrustpilotReviewsTasksReadyResponseInfo`](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)\>

Successful operation

***

### trustpilotSearchTaskGet()

> **trustpilotSearchTaskGet**(`id`): `Promise`\<[`BusinessDataTrustpilotSearchTaskGetResponseInfo`](BusinessDataTrustpilotSearchTaskGetResponseInfo.md)\>

Defined in: main.ts:21165

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`BusinessDataTrustpilotSearchTaskGetResponseInfo`](BusinessDataTrustpilotSearchTaskGetResponseInfo.md)\>

Successful operation

***

### trustpilotSearchTaskPost()

> **trustpilotSearchTaskPost**(`body`): `Promise`\<[`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)\>

Defined in: main.ts:21084

#### Parameters

##### body

[`BusinessDataTrustpilotSearchTaskPostRequestInfo`](BusinessDataTrustpilotSearchTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)\>

Successful operation

***

### trustpilotSearchTasksReady()

> **trustpilotSearchTasksReady**(): `Promise`\<[`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)\>

Defined in: main.ts:21125

#### Returns

`Promise`\<[`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)\>

Successful operation
