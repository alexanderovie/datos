[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleSellersAdUrlResultInfo

# Class: MerchantGoogleSellersAdUrlResultInfo

Defined in: main.ts:202658

## Implements

- [`IMerchantGoogleSellersAdUrlResultInfo`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MerchantGoogleSellersAdUrlResultInfo**(`data`?): `MerchantGoogleSellersAdUrlResultInfo`

Defined in: main.ts:202669

#### Parameters

##### data?

[`IMerchantGoogleSellersAdUrlResultInfo`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md)

#### Returns

`MerchantGoogleSellersAdUrlResultInfo`

## Properties

### ad\_aclk?

> `optional` **ad\_aclk**: `string`

Defined in: main.ts:202660

unique ad click referral parameter

#### Implementation of

[`IMerchantGoogleSellersAdUrlResultInfo`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md).[`ad_aclk`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md#ad_aclk)

***

### ad\_url?

> `optional` **ad\_url**: `string`

Defined in: main.ts:202662

full URL of the advertisement

#### Implementation of

[`IMerchantGoogleSellersAdUrlResultInfo`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md).[`ad_url`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md#ad_url)

***

### ad\_url\_redirects?

> `optional` **ad\_url\_redirects**: `string`[]

Defined in: main.ts:202665

URLs where the link from Google Shopping redirects before reaching a final URL
includes up to 10 URLs of the ad’s redirect path to the seller’s ad_url

#### Implementation of

[`IMerchantGoogleSellersAdUrlResultInfo`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md).[`ad_url_redirects`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md#ad_url_redirects)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:202678

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:202701

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `MerchantGoogleSellersAdUrlResultInfo`

Defined in: main.ts:202694

#### Parameters

##### data

`any`

#### Returns

`MerchantGoogleSellersAdUrlResultInfo`
