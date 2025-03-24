[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleSellersTaskGetHtmlResultInfo

# Class: MerchantGoogleSellersTaskGetHtmlResultInfo

Defined in: main.ts:200142

## Implements

- [`IMerchantGoogleSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MerchantGoogleSellersTaskGetHtmlResultInfo**(`data`?): `MerchantGoogleSellersTaskGetHtmlResultInfo`

Defined in: main.ts:200165

#### Parameters

##### data?

[`IMerchantGoogleSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md)

#### Returns

`MerchantGoogleSellersTaskGetHtmlResultInfo`

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:200157

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantGoogleSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md).[`datetime`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md#datetime)

***

### items?

> `optional` **items**: [`HtmlItem`](HtmlItem.md)[]

Defined in: main.ts:200161

elements of search results found on Google Shopping

#### Implementation of

[`IMerchantGoogleSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md).[`items`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:200159

the number of results returned in the items array

#### Implementation of

[`IMerchantGoogleSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md).[`items_count`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:200152

language code in a POST array

#### Implementation of

[`IMerchantGoogleSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md).[`language_code`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:200150

location code in a POST array

#### Implementation of

[`IMerchantGoogleSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md).[`location_code`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md#location_code)

***

### product\_id?

> `optional` **product\_id**: `string`

Defined in: main.ts:200144

product_id received in a POST array

#### Implementation of

[`IMerchantGoogleSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md).[`product_id`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md#product_id)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:200148

search engine domain in a POST array

#### Implementation of

[`IMerchantGoogleSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md).[`se_domain`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md#se_domain)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:200146

type of element

#### Implementation of

[`IMerchantGoogleSellersTaskGetHtmlResultInfo`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md).[`type`](../interfaces/IMerchantGoogleSellersTaskGetHtmlResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:200174

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:200202

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `MerchantGoogleSellersTaskGetHtmlResultInfo`

Defined in: main.ts:200195

#### Parameters

##### data

`any`

#### Returns

`MerchantGoogleSellersTaskGetHtmlResultInfo`
