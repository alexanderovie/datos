[**Documentation**](../README.md)

***

[Documentation](../README.md) / UserProfileInfo

# Class: UserProfileInfo

Defined in: main.ts:206764

## Implements

- [`IUserProfileInfo`](../interfaces/IUserProfileInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new UserProfileInfo**(`data?`): `UserProfileInfo`

Defined in: main.ts:206778

#### Parameters

##### data?

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md)

#### Returns

`UserProfileInfo`

## Properties

### avatar?

> `optional` **avatar**: `string`

Defined in: main.ts:206768

URL to the profile picture of the reviewer

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`avatar`](../interfaces/IUserProfileInfo.md#avatar)

***

### locations?

> `optional` **locations**: `string`

Defined in: main.ts:206774

country of the reviewer

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`locations`](../interfaces/IUserProfileInfo.md#locations)

***

### name?

> `optional` **name**: `string`

Defined in: main.ts:206766

the name of the reviewer

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`name`](../interfaces/IUserProfileInfo.md#name)

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:206772

total number of reviews submitted by the reviewer

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`reviews_count`](../interfaces/IUserProfileInfo.md#reviews_count)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:206770

relevant url

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`url`](../interfaces/IUserProfileInfo.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:206787

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:206808

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `UserProfileInfo`

Defined in: main.ts:206801

#### Parameters

##### data

`any`

#### Returns

`UserProfileInfo`
