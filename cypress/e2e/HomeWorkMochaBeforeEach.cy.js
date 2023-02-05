
describe('Inline form', () => {

    beforeEach(() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com', { timeout: 250000 });
        cy.get('img.theme-preview[alt="Corporate Theme"]').click();
        cy.get('a.ng-tns-c141-9.ng-star-inserted').click();
        cy.get('a[title="Form Layouts"]').click();
        cy.get('g[data-name="menu-2"]').click();
     })

describe('Name field', () => {     
  const fieldNameEmail = [
        {name: 'Svitlana', expectedName: 'Svitlana', email: 'sveta.fetsyk@gmail.com', expectedEmail: 'sveta.fetsyk@gmail.com'},
        {name: 'SVITLANA', expectedName: 'SVITLANA', email: 'svetaFetsyk@gmail.com', expectedEmail: 'svetaFetsyk@gmail.com'},
        {name: 'Ira', expectedName: 'Ira', email: 'ira123@gmail.com', expectedEmail: 'ira123@gmail.com'},
        {name: 'SvitlanaKrohmalna', expectedName: 'SvitlanaKrohmalna', email: 'sveta_123@gmail.com', expectedEmail: 'sveta_123@gmail.com'}
    ]
    fieldNameEmail.forEach(({name, expectedName,email, expectedEmail}) => {
        it(`Search Name and Email Data ${name}, ${email}`, () => {
           
            cy.get('input[type="text"][placeholder="Jane Doe"]', { timeout: 60000 }).type(`${name}`);
            cy.get('input[type="text"][placeholder="Jane Doe"]').should("contain.value", `${expectedName}`);       
            cy.get('form > input[placeholder="Email"]', { timeout: 60000 }).type(`${email}`);
            cy.get('form > input[placeholder="Email"]').should("contain.value", `${expectedEmail}`);
        })
   })        
 })


})


 
