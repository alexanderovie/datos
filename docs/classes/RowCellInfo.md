[**Documentation**](../README.md)

***

[Documentation](../README.md) / RowCellInfo

# Class: RowCellInfo

Defined in: main.ts:26927

## Implements

- [`IRowCellInfo`](../interfaces/IRowCellInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new RowCellInfo**(`data?`): `RowCellInfo`

Defined in: main.ts:26937

#### Parameters

##### data?

[`IRowCellInfo`](../interfaces/IRowCellInfo.md)

#### Returns

`RowCellInfo`

## Properties

### is\_header?

> `optional` **is\_header**: `boolean`

Defined in: main.ts:26933

content of the row cells of the header

#### Implementation of

[`IRowCellInfo`](../interfaces/IRowCellInfo.md).[`is_header`](../interfaces/IRowCellInfo.md#is_header)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:26929

content of the row cells of the header

#### Implementation of

[`IRowCellInfo`](../interfaces/IRowCellInfo.md).[`text`](../interfaces/IRowCellInfo.md#text)

***

### urls?

> `optional` **urls**: [`ContentUrlInfo`](ContentUrlInfo.md)[]

Defined in: main.ts:26931

contains other URLs and anchors found in the content element

#### Implementation of

[`IRowCellInfo`](../interfaces/IRowCellInfo.md).[`urls`](../interfaces/IRowCellInfo.md#urls)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:26946

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:26969

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `RowCellInfo`

Defined in: main.ts:26962

#### Parameters

##### data

`any`

#### Returns

`RowCellInfo`
