describe('My First Test', () => {
cy.clock;//horloge nécessaire au test du décompte

  it('Teste si ma page contient ce titre', () => {
    cy.visit('/')
    cy.contains('RICK&MORTYCARD')
  })
  it('Test si carte saffiche quand on clique sur le bouton', () => {
      cy.visit('/');
      cy.get('button').click();
      cy.get('.card').should('be.visible');
  })  
  it('Test si le bouton est désactivé pendant deux heures après un clic', () => {
    cy.visit('/');
    cy.get('button').click();
    cy.get('.card').should('be.visible');

    // désactivé?
    cy.get('button').should('be.disabled');

    //Simuler le passage de deux heures
    // cy.tick(2 * 60 * 60 * 1000); // 2 heures en millisecondes

    // //Vérifier que le bouton est à nouveau activé
    // cy.get('button').should('not.be.disabled');
  });
  it('Test pour vérifier que la carte contient les données du personnage', () => {
    cy.visit('/');  
    cy.get('button').click();
    cy.get('.card').should('be.visible');

    // Vérifier le contenu
    cy.get('.card').should(
      'contain',
      'Mon personnage:'
    );
    cy.get('.card').should('contain', 'Son numéro:');
    cy.get('.card').should(
      'contain',
      'Son espèce:'
    );
    cy.get('.card').should('contain', 'Son état:');
    });
})
