[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonSellersTaskGetHtmlResultInfo

# Class: MerchantAmazonSellersTaskGetHtmlResultInfo

Defined in: main.ts:208224

## Implements

- [`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MerchantAmazonSellersTaskGetHtmlResultInfo**(`data`?): `MerchantAmazonSellersTaskGetHtmlResultInfo`

Defined in: main.ts:208247

#### Parameters

##### data?

[`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md)

#### Returns

`MerchantAmazonSellersTaskGetHtmlResultInfo`

## Properties

### asin?

> `optional` **asin**: `string`

Defined in: main.ts:208226

ASIN received in a POST array

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[`asin`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#asin)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:208239

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:208243

elements of search results found on Amazon

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[`items`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:208241

the number of results returned in the items array

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:208234

language code in a POST array

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:208232

location code in a POST array

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:208230

search engine domain in a POST array

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:208228

type of element

#### Implementation of

[`IMerchantAmazonSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md).[`type`](../interfaces/IMerchantAmazonSellersTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:208256

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:208284

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `MerchantAmazonSellersTaskGetHtmlResultInfo`

Defined in: main.ts:208277

#### Parameters

##### data

`any`

#### Returns

`MerchantAmazonSellersTaskGetHtmlResultInfo`
