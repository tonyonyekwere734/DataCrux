import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { type ReactNode, useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { productFamilies, products } from '@/content/site';

const logoSrc = `${import.meta.env.BASE_URL}brand/datacrux-logo.png`;

function BrandMark({ size = 'h-9 w-9' }: { size?: string }) {
  return <img src={logoSrc} alt="" className={`${size} object-contain`} />;
}

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" data-testid="link-brand">
      <BrandMark size="h-9 w-9" />
      <span className={`text-[15px] font-semibold tracking-[.18em] transition-colors group-hover:text-[#8bd8df] ${dark ? 'text-[#f8f7f2]' : 'text-[#172239]'}`}>DATACRUX</span>
    </Link>
  );
}

function NavLink({ href, children, dark = false }: { href: string; children: ReactNode; dark?: boolean }) {
  const [location] = useLocation();
  const active = href === '/' ? location === '/' : location.startsWith(href);
  return (
    <Link href={href} className={`relative py-2 text-sm transition-colors ${dark ? (active ? 'text-[#f8f7f2]' : 'text-[#c8d1d6] hover:text-[#f8f7f2]') : (active ? 'text-[#172239]' : 'text-[#5c6676] hover:text-[#172239]')}`} data-testid={`link-nav-${href.replace(/\//g, '') || 'home'}`}>
      {children}
      {active && <span className="absolute inset-x-0 -bottom-0.5 h-px bg-[#28a8bf]" />}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const darkHero = !scrolled && (location === '/' || location === '/products' || location === '/company' || location.startsWith('/products/'));
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, []);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled ? 'dc-header-glass shadow-[0_8px_30px_rgba(23,34,57,.06)]' : 'bg-transparent'}`}>
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Logo dark={darkHero} />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            <NavLink href="/products" dark={darkHero}>Products</NavLink>
            <NavLink href="/solutions" dark={darkHero}>Solutions</NavLink>
            <NavLink href="/services" dark={darkHero}>Services</NavLink>
            <NavLink href="/company" dark={darkHero}>Company</NavLink>
            <NavLink href="/contact" dark={darkHero}>Contact</NavLink>
          </nav>
          <div className="hidden items-center gap-5 lg:flex">
            <Link href="/contact" className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${darkHero ? 'bg-[#f8f7f2] text-[#172239]' : 'bg-[#172239] text-[#f8f7f2]'}`} data-testid="link-header-contact">Talk to DataCrux <ArrowUpRight size={15} /></Link>
          </div>
          <button className={`flex h-11 w-11 items-center justify-center rounded-full border lg:hidden ${darkHero ? 'border-[#f8f7f2]/30 text-[#f8f7f2]' : 'border-[#172239]/15 text-[#172239]'}`} onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} data-testid="button-mobile-menu">
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </header>
      <div className={`dc-mobile-glass fixed inset-0 z-30 transition-all duration-500 lg:hidden ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="flex h-full flex-col px-6 pb-8 pt-28">
          <p className="font-mono-dc text-[10px] uppercase tracking-[.22em] text-[#8bd8df]">Navigate the ecosystem</p>
          <nav className="mt-8 flex flex-col gap-3" aria-label="Mobile navigation">
            {[
              ['/products', 'Products'],
              ['/solutions', 'Solutions'],
              ['/services', 'Services'],
              ['/company', 'Company'],
              ['/contact', 'Contact'],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="flex items-center justify-between border-b border-[#f8f7f2]/10 py-4 text-3xl text-[#f8f7f2]" data-testid={`link-mobile-${label.toLowerCase()}`}>
                {label}<ArrowUpRight size={20} className="text-[#8bd8df]" />
              </Link>
            ))}
          </nav>
           <Link href="/contact" className="mt-auto inline-flex items-center justify-between rounded-2xl bg-[#28a8bf] px-5 py-4 text-base font-semibold text-[#172239]" data-testid="link-mobile-contact-cta">Talk to DataCrux <ArrowUpRight size={18} /></Link>
        </div>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer className="dc-footer-glass text-[#f8f7f2]">
      <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_.6fr_.6fr]">
          <div>
            <div className="flex items-center gap-3">
              <BrandMark size="h-10 w-10" />
              <span className="text-[15px] font-semibold tracking-[.18em]">DATACRUX</span>
            </div>
             <p className="mt-7 max-w-sm text-2xl leading-snug text-[#d8e0df]">Technology and business systems for how ambition moves.</p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#8bd8df] hover:text-[#f8f7f2]" data-testid="link-footer-contact">Talk to DataCrux <ArrowUpRight size={15} /></Link>
          </div>
          <div>
            <p className="font-mono-dc text-[10px] uppercase tracking-[.2em] text-[#83a0ab]">Explore</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-[#c8d1d6]">
              <Link href="/products" data-testid="link-footer-products">Products</Link><Link href="/solutions" data-testid="link-footer-solutions">Solutions</Link><Link href="/services" data-testid="link-footer-services">Services</Link><Link href="/company" data-testid="link-footer-company">Company</Link>
            </div>
          </div>
          <div>
            <p className="font-mono-dc text-[10px] uppercase tracking-[.2em] text-[#83a0ab]">Product families</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-[#c8d1d6]">{productFamilies.map((family) => <Link key={family.slug} href={`/products/${family.slug}`} data-testid={`link-footer-family-${family.slug}`}>{family.name}</Link>)}</div>
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-3 border-t border-[#f8f7f2]/10 pt-5 text-xs text-[#83a0ab] sm:flex-row"><span>© {new Date().getFullYear()} DataCrux</span><span>Decode. Discover. Dominate.</span></div>
      </div>
    </footer>
  );
}

export function PageFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`dc-noise min-h-[100dvh] overflow-hidden bg-[#f8f7f2] text-[#172239] ${className}`}><SiteHeader />{children}<Footer /></div>;
}

export function SectionIntro({ kicker, title, body, dark = false }: { kicker: string; title: string; body?: string; dark?: boolean }) {
  return <div className={`max-w-3xl ${dark ? 'text-[#f8f7f2]' : 'text-[#172239]'}`}><p className={`font-mono-dc text-[10px] uppercase tracking-[.22em] ${dark ? 'text-[#8bd8df]' : 'text-[#1f91a8]'}`}>{kicker}</p><h2 className="mt-5 text-balance text-4xl leading-[.98] tracking-[-.04em] sm:text-6xl">{title}</h2>{body && <p className={`mt-6 max-w-xl text-lg leading-relaxed ${dark ? 'text-[#c8d1d6]' : 'text-[#5c6676]'}`}>{body}</p>}</div>;
}

export function ArrowLink({ href, children, light = false, external = false }: { href: string; children: ReactNode; light?: boolean; external?: boolean }) {
  const className = `inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3 ${light ? 'text-[#8bd8df]' : 'text-[#172239]'}`;
  if (external) return <a href={href} target="_blank" rel="noreferrer" className={className} data-testid={`link-external-${String(children).toLowerCase().replace(/\s+/g, '-')}`}>{children}<ArrowUpRight size={15} /></a>;
  return <Link href={href} className={className} data-testid={`link-arrow-${String(children).toLowerCase().replace(/\s+/g, '-')}`}>{children}<ArrowUpRight size={15} /></Link>;
}

export function ProductVisual({ product, large = false }: { product: typeof products[number]; large?: boolean }) {
  return <div className={`dc-glass dc-visual-glass relative overflow-hidden rounded-[2rem] ${large ? 'min-h-[420px] sm:min-h-[560px]' : 'min-h-[260px]'}`} style={{ background: `linear-gradient(135deg, color-mix(in srgb, ${product.accent} 26%, transparent), rgba(248,247,242,.72) 72%), linear-gradient(145deg, ${product.accentSoft}, #f8f7f2)` }}>
    <div className="absolute inset-0 opacity-50" style={{ backgroundImage: `radial-gradient(circle at 70% 25%, ${product.accent} 0, transparent 2px), linear-gradient(120deg, transparent 0 48%, ${product.accent}20 48% 48.5%, transparent 48.5% 100%)`, backgroundSize: '24px 24px, 100% 100%' }} />
    <div className="absolute right-[-15%] top-[13%] h-[74%] w-[74%] rounded-full border" style={{ borderColor: `${product.accent}70`, transform: 'rotate(-24deg)' }} />
    <div className="absolute right-[2%] top-[24%] h-[48%] w-[48%] rounded-full border" style={{ borderColor: `${product.accent}55`, transform: 'rotate(18deg)' }} />
    <div className="absolute bottom-8 left-8 max-w-[16rem]"><span className="font-mono-dc text-[10px] uppercase tracking-[.2em]" style={{ color: product.accent }}>DataCrux / {product.name}</span><p className="mt-3 text-xl leading-tight text-[#172239]">{product.visual}</p></div>
    <div className="absolute right-8 top-8 h-3 w-3 rounded-full" style={{ background: product.accent, boxShadow: `0 0 0 8px ${product.accent}22` }} />
  </div>;
}