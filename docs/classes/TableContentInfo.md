[**Documentation**](../README.md)

***

[Documentation](../README.md) / TableContentInfo

# Class: TableContentInfo

Defined in: main.ts:26775

## Implements

- [`ITableContentInfo`](../interfaces/ITableContentInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new TableContentInfo**(`data`?): `TableContentInfo`

Defined in: main.ts:26785

#### Parameters

##### data?

[`ITableContentInfo`](../interfaces/ITableContentInfo.md)

#### Returns

`TableContentInfo`

## Properties

### body?

> `optional` **body**: [`TableContentItemInfo`](TableContentItemInfo.md)[]

Defined in: main.ts:26779

content of the body of the table

#### Implementation of

[`ITableContentInfo`](../interfaces/ITableContentInfo.md).[`body`](../interfaces/ITableContentInfo.md#body)

***

### footer?

> `optional` **footer**: [`TableContentItemInfo`](TableContentItemInfo.md)[]

Defined in: main.ts:26781

content of the footer of the table

#### Implementation of

[`ITableContentInfo`](../interfaces/ITableContentInfo.md).[`footer`](../interfaces/ITableContentInfo.md#footer)

***

### header?

> `optional` **header**: [`TableContentItemInfo`](TableContentItemInfo.md)[]

Defined in: main.ts:26777

parsed content of the header

#### Implementation of

[`ITableContentInfo`](../interfaces/ITableContentInfo.md).[`header`](../interfaces/ITableContentInfo.md#header)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:26794

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:26825

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `TableContentInfo`

Defined in: main.ts:26818

#### Parameters

##### data

`any`

#### Returns

`TableContentInfo`
