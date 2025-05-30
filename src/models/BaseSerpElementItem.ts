import { ApiException, throwException } from "./ApiException"

export interface IBaseSerpElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** the alignment of the element in SERP
can take the following values:
left, right */
        position?: string | undefined
        
        /** the XPath of the element */
        xpath?: string | undefined

    [key: string]: any;

    }

export class BaseSerpElementItem  implements IBaseSerpElementItem {
    
    /** type of element */

    type?: string | undefined;
    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;
    
    /** the alignment of the element in SERP
can take the following values:
left, right */

    position?: string | undefined;
    
    /** the XPath of the element */

    xpath?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseSerpElementItem) {

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
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.position = data["position"];
            this.xpath = data["xpath"];
        }
    }

    static fromJS(data: any): BaseSerpElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "paid") {

            const { PaidSerpElementItem } = require('./PaidSerpElementItem');
            let result = new PaidSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "organic") {

            const { OrganicSerpElementItem } = require('./OrganicSerpElementItem');
            let result = new OrganicSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "featured_snippet") {

            const { FeaturedSnippetSerpElementItem } = require('./FeaturedSnippetSerpElementItem');
            let result = new FeaturedSnippetSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_carousel_item") {

            const { KnowledgeGraphCarouselItemSerpElementItem } = require('./KnowledgeGraphCarouselItemSerpElementItem');
            let result = new KnowledgeGraphCarouselItemSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_description_item") {

            const { KnowledgeGraphDescriptionItemSerpElementItem } = require('./KnowledgeGraphDescriptionItemSerpElementItem');
            let result = new KnowledgeGraphDescriptionItemSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_images_item") {

            const { KnowledgeGraphImagesItemSerpElementItem } = require('./KnowledgeGraphImagesItemSerpElementItem');
            let result = new KnowledgeGraphImagesItemSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_list_item") {

            const { KnowledgeGraphListItemSerpElementItem } = require('./KnowledgeGraphListItemSerpElementItem');
            let result = new KnowledgeGraphListItemSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_row_item") {

            const { KnowledgeGraphRowItemSerpElementItem } = require('./KnowledgeGraphRowItemSerpElementItem');
            let result = new KnowledgeGraphRowItemSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_expanded_item") {

            const { KnowledgeGraphExpandedItemSerpElementItem } = require('./KnowledgeGraphExpandedItemSerpElementItem');
            let result = new KnowledgeGraphExpandedItemSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_part_item") {

            const { KnowledgeGraphPartItemSerpElementItem } = require('./KnowledgeGraphPartItemSerpElementItem');
            let result = new KnowledgeGraphPartItemSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_shopping_item") {

            const { KnowledgeGraphShoppingItemSerpElementItem } = require('./KnowledgeGraphShoppingItemSerpElementItem');
            let result = new KnowledgeGraphShoppingItemSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_hotels_booking_item") {

            const { KnowledgeGraphHotelsBookingItemSerpElementItem } = require('./KnowledgeGraphHotelsBookingItemSerpElementItem');
            let result = new KnowledgeGraphHotelsBookingItemSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph_ai_overview_item") {

            const { KnowledgeGraphAiOverviewItemSerpElementItem } = require('./KnowledgeGraphAiOverviewItemSerpElementItem');
            let result = new KnowledgeGraphAiOverviewItemSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "knowledge_graph") {

            const { KnowledgeGraphSerpElementItem } = require('./KnowledgeGraphSerpElementItem');
            let result = new KnowledgeGraphSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "top_stories") {

            const { TopStoriesSerpElementItem } = require('./TopStoriesSerpElementItem');
            let result = new TopStoriesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "people_also_ask") {

            const { PeopleAlsoAskSerpElementItem } = require('./PeopleAlsoAskSerpElementItem');
            let result = new PeopleAlsoAskSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "people_also_search") {

            const { PeopleAlsoSearchSerpElementItem } = require('./PeopleAlsoSearchSerpElementItem');
            let result = new PeopleAlsoSearchSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "images") {

            const { ImagesSerpElementItem } = require('./ImagesSerpElementItem');
            let result = new ImagesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "twitter") {

            const { TwitterSerpElementItem } = require('./TwitterSerpElementItem');
            let result = new TwitterSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_reviews") {

            const { GoogleReviewsSerpElementItem } = require('./GoogleReviewsSerpElementItem');
            let result = new GoogleReviewsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "jobs") {

            const { JobsSerpElementItem } = require('./JobsSerpElementItem');
            let result = new JobsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "map") {

            const { MapSerpElementItem } = require('./MapSerpElementItem');
            let result = new MapSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "app") {

            const { AppSerpElementItem } = require('./AppSerpElementItem');
            let result = new AppSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "local_pack") {

            const { LocalPackSerpElementItem } = require('./LocalPackSerpElementItem');
            let result = new LocalPackSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "carousel") {

            const { CarouselSerpElementItem } = require('./CarouselSerpElementItem');
            let result = new CarouselSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "video") {

            const { VideoSerpElementItem } = require('./VideoSerpElementItem');
            let result = new VideoSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "answer_box") {

            const { AnswerBoxSerpElementItem } = require('./AnswerBoxSerpElementItem');
            let result = new AnswerBoxSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "shopping") {

            const { ShoppingSerpElementItem } = require('./ShoppingSerpElementItem');
            let result = new ShoppingSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_flights") {

            const { GoogleFlightsSerpElementItem } = require('./GoogleFlightsSerpElementItem');
            let result = new GoogleFlightsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "mention_carousel") {

            const { MentionCarouselSerpElementItem } = require('./MentionCarouselSerpElementItem');
            let result = new MentionCarouselSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "events") {

            const { EventsSerpElementItem } = require('./EventsSerpElementItem');
            let result = new EventsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "related_searches") {

            const { RelatedSearchesSerpElementItem } = require('./RelatedSearchesSerpElementItem');
            let result = new RelatedSearchesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "multi_carousel") {

            const { MultiCarouselSerpElementItem } = require('./MultiCarouselSerpElementItem');
            let result = new MultiCarouselSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "recipes") {

            const { RecipesSerpElementItem } = require('./RecipesSerpElementItem');
            let result = new RecipesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "top_sights") {

            const { TopSightsSerpElementItem } = require('./TopSightsSerpElementItem');
            let result = new TopSightsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "scholarly_articles") {

            const { ScholarlyArticlesSerpElementItem } = require('./ScholarlyArticlesSerpElementItem');
            let result = new ScholarlyArticlesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "popular_products") {

            const { PopularProductsSerpElementItem } = require('./PopularProductsSerpElementItem');
            let result = new PopularProductsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "podcasts") {

            const { PodcastsSerpElementItem } = require('./PodcastsSerpElementItem');
            let result = new PodcastsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "stocks_box") {

            const { StocksBoxSerpElementItem } = require('./StocksBoxSerpElementItem');
            let result = new StocksBoxSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "find_results_on") {

            const { FindResultsOnSerpElementItem } = require('./FindResultsOnSerpElementItem');
            let result = new FindResultsOnSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "questions_and_answers") {

            const { QuestionsAndAnswersSerpElementItem } = require('./QuestionsAndAnswersSerpElementItem');
            let result = new QuestionsAndAnswersSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "hotels_pack") {

            const { HotelsPackSerpElementItem } = require('./HotelsPackSerpElementItem');
            let result = new HotelsPackSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "visual_stories") {

            const { VisualStoriesSerpElementItem } = require('./VisualStoriesSerpElementItem');
            let result = new VisualStoriesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "commercial_units") {

            const { CommercialUnitsSerpElementItem } = require('./CommercialUnitsSerpElementItem');
            let result = new CommercialUnitsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "local_services") {

            const { LocalServicesSerpElementItem } = require('./LocalServicesSerpElementItem');
            let result = new LocalServicesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_hotels") {

            const { GoogleHotelsSerpElementItem } = require('./GoogleHotelsSerpElementItem');
            let result = new GoogleHotelsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "math_solver") {

            const { MathSolverSerpElementItem } = require('./MathSolverSerpElementItem');
            let result = new MathSolverSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "currency_box") {

            const { CurrencyBoxSerpElementItem } = require('./CurrencyBoxSerpElementItem');
            let result = new CurrencyBoxSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_posts") {

            const { GooglePostsSerpElementItem } = require('./GooglePostsSerpElementItem');
            let result = new GooglePostsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "product_considerations") {

            const { ProductConsiderationsSerpElementItem } = require('./ProductConsiderationsSerpElementItem');
            let result = new ProductConsiderationsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "found_on_web") {

            const { FoundOnWebSerpElementItem } = require('./FoundOnWebSerpElementItem');
            let result = new FoundOnWebSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "short_videos") {

            const { ShortVideosSerpElementItem } = require('./ShortVideosSerpElementItem');
            let result = new ShortVideosSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "refine_products") {

            const { RefineProductsSerpElementItem } = require('./RefineProductsSerpElementItem');
            let result = new RefineProductsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "explore_brands") {

            const { ExploreBrandsSerpElementItem } = require('./ExploreBrandsSerpElementItem');
            let result = new ExploreBrandsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "perspectives") {

            const { PerspectivesSerpElementItem } = require('./PerspectivesSerpElementItem');
            let result = new PerspectivesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "discussions_and_forums") {

            const { DiscussionsAndForumsSerpElementItem } = require('./DiscussionsAndForumsSerpElementItem');
            let result = new DiscussionsAndForumsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "compare_sites") {

            const { CompareSitesSerpElementItem } = require('./CompareSitesSerpElementItem');
            let result = new CompareSitesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "courses") {

            const { CoursesSerpElementItem } = require('./CoursesSerpElementItem');
            let result = new CoursesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "ai_overview") {

            const { AiOverviewSerpElementItem } = require('./AiOverviewSerpElementItem');
            let result = new AiOverviewSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "third_party_reviews") {

            const { ThirdPartyReviewsSerpElementItem } = require('./ThirdPartyReviewsSerpElementItem');
            let result = new ThirdPartyReviewsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "event_item") {

            const { EventItemSerpElementItem } = require('./EventItemSerpElementItem');
            let result = new EventItemSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "dictionary") {

            const { DictionarySerpElementItem } = require('./DictionarySerpElementItem');
            let result = new DictionarySerpElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["position"] = this.position;
        data["xpath"] = this.xpath;
        return data;
    }
}