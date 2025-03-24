[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkNewLostReferringDomainsLiveItem

# Class: BacklinksBulkNewLostReferringDomainsLiveItem

Defined in: main.ts:174072

## Implements

- [`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksBulkNewLostReferringDomainsLiveItem**(`data`?): `BacklinksBulkNewLostReferringDomainsLiveItem`

Defined in: main.ts:174088

#### Parameters

##### data?

[`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md)

#### Returns

`BacklinksBulkNewLostReferringDomainsLiveItem`

## Properties

### lost\_referring\_domains?

> `optional` **lost\_referring\_domains**: `number`

Defined in: main.ts:174080

number of lost referring domains
number of lost referring domains of the target

#### Implementation of

[`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md).[`lost_referring_domains`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md#lost_referring_domains)

***

### lost\_referring\_main\_domains?

> `optional` **lost\_referring\_main\_domains**: `number`

Defined in: main.ts:174084

number of lost referring main domains pointing to the target

#### Implementation of

[`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md).[`lost_referring_main_domains`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md#lost_referring_main_domains)

***

### new\_referring\_domains?

> `optional` **new\_referring\_domains**: `number`

Defined in: main.ts:174077

number of new referring domains
number of new referring domains pointing to the target

#### Implementation of

[`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md).[`new_referring_domains`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md#new_referring_domains)

***

### new\_referring\_main\_domains?

> `optional` **new\_referring\_main\_domains**: `number`

Defined in: main.ts:174082

number of new referring main domains pointing to the target

#### Implementation of

[`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md).[`new_referring_main_domains`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md#new_referring_main_domains)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:174074

domain, subdomain or webpage from a POST array

#### Implementation of

[`IBacklinksBulkNewLostReferringDomainsLiveItem`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md).[`target`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveItem.md#target)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:174097

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:174118

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksBulkNewLostReferringDomainsLiveItem`

Defined in: main.ts:174111

#### Parameters

##### data

`any`

#### Returns

`BacklinksBulkNewLostReferringDomainsLiveItem`
