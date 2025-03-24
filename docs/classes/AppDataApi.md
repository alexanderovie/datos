[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataApi

# Class: AppDataApi

Defined in: main.ts:17823

## Constructors

### Constructor

> **new AppDataApi**(`baseUrl`?, `http`?): `AppDataApi`

Defined in: main.ts:17828

#### Parameters

##### baseUrl?

`string`

##### http?

###### fetch

#### Returns

`AppDataApi`

## Properties

### jsonParseReviver()

> `protected` **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

Defined in: main.ts:17826

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`any`

## Methods

### appDataAppleLanguages()

> **appDataAppleLanguages**(): `Promise`\<[`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)\>

Defined in: main.ts:18926

#### Returns

`Promise`\<[`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)\>

Successful operation

***

### appDataAppleLocations()

> **appDataAppleLocations**(): `Promise`\<[`AppDataAppleLocationsResponseInfo`](AppDataAppleLocationsResponseInfo.md)\>

Defined in: main.ts:18889

#### Returns

`Promise`\<[`AppDataAppleLocationsResponseInfo`](AppDataAppleLocationsResponseInfo.md)\>

Successful operation

***

### appDataErrors()

> **appDataErrors**(`body`): `Promise`\<[`AppDataErrorsResponseInfo`](AppDataErrorsResponseInfo.md)\>

Defined in: main.ts:17879

#### Parameters

##### body

[`AppDataErrorsRequestInfo`](AppDataErrorsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataErrorsResponseInfo`](AppDataErrorsResponseInfo.md)\>

Successful operation

***

### appDataGoogleLanguages()

> **appDataGoogleLanguages**(): `Promise`\<[`AppDataGoogleLanguagesResponseInfo`](AppDataGoogleLanguagesResponseInfo.md)\>

Defined in: main.ts:18039

#### Returns

`Promise`\<[`AppDataGoogleLanguagesResponseInfo`](AppDataGoogleLanguagesResponseInfo.md)\>

Successful operation

***

### appDataGoogleLocations()

> **appDataGoogleLocations**(): `Promise`\<[`AppDataGoogleLocationsResponseInfo`](AppDataGoogleLocationsResponseInfo.md)\>

Defined in: main.ts:17957

#### Returns

`Promise`\<[`AppDataGoogleLocationsResponseInfo`](AppDataGoogleLocationsResponseInfo.md)\>

Successful operation

***

### appDataGoogleLocationsCountry()

> **appDataGoogleLocationsCountry**(`country`): `Promise`\<[`AppDataGoogleLocationsCountryResponseInfo`](AppDataGoogleLocationsCountryResponseInfo.md)\>

Defined in: main.ts:17999

#### Parameters

##### country

`string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`AppDataGoogleLocationsCountryResponseInfo`](AppDataGoogleLocationsCountryResponseInfo.md)\>

Successful operation

***

### appDataIdList()

> **appDataIdList**(`body`): `Promise`\<[`AppDataIdListResponseInfo`](AppDataIdListResponseInfo.md)\>

Defined in: main.ts:17837

#### Parameters

##### body

[`AppDataIdListRequestInfo`](AppDataIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataIdListResponseInfo`](AppDataIdListResponseInfo.md)\>

Successful operation

***

### appDataTasksReady()

> **appDataTasksReady**(): `Promise`\<[`AppDataTasksReadyResponseInfo`](AppDataTasksReadyResponseInfo.md)\>

Defined in: main.ts:18155

#### Returns

`Promise`\<[`AppDataTasksReadyResponseInfo`](AppDataTasksReadyResponseInfo.md)\>

Successful operation

***

### appleAppInfoTaskGetAdvanced()

> **appleAppInfoTaskGetAdvanced**(`id`): `Promise`\<[`AppDataAppleAppInfoTaskGetAdvancedResponseInfo`](AppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:19167

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataAppleAppInfoTaskGetAdvancedResponseInfo`](AppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### appleAppInfoTaskPost()

> **appleAppInfoTaskPost**(`body`): `Promise`\<[`AppDataAppleAppInfoTaskPostResponseInfo`](AppDataAppleAppInfoTaskPostResponseInfo.md)\>

Defined in: main.ts:19086

#### Parameters

##### body

[`AppDataAppleAppInfoTaskPostRequestInfo`](AppDataAppleAppInfoTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataAppleAppInfoTaskPostResponseInfo`](AppDataAppleAppInfoTaskPostResponseInfo.md)\>

Successful operation

***

### appleAppInfoTasksReady()

> **appleAppInfoTasksReady**(): `Promise`\<[`AppDataAppleAppInfoTasksReadyResponseInfo`](AppDataAppleAppInfoTasksReadyResponseInfo.md)\>

Defined in: main.ts:19127

#### Returns

`Promise`\<[`AppDataAppleAppInfoTasksReadyResponseInfo`](AppDataAppleAppInfoTasksReadyResponseInfo.md)\>

Successful operation

***

### appleAppListingsCategories()

> **appleAppListingsCategories**(): `Promise`\<[`AppDataAppleAppListingsCategoriesResponseInfo`](AppDataAppleAppListingsCategoriesResponseInfo.md)\>

Defined in: main.ts:19451

#### Returns

`Promise`\<[`AppDataAppleAppListingsCategoriesResponseInfo`](AppDataAppleAppListingsCategoriesResponseInfo.md)\>

Successful operation

***

### appleAppListingsSearchLive()

> **appleAppListingsSearchLive**(`body`): `Promise`\<[`AppDataAppleAppListingsSearchLiveResponseInfo`](AppDataAppleAppListingsSearchLiveResponseInfo.md)\>

Defined in: main.ts:19489

#### Parameters

##### body

[`AppDataAppleAppListingsSearchLiveRequestInfo`](AppDataAppleAppListingsSearchLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataAppleAppListingsSearchLiveResponseInfo`](AppDataAppleAppListingsSearchLiveResponseInfo.md)\>

Successful operation

***

### appleAppListTaskGetAdvanced()

> **appleAppListTaskGetAdvanced**(`id`): `Promise`\<[`AppDataAppleAppListTaskGetAdvancedResponseInfo`](AppDataAppleAppListTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:19289

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataAppleAppListTaskGetAdvancedResponseInfo`](AppDataAppleAppListTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### appleAppListTaskPost()

> **appleAppListTaskPost**(`body`): `Promise`\<[`AppDataAppleAppListTaskPostResponseInfo`](AppDataAppleAppListTaskPostResponseInfo.md)\>

Defined in: main.ts:19208

#### Parameters

##### body

[`AppDataAppleAppListTaskPostRequestInfo`](AppDataAppleAppListTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataAppleAppListTaskPostResponseInfo`](AppDataAppleAppListTaskPostResponseInfo.md)\>

Successful operation

***

### appleAppListTasksReady()

> **appleAppListTasksReady**(): `Promise`\<[`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)\>

Defined in: main.ts:19249

#### Returns

`Promise`\<[`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)\>

Successful operation

***

### appleAppReviewsTaskGetAdvanced()

> **appleAppReviewsTaskGetAdvanced**(`id`): `Promise`\<[`AppDataAppleAppReviewsTaskGetAdvancedResponseInfo`](AppDataAppleAppReviewsTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:19411

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataAppleAppReviewsTaskGetAdvancedResponseInfo`](AppDataAppleAppReviewsTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### appleAppReviewsTaskPost()

> **appleAppReviewsTaskPost**(`body`): `Promise`\<[`AppDataAppleAppReviewsTaskPostResponseInfo`](AppDataAppleAppReviewsTaskPostResponseInfo.md)\>

Defined in: main.ts:19330

#### Parameters

##### body

[`AppDataAppleAppReviewsTaskPostRequestInfo`](AppDataAppleAppReviewsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataAppleAppReviewsTaskPostResponseInfo`](AppDataAppleAppReviewsTaskPostResponseInfo.md)\>

Successful operation

***

### appleAppReviewsTasksReady()

> **appleAppReviewsTasksReady**(): `Promise`\<[`AppDataAppleAppReviewsTasksReadyResponseInfo`](AppDataAppleAppReviewsTasksReadyResponseInfo.md)\>

Defined in: main.ts:19371

#### Returns

`Promise`\<[`AppDataAppleAppReviewsTasksReadyResponseInfo`](AppDataAppleAppReviewsTasksReadyResponseInfo.md)\>

Successful operation

***

### appleAppSearchesTaskGetAdvanced()

> **appleAppSearchesTaskGetAdvanced**(`id`): `Promise`\<[`AppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:19045

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### appleAppSearchesTaskPost()

> **appleAppSearchesTaskPost**(`body`): `Promise`\<[`AppDataAppleAppSearchesTaskPostResponseInfo`](AppDataAppleAppSearchesTaskPostResponseInfo.md)\>

Defined in: main.ts:18964

#### Parameters

##### body

[`AppDataAppleAppSearchesTaskPostRequestInfo`](AppDataAppleAppSearchesTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataAppleAppSearchesTaskPostResponseInfo`](AppDataAppleAppSearchesTaskPostResponseInfo.md)\>

Successful operation

***

### appleAppSearchesTasksReady()

> **appleAppSearchesTasksReady**(): `Promise`\<[`AppDataAppleAppSearchesTasksReadyResponseInfo`](AppDataAppleAppSearchesTasksReadyResponseInfo.md)\>

Defined in: main.ts:19005

#### Returns

`Promise`\<[`AppDataAppleAppSearchesTasksReadyResponseInfo`](AppDataAppleAppSearchesTasksReadyResponseInfo.md)\>

Successful operation

***

### appleCategories()

> **appleCategories**(): `Promise`\<[`AppDataAppleCategoriesResponseInfo`](AppDataAppleCategoriesResponseInfo.md)\>

Defined in: main.ts:18852

#### Returns

`Promise`\<[`AppDataAppleCategoriesResponseInfo`](AppDataAppleCategoriesResponseInfo.md)\>

Successful operation

***

### googleAppInfoTaskGetAdvanced()

> **googleAppInfoTaskGetAdvanced**(`id`): `Promise`\<[`AppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](AppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:18525

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](AppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### googleAppInfoTaskGetHtml()

> **googleAppInfoTaskGetHtml**(`id`): `Promise`\<[`AppDataGoogleAppInfoTaskGetHtmlResponseInfo`](AppDataGoogleAppInfoTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:18568

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTaskGetHtmlResponseInfo`](AppDataGoogleAppInfoTaskGetHtmlResponseInfo.md)\>

Successful operation

***

### googleAppInfoTaskPost()

> **googleAppInfoTaskPost**(`body`): `Promise`\<[`AppDataGoogleAppInfoTaskPostResponseInfo`](AppDataGoogleAppInfoTaskPostResponseInfo.md)\>

Defined in: main.ts:18444

#### Parameters

##### body

[`AppDataGoogleAppInfoTaskPostRequestInfo`](AppDataGoogleAppInfoTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTaskPostResponseInfo`](AppDataGoogleAppInfoTaskPostResponseInfo.md)\>

Successful operation

***

### googleAppInfoTasksReady()

> **googleAppInfoTasksReady**(): `Promise`\<[`AppDataGoogleAppInfoTasksReadyResponseInfo`](AppDataGoogleAppInfoTasksReadyResponseInfo.md)\>

Defined in: main.ts:18485

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTasksReadyResponseInfo`](AppDataGoogleAppInfoTasksReadyResponseInfo.md)\>

Successful operation

***

### googleAppListingsCategories()

> **googleAppListingsCategories**(): `Promise`\<[`AppDataGoogleAppListingsCategoriesResponseInfo`](AppDataGoogleAppListingsCategoriesResponseInfo.md)\>

Defined in: main.ts:18773

#### Returns

`Promise`\<[`AppDataGoogleAppListingsCategoriesResponseInfo`](AppDataGoogleAppListingsCategoriesResponseInfo.md)\>

Successful operation

***

### googleAppListingsSearchLive()

> **googleAppListingsSearchLive**(`body`): `Promise`\<[`AppDataGoogleAppListingsSearchLiveResponseInfo`](AppDataGoogleAppListingsSearchLiveResponseInfo.md)\>

Defined in: main.ts:18811

#### Parameters

##### body

[`AppDataGoogleAppListingsSearchLiveRequestInfo`](AppDataGoogleAppListingsSearchLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataGoogleAppListingsSearchLiveResponseInfo`](AppDataGoogleAppListingsSearchLiveResponseInfo.md)\>

Successful operation

***

### googleAppListTaskGetAdvanced()

> **googleAppListTaskGetAdvanced**(`id`): `Promise`\<[`AppDataGoogleAppListTaskGetAdvancedResponseInfo`](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:18360

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataGoogleAppListTaskGetAdvancedResponseInfo`](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### googleAppListTaskGetHtml()

> **googleAppListTaskGetHtml**(`id`): `Promise`\<[`AppDataGoogleAppListTaskGetHtmlResponseInfo`](AppDataGoogleAppListTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:18403

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataGoogleAppListTaskGetHtmlResponseInfo`](AppDataGoogleAppListTaskGetHtmlResponseInfo.md)\>

Successful operation

***

### googleAppListTaskPost()

> **googleAppListTaskPost**(`body`): `Promise`\<[`AppDataGoogleAppListTaskPostResponseInfo`](AppDataGoogleAppListTaskPostResponseInfo.md)\>

Defined in: main.ts:18279

#### Parameters

##### body

[`AppDataGoogleAppListTaskPostRequestInfo`](AppDataGoogleAppListTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataGoogleAppListTaskPostResponseInfo`](AppDataGoogleAppListTaskPostResponseInfo.md)\>

Successful operation

***

### googleAppListTasksReady()

> **googleAppListTasksReady**(): `Promise`\<[`AppDataGoogleAppListTasksReadyResponseInfo`](AppDataGoogleAppListTasksReadyResponseInfo.md)\>

Defined in: main.ts:18320

#### Returns

`Promise`\<[`AppDataGoogleAppListTasksReadyResponseInfo`](AppDataGoogleAppListTasksReadyResponseInfo.md)\>

Successful operation

***

### googleAppReviewsTaskGetAdvanced()

> **googleAppReviewsTaskGetAdvanced**(`id`): `Promise`\<[`AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:18690

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### googleAppReviewsTaskGetHtml()

> **googleAppReviewsTaskGetHtml**(`id`): `Promise`\<[`AppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:18733

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)\>

Successful operation

***

### googleAppReviewsTaskPost()

> **googleAppReviewsTaskPost**(`body`): `Promise`\<[`AppDataGoogleAppReviewsTaskPostResponseInfo`](AppDataGoogleAppReviewsTaskPostResponseInfo.md)\>

Defined in: main.ts:18609

#### Parameters

##### body

[`AppDataGoogleAppReviewsTaskPostRequestInfo`](AppDataGoogleAppReviewsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTaskPostResponseInfo`](AppDataGoogleAppReviewsTaskPostResponseInfo.md)\>

Successful operation

***

### googleAppReviewsTasksReady()

> **googleAppReviewsTasksReady**(): `Promise`\<[`AppDataGoogleAppReviewsTasksReadyResponseInfo`](AppDataGoogleAppReviewsTasksReadyResponseInfo.md)\>

Defined in: main.ts:18650

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTasksReadyResponseInfo`](AppDataGoogleAppReviewsTasksReadyResponseInfo.md)\>

Successful operation

***

### googleAppSearchesTaskGetAdvanced()

> **googleAppSearchesTaskGetAdvanced**(`id`): `Promise`\<[`AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:18195

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### googleAppSearchesTaskGetHtml()

> **googleAppSearchesTaskGetHtml**(`id`): `Promise`\<[`AppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:18238

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)\>

Successful operation

***

### googleAppSearchesTaskPost()

> **googleAppSearchesTaskPost**(`body`): `Promise`\<[`AppDataGoogleAppSearchesTaskPostResponseInfo`](AppDataGoogleAppSearchesTaskPostResponseInfo.md)\>

Defined in: main.ts:18077

#### Parameters

##### body

[`AppDataGoogleAppSearchesTaskPostRequestInfo`](AppDataGoogleAppSearchesTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTaskPostResponseInfo`](AppDataGoogleAppSearchesTaskPostResponseInfo.md)\>

Successful operation

***

### googleAppSearchesTasksReady()

> **googleAppSearchesTasksReady**(): `Promise`\<[`AppDataGoogleAppSearchesTasksReadyResponseInfo`](AppDataGoogleAppSearchesTasksReadyResponseInfo.md)\>

Defined in: main.ts:18118

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTasksReadyResponseInfo`](AppDataGoogleAppSearchesTasksReadyResponseInfo.md)\>

Successful operation

***

### googleCategories()

> **googleCategories**(): `Promise`\<[`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)\>

Defined in: main.ts:17920

#### Returns

`Promise`\<[`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)\>

Successful operation

***

### processAppDataAppleLanguages()

> `protected` **processAppDataAppleLanguages**(`response`): `Promise`\<[`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)\>

Defined in: main.ts:18942

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)\>

***

### processAppDataAppleLocations()

> `protected` **processAppDataAppleLocations**(`response`): `Promise`\<[`AppDataAppleLocationsResponseInfo`](AppDataAppleLocationsResponseInfo.md)\>

Defined in: main.ts:18905

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleLocationsResponseInfo`](AppDataAppleLocationsResponseInfo.md)\>

***

### processAppDataErrors()

> `protected` **processAppDataErrors**(`response`): `Promise`\<[`AppDataErrorsResponseInfo`](AppDataErrorsResponseInfo.md)\>

Defined in: main.ts:17899

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataErrorsResponseInfo`](AppDataErrorsResponseInfo.md)\>

***

### processAppDataGoogleLanguages()

> `protected` **processAppDataGoogleLanguages**(`response`): `Promise`\<[`AppDataGoogleLanguagesResponseInfo`](AppDataGoogleLanguagesResponseInfo.md)\>

Defined in: main.ts:18055

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleLanguagesResponseInfo`](AppDataGoogleLanguagesResponseInfo.md)\>

***

### processAppDataGoogleLocations()

> `protected` **processAppDataGoogleLocations**(`response`): `Promise`\<[`AppDataGoogleLocationsResponseInfo`](AppDataGoogleLocationsResponseInfo.md)\>

Defined in: main.ts:17973

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleLocationsResponseInfo`](AppDataGoogleLocationsResponseInfo.md)\>

***

### processAppDataGoogleLocationsCountry()

> `protected` **processAppDataGoogleLocationsCountry**(`response`): `Promise`\<[`AppDataGoogleLocationsCountryResponseInfo`](AppDataGoogleLocationsCountryResponseInfo.md)\>

Defined in: main.ts:18018

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleLocationsCountryResponseInfo`](AppDataGoogleLocationsCountryResponseInfo.md)\>

***

### processAppDataIdList()

> `protected` **processAppDataIdList**(`response`): `Promise`\<[`AppDataIdListResponseInfo`](AppDataIdListResponseInfo.md)\>

Defined in: main.ts:17857

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataIdListResponseInfo`](AppDataIdListResponseInfo.md)\>

***

### processAppDataTasksReady()

> `protected` **processAppDataTasksReady**(`response`): `Promise`\<[`AppDataTasksReadyResponseInfo`](AppDataTasksReadyResponseInfo.md)\>

Defined in: main.ts:18171

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataTasksReadyResponseInfo`](AppDataTasksReadyResponseInfo.md)\>

