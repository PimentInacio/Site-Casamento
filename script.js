const app = {
    // Dados da Aplicação
    data: {
        // LISTA DE PRODUTOS REORDENADA (MENOR PREÇO -> MAIOR PREÇO)
        products: [
            // R$ 25,00
            { id: 25, name: "Jogo de Copos (Água e Suco)", price: 25.00, desc: "", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500" },
            { id: 26, name: "Tábua de Corte", price: 25.00, desc: "", img: "https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?w=500" },
            { id: 44, name: "Cesto de Roupa Suja", price: 25.00, desc: "", img: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500" },
            { id: 47, name: "Kit de Potes Plástico", price: 25.00, desc: "", img: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=500" },
            { id: 49, name: "Forma de Bolo", price: 25.00, desc: "", img: "https://images.unsplash.com/photo-1585827552668-d0728b355e3d?w=500" },
            { id: 50, name: "Forma de Pizza", price: 25.00, desc: "", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500" },
            { id: 51, name: "Kit Toalhas de Rosto", price: 25.00, desc: "", img: "https://images.unsplash.com/photo-1582234033242-d33a693cb4a0?w=500" },

            // R$ 50,00
            { id: 27, name: "Petisqueira", price: 50.00, desc: "", img: "https://images.unsplash.com/photo-1576021182211-9ea8dced3690?w=500" },
            { id: 31, name: "Kit Tapetes de Banheiro", price: 50.00, desc: "", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500" },
            { id: 39, name: "Toalha de Mesa de Jantar", price: 50.00, desc: "", img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=500" },
            { id: 40, name: "Jogo Americano (4 lugares)", price: 50.00, desc: "", img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=500" },
            { id: 45, name: "Kit de Banheiro (Porta Sabonete)", price: 50.00, desc: "", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500" },
            { id: 46, name: "Tapete para Cozinha", price: 50.00, desc: "", img: "https://images.unsplash.com/photo-1621891380621-e03c26569148?w=500" },
            { id: 52, name: "Espelho de Mesa com LED", price: 50.00, desc: "", img: "https://images.unsplash.com/photo-1618218168350-6e7c81152b63?w=500" },
            { id: 53, name: "Organizador de Maquiagem Acrílico", price: 50.00, desc: "", img: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?w=500" },

            // R$ 75,00
            { id: 21, name: "Jogo de Talheres Faqueiro", price: 75.00, desc: "", img: "https://images.unsplash.com/photo-1601342630312-d8434770d381?w=500" },
            { id: 23, name: "Garrafa Térmica de Café", price: 75.00, desc: "", img: "https://images.unsplash.com/photo-1516216657908-01e958742540?w=500" },
            { id: 24, name: "Escorredor de Louças Inox", price: 75.00, desc: "", img: "https://images.unsplash.com/photo-1596627685292-623c23932e8f?w=500" },
            { id: 30, name: "Jogo de Toalhas de Banho", price: 75.00, desc: "", img: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=500" },
            { id: 33, name: "Cortina para Sala", price: 75.00, desc: "", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500" },
            { id: 38, name: "Manta para Sofá", price: 75.00, desc: "", img: "https://images.unsplash.com/photo-1580301762395-5c2f849495dd?w=500" },
            { id: 41, name: "Kit Tapetes de Banheiro (Luxo)", price: 75.00, desc: "", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=500" },
            { id: 42, name: "Protetor de Colchão Queen", price: 75.00, desc: "", img: "https://images.unsplash.com/photo-1631049552240-59c37f7e8c18?w=500" },
            { id: 48, name: "Kit de Potes Herméticos", price: 75.00, desc: "", img: "https://images.unsplash.com/photo-1517135388049-266854728cc5?w=500" },

            // R$ 100,00
            { id: 13, name: "Sanduicheira e Grill", price: 100.00, desc: "", img: "https://images.unsplash.com/photo-1592398436589-94ae4a899933?w=500" },
            { id: 17, name: "Ferro de Passar a Vapor", price: 100.00, desc: "", img: "https://images.unsplash.com/photo-1549488497-276e23c2686d?w=500" },
            { id: 22, name: "Jogo de Travessas de Vidro", price: 100.00, desc: "", img: "https://images.unsplash.com/photo-1627483298606-35c91cf97f16?w=500" },
            { id: 37, name: "Kit 4 Travesseiros", price: 100.00, desc: "", img: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?w=500" },

            // R$ 125,00
            { id: 18, name: "Mixer Turbo", price: 125.00, desc: "", img: "https://images.unsplash.com/photo-1609156543029-79a4c0032332?w=500" },
            { id: 36, name: "Tapete para Sala", price: 125.00, desc: "", img: "https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?w=500" },

            // R$ 150,00
            { id: 1, name: "Chapinha", price: 150.00, desc: "", img: "https://images.unsplash.com/photo-1562362336-659635038e94?w=500" },
            { id: 6, name: "Maleta de Ferramentas Completa", price: 150.00, desc: "", img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=500" },
            { id: 10, name: "Liquidificador Turbo", price: 150.00, desc: "", img: "https://images.unsplash.com/photo-1570222094114-28a9d88a27e6?w=500" },
            { id: 12, name: "Cafeteira Elétrica", price: 150.00, desc: "", img: "https://images.unsplash.com/photo-1517080314053-e546d148e658?w=500" },
            { id: 29, name: "Jogo de Cama Queen 4 Peças", price: 150.00, desc: "", img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=500" },
            { id: 32, name: "Jogo Cobre-leito Queen", price: 150.00, desc: "", img: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=500" },

            // R$ 175,00
            { id: 14, name: "Panela de Arroz Elétrica", price: 175.00, desc: "", img: "https://images.unsplash.com/photo-1632057790073-678c430e70ba?w=500" },
            { id: 16, name: "Ventilador de Coluna", price: 175.00, desc: "", img: "https://images.unsplash.com/photo-1618941716939-553df3c6c278?w=500" },
            { id: 43, name: "Jogo de Lençol Queen 100% Algodão", price: 175.00, desc: "", img: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=500" },

            // R$ 200,00
            { id: 2, name: "Secador de Cabelo", price: 200.00, desc: "", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=500" },
            { id: 15, name: "Processador de Alimentos", price: 200.00, desc: "", img: "https://images.unsplash.com/photo-1585517263592-d9633273e971?w=500" },
            { id: 28, name: "Edredom Casal Queen", price: 200.00, desc: "", img: "https://images.unsplash.com/photo-1522771753014-df00418c4e4f?w=500" },

            // R$ 225,00
            { id: 5, name: "Furadeira", price: 225.00, desc: "", img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500" },

            // R$ 250,00
            { id: 3, name: "Escova Secadora Modeladora", price: 250.00, desc: "", img: "https://images.unsplash.com/photo-1595992367809-28c009d6c40f?w=500" },
            { id: 20, name: "Aparelho de Jantar 20 Peças", price: 250.00, desc: "", img: "https://images.unsplash.com/photo-1623652683935-77983636780c?w=500" },

            // R$ 275,00
            { id: 4, name: "Panela de Pressão Elétrica", price: 275.00, desc: "", img: "https://images.unsplash.com/photo-1544229983-936cb7d727eb?w=500" },
            { id: 11, name: "Batedeira Planetária", price: 275.00, desc: "", img: "https://images.unsplash.com/photo-1594916323498-323b03b22b62?w=500" },

            // R$ 300,00
            { id: 7, name: "Airfryer", price: 300.00, desc: "", img: "https://images.unsplash.com/photo-1626139576127-6c0784177b90?w=500" },
            { id: 19, name: "Jogo de Panelas Antiaderente", price: 300.00, desc: "", img: "https://images.unsplash.com/photo-1584990347449-a64648a6e3d8?w=500" },

            // R$ 350,00
            { id: 9, name: "Robô Aspirador de Pó", price: 350.00, desc: "", img: "https://images.unsplash.com/photo-1589828156828-e4b786318239?w=500" },

            // R$ 375,00
            { id: 8, name: "Micro-ondas", price: 375.00, desc: "", img: "https://plus.unsplash.com/premium_photo-1664302302302-3c46e206063e?w=500" },

            // R$ 1.900,00
            { id: 34, name: "TV LG 50 Polegadas", price: 1900.00, desc: "", img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500" },

            // R$ 2.250,00
            { id: 35, name: "TV LG 55 Polegadas", price: 2250.00, desc: "", img: "https://images.unsplash.com/photo-1552975084-6e027cd345c2?w=500" }
        ],
        cart: [],
        navigationHistory: ['home-view'],
        
        // TODOS OS LINKS DO MERCADO PAGO ATUALIZADOS
        paymentLinks: {
            25: 'https://mpago.la/2Hg9d8v',
            50: 'https://mpago.la/341NQTu',
            75: 'https://mpago.la/2FcAZee',
            100: 'https://mpago.la/2Pq7btc',
            125: 'https://mpago.la/24v1qK1',
            150: 'https://mpago.la/1LjW6id',
            175: 'https://mpago.la/2YEg2ym',
            200: 'https://mpago.la/13A6QaY',
            225: 'https://mpago.la/17ta7Cz',
            250: 'https://mpago.la/2cRstrz',
            275: 'https://mpago.la/1ttibUr',
            300: 'https://mpago.la/1cf985m',
            325: 'https://mpago.la/27wtaR9',
            350: 'https://mpago.la/1pkgzwn',
            375: 'https://mpago.la/1e4xCWg',
            400: 'https://mpago.la/1e4xCWg',
            425: 'https://mpago.la/1jgm695',
            450: 'https://mpago.la/17YUx9H',
            475: 'https://mpago.la/2yJiTYi',
            500: 'https://mpago.la/1DMPCMm',
            525: 'https://mpago.la/1GTZQE9',
            550: 'https://mpago.la/2FSWjt8',
            575: 'https://mpago.la/2vnQ7Kx',
            600: 'https://mpago.la/1dJ1Xwh',
            700: 'https://mpago.la/1teWGHz',
            800: 'https://mpago.la/2a7kEjW',
            900: 'https://mpago.la/2ceSMo4',
            1000: 'https://mpago.la/2wsdLyf',
            1500: 'https://mpago.la/1qmSq7C',
            1900: 'https://mpago.la/2kSQPZZ',
            2000: 'https://mpago.la/1irSayQ',
            2250: 'https://mpago.la/1DCHGKa'
        },
        // Link de fallback para valores não listados
        fallbackLink: 'https://link.mercadopago.com.br/inaciomaria',

        // Valores para exibir botões nas telas manuais (Seleção até 500, o resto é auto no checkout)
        cardValues: [25, 50, 75, 100, 150, 200, 250, 300, 400, 500]
    },

    init() {
        this.renderProducts();
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

        // Removido o botão "Continuar Comprando" do HTML abaixo
        modalBody.innerHTML = `
            <img src="${prod.img}" class="modal-image" alt="${prod.name}">
            <div class="modal-details">
                <h2 class="modal-title">${prod.name}</h2>
                <div class="modal-price">R$ ${prod.price.toFixed(2).replace('.', ',')}</div>
                <p class="modal-desc">${prod.desc}</p>
                
                <button class="btn btn-red mb-1" onclick="app.addToCart(${prod.id})">
                    <i class="fas fa-cart-plus"></i> Adicionar ao Carrinho
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
        const guestData = {
            name: document.getElementById('guest-name').value,
            phone: document.getElementById('guest-phone').value,
            message: document.getElementById('guest-message').value
        };
        console.log("Dados do convidado:", guestData);
        // Futura integração com Google Sheets aqui
        this.navigateTo('payment-selection-view');
    },

    renderPaymentTotal() {
        const total = this.data.cart.reduce((acc, item) => acc + item.price, 0);
        document.getElementById('payment-total').innerText = 'R$ ' + total.toFixed(2).replace('.', ',');
        
        const btnCard = document.getElementById('btn-pay-card-checkout');
        if(btnCard) {
            btnCard.innerText = `Pagar R$ ${total.toFixed(2).replace('.', ',')} com Cartão`;
        }
        
        // Verifica link exato
        const link = this.findBestPaymentLink(total);
        const fallbackContainer = document.getElementById('fallback-card-links');
        
        // Se NÃO tem link exato, mudamos o texto e comportamento do botão
        if (!link) {
            btnCard.innerText = `Pagar R$ ${total.toFixed(2).replace('.', ',')} (Digitar Valor)`;
            if(fallbackContainer) fallbackContainer.classList.remove('hidden');
        } else {
            if(fallbackContainer) fallbackContainer.classList.add('hidden');
        }
    },

    togglePayment(type, context) {
        // Removida lógica de "direct" pois a tela foi excluída
        const pixId = 'payment-pix-content';
        const cardId = 'payment-card-content';
        const wrapperId = 'payment-selection-view';
        
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

        // Se encontrou link exato, usa ele. Se não, usa o fallback genérico
        const finalLink = link ? link : this.data.fallbackLink;

        window.open(finalLink, '_blank');
        
        setTimeout(() => {
            this.navigateTo('thank-you-view');
        }, 1500);
    },
    
    findBestPaymentLink(amount) {
        if (this.data.paymentLinks[amount]) {
            return this.data.paymentLinks[amount];
        }
        return null; 
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
        // Se clicou num botão manual, DEVE ter link. Se não tiver, usa fallback.
        const finalLink = link ? link : this.data.fallbackLink;
        
        window.open(finalLink, '_blank');
        setTimeout(() => {
            this.navigateTo('thank-you-view');
        }, 500);
    },

    // --- Pix ---
    copyPix(elementId) {
        let text = "14c6c43c-3ea9-4be4-bdfa-f150e192f726"; 

        navigator.clipboard.writeText(text).then(() => {
            alert("Chave Pix copiada!");
        }).catch(err => {
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