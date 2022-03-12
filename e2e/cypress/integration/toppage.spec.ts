describe('トップページ', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should show title', () => {
    cy.contains('reactjs-vite-tailwindcss-boilerplate').should('exist');
    cy.screenshot('top-page', { overwrite: true });
  });
});