***

### processAppleAppInfoTaskGetAdvanced()

> `protected` **processAppleAppInfoTaskGetAdvanced**(`response`): `Promise`\<[`AppDataAppleAppInfoTaskGetAdvancedResponseInfo`](AppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:19186

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppInfoTaskGetAdvancedResponseInfo`](AppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)\>

***

### processAppleAppInfoTaskPost()

> `protected` **processAppleAppInfoTaskPost**(`response`): `Promise`\<[`AppDataAppleAppInfoTaskPostResponseInfo`](AppDataAppleAppInfoTaskPostResponseInfo.md)\>

Defined in: main.ts:19106

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppInfoTaskPostResponseInfo`](AppDataAppleAppInfoTaskPostResponseInfo.md)\>

***

### processAppleAppInfoTasksReady()

> `protected` **processAppleAppInfoTasksReady**(`response`): `Promise`\<[`AppDataAppleAppInfoTasksReadyResponseInfo`](AppDataAppleAppInfoTasksReadyResponseInfo.md)\>

Defined in: main.ts:19143

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppInfoTasksReadyResponseInfo`](AppDataAppleAppInfoTasksReadyResponseInfo.md)\>

***

### processAppleAppListingsCategories()

> `protected` **processAppleAppListingsCategories**(`response`): `Promise`\<[`AppDataAppleAppListingsCategoriesResponseInfo`](AppDataAppleAppListingsCategoriesResponseInfo.md)\>

Defined in: main.ts:19467

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppListingsCategoriesResponseInfo`](AppDataAppleAppListingsCategoriesResponseInfo.md)\>

