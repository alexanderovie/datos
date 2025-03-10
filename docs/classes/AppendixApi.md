[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppendixApi

# Class: AppendixApi

Defined in: main.ts:21608

## Constructors

### new AppendixApi()

> **new AppendixApi**(`baseUrl`?, `http`?): [`AppendixApi`](AppendixApi.md)

Defined in: main.ts:21613

#### Parameters

##### baseUrl?

`string`

##### http?

###### fetch

#### Returns

[`AppendixApi`](AppendixApi.md)

## Properties

### jsonParseReviver()

> `protected` **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

Defined in: main.ts:21611

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`any`

## Methods

### appendixErrors()

> **appendixErrors**(): `Promise`\<[`AppendixErrorsResponseInfo`](AppendixErrorsResponseInfo.md)\>

Defined in: main.ts:21658

#### Returns

`Promise`\<[`AppendixErrorsResponseInfo`](AppendixErrorsResponseInfo.md)\>

Successful operation

***

### appendixStatus()

> **appendixStatus**(): `Promise`\<[`AppendixStatusResponseInfo`](AppendixStatusResponseInfo.md)\>

Defined in: main.ts:21737

#### Returns

`Promise`\<[`AppendixStatusResponseInfo`](AppendixStatusResponseInfo.md)\>

Successful operation

***

### processAppendixErrors()

> `protected` **processAppendixErrors**(`response`): `Promise`\<[`AppendixErrorsResponseInfo`](AppendixErrorsResponseInfo.md)\>

Defined in: main.ts:21674

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppendixErrorsResponseInfo`](AppendixErrorsResponseInfo.md)\>

***

### processAppendixStatus()

> `protected` **processAppendixStatus**(`response`): `Promise`\<[`AppendixStatusResponseInfo`](AppendixStatusResponseInfo.md)\>

Defined in: main.ts:21753

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppendixStatusResponseInfo`](AppendixStatusResponseInfo.md)\>

***

### processUserData()

> `protected` **processUserData**(`response`): `Promise`\<[`AppendixUserDataResponseInfo`](AppendixUserDataResponseInfo.md)\>

Defined in: main.ts:21637

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppendixUserDataResponseInfo`](AppendixUserDataResponseInfo.md)\>

***

### processWebhookResend()

> `protected` **processWebhookResend**(`response`): `Promise`\<[`AppendixWebhookResendResponseInfo`](AppendixWebhookResendResponseInfo.md)\>

Defined in: main.ts:21716

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppendixWebhookResendResponseInfo`](AppendixWebhookResendResponseInfo.md)\>

***

### userData()

> **userData**(): `Promise`\<[`AppendixUserDataResponseInfo`](AppendixUserDataResponseInfo.md)\>

Defined in: main.ts:21621

#### Returns

`Promise`\<[`AppendixUserDataResponseInfo`](AppendixUserDataResponseInfo.md)\>

Successful operation

***

### webhookResend()

> **webhookResend**(`body`): `Promise`\<[`AppendixWebhookResendResponseInfo`](AppendixWebhookResendResponseInfo.md)\>

Defined in: main.ts:21696

#### Parameters

##### body

[`AppendixWebhookResendRequestInfo`](AppendixWebhookResendRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppendixWebhookResendResponseInfo`](AppendixWebhookResendResponseInfo.md)\>

Successful operation
