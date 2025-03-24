[**Documentation**](../README.md)

***

[Documentation](../README.md) / ApiException

# Class: ApiException

Defined in: main.ts:251032

## Extends

- `Error`

## Constructors

### Constructor

> **new ApiException**(`message`, `status`, `response`, `headers`, `result`): `ApiException`

Defined in: main.ts:251039

#### Parameters

##### message

`string`

##### status

`number`

##### response

`string`

##### headers

##### result

`any`

#### Returns

`ApiException`

#### Overrides

`Error.constructor`

## Properties

### headers

> **headers**: `object`

Defined in: main.ts:251036

#### Index Signature

\[`key`: `string`\]: `any`

***

### isApiException

> `protected` **isApiException**: `boolean` = `true`

Defined in: main.ts:251049

***

### message

> **message**: `string`

Defined in: main.ts:251033

#### Overrides

`Error.message`

***

### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.name`

***

### response

> **response**: `string`

Defined in: main.ts:251035

***

### result

> **result**: `any`

Defined in: main.ts:251037

***

### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`Error.stack`

***

### status

> **status**: `number`

Defined in: main.ts:251034

## Methods

### isApiException()

> `static` **isApiException**(`obj`): `obj is ApiException`

Defined in: main.ts:251051

#### Parameters

##### obj

`any`

#### Returns

`obj is ApiException`
