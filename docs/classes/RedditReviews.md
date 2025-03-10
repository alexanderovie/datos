[**Documentation**](../README.md)

***

[Documentation](../README.md) / RedditReviews

# Class: RedditReviews

Defined in: main.ts:239605

## Implements

- [`IRedditReviews`](../interfaces/IRedditReviews.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new RedditReviews()

> **new RedditReviews**(`data`?): [`RedditReviews`](RedditReviews.md)

Defined in: main.ts:239620

#### Parameters

##### data?

[`IRedditReviews`](../interfaces/IRedditReviews.md)

#### Returns

[`RedditReviews`](RedditReviews.md)

## Properties

### author\_name?

> `optional` **author\_name**: `string`

Defined in: main.ts:239610

nickname of the author
nicknname of the user who published the post in the subreddit and shared the URL

#### Implementation of

[`IRedditReviews`](../interfaces/IRedditReviews.md).[`author_name`](../interfaces/IRedditReviews.md#author_name)

***

### permalink?

> `optional` **permalink**: `string`

Defined in: main.ts:239614

URL to the subreddit post

#### Implementation of

[`IRedditReviews`](../interfaces/IRedditReviews.md).[`permalink`](../interfaces/IRedditReviews.md#permalink)

***

### subreddit?

> `optional` **subreddit**: `string`

Defined in: main.ts:239607

the name of the subreddit

#### Implementation of

[`IRedditReviews`](../interfaces/IRedditReviews.md).[`subreddit`](../interfaces/IRedditReviews.md#subreddit)

***

### subreddit\_members?

> `optional` **subreddit\_members**: `number`

Defined in: main.ts:239616

number of subreddit members

#### Implementation of

[`IRedditReviews`](../interfaces/IRedditReviews.md).[`subreddit_members`](../interfaces/IRedditReviews.md#subreddit_members)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:239612

title of the subreddit post

#### Implementation of

[`IRedditReviews`](../interfaces/IRedditReviews.md).[`title`](../interfaces/IRedditReviews.md#title)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:239629

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:239650

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`RedditReviews`](RedditReviews.md)

Defined in: main.ts:239643

#### Parameters

##### data

`any`

#### Returns

[`RedditReviews`](RedditReviews.md)
