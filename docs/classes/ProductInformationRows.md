[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductInformationRows

# Class: ProductInformationRows

Defined in: main.ts:206638

## Implements

- [`IProductInformationRows`](../interfaces/IProductInformationRows.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ProductInformationRows**(`data?`): `ProductInformationRows`

Defined in: main.ts:206648

#### Parameters

##### data?

[`IProductInformationRows`](../interfaces/IProductInformationRows.md)

#### Returns

`ProductInformationRows`

## Properties

### rows?

> `optional` **rows**: [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)[]

Defined in: main.ts:206644

rows containing related product information

#### Implementation of

[`IProductInformationRows`](../interfaces/IProductInformationRows.md).[`rows`](../interfaces/IProductInformationRows.md#rows)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:206642

title under which related product information appears on the Amazon product page

#### Implementation of

[`IProductInformationRows`](../interfaces/IProductInformationRows.md).[`title`](../interfaces/IProductInformationRows.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:206640

type of element

#### Implementation of

[`IProductInformationRows`](../interfaces/IProductInformationRows.md).[`type`](../interfaces/IProductInformationRows.md#type)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:206657

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:206680

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ProductInformationRows`

Defined in: main.ts:206673

#### Parameters

##### data

`any`

#### Returns

`ProductInformationRows`
