[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductCategoryInfo

# Class: ProductCategoryInfo

Defined in: main.ts:206370

## Implements

- [`IProductCategoryInfo`](../interfaces/IProductCategoryInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ProductCategoryInfo**(`data?`): `ProductCategoryInfo`

Defined in: main.ts:206379

#### Parameters

##### data?

[`IProductCategoryInfo`](../interfaces/IProductCategoryInfo.md)

#### Returns

`ProductCategoryInfo`

## Properties

### category?

> `optional` **category**: `string`

Defined in: main.ts:206372

product category name

#### Implementation of

[`IProductCategoryInfo`](../interfaces/IProductCategoryInfo.md).[`category`](../interfaces/IProductCategoryInfo.md#category)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:206375

product category URL
indicates the browse path on Amazon with the unique browse node ID (product category ID on Amazon)

#### Implementation of

[`IProductCategoryInfo`](../interfaces/IProductCategoryInfo.md).[`url`](../interfaces/IProductCategoryInfo.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:206388

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:206406

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ProductCategoryInfo`

Defined in: main.ts:206399

#### Parameters

##### data

`any`

#### Returns

`ProductCategoryInfo`
