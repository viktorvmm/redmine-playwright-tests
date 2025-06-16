const { expect } = require('@playwright/test');
const { test } = require('../fixtures/pages');

test.describe('Redmine News Page Tests', () => {
    test.beforeEach(async ({ newsPage }) => {
        await newsPage.navigate();
    });

    test('should load news page successfully', async ({ newsPage }) => {
        const pageTitle = await newsPage.getPageTitle();
        expect(pageTitle).toContain('Redmine');
    });

    test('should display news articles', async ({ newsPage }) => {
        const articles = await newsPage.getNewsArticles();
        expect(articles.length).toBeGreaterThan(0);
    });

    test('should display news titles', async ({ newsPage }) => {
        const titles = await newsPage.getNewsTitles();
        expect(titles.length).toBeGreaterThan(0);
        expect(titles[0]).toContain('Redmine');
    });

    test('should display news authors', async ({ newsPage }) => {
        const authors = await newsPage.getNewsAuthors();
        expect(authors.length).toBeGreaterThan(0);
    });

    test('should have pagination', async ({ newsPage }) => {
        const hasPagination = await newsPage.isPaginationVisible();
        expect(hasPagination).toBeTruthy();
    });

    test('should have export formats section', async ({ newsPage }) => {
        const hasExportFormats = await newsPage.isExportFormatsVisible();
        expect(hasExportFormats).toBeTruthy();
    });
}); 