***

### processAppleAppListingsSearchLive()

> `protected` **processAppleAppListingsSearchLive**(`response`): `Promise`\<[`AppDataAppleAppListingsSearchLiveResponseInfo`](AppDataAppleAppListingsSearchLiveResponseInfo.md)\>

Defined in: main.ts:19509

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppListingsSearchLiveResponseInfo`](AppDataAppleAppListingsSearchLiveResponseInfo.md)\>

***

### processAppleAppListTaskGetAdvanced()

> `protected` **processAppleAppListTaskGetAdvanced**(`response`): `Promise`\<[`AppDataAppleAppListTaskGetAdvancedResponseInfo`](AppDataAppleAppListTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:19308

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppListTaskGetAdvancedResponseInfo`](AppDataAppleAppListTaskGetAdvancedResponseInfo.md)\>

***

### processAppleAppListTaskPost()

> `protected` **processAppleAppListTaskPost**(`response`): `Promise`\<[`AppDataAppleAppListTaskPostResponseInfo`](AppDataAppleAppListTaskPostResponseInfo.md)\>

Defined in: main.ts:19228

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppListTaskPostResponseInfo`](AppDataAppleAppListTaskPostResponseInfo.md)\>

***

### processAppleAppListTasksReady()

> `protected` **processAppleAppListTasksReady**(`response`): `Promise`\<[`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)\>

