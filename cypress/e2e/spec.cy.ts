
const personalManagedCommon = () => {
    cy.get('.menu-items').should('have.length', 5)
    const dates: string[] = [];
    cy
      .get('td.received-on')
      .children()
      .each(el => {
        dates.push(el.text());
      })
      .then(() => {
        const sortedDates = dates.slice().sort((a, b) => +(new Date(b)) - +(new Date(a)))
        expect(dates).to.eql(sortedDates);
      });
}

const logoutClicked = () => {
    cy.get('#profile-options').find('#logout-button').click();
    cy.wait(500);
    cy.url().should('be.equals', 'http://localhost:3000/')
}

describe('goes to page', () => {
  it('goes to page', () => {
    cy.visit('http://localhost:3000');
    cy.contains('A Beautiful Landing Page');
    cy.get('#login-button-managed');
    cy.get('#login-button-personal');
  });

  it('goes to managed user', () => {
    cy.visit('http://localhost:3000');
    cy.get('#login-button-managed').click();
    cy.wait(500);
    cy.url().should("be.equals", `http://localhost:3000/authed/user/1/dashboard`);
    cy.contains('or track your career goal');
    cy.contains('Career Goal');
    cy.contains('Your Progress');
    cy.contains('I want to become a');
    cy.contains('View All Documents');
    personalManagedCommon();
    cy.get('#profile-button').click();
    cy.get('#profile-options').contains('Managed');
    logoutClicked()
  })

  it('goes to personal user', () => {
    cy.visit('http://localhost:3000');
    cy.get('#login-button-personal').click();
    cy.wait(500);
    cy.url().should("be.equals", `http://localhost:3000/authed/user/2/dashboard`);
    personalManagedCommon();
    cy.get('#profile-button').click();
    cy.get('#profile-options').contains('Personal');
    logoutClicked()
  })
})



/**Scenario: User is a Personal User
 Scenario: User is a Managed User
 
 Given user is on home page
 Then user should see main navigation
 And user should see his/her recent documents sorted descendingly
 And user should see his/her career goal
 When user clicks on account settings dropdown
 And user clicks on log out option
 Then user should be logged out from the dashboard

Given user is on home page
Then user should see main navigation
And user should see his/her recent documents sorted descendingly
When user clicks on account settings dropdown
And user clicks on log out option
Then user should be logged out from the dashboard

*/