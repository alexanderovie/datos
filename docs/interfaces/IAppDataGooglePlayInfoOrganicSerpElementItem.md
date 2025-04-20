[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataGooglePlayInfoOrganicSerpElementItem

# Interface: IAppDataGooglePlayInfoOrganicSerpElementItem

Defined in: main.ts:214562

## Extends

- [`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:214564

ID of the app

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:214570

description of the app

***

### developer?

> `optional` **developer**: `string`

Defined in: main.ts:214586

name of the app developer

***

### developer\_address?

> `optional` **developer\_address**: `string`

Defined in: main.ts:214594

physical address of the developer

***

### developer\_email?

> `optional` **developer\_email**: `string`

Defined in: main.ts:214592

email address of the developer

***

### developer\_id?

> `optional` **developer\_id**: `string`

Defined in: main.ts:214588

ID of the app developer

***

### developer\_url?

> `optional` **developer\_url**: `string`

Defined in: main.ts:214590

URL to the developer page on Google Play

***

### developer\_website?

> `optional` **developer\_website**: `string`

Defined in: main.ts:214596

official website of the developer

***

### genres?

> `optional` **genres**: `string`[]

Defined in: main.ts:214630

app genres
contains relevant app categories

***

### icon?

> `optional` **icon**: `string`

Defined in: main.ts:214568

URL to the app icon

***

### images?

> `optional` **images**: `string`[]

Defined in: main.ts:214618

app images
contains URLs to the images published on the app page on Google Play

***

### installs?

> `optional` **installs**: `string`

Defined in: main.ts:214581

number of installs of the app
approximate number of installs as displayed on the app page

***

### installs\_count?

> `optional` **installs\_count**: `number`

Defined in: main.ts:214584

number of installs of the app
the exact number of installs of the app

***

### is\_free?

> `optional` **is\_free**: `boolean`

Defined in: main.ts:214576

indicates whether the app is free

***

### last\_update\_date?

> `optional` **last\_update\_date**: `string`

Defined in: main.ts:214612

date and time when the app was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

***

### main\_category?

> `optional` **main\_category**: `string`

Defined in: main.ts:214578

main category of the app

***

### minimum\_os\_version?

> `optional` **minimum\_os\_version**: `string`

Defined in: main.ts:214600

minimum OS version required to install the app

***

### more\_apps\_by\_developer?

> `optional` **more\_apps\_by\_developer**: [`AppsInfo`](../classes/AppsInfo.md)[]

Defined in: main.ts:214627

similar apps
information about apps built by the same developer

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:24123

the alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`position`](IBaseAppDataSerpElementItem.md#position)

***

### price?

> `optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

Defined in: main.ts:214574

price of the app

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:24119

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`rank_absolute`](IBaseAppDataSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:24116

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`rank_group`](IBaseAppDataSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

Defined in: main.ts:24127

average rating of the app

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`rating`](IBaseAppDataSerpElementItem.md#rating)

***

### released\_date?

> `optional` **released\_date**: `string`

Defined in: main.ts:214607

date and time when the app was released
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:214572

the total number of reviews the app has

***

### similar\_apps?

> `optional` **similar\_apps**: [`AppsInfo`](../classes/AppsInfo.md)[]

Defined in: main.ts:214624

similar apps
displays apps similar to the app in a POST request

***

### size?

> `optional` **size**: `string`

Defined in: main.ts:214602

size of the app

***

### tags?

> `optional` **tags**: `string`[]

Defined in: main.ts:214633

app tags
contains relevant app tags

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:24125

title of the app

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`title`](IBaseAppDataSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:24113

type of element

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`type`](IBaseAppDataSerpElementItem.md#type)

***

### update\_notes?

> `optional` **update\_notes**: `string`

Defined in: main.ts:214615

update notes
contains the latest update notes from the developer

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:214566

URL to the app page on Google Play

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:214598

current version of the app

***

### videos?

> `optional` **videos**: `string`[]

Defined in: main.ts:214621

app videos
contains URLs to the video published on the app page on Google Play
