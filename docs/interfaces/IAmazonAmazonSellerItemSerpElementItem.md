[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAmazonAmazonSellerItemSerpElementItem

# Interface: IAmazonAmazonSellerItemSerpElementItem

Defined in: main.ts:207932

## Extends

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### condition?

> `optional` **condition**: `string`

Defined in: main.ts:207951

product condition
condition of the product offered by the seller

***

### condition\_description?

> `optional` **condition\_description**: `string`

Defined in: main.ts:207954

product condition details
expanded details on the condition of the product offered by the seller

***

### delivery\_info?

> `optional` **delivery\_info**: [`AmazonDeliveryInfo`](../classes/AmazonDeliveryInfo.md)

Defined in: main.ts:207957

delivery information
delivery information including free and fast delivery date ranges

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:207936

alignment of the element in SERP
possible values:
left, right

***

### price?

> `optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

Defined in: main.ts:207945

product pricing details
if there are no details, the value will be null

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:24454

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`rank_absolute`](IBaseAmazonSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:24451

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`rank_group`](IBaseAmazonSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

Defined in: main.ts:207948

seller rating details
seller popularity rate based on customer reviews

***

### seller\_name?

> `optional` **seller\_name**: `string`

Defined in: main.ts:207938

business name of the seller

***

### seller\_url?

> `optional` **seller\_url**: `string`

Defined in: main.ts:207940

url forwarding to the seller’s page on Amazon

***

### ships\_from?

> `optional` **ships\_from**: `string`

Defined in: main.ts:207942

sender company name

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24448

type of element

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`type`](IBaseAmazonSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:24456

the XPath of the element

#### Inherited from

[`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md).[`xpath`](IBaseAmazonSerpElementItem.md#xpath)
