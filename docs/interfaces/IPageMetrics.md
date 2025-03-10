[**Documentation**](../README.md)

***

[Documentation](../README.md) / IPageMetrics

# Interface: IPageMetrics

Defined in: main.ts:175118

## Indexable

\[`key`: `string`\]: `any`

## Properties

### broken\_links?

> `optional` **broken\_links**: `number`

Defined in: main.ts:175133

number of broken links
number of broken links across all crawled pages on a target website

***

### broken\_resources?

> `optional` **broken\_resources**: `number`

Defined in: main.ts:175136

number of broken resources
the number of images and other resources with broken links

***

### checks?

> `optional` **checks**: `object`

Defined in: main.ts:175154

page-specific on-page check-ups

#### Index Signature

\[`key`: `string`\]: `number`

***

### duplicate\_content?

> `optional` **duplicate\_content**: `number`

Defined in: main.ts:175130

number of pages with duplicate content

***

### duplicate\_description?

> `optional` **duplicate\_description**: `number`

Defined in: main.ts:175128

number of pages with duplicate descriptions

***

### duplicate\_title?

> `optional` **duplicate\_title**: `number`

Defined in: main.ts:175126

number of pages with duplicate titles

***

### links\_external?

> `optional` **links\_external**: `number`

Defined in: main.ts:175121

number of external links
the number of links pointing to other websites

***

### links\_internal?

> `optional` **links\_internal**: `number`

Defined in: main.ts:175124

number of internal links
the number of links pointing to other pages within the target website

***

### links\_relation\_conflict?

> `optional` **links\_relation\_conflict**: `number`

Defined in: main.ts:175139

number of links present on the target website that may have a conflict
for example, if "links_relation_conflict": 2, the target website is referring to the same source by at least one internal link with the rel="nofollow" attribute and by at least one dofollow link

***

### non\_indexable?

> `optional` **non\_indexable**: `number`

Defined in: main.ts:175152

number of non-indexable pages
number of pages that are blocked from being indexed by Google and other search engines by robots.txt, HTTP headers, or meta tags settings;
you can receive a list of non-indexable URLs using this endpoint

***

### onpage\_score?

> `optional` **onpage\_score**: `number`

Defined in: main.ts:175148

shows how website is optimized on a 100-point scale
this field shows how website is optimized considering critical on-page issues and warnings detected;
100 is the highest possible score that means website does not have any critical on-page issues and important warnings;
note that this value depends on the number of crawled pages;
learn more about how the metric is calculated in this help center article

***

### redirect\_loop?

> `optional` **redirect\_loop**: `number`

Defined in: main.ts:175142

number of redirect chains that start and end at the same URL
number of redirect chains where the destination URL redirects back to the original URL
