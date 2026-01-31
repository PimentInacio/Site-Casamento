const app = {
    // Dados originais
    data: {
        products: [
            { id: 1, name: "Liquidificador Turbo 1200w", price: 149.90, desc: "Para nossas vitaminas e receitas especiais.", img: "https://images.unsplash.com/photo-1570222094114-28a9d88a27e6?auto=format&fit=crop&w=500&q=60" },
            { id: 2, name: "Jogo de Toalhas Banho", price: 89.90, desc: "Maciez e conforto para o nosso novo lar.", img: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=500&q=60" },
            { id: 3, name: "Cafeteira Expresso", price: 125.00, desc: "Amamos café! Esse presente vai ser muito usado.", img: "https://images.unsplash.com/photo-1517080314053-e546d148e658?auto=format&fit=crop&w=500&q=60" },
            { id: 4, name: "Jogo de Panelas Antiaderente", price: 299.90, desc: "Fundamental para prepararmos nossos jantares.", img: "https://images.unsplash.com/photo-1584990347449-a64648a6e3d8?auto=format&fit=crop&w=500&q=60" },
            { id: 5, name: "Faqueiro Inox 24 Peças", price: 75.00, desc: "Elegância e durabilidade para a nossa mesa.", img: "https://images.unsplash.com/photo-1581788223933-0de329e7465d?auto=format&fit=crop&w=500&q=60" },
            { id: 6, name: "Cota: Jantar Romântico Lua de Mel", price: 200.00, desc: "Ajude-nos a ter uma noite inesquecível.", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=500&q=60" },
            { id: 7, name: "Kit Churrasco Completo", price: 150.00, desc: "Para receber a família nos fins de semana.", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=60" },
            { id: 8, name: "Edredom Casal Queen", price: 180.00, desc: "Noites de sono tranquilas e quentinhas.", img: "https://images.unsplash.com/photo-1522771753014-df00418c4e4f?auto=format&fit=crop&w=500&q=60" }
        ],
        cart: [],
        navigationHistory: ['home-view'],
        cardValues: [25, 50, 75, 100, 125, 150, 175, 200, 250, 300]
    },

    init() {
        this.renderProducts();
        this.generateCardLinks('direct-card-links');
        this.generateCardLinks('checkout-card-links');
    },

    // --- Navegação SPA ---
    navigateTo(viewId) {
        // Scroll top
        window.scrollTo(0, 0);

        // Gerencia views
        document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
        document.getElementById(viewId).classList.add('active');

        // Histórico
        if (viewId !== this.data.navigationHistory[this.data.navigationHistory.length - 1]) {
            this.data.navigationHistory.push(viewId);
        }

        // Header Logic
        this.updateHeader(viewId);

        // Renderizações específicas
        if (viewId === 'cart-view') this.renderCart();
        if (viewId === 'payment-selection-view') this.renderPaymentTotal();
    },

    goBack() {
        if (this.data.navigationHistory.length > 1) {
            this.data.navigationHistory.pop(); 
            const previous = this.data.navigationHistory[this.data.navigationHistory.length - 1];
            
            document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
            document.getElementById(previous).classList.add('active');
            
            this.updateHeader(previous);
        } else {
            this.navigateTo('home-view');
        }
    },

    updateHeader(viewId) {
        const backBtn = document.getElementById('global-back-btn');
        const title = document.getElementById('header-title');
        const cartBtn = document.getElementById('header-cart-btn');
        
        // Carrinho visível apenas no fluxo de compras
        const showCartViews = ['product-list-view', 'cart-view', 'checkout-form-view', 'payment-selection-view'];
        cartBtn.style.visibility = showCartViews.includes(viewId) ? 'visible' : 'hidden';
        
        // Botão voltar e Título
        if (viewId === 'home-view') {
            backBtn.style.visibility = 'hidden';
            title.innerText = "Inácio & Maria";
        } else if (viewId === 'thank-you-view') {
            backBtn.style.visibility = 'hidden';
            title.innerText = "Obrigado!";
        } else {
            backBtn.style.visibility = 'visible';
            // Títulos dinâmicos conforme sua lógica original
            if(viewId === 'product-list-view') title.innerText = "Lista de Presentes";
            else if(viewId === 'cart-view') title.innerText = "Carrinho";
            else if(viewId === 'checkout-form-view') title.innerText = "Identificação";
            else if(viewId === 'payment-selection-view') title.innerText = "Pagamento";
            else if(viewId === 'pix-direct-view') title.innerText = "Enviar Carinho";
            else title.innerText = "Inácio & Maria";
        }
    },

    // --- Lógica de Produtos & Modal Flutuante ---
    renderProducts() {
        const grid = document.getElementById('product-grid');
        grid.innerHTML = this.data.products.map(prod => `
            <div class="product-card" onclick="app.openModal(${prod.id})">
                <div class="product-image-container">
                    <img src="${prod.img}" alt="${prod.name}">
                </div>
                <div class="product-info">
                    <h4 class="product-name">${prod.name}</h4>
                    <div>
                        <div class="product-price">R$ ${prod.price.toFixed(2).replace('.', ',')}</div>
                        <div class="product-installments">1x no cartão ou pix</div>
                    </div>
                </div>
            </div>
        `).join('');
    },

    // NOVA LÓGICA: Abre Modal em vez de trocar página
    openModal(id) {
        const prod = this.data.products.find(p => p.id === id);
        const modalBody = document.getElementById('modal-body');
        const modal = document.getElementById('product-modal');

        modalBody.innerHTML = `
            <img src="${prod.img}" class="modal-image" alt="${prod.name}">
            <div class="modal-details">
                <h2 class="modal-title">${prod.name}</h2>
                <div class="modal-price">R$ ${prod.price.toFixed(2).replace('.', ',')}</div>
                <p class="modal-desc">${prod.desc}</p>
                
                <button class="btn btn-red mb-1" onclick="app.addToCart(${prod.id})">
                    <i class="fas fa-cart-plus"></i> Adicionar ao Carrinho
                </button>
                <button class="btn btn-outline" onclick="app.closeModal(null, true)">
                    Continuar Comprando
                </button>
            </div>
        `;
        
        modal.classList.remove('hidden');
    },

    closeModal(e, force = false) {
        // Fecha se clicar fora (overlay) ou se force=true
        if (force || e.target.id === 'product-modal') {
            document.getElementById('product-modal').classList.add('hidden');
        }
    },

    // --- Carrinho ---
    addToCart(id) {
        const prod = this.data.products.find(p => p.id === id);
        this.data.cart.push(prod);
        this.updateCartCount();
        
        // Feedback visual
        const btn = document.querySelector('#modal-body .btn-red');
        btn.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
        btn.classList.replace('btn-red', 'btn-success');
        
        // Após adicionar, fecha modal e vai pro carrinho ou continua?
        // Sua lógica pedia opção de continuar ou ir pro carrinho. 
        // Vou fechar o modal e perguntar visualmente no carrinho, ou redirecionar.
        // Seguindo o fluxo "Shopify/Mobile": Adiciona e fecha modal rápido ou vai pro carrinho.
        // Vou redirecionar para o carrinho conforme seu código original fazia após delay.
        setTimeout(() => {
            this.closeModal(null, true);
            this.navigateTo('cart-view');
        }, 600);
    },

    updateCartCount() {
        document.getElementById('cart-count').innerText = this.data.cart.length;
    },

    renderCart() {
        const container = document.getElementById('cart-items-container');
        const footer = document.getElementById('cart-footer');
        const totalEl = document.getElementById('cart-total');

        if (this.data.cart.length === 0) {
            container.innerHTML = `
                <div class="text-center" style="padding: 3rem 1rem;">
                    <i class="fas fa-shopping-basket" style="font-size: 3rem; color: #e0e0e0; margin-bottom: 1rem;"></i>
                    <p style="color: #999;">Seu carrinho está vazio.</p>
                    <button class="btn btn-outline" onclick="app.navigateTo('product-list-view')" style="margin-top: 1.5rem;">
                        Ver Presentes
                    </button>
                </div>`;
            footer.classList.add('hidden');
            return;
        }

        let html = '';
        let total = 0;

        this.data.cart.forEach((item, index) => {
            total += item.price;
            html += `
                <div class="cart-item">
                    <div>
                        <strong>${item.name}</strong>
                        <div style="color: var(--accent-red); font-weight:bold;">R$ ${item.price.toFixed(2).replace('.', ',')}</div>
                    </div>
                    <button onclick="app.removeFromCart(${index})" style="background:none; border:none; color: #999; padding: 10px; cursor: pointer;">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            `;
        });
        
        // Espaço para footer fixo
        html += '<div style="height: 120px;"></div>';

        container.innerHTML = html;
        totalEl.innerText = 'R$ ' + total.toFixed(2).replace('.', ',');
        footer.classList.remove('hidden');
    },

    removeFromCart(index) {
        this.data.cart.splice(index, 1);
        this.updateCartCount();
        this.renderCart();
    },

    // --- Checkout & Pagamento ---
    submitCheckoutForm(e) {
        e.preventDefault();
        // Aqui você coletaria os dados para enviar para a planilha (Backend)
        const guestData = {
            name: document.getElementById('guest-name').value,
            phone: document.getElementById('guest-phone').value,
            message: document.getElementById('guest-message').value
        };
        console.log("Dados do convidado:", guestData);
        this.navigateTo('payment-selection-view');
    },

    renderPaymentTotal() {
        const total = this.data.cart.reduce((acc, item) => acc + item.price, 0);
        document.getElementById('payment-total').innerText = 'R$ ' + total.toFixed(2).replace('.', ',');
    },

    // Gerenciador de Toggles (Pix/Cartão) - Serve para View Direta e Checkout
    togglePayment(type, context) {
        // context = 'direct' (pix page) ou 'checkout' (payment flow)
        const pixId = context === 'direct' ? 'direct-pix-content' : 'payment-pix-content';
        const cardId = context === 'direct' ? 'direct-card-content' : 'payment-card-content';
        const wrapperId = context === 'direct' ? 'pix-direct-view' : 'payment-selection-view';
        
        const pixContent = document.getElementById(pixId);
        const cardContent = document.getElementById(cardId);
        
        // UI Selection Logic
        const options = document.querySelectorAll(`#${wrapperId} .payment-option`);
        options.forEach(opt => opt.classList.remove('selected'));
        
        // Encontra o elemento clicado (event bubbling) para adicionar classe selected
        // Simplificado: removemos de todos e quem clicou (this no html) ganha a classe.
        // Como o 'this' não passa direto aqui na função arrow/objeto, usaremos classes de CSS baseadas no estado.
        // (Para simplicidade visual neste refactor, focamos na abertura dos painéis)
        
        if (type === 'pix') {
            pixContent.classList.remove('hidden');
            cardContent.classList.add('hidden');
        } else {
            pixContent.classList.add('hidden');
            cardContent.classList.remove('hidden');
        }
    },

    generateCardLinks(elementId) {
        const container = document.getElementById(elementId);
        if(!container) return;
        
        container.innerHTML = this.data.cardValues.map(val => `
            <a href="#" class="card-link-btn" onclick="app.finishCard(${val})">R$ ${val}</a>
        `).join('');
    },

    copyPix(elementId) {
        const text = document.getElementById(elementId).innerText.trim();
        navigator.clipboard.writeText(text).then(() => {
            alert("Chave Pix copiada!");
            if(elementId === 'pix-key-direct-val') {
                 this.navigateTo('thank-you-view');
            }
        }).catch(err => {
            alert("Erro ao copiar. Selecione manualmente.");
        });
    },

    confirmPixPayment() {
        this.copyPix('pix-key-checkout');
        setTimeout(() => {
            this.navigateTo('thank-you-view');
        }, 1000);
    },

    finishCard(value) {
        // Lógica: Redirecionar para link ML (mock)
        console.log(`Pagando R$ ${value} via Mercado Pago`);
        // window.open(...)
        setTimeout(() => {
            this.navigateTo('thank-you-view');
        }, 500);
        return true;
    },

    resetApp() {
        this.data.cart = [];
        this.updateCartCount();
        this.data.navigationHistory = ['home-view'];
        document.getElementById('product-grid').innerHTML = ''; // Força re-render
        this.navigateTo('home-view');
    }
};

// Inicia App
app.init();