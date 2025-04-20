[**Documentation**](../README.md)

***

[Documentation](../README.md) / Redirect

# Class: Redirect

Defined in: main.ts:163904

## Implements

- [`IRedirect`](../interfaces/IRedirect.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new Redirect**(`data?`): `Redirect`

Defined in: main.ts:163914

#### Parameters

##### data?

[`IRedirect`](../interfaces/IRedirect.md)

#### Returns

`Redirect`

## Properties

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:163908

HTTP status code of the URL

#### Implementation of

[`IRedirect`](../interfaces/IRedirect.md).[`status_code`](../interfaces/IRedirect.md#status_code)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:163906

type of element

#### Implementation of

[`IRedirect`](../interfaces/IRedirect.md).[`type`](../interfaces/IRedirect.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:163910

indirect link URL

#### Implementation of

[`IRedirect`](../interfaces/IRedirect.md).[`url`](../interfaces/IRedirect.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:163923

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:163942

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `Redirect`

Defined in: main.ts:163935

#### Parameters

##### data

`any`

#### Returns

`Redirect`
