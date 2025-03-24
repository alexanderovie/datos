[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleAdsSearchTaskGetAdvancedItem

# Interface: ISerpGoogleAdsSearchTaskGetAdvancedItem

Defined in: main.ts:65347

## Indexable

\[`key`: `string`\]: `any`

## Properties

### advertiser\_id?

> `optional` **advertiser\_id**: `string`

Defined in: main.ts:65358

unique identifier of the advertiser account

***

### creative\_id?

> `optional` **creative\_id**: `string`

Defined in: main.ts:65360

unique identifier of the advertisement

***

### first\_shown?

> `optional` **first\_shown**: `string`

Defined in: main.ts:65377

date and time when the ad was shown for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”

***

### format?

> `optional` **format**: `string`

Defined in: main.ts:65370

format of the advertisement
possible values: text, image, video

***

### last\_shown?

> `optional` **last\_shown**: `string`

Defined in: main.ts:65380

date and time when the ad was shown the last time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”

***

### preview\_image?

> `optional` **preview\_image**: [`PreviewImage`](../classes/PreviewImage.md)

Defined in: main.ts:65372

preview image of the advertisement

***

### preview\_url?

> `optional` **preview\_url**: `string`

Defined in: main.ts:65374

url pointing to the ad preview

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:65356

absolute rank in SERP
absolute position among all the elements in SERP

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:65353

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:65362

title of the element

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:65349

type of element

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:65364

search URL with refinement parameters

***

### verified?

> `optional` **verified**: `boolean`

Defined in: main.ts:65367

verified advertiser account
equals true if advertiser account is verified by Google Ads
