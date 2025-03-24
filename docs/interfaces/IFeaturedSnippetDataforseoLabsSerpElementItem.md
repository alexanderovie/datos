[**Documentation**](../README.md)

***

[Documentation](../README.md) / IFeaturedSnippetDataforseoLabsSerpElementItem

# Interface: IFeaturedSnippetDataforseoLabsSerpElementItem

Defined in: main.ts:117914

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### backlinks\_info?

> `optional` **backlinks\_info**: [`BacklinksInfo`](../classes/BacklinksInfo.md)

Defined in: main.ts:117947

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:117924

description of the results element in SERP

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:117918

subdomain in SERP

***

### estimated\_paid\_traffic\_cost?

> `optional` **estimated\_paid\_traffic\_cost**: `number`

Defined in: main.ts:117943

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost of running ads (USD) for the returned keyword;
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Bing Search
learn more about how the metric is calculated in this help center article

***

### etv?

> `optional` **etv**: `number`

Defined in: main.ts:117938

estimated traffic volume
estimated organic monthly traffic to the domain;
calculated as the product of CTR (click-through-rate) and search volume values of the returned keyword
learn more about how the metric is calculated in this help center article

***

### featured\_title?

> `optional` **featured\_title**: `string`

Defined in: main.ts:117922

the title of the featured snippets source page

***

### main\_domain?

> `optional` **main\_domain**: `string`

Defined in: main.ts:117931

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

Defined in: main.ts:117946

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

Defined in: main.ts:117948

***

### relative\_url?

> `optional` **relative\_url**: `string`

Defined in: main.ts:117933

relative URL in SERP

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:117916

search engine type

***

### table?

> `optional` **table**: [`Table`](../classes/Table.md)

Defined in: main.ts:117929

results table
if there are none, equals null

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:117920

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

Defined in: main.ts:117926

relevant URL in SERP

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22849

the XPath of the element

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`xpath`](IBaseDataforseoLabsSerpElementItem.md#xpath)
