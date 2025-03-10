[**Documentation**](../README.md)

***

[Documentation](../README.md) / Redirect

# Class: Redirect

Defined in: main.ts:161311

## Implements

- [`IRedirect`](../interfaces/IRedirect.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new Redirect()

> **new Redirect**(`data`?): [`Redirect`](Redirect.md)

Defined in: main.ts:161321

#### Parameters

##### data?

[`IRedirect`](../interfaces/IRedirect.md)

#### Returns

[`Redirect`](Redirect.md)

## Properties

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:161315

HTTP status code of the URL

#### Implementation of

[`IRedirect`](../interfaces/IRedirect.md).[`status_code`](../interfaces/IRedirect.md#status_code)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:161313

type of element

#### Implementation of

[`IRedirect`](../interfaces/IRedirect.md).[`type`](../interfaces/IRedirect.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:161317

indirect link URL

#### Implementation of

[`IRedirect`](../interfaces/IRedirect.md).[`url`](../interfaces/IRedirect.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:161330

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:161349

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`Redirect`](Redirect.md)

Defined in: main.ts:161342

#### Parameters

##### data

`any`

#### Returns

[`Redirect`](Redirect.md)
