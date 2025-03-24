[**Documentation**](../README.md)

***

[Documentation](../README.md) / SearchVolumeHistorySearchInfo

# Class: SearchVolumeHistorySearchInfo

Defined in: main.ts:158562

## Implements

- [`ISearchVolumeHistorySearchInfo`](../interfaces/ISearchVolumeHistorySearchInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SearchVolumeHistorySearchInfo**(`data`?): `SearchVolumeHistorySearchInfo`

Defined in: main.ts:158578

#### Parameters

##### data?

[`ISearchVolumeHistorySearchInfo`](../interfaces/ISearchVolumeHistorySearchInfo.md)

#### Returns

`SearchVolumeHistorySearchInfo`

## Properties

### desktop?

> `optional` **desktop**: [`SearchVolumeHistoryItemInfo`](SearchVolumeHistoryItemInfo.md)[]

Defined in: main.ts:158565

device type = desktop
contains historical search volume data for searches made from desktop devices

#### Implementation of

[`ISearchVolumeHistorySearchInfo`](../interfaces/ISearchVolumeHistorySearchInfo.md).[`desktop`](../interfaces/ISearchVolumeHistorySearchInfo.md#desktop)

***

### mobile?

> `optional` **mobile**: [`SearchVolumeHistoryItemInfo`](SearchVolumeHistoryItemInfo.md)[]

Defined in: main.ts:158571

device type = mobile
contains historical search volume data for searches made from mobile devices

#### Implementation of

[`ISearchVolumeHistorySearchInfo`](../interfaces/ISearchVolumeHistorySearchInfo.md).[`mobile`](../interfaces/ISearchVolumeHistorySearchInfo.md#mobile)

***

### non\_smartphones?

> `optional` **non\_smartphones**: [`SearchVolumeHistoryItemInfo`](SearchVolumeHistoryItemInfo.md)[]

Defined in: main.ts:158568

device type = non-smartphones
contains historical search volume data for searches made from feature phones (non-smartphone mobile devices)

#### Implementation of

[`ISearchVolumeHistorySearchInfo`](../interfaces/ISearchVolumeHistorySearchInfo.md).[`non_smartphones`](../interfaces/ISearchVolumeHistorySearchInfo.md#non_smartphones)

***

### tablet?

> `optional` **tablet**: [`SearchVolumeHistoryItemInfo`](SearchVolumeHistoryItemInfo.md)[]

Defined in: main.ts:158574

device type = tablet
contains historical search volume data for searches made from tablets

#### Implementation of

[`ISearchVolumeHistorySearchInfo`](../interfaces/ISearchVolumeHistorySearchInfo.md).[`tablet`](../interfaces/ISearchVolumeHistorySearchInfo.md#tablet)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:158587

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:158623

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SearchVolumeHistorySearchInfo`

Defined in: main.ts:158616

#### Parameters

##### data

`any`

#### Returns

`SearchVolumeHistorySearchInfo`
