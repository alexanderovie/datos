[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleSellersAdUrlResultInfo

# Class: MerchantGoogleSellersAdUrlResultInfo

Defined in: main.ts:200249

## Implements

- [`IMerchantGoogleSellersAdUrlResultInfo`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleSellersAdUrlResultInfo()

> **new MerchantGoogleSellersAdUrlResultInfo**(`data`?): [`MerchantGoogleSellersAdUrlResultInfo`](MerchantGoogleSellersAdUrlResultInfo.md)

Defined in: main.ts:200260

#### Parameters

##### data?

[`IMerchantGoogleSellersAdUrlResultInfo`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md)

#### Returns

[`MerchantGoogleSellersAdUrlResultInfo`](MerchantGoogleSellersAdUrlResultInfo.md)

## Properties

### ad\_aclk?

> `optional` **ad\_aclk**: `string`

Defined in: main.ts:200251

unique ad click referral parameter

#### Implementation of

[`IMerchantGoogleSellersAdUrlResultInfo`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md).[`ad_aclk`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md#ad_aclk)

***

### ad\_url?

> `optional` **ad\_url**: `string`

Defined in: main.ts:200253

full URL of the advertisement

#### Implementation of

[`IMerchantGoogleSellersAdUrlResultInfo`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md).[`ad_url`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md#ad_url)

***

### ad\_url\_redirects?

> `optional` **ad\_url\_redirects**: `string`[]

Defined in: main.ts:200256

URLs where the link from Google Shopping redirects before reaching a final URL
includes up to 10 URLs of the ad’s redirect path to the seller’s ad_url

#### Implementation of

[`IMerchantGoogleSellersAdUrlResultInfo`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md).[`ad_url_redirects`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md#ad_url_redirects)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:200269

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:200292

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleSellersAdUrlResultInfo`](MerchantGoogleSellersAdUrlResultInfo.md)

Defined in: main.ts:200285

#### Parameters

##### data

`any`

#### Returns

[`MerchantGoogleSellersAdUrlResultInfo`](MerchantGoogleSellersAdUrlResultInfo.md)
