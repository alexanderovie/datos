[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageNonIndexableItem

# Class: OnPageNonIndexableItem

Defined in: main.ts:182354

## Implements

- [`IOnPageNonIndexableItem`](../interfaces/IOnPageNonIndexableItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OnPageNonIndexableItem**(`data`?): `OnPageNonIndexableItem`

Defined in: main.ts:182363

#### Parameters

##### data?

[`IOnPageNonIndexableItem`](../interfaces/IOnPageNonIndexableItem.md)

#### Returns

`OnPageNonIndexableItem`

## Properties

### reason?

> `optional` **reason**: `string`

Defined in: main.ts:182357

the reason why the page is non-indexable
can take the following values: robots_txt, meta_tag, http_header, attribute, too_many_redirects

#### Implementation of

[`IOnPageNonIndexableItem`](../interfaces/IOnPageNonIndexableItem.md).[`reason`](../interfaces/IOnPageNonIndexableItem.md#reason)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:182359

url of the non-indexable page

#### Implementation of

[`IOnPageNonIndexableItem`](../interfaces/IOnPageNonIndexableItem.md).[`url`](../interfaces/IOnPageNonIndexableItem.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:182372

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:182390

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OnPageNonIndexableItem`

Defined in: main.ts:182383

#### Parameters

##### data

`any`

#### Returns

`OnPageNonIndexableItem`
