import { motion } from 'framer-motion';
import { Shield, FileText, Lock, Cookie } from 'lucide-react';
import { Card } from '../components/ui/Card';

export function MentionsLegales() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <section className="py-16 bg-gradient-to-br from-[#0A2647] to-[#144272]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <FileText className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mentions Légales
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4">Éditeur du site</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                <strong>NegoPros</strong><br />
                Gérard Pavez<br />
                Toulouse Nord- St Jory<br />
                Email : gerardpavez@gmail.com<br />
                Téléphone : 0614393577
              </p>

              <h2 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4 mt-8">Hébergement</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Ce site est hébergé par Vercel Inc.<br />
                340 S Lemon Ave #4133<br />
                Walnut, CA 91789<br />
                États-Unis
              </p>

              <h2 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4 mt-8">Propriété intellectuelle</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>

              <h2 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4 mt-8">Crédits</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Les photos utilisées sur ce site proviennent de Pexels.com et sont utilisées sous licence libre de droits.
              </p>

              <h2 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4 mt-8">Contact</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Pour toute question concernant le site, vous pouvez nous contacter :<br />
                Par email : gerardpavez@gmail.com<br />
                Par téléphone : 0614393577
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

export function CGV() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <section className="py-16 bg-gradient-to-br from-[#0A2647] to-[#144272]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Shield className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Conditions Générales de Vente
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4">Article 1 - Objet</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Les présentes conditions générales de vente régissent les relations contractuelles entre NegoPros et ses clients
                dans le cadre de la vente de formations, coaching et produits digitaux en négociation.
              </p>

              <h2 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4 mt-8">Article 2 - Prix</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Les prix de nos prestations sont indiqués en euros toutes taxes comprises. NegoPros se réserve le droit de modifier
                ses prix à tout moment, étant entendu que le prix figurant au moment de la commande sera le seul applicable à l'acheteur.
              </p>

              <h2 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4 mt-8">Article 3 - Commande et confirmation</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Toute commande de formation ou de coaching doit faire l'objet d'un devis préalable. La commande devient définitive
                après validation du devis et réception du paiement correspondant.
              </p>

              <h2 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4 mt-8">Article 4 - Paiement</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Le paiement s'effectue par virement bancaire ou par carte bancaire. Pour les formations et coaching, un acompte de 30%
                peut être demandé à la réservation, le solde étant dû avant le début de la prestation.
              </p>

              <h2 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4 mt-8">Article 5 - Droit de rétractation</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Conformément à la législation en vigueur, vous disposez d'un délai de 14 jours pour exercer votre droit de rétractation
                à compter de la date de commande, sauf pour les prestations déjà commencées avec votre accord exprès.
              </p>

              <h2 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4 mt-8">Article 6 - Annulation et report</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Toute annulation doit être notifiée par écrit. En cas d'annulation plus de 15 jours avant la prestation, le remboursement
                est intégral. Entre 15 et 7 jours, 50% du montant sera retenu. Moins de 7 jours avant, aucun remboursement ne sera effectué.
              </p>

              <h2 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4 mt-8">Article 7 - Responsabilité</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                NegoPros s'engage à fournir des prestations de qualité. Toutefois, la responsabilité de NegoPros ne pourra être engagée
                en cas de non-atteinte des objectifs fixés par le client, ces derniers dépendant de nombreux facteurs externes.
              </p>

              <h2 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4 mt-8">Article 8 - Litiges</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Les présentes conditions générales de vente sont soumises au droit français. En cas de litige, les tribunaux français
                seront seuls compétents.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

export function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <section className="py-16 bg-gradient-to-br from-[#0A2647] to-[#144272]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Lock className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Politique de Confidentialité
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4">Collecte des données</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Nous collectons les données personnelles que vous nous fournissez directement lorsque vous :
              </p>
              <ul className="text-gray-600 dark:text-gray-300 mb-6">
                <li>Remplissez un formulaire de contact</li>
                <li>Vous inscrivez à une formation ou un coaching</li>
                <li>Téléchargez des ressources</li>
                <li>Vous abonnez à notre newsletter</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4 mt-8">Utilisation des données</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Vos données personnelles sont utilisées pour :
              </p>
              <ul className="text-gray-600 dark:text-gray-300 mb-6">
                <li>Répondre à vos demandes et questions</li>
                <li>Gérer votre inscription aux formations et coaching</li>
                <li>Vous envoyer des informations sur nos services</li>
                <li>Améliorer nos services et votre expérience utilisateur</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4 mt-8">Protection des données</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès,
                modification, divulgation ou destruction non autorisés.
              </p>

              <h2 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4 mt-8">Partage des données</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Nous ne vendons, n'échangeons ni ne transférons vos données personnelles à des tiers, sauf obligation légale ou
                pour la fourniture de nos services (prestataires de paiement, plateforme d'emailing, etc.).
              </p>

              <h2 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4 mt-8">Vos droits</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="text-gray-600 dark:text-gray-300 mb-6">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification de vos données</li>
                <li>Droit à l'effacement de vos données</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit d'opposition au traitement</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4 mt-8">Contact</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Pour exercer vos droits ou pour toute question concernant le traitement de vos données personnelles,
                contactez-nous à : gerardpavez@gmail.com
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

export function GestionCookies() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <section className="py-16 bg-gradient-to-br from-[#0A2647] to-[#144272]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Cookie className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Gestion des Cookies
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4">Qu'est-ce qu'un cookie ?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, tablette) lors de la visite
                d'un site internet. Il permet de collecter des informations relatives à votre navigation et de vous proposer des
                services adaptés à votre terminal.
              </p>

              <h2 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4 mt-8">Les cookies que nous utilisons</h2>

              <h3 className="text-xl font-bold text-[#0A2647] dark:text-white mb-3 mt-6">Cookies essentiels</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Ces cookies sont nécessaires au fonctionnement du site. Ils permettent de vous authentifier, de sécuriser votre
                navigation et de mémoriser vos préférences (langue, thème sombre/clair, etc.).
              </p>

              <h3 className="text-xl font-bold text-[#0A2647] dark:text-white mb-3 mt-6">Cookies analytiques</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Ces cookies nous permettent de mesurer l'audience du site et d'analyser la navigation des utilisateurs afin
                d'améliorer nos services. Les données collectées sont anonymisées.
              </p>

              <h3 className="text-xl font-bold text-[#0A2647] dark:text-white mb-3 mt-6">Cookies de préférence</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Ces cookies permettent de mémoriser vos choix et préférences pour améliorer votre expérience utilisateur lors
                de vos prochaines visites.
              </p>

              <h2 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4 mt-8">Gestion des cookies</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Vous pouvez à tout moment choisir de désactiver certains cookies. Cependant, la désactivation de certains cookies
                peut impacter le bon fonctionnement du site.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Pour gérer vos préférences de cookies, vous pouvez configurer les paramètres de votre navigateur :
              </p>
              <ul className="text-gray-600 dark:text-gray-300 mb-6">
                <li>Chrome : Paramètres &gt; Confidentialité et sécurité &gt; Cookies</li>
                <li>Firefox : Options &gt; Vie privée et sécurité &gt; Cookies et données de sites</li>
                <li>Safari : Préférences &gt; Confidentialité &gt; Cookies et données de sites web</li>
                <li>Edge : Paramètres &gt; Confidentialité, recherche et services &gt; Cookies</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#0A2647] dark:text-white mb-4 mt-8">Durée de conservation</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Les cookies ont une durée de validité maximale de 13 mois. Au-delà de cette période, votre consentement sera
                à nouveau demandé.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
