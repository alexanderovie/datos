[**Documentation**](../README.md)

***

[Documentation](../README.md) / TableContentInfo

# Class: TableContentInfo

Defined in: main.ts:26348

## Implements

- [`ITableContentInfo`](../interfaces/ITableContentInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new TableContentInfo()

> **new TableContentInfo**(`data`?): [`TableContentInfo`](TableContentInfo.md)

Defined in: main.ts:26358

#### Parameters

##### data?

[`ITableContentInfo`](../interfaces/ITableContentInfo.md)

#### Returns

[`TableContentInfo`](TableContentInfo.md)

## Properties

### body?

> `optional` **body**: [`TableContentItemInfo`](TableContentItemInfo.md)[]

Defined in: main.ts:26352

content of the body of the table

#### Implementation of

[`ITableContentInfo`](../interfaces/ITableContentInfo.md).[`body`](../interfaces/ITableContentInfo.md#body)

***

### footer?

> `optional` **footer**: [`TableContentItemInfo`](TableContentItemInfo.md)[]

Defined in: main.ts:26354

content of the footer of the table

#### Implementation of

[`ITableContentInfo`](../interfaces/ITableContentInfo.md).[`footer`](../interfaces/ITableContentInfo.md#footer)

***

### header?

> `optional` **header**: [`TableContentItemInfo`](TableContentItemInfo.md)[]

Defined in: main.ts:26350

parsed content of the header

#### Implementation of

[`ITableContentInfo`](../interfaces/ITableContentInfo.md).[`header`](../interfaces/ITableContentInfo.md#header)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:26367

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:26398

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`TableContentInfo`](TableContentInfo.md)

Defined in: main.ts:26391

#### Parameters

##### data

`any`

#### Returns

[`TableContentInfo`](TableContentInfo.md)
