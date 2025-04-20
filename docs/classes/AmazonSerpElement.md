[**Documentation**](../README.md)

***

[Documentation](../README.md) / AmazonSerpElement

# Class: AmazonSerpElement

Defined in: main.ts:204784

## Implements

- [`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AmazonSerpElement**(`data?`): `AmazonSerpElement`

Defined in: main.ts:204833

#### Parameters

##### data?

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md)

#### Returns

`AmazonSerpElement`

## Properties

### bought\_past\_month?

> `optional` **bought\_past\_month**: `number`

Defined in: main.ts:204798

number of product purchases in the past month

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`bought_past_month`](../interfaces/IAmazonSerpElement.md#bought_past_month)

***

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:204810

currency in the ISO format
example:
USD

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`currency`](../interfaces/IAmazonSerpElement.md#currency)

***

### data\_asin?

> `optional` **data\_asin**: `string`

Defined in: main.ts:204818

unique product identifier on Amazon
note that there is no full list of possible values as the data_asin is a dynamic value assigned by Amazon
example:
B07G82D89J

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`data_asin`](../interfaces/IAmazonSerpElement.md#data_asin)

***

### delivery\_info?

> `optional` **delivery\_info**: [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

Defined in: main.ts:204829

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`delivery_info`](../interfaces/IAmazonSerpElement.md#delivery_info)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:204790

Amazon domain

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`domain`](../interfaces/IAmazonSerpElement.md#domain)

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:204796

URL of the product image featured in the results

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`image_url`](../interfaces/IAmazonSerpElement.md#image_url)

***

### is\_amazon\_choice?

> `optional` **is\_amazon\_choice**: `boolean`

Defined in: main.ts:204823

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`is_amazon_choice`](../interfaces/IAmazonSerpElement.md#is_amazon_choice)

***

### is\_best\_seller?

> `optional` **is\_best\_seller**: `boolean`

Defined in: main.ts:204826

“Best Seller” label
if the value is true, the product is marked with the “Best Seller” label

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`is_best_seller`](../interfaces/IAmazonSerpElement.md#is_best_seller)

***

### price\_from?

> `optional` **price\_from**: `number`

Defined in: main.ts:204802

the regular price of a product
example:
49.98

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`price_from`](../interfaces/IAmazonSerpElement.md#price_from)

***

### price\_to?

> `optional` **price\_to**: `number`

Defined in: main.ts:204806

the upper limit of the product price range
example:
384.99

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`price_to`](../interfaces/IAmazonSerpElement.md#price_to)

***

### rating?

> `optional` **rating**: [`RatingElement`](RatingElement.md)

Defined in: main.ts:204820

product rating info

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`rating`](../interfaces/IAmazonSerpElement.md#rating)

***

### special\_offers?

> `optional` **special\_offers**: `string`[]

Defined in: main.ts:204813

special offer details
contains special offer details, including coupon and Subscribe & Save discounts

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`special_offers`](../interfaces/IAmazonSerpElement.md#special_offers)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:204792

product title

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`title`](../interfaces/IAmazonSerpElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:204786

type of element

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`type`](../interfaces/IAmazonSerpElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:204794

the URL of the product page

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`url`](../interfaces/IAmazonSerpElement.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:204788

the XPath of the element

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`xpath`](../interfaces/IAmazonSerpElement.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:204842

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:204878

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AmazonSerpElement`

Defined in: main.ts:204871

#### Parameters

##### data

`any`

#### Returns

`AmazonSerpElement`
