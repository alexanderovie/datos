[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataUserProfileInfo

# Class: BusinessDataUserProfileInfo

Defined in: main.ts:239006

## Implements

- [`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataUserProfileInfo**(`data?`): `BusinessDataUserProfileInfo`

Defined in: main.ts:239020

#### Parameters

##### data?

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md)

#### Returns

`BusinessDataUserProfileInfo`

## Properties

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:239012

URL to the reviewer’s profile picture

#### Implementation of

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md).[`image_url`](../interfaces/IBusinessDataUserProfileInfo.md#image_url)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:239014

country of the reviewer

#### Implementation of

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md).[`location`](../interfaces/IBusinessDataUserProfileInfo.md#location)

***

### name?

> `optional` **name**: `string`

Defined in: main.ts:239008

the name of the reviewer

#### Implementation of

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md).[`name`](../interfaces/IBusinessDataUserProfileInfo.md#name)

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:239016

total number of reviews submitted by the reviewer

#### Implementation of

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md).[`reviews_count`](../interfaces/IBusinessDataUserProfileInfo.md#reviews_count)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:239010

URL to the reviewer’s profile

#### Implementation of

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md).[`url`](../interfaces/IBusinessDataUserProfileInfo.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:239029

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:239050

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataUserProfileInfo`

Defined in: main.ts:239043

#### Parameters

##### data

`any`

#### Returns

`BusinessDataUserProfileInfo`
