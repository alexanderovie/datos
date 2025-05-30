# ShopsListMerchantSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**xpath** | **string** | XPath of the element |[optional]|
**domain** | **string** | domain in SERP |[optional]|
**title** | **string** | product title |[optional]|
**url** | **string** | Google Shopping URL forwarding to the product page on the seller’s website<br>if you want to obtain a URL of the advertisement forwarding to the product page on the seller’s website, please refer to the Google Shopping Sellers Ad URL endpoint |[optional]|
**details** | **string** | details and special offers<br>if there are no details, the value will be null |[optional]|
**base_price** | **number** | product price without tax and shipping |[optional]|
**tax** | **number** | the amount of tax<br>tax is specified as the actual amount of money, not as the percentage |[optional]|
**shipping_price** | **number** | product shipping price |[optional]|
**total_price** | **number** | product price including tax and shipping |[optional]|
**currency** | **string** | currency in the ISO format<br>example:<br>USD |[optional]|
**price_multiplier** | **number** | monthly price multiplier<br>indicates the number of months covered by the monthly payment for the product |[optional]|
**seller_name** | **string** | name of the seller<br>the name of the company that placed a corresponding product on Google Shopping |[optional]|
**rating** | **RatingElement** | shop rating<br>the shop popularity rate based on product reviews |[optional]|
**shop_ad_aclk** | **string** | unique ad click referral parameter<br>using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL |[optional]|
**product_condition** | **string** | indicated condition of the product<br>possible values: Used, Refurbished, New, null |[optional]|
**product_annotation** | **string** | data from annotations and badges with special offers<br>if there is no annotation for this product, the value will be null<br>examples: LOW PRICE, SPECIAL OFFER, SALE, PRICE DROP |[optional]|