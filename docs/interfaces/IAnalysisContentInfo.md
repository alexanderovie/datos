[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAnalysisContentInfo

# Interface: IAnalysisContentInfo

Defined in: main.ts:189536

## Indexable

\[`key`: `string`\]: `any`

## Properties

### author?

> `optional` **author**: `string`

Defined in: main.ts:189551

author of the content

***

### connotation\_types?

> `optional` **connotation\_types**: `object`

Defined in: main.ts:189571

connotation types
contains types of sentiments (sentiment polarity) related to the given citation and probability index per each sentiment type
possible sentiment connotation types: positive, negative, neutral

#### Index Signature

\[`key`: `string`\]: `number`

***

### content\_quality\_score?

> `optional` **content\_quality\_score**: `number`

Defined in: main.ts:189582

content quality score
this value is calculated based on the number of words, sentences and characters the content contains

***

### content\_type?

> `optional` **content\_type**: `string`

Defined in: main.ts:189540

type of content
example:
page_content, comment

***

### date\_published?

> `optional` **date\_published**: `string`

Defined in: main.ts:189579

date and time when the content was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

***

### group\_date?

> `optional` **group\_date**: `string`

Defined in: main.ts:189597

citation group date and time
indicates content publication date or date and time when our crawler visited the page for the first time;
this field can be used to group citations by date and display citation trends;
date and time are provided in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

***

### highlighted\_text?

> `optional` **highlighted\_text**: `string`

Defined in: main.ts:189560

highlighted text from the snippet

***

### language?

> `optional` **language**: `string`

Defined in: main.ts:189563

content language
to obtain a full list of available languages, refer to the Languages endpoint

***

### level?

> `optional` **level**: `number`

Defined in: main.ts:189549

title heading level
indicates h-tag level from 1 (top) to 6 (bottom)

***

### main\_title?

> `optional` **main\_title**: `string`

Defined in: main.ts:189544

page title

***

### previous\_title?

> `optional` **previous\_title**: `string`

Defined in: main.ts:189546

title of the previous content block

***

### rating?

> `optional` **rating**: [`ContentRatingInfo`](../classes/ContentRatingInfo.md)

Defined in: main.ts:189590

content rating
rating related to content_info

***

### semantic\_location?

> `optional` **semantic\_location**: `string`

Defined in: main.ts:189587

semantic location
indicates semantic element in HTML where the target keyword citation is located
example:
article, header

***

### sentiment\_connotations?

> `optional` **sentiment\_connotations**: `object`

Defined in: main.ts:189567

sentiment connotations
contains sentiments (emotional reactions) related to the given citation and probability index per each sentiment
possible sentiment connotations: anger, happiness, love, sadness, share, fun

#### Index Signature

\[`key`: `string`\]: `number`

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:189553

content snippet

***

### snippet\_length?

> `optional` **snippet\_length**: `number`

Defined in: main.ts:189555

character length of the snippet

***

### social\_metrics?

> `optional` **social\_metrics**: [`SocialMetricsInfo`](../classes/SocialMetricsInfo.md)[]

Defined in: main.ts:189558

social media engagement metrics
data on social media interactions associated with the content based on website embeds developed and supported by social media platforms

***

### text\_category?

> `optional` **text\_category**: `number`[]

Defined in: main.ts:189574

text category
to obtain a full list of available categories, refer to the Categories endpoint

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:189542

title of the result
