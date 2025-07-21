import { RectangleInfo, IRectangleInfo } from "./RectangleInfo";
import { AiModeImagesElement, IAiModeImagesElement } from "./AiModeImagesElement";
import { AdLinkElement, IAdLinkElement } from "./AdLinkElement";
import { PriceInfo, IPriceInfo } from "./PriceInfo";
import { RatingElement, IRatingElement } from "./RatingElement";
import { RatingInfo, IRatingInfo } from "./RatingInfo";
import { LinkElement, ILinkElement } from "./LinkElement";
import { FaqBox, IFaqBox } from "./FaqBox";
import { AboutThisResultElement, IAboutThisResultElement } from "./AboutThisResultElement";
import { RelatedResult, IRelatedResult } from "./RelatedResult";
import { Table, ITable } from "./Table";
import { BaseSerpApiKnowledgeGraphElementItem, IBaseSerpApiKnowledgeGraphElementItem } from "./BaseSerpApiKnowledgeGraphElementItem";
import { TopStoriesElement, ITopStoriesElement } from "./TopStoriesElement";
import { PeopleAlsoAskElement, IPeopleAlsoAskElement } from "./PeopleAlsoAskElement";
import { RelatedImageSearchesElement, IRelatedImageSearchesElement } from "./RelatedImageSearchesElement";
import { TwitterElement, ITwitterElement } from "./TwitterElement";
import { JobsElement, IJobsElement } from "./JobsElement";
import { AppElement, IAppElement } from "./AppElement";
import { SerpApiCarouselElement, ISerpApiCarouselElement } from "./SerpApiCarouselElement";
import { VideoElement, IVideoElement } from "./VideoElement";
import { ShoppingElement, IShoppingElement } from "./ShoppingElement";
import { GoogleFlightsElement, IGoogleFlightsElement } from "./GoogleFlightsElement";
import { MentionCarouselElement, IMentionCarouselElement } from "./MentionCarouselElement";
import { EventsElement, IEventsElement } from "./EventsElement";
import { MultiCarouselElement, IMultiCarouselElement } from "./MultiCarouselElement";
import { RecipesElement, IRecipesElement } from "./RecipesElement";
import { TopSightsElement, ITopSightsElement } from "./TopSightsElement";
import { ScholarlyArticlesElement, IScholarlyArticlesElement } from "./ScholarlyArticlesElement";
import { PopularProductsElement, IPopularProductsElement } from "./PopularProductsElement";
import { PodcastsElement, IPodcastsElement } from "./PodcastsElement";
import { Graph, IGraph } from "./Graph";
import { ShortVideosElement, IShortVideosElement } from "./ShortVideosElement";
import { QuestionsAndAnswersElement, IQuestionsAndAnswersElement } from "./QuestionsAndAnswersElement";
import { HotelsPackElement, IHotelsPackElement } from "./HotelsPackElement";
import { LicensesElement, ILicensesElement } from "./LicensesElement";
import { CommercialUnitsElement, ICommercialUnitsElement } from "./CommercialUnitsElement";
import { LocalServicesElement, ILocalServicesElement } from "./LocalServicesElement";
import { MathSolverElement, IMathSolverElement } from "./MathSolverElement";
import { ProductConsiderationsElement, IProductConsiderationsElement } from "./ProductConsiderationsElement";
import { FoundOnWebElement, IFoundOnWebElement } from "./FoundOnWebElement";
import { RefineProductsElement, IRefineProductsElement } from "./RefineProductsElement";
import { ExploreBrandsElement, IExploreBrandsElement } from "./ExploreBrandsElement";
import { PerspectivesElement, IPerspectivesElement } from "./PerspectivesElement";
import { DiscussionsAndForumsElement, IDiscussionsAndForumsElement } from "./DiscussionsAndForumsElement";
import { CompareSitesElement, ICompareSitesElement } from "./CompareSitesElement";
import { CoursesElement, ICoursesElement } from "./CoursesElement";
import { KnowledgeGraphListElement, IKnowledgeGraphListElement } from "./KnowledgeGraphListElement";
import { KnowledgeGraphImagesElement, IKnowledgeGraphImagesElement } from "./KnowledgeGraphImagesElement";
import { KnowledgeGraphHotelsBookingElement, IKnowledgeGraphHotelsBookingElement } from "./KnowledgeGraphHotelsBookingElement";
import { KnowledgeGraphExpandedElement, IKnowledgeGraphExpandedElement } from "./KnowledgeGraphExpandedElement";
import { KnowledgeGraphShoppingElement, IKnowledgeGraphShoppingElement } from "./KnowledgeGraphShoppingElement";
import { BaseSerpApiKnowledgeGraphAiOverviewElementItem, IBaseSerpApiKnowledgeGraphAiOverviewElementItem } from "./BaseSerpApiKnowledgeGraphAiOverviewElementItem";
import { AiAiOverviewReferenceInfo, IAiAiOverviewReferenceInfo } from "./AiAiOverviewReferenceInfo";
import { BaseSerpApiAiOverviewElementItem, IBaseSerpApiAiOverviewElementItem } from "./BaseSerpApiAiOverviewElementItem";

export interface IBaseSerpApiElementItem   {
        
        /** type of element */
        type?: string
        
        /** the alignment of the element in SERP
can take the following values:
left, right */
        position?: string
        
        /** the XPath of the element */
        xpath?: string
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: RectangleInfo

    [key: string]: any;

    }

export class BaseSerpApiElementItem  implements IBaseSerpApiElementItem {
    
    /** type of element */

    type?: string;
    
    /** the alignment of the element in SERP
can take the following values:
left, right */

    position?: string;
    
    /** the XPath of the element */

    xpath?: string;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: RectangleInfo;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseSerpApiElementItem) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    this.discriminator = "BaseSerpElementItem";

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.type = data["type"];
            this.position = data["position"];
            this.xpath = data["xpath"];
            this.rectangle = data["rectangle"] ? RectangleInfo.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): BaseSerpApiElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "paid") {

            let result = new PaidSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "organic") {

            let result = new OrganicSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "featured_snippet") {

            let result = new FeaturedSnippetSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph") {

            let result = new KnowledgeGraphSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "top_stories") {

            let result = new TopStoriesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "people_also_ask") {

            let result = new PeopleAlsoAskSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "people_also_search") {

            let result = new PeopleAlsoSearchSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "images") {

            let result = new ImagesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "twitter") {

            let result = new TwitterSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_reviews") {

            let result = new GoogleReviewsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "jobs") {

            let result = new JobsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "map") {

            let result = new MapSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "app") {

            let result = new AppSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "local_pack") {

            let result = new LocalPackSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "carousel") {

            let result = new CarouselSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "video") {

            let result = new VideoSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "answer_box") {

            let result = new AnswerBoxSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "shopping") {

            let result = new ShoppingSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_flights") {

            let result = new GoogleFlightsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "mention_carousel") {

            let result = new MentionCarouselSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "events") {

            let result = new EventsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "related_searches") {

            let result = new RelatedSearchesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "multi_carousel") {

            let result = new MultiCarouselSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "recipes") {

            let result = new RecipesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "top_sights") {

            let result = new TopSightsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "scholarly_articles") {

            let result = new ScholarlyArticlesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "popular_products") {

            let result = new PopularProductsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "podcasts") {

            let result = new PodcastsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "stocks_box") {

            let result = new StocksBoxSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "find_results_on") {

            let result = new FindResultsOnSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "questions_and_answers") {

            let result = new QuestionsAndAnswersSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "hotels_pack") {

            let result = new HotelsPackSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "visual_stories") {

            let result = new VisualStoriesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "commercial_units") {

            let result = new CommercialUnitsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "local_services") {

            let result = new LocalServicesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_hotels") {

            let result = new GoogleHotelsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "math_solver") {

            let result = new MathSolverSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "currency_box") {

            let result = new CurrencyBoxSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_posts") {

            let result = new GooglePostsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "product_considerations") {

            let result = new ProductConsiderationsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "found_on_web") {

            let result = new FoundOnWebSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "short_videos") {

            let result = new ShortVideosSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "refine_products") {

            let result = new RefineProductsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "explore_brands") {

            let result = new ExploreBrandsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "perspectives") {

            let result = new PerspectivesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "discussions_and_forums") {

            let result = new DiscussionsAndForumsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "compare_sites") {

            let result = new CompareSitesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "courses") {

            let result = new CoursesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_carousel_item") {

            let result = new KnowledgeGraphCarouselItemSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_description_item") {

            let result = new KnowledgeGraphDescriptionItemSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_images_item") {

            let result = new KnowledgeGraphImagesItemSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_list_item") {

            let result = new KnowledgeGraphListItemSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_row_item") {

            let result = new KnowledgeGraphRowItemSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_hotels_booking_item") {

            let result = new KnowledgeGraphHotelsBookingItemSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_expanded_item") {

            let result = new KnowledgeGraphExpandedItemSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_part_item") {

            let result = new KnowledgeGraphPartItemSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_shopping_item") {

            let result = new KnowledgeGraphShoppingItemSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_ai_overview_item") {

            let result = new KnowledgeGraphAiOverviewItemSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "ai_overview") {

            let result = new AiOverviewSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "third_party_reviews") {

            let result = new ThirdPartyReviewsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "dictionary") {

            let result = new DictionarySerpElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseSerpApiElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["position"] = this.position;
        data["xpath"] = this.xpath;
        data["rectangle"] = this.rectangle ? RectangleInfo.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface IPaidSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements found in SERP
note values are returned in the ascending order, with values corresponding to advanced SERP features omitted from the results;
to get all items (including SERP features and rich snippets) with their positions, please refer to the Google Organiс Advanced SERP endpoint */
        rank_absolute?: number
        
        /** domain in SERP */
        domain?: string
        
        /** title of the results element in SERP */
        title?: string
        
        /** description of the results element in SERP */
        description?: string
        
        /** relevant URL in SERP */
        url?: string
        
        /** breadcrumb in SERP */
        breadcrumb?: string
        
        /** name of the website in SERP */
        website_name?: string
        
        /** indicates whether the element contains an image */
        is_image?: boolean
        
        /** indicates whether the element contains a video */
        is_video?: boolean
        
        /** images of the element
if there are none, equals null */
        images?: AiModeImagesElement[]
        
        /** words highlighted in bold within the results description */
        highlighted?: string[]
        
        /** additional information about the result */
        extra?: { [key: string]: string; }
        
        /** extended description
if there is none, equals null */
        description_rows?: string[]
        
        /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */
        links?: AdLinkElement[]
        
        /** pricing details
contains the pricing details of the product or service featured in the result */
        price?: PriceInfo
        
        /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */
        rating?: RatingElement

    [key: string]: any;

    }

