class NewsPage {
    constructor(page) {
        this.page = page;
        this.url = 'https://www.redmine.org/projects/redmine/news';
        
        this.newsArticles = '.news-article';
        this.newsTitle = 'h2:has-text("Новини")';
        this.newsArticleTitle = '.news-article h3 a';
        this.newsArticleAuthor = '.news-article .author';
        this.newsArticleContent = '.news-article .wiki';
        this.pagination = '.pagination';
        this.exportFormats = '.other-formats';
    }

    async navigate() {
        await this.page.goto(this.url,{ timeout: 60000, waitUntil: 'load' });
    }

    async getNewsArticles() {
        return await this.page.$$(this.newsArticles);
    }

    async getNewsTitles() {
        return await this.page.$$eval(this.newsArticleTitle, elements => 
            elements.map(el => el.textContent.trim())
        );
    }

    async getNewsAuthors() {
        return await this.page.$$eval(this.newsArticleAuthor, elements => 
            elements.map(el => el.textContent.trim())
        );
    }

    async isPaginationVisible() {
        return await this.page.isVisible(this.pagination);
    }

    async isExportFormatsVisible() {
        return await this.page.isVisible(this.exportFormats);
    }

    async getPageTitle() {
        return await this.page.title();
    }
}

module.exports = { NewsPage }; 