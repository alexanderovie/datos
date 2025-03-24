[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksInfo

# Class: BacklinksInfo

Defined in: main.ts:100720

## Implements

- [`IBacklinksInfo`](../interfaces/IBacklinksInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksInfo**(`data`?): `BacklinksInfo`

Defined in: main.ts:100740

#### Parameters

##### data?

[`IBacklinksInfo`](../interfaces/IBacklinksInfo.md)

#### Returns

`BacklinksInfo`

## Properties

### backlinks?

> `optional` **backlinks**: `number`

Defined in: main.ts:100731

total number of backlinks
the total number of backlinks, including dofollow and nofollow links

#### Implementation of

[`IBacklinksInfo`](../interfaces/IBacklinksInfo.md).[`backlinks`](../interfaces/IBacklinksInfo.md#backlinks)

***

### dofollow?

> `optional` **dofollow**: `number`

Defined in: main.ts:100728

number of dofollow links

#### Implementation of

[`IBacklinksInfo`](../interfaces/IBacklinksInfo.md).[`dofollow`](../interfaces/IBacklinksInfo.md#dofollow)

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

Defined in: main.ts:100722

number of referring domains

#### Implementation of

[`IBacklinksInfo`](../interfaces/IBacklinksInfo.md).[`referring_domains`](../interfaces/IBacklinksInfo.md#referring_domains)

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

Defined in: main.ts:100724

number of referring main domains

#### Implementation of

[`IBacklinksInfo`](../interfaces/IBacklinksInfo.md).[`referring_main_domains`](../interfaces/IBacklinksInfo.md#referring_main_domains)

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

Defined in: main.ts:100726

number of referring pages

#### Implementation of

[`IBacklinksInfo`](../interfaces/IBacklinksInfo.md).[`referring_pages`](../interfaces/IBacklinksInfo.md#referring_pages)

***

### time\_update?

> `optional` **time\_update**: `string`

Defined in: main.ts:100736

date and time when backlink data was updated
in the UTC format: "yyyy-mm-dd hh-mm-ss +00:00"
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksInfo`](../interfaces/IBacklinksInfo.md).[`time_update`](../interfaces/IBacklinksInfo.md#time_update)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:100749

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:100771

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksInfo`

Defined in: main.ts:100764

#### Parameters

##### data

`any`

#### Returns

`BacklinksInfo`