export class PaidSerpElementItem  extends BaseSerpApiElementItem   implements IPaidSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements found in SERP
note values are returned in the ascending order, with values corresponding to advanced SERP features omitted from the results;
to get all items (including SERP features and rich snippets) with their positions, please refer to the Google Organiс Advanced SERP endpoint */

    rank_absolute?: number;
    
    /** domain in SERP */

    domain?: string;
    
    /** title of the results element in SERP */

    title?: string;
    
    /** description of the results element in SERP */

    description?: string;
    
    /** relevant URL in SERP */

    url?: string;
    
    /** breadcrumb in SERP */

    breadcrumb?: string;
    
    /** name of the website in SERP */

    website_name?: string;
    
    /** indicates whether the element contains an image */

    is_image?: boolean;
    
    /** indicates whether the element contains a video */

    is_video?: boolean;
    
    /** images of the element
if there are none, equals null */

    images?: AiModeImagesElement[];
    
    /** words highlighted in bold within the results description */

    highlighted?: string[];
    
    /** additional information about the result */

    extra?: { [key: string]: string; };
    
    /** extended description
if there is none, equals null */

    description_rows?: string[];
    
    /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */

    links?: AdLinkElement[];
    
    /** pricing details
contains the pricing details of the product or service featured in the result */

    price?: PriceInfo;
    
    /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */

    rating?: RatingElement;

    [key: string]: any;


    constructor(data?: IPaidSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.domain = data["domain"];
            this.title = data["title"];
            this.description = data["description"];
            this.url = data["url"];
            this.breadcrumb = data["breadcrumb"];
            this.website_name = data["website_name"];
            this.is_image = data["is_image"];
            this.is_video = data["is_video"];
            if (Array.isArray(data["images"])) {
                this.images = [];
                for (let item of data["images"]) {
                    this.images.push(AiModeImagesElement.fromJS(item));
                }
            }
            this.highlighted = data["highlighted"];
            this.extra = data["extra"];
            this.description_rows = data["description_rows"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(AdLinkElement.fromJS(item));
                }
            }
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
            this.rating = data["rating"] ? RatingElement.fromJS(data["rating"]) : <any>undefined;
        }
    }

    static fromJS(data: any): PaidSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new PaidSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["domain"] = this.domain;
        data["title"] = this.title;
        data["description"] = this.description;
        data["url"] = this.url;
        data["breadcrumb"] = this.breadcrumb;
        data["website_name"] = this.website_name;
        data["is_image"] = this.is_image;
        data["is_video"] = this.is_video;
        data["images"] = null;
        if (Array.isArray(this.images)) {
            data["images"] = [];
            for (let item of this.images) {
                if (item && typeof item.toJSON === "function") {
                    data["images"].push(item?.toJSON());
                }
            }
        }
        data["highlighted"] = this.highlighted;
        data["extra"] = this.extra;
        data["description_rows"] = this.description_rows;
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["rating"] = this.rating ? RatingElement.fromJS(this.rating)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface IOrganicSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements found in SERP
note values are returned in the ascending order, with values corresponding to advanced SERP features omitted from the results;
to get all items (including SERP features and rich snippets) with their positions, please refer to the Google Organiс Advanced SERP endpoint */
        rank_absolute?: number
        
        /** domain in SERP */
        domain?: string
        
        /** title of the results element in SERP */
        title?: string
        
        /** description of the results element in SERP */
        description?: string
        
        /** relevant URL in SERP */
        url?: string
        
        /** breadcrumb in SERP */
        breadcrumb?: string
        
        /** cached version of the page */
        cache_url?: string
        
        /** URL to a similar search
URL to a new search for the same keyword(s) on related sites */
        related_search_url?: string
        
        /** name of the website in SERP */
        website_name?: string
        
        /** indicates whether the element contains an image */
        is_image?: boolean
        
        /** indicates whether the element contains a video */
        is_video?: boolean
        
        /** indicates whether the element is a featured_snippet */
        is_featured_snippet?: boolean
        
        /** indicates whether the element is marked as malicious */
        is_malicious?: boolean
        
        /** indicates whether the element is marked as Google web story */
        is_web_story?: boolean
        
        /** includes additional information appended before the result description in SERP */
        pre_snippet?: string
        
        /** includes additional information appended after the result description in SERP */
        extended_snippet?: string
        
        /** images of the element
if there are none, equals null */
        images?: AiModeImagesElement[]
        
        /** Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version */
        amp_version?: boolean
        
        /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */
        rating?: RatingInfo
        
        /** pricing details
contains the pricing details of the product or service featured in the result */
        price?: PriceInfo
        
        /** words highlighted in bold within the results description */
        highlighted?: string[]
        
        /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */
        links?: LinkElement[]
        
        /** frequently asked questions
questions and answers extension shown below some of Google’s search results
if there are none, equals null */
        faq?: FaqBox
        
        /** extension of the organic element
extension of the organic result containing related search queries
Note: extension appears in SERP upon clicking on the result and then bouncing back to search results */
        extended_people_also_search?: string[]
        
        /** contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results */
        about_this_result?: AboutThisResultElement
        
        /** related result from the same domain
related result from the same domain appears as a part of the main result snippet;
you can derive the related_result snippets as 'type': 'organic' results by setting the group_organic_results parameter to false in the POST request */
        related_result?: RelatedResult[]
        
        /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string

    [key: string]: any;

    }

