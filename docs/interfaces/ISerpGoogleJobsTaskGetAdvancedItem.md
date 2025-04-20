[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleJobsTaskGetAdvancedItem

# Interface: ISerpGoogleJobsTaskGetAdvancedItem

Defined in: main.ts:57574

## Indexable

\[`key`: `string`\]: `any`

## Properties

### contract\_type?

> `optional` **contract\_type**: `string`

Defined in: main.ts:57610

employment contract type

***

### employer\_image\_url?

> `optional` **employer\_image\_url**: `string`

Defined in: main.ts:57599

URL to the image used in the job posting

***

### employer\_name?

> `optional` **employer\_name**: `string`

Defined in: main.ts:57595

name of the employer

***

### employer\_url?

> `optional` **employer\_url**: `string`

Defined in: main.ts:57597

URL to the employer’s website

***

### job\_id?

> `optional` **job\_id**: `string`

Defined in: main.ts:57591

ID of the job on Google Jobs

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:57601

location for which the job vacancy is posted

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:57587

the alignment of the element in SERP
can take the following values:
left, right

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:57583

absolute rank in SERP
absolute position among all the elements in SERP

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:57580

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

Defined in: main.ts:57621

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP;
in this case, will equal null

***

### salary?

> `optional` **salary**: `string`

Defined in: main.ts:57608

the salary indicated in the job vacancy
if the salary isn’t indicated, this field will equal null

***

### source\_name?

> `optional` **source\_name**: `string`

Defined in: main.ts:57603

original source of the job vacancy

***

### source\_url?

> `optional` **source\_url**: `string`

Defined in: main.ts:57605

URL to the original source of the job vacancy

***

### time\_ago?

> `optional` **time\_ago**: `string`

Defined in: main.ts:57617

indicates how long ago the job vacancy was posted

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:57615

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:57593

title of the element

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:57576

type of element

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:57589

the XPath of the element
