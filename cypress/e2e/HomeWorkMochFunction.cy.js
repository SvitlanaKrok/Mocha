
describe('Inline form', () => {

function openMainPage(){
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com', { timeout: 250000 });
    cy.get('img.theme-preview[alt="Corporate Theme"]').click();
    cy.get('a.ng-tns-c141-9.ng-star-inserted').click();
    cy.get('a[title="Form Layouts"]').click();
    cy.get('g[data-name="menu-2"]').click();
 }

describe('Name field', () => {     
  const fieldName = [
        {name: 'Svitlana', expectedName: 'Svitlana'},
        {name: 'SVITLANA', expectedName: 'SVITLANA'},
        {name: 'Ira', expectedName: 'Ira'},
        {name: 'SvitlanaKrohmalna', expectedName: 'SvitlanaKrohmalna'}
    ]
    fieldName.forEach(({name, expectedName}) => {
        it(`Search Name Data ${name}`, () => {

            openMainPage();
            
            cy.get('input[type="text"][placeholder="Jane Doe"]', { timeout: 60000 }).type(`${name}`);
            cy.get('input[type="text"][placeholder="Jane Doe"]').should("contain.value", `${expectedName}`);
        })
   })        
 })

 describe('Email field', () => {     
    const fieldEmail = [
        {email: 'sveta.fetsyk@gmail.com', expectedEmail: 'sveta.fetsyk@gmail.com'},
        {email: 'svetaFetsyk@gmail.com', expectedEmail: 'svetaFetsyk@gmail.com'},
        {email: 'sveta123@gmail.com', expectedEmail: 'sveta123@gmail.com'},
        {email: 'sveta_123@gmail.com', expectedEmail: 'sveta_123@gmail.com'}
    ]
    fieldEmail.forEach(({email, expectedEmail}) => {
        it(`Search Name Data ${email}`, () => {

            openMainPage();

            cy.get('form > input[placeholder="Email"]', { timeout: 60000 }).type(`${email}`);
            cy.get('form > input[placeholder="Email"]').should("contain.value", `${expectedEmail}`);
        })
   })        
 })
})


 