Defined in: main.ts:19265

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)\>

***

### processAppleAppReviewsTaskGetAdvanced()

> `protected` **processAppleAppReviewsTaskGetAdvanced**(`response`): `Promise`\<[`AppDataAppleAppReviewsTaskGetAdvancedResponseInfo`](AppDataAppleAppReviewsTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:19430

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppReviewsTaskGetAdvancedResponseInfo`](AppDataAppleAppReviewsTaskGetAdvancedResponseInfo.md)\>

***

### processAppleAppReviewsTaskPost()

> `protected` **processAppleAppReviewsTaskPost**(`response`): `Promise`\<[`AppDataAppleAppReviewsTaskPostResponseInfo`](AppDataAppleAppReviewsTaskPostResponseInfo.md)\>

Defined in: main.ts:19350

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppReviewsTaskPostResponseInfo`](AppDataAppleAppReviewsTaskPostResponseInfo.md)\>

***

### processAppleAppReviewsTasksReady()

> `protected` **processAppleAppReviewsTasksReady**(`response`): `Promise`\<[`AppDataAppleAppReviewsTasksReadyResponseInfo`](AppDataAppleAppReviewsTasksReadyResponseInfo.md)\>

Defined in: main.ts:19387

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppReviewsTasksReadyResponseInfo`](AppDataAppleAppReviewsTasksReadyResponseInfo.md)\>

***

### processAppleAppSearchesTaskGetAdvanced()

> `protected` **processAppleAppSearchesTaskGetAdvanced**(`response`): `Promise`\<[`AppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:19064

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)\>

