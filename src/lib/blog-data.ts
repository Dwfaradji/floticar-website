export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Comment réduire de 20% le budget carburant de votre flotte auto ?",
    slug: "comment-reduire-budget-carburant-flotte-auto",
    excerpt: "Le poste carburant représente l'une des dépenses les plus importantes pour une PME. Découvrez 5 stratégies concrètes pour optimiser la consommation de vos véhicules professionnels.",
    content: `
      <h2>Le poids du carburant dans le TCO d'une flotte</h2>
      <p>Pour la majorité des PME et TPE, le poste carburant représente entre 20% et 30% du Coût Total de Possession (TCO) d'un parc automobile. Face aux fluctuations des prix à la pompe et aux contraintes écologiques croissantes, maîtriser cette dépense n'est plus une option, c'est une nécessité absolue pour préserver la trésorerie de l'entreprise.</p>
      
      <h2>1. Suivre précisément la consommation par véhicule</h2>
      <p>Il est impossible d'optimiser ce qu'on ne mesure pas de manière fiable. Beaucoup d'entreprises se contentent d'estimer la consommation en fin d'année. En utilisant un logiciel de gestion de flotte comme Floticar, vous centralisez les relevés kilométriques réguliers et les dépenses en station-service. Le croisement de ces données permet de calculer la consommation réelle aux 100 kilomètres pour chaque véhicule. Cela met instantanément en lumière les véhicules dits "surconsommateurs". Ces anomalies peuvent provenir d'un problème mécanique sous-jacent (filtre encrassé, mauvaise pression des pneus) ou d'un comportement de conduite inadapté.</p>
      
      <h2>2. Sensibiliser et former les collaborateurs à l'éco-conduite</h2>
      <p>La conduite a un impact direct sur la jauge. L'éco-conduite permet de réduire la consommation de carburant de 15% en moyenne. Des gestes simples font une énorme différence sur la facture annuelle :</p>
      <ul>
        <li>Anticiper les freinages et privilégier le frein moteur.</li>
        <li>Éviter les accélérations brusques (conduite souple).</li>
        <li>Couper le moteur pour les arrêts prolongés (même courts).</li>
        <li>Utiliser la climatisation avec modération.</li>
      </ul>
      <p>L'organisation de challenges internes ou de formations préventives transforme souvent les conducteurs en véritables acteurs de la réduction des coûts.</p>
      
      <h2>3. Déployer et paramétrer des cartes carburant</h2>
      <p>L'utilisation de cartes carburant (Total, Edenred, DKV) offre une double victoire. D'abord sur le plan administratif : elle permet de récupérer la TVA sans avoir à chasser les tickets de caisse perdus. Ensuite, sur le contrôle : en associant la carte à votre logiciel de gestion, vous pouvez fixer des plafonds de dépense, restreindre les prises de carburant le week-end, et bloquer les achats hors carburant (boutiques, lavages excessifs). Les fraudes et abus sont ainsi drastiquement réduits.</p>
      
      <h2>4. Assurer un entretien préventif rigoureux</h2>
      <p>Saviez-vous que des pneus sous-gonflés de seulement 0.5 bar entraînent une surconsommation de 2.4% tout en réduisant leur durée de vie ? Un entretien préventif rigoureux est un levier direct d'économie. Le changement régulier des filtres à air, de l'huile moteur et la vérification du parallélisme garantissent que le moteur fonctionne avec un rendement optimal.</p>
      
      <h2>5. Optimiser les tournées et les déplacements</h2>
      <p>Enfin, le kilomètre le moins cher est celui qu'on ne parcourt pas. La rationalisation des déplacements (regroupement des interventions, utilisation d'outils de routage optimisé) permet d'éviter les kilomètres superflus. Floticar vous aide à avoir une vue d'ensemble sur l'utilisation de vos véhicules pour repenser intelligemment vos affectations.</p>
    `,
    date: "15 Mars 2024",
    author: "Équipe Floticar",
    category: "Optimisation des coûts",
    readTime: "7 min",
  },
  {
    title: "Médico-social : Les enjeux de la gestion des véhicules partagés",
    slug: "medico-social-enjeux-gestion-vehicules-partages",
    excerpt: "Dans les IME, SESSAD et ESAT, les véhicules sont souvent partagés entre plusieurs éducateurs. Comment éviter les conflits d'agendas et assurer une parfaite traçabilité ?",
    content: `
      <h2>Le défi quotidien des véhicules partagés (pool)</h2>
      <p>Le secteur médico-social repose sur la mobilité de ses équipes. Les professionnels (éducateurs, psychomotriciens, assistants sociaux) multiplient les visites à domicile ou les transports d'usagers en utilisant des véhicules de service mutualisés. Pourtant, l'organisation de ce "pool" de véhicules est souvent source de tensions.</p>
      <p>Les méthodes traditionnelles (tableau blanc dans le couloir, calendrier papier, fichier Excel partagé) montrent vite leurs limites. Les chevauchements de réservations, les clés perdues, ou la découverte le matin même d'un véhicule avec le réservoir vide ou un pneu crevé génèrent un stress inutile pour des professionnels dont le métier est déjà exigeant.</p>
      
      <h2>Responsabiliser sans fliquer : la traçabilité bienveillante</h2>
      <p>L'un des plus grands défis est de responsabiliser les conducteurs occasionnels. La logique du "ce n'est pas mon véhicule donc je ne m'en occupe pas" peut coûter très cher à la structure. La traçabilité est donc essentielle : savoir qui a pris le Kangoo mardi dernier, à quelle heure, et dans quel état il a été rendu.</p>
      <p>Le but d'une solution logicielle n'est pas de faire du "flicage", mais de s'assurer que le matériel mis à disposition soit toujours en état de fonctionner. L'instauration d'un carnet de bord numérique permet à chaque collaborateur de faire un état des lieux rapide depuis son smartphone avant de prendre la route.</p>
      
      <h2>La digitalisation du carnet de bord avec Floticar</h2>
      <p>En remplaçant le cahier papier (souvent raturé et illisible) présent dans la boîte à gants par une application intuitive, les associations du secteur médico-social gagnent sur tous les tableaux :</p>
      <ul>
        <li><strong>Réservation simplifiée :</strong> L'éducateur réserve son créneau en deux clics via son téléphone. S'il a besoin d'un TPMR (Transport de Personnes à Mobilité Réduite), il peut filtrer les véhicules disponibles.</li>
        <li><strong>Remontée d'anomalies :</strong> Un voyant moteur s'allume ? Une rayure sur le pare-choc ? Le conducteur le signale immédiatement, photo à l'appui, alertant ainsi le responsable logistique ou le chef de service.</li>
        <li><strong>Conformité URSSAF :</strong> La distinction entre trajets professionnels (transport d'usagers) et d'éventuels trajets domicile-travail est claire et justifiée.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Gérer une flotte associative nécessite de la rigueur. En modernisant cet aspect logistique, vous libérez du temps pour vos équipes encadrantes qui peuvent enfin se recentrer sur le cœur de leur mission : l'accompagnement humain.</p>
    `,
    date: "10 Mars 2024",
    author: "Équipe Floticar",
    category: "Médico-social",
    readTime: "6 min",
  },
  {
    title: "Fin de la vignette verte : ce qui change pour les flottes d'entreprise",
    slug: "fin-vignette-verte-flottes-entreprise",
    excerpt: "Depuis le 1er avril 2024, la carte verte d'assurance disparaît des pare-brises français. Quelles sont les obligations pour les gestionnaires de parc automobile ?",
    content: `
      <h2>Une petite révolution dans la paperasse automobile</h2>
      <p>C'est une page qui se tourne pour tous les conducteurs français. Depuis le 1er avril 2024, le fameux papillon vert, que l'on devait laborieusement détacher et glisser dans la pochette plastique de son pare-brise, disparaît définitivement. Cette mesure de dématérialisation, attendue depuis longtemps, concerne bien évidemment les flottes d'entreprises.</p>
      
      <h2>Que dit exactement la nouvelle réglementation ?</h2>
      <p>Il n'est plus obligatoire de présenter une attestation d'assurance papier lors d'un contrôle routier en France, ni d'apposer la vignette sur le véhicule. Désormais, les forces de l'ordre vérifient la validité de votre contrat d'assurance directement via le <strong>Fichier des Véhicules Assurés (FVA)</strong>. Ce fichier, mis à jour par les compagnies d'assurance en moins de 72 heures après la souscription d'un contrat, centralise l'état d'assurance des quelque 50 millions de véhicules immatriculés dans l'Hexagone.</p>
      
      <h2>Fini les oublis, bonjour la tranquillité... mais avec quelques bémols</h2>
      <p>Pour le gestionnaire de flotte, c'est une excellente nouvelle : finie la corvée d'envoi annuel des cartes vertes par courrier à tous les collaborateurs, et terminées les amendes pour "non-apposition de la vignette" (qui pouvaient coûter 35€) si le conducteur oubliait de la mettre à jour.</p>
      <p>Cependant, il faut rester vigilant dans certains cas de figure :</p>
      <ul>
        <li><strong>Véhicules neufs ou fraîchement assurés :</strong> Pendant les 72h nécessaires à la mise à jour du FVA, il est fortement recommandé au conducteur de conserver une preuve d'assurance numérique ou papier provisoire.</li>
        <li><strong>Déplacements à l'étranger :</strong> La disparition de la carte verte ne s'applique que sur le territoire français (et dans l'espace économique européen par équivalence). Pour se rendre dans certains pays (comme le Maroc, la Tunisie, la Turquie...), la présentation de l'attestation internationale d'assurance auto (IMIC) reste obligatoire en version papier.</li>
      </ul>
      
      <h2>Le rôle central du "Mémo Véhicule Assuré"</h2>
      <p>En remplacement de la carte verte, les assureurs délivrent désormais un document appelé "Mémo Véhicule Assuré". Bien qu'il ne soit pas formellement exigé lors d'un contrôle routier en France, ce mémo contient des informations cruciales (numéro de police, coordonnées de l'assistance). Il est absolument indispensable de l'avoir sous la main pour remplir un constat amiable en cas d'accident de la circulation.</p>
      
      <h2>Comment Floticar vous accompagne dans cette transition ?</h2>
      <p>La dématérialisation nécessite une organisation interne différente. Avec un logiciel comme Floticar, vous pouvez importer le "Mémo Véhicule Assuré" (format PDF) directement dans le dossier numérique de la voiture. Le conducteur a ainsi accès à tout moment à ses informations d'assurance et au numéro d'assistance depuis l'application mobile, en cas d'accrochage. Une transition digitale en toute sécurité !</p>
    `,
    date: "2 Avril 2024",
    author: "Équipe Floticar",
    category: "Législation",
    readTime: "6 min",
  },
  {
    title: "Fiscalité automobile en 2024 : TVS, bonus écologique et avantages en nature",
    slug: "fiscalite-automobile-2024-tvs-bonus-avantages-nature",
    excerpt: "La fiscalité des flottes d'entreprise évolue. Tour d'horizon des nouvelles règles concernant les taxes sur l'affectation des véhicules à des fins économiques (ex-TVS) et les bonus écologiques.",
    content: `
      <h2>Adieu la TVS, bonjour aux nouvelles taxes annuelles</h2>
      <p>La fiscalité automobile d'entreprise est un véritable casse-tête comptable. L'historique Taxe sur les Véhicules de Sociétés (TVS) a officiellement disparu, ou plutôt, elle s'est métamorphosée. Elle est désormais remplacée par deux taxes distinctes regroupées sous l'appellation "Taxes sur l'affectation des véhicules à des fins économiques" :</p>
      <ul>
        <li><strong>La taxe annuelle sur les émissions de CO2 :</strong> Son barème s'est fortement durci en 2024, pénalisant lourdement les véhicules thermiques très émetteurs.</li>
        <li><strong>La taxe annuelle sur les émissions de polluants atmosphériques :</strong> Anciennement basée sur le type de carburant, elle sanctionne désormais principalement l'âge du véhicule et sa motorisation (notamment les anciens diesels).</li>
      </ul>
      <p>Calculer ces taxes exige d'avoir des informations précises sur chaque véhicule (taux d'émission WLTP, date de première immatriculation, type de motorisation). Un logiciel de gestion centralisant les données des cartes grises permet d'automatiser l'export pour le comptable en début d'année.</p>
      
      <h2>Les Avantages en Nature (AEN) : un point de friction lors des contrôles</h2>
      <p>Lorsqu'un collaborateur est autorisé à utiliser son véhicule de fonction pour ses déplacements personnels (le soir, le week-end, pendant ses congés), cela constitue un "Avantage en Nature" (AEN). Cet avantage est soumis à l'impôt sur le revenu et aux cotisations sociales. L'URSSAF y prête une attention très particulière lors de ses contrôles.</p>
      <p>L'AEN peut être calculé de deux manières :</p>
      <ul>
        <li><strong>Au forfait :</strong> Généralement 9% ou 12% du prix d'achat du véhicule (selon si l'entreprise paie le carburant ou non). C'est la méthode la plus simple.</li>
        <li><strong>Au réel :</strong> Basé sur les frais réels (assurance, entretien, amortissement) rapportés au kilométrage personnel. Cette méthode nécessite un relevé rigoureux des kilomètres personnels vs professionnels.</li>
      </ul>
      <p>La rigueur est de mise, car un AEN sous-évalué peut mener à un lourd redressement.</p>
      
      <h2>L'électrification : le dernier refuge fiscal</h2>
      <p>Le message du gouvernement est clair : verdir les flottes d'entreprise. Pour inciter les PME à franchir le pas de l'électrique, plusieurs carottes fiscales demeurent (bien que le bonus écologique pour les entreprises ait été drastiquement revu à la baisse, voire supprimé pour de nombreuses tranches) :</p>
      <ul>
        <li><strong>Exonération des taxes d'affectation :</strong> Les véhicules 100% électriques sont exonérés des deux taxes annuelles mentionnées plus haut.</li>
        <li><strong>Avantage en Nature réduit :</strong> L'AEN d'un véhicule électrique bénéficie d'un abattement temporaire très avantageux (frais d'électricité exclus du calcul, abattement de 50% dans la limite d'un certain plafond).</li>
        <li><strong>Amortissement excédentaire :</strong> Le plafond d'amortissement déductible fiscalement est beaucoup plus élevé pour un VE (30 000 €) que pour un véhicule thermique (souvent plafonné à 9 900 €).</li>
      </ul>
      <p>La transition vers l'électrique demande une analyse fine du TCO (coût total de possession), un exercice que Floticar vous aide à réaliser grâce à une remontée de données exhaustive.</p>
    `,
    date: "25 Avril 2024",
    author: "Équipe Floticar",
    category: "Fiscalité",
    readTime: "8 min",
  },
  {
    title: "Logiciel de gestion de flotte vs Excel : Le moment de basculer",
    slug: "logiciel-gestion-flotte-vs-excel-basculer",
    excerpt: "Vous gérez encore votre parc automobile sur un tableur ? Découvrez les signes qui prouvent qu'il est temps de digitaliser votre gestion pour gagner en temps et en sécurité.",
    content: `
      <h2>L'illusion de la gratuité d'Excel</h2>
      <p>Lorsqu'une entreprise possède 2, 3, voire 5 véhicules, un bon vieux fichier Excel semble être la solution parfaite. Il est gratuit, tout le monde sait s'en servir, et il permet de faire un suivi de base. Cependant, l'illusion de la gratuité se dissipe très vite lorsque la flotte s'agrandit.</p>
      <p>À partir de 10 véhicules, le tableur devient un fardeau administratif. Les cellules se dérèglent, les différentes versions du fichier circulent par email (fichier_flotte_V2_FINAL.xlsx), et la saisie de données devient une tâche chronophage pour le responsable administratif. Mais surtout, Excel est passif : il ne vous alerte pas.</p>
      
      <h2>5 signes qui prouvent qu'il faut abandonner Excel</h2>
      <p>Si vous vous reconnaissez dans l'une de ces situations, c'est qu'il est grand temps de digitaliser :</p>
      <ul>
        <li><strong>Vous avez déjà payé une amende majorée :</strong> Ne pas avoir pu désigner le conducteur à temps car l'information était perdue ou non mise à jour.</li>
        <li><strong>Vous avez dépassé le kilométrage d'un contrat de LLD :</strong> Les loueurs facturent au prix fort les kilomètres excédentaires. Sans suivi temps réel, la surprise en fin de contrat est douloureuse.</li>
        <li><strong>Vous avez raté un contrôle technique :</strong> Rouler sans CT valide est une infraction grave qui annule les garanties de l'assurance en cas de sinistre.</li>
        <li><strong>Vous perdez des heures à consolider les factures :</strong> Rapprocher manuellement les factures d'entretien, de carburant et de péage pour calculer le coût réel d'un véhicule.</li>
        <li><strong>Vos conducteurs vous appellent sans cesse :</strong> Pour savoir quel véhicule est disponible, où se trouvent les papiers, ou quoi faire en cas de panne.</li>
      </ul>
      
      <h2>L'automatisation : le moteur de la productivité</h2>
      <p>Le passage à un logiciel SaaS (Software as a Service) comme Floticar transforme complètement la gestion du parc. Le logiciel est <strong>proactif</strong>. Il envoie un email automatique un mois avant la fin d'un contrôle technique. Il signale un dépassement de seuil kilométrique. Il calcule le TCO en temps réel sans aucune formule complexe à écrire.</p>
      
      <h2>La sécurité des données et la conformité RGPD</h2>
      <p>Un autre aspect souvent sous-estimé d'Excel est la sécurité. Les gestionnaires de flotte manipulent des données hautement confidentielles (copies de permis de conduire, adresses personnelles, numéros de téléphone, infractions). Laisser ces données en clair dans un fichier stocké sur un serveur partagé non sécurisé est une violation manifeste du RGPD (Règlement Général sur la Protection des Données).</p>
      <p>Un logiciel métier centralise ces données dans un environnement sécurisé, avec une gestion stricte des droits d'accès. Investir dans un logiciel n'est donc pas une dépense, c'est une protection contre les risques opérationnels et financiers.</p>
    `,
    date: "12 Mai 2024",
    author: "Équipe Floticar",
    category: "Digitalisation",
    readTime: "7 min",
  },
  {
    title: "Pourquoi équiper vos utilitaires d'une solution de gestion connectée ?",
    slug: "equiper-utilitaires-solution-gestion-connectee",
    excerpt: "Artisans et professionnels du BTP, votre flotte d'utilitaires (VUL) est le cœur de votre métier. Voici pourquoi la gestion connectée est votre meilleur allié.",
    content: `
      <h2>L'utilitaire, le véritable outil de production du BTP</h2>
      <p>Pour un artisan (plombier, électricien, chauffagiste) ou une PME du Bâtiment, le Véhicule Utilitaire Léger (VUL) n'est pas seulement un moyen de transport : c'est un atelier roulant, un lieu de stockage et un outil de production indispensable. Un utilitaire immobilisé, c'est un technicien qui ne peut pas travailler, et donc un chiffre d'affaires qui s'évapore immédiatement.</p>
      <p>Pourtant, malgré leur importance stratégique, ces flottes d'utilitaires sont souvent mal gérées. La gestion connectée (télématique) apporte des réponses concrètes à ces problématiques métiers.</p>
      
      <h2>1. Suivi précis et fiabilisé du kilométrage</h2>
      <p>Les utilitaires parcourent des milliers de kilomètres. Remonter le kilométrage en temps réel grâce à un boîtier connecté (OBD) permet de planifier les entretiens de manière millimétrée (vidanges, courroies, freins). Fini le temps perdu à harceler les techniciens pour qu'ils notent leur kilométrage sur une feuille volante le vendredi soir. L'information remonte automatiquement dans le logiciel Floticar.</p>
      
      <h2>2. Lutte contre le vol et sécurité des équipements</h2>
      <p>Le vol d'utilitaires est un fléau massif. Les malfaiteurs ciblent souvent ces véhicules la nuit, attirés par la valeur du matériel (outillage électroportatif, cuivre) stocké à l'intérieur. Une solution connectée permet :</p>
      <ul>
        <li><strong>La géolocalisation en temps réel :</strong> Pour retrouver le véhicule rapidement en cas de vol.</li>
        <li><strong>Le Geofencing (gardiennage virtuel) :</strong> Vous recevez une alerte SMS si le véhicule démarre ou sort d'une zone définie en dehors des heures de travail.</li>
      </ul>
      
      <h2>3. Optimisation des tournées et service client</h2>
      <p>Dans les métiers du dépannage, l'urgence dicte souvent la journée. En ayant une visibilité en temps réel sur la position de votre flotte, le centre d'appel peut identifier instantanément le technicien le plus proche d'un client déclarant une fuite d'eau critique. Vous réduisez ainsi les kilomètres parcourus à vide, vous gagnez du temps, et vous offrez une réactivité exceptionnelle qui fidélise votre clientèle.</p>
      
      <h2>4. Éco-conduite et usure prématurée</h2>
      <p>Un utilitaire est souvent chargé à ras bord (matériaux lourds). Une conduite agressive dans ces conditions entraîne une usure accélérée des freins, de l'embrayage, des pneus, et une surconsommation vertigineuse de carburant. Les données télématiques (couplées aux rapports de Floticar) permettent d'analyser le comportement routier des conducteurs. En identifiant les accélérations brusques ou les freinages secs, vous pouvez instaurer une démarche de prévention et de formation, protégeant ainsi la santé de vos salariés et la durabilité de votre matériel.</p>
    `,
    date: "28 Mai 2024",
    author: "Équipe Floticar",
    category: "Artisans & BTP",
    readTime: "8 min",
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(post => post.slug === slug);
}
