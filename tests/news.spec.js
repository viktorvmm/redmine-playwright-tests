const { test, expect } = require('@playwright/test');
const NewsPage = require('../pages/NewsPage');

test.describe('Redmine News Page Tests', () => {
    let newsPage;

    test.beforeEach(async ({ page }) => {
        newsPage = new NewsPage(page);
        await newsPage.navigate();
    });

    test('should load news page successfully', async () => {
        const pageTitle = await newsPage.getPageTitle();
        expect(pageTitle).toContain('Redmine');
    });

    test('should display news articles', async () => {
        const articles = await newsPage.getNewsArticles();
        expect(articles.length).toBeGreaterThan(0);
    });

    test('should display news titles', async () => {
        const titles = await newsPage.getNewsTitles();
        expect(titles.length).toBeGreaterThan(0);
        expect(titles[0]).toContain('Redmine');
    });

    test('should display news authors', async () => {
        const authors = await newsPage.getNewsAuthors();
        expect(authors.length).toBeGreaterThan(0);
    });

    test('should have pagination', async () => {
        const hasPagination = await newsPage.isPaginationVisible();
        expect(hasPagination).toBeTruthy();
    });

    test('should have export formats section', async () => {
        const hasExportFormats = await newsPage.isExportFormatsVisible();
        expect(hasExportFormats).toBeTruthy();
    });
}); 