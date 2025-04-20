[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkBacklinksLiveItem

# Class: BacklinksBulkBacklinksLiveItem

Defined in: main.ts:173020

## Implements

- [`IBacklinksBulkBacklinksLiveItem`](../interfaces/IBacklinksBulkBacklinksLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksBulkBacklinksLiveItem**(`data?`): `BacklinksBulkBacklinksLiveItem`

Defined in: main.ts:173028

#### Parameters

##### data?

[`IBacklinksBulkBacklinksLiveItem`](../interfaces/IBacklinksBulkBacklinksLiveItem.md)

#### Returns

`BacklinksBulkBacklinksLiveItem`

## Properties

### backlinks?

> `optional` **backlinks**: `number`

Defined in: main.ts:173024

number of backlinks pointing to the target

#### Implementation of

[`IBacklinksBulkBacklinksLiveItem`](../interfaces/IBacklinksBulkBacklinksLiveItem.md).[`backlinks`](../interfaces/IBacklinksBulkBacklinksLiveItem.md#backlinks)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:173022

domain, subdomain or webpage from a POST array

#### Implementation of

[`IBacklinksBulkBacklinksLiveItem`](../interfaces/IBacklinksBulkBacklinksLiveItem.md).[`target`](../interfaces/IBacklinksBulkBacklinksLiveItem.md#target)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:173037

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:173055

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksBulkBacklinksLiveItem`

Defined in: main.ts:173048

#### Parameters

##### data

`any`

#### Returns

`BacklinksBulkBacklinksLiveItem`
