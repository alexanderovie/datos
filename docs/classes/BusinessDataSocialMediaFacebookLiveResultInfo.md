[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataSocialMediaFacebookLiveResultInfo

# Class: BusinessDataSocialMediaFacebookLiveResultInfo

Defined in: main.ts:241756

## Implements

- [`IBusinessDataSocialMediaFacebookLiveResultInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataSocialMediaFacebookLiveResultInfo**(`data`?): `BusinessDataSocialMediaFacebookLiveResultInfo`

Defined in: main.ts:241768

#### Parameters

##### data?

[`IBusinessDataSocialMediaFacebookLiveResultInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md)

#### Returns

`BusinessDataSocialMediaFacebookLiveResultInfo`

## Properties

### like\_count?

> `optional` **like\_count**: `number`

Defined in: main.ts:241764

number of likes for the related page_url
this field shows the number of likes a page received through the Facebook Like Button embed

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResultInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md).[`like_count`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md#like_count)

***

### page\_url?

> `optional` **page\_url**: `string`

Defined in: main.ts:241761

URL of the page the data is provided for
corresponding URL you specified in the targets array when setting a task

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResultInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md).[`page_url`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md#page_url)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:241758

type of element

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResultInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md).[`type`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:241777

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:241796

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataSocialMediaFacebookLiveResultInfo`

Defined in: main.ts:241789

#### Parameters

##### data

`any`

#### Returns

`BusinessDataSocialMediaFacebookLiveResultInfo`