export class OrganicSerpElementItem  extends BaseSerpApiElementItem   implements IOrganicSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements found in SERP
note values are returned in the ascending order, with values corresponding to advanced SERP features omitted from the results;
to get all items (including SERP features and rich snippets) with their positions, please refer to the Google Organiс Advanced SERP endpoint */

    rank_absolute?: number;
    
    /** domain in SERP */

    domain?: string;
    
    /** title of the results element in SERP */

    title?: string;
    
    /** description of the results element in SERP */

    description?: string;
    
    /** relevant URL in SERP */

    url?: string;
    
    /** breadcrumb in SERP */

    breadcrumb?: string;
    
    /** cached version of the page */

    cache_url?: string;
    
    /** URL to a similar search
URL to a new search for the same keyword(s) on related sites */

    related_search_url?: string;
    
    /** name of the website in SERP */

    website_name?: string;
    
    /** indicates whether the element contains an image */

    is_image?: boolean;
    
    /** indicates whether the element contains a video */

    is_video?: boolean;
    
    /** indicates whether the element is a featured_snippet */

    is_featured_snippet?: boolean;
    
    /** indicates whether the element is marked as malicious */

    is_malicious?: boolean;
    
    /** indicates whether the element is marked as Google web story */

    is_web_story?: boolean;
    
    /** includes additional information appended before the result description in SERP */

    pre_snippet?: string;
    
    /** includes additional information appended after the result description in SERP */

    extended_snippet?: string;
    
    /** images of the element
if there are none, equals null */

    images?: AiModeImagesElement[];
    
    /** Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version */

    amp_version?: boolean;
    
    /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */

    rating?: RatingInfo;
    
    /** pricing details
contains the pricing details of the product or service featured in the result */

    price?: PriceInfo;
    
    /** words highlighted in bold within the results description */

    highlighted?: string[];
    
    /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */

    links?: LinkElement[];
    
    /** frequently asked questions
questions and answers extension shown below some of Google’s search results
if there are none, equals null */

    faq?: FaqBox;
    
    /** extension of the organic element
extension of the organic result containing related search queries
Note: extension appears in SERP upon clicking on the result and then bouncing back to search results */

    extended_people_also_search?: string[];
    
    /** contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results */

    about_this_result?: AboutThisResultElement;
    
    /** related result from the same domain
related result from the same domain appears as a part of the main result snippet;
you can derive the related_result snippets as 'type': 'organic' results by setting the group_organic_results parameter to false in the POST request */

    related_result?: RelatedResult[];
    
    /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string;

    [key: string]: any;


    constructor(data?: IOrganicSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.domain = data["domain"];
            this.title = data["title"];
            this.description = data["description"];
            this.url = data["url"];
            this.breadcrumb = data["breadcrumb"];
            this.cache_url = data["cache_url"];
            this.related_search_url = data["related_search_url"];
            this.website_name = data["website_name"];
            this.is_image = data["is_image"];
            this.is_video = data["is_video"];
            this.is_featured_snippet = data["is_featured_snippet"];
            this.is_malicious = data["is_malicious"];
            this.is_web_story = data["is_web_story"];
            this.pre_snippet = data["pre_snippet"];
            this.extended_snippet = data["extended_snippet"];
            if (Array.isArray(data["images"])) {
                this.images = [];
                for (let item of data["images"]) {
                    this.images.push(AiModeImagesElement.fromJS(item));
                }
            }
            this.amp_version = data["amp_version"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
            this.highlighted = data["highlighted"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
            this.faq = data["faq"] ? FaqBox.fromJS(data["faq"]) : <any>undefined;
            this.extended_people_also_search = data["extended_people_also_search"];
            this.about_this_result = data["about_this_result"] ? AboutThisResultElement.fromJS(data["about_this_result"]) : <any>undefined;
            if (Array.isArray(data["related_result"])) {
                this.related_result = [];
                for (let item of data["related_result"]) {
                    this.related_result.push(RelatedResult.fromJS(item));
                }
            }
            this.timestamp = data["timestamp"];
        }
    }

    static fromJS(data: any): OrganicSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new OrganicSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["domain"] = this.domain;
        data["title"] = this.title;
        data["description"] = this.description;
        data["url"] = this.url;
        data["breadcrumb"] = this.breadcrumb;
        data["cache_url"] = this.cache_url;
        data["related_search_url"] = this.related_search_url;
        data["website_name"] = this.website_name;
        data["is_image"] = this.is_image;
        data["is_video"] = this.is_video;
        data["is_featured_snippet"] = this.is_featured_snippet;
        data["is_malicious"] = this.is_malicious;
        data["is_web_story"] = this.is_web_story;
        data["pre_snippet"] = this.pre_snippet;
        data["extended_snippet"] = this.extended_snippet;
        data["images"] = null;
        if (Array.isArray(this.images)) {
            data["images"] = [];
            for (let item of this.images) {
                if (item && typeof item.toJSON === "function") {
                    data["images"].push(item?.toJSON());
                }
            }
        }
        data["amp_version"] = this.amp_version;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["highlighted"] = this.highlighted;
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        data["faq"] = this.faq ? FaqBox.fromJS(this.faq)?.toJSON() : <any>undefined;
        data["extended_people_also_search"] = this.extended_people_also_search;
        data["about_this_result"] = this.about_this_result ? AboutThisResultElement.fromJS(this.about_this_result)?.toJSON() : <any>undefined;
        data["related_result"] = null;
        if (Array.isArray(this.related_result)) {
            data["related_result"] = [];
            for (let item of this.related_result) {
                if (item && typeof item.toJSON === "function") {
                    data["related_result"].push(item?.toJSON());
                }
            }
        }
        data["timestamp"] = this.timestamp;
        return data;
    }
}

 
export interface IFeaturedSnippetSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements found in SERP
note values are returned in the ascending order, with values corresponding to advanced SERP features omitted from the results;
to get all items (including SERP features and rich snippets) with their positions, please refer to the Google Organiс Advanced SERP endpoint */
        rank_absolute?: number
        
        /** domain of the ad element in SERP */
        domain?: string
        
        /** title of the ad element in SERP */
        title?: string
        
        /** description of the ad element in SERP */
        description?: string
        
        /** relevant URL of the ad element in SERP */
        url?: string
        
        /** breadcrumb of the ad element in SERP */
        breadcrumb?: string
        
        /** title */
        featured_title?: string
        
        /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string
        
        /** images of the element */
        images?: AiModeImagesElement[]
        
        /** results table
if there are none, equals null */
        table?: Table

    [key: string]: any;

    }

export class FeaturedSnippetSerpElementItem  extends BaseSerpApiElementItem   implements IFeaturedSnippetSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements found in SERP
note values are returned in the ascending order, with values corresponding to advanced SERP features omitted from the results;
to get all items (including SERP features and rich snippets) with their positions, please refer to the Google Organiс Advanced SERP endpoint */

    rank_absolute?: number;
    
    /** domain of the ad element in SERP */

    domain?: string;
    
    /** title of the ad element in SERP */

    title?: string;
    
    /** description of the ad element in SERP */

    description?: string;
    
    /** relevant URL of the ad element in SERP */

    url?: string;
    
    /** breadcrumb of the ad element in SERP */

    breadcrumb?: string;
    
    /** title */

    featured_title?: string;
    
    /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string;
    
    /** images of the element */

    images?: AiModeImagesElement[];
    
    /** results table
if there are none, equals null */

    table?: Table;

    [key: string]: any;


    constructor(data?: IFeaturedSnippetSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.domain = data["domain"];
            this.title = data["title"];
            this.description = data["description"];
            this.url = data["url"];
            this.breadcrumb = data["breadcrumb"];
            this.featured_title = data["featured_title"];
            this.timestamp = data["timestamp"];
            if (Array.isArray(data["images"])) {
                this.images = [];
                for (let item of data["images"]) {
                    this.images.push(AiModeImagesElement.fromJS(item));
                }
            }
            this.table = data["table"] ? Table.fromJS(data["table"]) : <any>undefined;
        }
    }

    static fromJS(data: any): FeaturedSnippetSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new FeaturedSnippetSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["domain"] = this.domain;
        data["title"] = this.title;
        data["description"] = this.description;
        data["url"] = this.url;
        data["breadcrumb"] = this.breadcrumb;
        data["featured_title"] = this.featured_title;
        data["timestamp"] = this.timestamp;
        data["images"] = null;
        if (Array.isArray(this.images)) {
            data["images"] = [];
            for (let item of this.images) {
                if (item && typeof item.toJSON === "function") {
                    data["images"].push(item?.toJSON());
                }
            }
        }
        data["table"] = this.table ? Table.fromJS(this.table)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface IKnowledgeGraphSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number
        
        /** title of the result in SERP */
        title?: string
        
        /** subtitle of the item */
        subtitle?: string
        
        /** description of the results element in SERP */
        description?: string
        
        /** card id */
        card_id?: string
        
        /** relevant URL in SERP */
        url?: string
        
        /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */
        image_url?: string
        
        /** URL of the logo from knowledge graph */
        logo_url?: string
        
        /** google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews */
        cid?: string
        
        /** contains results featured in the ‘hotels_pack’ element of SERP */
        items?: BaseSerpApiKnowledgeGraphElementItem[]

    [key: string]: any;

    }

