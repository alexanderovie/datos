[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsCategoriesResultInfo

# Class: DataforseoLabsCategoriesResultInfo

Defined in: main.ts:102868

## Implements

- [`IDataforseoLabsCategoriesResultInfo`](../interfaces/IDataforseoLabsCategoriesResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsCategoriesResultInfo**(`data`?): `DataforseoLabsCategoriesResultInfo`

Defined in: main.ts:102887

#### Parameters

##### data?

[`IDataforseoLabsCategoriesResultInfo`](../interfaces/IDataforseoLabsCategoriesResultInfo.md)

#### Returns

`DataforseoLabsCategoriesResultInfo`

## Properties

### category\_code?

> `optional` **category\_code**: `number`

Defined in: main.ts:102870

category code

#### Implementation of

[`IDataforseoLabsCategoriesResultInfo`](../interfaces/IDataforseoLabsCategoriesResultInfo.md).[`category_code`](../interfaces/IDataforseoLabsCategoriesResultInfo.md#category_code)

***

### category\_code\_parent?

> `optional` **category\_code\_parent**: `number`

Defined in: main.ts:102883

the code of the superordinate category
example:
"category_code": 10178,
"category_name": "Apparel Accessories",
"category_code_parent": 10021
where category_code_parent
corresponds to:
"category_code": 10021,
"category_name": "Apparel"
"category_code_parent": null

#### Implementation of

[`IDataforseoLabsCategoriesResultInfo`](../interfaces/IDataforseoLabsCategoriesResultInfo.md).[`category_code_parent`](../interfaces/IDataforseoLabsCategoriesResultInfo.md#category_code_parent)

***

### category\_name?

> `optional` **category\_name**: `string`

Defined in: main.ts:102872

full name of the category

#### Implementation of

[`IDataforseoLabsCategoriesResultInfo`](../interfaces/IDataforseoLabsCategoriesResultInfo.md).[`category_name`](../interfaces/IDataforseoLabsCategoriesResultInfo.md#category_name)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:102896

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:102915

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsCategoriesResultInfo`

Defined in: main.ts:102908

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsCategoriesResultInfo`
