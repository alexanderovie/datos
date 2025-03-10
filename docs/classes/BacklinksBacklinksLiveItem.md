[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBacklinksLiveItem

# Class: BacklinksBacklinksLiveItem

Defined in: main.ts:161373

## Implements

- [`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksBacklinksLiveItem()

> **new BacklinksBacklinksLiveItem**(`data`?): [`BacklinksBacklinksLiveItem`](BacklinksBacklinksLiveItem.md)

Defined in: main.ts:161525

#### Parameters

##### data?

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md)

#### Returns

[`BacklinksBacklinksLiveItem`](BacklinksBacklinksLiveItem.md)

## Properties

### alt?

> `optional` **alt**: `string`

Defined in: main.ts:161479

alternative text of the image
this field will be null if backlink type is not image

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`alt`](../interfaces/IBacklinksBacklinksLiveItem.md#alt)

***

### anchor?

> `optional` **anchor**: `string`

Defined in: main.ts:161484

anchor text of the backlink

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`anchor`](../interfaces/IBacklinksBacklinksLiveItem.md#anchor)

***

### attributes?

> `optional` **attributes**: `string`[]

Defined in: main.ts:161471

link attributes of the referring links
example:
nofollow

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`attributes`](../interfaces/IBacklinksBacklinksLiveItem.md#attributes)

***

### backlink\_spam\_score?

> `optional` **backlink\_spam\_score**: `number`

Defined in: main.ts:161400

spam score of the backlink
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`backlink_spam_score`](../interfaces/IBacklinksBacklinksLiveItem.md#backlink_spam_score)

***

### dofollow?

> `optional` **dofollow**: `boolean`

Defined in: main.ts:161474

indicates whether the backlink is dofollow
if false, the backlink is nofollow

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`dofollow`](../interfaces/IBacklinksBacklinksLiveItem.md#dofollow)

***

### domain\_from?

> `optional` **domain\_from**: `string`

Defined in: main.ts:161377

domain referring to the target domain or webpage

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`domain_from`](../interfaces/IBacklinksBacklinksLiveItem.md#domain_from)

***

### domain\_from\_country?

> `optional` **domain\_from\_country**: `string`

Defined in: main.ts:161425

ISO country code of the referring domain

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`domain_from_country`](../interfaces/IBacklinksBacklinksLiveItem.md#domain_from_country)

***

### domain\_from\_ip?

> `optional` **domain\_from\_ip**: `string`

Defined in: main.ts:161423

IP address of the referring domain

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`domain_from_ip`](../interfaces/IBacklinksBacklinksLiveItem.md#domain_from_ip)

***

### domain\_from\_is\_ip?

> `optional` **domain\_from\_is\_ip**: `boolean`

Defined in: main.ts:161421

indicates if the domain is IP
if true, the domain functions as an IP address and does not have a domain name

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`domain_from_is_ip`](../interfaces/IBacklinksBacklinksLiveItem.md#domain_from_is_ip)

***

### domain\_from\_platform\_type?

> `optional` **domain\_from\_platform\_type**: `string`[]

Defined in: main.ts:161418

platform types of the referring domain
example:
"cms",
"blogs"

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`domain_from_platform_type`](../interfaces/IBacklinksBacklinksLiveItem.md#domain_from_platform_type)

***

### domain\_from\_rank?

> `optional` **domain\_from\_rank**: `number`

Defined in: main.ts:161413

domain rank of the referring domain
domain_from_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`domain_from_rank`](../interfaces/IBacklinksBacklinksLiveItem.md#domain_from_rank)

***

### domain\_to?

> `optional` **domain\_to**: `string`

Defined in: main.ts:161384

domain the backlink is pointing to

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`domain_to`](../interfaces/IBacklinksBacklinksLiveItem.md#domain_to)

***

### first\_seen?

> `optional` **first\_seen**: `string`

Defined in: main.ts:161453

date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`first_seen`](../interfaces/IBacklinksBacklinksLiveItem.md#first_seen)

***

### group\_count?

> `optional` **group\_count**: `number`

Defined in: main.ts:161498

indicates total number of backlinks from this domain
for example, if mode is set to one_per_domain, this field will indicate the total number of backlinks coming from this domain

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`group_count`](../interfaces/IBacklinksBacklinksLiveItem.md#group_count)

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:161482

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`image_url`](../interfaces/IBacklinksBacklinksLiveItem.md#image_url)

***

### indirect\_link\_path?

> `optional` **indirect\_link\_path**: [`Redirect`](Redirect.md)[]

Defined in: main.ts:161521

indirect link path
indicates a URL or a sequence of URLs that lead to url_to

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`indirect_link_path`](../interfaces/IBacklinksBacklinksLiveItem.md#indirect_link_path)

***

### is\_broken?

> `optional` **is\_broken**: `boolean`

Defined in: main.ts:161501

indicates whether the backlink is broken
if true, the backlink is pointing to a page responding with a 4xx or 5xx status code

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`is_broken`](../interfaces/IBacklinksBacklinksLiveItem.md#is_broken)

***

### is\_indirect\_link?

> `optional` **is\_indirect\_link**: `boolean`

Defined in: main.ts:161518

indicates whether the backlink is an indirect link
if true, the backlink is an indirect link pointing to a page that either redirects to url_to, or points to a canonical page

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`is_indirect_link`](../interfaces/IBacklinksBacklinksLiveItem.md#is_indirect_link)

***

### is\_lost?

> `optional` **is\_lost**: `boolean`

Defined in: main.ts:161397

indicates whether the backlink was removed
if true, the backlink or the entire page was removed

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`is_lost`](../interfaces/IBacklinksBacklinksLiveItem.md#is_lost)

***

### is\_new?

> `optional` **is\_new**: `boolean`

Defined in: main.ts:161394

indicates whether the backlink is new
if true, the backlink was found on the page last time our crawler visited it

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`is_new`](../interfaces/IBacklinksBacklinksLiveItem.md#is_new)

***

### item\_type?

> `optional` **item\_type**: `string`

Defined in: main.ts:161467

link type
possible values:
anchor, image, meta, canonical, alternate, redirect

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`item_type`](../interfaces/IBacklinksBacklinksLiveItem.md#item_type)

***

### last\_seen?

> `optional` **last\_seen**: `string`

Defined in: main.ts:161463

most recent date when our crawler visited the backlink
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`last_seen`](../interfaces/IBacklinksBacklinksLiveItem.md#last_seen)

***

### links\_count?

> `optional` **links\_count**: `number`

Defined in: main.ts:161495

number of identical backlinks found on the referring page

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`links_count`](../interfaces/IBacklinksBacklinksLiveItem.md#links_count)

***

### original?

> `optional` **original**: `boolean`

Defined in: main.ts:161476

indicates whether the backlink was present on the referring page when our crawler first visited it

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`original`](../interfaces/IBacklinksBacklinksLiveItem.md#original)

***

### page\_from\_encoding?

> `optional` **page\_from\_encoding**: `string`

Defined in: main.ts:161437

character encoding of the referring page
example:
utf-8

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`page_from_encoding`](../interfaces/IBacklinksBacklinksLiveItem.md#page_from_encoding)

***

### page\_from\_external\_links?

> `optional` **page\_from\_external\_links**: `number`

Defined in: main.ts:161427

number of external links found on the referring page

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`page_from_external_links`](../interfaces/IBacklinksBacklinksLiveItem.md#page_from_external_links)

***

### page\_from\_internal\_links?

> `optional` **page\_from\_internal\_links**: `number`

Defined in: main.ts:161429

number of internal links found on the referring page

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`page_from_internal_links`](../interfaces/IBacklinksBacklinksLiveItem.md#page_from_internal_links)

***

### page\_from\_language?

> `optional` **page\_from\_language**: `string`

Defined in: main.ts:161442

language of the referring page
in ISO 639-1 format
example:
en

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`page_from_language`](../interfaces/IBacklinksBacklinksLiveItem.md#page_from_language)

***

### page\_from\_rank?

> `optional` **page\_from\_rank**: `number`

Defined in: main.ts:161409

page rank of the referring page
page_from_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`page_from_rank`](../interfaces/IBacklinksBacklinksLiveItem.md#page_from_rank)

***

### page\_from\_size?

> `optional` **page\_from\_size**: `number`

Defined in: main.ts:161433

size of the referring page, in bytes
example:
63357

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`page_from_size`](../interfaces/IBacklinksBacklinksLiveItem.md#page_from_size)

***

### page\_from\_status\_code?

> `optional` **page\_from\_status\_code**: `number`

Defined in: main.ts:161448

HTTP status code returned by the referring page
example:
200

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`page_from_status_code`](../interfaces/IBacklinksBacklinksLiveItem.md#page_from_status_code)

***

### page\_from\_title?

> `optional` **page\_from\_title**: `string`

Defined in: main.ts:161444

title of the referring page

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`page_from_title`](../interfaces/IBacklinksBacklinksLiveItem.md#page_from_title)

***

### prev\_seen?

> `optional` **prev\_seen**: `string`

Defined in: main.ts:161458

previous to the most recent date when our crawler visited the backlink
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`prev_seen`](../interfaces/IBacklinksBacklinksLiveItem.md#prev_seen)

***

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:161405

backlink rank
rank that the given backlink passes to the target
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`rank`](../interfaces/IBacklinksBacklinksLiveItem.md#rank)

***

### ranked\_keywords\_info?

> `optional` **ranked\_keywords\_info**: [`RankedKeywordsInfo`](RankedKeywordsInfo.md)

Defined in: main.ts:161515

number of keywords for which the page is ranked in top search results

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`ranked_keywords_info`](../interfaces/IBacklinksBacklinksLiveItem.md#ranked_keywords_info)

***

### semantic\_location?

> `optional` **semantic\_location**: `string`

Defined in: main.ts:161493

indicates semantic element in HTML where the backlink is found
you can get the full list of semantic elements here
examples:
article, section, summary

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`semantic_location`](../interfaces/IBacklinksBacklinksLiveItem.md#semantic_location)

***

### text\_post?

> `optional` **text\_post**: `string`

Defined in: main.ts:161488

snippet after the anchor text

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`text_post`](../interfaces/IBacklinksBacklinksLiveItem.md#text_post)

***

### text\_pre?

> `optional` **text\_pre**: `string`

Defined in: main.ts:161486

snippet before the anchor text

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`text_pre`](../interfaces/IBacklinksBacklinksLiveItem.md#text_pre)

***

### tld\_from?

> `optional` **tld\_from**: `string`

Defined in: main.ts:161391

top-level domain of the referring URL

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`tld_from`](../interfaces/IBacklinksBacklinksLiveItem.md#tld_from)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:161375

type of element

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`type`](../interfaces/IBacklinksBacklinksLiveItem.md#type)

***

### url\_from?

> `optional` **url\_from**: `string`

Defined in: main.ts:161379

URL of the page where the backlink is found

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`url_from`](../interfaces/IBacklinksBacklinksLiveItem.md#url_from)

***

### url\_from\_https?

> `optional` **url\_from\_https**: `boolean`

Defined in: main.ts:161382

indicates whether the referring URL is secured with HTTPS
if true, the referring URL is secured with HTTPS

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`url_from_https`](../interfaces/IBacklinksBacklinksLiveItem.md#url_from_https)

***

### url\_to?

> `optional` **url\_to**: `string`

Defined in: main.ts:161386

URL the backlink is pointing to

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`url_to`](../interfaces/IBacklinksBacklinksLiveItem.md#url_to)

***

### url\_to\_https?

> `optional` **url\_to\_https**: `boolean`

Defined in: main.ts:161389

indicates if the URL the backlink is pointing to is secured with HTTPS
if true, the URL is secured with HTTPS

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`url_to_https`](../interfaces/IBacklinksBacklinksLiveItem.md#url_to_https)

***

### url\_to\_redirect\_target?

> `optional` **url\_to\_redirect\_target**: `string`

Defined in: main.ts:161513

target url of the redirect
target page the redirect is pointing to

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`url_to_redirect_target`](../interfaces/IBacklinksBacklinksLiveItem.md#url_to_redirect_target)

***

### url\_to\_spam\_score?

> `optional` **url\_to\_spam\_score**: `number`

Defined in: main.ts:161510

spam score of the referenced page
if the value is null, our crawler hasn’t yet visited the webpage the link is pointing to;
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`url_to_spam_score`](../interfaces/IBacklinksBacklinksLiveItem.md#url_to_spam_score)

***

### url\_to\_status\_code?

> `optional` **url\_to\_status\_code**: `number`

Defined in: main.ts:161506

status code of the referenced page
if the value is null, our crawler hasn’t yet visited the webpage the link is pointing to
example:
200

#### Implementation of

[`IBacklinksBacklinksLiveItem`](../interfaces/IBacklinksBacklinksLiveItem.md).[`url_to_status_code`](../interfaces/IBacklinksBacklinksLiveItem.md#url_to_status_code)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:161534

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:161609

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBacklinksLiveItem`](BacklinksBacklinksLiveItem.md)

Defined in: main.ts:161602

#### Parameters

##### data

`any`

#### Returns

[`BacklinksBacklinksLiveItem`](BacklinksBacklinksLiveItem.md)
