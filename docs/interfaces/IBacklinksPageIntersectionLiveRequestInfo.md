[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksPageIntersectionLiveRequestInfo

# Interface: IBacklinksPageIntersectionLiveRequestInfo

Defined in: main.ts:170728

## Indexable

\[`key`: `string`\]: `any`

## Properties

### backlinks\_status\_type?

> `optional` **backlinks\_status\_type**: `string`

Defined in: main.ts:170758

set what backlinks to return and count
optional field
you can use this field to choose what backlinks will be returned and used for aggregated metrics for your targets;
possible values:
all – all backlinks will be returned and counted;
live – backlinks found during the last check will be returned and counted;
lost – lost backlinks will be returned and counted;
default value: live

***

### exclude\_internal\_backlinks?

> `optional` **exclude\_internal\_backlinks**: `boolean`

Defined in: main.ts:170824

indicates if internal backlinks from subdomains to the target will be excluded from the results
optional field
if set to true, the results will not include data on internal backlinks from subdomains of the same domain as target
if set to false, internal links will be included in the result
default value: true

***

### exclude\_targets?

> `optional` **exclude\_targets**: `string`[]

Defined in: main.ts:170749

domains, subdomains or webpages you want to exclude
optional field
you can set up to 10 domains, subdomains or webpages
if you use this array, results will contain the referring pages that link to targets but don’t link to exclude_targets
example:
"exclude_targets": [
"bbc.com",
"https://www.apple.com/iphone/*",
"https://dataforseo.com/apis/*"]

***

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:170775

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, =, <>, in, not_in, like, not_like, ilike, not_ilike, match, not_match
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["1.rank",">","80"]
[["2.page_from_rank",">","55"],
"and",
["1.original","=","true"]]
[["1.first_seen",">","2017-10-23 11:31:45 +00:00"],
"and",
[["1.acnhor","like","%seo%"],"or",["1.text_pre","not_like","%seo%"]]]
The full list of possible filters is available here.

***

### include\_indirect\_links?

> `optional` **include\_indirect\_links**: `boolean`

Defined in: main.ts:170818

indicates if indirect links to the targets will be included in the results
optional field
if set to true, the results will include data on indirect links pointing to a page that either redirects to a target, or points to a canonical page
if set to false, indirect links will be ignored
default value: true

***

### include\_subdomains?

> `optional` **include\_subdomains**: `boolean`

Defined in: main.ts:170812

indicates if the subdomains of the targets will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

***

### internal\_list\_limit?

> `optional` **internal\_list\_limit**: `number`

Defined in: main.ts:170807

maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the following arrays:
attributes
domain_from_platform_type
default value: 10
maximum value: 1000

***

### intersection\_mode?

> `optional` **intersection\_mode**: `string`

Defined in: main.ts:170832

indicates whether to intersect backlinks
optional field
use this field to intersect or merge results for the specified URLs
possible values: all, partial
all – results are based on all backlinks;
partial – results are based on the intersecting backlinks only;
default value: all

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:170799

the maximum number of returned backlinks
optional field
default value: 100
maximum value: 1000

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:170794

offset in the results array of the returned backlinks
optional field
default value: 0
if you specify the 10 value, the first ten backlinks in the results array will be omitted and the data will be provided for the successive backlinks

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:170789

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
["rank,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["domain_from_rank,desc","page_from_rank,asc"]

***

### rank\_scale?

> `optional` **rank\_scale**: `string`

Defined in: main.ts:170841

defines the scale used for calculating and displaying the rank, domain_from_rank, and page_from_rank values
optional field
you can use this parameter to choose whether rank values are presented on a 0–100 or 0–1000 scale
possible values:
one_hundred — rank values are displayed on a 0–100 scale
one_thousand — rank values are displayed on a 0–1000 scale
default value: one_thousand
learn more about how this parameter works and how ranking metrics are calculated in this Help Center article

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:170847

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### targets?

> `optional` **targets**: `object`

Defined in: main.ts:170739

domains, subdomains or webpages to get links for
required field
you can set up to 20 domains, subdomains or webpages
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://)
example:
"targets": {
"1": "http://planet.postgresql.org/",
"2": "http://gborg.postgresql.org/"
}

#### Index Signature

\[`key`: `string`\]: `string`