export class KnowledgeGraphSerpElementItem  extends BaseSerpApiElementItem   implements IKnowledgeGraphSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number;
    
    /** title of the result in SERP */

    title?: string;
    
    /** subtitle of the item */

    subtitle?: string;
    
    /** description of the results element in SERP */

    description?: string;
    
    /** card id */

    card_id?: string;
    
    /** relevant URL in SERP */

    url?: string;
    
    /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */

    image_url?: string;
    
    /** URL of the logo from knowledge graph */

    logo_url?: string;
    
    /** google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews */

    cid?: string;
    
    /** contains results featured in the ‘hotels_pack’ element of SERP */

    items?: BaseSerpApiKnowledgeGraphElementItem[];

    [key: string]: any;


    constructor(data?: IKnowledgeGraphSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.subtitle = data["subtitle"];
            this.description = data["description"];
            this.card_id = data["card_id"];
            this.url = data["url"];
            this.image_url = data["image_url"];
            this.logo_url = data["logo_url"];
            this.cid = data["cid"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseSerpApiKnowledgeGraphElementItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KnowledgeGraphSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["subtitle"] = this.subtitle;
        data["description"] = this.description;
        data["card_id"] = this.card_id;
        data["url"] = this.url;
        data["image_url"] = this.image_url;
        data["logo_url"] = this.logo_url;
        data["cid"] = this.cid;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ITopStoriesSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** contains arrays of specific images */
        items?: TopStoriesElement[]

    [key: string]: any;

    }

export class TopStoriesSerpElementItem  extends BaseSerpApiElementItem   implements ITopStoriesSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** contains arrays of specific images */

    items?: TopStoriesElement[];

    [key: string]: any;


    constructor(data?: ITopStoriesSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(TopStoriesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): TopStoriesSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new TopStoriesSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IPeopleAlsoAskSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** contains arrays of specific images */
        items?: PeopleAlsoAskElement[]

    [key: string]: any;

    }

export class PeopleAlsoAskSerpElementItem  extends BaseSerpApiElementItem   implements IPeopleAlsoAskSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** contains arrays of specific images */

    items?: PeopleAlsoAskElement[];

    [key: string]: any;


    constructor(data?: IPeopleAlsoAskSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(PeopleAlsoAskElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): PeopleAlsoAskSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new PeopleAlsoAskSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IPeopleAlsoSearchSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** contains arrays of specific images */
        items?: string[]

    [key: string]: any;

    }

export class PeopleAlsoSearchSerpElementItem  extends BaseSerpApiElementItem   implements IPeopleAlsoSearchSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** contains arrays of specific images */

    items?: string[];

    [key: string]: any;


    constructor(data?: IPeopleAlsoSearchSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.items = data["items"];
        }
    }

    static fromJS(data: any): PeopleAlsoSearchSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new PeopleAlsoSearchSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["items"] = this.items;
        return data;
    }
}

 
export interface IImagesSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** URL */
        url?: string
        
        /** contains arrays of specific images */
        items?: AiModeImagesElement[]
        
        /** contains keywords and images related to the specified search term
if there are none, equals null */
        related_image_searches?: RelatedImageSearchesElement[]

    [key: string]: any;

    }

export class ImagesSerpElementItem  extends BaseSerpApiElementItem   implements IImagesSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** URL */

    url?: string;
    
    /** contains arrays of specific images */

    items?: AiModeImagesElement[];
    
    /** contains keywords and images related to the specified search term
if there are none, equals null */

    related_image_searches?: RelatedImageSearchesElement[];

    [key: string]: any;


    constructor(data?: IImagesSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.url = data["url"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(AiModeImagesElement.fromJS(item));
                }
            }
            if (Array.isArray(data["related_image_searches"])) {
                this.related_image_searches = [];
                for (let item of data["related_image_searches"]) {
                    this.related_image_searches.push(RelatedImageSearchesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ImagesSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new ImagesSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["url"] = this.url;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        data["related_image_searches"] = null;
        if (Array.isArray(this.related_image_searches)) {
            data["related_image_searches"] = [];
            for (let item of this.related_image_searches) {
                if (item && typeof item.toJSON === "function") {
                    data["related_image_searches"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ITwitterSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** URL */
        url?: string
        
        /** contains arrays of specific images */
        items?: TwitterElement[]

    [key: string]: any;

    }

export class TwitterSerpElementItem  extends BaseSerpApiElementItem   implements ITwitterSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** URL */

    url?: string;
    
    /** contains arrays of specific images */

    items?: TwitterElement[];

    [key: string]: any;


    constructor(data?: ITwitterSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.url = data["url"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(TwitterElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): TwitterSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new TwitterSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["url"] = this.url;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IGoogleReviewsSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** the number of reviews */
        reviews_count?: number
        
        /** the element’s rating
the popularity rate based on reviews and displayed in SERP */
        rating?: RatingElement
        
        /** the identifier of a place */
        place_id?: string
        
        /** the additional feature of the review */
        feature?: string
        
        /** google-defined client id */
        cid?: string

    [key: string]: any;

    }

export class GoogleReviewsSerpElementItem  extends BaseSerpApiElementItem   implements IGoogleReviewsSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** the number of reviews */

    reviews_count?: number;
    
    /** the element’s rating
the popularity rate based on reviews and displayed in SERP */

    rating?: RatingElement;
    
    /** the identifier of a place */

    place_id?: string;
    
    /** the additional feature of the review */

    feature?: string;
    
    /** google-defined client id */

    cid?: string;

    [key: string]: any;


    constructor(data?: IGoogleReviewsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.reviews_count = data["reviews_count"];
            this.rating = data["rating"] ? RatingElement.fromJS(data["rating"]) : <any>undefined;
            this.place_id = data["place_id"];
            this.feature = data["feature"];
            this.cid = data["cid"];
        }
    }

    static fromJS(data: any): GoogleReviewsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleReviewsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["reviews_count"] = this.reviews_count;
        data["rating"] = this.rating ? RatingElement.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["place_id"] = this.place_id;
        data["feature"] = this.feature;
        data["cid"] = this.cid;
        return data;
    }
}

 
export interface IJobsSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** URL */
        url?: string
        
        /** contains arrays of specific images */
        items?: JobsElement[]

    [key: string]: any;

    }

export class JobsSerpElementItem  extends BaseSerpApiElementItem   implements IJobsSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** URL */

    url?: string;
    
    /** contains arrays of specific images */

    items?: JobsElement[];

    [key: string]: any;


    constructor(data?: IJobsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.url = data["url"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(JobsElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): JobsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new JobsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["url"] = this.url;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IMapSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** URL */
        url?: string

    [key: string]: any;

    }

export class MapSerpElementItem  extends BaseSerpApiElementItem   implements IMapSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** URL */

    url?: string;

    [key: string]: any;


    constructor(data?: IMapSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.url = data["url"];
        }
    }

    static fromJS(data: any): MapSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new MapSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["url"] = this.url;
        return data;
    }
}

 
export interface IAppSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** contains arrays of specific images */
        items?: AppElement[]

    [key: string]: any;

    }

export class AppSerpElementItem  extends BaseSerpApiElementItem   implements IAppSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** contains arrays of specific images */

    items?: AppElement[];

    [key: string]: any;


    constructor(data?: IAppSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(AppElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AppSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new AppSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ILocalPackSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** description of the results element in SERP */
        description?: string
        
        /** domain in the URL */
        domain?: string
        
        /** phone number */
        phone?: string
        
        /** URL */
        url?: string
        
        /** indicates whether the element is an ad */
        is_paid?: boolean
        
        /** the element’s rating
the popularity rate based on reviews and displayed in SERP */
        rating?: RatingElement
        
        /** google-defined client id */
        cid?: string

    [key: string]: any;

    }

export class LocalPackSerpElementItem  extends BaseSerpApiElementItem   implements ILocalPackSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** description of the results element in SERP */

    description?: string;
    
    /** domain in the URL */

    domain?: string;
    
    /** phone number */

    phone?: string;
    
    /** URL */

    url?: string;
    
    /** indicates whether the element is an ad */

    is_paid?: boolean;
    
    /** the element’s rating
the popularity rate based on reviews and displayed in SERP */

    rating?: RatingElement;
    
    /** google-defined client id */

    cid?: string;

    [key: string]: any;


    constructor(data?: ILocalPackSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.description = data["description"];
            this.domain = data["domain"];
            this.phone = data["phone"];
            this.url = data["url"];
            this.is_paid = data["is_paid"];
            this.rating = data["rating"] ? RatingElement.fromJS(data["rating"]) : <any>undefined;
            this.cid = data["cid"];
        }
    }

    static fromJS(data: any): LocalPackSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new LocalPackSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["description"] = this.description;
        data["domain"] = this.domain;
        data["phone"] = this.phone;
        data["url"] = this.url;
        data["is_paid"] = this.is_paid;
        data["rating"] = this.rating ? RatingElement.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["cid"] = this.cid;
        return data;
    }
}

 
export interface ICarouselSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** contains arrays of specific images */
        items?: SerpApiCarouselElement[]

    [key: string]: any;

    }

export class CarouselSerpElementItem  extends BaseSerpApiElementItem   implements ICarouselSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** contains arrays of specific images */

    items?: SerpApiCarouselElement[];

    [key: string]: any;


    constructor(data?: ICarouselSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(SerpApiCarouselElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): CarouselSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new CarouselSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IVideoSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** contains arrays of specific images */
        items?: VideoElement[]

    [key: string]: any;

    }

export class VideoSerpElementItem  extends BaseSerpApiElementItem   implements IVideoSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** contains arrays of specific images */

    items?: VideoElement[];

    [key: string]: any;


    constructor(data?: IVideoSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(VideoElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): VideoSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new VideoSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IAnswerBoxSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** text
if there is none, equals null */
        text?: string[]
        
        /** link of the element */
        links?: LinkElement[]

    [key: string]: any;

    }

