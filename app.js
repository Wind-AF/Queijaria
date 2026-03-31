// ===== PRODUCT DATA =====
const PRODUCTS = {
  featured: [
    { id: 1, name: "Kit Best Seller – 11 Tipos de Queijos + Vinho Malbec Brinde", oldPrice: 249.90, price: 79.90, discount: 68, img: "assets/1-bods6k7zfl.png", category: "kit", description: "O kit mais vendido da nossa queijaria! 11 tipos de queijos artesanais selecionados, acompanhados de um vinho Malbec de brinde. Perfeito para presentear ou para uma degustação especial.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=5f82b21a-2c68-11f1-b2a5-46da4690ad53" },
    { id: 2, name: "Caixa de Presente com os 8 Melhores Queijos Artesanais Brasileiros + Geléia + Grissini", oldPrice: 189.90, price: 103.90, discount: 45, img: "assets/cesta_presenta_tabua_de_queijos2-8ygt75n6s5.jpg", category: "kit", description: "Seleção premium com os 8 melhores queijos artesanais do Brasil, acompanhados de geléia artesanal e grissini crocante.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=b15c58bf-2c68-11f1-b2a5-46da4690ad53" },
    { id: 3, name: "Cesta de Presente – 2 Queijos + Copa Artesanal + Vinho Cabernet Sauvignon", oldPrice: 159.90, price: 89.90, discount: 44, img: "assets/photo_wine_copa_cheese.jpg", category: "cesta", description: "Cesta elegante com 2 queijos artesanais, copa defumada e vinho Cabernet Sauvignon. Ideal para ocasiões especiais.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=e8185cdf-2c68-11f1-b2a5-46da4690ad53" },
    { id: 4, name: "Cesta de Presente – 2 Queijos + Vinho Branco + Geléia", oldPrice: 139.90, price: 79.90, discount: 43, img: "assets/kit_de_queijos_3-c2xr5w265l_0ab40da0-8f99-42bf-a956-646f22e64d96.png", category: "cesta", description: "Combinação sofisticada de 2 queijos selecionados com vinho branco e geléia artesanal.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=1b45132e-2c69-11f1-b2a5-46da4690ad53" },
    { id: 5, name: "Cesta de Presente – 2 Queijos Meia Cura + Salame e Cerveja Artesanal", oldPrice: 149.90, price: 85.90, discount: 43, img: "assets/cesta_presente_especial_queijos_169f0935-4713-48d2-a679-0b24bff6f7e9.png", category: "cesta", description: "Queijos meia cura com salame artesanal e cerveja craft. Perfeito para quem ama a combinação de sabores intensos.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=5bb85a51-2c69-11f1-b2a5-46da4690ad53" },
    { id: 6, name: "Cesta de Presente – 2 Queijos + Goiabada Jatiboca + Doce de Leite", oldPrice: 139.90, price: 79.90, discount: 43, img: "assets/cesta_presente_especial_queijos3_53927a60-bc5e-4ee8-8aab-0089ec775461.png", category: "cesta", description: "O clássico mineiro! Queijos artesanais com goiabada Jatiboca e doce de leite cremoso.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=fa383970-2c69-11f1-b2a5-46da4690ad53" },
    { id: 7, name: "Cesta de Presente – 3 Queijos + Cerveja Artesanal", oldPrice: 159.90, price: 91.90, discount: 43, img: "assets/cesta_presente_especial_queijos2_205e7f7f-332c-46b7-a4bb-4bc6ffc4e8b5.png", category: "cesta", description: "Trio de queijos selecionados com cerveja artesanal premium.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=6954595d-2c6a-11f1-b2a5-46da4690ad53" },
    { id: 8, name: "Cesta de Presente – 3 Queijos Artesanais + Charcutaria + Vinho", oldPrice: 179.90, price: 99.90, discount: 44, img: "assets/cesta_presente_Queijos_20_1_8696fa5c-cf99-4fd5-84b0-c5a69c3198a0.png", category: "cesta", description: "3 queijos artesanais com charcutaria premium e vinho Cabernet Sauvignon.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=a1f1d1d5-2c6a-11f1-b2a5-46da4690ad53" },
    { id: 9, name: "Cesta de Presente – 3 Queijos Suaves + Goiabada Cremosa + Doce de Leite", oldPrice: 139.90, price: 79.90, discount: 43, img: "assets/kit_de_queijos_2-svjmk4t2wn.png", category: "cesta", description: "Queijos suaves ideais para quem prefere sabores delicados, com goiabada cremosa e doce de leite.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=e579bd12-2c6a-11f1-b2a5-46da4690ad53" },
    { id: 10, name: "Cesta de Presente – 4 Queijos + Charcutaria + Grissini", oldPrice: 179.90, price: 103.90, discount: 42, img: "assets/cesta_presente_e-w1zeyvkoiq_8ba0aa8b-0451-498d-a7ea-58bcc737c06c.png", category: "cesta", description: "Kit completo com 4 queijos, charcutaria artesanal e grissini crocante.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=4343227e-2c6b-11f1-b2a5-46da4690ad53" },
    { id: 11, name: "Cesta de Presente – 6 Queijos + Charcutaria + Goiabada + Mel + Pâté + Licor de Jabuticaba", oldPrice: 249.90, price: 139.90, discount: 44, img: "assets/98b8c0a920.jpg", category: "cesta", description: "Nossa cesta mais completa! 6 queijos artesanais com acompanhamentos gourmet e licor de jabuticaba.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=7d906865-2c6b-11f1-b2a5-46da4690ad53" },
    { id: 12, name: "Cesta de Presente – Momento Perfeito", oldPrice: 169.90, price: 95.90, discount: 44, img: "assets/cesta_presente_e-lje6b4gt9h.png", category: "cesta", description: "A cesta perfeita para criar momentos inesquecíveis. Seleção especial de queijos e bebidas.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=b2a27958-2c6b-11f1-b2a5-46da4690ad53" },
    { id: 13, name: "Tábua Presente – 4 Queijos Cremosos + Grissini + Geléia", oldPrice: 149.90, price: 85.90, discount: 43, img: "assets/cesta_presente_especial_queijos9.1_5bc5f0ce-1a30-4d18-828d-c217b49cc1bb.png", category: "cesta", description: "Tábua de apresentação com 4 queijos cremosos, grissini e geléia artesanal.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=db70a6b0-2c6b-11f1-b2a5-46da4690ad53" },
    { id: 14, name: "Cesta De Presente 2 Queijos Cremosos + Mel Cremoso + Nuts + Geléia", oldPrice: 139.90, price: 79.90, discount: 43, img: "assets/cesta_presente1_01f34bc1-c52b-4ab4-a823-d6caca81d0f7.png", category: "cesta", description: "Queijos cremosos acompanhados de mel, nuts selecionadas e geléia artesanal.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=fbbfe426-2c6b-11f1-b2a5-46da4690ad53" },
    { id: 15, name: "Cesta De Presente 3 Queijos + Vinho Merlot + Copa + Antepasto", oldPrice: 179.90, price: 99.90, discount: 44, img: "assets/kit_de_queijos_13-huuxyx6gd4_32be9f1a-e532-4e78-849d-08319e0ef81a.png", category: "cesta", description: "Trio de queijos com vinho Merlot, copa artesanal e antepasto caseiro.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=71446e87-2c6c-11f1-b2a5-46da4690ad53" },
    { id: 16, name: "Cesta de Presente 3 Queijos Meia Cura + 2 Charcutarias + Geléia", oldPrice: 169.90, price: 95.90, discount: 44, img: "assets/cesta_de_presente_com_queijos_-_charcutaria-tfvg9ibvy9_87d900fe-296d-4909-8913-e1cbea2eb67f.png", category: "cesta", description: "Queijos meia cura com dupla de charcutaria premium e geléia artesanal.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=9db121d6-2c6c-11f1-b2a5-46da4690ad53" },
    { id: 17, name: "Cesta de Presente Especial – 2 Queijos Cremosos + Geléia + Grissini", oldPrice: 129.90, price: 75.90, discount: 42, img: "assets/cesta_presente_especial_queijos4_3a5478e1-1a1c-4907-a1fb-7939a657f5eb.png", category: "cesta", description: "Cesta especial com queijos cremosos, geléia de frutas e grissini.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=d9a9573f-2c6c-11f1-b2a5-46da4690ad53" },
    { id: 18, name: "Cesta de Presente Mineira – 3 Queijos + Goiabada + Doce de Leite + Charcutaria", oldPrice: 179.90, price: 99.90, discount: 44, img: "assets/cesta_de_presente_com_queijos_-_charcutaria_-_doces-wi7151qpwb_8e76ec81-02fc-49b9-a5da-f5616bb3025b.png", category: "cesta", description: "O melhor de Minas! Queijos artesanais com goiabada, doce de leite e charcutaria.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=09a7c817-2c6d-11f1-b2a5-46da4690ad53" },
    { id: 19, name: "Cesta de Presente Queijo + Vinho + Charcutaria", oldPrice: 159.90, price: 91.90, discount: 43, img: "assets/kit_de_queijos_3-c2xr5w265l_0ab40da0-8f99-42bf-a956-646f22e64d96.png", category: "cesta", description: "A combinação clássica: queijo, vinho e charcutaria artesanal.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=362aac3a-2c6d-11f1-b2a5-46da4690ad53" },
    { id: 20, name: "Cesta de Presente – 3 Queijos com Vinho Rosé", oldPrice: 159.90, price: 89.90, discount: 44, img: "assets/kit_de_queijos_8-a2ket06fzm_f00520a9-559e-4f28-903a-465e829934ce.png", category: "cesta", description: "Trio de queijos acompanhados de vinho rosé, perfeito para momentos de celebração.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=81f2d89c-2c6d-11f1-b2a5-46da4690ad53" },
    { id: 21, name: "Kit 3 Manteigas 500g (Real + Turvo + Patricia)", oldPrice: 89.90, price: 49.90, discount: 44, img: "assets/ChatGPT-Image-14-de-mai.-de-2025-18_22_21-600x600_480358ee-8bb9-4381-b51f-ef66acdce337.png", category: "kit", description: "Kit com 3 manteigas artesanais de 500g cada: Real, Turvo e Patricia.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=269a515a-2c6e-11f1-b2a5-46da4690ad53" },
    { id: 22, name: "Kit Degustação – Avançado", oldPrice: 199.90, price: 109.90, discount: 45, img: "assets/photo_cheeses_variety.jpg", category: "kit", description: "Kit degustação para conhecedores com queijos de maturação longa e sabores complexos.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=4b6f4913-2c6e-11f1-b2a5-46da4690ad53" },
    { id: 23, name: "Kit Degustação – Iniciante", oldPrice: 129.90, price: 71.90, discount: 45, img: "assets/ca918f58a2fdb9db6fa16518a013bd67_a42d2b90-882d-4166-8f69-8d9b62de1b46.jpg", category: "kit", description: "Kit perfeito para começar sua jornada na degustação de queijos artesanais.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=81190820-2c6e-11f1-b2a5-46da4690ad53" },
    { id: 24, name: "Kit Degustação – Intermediário", oldPrice: 159.90, price: 89.90, discount: 44, img: "assets/782bef395b7fd531c6613142ddf2d9ff_81f3894d-49ab-4ea9-b28c-b39995c0d914.jpg", category: "kit", description: "Kit degustação com queijos de complexidade intermediária. O próximo passo na sua jornada.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=e41ec9b8-2c6e-11f1-b2a5-46da4690ad53" },
    { id: 25, name: "Kit Entre Amigos e Queijos", oldPrice: 189.90, price: 109.90, discount: 42, img: "assets/333ffbabcaa96f8b83dceb82e8bb5360_d7948a5e-adb0-4cb7-8613-73b79291bff9.jpg", category: "kit", description: "Kit ideal para reunir os amigos e compartilhar bons momentos com queijos artesanais.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=3236d01c-2c6f-11f1-b2a5-46da4690ad53" },
    { id: 26, name: "Kit Lampião & Maria Bonita – Queijo Meia Cura + Doce de Leite", oldPrice: 79.90, price: 45.90, discount: 43, img: "assets/f6ac245ea9bcb3861ad32158ff708f2c_909aae08-c498-4258-a60f-04693b060e9e.jpg", category: "kit", description: "Homenagem nordestina: queijo meia cura Troço Bom com doce de leite artesanal.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=66be494f-2c6f-11f1-b2a5-46da4690ad53" },
    { id: 27, name: "Kit Mofos Nobres", oldPrice: 169.90, price: 95.90, discount: 44, img: "assets/313490aecc3078a5897b1f0dc2b82ed2_ab76917f-c204-47dd-94fe-ea4a1d925b9d.jpg", category: "kit", description: "Para os apreciadores de queijos com mofos nobres. Seleção de queijos azuis e brie.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=b47f4d70-2c6f-11f1-b2a5-46da4690ad53" },
    { id: 28, name: "Kit Romeu e Julieta", oldPrice: 89.90, price: 49.90, discount: 44, img: "assets/photo_romeu_julieta.jpg", category: "kit", description: "O clássico Romeu e Julieta: queijo com goiabada. Simples e irresistível.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=e3592064-2c6f-11f1-b2a5-46da4690ad53" },
    { id: 29, name: "Kit Romeu e Julieta (1kg Queijo Borbinha + 1kg Goiabada da Roça)", oldPrice: 109.90, price: 59.90, discount: 45, img: "assets/photo_borbinha_goiabada.jpg", category: "kit", description: "Versão tamanho família! 1kg de queijo Borbinha com 1kg de goiabada da roça.", checkoutUrl: "https://checkout.mktlaures.com/checkout?product=152e09dd-2c70-11f1-b2a5-46da4690ad53" },
  ],
  
};

