[**Documentation**](../README.md)

***

[Documentation](../README.md) / IRankChanges

# Interface: IRankChanges

Defined in: main.ts:111772

## Indexable

\[`key`: `string`\]: `any`

## Properties

### is\_down?

> `optional` **is\_down**: `boolean`

Defined in: main.ts:111785

rank of this element went down
if the value is true, position of the element in SERP is lower compared to the previous check

***

### is\_new?

> `optional` **is\_new**: `boolean`

Defined in: main.ts:111779

element was previously present in SERP
if the value is true, previously collected SERP didn’t contain this element

***

### is\_up?

> `optional` **is\_up**: `boolean`

Defined in: main.ts:111782

rank of this element went up
if the value is true, position of the element in SERP is higher compared to the previous check

***

### previous\_rank\_absolute?

> `optional` **previous\_rank\_absolute**: `number`

Defined in: main.ts:111776

previous absolute rank in SERP
indicates previous rank of the element in Google SERP;
if this element is new, the value will be null