export class AnswerBoxSerpElementItem  extends BaseSerpApiElementItem   implements IAnswerBoxSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** text
if there is none, equals null */

    text?: string[];
    
    /** link of the element */

    links?: LinkElement[];

    [key: string]: any;


    constructor(data?: IAnswerBoxSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.text = data["text"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AnswerBoxSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new AnswerBoxSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["text"] = this.text;
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IShoppingSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** contains arrays of specific images */
        items?: ShoppingElement[]

    [key: string]: any;

    }

export class ShoppingSerpElementItem  extends BaseSerpApiElementItem   implements IShoppingSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** contains arrays of specific images */

    items?: ShoppingElement[];

    [key: string]: any;


    constructor(data?: IShoppingSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(ShoppingElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ShoppingSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new ShoppingSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IGoogleFlightsSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** URL */
        url?: string
        
        /** contains arrays of specific images */
        items?: GoogleFlightsElement[]

    [key: string]: any;

    }

export class GoogleFlightsSerpElementItem  extends BaseSerpApiElementItem   implements IGoogleFlightsSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** URL */

    url?: string;
    
    /** contains arrays of specific images */

    items?: GoogleFlightsElement[];

    [key: string]: any;


    constructor(data?: IGoogleFlightsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.url = data["url"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(GoogleFlightsElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): GoogleFlightsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleFlightsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["url"] = this.url;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IMentionCarouselSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** contains arrays of specific images */
        items?: MentionCarouselElement[]

    [key: string]: any;

    }

export class MentionCarouselSerpElementItem  extends BaseSerpApiElementItem   implements IMentionCarouselSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** contains arrays of specific images */

    items?: MentionCarouselElement[];

    [key: string]: any;


    constructor(data?: IMentionCarouselSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(MentionCarouselElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MentionCarouselSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new MentionCarouselSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IEventsSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** URL */
        url?: string
        
        /** contains arrays of specific images */
        items?: EventsElement[]

    [key: string]: any;

    }

export class EventsSerpElementItem  extends BaseSerpApiElementItem   implements IEventsSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** URL */

    url?: string;
    
    /** contains arrays of specific images */

    items?: EventsElement[];

    [key: string]: any;


    constructor(data?: IEventsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.url = data["url"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(EventsElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): EventsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new EventsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["url"] = this.url;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IRelatedSearchesSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** contains arrays of specific images */
        items?: string[]

    [key: string]: any;

    }

export class RelatedSearchesSerpElementItem  extends BaseSerpApiElementItem   implements IRelatedSearchesSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** contains arrays of specific images */

    items?: string[];

    [key: string]: any;


    constructor(data?: IRelatedSearchesSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.items = data["items"];
        }
    }

    static fromJS(data: any): RelatedSearchesSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new RelatedSearchesSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["items"] = this.items;
        return data;
    }
}

 
export interface IMultiCarouselSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** contains arrays of specific images */
        items?: MultiCarouselElement[]

    [key: string]: any;

    }

export class MultiCarouselSerpElementItem  extends BaseSerpApiElementItem   implements IMultiCarouselSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** contains arrays of specific images */

    items?: MultiCarouselElement[];

    [key: string]: any;


    constructor(data?: IMultiCarouselSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(MultiCarouselElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MultiCarouselSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new MultiCarouselSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IRecipesSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** contains arrays of specific images */
        items?: RecipesElement[]

    [key: string]: any;

    }

export class RecipesSerpElementItem  extends BaseSerpApiElementItem   implements IRecipesSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** contains arrays of specific images */

    items?: RecipesElement[];

    [key: string]: any;


    constructor(data?: IRecipesSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(RecipesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): RecipesSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new RecipesSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ITopSightsSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** contains arrays of specific images */
        items?: TopSightsElement[]

    [key: string]: any;

    }

export class TopSightsSerpElementItem  extends BaseSerpApiElementItem   implements ITopSightsSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** contains arrays of specific images */

    items?: TopSightsElement[];

    [key: string]: any;


    constructor(data?: ITopSightsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(TopSightsElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): TopSightsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new TopSightsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IScholarlyArticlesSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** URL */
        url?: string
        
        /** contains arrays of specific images */
        items?: ScholarlyArticlesElement[]

    [key: string]: any;

    }

export class ScholarlyArticlesSerpElementItem  extends BaseSerpApiElementItem   implements IScholarlyArticlesSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** URL */

    url?: string;
    
    /** contains arrays of specific images */

    items?: ScholarlyArticlesElement[];

    [key: string]: any;


    constructor(data?: IScholarlyArticlesSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.url = data["url"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(ScholarlyArticlesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ScholarlyArticlesSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new ScholarlyArticlesSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["url"] = this.url;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IPopularProductsSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** contains arrays of specific images */
        items?: PopularProductsElement[]

    [key: string]: any;

    }

export class PopularProductsSerpElementItem  extends BaseSerpApiElementItem   implements IPopularProductsSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** contains arrays of specific images */

    items?: PopularProductsElement[];

    [key: string]: any;


    constructor(data?: IPopularProductsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(PopularProductsElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): PopularProductsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new PopularProductsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IPodcastsSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** contains arrays of specific images */
        items?: PodcastsElement[]

    [key: string]: any;

    }

export class PodcastsSerpElementItem  extends BaseSerpApiElementItem   implements IPodcastsSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** contains arrays of specific images */

    items?: PodcastsElement[];

    [key: string]: any;


    constructor(data?: IPodcastsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(PodcastsElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): PodcastsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new PodcastsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IStocksBoxSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** name of the source of the video */
        source?: string
        
        /** text alongside the link title */
        snippet?: string
        
        /** price indicated in the element */
        price?: PriceInfo
        
        /** URL */
        url?: string
        
        /** domain in the URL */
        domain?: string
        
        /** results table
if there are none, equals null */
        table?: Table
        
        /** contains data provided in the graph of the element */
        graph?: Graph

    [key: string]: any;

    }

export class StocksBoxSerpElementItem  extends BaseSerpApiElementItem   implements IStocksBoxSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** name of the source of the video */

    source?: string;
    
    /** text alongside the link title */

    snippet?: string;
    
    /** price indicated in the element */

    price?: PriceInfo;
    
    /** URL */

    url?: string;
    
    /** domain in the URL */

    domain?: string;
    
    /** results table
if there are none, equals null */

    table?: Table;
    
    /** contains data provided in the graph of the element */

    graph?: Graph;

    [key: string]: any;


    constructor(data?: IStocksBoxSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.source = data["source"];
            this.snippet = data["snippet"];
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
            this.url = data["url"];
            this.domain = data["domain"];
            this.table = data["table"] ? Table.fromJS(data["table"]) : <any>undefined;
            this.graph = data["graph"] ? Graph.fromJS(data["graph"]) : <any>undefined;
        }
    }

    static fromJS(data: any): StocksBoxSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new StocksBoxSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["source"] = this.source;
        data["snippet"] = this.snippet;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["table"] = this.table ? Table.fromJS(this.table)?.toJSON() : <any>undefined;
        data["graph"] = this.graph ? Graph.fromJS(this.graph)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface IFindResultsOnSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** contains arrays of specific images */
        items?: ShortVideosElement[]

    [key: string]: any;

    }

export class FindResultsOnSerpElementItem  extends BaseSerpApiElementItem   implements IFindResultsOnSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** contains arrays of specific images */

    items?: ShortVideosElement[];

    [key: string]: any;


    constructor(data?: IFindResultsOnSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(ShortVideosElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): FindResultsOnSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new FindResultsOnSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IQuestionsAndAnswersSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** contains arrays of specific images */
        items?: QuestionsAndAnswersElement[]

    [key: string]: any;

    }

export class QuestionsAndAnswersSerpElementItem  extends BaseSerpApiElementItem   implements IQuestionsAndAnswersSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** contains arrays of specific images */

    items?: QuestionsAndAnswersElement[];

    [key: string]: any;


    constructor(data?: IQuestionsAndAnswersSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(QuestionsAndAnswersElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): QuestionsAndAnswersSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new QuestionsAndAnswersSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IHotelsPackSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** starting date of stay
in the format “year-month-date”
example:
2019-11-15 */
        date_from?: string
        
        /** ending date of stay
in the format “year-month-date”
example:
2019-11-17 */
        date_to?: string
        
        /** contains arrays of specific images */
        items?: HotelsPackElement[]

    [key: string]: any;

    }

export class HotelsPackSerpElementItem  extends BaseSerpApiElementItem   implements IHotelsPackSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** starting date of stay
in the format “year-month-date”
example:
2019-11-15 */

    date_from?: string;
    
    /** ending date of stay
in the format “year-month-date”
example:
2019-11-17 */

    date_to?: string;
    
    /** contains arrays of specific images */

    items?: HotelsPackElement[];

    [key: string]: any;


    constructor(data?: IHotelsPackSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.date_from = data["date_from"];
            this.date_to = data["date_to"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(HotelsPackElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): HotelsPackSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new HotelsPackSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["date_from"] = this.date_from;
        data["date_to"] = this.date_to;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IVisualStoriesSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** contains arrays of specific images */
        items?: LicensesElement[]

    [key: string]: any;

    }

export class VisualStoriesSerpElementItem  extends BaseSerpApiElementItem   implements IVisualStoriesSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** contains arrays of specific images */

    items?: LicensesElement[];

    [key: string]: any;


    constructor(data?: IVisualStoriesSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(LicensesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): VisualStoriesSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new VisualStoriesSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ICommercialUnitsSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** contains arrays of specific images */
        items?: CommercialUnitsElement[]

    [key: string]: any;

    }

export class CommercialUnitsSerpElementItem  extends BaseSerpApiElementItem   implements ICommercialUnitsSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** contains arrays of specific images */

    items?: CommercialUnitsElement[];

    [key: string]: any;


    constructor(data?: ICommercialUnitsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(CommercialUnitsElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): CommercialUnitsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new CommercialUnitsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ILocalServicesSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** URL */
        url?: string
        
        /** domain in the URL */
        domain?: string
        
        /** contains arrays of specific images */
        items?: LocalServicesElement[]

    [key: string]: any;

    }

export class LocalServicesSerpElementItem  extends BaseSerpApiElementItem   implements ILocalServicesSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** URL */

    url?: string;
    
    /** domain in the URL */

    domain?: string;
    
    /** contains arrays of specific images */

    items?: LocalServicesElement[];

    [key: string]: any;


    constructor(data?: ILocalServicesSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.url = data["url"];
            this.domain = data["domain"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(LocalServicesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): LocalServicesSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new LocalServicesSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IGoogleHotelsSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** unique hotel identifier
unique hotel identifier assigned by Google;
example: 'CgoIjaeSlI6CnNpVEAE' */
        hotel_identifier?: string
        
        /** URL */
        url?: string
        
        /** google-defined client id */
        cid?: string

    [key: string]: any;

    }

export class GoogleHotelsSerpElementItem  extends BaseSerpApiElementItem   implements IGoogleHotelsSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** unique hotel identifier
unique hotel identifier assigned by Google;
example: 'CgoIjaeSlI6CnNpVEAE' */

    hotel_identifier?: string;
    
    /** URL */

    url?: string;
    
    /** google-defined client id */

    cid?: string;

    [key: string]: any;


    constructor(data?: IGoogleHotelsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.hotel_identifier = data["hotel_identifier"];
            this.url = data["url"];
            this.cid = data["cid"];
        }
    }

    static fromJS(data: any): GoogleHotelsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleHotelsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["hotel_identifier"] = this.hotel_identifier;
        data["url"] = this.url;
        data["cid"] = this.cid;
        return data;
    }
}

 
export interface IMathSolverSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** solution to the equation
solution to the mathematical equation specified in the keyword field when setting a task */
        result?: string
        
        /** contains arrays of specific images */
        items?: MathSolverElement[]
        
        /** link of the element */
        links?: LinkElement[]

    [key: string]: any;

    }

