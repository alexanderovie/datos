[**Documentation**](../README.md)

***

[Documentation](../README.md) / RedditReviews

# Class: RedditReviews

Defined in: main.ts:242544

## Implements

- [`IRedditReviews`](../interfaces/IRedditReviews.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new RedditReviews**(`data?`): `RedditReviews`

Defined in: main.ts:242559

#### Parameters

##### data?

[`IRedditReviews`](../interfaces/IRedditReviews.md)

#### Returns

`RedditReviews`

## Properties

### author\_name?

> `optional` **author\_name**: `string`

Defined in: main.ts:242549

nickname of the author
nicknname of the user who published the post in the subreddit and shared the URL

#### Implementation of

[`IRedditReviews`](../interfaces/IRedditReviews.md).[`author_name`](../interfaces/IRedditReviews.md#author_name)

***

### permalink?

> `optional` **permalink**: `string`

Defined in: main.ts:242553

URL to the subreddit post

#### Implementation of

[`IRedditReviews`](../interfaces/IRedditReviews.md).[`permalink`](../interfaces/IRedditReviews.md#permalink)

***

### subreddit?

> `optional` **subreddit**: `string`

Defined in: main.ts:242546

the name of the subreddit

#### Implementation of

[`IRedditReviews`](../interfaces/IRedditReviews.md).[`subreddit`](../interfaces/IRedditReviews.md#subreddit)

***

### subreddit\_members?

> `optional` **subreddit\_members**: `number`

Defined in: main.ts:242555

number of subreddit members

#### Implementation of

[`IRedditReviews`](../interfaces/IRedditReviews.md).[`subreddit_members`](../interfaces/IRedditReviews.md#subreddit_members)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:242551

title of the subreddit post

#### Implementation of

[`IRedditReviews`](../interfaces/IRedditReviews.md).[`title`](../interfaces/IRedditReviews.md#title)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:242568

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:242589

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `RedditReviews`

Defined in: main.ts:242582

#### Parameters

##### data

`any`

#### Returns

`RedditReviews`
