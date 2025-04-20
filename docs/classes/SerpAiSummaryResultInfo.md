[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpAiSummaryResultInfo

# Class: SerpAiSummaryResultInfo

Defined in: main.ts:28413

## Implements

- [`ISerpAiSummaryResultInfo`](../interfaces/ISerpAiSummaryResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpAiSummaryResultInfo**(`data?`): `SerpAiSummaryResultInfo`

Defined in: main.ts:28421

#### Parameters

##### data?

[`ISerpAiSummaryResultInfo`](../interfaces/ISerpAiSummaryResultInfo.md)

#### Returns

`SerpAiSummaryResultInfo`

## Properties

### items?

> `optional` **items**: [`SerpAiSummaryItem`](SerpAiSummaryItem.md)[]

Defined in: main.ts:28417

items array

#### Implementation of

[`ISerpAiSummaryResultInfo`](../interfaces/ISerpAiSummaryResultInfo.md).[`items`](../interfaces/ISerpAiSummaryResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:28415

number of items in the results array

#### Implementation of

[`ISerpAiSummaryResultInfo`](../interfaces/ISerpAiSummaryResultInfo.md).[`items_count`](../interfaces/ISerpAiSummaryResultInfo.md#items_count)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:28430

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:28452

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpAiSummaryResultInfo`

Defined in: main.ts:28445

#### Parameters

##### data

`any`

#### Returns

`SerpAiSummaryResultInfo`
