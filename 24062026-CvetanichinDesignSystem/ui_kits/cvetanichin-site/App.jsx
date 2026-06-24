/* Cvetanichin sales-site — app shell: sales page ↔ checkout. */
function App() {
  const [view, setView] = React.useState('sales'); // 'sales' | 'checkout'
  const scrollRef = React.useRef(null);

  const goCheckout = () => { setView('checkout'); if (scrollRef.current) scrollRef.current.scrollTop = 0; };
  const goSales = () => { setView('sales'); if (scrollRef.current) scrollRef.current.scrollTop = 0; };

  return (
    <div className="kit-scroll" ref={scrollRef}>
      {view === 'sales' ? (
        <React.Fragment>
          <SiteNav onCta={goCheckout} />
          <Hero onCta={goCheckout} />
          <SalesBody onCta={goCheckout} />
        </React.Fragment>
      ) : (
        <Checkout onBack={goSales} />
      )}
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
