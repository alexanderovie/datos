[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataSocialMediaRedditLiveResultInfo

# Class: BusinessDataSocialMediaRedditLiveResultInfo

Defined in: main.ts:242090

## Implements

- [`IBusinessDataSocialMediaRedditLiveResultInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataSocialMediaRedditLiveResultInfo**(`data`?): `BusinessDataSocialMediaRedditLiveResultInfo`

Defined in: main.ts:242101

#### Parameters

##### data?

[`IBusinessDataSocialMediaRedditLiveResultInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md)

#### Returns

`BusinessDataSocialMediaRedditLiveResultInfo`

## Properties

### page\_url?

> `optional` **page\_url**: `string`

Defined in: main.ts:242095

URL of the page the data is provided for
corresponding URL you specified in the targets array when setting a task

#### Implementation of

[`IBusinessDataSocialMediaRedditLiveResultInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md).[`page_url`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md#page_url)

***

### reddit\_reviews?

> `optional` **reddit\_reviews**: [`RedditReviews`](RedditReviews.md)[]

Defined in: main.ts:242097

reddit reviews for the page_url

#### Implementation of

[`IBusinessDataSocialMediaRedditLiveResultInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md).[`reddit_reviews`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md#reddit_reviews)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:242092

type of element

#### Implementation of

[`IBusinessDataSocialMediaRedditLiveResultInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md).[`type`](../interfaces/IBusinessDataSocialMediaRedditLiveResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:242110

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:242133

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataSocialMediaRedditLiveResultInfo`

Defined in: main.ts:242126

#### Parameters

##### data

`any`

#### Returns

`BusinessDataSocialMediaRedditLiveResultInfo`