***

### processAppleAppSearchesTaskPost()

> `protected` **processAppleAppSearchesTaskPost**(`response`): `Promise`\<[`AppDataAppleAppSearchesTaskPostResponseInfo`](AppDataAppleAppSearchesTaskPostResponseInfo.md)\>

Defined in: main.ts:18984

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppSearchesTaskPostResponseInfo`](AppDataAppleAppSearchesTaskPostResponseInfo.md)\>

***

### processAppleAppSearchesTasksReady()

> `protected` **processAppleAppSearchesTasksReady**(`response`): `Promise`\<[`AppDataAppleAppSearchesTasksReadyResponseInfo`](AppDataAppleAppSearchesTasksReadyResponseInfo.md)\>

Defined in: main.ts:19021

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppSearchesTasksReadyResponseInfo`](AppDataAppleAppSearchesTasksReadyResponseInfo.md)\>

***

### processAppleCategories()

> `protected` **processAppleCategories**(`response`): `Promise`\<[`AppDataAppleCategoriesResponseInfo`](AppDataAppleCategoriesResponseInfo.md)\>

Defined in: main.ts:18868

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleCategoriesResponseInfo`](AppDataAppleCategoriesResponseInfo.md)\>

***

### processGoogleAppInfoTaskGetAdvanced()

> `protected` **processGoogleAppInfoTaskGetAdvanced**(`response`): `Promise`\<[`AppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](AppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:18544

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](AppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md)\>

