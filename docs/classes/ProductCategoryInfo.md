[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductCategoryInfo

# Class: ProductCategoryInfo

Defined in: main.ts:203431

## Implements

- [`IProductCategoryInfo`](../interfaces/IProductCategoryInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ProductCategoryInfo()

> **new ProductCategoryInfo**(`data`?): [`ProductCategoryInfo`](ProductCategoryInfo.md)

Defined in: main.ts:203440

#### Parameters

##### data?

[`IProductCategoryInfo`](../interfaces/IProductCategoryInfo.md)

#### Returns

[`ProductCategoryInfo`](ProductCategoryInfo.md)

## Properties

### category?

> `optional` **category**: `string`

Defined in: main.ts:203433

product category name

#### Implementation of

[`IProductCategoryInfo`](../interfaces/IProductCategoryInfo.md).[`category`](../interfaces/IProductCategoryInfo.md#category)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:203436

product category URL
indicates the browse path on Amazon with the unique browse node ID (product category ID on Amazon)

#### Implementation of

[`IProductCategoryInfo`](../interfaces/IProductCategoryInfo.md).[`url`](../interfaces/IProductCategoryInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:203449

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:203467

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ProductCategoryInfo`](ProductCategoryInfo.md)

Defined in: main.ts:203460

#### Parameters

##### data

`any`

#### Returns

[`ProductCategoryInfo`](ProductCategoryInfo.md)
