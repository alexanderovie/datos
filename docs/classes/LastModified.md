[**Documentation**](../README.md)

***

[Documentation](../README.md) / LastModified

# Class: LastModified

Defined in: main.ts:179106

## Implements

- [`ILastModified`](../interfaces/ILastModified.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new LastModified**(`data?`): `LastModified`

Defined in: main.ts:179128

#### Parameters

##### data?

[`ILastModified`](../interfaces/ILastModified.md)

#### Returns

`LastModified`

## Properties

### header?

> `optional` **header**: `string`

Defined in: main.ts:179112

date and time when the header was last modified
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00
if there is no data, the value will be null

#### Implementation of

[`ILastModified`](../interfaces/ILastModified.md).[`header`](../interfaces/ILastModified.md#header)

***

### meta\_tag?

> `optional` **meta\_tag**: `string`

Defined in: main.ts:179124

date and time when the meta tag was last modified
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00
if there is no data, the value will be null

#### Implementation of

[`ILastModified`](../interfaces/ILastModified.md).[`meta_tag`](../interfaces/ILastModified.md#meta_tag)

***

### sitemap?

> `optional` **sitemap**: `string`

Defined in: main.ts:179118

date and time when the sitemap was last modified
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00
if there is no data, the value will be null

#### Implementation of

[`ILastModified`](../interfaces/ILastModified.md).[`sitemap`](../interfaces/ILastModified.md#sitemap)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:179137

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:179156

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `LastModified`

Defined in: main.ts:179149

#### Parameters

##### data

`any`

#### Returns

`LastModified`
