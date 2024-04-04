**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IRelatedSearchesMerchantSerpElementItem

# Interface: IRelatedSearchesMerchantSerpElementItem

## Extends

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: `string`[]

additional items present in the element
if there are none, equals null

#### Source

main.ts:170799

***

### position?

> **`optional`** **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:170794

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Source

main.ts:170790

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:170787

***

### xpath?

> **`optional`** **xpath**: `string`

XPath of the element

#### Source

main.ts:170796
