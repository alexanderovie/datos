[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleJobsTaskGetAdvancedItem

# Interface: ISerpGoogleJobsTaskGetAdvancedItem

Defined in: main.ts:57033

## Indexable

\[`key`: `string`\]: `any`

## Properties

### contract\_type?

> `optional` **contract\_type**: `string`

Defined in: main.ts:57069

employment contract type

***

### employer\_image\_url?

> `optional` **employer\_image\_url**: `string`

Defined in: main.ts:57058

URL to the image used in the job posting

***

### employer\_name?

> `optional` **employer\_name**: `string`

Defined in: main.ts:57054

name of the employer

***

### employer\_url?

> `optional` **employer\_url**: `string`

Defined in: main.ts:57056

URL to the employer’s website

***

### job\_id?

> `optional` **job\_id**: `string`

Defined in: main.ts:57050

ID of the job on Google Jobs

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:57060

location for which the job vacancy is posted

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:57046

the alignment of the element in SERP
can take the following values:
left, right

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:57042

absolute rank in SERP
absolute position among all the elements in SERP

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:57039

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

Defined in: main.ts:57080

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP;
in this case, will equal null

***

### salary?

> `optional` **salary**: `string`

Defined in: main.ts:57067

the salary indicated in the job vacancy
if the salary isn’t indicated, this field will equal null

***

### source\_name?

> `optional` **source\_name**: `string`

Defined in: main.ts:57062

original source of the job vacancy

***

### source\_url?

> `optional` **source\_url**: `string`

Defined in: main.ts:57064

URL to the original source of the job vacancy

***

### time\_ago?

> `optional` **time\_ago**: `string`

Defined in: main.ts:57076

indicates how long ago the job vacancy was posted

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:57074

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:57052

title of the element

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:57035

type of element

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:57048

the XPath of the element
