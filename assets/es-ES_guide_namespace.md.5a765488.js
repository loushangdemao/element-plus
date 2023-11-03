import{o as a,c as t,b as s,a as o,d as n,e as p,_ as c}from"./app.a9e43d78.js";const l=s("h2",{id:"espacio-de-nombres-personalizado",tabindex:"-1"},[n("Espacio de nombres personalizado "),s("span",{class:"vp-tag"},"2.2.0"),n(),s("a",{class:"header-anchor vp-link",href:"#espacio-de-nombres-personalizado","aria-hidden":"true"},"#")],-1),i={class:"tip custom-block"},r=s("p",{class:"custom-block-title"},"TIP",-1),u=n("Le proporcionamos un ejemplo en "),d={href:"https://github.com/element-plus/element-plus-vite-starter",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},k=n("element-plus-vite-starter"),m=n(". Simplemente compru\xE9belo."),_=p(`<p>El espacio de nombres predeterminado es <code>el</code>. En casos especiales, es posible que necesitemos personalizar el espacio de nombres.</p><p>Ya que usamos sass para escribir estilos, puede personalizar todos los espacios de nombres. Tenemos que asumir que usted ya utiliza sass.</p><p>Debe establecer <code>ElConfigProvider</code> y scss <code>$namespace</code> al mismo tiempo.</p><h3 id="establecer-elconfigprovider" tabindex="-1">Establecer <code>ElConfigProvider</code> <a class="header-anchor vp-link" href="#establecer-elconfigprovider" aria-hidden="true">#</a></h3><p>Utilice <code>ElConfigProvider</code> para envolver su componente ra\xEDz.</p><div class="language-vue"><pre><code><span class="token comment">&lt;!-- App.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-config-provider</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ep<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ... --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-config-provider</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="establecer-scss-variables-css" tabindex="-1">Establecer Scss &amp; variables Css <a class="header-anchor vp-link" href="#establecer-scss-variables-css" aria-hidden="true">#</a></h3><p>Debe crear <code>styles/element/index.scss</code>:</p><div class="language-scss"><pre><code><span class="token comment">// styles/element/index.scss</span>
<span class="token comment">// we can add this to custom namespace, default is &#39;el&#39;</span>
<span class="token keyword">@forward</span> <span class="token string">&#39;element-plus/theme-chalk/src/mixins/config.scss&#39;</span> <span class="token module-modifier keyword">with</span> <span class="token punctuation">(</span>
  <span class="token property"><span class="token variable">$namespace</span></span><span class="token punctuation">:</span> <span class="token string">&#39;ep&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
</code></pre></div><p>Importar <code>styles/element/index.scss</code> en <code>vite.config.ts</code>:</p><blockquote><p>Lo mismo es v\xE1lido para webpack, que debe establecerse en <code>preprocessorOptions</code>.</p></blockquote><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  css<span class="token operator">:</span> <span class="token punctuation">{</span>
    preprocessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      scss<span class="token operator">:</span> <span class="token punctuation">{</span>
        additionalData<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@use &quot;~/styles/element/index.scss&quot; as *;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>Eso es todo.</p>`,13),E='{"title":"Custom Namespace","description":"","frontmatter":{"title":"Custom Namespace","lang":"es-ES"},"headers":[{"level":2,"title":"Espacio de nombres personalizado ^(2.2.0)","slug":"espacio-de-nombres-personalizado"},{"level":3,"title":"Establecer ElConfigProvider","slug":"establecer-elconfigprovider"},{"level":3,"title":"Establecer Scss & variables Css","slug":"establecer-scss-variables-css"}],"relativePath":"es-ES/guide/namespace.md","lastUpdated":null}',g={},x=Object.assign(g,{__name:"namespace",setup(b){return(v,h)=>{const e=c;return a(),t("div",null,[l,s("div",i,[r,s("p",null,[u,s("a",d,[k,o(e,{class:"link-icon"})]),m])]),_])}}});export{E as __pageData,x as default};
