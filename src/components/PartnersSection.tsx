'use client';

const partners = [
  { name: 'Travel + Leisure', logo: 'T+L' },
  { name: 'Forbes Travel', logo: 'FORBES' },
  { name: 'USA Today', logo: 'USA TODAY' },
  { name: 'The New York Times', logo: 'NYT' },
  { name: 'Condé Nast', logo: 'CN' },
];

export default function PartnersSection() {
  return (
    <section className="py-12 bg-muted/20 border-y border-border">
      <div className="container-custom">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            As Featured In
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-muted-foreground/60 font-bold text-xl md:text-2xl tracking-tight hover:text-muted-foreground transition-colors"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {partner.logo}
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <p className="text-xs text-muted-foreground">
            Trusted by leading travel publications and thousands of families nationwide
          </p>
        </div>
      </div>
    </section>
  );
}
