[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkNewLostBacklinksLiveItem

# Class: BacklinksBulkNewLostBacklinksLiveItem

Defined in: main.ts:174086

## Implements

- [`IBacklinksBulkNewLostBacklinksLiveItem`](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksBulkNewLostBacklinksLiveItem**(`data?`): `BacklinksBulkNewLostBacklinksLiveItem`

Defined in: main.ts:174098

#### Parameters

##### data?

[`IBacklinksBulkNewLostBacklinksLiveItem`](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md)

#### Returns

`BacklinksBulkNewLostBacklinksLiveItem`

## Properties

### lost\_backlinks?

> `optional` **lost\_backlinks**: `number`

Defined in: main.ts:174094

number of lost backlinks
number of lost backlinks of the target

#### Implementation of

[`IBacklinksBulkNewLostBacklinksLiveItem`](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md).[`lost_backlinks`](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md#lost_backlinks)

***

### new\_backlinks?

> `optional` **new\_backlinks**: `number`

Defined in: main.ts:174091

number of new backlinks
number of new backlinks pointing to the target

#### Implementation of

[`IBacklinksBulkNewLostBacklinksLiveItem`](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md).[`new_backlinks`](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md#new_backlinks)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:174088

domain, subdomain or webpage from a POST array

#### Implementation of

[`IBacklinksBulkNewLostBacklinksLiveItem`](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md).[`target`](../interfaces/IBacklinksBulkNewLostBacklinksLiveItem.md#target)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:174107

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:174126

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksBulkNewLostBacklinksLiveItem`

Defined in: main.ts:174119

#### Parameters

##### data

`any`

#### Returns

`BacklinksBulkNewLostBacklinksLiveItem`
