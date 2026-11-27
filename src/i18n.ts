// Site copy per language. English is the default at /, Italian lives under /it.
// Intent and badge names match the app's own strings (lineagree-app locales).
export type Lang = 'en' | 'it';

export const home: Record<Lang, string> = { en: '/', it: '/it' };

export const t = {
  en: {
    skip: 'Skip to content',
    navLabel: 'Main',
    brandLabel: 'Lineagree, home',
    nav: { how: 'How it works', species: 'Species', cta: 'Join the list' },
    switchTo: { label: 'Italiano', short: 'IT' },
    footLabel: 'Useful links',
    foot: [
      ['/privacy', 'Privacy'],
      ['/terms', 'Terms'],
      ['/it/blog', 'Blog (in Italian)', 'it'],
      ['/it/enciclopedia', 'Breed encyclopedia (in Italian)', 'it'],
    ],
    waitlist: {
      label: 'Your email for early access to the app',
      placeholder: 'name@example.com',
      button: 'Join the list',
      hint: 'No spam. We only email you when the app is ready.',
      privacy: ['/privacy', 'How we handle your email'],
      invalid: "That email doesn't look right. Check it and try again.",
      sending: 'Sending…',
      ok: "You're on the list. We'll email you as soon as the app is in the stores.",
      failed: "We couldn't save your email. Please try again in a moment.",
    },
  },
  it: {
    skip: 'Vai al contenuto',
    navLabel: 'Principale',
    brandLabel: 'Lineagree, home',
    nav: { how: 'Come funziona', species: 'Specie', cta: 'Entra in lista' },
    switchTo: { label: 'English', short: 'EN' },
    footLabel: 'Link utili',
    foot: [
      ['/it/blog', 'Blog'],
      ['/it/privacy', 'Privacy'],
      ['/it/termini', 'Termini'],
      ['/it/enciclopedia', 'Enciclopedia delle razze'],
    ],
    waitlist: {
      label: "La tua email per l'accesso anticipato all'app",
      placeholder: 'nome@esempio.it',
      button: 'Entra in lista',
      hint: "Niente spam: ti scriviamo solo quando l'app è pronta.",
      privacy: ['/it/privacy', 'Come trattiamo la tua email'],
      invalid: 'Questa email non sembra valida: controlla e riprova.',
      sending: 'Invio in corso…',
      ok: "Sei in lista. Ti scriviamo appena l'app è sugli store.",
      failed: "Non siamo riusciti a salvare l'email. Riprova tra poco.",
    },
  },
} satisfies Record<Lang, unknown>;