export class MathSolverSerpElementItem  extends BaseSerpApiElementItem   implements IMathSolverSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** solution to the equation
solution to the mathematical equation specified in the keyword field when setting a task */

    result?: string;
    
    /** contains arrays of specific images */

    items?: MathSolverElement[];
    
    /** link of the element */

    links?: LinkElement[];

    [key: string]: any;


    constructor(data?: IMathSolverSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.result = data["result"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(MathSolverElement.fromJS(item));
                }
            }
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MathSolverSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new MathSolverSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["result"] = this.result;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ICurrencyBoxSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** the value of the rating */
        value?: number
        
        /** value converted to a requested currency
indicates the exact value based on Google Fincance data at the time when our API pulled the results
note that exchange rates displayed in the currency_box element may be delayed according to the Google Finance disclaimer */
        converted_value?: number
        
        /** currency of the listed price
ISO code of the currency applied to the price */
        currency?: string
        
        /** converted currency */
        converted_currency?: string
        
        /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string
        
        /** results table
if there are none, equals null */
        table?: Table
        
        /** contains data provided in the graph of the element */
        graph?: Graph

    [key: string]: any;

    }

export class CurrencyBoxSerpElementItem  extends BaseSerpApiElementItem   implements ICurrencyBoxSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** the value of the rating */

    value?: number;
    
    /** value converted to a requested currency
indicates the exact value based on Google Fincance data at the time when our API pulled the results
note that exchange rates displayed in the currency_box element may be delayed according to the Google Finance disclaimer */

    converted_value?: number;
    
    /** currency of the listed price
ISO code of the currency applied to the price */

    currency?: string;
    
    /** converted currency */

    converted_currency?: string;
    
    /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string;
    
    /** results table
if there are none, equals null */

    table?: Table;
    
    /** contains data provided in the graph of the element */

    graph?: Graph;

    [key: string]: any;


    constructor(data?: ICurrencyBoxSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.value = data["value"];
            this.converted_value = data["converted_value"];
            this.currency = data["currency"];
            this.converted_currency = data["converted_currency"];
            this.timestamp = data["timestamp"];
            this.table = data["table"] ? Table.fromJS(data["table"]) : <any>undefined;
            this.graph = data["graph"] ? Graph.fromJS(data["graph"]) : <any>undefined;
        }
    }

    static fromJS(data: any): CurrencyBoxSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new CurrencyBoxSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["value"] = this.value;
        data["converted_value"] = this.converted_value;
        data["currency"] = this.currency;
        data["converted_currency"] = this.converted_currency;
        data["timestamp"] = this.timestamp;
        data["table"] = this.table ? Table.fromJS(this.table)?.toJSON() : <any>undefined;
        data["graph"] = this.graph ? Graph.fromJS(this.graph)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface IGooglePostsSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** the identifier of the google_posts feature */
        posts_id?: string
        
        /** the additional feature of the review */
        feature?: string
        
        /** google-defined client id */
        cid?: string

    [key: string]: any;

    }

export class GooglePostsSerpElementItem  extends BaseSerpApiElementItem   implements IGooglePostsSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** the identifier of the google_posts feature */

    posts_id?: string;
    
    /** the additional feature of the review */

    feature?: string;
    
    /** google-defined client id */

    cid?: string;

    [key: string]: any;


    constructor(data?: IGooglePostsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.posts_id = data["posts_id"];
            this.feature = data["feature"];
            this.cid = data["cid"];
        }
    }

    static fromJS(data: any): GooglePostsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GooglePostsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["posts_id"] = this.posts_id;
        data["feature"] = this.feature;
        data["cid"] = this.cid;
        return data;
    }
}

 
export interface IProductConsiderationsSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** contains arrays of specific images */
        items?: ProductConsiderationsElement[]

    [key: string]: any;

    }

