[**Documentation**](../README.md)

***

[Documentation](../README.md) / RankChanges

# Class: RankChanges

Defined in: main.ts:110293

## Implements

- [`IRankChanges`](../interfaces/IRankChanges.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new RankChanges()

> **new RankChanges**(`data`?): [`RankChanges`](RankChanges.md)

Defined in: main.ts:110310

#### Parameters

##### data?

[`IRankChanges`](../interfaces/IRankChanges.md)

#### Returns

[`RankChanges`](RankChanges.md)

## Properties

### is\_down?

> `optional` **is\_down**: `boolean`

Defined in: main.ts:110306

rank of this element went down
if the value is true, position of the element in SERP is lower compared to the previous check

#### Implementation of

[`IRankChanges`](../interfaces/IRankChanges.md).[`is_down`](../interfaces/IRankChanges.md#is_down)

***

### is\_new?

> `optional` **is\_new**: `boolean`

Defined in: main.ts:110300

element was previously present in SERP
if the value is true, previously collected SERP didn’t contain this element

#### Implementation of

[`IRankChanges`](../interfaces/IRankChanges.md).[`is_new`](../interfaces/IRankChanges.md#is_new)

***

### is\_up?

> `optional` **is\_up**: `boolean`

Defined in: main.ts:110303

rank of this element went up
if the value is true, position of the element in SERP is higher compared to the previous check

#### Implementation of

[`IRankChanges`](../interfaces/IRankChanges.md).[`is_up`](../interfaces/IRankChanges.md#is_up)

***

### previous\_rank\_absolute?

> `optional` **previous\_rank\_absolute**: `number`

Defined in: main.ts:110297

previous absolute rank in SERP
indicates previous rank of the element in Google SERP;
if this element is new, the value will be null

#### Implementation of

[`IRankChanges`](../interfaces/IRankChanges.md).[`previous_rank_absolute`](../interfaces/IRankChanges.md#previous_rank_absolute)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:110319

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:110339

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`RankChanges`](RankChanges.md)

Defined in: main.ts:110332

#### Parameters

##### data

`any`

#### Returns

[`RankChanges`](RankChanges.md)
