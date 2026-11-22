module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://lineagree.vercel.app/</loc><priority>1.0</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://lineagree.vercel.app/blog</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://lineagree.vercel.app/blog/come-leggere-un-pedigree</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://lineagree.vercel.app/blog/distanza-geografica-accoppiamento</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://lineagree.vercel.app/blog/enci-anfi-unire-enti-riconoscimento</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://lineagree.vercel.app/blog/profilo-perfetto-lineagree</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://lineagree.vercel.app/blog/carpe-koi-pedigree-acqua</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://lineagree.vercel.app/blog/allevamento-selettivo-responsabile</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
</urlset>`);
};
