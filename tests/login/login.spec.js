describe('Login Scenarios', () => {
    it('Validate login screen is displayed', async () => {
        // Load the login screen
        await browser.url('');

        // Simple assertion to validate login page is shown
        const aboutCcsElement = await $('#about-ccs');
        await expect(aboutCcsElement).toBeDisplayed();
    });
});
