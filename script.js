$(document).ready(function() {

    $('#ajout-bouton').click(function() {
        var livre={  titre:     $('#ajout-titre'  ).val(),
                     auteur : $('#ajout-auteur'  ).val(),
                     editeur:   $('#ajout-editeur').val(),
                     annee : $('#ajout-annee'  ).val(),
                     prix:   $('#ajout-prix').val() };
        ajouter_livre(livre);

        //On ré-init les input
        $('#ajout-titre').val('');
        $('#ajout-auteur').val('');
        $('#ajout-editeur').val('');
        $('#ajout-annee').val('');
        $('#ajout-prix').val('');

        //Calcul du total des items, de leur prix total et de leur moyenne
        $('#nbj').text(nombre_livres());
        $('#total').text(calculer_total());
        $('#moy').text(calculer_moyenne());
        $('#old').text(calculer_anciennete());
        $('#gold').text(calculer_pluscher());
    });
});

function ajouter_livre(livre) {
    var ligne=$('<tr><td class="titre"></td><td class="auteur"></td><td class="editeur"></td><td class="annee"></td><td class="prix"></td></tr>');
    ligne.find(".titre").text(livre.titre);
    ligne.find(".auteur").text(livre.auteur);
    ligne.find(".editeur").text(livre.editeur);
    ligne.find(".annee").text(livre.annee);
    ligne.find(".prix").text(livre.prix);
    $('#livres').append(ligne);
}

function nombre_livres() {
    var nbj=0;
    // Pour chaque ligne du tableau .each() on appelle la fonction.
    $('#livres tr').each(function() {
        nbj++;
    });
    return nbj;
}

function calculer_total() {
    var total=0;
    // Pour chaque ligne du tableau .each() on appelle la fonction.
    $('#livres tr').each(function()
    {
        var prix=parseInt($(this).find('.prix').text());
        total+=prix;
    });
    return total;
}

function calculer_moyenne() {
    var moy=0; total=0; nbj=0;
    // Pour chaque ligne du tableau .each() on appelle la fonction.
    $('#livres tr').each(function() {
        nbj++;
        var prix=parseInt($(this).find('.prix').text());
        total+=prix;
        moy = Math.round((total) / nbj);
    });
    return moy;
}

function calculer_anciennete() {
    var old = 2021;
    // Pour chaque ligne du tableau .each() on appelle la fonction.
    $('#livres tr').each(function() {
        var annee=parseInt($(this).find('.annee').text());
        if(annee < old) {
            old = annee;
        }
    });
    return old;
}

function calculer_pluscher(){
    var gold = 0;
    // Pour chaque ligne du tableau .each() on appelle la fonction.
    $('#livres tr').each(function () {
        nbj++;
        var prix = parseInt($(this).find('.prix').text());
        if(prix > gold) {
            gold = prix;
        }
    });
    return gold;
}
