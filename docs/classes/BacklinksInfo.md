[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksInfo

# Class: BacklinksInfo

Defined in: main.ts:98817

## Implements

- [`IBacklinksInfo`](../interfaces/IBacklinksInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksInfo()

> **new BacklinksInfo**(`data`?): [`BacklinksInfo`](BacklinksInfo.md)

Defined in: main.ts:98837

#### Parameters

##### data?

[`IBacklinksInfo`](../interfaces/IBacklinksInfo.md)

#### Returns

[`BacklinksInfo`](BacklinksInfo.md)

## Properties

### backlinks?

> `optional` **backlinks**: `number`

Defined in: main.ts:98828

total number of backlinks
the total number of backlinks, including dofollow and nofollow links

#### Implementation of

[`IBacklinksInfo`](../interfaces/IBacklinksInfo.md).[`backlinks`](../interfaces/IBacklinksInfo.md#backlinks)

***

### dofollow?

> `optional` **dofollow**: `number`

Defined in: main.ts:98825

number of dofollow links

#### Implementation of

[`IBacklinksInfo`](../interfaces/IBacklinksInfo.md).[`dofollow`](../interfaces/IBacklinksInfo.md#dofollow)

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

Defined in: main.ts:98819

number of referring domains

#### Implementation of

[`IBacklinksInfo`](../interfaces/IBacklinksInfo.md).[`referring_domains`](../interfaces/IBacklinksInfo.md#referring_domains)

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

Defined in: main.ts:98821

number of referring main domains

#### Implementation of

[`IBacklinksInfo`](../interfaces/IBacklinksInfo.md).[`referring_main_domains`](../interfaces/IBacklinksInfo.md#referring_main_domains)

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

Defined in: main.ts:98823

number of referring pages

#### Implementation of

[`IBacklinksInfo`](../interfaces/IBacklinksInfo.md).[`referring_pages`](../interfaces/IBacklinksInfo.md#referring_pages)

***

### time\_update?

> `optional` **time\_update**: `string`

Defined in: main.ts:98833

date and time when backlink data was updated
in the UTC format: "yyyy-mm-dd hh-mm-ss +00:00"
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksInfo`](../interfaces/IBacklinksInfo.md).[`time_update`](../interfaces/IBacklinksInfo.md#time_update)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:98846

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:98868

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksInfo`](BacklinksInfo.md)

Defined in: main.ts:98861

#### Parameters

##### data

`any`

#### Returns

[`BacklinksInfo`](BacklinksInfo.md)
