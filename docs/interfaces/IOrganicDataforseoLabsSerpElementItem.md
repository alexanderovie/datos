[**Documentation**](../README.md)

***

[Documentation](../README.md) / IOrganicDataforseoLabsSerpElementItem

# Interface: IOrganicDataforseoLabsSerpElementItem

Defined in: main.ts:111923

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### about\_this\_result?

> `optional` **about\_this\_result**: `object`

Defined in: main.ts:111965

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Index Signature

\[`key`: `string`\]: [`AboutThisResultElement`](../classes/AboutThisResultElement.md)

***

### amp\_version?

> `optional` **amp\_version**: `boolean`

Defined in: main.ts:111952

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

***

### backlinks\_info?

> `optional` **backlinks\_info**: [`BacklinksInfo`](../classes/BacklinksInfo.md)

Defined in: main.ts:111993

backlinks information for the target website

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

Defined in: main.ts:111933

breadcrumb in SERP

***

### clickstream\_etv?

> `optional` **clickstream\_etv**: `number`

Defined in: main.ts:111988

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:111945

description of the results element in SERP

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:111927

subdomain in SERP

***

### estimated\_paid\_traffic\_cost?

> `optional` **estimated\_paid\_traffic\_cost**: `number`

Defined in: main.ts:111983

estimated cost of monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

***

### etv?

> `optional` **etv**: `number`

Defined in: main.ts:111974

estimated traffic volume
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

***

### extended\_snippet?

> `optional` **extended\_snippet**: `string`

Defined in: main.ts:111949

includes additional information appended after the result description in SERP

***

### highlighted?

> `optional` **highlighted**: `string`[]

Defined in: main.ts:111957

words highlighted in bold within the results description

***

### impressions\_etv?

> `optional` **impressions\_etv**: `number`

Defined in: main.ts:111979

estimated traffic volume based on impressions
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article

***

### is\_featured\_snippet?

> `optional` **is\_featured\_snippet**: `boolean`

Defined in: main.ts:111941

indicates whether the element is a featured_snippet

***

### is\_image?

> `optional` **is\_image**: `boolean`

Defined in: main.ts:111937

indicates whether the element contains an image

***

### is\_malicious?

> `optional` **is\_malicious**: `boolean`

Defined in: main.ts:111943

indicates whether the element is marked as malicious

***

### is\_video?

> `optional` **is\_video**: `boolean`

Defined in: main.ts:111939

indicates whether the element contains a video

***

### links?

> `optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

Defined in: main.ts:111961

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

***

### main\_domain?

> `optional` **main\_domain**: `string`

Defined in: main.ts:111967

primary domain name in SERP

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22847

the alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`position`](IBaseDataforseoLabsSerpElementItem.md#position)

***

### pre\_snippet?

> `optional` **pre\_snippet**: `string`

Defined in: main.ts:111947

includes additional information appended before the result description in SERP

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22843

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](IBaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_changes?

> `optional` **rank\_changes**: [`RankChanges`](../classes/RankChanges.md)

Defined in: main.ts:111991

changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22840

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`rank_group`](IBaseDataforseoLabsSerpElementItem.md#rank_group)

***

### rank\_info?

> `optional` **rank\_info**: [`RankInfo`](../classes/RankInfo.md)

Defined in: main.ts:111995

page and domain rank information

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

Defined in: main.ts:111955

the item’s rating 
the popularity rate based on reviews and displayed in SERP

***

### relative\_url?

> `optional` **relative\_url**: `string`

Defined in: main.ts:111969

URL in SERP that does not specify the HTTPs protocol and domain name

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:111925

search engine type

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:111929

title of the result in SERP

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22837

type of element

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`type`](IBaseDataforseoLabsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:111931

relevant URL in SERP

***

### website\_name?

> `optional` **website\_name**: `string`

Defined in: main.ts:111935

relevant website name in SERP

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22849

the XPath of the element

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`xpath`](IBaseDataforseoLabsSerpElementItem.md#xpath)