***

### processGoogleAppInfoTaskGetHtml()

> `protected` **processGoogleAppInfoTaskGetHtml**(`response`): `Promise`\<[`AppDataGoogleAppInfoTaskGetHtmlResponseInfo`](AppDataGoogleAppInfoTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:18587

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTaskGetHtmlResponseInfo`](AppDataGoogleAppInfoTaskGetHtmlResponseInfo.md)\>

***

### processGoogleAppInfoTaskPost()

> `protected` **processGoogleAppInfoTaskPost**(`response`): `Promise`\<[`AppDataGoogleAppInfoTaskPostResponseInfo`](AppDataGoogleAppInfoTaskPostResponseInfo.md)\>

Defined in: main.ts:18464

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTaskPostResponseInfo`](AppDataGoogleAppInfoTaskPostResponseInfo.md)\>

***

### processGoogleAppInfoTasksReady()

> `protected` **processGoogleAppInfoTasksReady**(`response`): `Promise`\<[`AppDataGoogleAppInfoTasksReadyResponseInfo`](AppDataGoogleAppInfoTasksReadyResponseInfo.md)\>

Defined in: main.ts:18501

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTasksReadyResponseInfo`](AppDataGoogleAppInfoTasksReadyResponseInfo.md)\>

***

### processGoogleAppListingsCategories()

> `protected` **processGoogleAppListingsCategories**(`response`): `Promise`\<[`AppDataGoogleAppListingsCategoriesResponseInfo`](AppDataGoogleAppListingsCategoriesResponseInfo.md)\>

Defined in: main.ts:18789

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppListingsCategoriesResponseInfo`](AppDataGoogleAppListingsCategoriesResponseInfo.md)\>

