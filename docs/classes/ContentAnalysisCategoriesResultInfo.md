[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentAnalysisCategoriesResultInfo

# Class: ContentAnalysisCategoriesResultInfo

Defined in: main.ts:188888

## Implements

- [`IContentAnalysisCategoriesResultInfo`](../interfaces/IContentAnalysisCategoriesResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ContentAnalysisCategoriesResultInfo**(`data`?): `ContentAnalysisCategoriesResultInfo`

Defined in: main.ts:188906

#### Parameters

##### data?

[`IContentAnalysisCategoriesResultInfo`](../interfaces/IContentAnalysisCategoriesResultInfo.md)

#### Returns

`ContentAnalysisCategoriesResultInfo`

## Properties

### category\_code?

> `optional` **category\_code**: `number`

Defined in: main.ts:188890

category code

#### Implementation of

[`IContentAnalysisCategoriesResultInfo`](../interfaces/IContentAnalysisCategoriesResultInfo.md).[`category_code`](../interfaces/IContentAnalysisCategoriesResultInfo.md#category_code)

***

### category\_code\_parent?

> `optional` **category\_code\_parent**: `number`

Defined in: main.ts:188902

the code of the superordinate category
example:
"category_code": 10178,
"category_name": "Apparel Accessories",
"category_code_parent": 10021
where category_code_parent
corresponds to:
"category_code": 10178,
"category_name": "Apparel Accessories"

#### Implementation of

[`IContentAnalysisCategoriesResultInfo`](../interfaces/IContentAnalysisCategoriesResultInfo.md).[`category_code_parent`](../interfaces/IContentAnalysisCategoriesResultInfo.md#category_code_parent)

***

### category\_name?

> `optional` **category\_name**: `string`

Defined in: main.ts:188892

full name of the category

#### Implementation of

[`IContentAnalysisCategoriesResultInfo`](../interfaces/IContentAnalysisCategoriesResultInfo.md).[`category_name`](../interfaces/IContentAnalysisCategoriesResultInfo.md#category_name)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:188915

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:188934

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ContentAnalysisCategoriesResultInfo`

Defined in: main.ts:188927

#### Parameters

##### data

`any`

#### Returns

`ContentAnalysisCategoriesResultInfo`
