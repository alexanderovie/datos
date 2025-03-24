[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductCategoryInfo

# Class: ProductCategoryInfo

Defined in: main.ts:205840

## Implements

- [`IProductCategoryInfo`](../interfaces/IProductCategoryInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ProductCategoryInfo**(`data`?): `ProductCategoryInfo`

Defined in: main.ts:205849

#### Parameters

##### data?

[`IProductCategoryInfo`](../interfaces/IProductCategoryInfo.md)

#### Returns

`ProductCategoryInfo`

## Properties

### category?

> `optional` **category**: `string`

Defined in: main.ts:205842

product category name

#### Implementation of

[`IProductCategoryInfo`](../interfaces/IProductCategoryInfo.md).[`category`](../interfaces/IProductCategoryInfo.md#category)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:205845

product category URL
indicates the browse path on Amazon with the unique browse node ID (product category ID on Amazon)

#### Implementation of

[`IProductCategoryInfo`](../interfaces/IProductCategoryInfo.md).[`url`](../interfaces/IProductCategoryInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:205858

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:205876

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ProductCategoryInfo`

Defined in: main.ts:205869

#### Parameters

##### data

`any`

#### Returns

`ProductCategoryInfo`
