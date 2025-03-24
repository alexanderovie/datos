[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataAppStoreInfoOrganicSerpElementItem

# Interface: IAppDataAppStoreInfoOrganicSerpElementItem

Defined in: main.ts:218507

## Extends

- [`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### advisories?

> `optional` **advisories**: `string`[]

Defined in: main.ts:218529

age rating and age-based content advisories

***

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:218509

ID of the app

***

### categories?

> `optional` **categories**: `string`[]

Defined in: main.ts:218525

all relevant categories/genres of the app

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:218515

description of the app

***

### developer?

> `optional` **developer**: `string`

Defined in: main.ts:218531

name of the app developer

***

### developer\_id?

> `optional` **developer\_id**: `string`

Defined in: main.ts:218533

ID of the app developer

***

### developer\_url?

> `optional` **developer\_url**: `string`

Defined in: main.ts:218535

URL to the developer page on App Store

***

### icon?

> `optional` **icon**: `string`

Defined in: main.ts:218513

URL to the app icon

***

### images?

> `optional` **images**: `string`[]

Defined in: main.ts:218557

app images
contains URLs to the images used on the app page on App Store

***

### is\_free?

> `optional` **is\_free**: `boolean`

Defined in: main.ts:218521

indicates whether the app is free

***

### languages?

> `optional` **languages**: `string`[]

Defined in: main.ts:218527

languages supported in the app

***

### last\_update\_date?

> `optional` **last\_update\_date**: `string`

Defined in: main.ts:218551

date and time when the app was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

***

### main\_category?

> `optional` **main\_category**: `string`

Defined in: main.ts:218523

main category/genre of the app

***

### minimum\_os\_version?

> `optional` **minimum\_os\_version**: `string`

Defined in: main.ts:218539

minimum OS version required to install the app

***

### more\_apps\_by\_developer?

> `optional` **more\_apps\_by\_developer**: [`AppsInfo`](../classes/AppsInfo.md)[]

Defined in: main.ts:218563

similar apps
information about apps built by the same developer

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:24115

the alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`position`](IBaseAppDataSerpElementItem.md#position)

***

### price?

> `optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

Defined in: main.ts:218519

price of the app

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:24111

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`rank_absolute`](IBaseAppDataSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:24108

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`rank_group`](IBaseAppDataSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

Defined in: main.ts:24119

average rating of the app

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`rating`](IBaseAppDataSerpElementItem.md#rating)

***

### released\_date?

> `optional` **released\_date**: `string`

Defined in: main.ts:218546

date and time when the app was released
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:218517

the total number of reviews of the app

***

### similar\_apps?

> `optional` **similar\_apps**: [`AppsInfo`](../classes/AppsInfo.md)[]

Defined in: main.ts:218560

similar apps
displays apps similar to the app in a POST request

***

### size?

> `optional` **size**: `string`

Defined in: main.ts:218541

size of the app

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:24117

title of the app

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`title`](IBaseAppDataSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24105

type of element

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`type`](IBaseAppDataSerpElementItem.md#type)

***

### update\_notes?

> `optional` **update\_notes**: `string`

Defined in: main.ts:218554

update notes
contains the latest update notes from the developer

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:218511

URL to the app page on App Store

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:218537

current version of the app