export class ProductConsiderationsSerpElementItem  extends BaseSerpApiElementItem   implements IProductConsiderationsSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** contains arrays of specific images */

    items?: ProductConsiderationsElement[];

    [key: string]: any;


    constructor(data?: IProductConsiderationsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(ProductConsiderationsElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ProductConsiderationsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new ProductConsiderationsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IFoundOnWebSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** search queries related to the elment */
        related_searches?: string[]
        
        /** contains arrays of specific images */
        items?: FoundOnWebElement[]

    [key: string]: any;

    }

export class FoundOnWebSerpElementItem  extends BaseSerpApiElementItem   implements IFoundOnWebSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** search queries related to the elment */

    related_searches?: string[];
    
    /** contains arrays of specific images */

    items?: FoundOnWebElement[];

    [key: string]: any;


    constructor(data?: IFoundOnWebSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.related_searches = data["related_searches"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(FoundOnWebElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): FoundOnWebSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new FoundOnWebSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["related_searches"] = this.related_searches;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IShortVideosSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** contains arrays of specific images */
        items?: ShortVideosElement[]

    [key: string]: any;

    }

export class ShortVideosSerpElementItem  extends BaseSerpApiElementItem   implements IShortVideosSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** contains arrays of specific images */

    items?: ShortVideosElement[];

    [key: string]: any;


    constructor(data?: IShortVideosSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(ShortVideosElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ShortVideosSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new ShortVideosSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IRefineProductsSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** contains arrays of specific images */
        items?: RefineProductsElement[]

    [key: string]: any;

    }

export class RefineProductsSerpElementItem  extends BaseSerpApiElementItem   implements IRefineProductsSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** contains arrays of specific images */

    items?: RefineProductsElement[];

    [key: string]: any;


    constructor(data?: IRefineProductsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(RefineProductsElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): RefineProductsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new RefineProductsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IExploreBrandsSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** contains arrays of specific images */
        items?: ExploreBrandsElement[]

    [key: string]: any;

    }

export class ExploreBrandsSerpElementItem  extends BaseSerpApiElementItem   implements IExploreBrandsSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** contains arrays of specific images */

    items?: ExploreBrandsElement[];

    [key: string]: any;


    constructor(data?: IExploreBrandsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(ExploreBrandsElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ExploreBrandsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new ExploreBrandsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IPerspectivesSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** contains arrays of specific images */
        items?: PerspectivesElement[]

    [key: string]: any;

    }

export class PerspectivesSerpElementItem  extends BaseSerpApiElementItem   implements IPerspectivesSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** contains arrays of specific images */

    items?: PerspectivesElement[];

    [key: string]: any;


    constructor(data?: IPerspectivesSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(PerspectivesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): PerspectivesSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new PerspectivesSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IDiscussionsAndForumsSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** contains arrays of specific images */
        items?: DiscussionsAndForumsElement[]

    [key: string]: any;

    }

export class DiscussionsAndForumsSerpElementItem  extends BaseSerpApiElementItem   implements IDiscussionsAndForumsSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** contains arrays of specific images */

    items?: DiscussionsAndForumsElement[];

    [key: string]: any;


    constructor(data?: IDiscussionsAndForumsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(DiscussionsAndForumsElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DiscussionsAndForumsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DiscussionsAndForumsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ICompareSitesSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** contains arrays of specific images */
        items?: CompareSitesElement[]

    [key: string]: any;

    }

export class CompareSitesSerpElementItem  extends BaseSerpApiElementItem   implements ICompareSitesSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** contains arrays of specific images */

    items?: CompareSitesElement[];

    [key: string]: any;


    constructor(data?: ICompareSitesSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(CompareSitesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): CompareSitesSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new CompareSitesSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ICoursesSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** array of course categories
contains a list of categories relevant to courses */
        categories?: string[]
        
        /** contains arrays of specific images */
        items?: CoursesElement[]

    [key: string]: any;

    }

export class CoursesSerpElementItem  extends BaseSerpApiElementItem   implements ICoursesSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** array of course categories
contains a list of categories relevant to courses */

    categories?: string[];
    
    /** contains arrays of specific images */

    items?: CoursesElement[];

    [key: string]: any;


    constructor(data?: ICoursesSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.categories = data["categories"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(CoursesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): CoursesSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new CoursesSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["categories"] = this.categories;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IKnowledgeGraphCarouselItemSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** google defined data attribute ID
example:
action:listen_artist */
        data_attrid?: string
        
        /** link of the element */
        link?: LinkElement
        
        /** contains arrays of specific images */
        items?: KnowledgeGraphListElement[]

    [key: string]: any;

    }

export class KnowledgeGraphCarouselItemSerpElementItem  extends BaseSerpApiElementItem   implements IKnowledgeGraphCarouselItemSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** google defined data attribute ID
example:
action:listen_artist */

    data_attrid?: string;
    
    /** link of the element */

    link?: LinkElement;
    
    /** contains arrays of specific images */

    items?: KnowledgeGraphListElement[];

    [key: string]: any;


    constructor(data?: IKnowledgeGraphCarouselItemSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.data_attrid = data["data_attrid"];
            this.link = data["link"] ? LinkElement.fromJS(data["link"]) : <any>undefined;
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(KnowledgeGraphListElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KnowledgeGraphCarouselItemSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphCarouselItemSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["data_attrid"] = this.data_attrid;
        data["link"] = this.link ? LinkElement.fromJS(this.link)?.toJSON() : <any>undefined;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IKnowledgeGraphDescriptionItemSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference text
text snippet from the page that was used to generate the ai_overview_element */
        text?: string
        
        /** link of the element */
        links?: LinkElement[]

    [key: string]: any;

    }

export class KnowledgeGraphDescriptionItemSerpElementItem  extends BaseSerpApiElementItem   implements IKnowledgeGraphDescriptionItemSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference text
text snippet from the page that was used to generate the ai_overview_element */

    text?: string;
    
    /** link of the element */

    links?: LinkElement[];

    [key: string]: any;


    constructor(data?: IKnowledgeGraphDescriptionItemSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.text = data["text"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KnowledgeGraphDescriptionItemSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphDescriptionItemSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["text"] = this.text;
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IKnowledgeGraphImagesItemSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** link of the element */
        link?: LinkElement
        
        /** contains arrays of specific images */
        items?: KnowledgeGraphImagesElement[]

    [key: string]: any;

    }

export class KnowledgeGraphImagesItemSerpElementItem  extends BaseSerpApiElementItem   implements IKnowledgeGraphImagesItemSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** link of the element */

    link?: LinkElement;
    
    /** contains arrays of specific images */

    items?: KnowledgeGraphImagesElement[];

    [key: string]: any;


    constructor(data?: IKnowledgeGraphImagesItemSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.link = data["link"] ? LinkElement.fromJS(data["link"]) : <any>undefined;
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(KnowledgeGraphImagesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KnowledgeGraphImagesItemSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphImagesItemSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["link"] = this.link ? LinkElement.fromJS(this.link)?.toJSON() : <any>undefined;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IKnowledgeGraphListItemSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** google defined data attribute ID
example:
action:listen_artist */
        data_attrid?: string
        
        /** link of the element */
        link?: LinkElement
        
        /** contains arrays of specific images */
        items?: KnowledgeGraphListElement[]

    [key: string]: any;

    }

export class KnowledgeGraphListItemSerpElementItem  extends BaseSerpApiElementItem   implements IKnowledgeGraphListItemSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** google defined data attribute ID
example:
action:listen_artist */

    data_attrid?: string;
    
    /** link of the element */

    link?: LinkElement;
    
    /** contains arrays of specific images */

    items?: KnowledgeGraphListElement[];

    [key: string]: any;


    constructor(data?: IKnowledgeGraphListItemSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.data_attrid = data["data_attrid"];
            this.link = data["link"] ? LinkElement.fromJS(data["link"]) : <any>undefined;
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(KnowledgeGraphListElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KnowledgeGraphListItemSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphListItemSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["data_attrid"] = this.data_attrid;
        data["link"] = this.link ? LinkElement.fromJS(this.link)?.toJSON() : <any>undefined;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IKnowledgeGraphRowItemSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** google defined data attribute ID
example:
action:listen_artist */
        data_attrid?: string
        
        /** reference text
text snippet from the page that was used to generate the ai_overview_element */
        text?: string
        
        /** link of the element */
        links?: LinkElement[]

    [key: string]: any;

    }

export class KnowledgeGraphRowItemSerpElementItem  extends BaseSerpApiElementItem   implements IKnowledgeGraphRowItemSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** google defined data attribute ID
example:
action:listen_artist */

    data_attrid?: string;
    
    /** reference text
text snippet from the page that was used to generate the ai_overview_element */

    text?: string;
    
    /** link of the element */

    links?: LinkElement[];

    [key: string]: any;


    constructor(data?: IKnowledgeGraphRowItemSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.data_attrid = data["data_attrid"];
            this.text = data["text"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KnowledgeGraphRowItemSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphRowItemSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["data_attrid"] = this.data_attrid;
        data["text"] = this.text;
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IKnowledgeGraphHotelsBookingItemSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** starting date of stay
in the format “year-month-date”
example:
2019-11-15 */
        date_from?: string
        
        /** ending date of stay
in the format “year-month-date”
example:
2019-11-17 */
        date_to?: string
        
        /** google defined data attribute ID
example:
action:listen_artist */
        data_attrid?: string
        
        /** contains arrays of specific images */
        items?: KnowledgeGraphHotelsBookingElement[]

    [key: string]: any;

    }

export class KnowledgeGraphHotelsBookingItemSerpElementItem  extends BaseSerpApiElementItem   implements IKnowledgeGraphHotelsBookingItemSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** starting date of stay
in the format “year-month-date”
example:
2019-11-15 */

    date_from?: string;
    
    /** ending date of stay
in the format “year-month-date”
example:
2019-11-17 */

    date_to?: string;
    
    /** google defined data attribute ID
example:
action:listen_artist */

    data_attrid?: string;
    
    /** contains arrays of specific images */

    items?: KnowledgeGraphHotelsBookingElement[];

    [key: string]: any;


    constructor(data?: IKnowledgeGraphHotelsBookingItemSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.date_from = data["date_from"];
            this.date_to = data["date_to"];
            this.data_attrid = data["data_attrid"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(KnowledgeGraphHotelsBookingElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KnowledgeGraphHotelsBookingItemSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphHotelsBookingItemSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["date_from"] = this.date_from;
        data["date_to"] = this.date_to;
        data["data_attrid"] = this.data_attrid;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IKnowledgeGraphExpandedItemSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** google defined data attribute ID
example:
action:listen_artist */
        data_attrid?: string
        
        /** expanded element */
        expanded_element?: KnowledgeGraphExpandedElement[]

    [key: string]: any;

    }

export class KnowledgeGraphExpandedItemSerpElementItem  extends BaseSerpApiElementItem   implements IKnowledgeGraphExpandedItemSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** google defined data attribute ID
example:
action:listen_artist */

    data_attrid?: string;
    
    /** expanded element */

    expanded_element?: KnowledgeGraphExpandedElement[];

    [key: string]: any;


    constructor(data?: IKnowledgeGraphExpandedItemSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.data_attrid = data["data_attrid"];
            if (Array.isArray(data["expanded_element"])) {
                this.expanded_element = [];
                for (let item of data["expanded_element"]) {
                    this.expanded_element.push(KnowledgeGraphExpandedElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KnowledgeGraphExpandedItemSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphExpandedItemSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["data_attrid"] = this.data_attrid;
        data["expanded_element"] = null;
        if (Array.isArray(this.expanded_element)) {
            data["expanded_element"] = [];
            for (let item of this.expanded_element) {
                if (item && typeof item.toJSON === "function") {
                    data["expanded_element"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IKnowledgeGraphPartItemSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** google defined data attribute ID
example:
action:listen_artist */
        data_attrid?: string
        
        /** reference text
text snippet from the page that was used to generate the ai_overview_element */
        text?: string
        
        /** link of the element */
        links?: LinkElement[]

    [key: string]: any;

    }

export class KnowledgeGraphPartItemSerpElementItem  extends BaseSerpApiElementItem   implements IKnowledgeGraphPartItemSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** google defined data attribute ID
example:
action:listen_artist */

    data_attrid?: string;
    
    /** reference text
text snippet from the page that was used to generate the ai_overview_element */

    text?: string;
    
    /** link of the element */

    links?: LinkElement[];

    [key: string]: any;


    constructor(data?: IKnowledgeGraphPartItemSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.data_attrid = data["data_attrid"];
            this.text = data["text"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KnowledgeGraphPartItemSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphPartItemSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["data_attrid"] = this.data_attrid;
        data["text"] = this.text;
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IKnowledgeGraphShoppingItemSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** reference page title */
        title?: string
        
        /** google defined data attribute ID
example:
action:listen_artist */
        data_attrid?: string
        
        /** contains arrays of specific images */
        items?: KnowledgeGraphShoppingElement[]

    [key: string]: any;

    }

export class KnowledgeGraphShoppingItemSerpElementItem  extends BaseSerpApiElementItem   implements IKnowledgeGraphShoppingItemSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** reference page title */

    title?: string;
    
    /** google defined data attribute ID
example:
action:listen_artist */

    data_attrid?: string;
    
    /** contains arrays of specific images */

    items?: KnowledgeGraphShoppingElement[];

    [key: string]: any;


    constructor(data?: IKnowledgeGraphShoppingItemSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.data_attrid = data["data_attrid"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(KnowledgeGraphShoppingElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KnowledgeGraphShoppingItemSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphShoppingItemSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["data_attrid"] = this.data_attrid;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IKnowledgeGraphAiOverviewItemSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** indicates whether the element is loaded asynchronically
if true, the ai_overview element is loaded asynchronically;
if false, the ai_overview element is loaded from cache */
        asynchronous_ai_overview?: boolean
        
        /** contains arrays of specific images */
        items?: BaseSerpApiKnowledgeGraphAiOverviewElementItem[]
        
        /** references relevant to the element
includes references to webpages that were used to generate the ai_overview_element */
        references?: AiAiOverviewReferenceInfo[]

    [key: string]: any;

    }

export class KnowledgeGraphAiOverviewItemSerpElementItem  extends BaseSerpApiElementItem   implements IKnowledgeGraphAiOverviewItemSerpElementItem {
    
    /** indicates whether the element is loaded asynchronically
if true, the ai_overview element is loaded asynchronically;
if false, the ai_overview element is loaded from cache */

    asynchronous_ai_overview?: boolean;
    
    /** contains arrays of specific images */

    items?: BaseSerpApiKnowledgeGraphAiOverviewElementItem[];
    
    /** references relevant to the element
includes references to webpages that were used to generate the ai_overview_element */

    references?: AiAiOverviewReferenceInfo[];

    [key: string]: any;


    constructor(data?: IKnowledgeGraphAiOverviewItemSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.asynchronous_ai_overview = data["asynchronous_ai_overview"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseSerpApiKnowledgeGraphAiOverviewElementItem.fromJS(item));
                }
            }
            if (Array.isArray(data["references"])) {
                this.references = [];
                for (let item of data["references"]) {
                    this.references.push(AiAiOverviewReferenceInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KnowledgeGraphAiOverviewItemSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphAiOverviewItemSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["asynchronous_ai_overview"] = this.asynchronous_ai_overview;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        data["references"] = null;
        if (Array.isArray(this.references)) {
            data["references"] = [];
            for (let item of this.references) {
                if (item && typeof item.toJSON === "function") {
                    data["references"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IAiOverviewSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** indicates whether the element is loaded asynchronically
if true, the ai_overview element is loaded asynchronically;
if false, the ai_overview element is loaded from cache; */
        asynchronous_ai_overview?: boolean
        
        /** content of the element in markdown format */
        markdown?: string
        
        /** contains arrays of specific images */
        items?: BaseSerpApiAiOverviewElementItem[]
        
        /** references relevant to the element
includes references to webpages that were used to generate the ai_overview_element */
        references?: AiAiOverviewReferenceInfo[]

    [key: string]: any;

    }

export class AiOverviewSerpElementItem  extends BaseSerpApiElementItem   implements IAiOverviewSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** indicates whether the element is loaded asynchronically
if true, the ai_overview element is loaded asynchronically;
if false, the ai_overview element is loaded from cache; */

    asynchronous_ai_overview?: boolean;
    
    /** content of the element in markdown format */

    markdown?: string;
    
    /** contains arrays of specific images */

    items?: BaseSerpApiAiOverviewElementItem[];
    
    /** references relevant to the element
includes references to webpages that were used to generate the ai_overview_element */

    references?: AiAiOverviewReferenceInfo[];

    [key: string]: any;


    constructor(data?: IAiOverviewSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.asynchronous_ai_overview = data["asynchronous_ai_overview"];
            this.markdown = data["markdown"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseSerpApiAiOverviewElementItem.fromJS(item));
                }
            }
            if (Array.isArray(data["references"])) {
                this.references = [];
                for (let item of data["references"]) {
                    this.references.push(AiAiOverviewReferenceInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiOverviewSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new AiOverviewSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["asynchronous_ai_overview"] = this.asynchronous_ai_overview;
        data["markdown"] = this.markdown;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        data["references"] = null;
        if (Array.isArray(this.references)) {
            data["references"] = [];
            for (let item of this.references) {
                if (item && typeof item.toJSON === "function") {
                    data["references"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IThirdPartyReviewsSerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */
        rank_absolute?: number
        
        /** the number of reviews */
        reviews_count?: number
        
        /** reference page title */
        title?: string
        
        /** URL */
        url?: string
        
        /** the element’s rating
the popularity rate based on reviews and displayed in SERP */
        rating?: RatingElement

    [key: string]: any;

    }

export class ThirdPartyReviewsSerpElementItem  extends BaseSerpApiElementItem   implements IThirdPartyReviewsSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop */

    rank_absolute?: number;
    
    /** the number of reviews */

    reviews_count?: number;
    
    /** reference page title */

    title?: string;
    
    /** URL */

    url?: string;
    
    /** the element’s rating
the popularity rate based on reviews and displayed in SERP */

    rating?: RatingElement;

    [key: string]: any;


    constructor(data?: IThirdPartyReviewsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.reviews_count = data["reviews_count"];
            this.title = data["title"];
            this.url = data["url"];
            this.rating = data["rating"] ? RatingElement.fromJS(data["rating"]) : <any>undefined;
        }
    }

    static fromJS(data: any): ThirdPartyReviewsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new ThirdPartyReviewsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["reviews_count"] = this.reviews_count;
        data["title"] = this.title;
        data["url"] = this.url;
        data["rating"] = this.rating ? RatingElement.fromJS(this.rating)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface IDictionarySerpElementItem  extends IBaseSerpApiElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number
        
        /** title of the result in SERP */
        title?: string
        
        /** relevant URL of the Ad element in SERP */
        url?: string
        
        /** domain in SERP */
        domain?: string
        
        /** breadcrumb of the Ad element in SERP */
        breadcrumb?: string
        
        /** keyword highlighted in the result */
        keyword?: string
        
        /** snippet of the element */
        snippet?: string
        
        /** description of the results element in SERP */
        text?: string
        
        /** sitelinks
the links shown below some of search results
if there are none, equals null */
        links?: LinkElement[]

    [key: string]: any;

    }

export class DictionarySerpElementItem  extends BaseSerpApiElementItem   implements IDictionarySerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number;
    
    /** title of the result in SERP */

    title?: string;
    
    /** relevant URL of the Ad element in SERP */

    url?: string;
    
    /** domain in SERP */

    domain?: string;
    
    /** breadcrumb of the Ad element in SERP */

    breadcrumb?: string;
    
    /** keyword highlighted in the result */

    keyword?: string;
    
    /** snippet of the element */

    snippet?: string;
    
    /** description of the results element in SERP */

    text?: string;
    
    /** sitelinks
the links shown below some of search results
if there are none, equals null */

    links?: LinkElement[];

    [key: string]: any;


    constructor(data?: IDictionarySerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.url = data["url"];
            this.domain = data["domain"];
            this.breadcrumb = data["breadcrumb"];
            this.keyword = data["keyword"];
            this.snippet = data["snippet"];
            this.text = data["text"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DictionarySerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DictionarySerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["breadcrumb"] = this.breadcrumb;
        data["keyword"] = this.keyword;
        data["snippet"] = this.snippet;
        data["text"] = this.text;
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}