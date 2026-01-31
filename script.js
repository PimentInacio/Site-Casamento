const app = {
    // Dados
    data: {
        products: [
            { id: 1, name: "Liquidificador Turbo 1200w", price: 150.00, desc: "Para nossas vitaminas e receitas especiais.", img: "https://images.unsplash.com/photo-1570222094114-28a9d88a27e6?auto=format&fit=crop&w=500&q=60" },
            { id: 2, name: "Jogo de Toalhas Banho", price: 100.00, desc: "Maciez e conforto para o nosso novo lar.", img: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=500&q=60" },
            { id: 3, name: "Cafeteira Expresso", price: 125.00, desc: "Amamos café! Esse presente vai ser muito usado.", img: "https://images.unsplash.com/photo-1517080314053-e546d148e658?auto=format&fit=crop&w=500&q=60" },
            { id: 4, name: "Jogo de Panelas Antiaderente", price: 300.00, desc: "Fundamental para prepararmos nossos jantares.", img: "https://images.unsplash.com/photo-1584990347449-a64648a6e3d8?auto=format&fit=crop&w=500&q=60" },
            { id: 5, name: "Faqueiro Inox 24 Peças", price: 75.00, desc: "Elegância e durabilidade para a nossa mesa.", img: "https://images.unsplash.com/photo-1581788223933-0de329e7465d?auto=format&fit=crop&w=500&q=60" },
            { id: 6, name: "Cota: Jantar Romântico", price: 200.00, desc: "Ajude-nos a ter uma noite inesquecível.", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=500&q=60" },
            { id: 7, name: "Kit Churrasco Completo", price: 150.00, desc: "Para receber a família nos fins de semana.", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=60" },
            { id: 8, name: "Edredom Casal Queen", price: 175.00, desc: "Noites de sono tranquilas e quentinhas.", img: "https://images.unsplash.com/photo-1522771753014-df00418c4e4f?auto=format&fit=crop&w=500&q=60" }
        ],
        cart: [],
        navigationHistory: ['home-view'],
        
        // LINKS DO MERCADO PAGO ATUALIZADOS
        paymentLinks: {
            25: 'https://mpago.la/2w5zi17',
            50: 'https://mpago.la/2MyrTy2',
            75: 'https://mpago.la/1kik68Z',
            100: 'https://mpago.la/2K7R911',
            125: 'https://mpago.la/2K12dqW',
            150: 'https://mpago.la/2ZJqy7h',
            175: 'https://mpago.la/2Nryg5U',
            200: 'https://mpago.la/1t3X32X',
            250: 'https://mpago.la/1hCDt19',
            300: 'https://mpago.la/2Pzhsqq'
        },
        // Dados para renderizar os botões na tela de Pix/Cartão Direto
        cardValues: [25, 50, 75, 100, 125, 150, 175, 200, 250, 300]
    },

    init() {
        this.renderProducts();
        this.generateDirectCardLinks(); 
        this.generateCheckoutCardLinks();
    },

    // --- Navegação SPA ---
    navigateTo(viewId) {
        window.scrollTo(0, 0);
        document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
        document.getElementById(viewId).classList.add('active');

        if (viewId !== this.data.navigationHistory[this.data.navigationHistory.length - 1]) {
            this.data.navigationHistory.push(viewId);
        }

        this.updateHeader(viewId);

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
        
        const showCartViews = ['product-list-view', 'cart-view', 'checkout-form-view', 'payment-selection-view'];
        cartBtn.style.visibility = showCartViews.includes(viewId) ? 'visible' : 'hidden';
        
        if (viewId === 'home-view') {
            backBtn.style.visibility = 'hidden';
            title.innerText = "Inácio & Maria";
        } else if (viewId === 'thank-you-view') {
            backBtn.style.visibility = 'hidden';
            title.innerText = "Obrigado!";
        } else {
            backBtn.style.visibility = 'visible';
            if(viewId === 'product-list-view') title.innerText = "Lista de Presentes";
            else if(viewId === 'cart-view') title.innerText = "Carrinho";
            else if(viewId === 'checkout-form-view') title.innerText = "Identificação";
            else if(viewId === 'payment-selection-view') title.innerText = "Pagamento";
            else if(viewId === 'pix-direct-view') title.innerText = "Enviar Carinho";
            else title.innerText = "Inácio & Maria";
        }
    },

    // --- Produtos e Modal ---
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
        if (force || e.target.id === 'product-modal') {
            document.getElementById('product-modal').classList.add('hidden');
        }
    },

    // --- Carrinho ---
    addToCart(id) {
        const prod = this.data.products.find(p => p.id === id);
        this.data.cart.push(prod);
        this.updateCartCount();
        
        const btn = document.querySelector('#modal-body .btn-red');
        btn.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
        btn.classList.replace('btn-red', 'btn-success');
        
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

    // --- Checkout ---
    submitCheckoutForm(e) {
        e.preventDefault();
        // Simulação de captura dos dados (futuro backend)
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
        
        const btnCard = document.getElementById('btn-pay-card-checkout');
        if(btnCard) {
            btnCard.innerText = `Pagar R$ ${total.toFixed(2).replace('.', ',')} com Cartão`;
        }
        
        // Verifica se existe link exato, senão mostra fallback
        const link = this.findBestPaymentLink(total);
        const fallbackContainer = document.getElementById('fallback-card-links');
        
        if (!link && fallbackContainer) {
            fallbackContainer.classList.remove('hidden');
            btnCard.style.display = 'none'; // Esconde botão principal se não tem link
        } else if (fallbackContainer) {
            fallbackContainer.classList.add('hidden');
            btnCard.style.display = 'flex';
        }
    },

    togglePayment(type, context) {
        const pixId = context === 'direct' ? 'direct-pix-content' : 'payment-pix-content';
        const cardId = context === 'direct' ? 'direct-card-content' : 'payment-card-content';
        const wrapperId = context === 'direct' ? 'pix-direct-view' : 'payment-selection-view';
        
        const pixContent = document.getElementById(pixId);
        const cardContent = document.getElementById(cardId);
        
        const options = document.querySelectorAll(`#${wrapperId} .payment-option`);
        options.forEach(opt => opt.classList.remove('selected'));
        
        if (type === 'pix') {
            pixContent.classList.remove('hidden');
            cardContent.classList.add('hidden');
        } else {
            pixContent.classList.add('hidden');
            cardContent.classList.remove('hidden');
        }
    },

    // --- LOGICA DE PAGAMENTO CARTÃO ---
    payWithCardCheckout() {
        const total = this.data.cart.reduce((acc, item) => acc + item.price, 0);
        const link = this.findBestPaymentLink(total);

        if (link) {
            window.open(link, '_blank');
            // Vai para a tela de agradecimento após clicar
            setTimeout(() => {
                this.navigateTo('thank-you-view');
            }, 1000);
        } else {
            alert("Para este valor específico, por favor utilize os botões de valores aproximados abaixo.");
        }
    },
    
    findBestPaymentLink(amount) {
        if (this.data.paymentLinks[amount]) {
            return this.data.paymentLinks[amount];
        }
        return null; 
    },

    generateDirectCardLinks() {
        const container = document.getElementById('direct-card-links');
        if(!container) return;
        
        const html = this.data.cardValues.map(val => `
            <a href="#" class="card-link-btn" onclick="app.manualCardPay(${val})">R$ ${val}</a>
        `).join('');

        container.innerHTML = html;
    },
    
    generateCheckoutCardLinks() {
        const container = document.getElementById('checkout-card-links');
        if(!container) return;
        
        const html = this.data.cardValues.map(val => `
            <a href="#" class="card-link-btn" onclick="app.manualCardPay(${val})">R$ ${val}</a>
        `).join('');

        container.innerHTML = html;
    },

    manualCardPay(val) {
        const link = this.findBestPaymentLink(val);
        if(link) {
            window.open(link, '_blank');
            setTimeout(() => {
                this.navigateTo('thank-you-view');
            }, 500);
        } else {
            alert("Link indisponível no momento.");
        }
    },

    // --- Pix ---
    copyPix(elementId) {
        // Nova Chave do Usuário
        let text = "14c6c43c-3ea9-4be4-bdfa-f150e192f726"; 

        navigator.clipboard.writeText(text).then(() => {
            alert("Chave Pix copiada!");
            if(elementId === 'pix-key-direct-val') {
                 this.navigateTo('thank-you-view');
            }
        }).catch(err => {
            // Fallback simples
            const textArea = document.createElement("textarea");
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("Copy");
            textArea.remove();
            alert("Chave Pix copiada!");
        });
    },

    confirmPixPayment() {
        this.copyPix('pix-key-checkout');
        setTimeout(() => {
            this.navigateTo('thank-you-view');
        }, 1000);
    },

    resetApp() {
        this.data.cart = [];
        this.updateCartCount();
        this.data.navigationHistory = ['home-view'];
        document.getElementById('product-grid').innerHTML = ''; 
        this.navigateTo('home-view');
    }
};

app.init();