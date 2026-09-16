// Lightweight portfolio cache layer. The homepage can load this first and refresh GitHub in the background.
(function(){
  window.PORTFOLIO_CACHE_KEY='laxman-portfolio-cache-v1';
  window.PortfolioCache={
    read:function(){try{return JSON.parse(localStorage.getItem(window.PORTFOLIO_CACHE_KEY)||'null')}catch(e){return null}},
    write:function(data){try{localStorage.setItem(window.PORTFOLIO_CACHE_KEY,JSON.stringify({savedAt:Date.now(),data:data}))}catch(e){}},
    age:function(c){return c&&c.savedAt?Date.now()-c.savedAt:Infinity}
  };
})();
