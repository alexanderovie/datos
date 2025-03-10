[**Documentation**](../README.md)

***

[Documentation](../README.md) / IContentAnalysisCategoriesResultInfo

# Interface: IContentAnalysisCategoriesResultInfo

Defined in: main.ts:186538

## Indexable

\[`key`: `string`\]: `any`

## Properties

### category\_code?

> `optional` **category\_code**: `number`

Defined in: main.ts:186540

category code

***

### category\_code\_parent?

> `optional` **category\_code\_parent**: `number`

Defined in: main.ts:186552

the code of the superordinate category
example:
"category_code": 10178,
"category_name": "Apparel Accessories",
"category_code_parent": 10021
where category_code_parent
corresponds to:
"category_code": 10178,
"category_name": "Apparel Accessories"

***

### category\_name?

> `optional` **category\_name**: `string`

Defined in: main.ts:186542

full name of the category
