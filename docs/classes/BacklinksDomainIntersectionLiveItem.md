[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksDomainIntersectionLiveItem

# Class: BacklinksDomainIntersectionLiveItem

Defined in: main.ts:169906

## Implements

- [`IBacklinksDomainIntersectionLiveItem`](../interfaces/IBacklinksDomainIntersectionLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksDomainIntersectionLiveItem**(`data`?): `BacklinksDomainIntersectionLiveItem`

Defined in: main.ts:169915

#### Parameters

##### data?

[`IBacklinksDomainIntersectionLiveItem`](../interfaces/IBacklinksDomainIntersectionLiveItem.md)

#### Returns

`BacklinksDomainIntersectionLiveItem`

## Properties

### domain\_intersection?

> `optional` **domain\_intersection**: `object`

Defined in: main.ts:169909

contains data on domains that link to the corresponding targets specified in the POST array
data is provided in separate objects corresponding to domains, subdomains or pages specified in the targets object

#### Index Signature

\[`key`: `string`\]: [`BacklinksDomainIntersectionInfo`](BacklinksDomainIntersectionInfo.md)

#### Implementation of

[`IBacklinksDomainIntersectionLiveItem`](../interfaces/IBacklinksDomainIntersectionLiveItem.md).[`domain_intersection`](../interfaces/IBacklinksDomainIntersectionLiveItem.md#domain_intersection)

***

### summary?

> `optional` **summary**: [`IntersectionSummaryInfo`](IntersectionSummaryInfo.md)

Defined in: main.ts:169911

contains the domain intersections summary

#### Implementation of

[`IBacklinksDomainIntersectionLiveItem`](../interfaces/IBacklinksDomainIntersectionLiveItem.md).[`summary`](../interfaces/IBacklinksDomainIntersectionLiveItem.md#summary)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:169924

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:169948

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksDomainIntersectionLiveItem`

Defined in: main.ts:169941

#### Parameters

##### data

`any`

#### Returns

`BacklinksDomainIntersectionLiveItem`
