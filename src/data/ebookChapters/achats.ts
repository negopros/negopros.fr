import { EbookChapter } from '../ebookMeta';

export const ebookChaptersAchats: EbookChapter[] = [
  {
    id: 'introduction-achats',
    title: 'Introduction - Pourquoi ce guide est indispensable pour les acheteurs',
    content: `
      <h2>Introduction</h2>
      <h3>Pourquoi ce guide est indispensable pour les acheteurs</h3>

      <p>La négociation achats ne s'improvise pas. Dans un environnement commercial de plus en plus complexe, où les fournisseurs sont mieux préparés que jamais, les acheteurs doivent maîtriser des techniques avancées pour obtenir les meilleures conditions.</p>

      <p><strong>Les enjeux de la négociation achats :</strong></p>
      <ul>
        <li><strong>Impact financier direct :</strong> Chaque pourcentage négocié représente des économies substantielles</li>
        <li><strong>Qualité et innovation :</strong> Au-delà du prix, négocier l'accès aux meilleures solutions</li>
        <li><strong>Relation fournisseur :</strong> Construire des partenariats durables et équilibrés</li>
        <li><strong>Avantage concurrentiel :</strong> Des achats optimisés renforcent la compétitivité globale</li>
      </ul>

      <p><strong>Ce que vous allez apprendre :</strong></p>
      <ul>
        <li>Les concepts fondamentaux : BATNA, ZOPA, TCO</li>
        <li>Les techniques psychologiques de Chris Voss et Daniel Kahneman</li>
        <li>Les tactiques avancées et contre-tactiques</li>
        <li>La méthode PACIFICAT de négociation complexe</li>
        <li>L'application de la Matrice de Kraljic</li>
        <li>Des cas pratiques concrets</li>
      </ul>

      <p>Ce guide s'appuie sur les meilleures références internationales en négociation et les adapte spécifiquement au contexte des achats professionnels.</p>
    `,
    sections: [],
  },
  {
    id: 'fondamentaux-achats',
    title: 'Chapitre 1 : Les Fondamentaux de la Négociation Achats',
    content: `
      <h2>Chapitre 1 : Les Fondamentaux de la Négociation Achats</h2>

      <h3>1.1 Les concepts clés : BATNA, ZOPA, TCO</h3>

      <h4>BATNA (Best Alternative To a Negotiated Agreement)</h4>
      <p>Votre BATNA est votre meilleure solution de repli si la négociation échoue. C'est votre force de négociation principale.</p>
      <ul>
        <li><strong>Identifier votre BATNA :</strong> Quel fournisseur alternatif ? Quelle solution interne ?</li>
        <li><strong>Améliorer votre BATNA :</strong> Développer plusieurs alternatives renforce votre position</li>
        <li><strong>Évaluer le BATNA du fournisseur :</strong> A-t-il d'autres clients ? Peut-il refuser ?</li>
      </ul>

      <h4>ZOPA (Zone of Possible Agreement)</h4>
      <p>La zone où un accord est possible, située entre votre prix maximum acceptable et le prix minimum du fournisseur.</p>
      <ul>
        <li><strong>Prix de réservation :</strong> Le point au-delà duquel vous activez votre BATNA</li>
        <li><strong>Objectif ambitieux :</strong> Votre cible idéale dans la négociation</li>
        <li><strong>Marges de manœuvre :</strong> L'espace entre ces deux points</li>
      </ul>

      <h4>TCO (Total Cost of Ownership)</h4>
      <p>Le coût total de possession va bien au-delà du prix d'achat :</p>
      <ul>
        <li>Coûts d'acquisition (transport, douanes, assurance)</li>
        <li>Coûts d'utilisation (formation, maintenance, consommables)</li>
        <li>Coûts de fin de vie (désinstallation, recyclage)</li>
        <li>Coûts cachés (non-qualité, arrêts de production, obsolescence)</li>
      </ul>

      <h3>1.2 Cartographie du rapport de force acheteur-fournisseur</h3>

      <p><strong>Analyser votre position :</strong></p>
      <ul>
        <li><strong>Dépendance mutuelle :</strong> Qui a le plus besoin de l'autre ?</li>
        <li><strong>Alternatives disponibles :</strong> Nombre et qualité des options</li>
        <li><strong>Coûts de changement :</strong> Combien coûte un changement de fournisseur ?</li>
        <li><strong>Urgence :</strong> Qui est contraint par le temps ?</li>
        <li><strong>Information :</strong> Qui détient le plus d'informations ?</li>
      </ul>

      <h3>1.3 Définir des objectifs réalistes et ambitieux</h3>

      <p><strong>Méthode des trois niveaux :</strong></p>
      <ul>
        <li><strong>Objectif de rupture :</strong> Le minimum acceptable (proche de votre BATNA)</li>
        <li><strong>Objectif réaliste :</strong> Ce que vous pensez obtenir dans des conditions normales</li>
        <li><strong>Objectif ambitieux :</strong> Le meilleur résultat possible (début de la ZOPA)</li>
      </ul>

      <p><strong>Au-delà du prix :</strong></p>
      <ul>
        <li>Conditions de paiement (délais, escompte)</li>
        <li>Conditions de livraison (délais, fiabilité, franco)</li>
        <li>Garanties et services (maintenance, formation, support)</li>
        <li>Clauses contractuelles (pénalités, révisions, exclusivité)</li>
        <li>Innovation et développement commun</li>
      </ul>

      <h3>1.4 Adapter sa stratégie selon le rapport de force</h3>

      <p><strong>Position de force (acheteur dominant) :</strong></p>
      <ul>
        <li>Mise en concurrence forte</li>
        <li>Objectifs ambitieux sur tous les critères</li>
        <li>Exigences élevées en termes de service</li>
      </ul>

      <p><strong>Position équilibrée :</strong></p>
      <ul>
        <li>Négociation win-win</li>
        <li>Recherche de valeur ajoutée mutuelle</li>
        <li>Construction d'une relation durable</li>
      </ul>

      <p><strong>Position de faiblesse (fournisseur dominant) :</strong></p>
      <ul>
        <li>Travailler à améliorer votre BATNA</li>
        <li>Proposer de la valeur pour le fournisseur</li>
        <li>Négocier les conditions plutôt que le prix</li>
        <li>Construire une relation de long terme</li>
      </ul>
    `,
    sections: [
      { id: 'concepts-cles', title: '1.1 Les concepts clés : BATNA, ZOPA, TCO' },
      { id: 'cartographie', title: '1.2 Cartographie du rapport de force acheteur-fournisseur' },
      { id: 'objectifs', title: '1.3 Définir des objectifs réalistes et ambitieux' },
      { id: 'strategie', title: '1.4 Adapter sa stratégie selon le rapport de force' },
    ],
  },
  {
    id: 'psychologie-communication',
    title: 'Chapitre 2 : Psychologie et Communication en Négociation',
    content: `
      <h2>Chapitre 2 : Psychologie et Communication en Négociation</h2>

      <h3>2.1 L'empathie tactique de Chris Voss</h3>

      <p>Chris Voss, ancien négociateur du FBI, a développé le concept d'empathie tactique : comprendre les émotions et les motivations de l'autre partie pour mieux négocier.</p>

      <h4>Techniques clés :</h4>

      <p><strong>Le labeling (étiquetage émotionnel) :</strong></p>
      <ul>
        <li>"On dirait que vous êtes préoccupé par les délais..."</li>
        <li>"Il semble que la qualité soit votre priorité..."</li>
        <li>Effet : Créer de la confiance et obtenir plus d'informations</li>
      </ul>

      <p><strong>Les questions ouvertes calibrées :</strong></p>
      <ul>
        <li>"Comment pourrions-nous résoudre ce problème ensemble ?"</li>
        <li>"Qu'est-ce qui vous empêche d'accepter cette proposition ?"</li>
        <li>"Comment puis-je faciliter votre prise de décision ?"</li>
      </ul>

      <p><strong>Le mirroring (effet miroir) :</strong></p>
      <ul>
        <li>Répéter les 2-3 derniers mots de votre interlocuteur</li>
        <li>Encourager l'autre à développer sa pensée</li>
        <li>Obtenir plus d'informations sans poser de questions directes</li>
      </ul>

      <h3>2.2 Les biais cognitifs (Kahneman) et leur exploitation</h3>

      <p>Daniel Kahneman, prix Nobel d'économie, a identifié les biais qui influencent nos décisions.</p>

      <h4>Principaux biais en négociation achats :</h4>

      <p><strong>L'ancrage :</strong></p>
      <ul>
        <li>La première offre influence fortement le résultat final</li>
        <li><strong>Application :</strong> Annoncer votre prix cible en premier</li>
        <li><strong>Défense :</strong> Préparer un contre-ancrage immédiat</li>
      </ul>

      <p><strong>L'aversion à la perte :</strong></p>
      <ul>
        <li>Nous craignons plus de perdre que nous espérons gagner</li>
        <li><strong>Application :</strong> "Si nous ne signons pas maintenant, vous risquez de perdre..."</li>
        <li><strong>Défense :</strong> Rester rationnel, évaluer le gain réel</li>
      </ul>

      <p><strong>L'effet de dotation :</strong></p>
      <ul>
        <li>Nous surestimons la valeur de ce que nous possédons</li>
        <li><strong>Application :</strong> Proposer un essai pour créer de l'attachement</li>
        <li><strong>Défense :</strong> Évaluer objectivement avant de tester</li>
      </ul>

      <p><strong>Le biais de confirmation :</strong></p>
      <ul>
        <li>Nous cherchons les informations qui confirment nos croyances</li>
        <li><strong>Défense :</strong> Rechercher activement les informations contradictoires</li>
      </ul>

      <h3>2.3 Les 6 leviers d'influence de Cialdini</h3>

      <p>Robert Cialdini a identifié 6 principes psychologiques universels d'influence :</p>

      <h4>1. Réciprocité</h4>
      <ul>
        <li>Nous nous sentons obligés de rendre ce qu'on nous donne</li>
        <li><strong>En négociation :</strong> Faire de petites concessions pour en obtenir de grandes</li>
      </ul>

      <h4>2. Engagement et cohérence</h4>
      <ul>
        <li>Nous voulons être cohérents avec nos engagements passés</li>
        <li><strong>En négociation :</strong> Obtenir des micro-accords progressifs</li>
      </ul>

      <h4>3. Preuve sociale</h4>
      <ul>
        <li>Nous imitons ce que font les autres</li>
        <li><strong>En négociation :</strong> "D'autres clients comparables ont choisi..."</li>
      </ul>

      <h4>4. Autorité</h4>
      <ul>
        <li>Nous obéissons aux figures d'autorité</li>
        <li><strong>En négociation :</strong> Citer des experts, études, certifications</li>
      </ul>

      <h4>5. Sympathie</h4>
      <ul>
        <li>Nous disons oui plus facilement aux gens que nous apprécions</li>
        <li><strong>En négociation :</strong> Créer du lien, trouver des points communs</li>
      </ul>

      <h4>6. Rareté</h4>
      <ul>
        <li>Nous valorisons davantage ce qui est rare</li>
        <li><strong>En négociation :</strong> Créer de l'urgence, limiter les quantités</li>
      </ul>

      <h3>2.4 Décoder le non-verbal : les micro-expressions d'Ekman</h3>

      <p>Paul Ekman a identifié 7 émotions universelles exprimées par des micro-expressions faciales.</p>

      <h4>Signaux à observer :</h4>

      <p><strong>Signes de confort/inconfort :</strong></p>
      <ul>
        <li>Toucher son visage = inconfort, stress</li>
        <li>Sourire symétrique = sincérité</li>
        <li>Sourire asymétrique = faux sourire</li>
        <li>Contact visuel stable = confiance</li>
        <li>Regard fuyant = inconfort ou mensonge</li>
      </ul>

      <p><strong>Congruence verbale/non-verbale :</strong></p>
      <ul>
        <li>Les gestes contredisent-ils les mots ?</li>
        <li>Le ton de voix est-il en accord avec le message ?</li>
        <li>La posture est-elle ouverte ou fermée ?</li>
      </ul>

      <p><strong>Application en négociation :</strong></p>
      <ul>
        <li>Identifier les sujets sensibles (micro-expressions de gêne)</li>
        <li>Repérer les moments d'hésitation (opportunités de négociation)</li>
        <li>Adapter votre discours en temps réel</li>
      </ul>
    `,
    sections: [
      { id: 'empathie-voss', title: '2.1 L\'empathie tactique de Chris Voss' },
      { id: 'biais-cognitifs', title: '2.2 Les biais cognitifs (Kahneman) et leur exploitation' },
      { id: 'influence-cialdini', title: '2.3 Les 6 leviers d\'influence de Cialdini' },
      { id: 'non-verbal-ekman', title: '2.4 Décoder le non-verbal : les micro-expressions d\'Ekman' },
    ],
  },
  {
    id: 'tactiques-avancees',
    title: 'Chapitre 3 : Tactiques Avancées et Contre-Tactiques',
    content: `
      <h2>Chapitre 3 : Tactiques Avancées et Contre-Tactiques</h2>

      <h3>3.1 Les tactiques classiques des vendeurs</h3>

      <h4>Tactique 1 : Le bon cop / mauvais cop</h4>
      <ul>
        <li><strong>Description :</strong> Un négociateur intransigeant, un autre conciliant</li>
        <li><strong>Objectif :</strong> Vous faire accepter les conditions du "gentil"</li>
        <li><strong>Contre-tactique :</strong> Demander une pause, négocier avec les deux ensemble</li>
      </ul>

      <h4>Tactique 2 : L'autorité supérieure</h4>
      <ul>
        <li><strong>Description :</strong> "Je dois vérifier avec mon directeur"</li>
        <li><strong>Objectif :</strong> Obtenir de nouvelles concessions à chaque aller-retour</li>
        <li><strong>Contre-tactique :</strong> Demander à négocier directement avec le décideur</li>
      </ul>

      <h4>Tactique 3 : L'offre temporaire</h4>
      <ul>
        <li><strong>Description :</strong> "Cette offre expire ce soir"</li>
        <li><strong>Objectif :</strong> Vous presser pour éviter la réflexion</li>
        <li><strong>Contre-tactique :</strong> Tester la réalité de l'urgence, proposer un engagement progressif</li>
      </ul>

      <h4>Tactique 4 : Le leurre</h4>
      <ul>
        <li><strong>Description :</strong> Proposer une option peu attractive pour valoriser l'offre principale</li>
        <li><strong>Objectif :</strong> Orienter votre choix</li>
        <li><strong>Contre-tactique :</strong> Revenir à vos critères objectifs</li>
      </ul>

      <h3>3.2 Les contre-tactiques efficaces</h3>

      <h4>La technique du disque rayé</h4>
      <p>Répéter calmement votre position sans vous laisser détourner.</p>
      <p><strong>Exemple :</strong> "Comme je l'ai mentionné, notre budget maximum est de X€. Comment pouvons-nous travailler dans cette enveloppe ?"</p>

      <h4>Le silence stratégique</h4>
      <p>Après une proposition, rester silencieux. Le silence est souvent insupportable et pousse l'autre partie à combler le vide avec des concessions.</p>

      <h4>La reformulation déstabilisante</h4>
      <p>Reformuler la proposition du vendeur en termes moins avantageux.</p>
      <p><strong>Exemple :</strong> "Donc si je comprends bien, vous me proposez de payer 20% de plus pour le même service ?"</p>

      <h4>La division en éléments</h4>
      <p>Découper une offre globale pour négocier chaque élément séparément.</p>
      <p><strong>Exemple :</strong> "Parlons d'abord du prix unitaire, puis nous verrons les conditions de livraison."</p>

      <h3>3.3 Gérer les concessions et obtenir des contreparties</h3>

      <h4>Règles d'or des concessions :</h4>

      <p><strong>1. Ne jamais concéder sans contrepartie</strong></p>
      <ul>
        <li>Toute concession doit être échangée contre quelque chose</li>
        <li>"Si j'accepte ce délai, pouvez-vous améliorer le prix ?"</li>
      </ul>

      <p><strong>2. Concéder en diminuant</strong></p>
      <ul>
        <li>Première concession : 5%</li>
        <li>Deuxième concession : 2%</li>
        <li>Troisième concession : 0,5%</li>
        <li>Signal : "Je suis proche de ma limite"</li>
      </ul>

      <p><strong>3. Montrer la douleur</strong></p>
      <ul>
        <li>Ne jamais concéder facilement</li>
        <li>"C'est vraiment difficile pour nous, mais..."</li>
        <li>Valoriser chaque concession</li>
      </ul>

      <p><strong>4. Concéder sur des éléments à faible coût pour vous</strong></p>
      <ul>
        <li>Identifier ce qui a de la valeur pour l'autre mais vous coûte peu</li>
        <li>Exemple : engagement de volume, durée de contrat, exclusivité sur une zone</li>
      </ul>

      <h3>3.4 Sortir des situations de blocage</h3>

      <h4>Technique 1 : Élargir le gâteau</h4>
      <p>Ajouter d'autres éléments à négocier pour créer plus d'opportunités d'échange.</p>
      <p><strong>Exemple :</strong> Si le prix bloque, introduire les services, la durée du contrat, les conditions de paiement.</p>

      <h4>Technique 2 : Changer de niveau</h4>
      <p>Impliquer un niveau hiérarchique supérieur qui peut avoir plus de latitude.</p>

      <h4>Technique 3 : La pause constructive</h4>
      <p>Proposer une suspension pour réfléchir. Le temps permet souvent de débloquer les positions.</p>

      <h4>Technique 4 : L'appel à un tiers neutre</h4>
      <p>Dans les cas extrêmes, faire appel à un médiateur ou expert indépendant.</p>

      <h4>Technique 5 : Le "Et si...?"</h4>
      <p>Proposer des scénarios hypothétiques pour explorer de nouvelles options sans engagement.</p>
      <p><strong>Exemple :</strong> "Et si nous acceptions ce prix, mais sur un contrat de 3 ans ?"</p>
    `,
    sections: [
      { id: 'tactiques-vendeurs', title: '3.1 Les tactiques classiques des vendeurs' },
      { id: 'contre-tactiques', title: '3.2 Les contre-tactiques efficaces' },
      { id: 'concessions', title: '3.3 Gérer les concessions et obtenir des contreparties' },
      { id: 'blocage', title: '3.4 Sortir des situations de blocage' },
    ],
  },
  {
    id: 'methode-pacificat',
    title: 'Chapitre 4 : La Méthode PACIFICAT (Combalbert & Mery)',
    content: `
      <h2>Chapitre 4 : La Méthode PACIFICAT</h2>

      <p>Laurent Combalbert et Marwan Mery, négociateurs du RAID, ont développé la méthode PACIFICAT, processus structuré en 9 étapes pour les négociations complexes.</p>

      <h3>4.1 Les 9 étapes en détail</h3>

      <h4>P - Préparer</h4>
      <p><strong>Objectif :</strong> Collecter un maximum d'informations</p>
      <ul>
        <li>Analyser le fournisseur : santé financière, dépendance client, alternatives</li>
        <li>Définir vos objectifs et votre BATNA</li>
        <li>Identifier les enjeux cachés</li>
        <li>Préparer votre argumentaire et vos concessions</li>
      </ul>

      <h4>A - Assurer le contact</h4>
      <p><strong>Objectif :</strong> Établir une relation de confiance</p>
      <ul>
        <li>Créer un climat positif dès le début</li>
        <li>Montrer de l'empathie et de l'écoute</li>
        <li>Trouver des points communs</li>
        <li>Établir les règles du jeu</li>
      </ul>

      <h4>C - Collecter les informations</h4>
      <p><strong>Objectif :</strong> Comprendre les motivations et contraintes de l'autre</p>
      <ul>
        <li>Poser des questions ouvertes</li>
        <li>Écouter activement</li>
        <li>Observer le non-verbal</li>
        <li>Identifier les besoins sous-jacents</li>
      </ul>

      <h4>I - Influencer</h4>
      <p><strong>Objectif :</strong> Orienter la négociation vers vos objectifs</p>
      <ul>
        <li>Utiliser les techniques d'influence (Cialdini)</li>
        <li>Présenter vos arguments de manière persuasive</li>
        <li>Créer de la valeur perçue</li>
        <li>Ancrer les positions favorables</li>
      </ul>

      <h4>F - Faire une proposition</h4>
      <p><strong>Objectif :</strong> Initier la phase de négociation concrète</p>
      <ul>
        <li>Choisir le bon moment pour proposer</li>
        <li>Structurer votre offre de manière claire</li>
        <li>Ancrer haut si vous proposez en premier</li>
        <li>Laisser de la marge de négociation</li>
      </ul>

      <h4>I - Impliquer</h4>
      <p><strong>Objectif :</strong> Faire participer l'autre partie à la construction de la solution</p>
      <ul>
        <li>"Comment pourrions-nous résoudre ce problème ensemble ?"</li>
        <li>Co-construire l'accord</li>
        <li>Utiliser des questions ouvertes calibrées (Voss)</li>
        <li>Créer un sentiment de propriété de la solution</li>
      </ul>

      <h4>C - Concrétiser</h4>
      <p><strong>Objectif :</strong> Finaliser les termes de l'accord</p>
      <ul>
        <li>Récapituler tous les points d'accord</li>
        <li>Clarifier les zones d'ombre</li>
        <li>Obtenir des engagements précis</li>
        <li>Définir les prochaines étapes</li>
      </ul>

      <h4>A - Assurer le suivi</h4>
      <p><strong>Objectif :</strong> Garantir l'exécution de l'accord</p>
      <ul>
        <li>Formaliser par écrit rapidement</li>
        <li>Définir des points de contrôle</li>
        <li>Maintenir la relation</li>
        <li>Anticiper les problèmes d'exécution</li>
      </ul>

      <h4>T - Tirer les leçons</h4>
      <p><strong>Objectif :</strong> S'améliorer pour les prochaines négociations</p>
      <ul>
        <li>Analyser ce qui a fonctionné</li>
        <li>Identifier les erreurs</li>
        <li>Capitaliser les apprentissages</li>
        <li>Préparer les futures négociations avec ce fournisseur</li>
      </ul>

      <h3>4.2 Application dans un contexte achats</h3>

      <h4>Exemple : Négociation d'un contrat annuel avec un fournisseur clé</h4>

      <p><strong>P - Préparer :</strong></p>
      <ul>
        <li>Analyser les volumes de l'année écoulée</li>
        <li>Comparer avec 3 fournisseurs alternatifs</li>
        <li>Définir objectifs : -8% prix, +2 mois délai paiement, clause révision</li>
        <li>BATNA : Fournisseur B à -5%</li>
      </ul>

      <p><strong>A - Assurer le contact :</strong></p>
      <ul>
        <li>Rappeler la qualité du partenariat passé</li>
        <li>Exprimer le souhait de continuer ensemble</li>
        <li>Fixer l'agenda de la négociation</li>
      </ul>

      <p><strong>C - Collecter :</strong></p>
      <ul>
        <li>"Quels sont vos défis pour cette année ?"</li>
        <li>"Comment voyez-vous l'évolution de nos volumes ?"</li>
        <li>Découvrir : nouvelle gamme de produits, recherche de volumes</li>
      </ul>

      <p><strong>I - Influencer :</strong></p>
      <ul>
        <li>Mentionner les offres compétitives reçues</li>
        <li>Souligner votre potentiel de croissance</li>
        <li>Créer de l'urgence (décision à prendre dans 2 semaines)</li>
      </ul>

      <p><strong>F - Faire une proposition :</strong></p>
      <ul>
        <li>Proposer : -10% sur prix, +60 jours paiement, engagement volume +15%</li>
        <li>Inclure : test nouvelle gamme</li>
      </ul>

      <p><strong>I - Impliquer :</strong></p>
      <ul>
        <li>"Comment pourriez-vous optimiser les coûts de votre côté ?"</li>
        <li>"Quels volumes vous permettraient de proposer un meilleur prix ?"</li>
      </ul>

      <p><strong>C - Concrétiser :</strong></p>
      <ul>
        <li>Accord final : -7% prix, +45 jours paiement, +12% volumes, test nouvelle gamme</li>
        <li>Clause de révision semestrielle</li>
      </ul>

      <p><strong>A - Assurer le suivi :</strong></p>
      <ul>
        <li>Formalisation contrat sous 1 semaine</li>
        <li>Point mensuel sur volumes et qualité</li>
        <li>Revue semestrielle</li>
      </ul>

      <p><strong>T - Tirer les leçons :</strong></p>
      <ul>
        <li>L'engagement volume a été le levier décisif</li>
        <li>La nouvelle gamme créé de la valeur mutuelle</li>
        <li>Préparer la prochaine négociation sur cette base</li>
      </ul>
    `,
    sections: [
      { id: 'neuf-etapes', title: '4.1 Les 9 étapes en détail' },
      { id: 'application-achats', title: '4.2 Application dans un contexte achats' },
    ],
  },
  {
    id: 'matrice-kraljic',
    title: 'Chapitre 5 : Négocier selon la Matrice de Kraljic',
    content: `
      <h2>Chapitre 5 : Négocier selon la Matrice de Kraljic</h2>

      <p>La Matrice de Kraljic classe les achats selon deux axes : l'impact financier et le risque d'approvisionnement. Chaque catégorie nécessite une stratégie de négociation différente.</p>

      <h3>5.1 Produits stratégiques : partenariat et co-innovation</h3>

      <p><strong>Caractéristiques :</strong></p>
      <ul>
        <li>Impact financier élevé</li>
        <li>Risque d'approvisionnement élevé</li>
        <li>Peu de fournisseurs qualifiés</li>
        <li>Importance critique pour l'activité</li>
      </ul>

      <h4>Stratégie de négociation :</h4>

      <p><strong>Objectif :</strong> Construire un partenariat stratégique</p>

      <ul>
        <li><strong>Approche :</strong> Win-win, long terme</li>
        <li><strong>Négociation :</strong> Sur la valeur globale et l'innovation</li>
        <li><strong>Leviers :</strong>
          <ul>
            <li>Engagement de volumes pluriannuels</li>
            <li>Développement conjoint de nouveaux produits</li>
            <li>Partage d'informations stratégiques</li>
            <li>Intégration des processus</li>
          </ul>
        </li>
      </ul>

      <p><strong>Exemple de négociation :</strong></p>
      <p>Négociation avec un fournisseur de composants électroniques critiques :</p>
      <ul>
        <li>Contrat cadre 3 ans avec engagement progressif</li>
        <li>Clause d'innovation : développement conjoint nouvelle génération</li>
        <li>Partage des gains de productivité</li>
        <li>Visibilité mutuelle sur les prévisions</li>
      </ul>

      <h3>5.2 Produits goulot d'étranglement : sécuriser l'approvisionnement</h3>

      <p><strong>Caractéristiques :</strong></p>
      <ul>
        <li>Impact financier faible</li>
        <li>Risque d'approvisionnement élevé</li>
        <li>Fournisseurs en position de force</li>
        <li>Peu d'alternatives</li>
      </ul>

      <h4>Stratégie de négociation :</h4>

      <p><strong>Objectif :</strong> Sécuriser la disponibilité</p>

      <ul>
        <li><strong>Approche :</strong> Réduire la dépendance</li>
        <li><strong>Négociation :</strong> Focus sur la fiabilité et les conditions</li>
        <li><strong>Leviers :</strong>
          <ul>
            <li>Développer des fournisseurs alternatifs</li>
            <li>Standardiser pour réduire la spécificité</li>
            <li>Négocier des stocks de sécurité</li>
            <li>Contrats long terme avec clauses de service</li>
          </ul>
        </li>
      </ul>

      <p><strong>Exemple de négociation :</strong></p>
      <p>Négociation avec un fournisseur de pièce spécifique en monopole :</p>
      <ul>
        <li>Accepter le prix mais négocier intensément les conditions</li>
        <li>Clause de garantie de disponibilité avec pénalités</li>
        <li>Stocks consignation chez le fournisseur</li>
        <li>Parallèlement : projet de standardisation pour sortir du monopole</li>
      </ul>

      <h3>5.3 Produits à effet de levier : optimiser les prix</h3>

      <p><strong>Caractéristiques :</strong></p>
      <ul>
        <li>Impact financier élevé</li>
        <li>Risque d'approvisionnement faible</li>
        <li>Nombreux fournisseurs</li>
        <li>Produits standardisés</li>
      </ul>

      <h4>Stratégie de négociation :</h4>

      <p><strong>Objectif :</strong> Maximiser les économies</p>

      <ul>
        <li><strong>Approche :</strong> Mise en concurrence forte</li>
        <li><strong>Négociation :</strong> Focus sur le prix et les conditions financières</li>
        <li><strong>Leviers :</strong>
          <ul>
            <li>Appels d'offres compétitifs</li>
            <li>Globalisation des volumes</li>
            <li>Contrats spot ou court terme</li>
            <li>Enchères inversées</li>
            <li>Négociation agressive</li>
          </ul>
        </li>
      </ul>

      <p><strong>Exemple de négociation :</strong></p>
      <p>Achat de matières premières standardisées (exemple : acier) :</p>
      <ul>
        <li>Appel d'offres auprès de 5 fournisseurs qualifiés</li>
        <li>Négociation descendante avec les 3 meilleurs</li>
        <li>Obtenir : -12% vs prix initial, paiement 60 jours, franco domicile</li>
        <li>Contrat annuel mais renégociation possible si marché baisse</li>
      </ul>

      <h3>5.4 Produits simples : automatiser et simplifier</h3>

      <p><strong>Caractéristiques :</strong></p>
      <ul>
        <li>Impact financier faible</li>
        <li>Risque d'approvisionnement faible</li>
        <li>Nombreux fournisseurs</li>
        <li>Produits courants</li>
      </ul>

      <h4>Stratégie de négociation :</h4>

      <p><strong>Objectif :</strong> Minimiser les coûts de transaction</p>

      <ul>
        <li><strong>Approche :</strong> Simplification et automatisation</li>
        <li><strong>Négociation :</strong> Contrats cadres simples</li>
        <li><strong>Leviers :</strong>
          <ul>
            <li>E-procurement</li>
            <li>Catalogues électroniques</li>
            <li>Contrats cadres multi-produits</li>
            <li>Réduction du nombre de fournisseurs</li>
            <li>Négociation groupée peu fréquente</li>
          </ul>
        </li>
      </ul>

      <p><strong>Exemple de négociation :</strong></p>
      <p>Fournitures de bureau :</p>
      <ul>
        <li>Appel d'offres tous les 2 ans</li>
        <li>Contrat cadre avec catalogue électronique</li>
        <li>Remise globale négociée une fois : -18% vs tarif public</li>
        <li>Commandes automatisées sans nouvelle négociation</li>
      </ul>
    `,
    sections: [
      { id: 'produits-strategiques', title: '5.1 Produits stratégiques : partenariat et co-innovation' },
      { id: 'produits-goulot', title: '5.2 Produits goulot d\'étranglement : sécuriser l\'approvisionnement' },
      { id: 'produits-levier', title: '5.3 Produits à effet de levier : optimiser les prix' },
      { id: 'produits-simples', title: '5.4 Produits simples : automatiser et simplifier' },
    ],
  },
  {
    id: 'cas-pratiques-achats',
    title: 'Chapitre 6 : Cas Pratiques et Simulations',
    content: `
      <h2>Chapitre 6 : Cas Pratiques et Simulations</h2>

      <h3>6.1 Cas 1 : Renégociation avec un fournisseur stratégique</h3>

      <h4>Contexte :</h4>
      <p>Vous êtes acheteur dans une entreprise industrielle. Vous devez renégocier le contrat annuel avec votre fournisseur principal de matières premières. La relation existe depuis 5 ans.</p>

      <p><strong>Données :</strong></p>
      <ul>
        <li>Volume annuel : 500 000 €</li>
        <li>Prix actuel : 10 €/unité</li>
        <li>Votre objectif : -6% minimum, -10% ambitieux</li>
        <li>Le marché a baissé de 8% sur l'année</li>
        <li>Vous avez un fournisseur alternatif à 9,20 € (mais qualité inférieure)</li>
      </ul>

      <h4>Déroulement de la négociation :</h4>

      <p><strong>Phase 1 - Préparation (PACIFICAT) :</strong></p>
      <ul>
        <li>BATNA : Fournisseur B à 9,20 € (économie de 8%)</li>
        <li>ZOPA estimée : entre 9,00 € et 9,50 €</li>
        <li>Arguments préparés : baisse marché, volumes constants, concurrence</li>
        <li>Concessions possibles : engagement volume +10%, durée contrat 2 ans</li>
      </ul>

      <p><strong>Phase 2 - Négociation :</strong></p>
      <ul>
        <li><strong>Ouverture :</strong> "Nous apprécions notre partenariat mais le marché a évolué..."</li>
        <li><strong>Ancrage :</strong> "Nous visons un prix de 9,00 € compte tenu de la baisse du marché"</li>
        <li><strong>Réaction fournisseur :</strong> "Impossible ! Au mieux 9,70 €"</li>
        <li><strong>Exploration :</strong> "Qu'est-ce qui vous empêche d'aller plus loin ?"</li>
        <li><strong>Découverte :</strong> Le fournisseur a des surcapacités et cherche des volumes</li>
        <li><strong>Proposition :</strong> "Et si nous vous garantissions +15% de volumes sur 2 ans contre 9,20 € ?"</li>
        <li><strong>Négociation finale :</strong> Accord à 9,30 € avec +12% volumes et contrat 2 ans</li>
      </ul>

      <p><strong>Résultat :</strong></p>
      <ul>
        <li>Économie : 7% (entre objectif minimum et ambitieux)</li>
        <li>Sécurisation : contrat 2 ans</li>
        <li>Relation : préservée et renforcée</li>
      </ul>

      <h3>6.2 Cas 2 : Négociation avec un fournisseur en position de force</h3>

      <h4>Contexte :</h4>
      <p>Vous devez acheter un logiciel métier spécialisé. Un seul éditeur propose une solution adaptée. Vous êtes en position de faiblesse.</p>

      <p><strong>Données :</strong></p>
      <ul>
        <li>Prix annoncé : 50 000 € licence + 10 000 € maintenance/an</li>
        <li>Durée : 3 ans minimum</li>
        <li>Pas d'alternative réelle</li>
        <li>Urgence : démarrage projet dans 2 mois</li>
      </ul>

      <h4>Stratégie :</h4>

      <p><strong>1. Améliorer votre BATNA :</strong></p>
      <ul>
        <li>Développement interne : coût estimé 100 000 €, délai 8 mois</li>
        <li>Solution concurrente moins adaptée : 35 000 € mais perte productivité</li>
        <li>Votre BATNA reste faible mais vous l'avez quantifié</li>
      </ul>

      <p><strong>2. Négocier les conditions plutôt que le prix :</strong></p>
      <ul>
        <li><strong>Paiement :</strong> Négocier 50% à la livraison, 50% après validation</li>
        <li><strong>Maintenance :</strong> Inclure la première année dans la licence</li>
        <li><strong>Formation :</strong> Obtenir 5 jours de formation inclus (au lieu de 2)</li>
        <li><strong>Évolutions :</strong> Garantir 2 évolutions gratuites par an</li>
        <li><strong>Clause de sortie :</strong> Possibilité de résiliation après 18 mois</li>
      </ul>

      <p><strong>3. Créer de la valeur pour le fournisseur :</strong></p>
      <ul>
        <li>Proposer une référence client (témoignage, étude de cas)</li>
        <li>Accepter de participer au beta-test de nouvelles fonctionnalités</li>
        <li>Recommander la solution dans votre réseau professionnel</li>
      </ul>

      <p><strong>Résultat de la négociation :</strong></p>
      <ul>
        <li>Prix : 48 000 € (maintenu mais première année maintenance offerte)</li>
        <li>Paiement : 50/50</li>
        <li>Formation : 5 jours</li>
        <li>Clause sortie après 18 mois</li>
        <li>En échange : référence client + témoignage vidéo</li>
      </ul>

      <p><strong>Leçon :</strong> Même en position de faiblesse, on peut négocier des conditions avantageuses en créant de la valeur et en élargissant le champ de la négociation.</p>

      <h3>6.3 Cas 3 : Appel d'offres et négociation finale</h3>

      <h4>Contexte :</h4>
      <p>Vous lancez un appel d'offres pour un contrat de transport annuel. Budget : 800 000 €.</p>

      <h4>Phase 1 - Appel d'offres :</h4>

      <p><strong>Préparation du cahier des charges :</strong></p>
      <ul>
        <li>Critères : 60% prix, 20% qualité service, 10% délais, 10% RSE</li>
        <li>Pondération transparente pour les candidats</li>
        <li>Volume estimé : 1000 livraisons/an</li>
      </ul>

      <p><strong>Réception des offres :</strong></p>
      <ul>
        <li>5 offres reçues</li>
        <li>Fourchette prix : 750 € à 850 € par livraison</li>
        <li>Meilleure offre : Transporteur A à 770 € (excellente notation qualité)</li>
        <li>2ème : Transporteur B à 780 € (bonne notation)</li>
      </ul>

      <h4>Phase 2 - Négociation finale :</h4>

      <p><strong>Avec le Transporteur A (premier) :</strong></p>
      <ul>
        <li><strong>Vous :</strong> "Votre offre est intéressante mais nous avons d'autres propositions compétitives"</li>
        <li><strong>Transporteur A :</strong> "Nous sommes les meilleurs sur la qualité"</li>
        <li><strong>Vous :</strong> "En effet, mais l'écart prix avec B est de 10 €. Que pouvez-vous faire ?"</li>
        <li><strong>Transporteur A :</strong> "Je peux descendre à 760 €"</li>
        <li><strong>Vous :</strong> "Et si nous vous garantissions 1200 livraisons (au lieu de 1000) ?"</li>
        <li><strong>Transporteur A :</strong> "Dans ce cas, 740 € sur l'ensemble"</li>
      </ul>

      <p><strong>Avec le Transporteur B (second) :</strong></p>
      <ul>
        <li><strong>Vous :</strong> "Vous êtes actuellement second. Le premier est à 740 € avec engagement 1200 livraisons"</li>
        <li><strong>Transporteur B :</strong> "Je peux faire 730 € sur 1200 livraisons"</li>
        <li><strong>Vous :</strong> "Votre qualité de service est inférieure. Que proposez-vous pour combler cet écart ?"</li>
        <li><strong>Transporteur B :</strong> "Je m'engage sur un taux de service à 99% avec pénalités si non atteint"</li>
      </ul>

      <h4>Phase 3 - Décision :</h4>

      <p><strong>Analyse finale :</strong></p>
      <ul>
        <li>Transporteur A : 740 € x 1200 = 888 000 € (excellent service prouvé)</li>
        <li>Transporteur B : 730 € x 1200 = 876 000 € (engagement service à prouver)</li>
        <li>Économie potentielle B : 12 000 € mais risque qualité</li>
      </ul>

      <p><strong>Négociation finale avec A :</strong></p>
      <ul>
        <li>"Nous avons une offre à 730 €. Pouvez-vous vous aligner ?"</li>
        <li>"Je peux faire 735 € avec garantie de service et engagement qualité total"</li>
        <li>Accord : 735 € x 1200 = 882 000 €</li>
      </ul>

      <p><strong>Résultat :</strong></p>
      <ul>
        <li>Économie vs budget : -10,25%</li>
        <li>Qualité de service garantie</li>
        <li>Volume sécurisé pour le transporteur</li>
      </ul>

      <h3>6.4 Exercices d'entraînement</h3>

      <h4>Exercice 1 : Identifier votre BATNA</h4>
      <p><strong>Situation :</strong> Vous négociez un contrat de nettoyage des bureaux.</p>
      <ul>
        <li>Offre actuelle : 3000 €/mois</li>
        <li>Alternative 1 : Nouveau prestataire à 2800 €/mois (références à vérifier)</li>
        <li>Alternative 2 : Internaliser avec 1 ETP à 2500 € charges comprises</li>
      </ul>
      <p><strong>Question :</strong> Quel est votre BATNA ? À quel prix activeriez-vous votre BATNA ?</p>

      <h4>Exercice 2 : Gérer une tactique</h4>
      <p><strong>Situation :</strong> En pleine négociation, le commercial vous dit : "Je dois vérifier avec mon directeur, mais cette offre est vraiment notre limite."</p>
      <p><strong>Question :</strong> Comment réagissez-vous ? Quelle contre-tactique utilisez-vous ?</p>

      <h4>Exercice 3 : Négocier une concession</h4>
      <p><strong>Situation :</strong> Le fournisseur vous demande d'accepter un délai de livraison plus long (8 semaines au lieu de 6).</p>
      <p><strong>Question :</strong> Quelle contrepartie demandez-vous ? Comment formulez-vous votre réponse ?</p>

      <h4>Exercice 4 : Sortir d'un blocage</h4>
      <p><strong>Situation :</strong> Vous êtes bloqué sur le prix. Vous proposez 100 €, le fournisseur demande 120 €. Aucun ne bouge depuis 30 minutes.</p>
      <p><strong>Question :</strong> Quelles techniques pouvez-vous utiliser pour débloquer la situation ?</p>
    `,
    sections: [
      { id: 'cas-renegociation', title: '6.1 Cas 1 : Renégociation avec un fournisseur stratégique' },
      { id: 'cas-position-force', title: '6.2 Cas 2 : Négociation avec un fournisseur en position de force' },
      { id: 'cas-appel-offres', title: '6.3 Cas 3 : Appel d\'offres et négociation finale' },
      { id: 'exercices', title: '6.4 Exercices d\'entraînement' },
    ],
  },
  {
    id: 'conclusion-achats',
    title: 'Conclusion - Devenir un négociateur d\'élite',
    content: `
      <h2>Conclusion</h2>
      <h3>Devenir un négociateur d'élite</h3>

      <p>Vous avez maintenant tous les outils pour devenir un négociateur achats performant. Récapitulons les points essentiels :</p>

      <h4>Les fondamentaux à maîtriser absolument :</h4>
      <ul>
        <li><strong>BATNA :</strong> Toujours avoir une alternative solide</li>
        <li><strong>Préparation :</strong> 80% du succès se joue avant la négociation</li>
        <li><strong>TCO :</strong> Regarder au-delà du prix d'achat</li>
        <li><strong>Empathie tactique :</strong> Comprendre pour mieux négocier</li>
      </ul>

      <h4>Les techniques qui font la différence :</h4>
      <ul>
        <li>Questions ouvertes calibrées de Chris Voss</li>
        <li>Exploitation des biais cognitifs de Kahneman</li>
        <li>Leviers d'influence de Cialdini</li>
        <li>Méthode structurée PACIFICAT</li>
        <li>Adaptation selon Kraljic</li>
      </ul>

      <h4>Les règles d'or de la négociation achats :</h4>
      <ol>
        <li><strong>Préparez-vous méthodiquement</strong> - Investissez du temps dans la préparation</li>
        <li><strong>Développez vos alternatives</strong> - Un bon BATNA = forte position</li>
        <li><strong>Écoutez activement</strong> - Les besoins cachés sont les clés du succès</li>
        <li><strong>Négociez la valeur, pas seulement le prix</strong> - Élargissez le champ de négociation</li>
        <li><strong>Gérez vos émotions</strong> - Restez professionnel en toutes circonstances</li>
        <li><strong>Construisez la relation</strong> - La négociation ne s'arrête pas à la signature</li>
        <li><strong>Pratiquez régulièrement</strong> - Chaque négociation est une opportunité d'apprentissage</li>
      </ol>

      <h4>Votre plan d'action pour progresser :</h4>

      <p><strong>Court terme (1 mois) :</strong></p>
      <ul>
        <li>Appliquer la méthode de préparation sur vos 3 prochaines négociations</li>
        <li>Pratiquer l'empathie tactique et les questions ouvertes</li>
        <li>Analyser votre BATNA systématiquement</li>
      </ul>

      <p><strong>Moyen terme (3 mois) :</strong></p>
      <ul>
        <li>Tester les techniques avancées (ancrage, concessions décroissantes)</li>
        <li>Débriefer chaque négociation importante</li>
        <li>Cartographier vos achats selon Kraljic</li>
      </ul>

      <p><strong>Long terme (6 mois) :</strong></p>
      <ul>
        <li>Devenir référent négociation dans votre organisation</li>
        <li>Former vos collègues</li>
        <li>Créer des outils et processus de négociation</li>
      </ul>

      <h4>Ressources pour aller plus loin :</h4>

      <p><strong>Livres essentiels :</strong></p>
      <ul>
        <li>"Never Split the Difference" - Chris Voss</li>
        <li>"Thinking, Fast and Slow" - Daniel Kahneman</li>
        <li>"Influence: The Psychology of Persuasion" - Robert Cialdini</li>
        <li>"Négocier l'impossible" - Laurent Combalbert & Marwan Mery</li>
      </ul>

      <p><strong>Pratique continue :</strong></p>
      <ul>
        <li>Négociez dans votre vie personnelle (achats, services)</li>
        <li>Observez les négociateurs experts</li>
        <li>Demandez du feedback à vos interlocuteurs</li>
        <li>Participez à des formations et ateliers</li>
      </ul>

      <h4>Le mot de la fin :</h4>

      <p>La négociation est à la fois un art et une science. Les techniques que vous avez apprises dans ce guide sont scientifiquement prouvées, mais leur application requiert de la pratique et de l'adaptation.</p>

      <p><strong>Rappelez-vous :</strong></p>
      <ul>
        <li>Chaque négociation est unique</li>
        <li>L'échec est un apprentissage</li>
        <li>La préparation bat toujours le talent seul</li>
        <li>Les relations comptent autant que les résultats</li>
      </ul>

      <p>Vous avez maintenant toutes les cartes en main pour exceller dans vos négociations achats. À vous de jouer !</p>

      <p><strong>Bonne négociation !</strong></p>
    `,
    sections: [],
  },
];
