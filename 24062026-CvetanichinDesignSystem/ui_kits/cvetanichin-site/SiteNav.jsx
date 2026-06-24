/* Cvetanichin sales-site — top navigation (sticky, blur). */
const { Button } = window.CvetanichinDesignSystem_f4419f;

function SiteNav({ onCta }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector('.kit-scroll');
    const t = el || window;
    const onScroll = () => setScrolled((el ? el.scrollTop : window.scrollY) > 30);
    t.addEventListener('scroll', onScroll, { passive: true });
    return () => t.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={'site-nav' + (scrolled ? ' site-nav--scrolled' : '')}>
      <span className="site-nav__brand">Cvetanichin</span>
      <Button variant="outline" size="sm" onClick={onCta}>Get instant access</Button>
    </nav>
  );
}
window.SiteNav = SiteNav;
