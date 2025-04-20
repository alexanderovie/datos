[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageDuplicateContentItem

# Class: OnPageDuplicateContentItem

Defined in: main.ts:181368

## Implements

- [`IOnPageDuplicateContentItem`](../interfaces/IOnPageDuplicateContentItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OnPageDuplicateContentItem**(`data?`): `OnPageDuplicateContentItem`

Defined in: main.ts:181378

#### Parameters

##### data?

[`IOnPageDuplicateContentItem`](../interfaces/IOnPageDuplicateContentItem.md)

#### Returns

`OnPageDuplicateContentItem`

## Properties

### pages?

> `optional` **pages**: [`Pages`](Pages.md)[]

Defined in: main.ts:181374

pages with duplicate content

#### Implementation of

[`IOnPageDuplicateContentItem`](../interfaces/IOnPageDuplicateContentItem.md).[`pages`](../interfaces/IOnPageDuplicateContentItem.md#pages)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:181372

total count of duplicate pages

#### Implementation of

[`IOnPageDuplicateContentItem`](../interfaces/IOnPageDuplicateContentItem.md).[`total_count`](../interfaces/IOnPageDuplicateContentItem.md#total_count)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:181370

URL of the specified page

#### Implementation of

[`IOnPageDuplicateContentItem`](../interfaces/IOnPageDuplicateContentItem.md).[`url`](../interfaces/IOnPageDuplicateContentItem.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:181387

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:181410

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OnPageDuplicateContentItem`

Defined in: main.ts:181403

#### Parameters

##### data

`any`

#### Returns

`OnPageDuplicateContentItem`
