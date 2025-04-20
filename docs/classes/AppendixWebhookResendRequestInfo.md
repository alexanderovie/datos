[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppendixWebhookResendRequestInfo

# Class: AppendixWebhookResendRequestInfo

Defined in: main.ts:251348

## Implements

- [`IAppendixWebhookResendRequestInfo`](../interfaces/IAppendixWebhookResendRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppendixWebhookResendRequestInfo**(`data?`): `AppendixWebhookResendRequestInfo`

Defined in: main.ts:251357

#### Parameters

##### data?

[`IAppendixWebhookResendRequestInfo`](../interfaces/IAppendixWebhookResendRequestInfo.md)

#### Returns

`AppendixWebhookResendRequestInfo`

## Properties

### id?

> `optional` **id**: `string`

Defined in: main.ts:251353

task identifier
unique task identifier in our system in the UUID format
you can specify up to 100 identifiers;
each identifier in the task array must be specified as a separate object

#### Implementation of

[`IAppendixWebhookResendRequestInfo`](../interfaces/IAppendixWebhookResendRequestInfo.md).[`id`](../interfaces/IAppendixWebhookResendRequestInfo.md#id)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:251366

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:251383

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AppendixWebhookResendRequestInfo`

Defined in: main.ts:251376

#### Parameters

##### data

`any`

#### Returns

`AppendixWebhookResendRequestInfo`
