[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISearchVolumeHistorySearchInfo

# Interface: ISearchVolumeHistorySearchInfo

Defined in: main.ts:156244

## Indexable

\[`key`: `string`\]: `any`

## Properties

### desktop?

> `optional` **desktop**: [`SearchVolumeHistoryItemInfo`](../classes/SearchVolumeHistoryItemInfo.md)[]

Defined in: main.ts:156247

device type = desktop
contains historical search volume data for searches made from desktop devices

***

### mobile?

> `optional` **mobile**: [`SearchVolumeHistoryItemInfo`](../classes/SearchVolumeHistoryItemInfo.md)[]

Defined in: main.ts:156253

device type = mobile
contains historical search volume data for searches made from mobile devices

***

### non\_smartphones?

> `optional` **non\_smartphones**: [`SearchVolumeHistoryItemInfo`](../classes/SearchVolumeHistoryItemInfo.md)[]

Defined in: main.ts:156250

device type = non-smartphones
contains historical search volume data for searches made from feature phones (non-smartphone mobile devices)

***

### tablet?

> `optional` **tablet**: [`SearchVolumeHistoryItemInfo`](../classes/SearchVolumeHistoryItemInfo.md)[]

Defined in: main.ts:156256

device type = tablet
contains historical search volume data for searches made from tablets
