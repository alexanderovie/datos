[**Documentation**](../README.md)

***

[Documentation](../README.md) / Pages

# Class: Pages

Defined in: main.ts:181300

## Implements

- [`IPages`](../interfaces/IPages.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new Pages**(`data?`): `Pages`

Defined in: main.ts:181310

#### Parameters

##### data?

[`IPages`](../interfaces/IPages.md)

#### Returns

`Pages`

## Properties

### page?

> `optional` **page**: [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)[]

Defined in: main.ts:181306

information about the page with duplicate content

#### Implementation of

[`IPages`](../interfaces/IPages.md).[`page`](../interfaces/IPages.md#page)

***

### similarity?

> `optional` **similarity**: `number`

Defined in: main.ts:181304

content similarity score
by default, the content is considered duplicate if the value is greater than or equals 6
can take values from 0 to 10

#### Implementation of

[`IPages`](../interfaces/IPages.md).[`similarity`](../interfaces/IPages.md#similarity)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:181319

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:181341

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `Pages`

Defined in: main.ts:181334

#### Parameters

##### data

`any`

#### Returns

`Pages`
