[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkSpamScoreLiveItem

# Class: BacklinksBulkSpamScoreLiveItem

Defined in: main.ts:173356

## Implements

- [`IBacklinksBulkSpamScoreLiveItem`](../interfaces/IBacklinksBulkSpamScoreLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksBulkSpamScoreLiveItem**(`data?`): `BacklinksBulkSpamScoreLiveItem`

Defined in: main.ts:173367

#### Parameters

##### data?

[`IBacklinksBulkSpamScoreLiveItem`](../interfaces/IBacklinksBulkSpamScoreLiveItem.md)

#### Returns

`BacklinksBulkSpamScoreLiveItem`

## Properties

### spam\_score?

> `optional` **spam\_score**: `number`

Defined in: main.ts:173363

average spam score the target
learn more about how the metric is calculated

#### Implementation of

[`IBacklinksBulkSpamScoreLiveItem`](../interfaces/IBacklinksBulkSpamScoreLiveItem.md).[`spam_score`](../interfaces/IBacklinksBulkSpamScoreLiveItem.md#spam_score)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:173360

domain, subdomain or webpage from a POST array

#### Implementation of

[`IBacklinksBulkSpamScoreLiveItem`](../interfaces/IBacklinksBulkSpamScoreLiveItem.md).[`target`](../interfaces/IBacklinksBulkSpamScoreLiveItem.md#target)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:173358

type of element

#### Implementation of

[`IBacklinksBulkSpamScoreLiveItem`](../interfaces/IBacklinksBulkSpamScoreLiveItem.md).[`type`](../interfaces/IBacklinksBulkSpamScoreLiveItem.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:173376

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:173395

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksBulkSpamScoreLiveItem`

Defined in: main.ts:173388

#### Parameters

##### data

`any`

#### Returns

`BacklinksBulkSpamScoreLiveItem`
