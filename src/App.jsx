import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Collections from './components/Collections';
import Gallery from './components/Gallery';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/variables.css';

const data = {
  nav: {
    logoText: "IV",
    links: [
      { label: 'About', href: '#about' },
      { label: 'Collections', href: '#collections' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Contact', href: '#contact' }
    ],
    social: [
      { label: 'Instagram', href: 'https://instagram.com/isabellavoss' },
      { label: 'TikTok', href: 'https://tiktok.com/@isabellavoss' }
    ]
  },
  hero: {
    subtitle: 'Fashion Designer',
    title: 'Isabella Voss',
    tagline: 'Where Art Meets Elegance',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1920&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&q=80'
    ]
  },
  about: {
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
    label: 'The Designer',
    title: 'Crafting ',
    accentText: 'Elegance',
    description: "With over a decade of experience in haute couture, Isabella Voss has established herself as a visionary in the fashion world. Her work bridges the gap between classical artistry and contemporary minimalism, creating pieces that transcend seasons and trends.",
    signature: 'Isabella Voss'
  },
  collections: {
    label: 'Collections',
    title: 'Runway & Beyond',
    items: [
      {
        id: 1,
        name: 'Nocturne',
        year: '2025',
        description: 'A journey through midnight hues and silk whispers',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80'
      },
      {
        id: 2,
        name: 'Ethereal Dawn',
        year: '2024',
        description: 'Capturing the delicate beauty of first light',
        image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80'
      },
      {
        id: 3,
        name: 'Bloom',
        year: '2024',
        description: 'Floral narratives woven into wearable art',
        image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80'
      }
    ]
  },
  gallery: {
    label: 'Portfolio',
    title: 'Art in Motion',
    items: [
      { id: 1, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', alt: 'Fashion editorial' },
      { id: 2, src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80', alt: 'Runway moment' },
      { id: 3, src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80', alt: 'Evening gown' },
      { id: 4, src: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80', alt: 'Collection detail' },
      { id: 5, src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80', alt: 'Fabric study' },
      { id: 6, src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80', alt: 'Artistic silhouette' }
    ]
  },
  philosophy: {
    quote: "Fashion is not just about clothing. It's about the story you tell when you walk into a room, the confidence that comes from knowing who you are.",
    signature: "— Isabella Voss"
  },
  contact: {
    label: 'Get in Touch',
    title: 'Let\'s Create Together',
    text: 'Whether you\'re interested in a custom commission, collaboration, or simply want to discuss the artistry behind fashion, I\'d love to hear from you.',
    email: 'studio@isabellavoss.com'
  },
  footer: {
    logo: 'Isabella Voss',
    description: 'Creating wearable art that transcends fashion norms. Each piece tells a story, each collection is a journey through beauty and expression.',
    navLinks: [
      { label: 'About', href: '#about' },
      { label: 'Collections', href: '#collections' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Contact', href: '#contact' },
      { label: 'Press', href: '#press' }
    ],
    socialLinks: [
      { label: 'Instagram', href: 'https://instagram.com/isabellavoss' },
      { label: 'TikTok', href: 'https://tiktok.com/@isabellavoss' },
      { label: 'Pinterest', href: 'https://pinterest.com/isabellavoss' }
    ],
    copyright: '© 2026 Isabella Voss. All rights reserved.',
    legalLinks: [
      { label: 'Privacy', href: '#privacy' },
      { label: 'Terms', href: '#terms' }
    ]
  }
};

function App() {
  return (
    <>
      <Nav
        logoText={data.nav.logoText}
        links={data.nav.links}
        social={data.nav.social}
      />

      <main>
        <Hero
          subtitle={data.hero.subtitle}
          title={data.hero.title}
          tagline={data.hero.tagline}
          images={data.hero.images}
        />

        <About
          image={data.about.image}
          label={data.about.label}
          title={data.about.title}
          accentText={data.about.accentText}
          description={data.about.description}
          signature={data.about.signature}
        />

        <Collections
          label={data.collections.label}
          title={data.collections.title}
          collections={data.collections.items}
        />

        <Gallery
          label={data.gallery.label}
          title={data.gallery.title}
          items={data.gallery.items}
        />

        <Philosophy
          quote={data.philosophy.quote}
          signature={data.philosophy.signature}
        />

        <Contact
          label={data.contact.label}
          title={data.contact.title}
          text={data.contact.text}
          email={data.contact.email}
        />
      </main>

      <Footer
        logo={data.footer.logo}
        description={data.footer.description}
        navLinks={data.footer.navLinks}
        socialLinks={data.footer.socialLinks}
        copyright={data.footer.copyright}
        legalLinks={data.footer.legalLinks}
      />
    </>
  );
}

export default App;