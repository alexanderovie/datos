[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpGoogleDatasetAdvancedItem

# Interface: ISerpGoogleDatasetAdvancedItem

Defined in: main.ts:60888

## Indexable

\[`key`: `string`\]: `any`

## Properties

### area\_covered?

> `optional` **area\_covered**: `string`[]

Defined in: main.ts:60943

the list of areas covered in the dataset
for example: Africa, Global

***

### authors?

> `optional` **authors**: [`AuthorsElement`](../classes/AuthorsElement.md)[]

Defined in: main.ts:60933

the list of authors of the dataset

***

### dataset\_description?

> `optional` **dataset\_description**: [`DatasetDescription`](../classes/DatasetDescription.md)

Defined in: main.ts:60947

description of the dataset

***

### dataset\_id?

> `optional` **dataset\_id**: `string`

Defined in: main.ts:60905

ID of the dataset

***

### dataset\_providers?

> `optional` **dataset\_providers**: [`LicensesElement`](../classes/LicensesElement.md)[]

Defined in: main.ts:60929

the list of institutions that provided the dataset

***

### formats?

> `optional` **formats**: [`FormatsElement`](../classes/FormatsElement.md)[]

Defined in: main.ts:60931

the list of file formats of the dataset

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:60910

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

***

### licenses?

> `optional` **licenses**: [`LicensesElement`](../classes/LicensesElement.md)[]

Defined in: main.ts:60935

the list of licenses issued to the dataset

***

### links?

> `optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

Defined in: main.ts:60927

sitelinks
the links shown below some of Google Dataset’s search results
if there are none, equals null

***

### period\_covered?

> `optional` **period\_covered**: [`PeriodCovered`](../classes/PeriodCovered.md)

Defined in: main.ts:60945

period covered in the dataset

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:60901

the alignment of the element in SERP
can take the following values:
left, right

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:60897

absolute rank in SERP
absolute position among all the elements in SERP

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:60894

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

***

### related\_article?

> `optional` **related\_article**: `string`

Defined in: main.ts:60923

link to related article
link to the published article that is related to the dataset

***

### scholarly\_articles\_url?

> `optional` **scholarly\_articles\_url**: `string`

Defined in: main.ts:60916

url of scholarly articles
link to the list of scholarly articles on Google Scholar
example: https://scholar.google.com/scholar?q=%2210.6084%20m9%20figshare%207427933%20v1%22

***

### scholarly\_citations\_count?

> `optional` **scholarly\_citations\_count**: `number`

Defined in: main.ts:60912

count of articles that refer to the dataset

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:60907

title of the element

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:60890

type of element

***

### unique\_identifier?

> `optional` **unique\_identifier**: `string`

Defined in: main.ts:60920

digital identifier of an object
unique digital identifier of the dataset
example: https://doi.org/10.5061/dryad.hmgqnk9m3

***

### updated\_date?

> `optional` **updated\_date**: `string`

Defined in: main.ts:60940

date and time when the result was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-27 02:00:00 +00:00

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:60903

the XPath of the element
