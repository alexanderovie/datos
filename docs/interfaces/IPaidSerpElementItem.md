[**Documentation**](../README.md)

***

[Documentation](../README.md) / IPaidSerpElementItem

# Interface: IPaidSerpElementItem

Defined in: main.ts:30555

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### breadcrumb?

> `optional` **breadcrumb**: `string`

Defined in: main.ts:30569

breadcrumb in SERP

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:30583

description of the results element in SERP

***

### description\_rows?

> `optional` **description\_rows**: `string`[]

Defined in: main.ts:30586

extended description
if there is none, equals null

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:30565

domain name of the reference

***

### extra?

> `optional` **extra**: `object`

Defined in: main.ts:30581

additional information about the result

#### Index Signature

\[`key`: `string`\]: `string`

***

### highlighted?

> `optional` **highlighted**: `string`[]

Defined in: main.ts:30579

words highlighted in bold within the results description

***

### images?

> `optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

Defined in: main.ts:30575

images of the element

***

### is\_image?

> `optional` **is\_image**: `boolean`

Defined in: main.ts:30571

indicates whether the element contains an image

***

### is\_video?

> `optional` **is\_video**: `boolean`

Defined in: main.ts:30573

indicates whether the element contains a video

***

### links?

> `optional` **links**: [`AdLinkElement`](../classes/AdLinkElement.md)[]

Defined in: main.ts:30590

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:30559

the alignment of the element in SERP
can take the following values:
left, right

***

### price?

> `optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

Defined in: main.ts:30593

pricing details
contains the pricing details of the product or service featured in the result

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22340

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`rank_absolute`](IBaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22337

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`rank_group`](IBaseSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

Defined in: main.ts:30596

the item’s rating 
the popularity rate based on reviews and displayed in SERP

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

Defined in: main.ts:30600

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:30563

title of the result in SERP

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22333

type of element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`type`](IBaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:30577

relevant URL in SERP

***

### website\_name?

> `optional` **website\_name**: `string`

Defined in: main.ts:30567

name of the website in SERP

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:30561

the XPath of the element
