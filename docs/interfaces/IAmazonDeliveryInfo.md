[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAmazonDeliveryInfo

# Interface: IAmazonDeliveryInfo

Defined in: main.ts:24828

## Indexable

\[`key`: `string`\]: `any`

## Properties

### delivery\_date\_from?

> `optional` **delivery\_date\_from**: `string`

Defined in: main.ts:24832

the earliest date when the product can be shipped

***

### delivery\_date\_to?

> `optional` **delivery\_date\_to**: `string`

Defined in: main.ts:24834

the latest date when the product can be delivered

***

### delivery\_message?

> `optional` **delivery\_message**: `string`

Defined in: main.ts:24830

message accompanying the delivery information as posted by the seller

***

### delivery\_price?

> `optional` **delivery\_price**: [`PriceInfo`](../classes/PriceInfo.md)

Defined in: main.ts:24842

price for the delivery
price of the delivery based on the location you specified in the POST request;
if free delivery is available, the value is null

***

### fastest\_delivery\_date\_from?

> `optional` **fastest\_delivery\_date\_from**: `string`

Defined in: main.ts:24836

the earliest date when the product can be delivered with a fast delivery option

***

### fastest\_delivery\_date\_to?

> `optional` **fastest\_delivery\_date\_to**: `string`

Defined in: main.ts:24838

the latest date when the product can be delivered with a fast delivery option
