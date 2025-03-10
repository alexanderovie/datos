[**Documentation**](../README.md)

***

[Documentation](../README.md) / IStoresCountInfo

# Interface: IStoresCountInfo

Defined in: main.ts:195448

## Indexable

\[`key`: `string`\]: `any`

## Properties

### count?

> `optional` **count**: `string`

Defined in: main.ts:195450

number of stores that offer the product

***

### count\_from\_text?

> `optional` **count\_from\_text**: `boolean`

Defined in: main.ts:195458

whether the number of stores is taken from text
indicates whether the number of stores is taken from displayed_text;
if the API finds the exact number of stores in the HTML code of the Google Shopping page, this parameter is false;
if the API cannot find the number of stores in the HTML code of the page, it takes the number from the displayed_text;
in this case, the parameter is true

***

### displayed\_text?

> `optional` **displayed\_text**: `string`

Defined in: main.ts:195452

text displayed on the Google Shopping page