// ===== CART STATE =====
let cart = JSON.parse(localStorage.getItem('queijaria_cart')) || [];

function saveCart() {
  localStorage.setItem('queijaria_cart', JSON.stringify(cart));
}

function getProduct(id) {
  return [...PRODUCTS.featured, ...(PRODUCTS.complementos || [])].find(p => p.id === id);
}

// ===== FORMAT CURRENCY =====
function formatBRL(val) {
  return 'R$ ' + val.toFixed(2).replace('.', ',');
}

function formatInstallment(price) {
  const inst = (price / 10).toFixed(2).replace('.', ',');
  return `10x de <strong>R$ ${inst}</strong>`;
}

// ===== RENDER PRODUCTS =====
function renderProducts(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = products.map(p => `
    <div class="product-card" data-product-id="${p.id}">
      <div class="product-card__image-wrap">
        <img class="product-card__image" src="${p.img}" alt="${p.name}" loading="lazy">
        <span class="product-card__badge">-${p.discount}%</span>
        <div class="product-card__quick-view" onclick="openQuickView(${p.id})">VISUALIZAÇÃO RÁPIDA</div>
      </div>
      <div class="product-card__info">
        <h3 class="product-card__name">${p.name}</h3>
        <div class="product-card__pricing">
          <span class="product-card__price-old">${formatBRL(p.oldPrice)}</span>
          <span class="product-card__price-new">${formatBRL(p.price)}</span>
        </div>
        <div class="product-card__installment">${formatInstallment(p.price)}</div>
        <a class="product-card__buy-btn" id="buy-btn-${p.id}" href="${p.checkoutUrl}" target="_blank" rel="noopener">COMPRAR</a>
      </div>
    </div>
  `).join('');
}

