[**Documentation**](../README.md)

***

[Documentation](../README.md) / Table

# Class: Table

Defined in: main.ts:24847

## Implements

- [`ITable`](../interfaces/ITable.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new Table**(`data?`): `Table`

Defined in: main.ts:24860

#### Parameters

##### data?

[`ITable`](../interfaces/ITable.md)

#### Returns

`Table`

## Properties

### table\_content?

> `optional` **table\_content**: `string`[][]

Defined in: main.ts:24856

the content of the table
one line of the table in this element of the array

#### Implementation of

[`ITable`](../interfaces/ITable.md).[`table_content`](../interfaces/ITable.md#table_content)

***

### table\_element?

> `optional` **table\_element**: `string`

Defined in: main.ts:24851

name assigned to the table element
possible values:
table_element

#### Implementation of

[`ITable`](../interfaces/ITable.md).[`table_element`](../interfaces/ITable.md#table_element)

***

### table\_header?

> `optional` **table\_header**: `string`[]

Defined in: main.ts:24853

column names

#### Implementation of

[`ITable`](../interfaces/ITable.md).[`table_header`](../interfaces/ITable.md#table_header)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:24869

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:24896

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `Table`

Defined in: main.ts:24889

#### Parameters

##### data

`any`

#### Returns

`Table`
