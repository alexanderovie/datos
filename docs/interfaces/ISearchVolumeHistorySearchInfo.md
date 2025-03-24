[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISearchVolumeHistorySearchInfo

# Interface: ISearchVolumeHistorySearchInfo

Defined in: main.ts:158653

## Indexable

\[`key`: `string`\]: `any`

## Properties

### desktop?

> `optional` **desktop**: [`SearchVolumeHistoryItemInfo`](../classes/SearchVolumeHistoryItemInfo.md)[]

Defined in: main.ts:158656

device type = desktop
contains historical search volume data for searches made from desktop devices

***

### mobile?

> `optional` **mobile**: [`SearchVolumeHistoryItemInfo`](../classes/SearchVolumeHistoryItemInfo.md)[]

Defined in: main.ts:158662

device type = mobile
contains historical search volume data for searches made from mobile devices

***

### non\_smartphones?

> `optional` **non\_smartphones**: [`SearchVolumeHistoryItemInfo`](../classes/SearchVolumeHistoryItemInfo.md)[]

Defined in: main.ts:158659

device type = non-smartphones
contains historical search volume data for searches made from feature phones (non-smartphone mobile devices)

***

### tablet?

> `optional` **tablet**: [`SearchVolumeHistoryItemInfo`](../classes/SearchVolumeHistoryItemInfo.md)[]

Defined in: main.ts:158665

device type = tablet
contains historical search volume data for searches made from tablets