***

### processGoogleAppListingsSearchLive()

> `protected` **processGoogleAppListingsSearchLive**(`response`): `Promise`\<[`AppDataGoogleAppListingsSearchLiveResponseInfo`](AppDataGoogleAppListingsSearchLiveResponseInfo.md)\>

Defined in: main.ts:18831

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppListingsSearchLiveResponseInfo`](AppDataGoogleAppListingsSearchLiveResponseInfo.md)\>

***

### processGoogleAppListTaskGetAdvanced()

> `protected` **processGoogleAppListTaskGetAdvanced**(`response`): `Promise`\<[`AppDataGoogleAppListTaskGetAdvancedResponseInfo`](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:18379

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppListTaskGetAdvancedResponseInfo`](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md)\>

***

### processGoogleAppListTaskGetHtml()

> `protected` **processGoogleAppListTaskGetHtml**(`response`): `Promise`\<[`AppDataGoogleAppListTaskGetHtmlResponseInfo`](AppDataGoogleAppListTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:18422

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppListTaskGetHtmlResponseInfo`](AppDataGoogleAppListTaskGetHtmlResponseInfo.md)\>

***

### processGoogleAppListTaskPost()

> `protected` **processGoogleAppListTaskPost**(`response`): `Promise`\<[`AppDataGoogleAppListTaskPostResponseInfo`](AppDataGoogleAppListTaskPostResponseInfo.md)\>

Defined in: main.ts:18299

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppListTaskPostResponseInfo`](AppDataGoogleAppListTaskPostResponseInfo.md)\>

