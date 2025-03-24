[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppUserProfileInfo

# Class: AppUserProfileInfo

Defined in: main.ts:215124

## Implements

- [`IAppUserProfileInfo`](../interfaces/IAppUserProfileInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppUserProfileInfo**(`data`?): `AppUserProfileInfo`

Defined in: main.ts:215132

#### Parameters

##### data?

[`IAppUserProfileInfo`](../interfaces/IAppUserProfileInfo.md)

#### Returns

`AppUserProfileInfo`

## Properties

### profile\_image\_url?

> `optional` **profile\_image\_url**: `string`

Defined in: main.ts:215128

URL to the reviewer’s profile image

#### Implementation of

[`IAppUserProfileInfo`](../interfaces/IAppUserProfileInfo.md).[`profile_image_url`](../interfaces/IAppUserProfileInfo.md#profile_image_url)

***

### profile\_name?

> `optional` **profile\_name**: `string`

Defined in: main.ts:215126

profile name of the reviewer

#### Implementation of

[`IAppUserProfileInfo`](../interfaces/IAppUserProfileInfo.md).[`profile_name`](../interfaces/IAppUserProfileInfo.md#profile_name)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:215141

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:215159

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AppUserProfileInfo`

Defined in: main.ts:215152

#### Parameters

##### data

`any`

#### Returns

`AppUserProfileInfo`