// ===== ADD TO CART =====
function addToCart(productId, btnEl) {
  const product = getProduct(productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  saveCart();
  updateCartUI();
  showToast(`${product.name.substring(0, 40)}... adicionado ao carrinho!`);

  // Button animation
  if (btnEl) {
    const originalText = btnEl.textContent;
    btnEl.textContent = '✓ ADICIONADO';
    btnEl.classList.add('added');
    setTimeout(() => {
      btnEl.textContent = originalText;
      btnEl.classList.remove('added');
    }, 1500);
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
  renderCartSidebar();
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  saveCart();
  updateCartUI();
  renderCartSidebar();
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const product = getProduct(item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

// ===== UPDATE CART UI =====
function updateCartUI() {
  const totalEl = document.getElementById('cart-total-header');
  const countEl = document.getElementById('cart-count');
  const footerTotalEl = document.getElementById('cart-sidebar-total');

  if (totalEl) totalEl.textContent = formatBRL(getCartTotal());
  if (countEl) {
    const count = getCartCount();
    countEl.textContent = count;
    countEl.style.display = count > 0 ? 'flex' : 'none';
  }
  if (footerTotalEl) footerTotalEl.textContent = formatBRL(getCartTotal());
}

// ===== CART SIDEBAR =====
function openCartSidebar() {
  document.getElementById('cart-overlay').classList.add('active');
  document.getElementById('cart-sidebar').classList.add('active');
  document.body.style.overflow = 'hidden';
  renderCartSidebar();
}

function closeCartSidebar() {
  document.getElementById('cart-overlay').classList.remove('active');
  document.getElementById('cart-sidebar').classList.remove('active');
  document.body.style.overflow = '';
}

function renderCartSidebar() {
  const body = document.getElementById('cart-sidebar-body');
  const footer = document.getElementById('cart-sidebar-footer');

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-sidebar__empty">
        <div class="cart-sidebar__empty-icon">🛒</div>
        <p>Nenhum produto no carrinho.</p>
        <a href="#" onclick="closeCartSidebar(); return false;">Retornar para a loja</a>
      </div>
    `;
    footer.style.display = 'none';
    return;
  }

  footer.style.display = 'block';

  body.innerHTML = cart.map(item => {
    const p = getProduct(item.id);
    if (!p) return '';
    return `
      <div class="cart-item">
        <img class="cart-item__image" src="${p.img}" alt="${p.name}">
        <div class="cart-item__details">
          <div class="cart-item__name">${p.name}</div>
          <div class="cart-item__price">${formatBRL(p.price * item.qty)}</div>
          <div class="cart-item__controls">
            <button class="cart-item__qty-btn" onclick="updateCartQty(${p.id}, -1)">−</button>
            <span class="cart-item__qty">${item.qty}</span>
            <button class="cart-item__qty-btn" onclick="updateCartQty(${p.id}, 1)">+</button>
            <button class="cart-item__remove" onclick="removeFromCart(${p.id})">✕ Remover</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('cart-sidebar-total').textContent = formatBRL(getCartTotal());
}

// ===== QUICK VIEW MODAL =====
let modalQty = 1;

function openQuickView(productId) {
  const p = getProduct(productId);
  if (!p) return;

  const overlay = document.getElementById('modal-overlay');
  document.getElementById('modal-image').src = p.img;
  document.getElementById('modal-image').alt = p.name;
  document.getElementById('modal-name').textContent = p.name;
  document.getElementById('modal-price-old').textContent = formatBRL(p.oldPrice);
  document.getElementById('modal-price-new').textContent = formatBRL(p.price);
  document.getElementById('modal-installment').innerHTML = formatInstallment(p.price);
  document.getElementById('modal-description').textContent = p.description;

  // Replace add-to-cart button with direct checkout link
  const addBtn = document.getElementById('modal-add-btn');
  const buyLink = document.createElement('a');
  buyLink.className = 'modal__add-btn';
  buyLink.id = 'modal-add-btn';
  buyLink.href = p.checkoutUrl;
  buyLink.target = '_blank';
  buyLink.rel = 'noopener';
  buyLink.textContent = 'COMPRAR';
  addBtn.replaceWith(buyLink);

  // Hide quantity selector
  const qtyWrap = document.querySelector('.modal__qty-wrap');
  if (qtyWrap) qtyWrap.style.display = 'none';

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

function changeModalQty(delta) {
  modalQty = Math.max(1, modalQty + delta);
  document.getElementById('modal-qty-value').textContent = modalQty;
}

// ===== SEARCH =====
function toggleSearch() {
  const bar = document.getElementById('search-bar');
  bar.classList.toggle('active');
  if (bar.classList.contains('active')) {
    bar.querySelector('input').focus();
  }
}

function handleSearch(e) {
  const query = e.target.value.toLowerCase().trim();
  if (query.length === 0) {
    renderProducts('featured-products', PRODUCTS.featured);
    if (PRODUCTS.complementos) renderProducts('complementos-products', PRODUCTS.complementos);
    return;
  }
  const filterFn = p => p.name.toLowerCase().includes(query);
  renderProducts('featured-products', PRODUCTS.featured.filter(filterFn));
  if (PRODUCTS.complementos) renderProducts('complementos-products', PRODUCTS.complementos.filter(filterFn));
}

// ===== BACK TO TOP =====
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== TOAST =====
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.querySelector('.toast__message').textContent = message;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 3000);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('featured-products', PRODUCTS.featured);
  if (PRODUCTS.complementos) renderProducts('complementos-products', PRODUCTS.complementos);
  updateCartUI();
  initBackToTop();

  // Close modals on overlay click
  document.getElementById('cart-overlay').addEventListener('click', closeCartSidebar);
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeQuickView();
  });

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartSidebar();
      closeQuickView();
    }
  });

  // Search debounce
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => handleSearch(e), 200);
    });
  }
});
