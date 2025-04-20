[**Documentation**](../README.md)

***

[Documentation](../README.md) / CacheControl

# Class: CacheControl

Defined in: main.ts:179048

## Implements

- [`ICacheControl`](../interfaces/ICacheControl.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new CacheControl**(`data?`): `CacheControl`

Defined in: main.ts:179057

#### Parameters

##### data?

[`ICacheControl`](../interfaces/ICacheControl.md)

#### Returns

`CacheControl`

## Properties

### cachable?

> `optional` **cachable**: `boolean`

Defined in: main.ts:179050

indicates whether the page is cacheable

#### Implementation of

[`ICacheControl`](../interfaces/ICacheControl.md).[`cachable`](../interfaces/ICacheControl.md#cachable)

***

### ttl?

> `optional` **ttl**: `number`

Defined in: main.ts:179053

time to live
the amount of time the browser caches a resource

#### Implementation of

[`ICacheControl`](../interfaces/ICacheControl.md).[`ttl`](../interfaces/ICacheControl.md#ttl)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:179066

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:179084

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `CacheControl`

Defined in: main.ts:179077

#### Parameters

##### data

`any`

#### Returns

`CacheControl`
