[**Documentation**](../README.md)

***

[Documentation](../README.md) / IndexHistory

# Class: IndexHistory

Defined in: main.ts:159263

## Implements

- [`IIndexHistory`](../interfaces/IIndexHistory.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new IndexHistory()

> **new IndexHistory**(`data`?): [`IndexHistory`](IndexHistory.md)

Defined in: main.ts:159278

#### Parameters

##### data?

[`IIndexHistory`](../interfaces/IIndexHistory.md)

#### Returns

[`IndexHistory`](IndexHistory.md)

## Properties

### date?

> `optional` **date**: `string`

Defined in: main.ts:159268

date for which index volume data is provided
in the UTC format: “yyyy-mm-dd”
example:
2021-10-01

#### Implementation of

[`IIndexHistory`](../interfaces/IIndexHistory.md).[`date`](../interfaces/IIndexHistory.md#date)

***

### total\_backlinks?

> `optional` **total\_backlinks**: `number`

Defined in: main.ts:159270

total number of backlinks our database contained on the given date

#### Implementation of

[`IIndexHistory`](../interfaces/IIndexHistory.md).[`total_backlinks`](../interfaces/IIndexHistory.md#total_backlinks)

***

### total\_domains?

> `optional` **total\_domains**: `number`

Defined in: main.ts:159274

total number of domains our database contained on the given date

#### Implementation of

[`IIndexHistory`](../interfaces/IIndexHistory.md).[`total_domains`](../interfaces/IIndexHistory.md#total_domains)

***

### total\_pages?

> `optional` **total\_pages**: `number`

Defined in: main.ts:159272

total number of pages our database contained on the given date

#### Implementation of

[`IIndexHistory`](../interfaces/IIndexHistory.md).[`total_pages`](../interfaces/IIndexHistory.md#total_pages)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:159287

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:159307

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`IndexHistory`](IndexHistory.md)

Defined in: main.ts:159300

#### Parameters

##### data

`any`

#### Returns

[`IndexHistory`](IndexHistory.md)
