[**Documentation**](../README.md)

***

[Documentation](../README.md) / CacheControl

# Class: CacheControl

Defined in: main.ts:176229

## Implements

- [`ICacheControl`](../interfaces/ICacheControl.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new CacheControl()

> **new CacheControl**(`data`?): [`CacheControl`](CacheControl.md)

Defined in: main.ts:176238

#### Parameters

##### data?

[`ICacheControl`](../interfaces/ICacheControl.md)

#### Returns

[`CacheControl`](CacheControl.md)

## Properties

### cachable?

> `optional` **cachable**: `boolean`

Defined in: main.ts:176231

indicates whether the page is cacheable

#### Implementation of

[`ICacheControl`](../interfaces/ICacheControl.md).[`cachable`](../interfaces/ICacheControl.md#cachable)

***

### ttl?

> `optional` **ttl**: `number`

Defined in: main.ts:176234

time to live
the amount of time the browser caches a resource

#### Implementation of

[`ICacheControl`](../interfaces/ICacheControl.md).[`ttl`](../interfaces/ICacheControl.md#ttl)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:176247

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:176265

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`CacheControl`](CacheControl.md)

Defined in: main.ts:176258

#### Parameters

##### data

`any`

#### Returns

[`CacheControl`](CacheControl.md)
