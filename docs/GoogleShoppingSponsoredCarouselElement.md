# GoogleShoppingSponsoredCarouselElement

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**xpath** | **string** | XPath of the element |[optional]|
**title** | **string** | product title |[optional]|
**tags** | **string[]** | tags assigned to the product |[optional]|
**seller** | **string** | name of the seller<br>the name of the company that placed a corresponding product on Google Shopping |[optional]|
**price** | **number** | product price<br>example:<br>384.99 |[optional]|
**currency** | **string** | currency in the ISO format<br>example:<br>USD |[optional]|
**product_rating** | **RatingElement** | product rating<br>the product popularity rate based on product reviews |[optional]|
**product_images** | **string[]** | URLs to the images of the product<br>the first URL in the array is the featured image of the product |[optional]|
**shop_ad_aclk** | **string** | unique ad click referral parameter<br>using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL |[optional]|
**delivery_info** | **DeliveryInfo** | delivery information<br>delivery information including free and fast delivery date ranges |[optional]|
**special_offer_info** | **SpecialOfferInfo** | special offer from the seller<br>information on the special offer from the seller, including discount and coupon info |[optional]|