**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsCategoriesResultInfo

# Interface: IDataforseoLabsCategoriesResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### category\_code?

> **`optional`** **category\_code**: `number`

category code

#### Source

main.ts:80719

***

### category\_code\_parent?

> **`optional`** **category\_code\_parent**: `number`

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

#### Source

main.ts:80732

***

### category\_name?

> **`optional`** **category\_name**: `string`

full name of the category

#### Source

main.ts:80721