***

### processGoogleAppListTasksReady()

> `protected` **processGoogleAppListTasksReady**(`response`): `Promise`\<[`AppDataGoogleAppListTasksReadyResponseInfo`](AppDataGoogleAppListTasksReadyResponseInfo.md)\>

Defined in: main.ts:18336

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppListTasksReadyResponseInfo`](AppDataGoogleAppListTasksReadyResponseInfo.md)\>

***

### processGoogleAppReviewsTaskGetAdvanced()

> `protected` **processGoogleAppReviewsTaskGetAdvanced**(`response`): `Promise`\<[`AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:18709

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md)\>

***

### processGoogleAppReviewsTaskGetHtml()

> `protected` **processGoogleAppReviewsTaskGetHtml**(`response`): `Promise`\<[`AppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:18752

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)\>

***

### processGoogleAppReviewsTaskPost()

> `protected` **processGoogleAppReviewsTaskPost**(`response`): `Promise`\<[`AppDataGoogleAppReviewsTaskPostResponseInfo`](AppDataGoogleAppReviewsTaskPostResponseInfo.md)\>

Defined in: main.ts:18629

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTaskPostResponseInfo`](AppDataGoogleAppReviewsTaskPostResponseInfo.md)\>

***

### processGoogleAppReviewsTasksReady()

> `protected` **processGoogleAppReviewsTasksReady**(`response`): `Promise`\<[`AppDataGoogleAppReviewsTasksReadyResponseInfo`](AppDataGoogleAppReviewsTasksReadyResponseInfo.md)\>

Defined in: main.ts:18666

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTasksReadyResponseInfo`](AppDataGoogleAppReviewsTasksReadyResponseInfo.md)\>

***

### processGoogleAppSearchesTaskGetAdvanced()

> `protected` **processGoogleAppSearchesTaskGetAdvanced**(`response`): `Promise`\<[`AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:18214

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md)\>

***

### processGoogleAppSearchesTaskGetHtml()

> `protected` **processGoogleAppSearchesTaskGetHtml**(`response`): `Promise`\<[`AppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:18257

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)\>

***

### processGoogleAppSearchesTaskPost()

> `protected` **processGoogleAppSearchesTaskPost**(`response`): `Promise`\<[`AppDataGoogleAppSearchesTaskPostResponseInfo`](AppDataGoogleAppSearchesTaskPostResponseInfo.md)\>

Defined in: main.ts:18097

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTaskPostResponseInfo`](AppDataGoogleAppSearchesTaskPostResponseInfo.md)\>

***

### processGoogleAppSearchesTasksReady()

> `protected` **processGoogleAppSearchesTasksReady**(`response`): `Promise`\<[`AppDataGoogleAppSearchesTasksReadyResponseInfo`](AppDataGoogleAppSearchesTasksReadyResponseInfo.md)\>

Defined in: main.ts:18134

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTasksReadyResponseInfo`](AppDataGoogleAppSearchesTasksReadyResponseInfo.md)\>

***

### processGoogleCategories()

> `protected` **processGoogleCategories**(`response`): `Promise`\<[`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)\>

Defined in: main.ts:17936

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)\>
