const app = {
    // Estado da Aplicação
    state: {
        cart: [],
        viewHistory: ['view-home'],
        products: [
            // Mock Data
            { id: 1, name: "Liquidificador Turbo 1200w", price: 149.90, desc: "Para nossas vitaminas matinais.", img: "https://images.unsplash.com/photo-1570222094114-28a9d88a27e6?w=500" },
            { id: 2, name: "Jogo de Toalhas Banho", price: 89.90, desc: "Maciez e conforto para o lar.", img: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=500" },
            { id: 3, name: "Cafeteira Expresso", price: 125.00, desc: "Essencial para o café da manhã.", img: "https://images.unsplash.com/photo-1517080314053-e546d148e658?w=500" },
            { id: 4, name: "Jogo de Panelas", price: 299.90, desc: "Para nossos jantares especiais.", img: "https://images.unsplash.com/photo-1584990347449-a64648a6e3d8?w=500" },
            { id: 5, name: "Faqueiro Inox", price: 75.00, desc: "Elegância na mesa.", img: "https://images.unsplash.com/photo-1581788223933-0de329e7465d?w=500" },
            { id: 6, name: "Cota Lua de Mel", price: 200.00, desc: "Ajude-nos a ter uma viagem inesquecível.", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500" },
            { id: 7, name: "Kit Churrasco", price: 150.00, desc: "Para o fim de semana.", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500" },
            { id: 8, name: "Edredom Queen", price: 180.00, desc: "Noites quentinhas.", img: "https://images.unsplash.com/photo-1522771753014-df00418c4e4f?w=500" }
        ],
        buyer: { name: '', phone: '', message: '' }
    },

    // Inicialização
    init() {
        this.renderProducts();
        this.setupListeners();
        this.renderCardLinks(300); // Gera links iniciais
    },

    // --- Navegação SPA ---
    navigate(viewId) {
        // Scroll to top
        window.scrollTo(0, 0);
        
        // Manipulação de Views
        document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
        document.getElementById(`view-${viewId}`).classList.add('active');

        // Histórico
        const currentView = `view-${viewId}`;
        if (this.state.viewHistory[this.state.viewHistory.length - 1] !== currentView) {
            this.state.viewHistory.push(currentView);
        }

        // Header Logic
        const btnBack = document.getElementById('btn-back');
        const title = document.querySelector('.brand-title');
        
        if (viewId === 'home') {
            btnBack.classList.add('hidden');
            title.innerText = "Inácio & Maria";
        } else {
            btnBack.classList.remove('hidden');
            if(viewId === 'products') title.innerText = "Lista de Presentes";
            else if(viewId === 'cart') title.innerText = "Carrinho";
            else if(viewId === 'checkout') title.innerText = "Identificação";
            else if(viewId === 'payment') title.innerText = "Pagamento";
            else if(viewId === 'direct-pix') title.innerText = "Enviar Carinho";
            else if(viewId === 'success') {
                title.innerText = "";
                btnBack.classList.add('hidden');
            }
        }
        
        if (viewId === 'cart') this.renderCart();
    },

    goBack() {
        if (this.state.viewHistory.length > 1) {
            this.state.viewHistory.pop();
            const prevViewId = this.state.viewHistory[this.state.viewHistory.length - 1].replace('view-', '');
            this.navigate(prevViewId);
            this.state.viewHistory.pop(); // Remove duplicate pushed by navigate
        } else {
            this.navigate('home');
        }
    },

    // --- Produtos & Modal ---
    renderProducts() {
        const grid = document.getElementById('product-grid');
        grid.innerHTML = this.state.products.map(p => `
            <div class="product-card" onclick="app.openModal(${p.id})">
                <div class="p-img-box"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
                <div class="p-info">
                    <h4 class="p-name">${p.name}</h4>
                    <span class="p-price">R$ ${p.price.toFixed(2).replace('.', ',')}</span>
                </div>
            </div>
        `).join('');
    },

    openModal(id) {
        const p = this.state.products.find(item => item.id === id);
        const modalBody = document.getElementById('modal-body');
        
        modalBody.innerHTML = `
            <img src="${p.img}" class="modal-img">
            <h2>${p.name}</h2>
            <div class="modal-price">R$ ${p.price.toFixed(2).replace('.', ',')}</div>
            <p class="modal-desc">${p.desc}</p>
            <button class="btn btn-primary" onclick="app.addToCart(${p.id})">
                Adicionar ao Carrinho
            </button>
        `;
        
        document.getElementById('product-modal').classList.add('open');
    },

    closeModal() {
        document.getElementById('product-modal').classList.remove('open');
    },

    // --- Carrinho ---
    addToCart(id) {
        const p = this.state.products.find(item => item.id === id);
        this.state.cart.push(p);
        this.updateBadge();
        
        // Feedback Visual
        const btn = document.querySelector('#modal-body .btn-primary');
        btn.innerText = "Adicionado!";
        btn.style.backgroundColor = "var(--success-dark)";
        
        setTimeout(() => {
            this.closeModal();
        }, 500);
    },

    updateBadge() {
        const badge = document.getElementById('cart-badge');
        badge.innerText = this.state.cart.length;
        badge.style.transform = 'scale(1.2)';
        setTimeout(() => badge.style.transform = 'scale(1)', 200);
    },

    renderCart() {
        const container = document.getElementById('cart-content');
        const emptyState = document.getElementById('cart-empty-state');
        const list = document.getElementById('cart-list');
        const totalDisplay = document.getElementById('cart-total-display');
        const paymentTotal = document.getElementById('payment-total-display');

        if (this.state.cart.length === 0) {
            container.classList.add('hidden');
            emptyState.classList.remove('hidden');
            return;
        }

        emptyState.classList.add('hidden');
        container.classList.remove('hidden');

        let total = 0;
        list.innerHTML = this.state.cart.map((item, index) => {
            total += item.price;
            return `
                <div class="cart-item">
                    <div>
                        <strong>${item.name}</strong>
                        <div style="color:var(--accent-red)">R$ ${item.price.toFixed(2).replace('.', ',')}</div>
                    </div>
                    <i class="fa-solid fa-trash-can" style="color:#999; cursor:pointer" onclick="app.removeFromCart(${index})"></i>
                </div>
            `;
        }).join('') + '<div style="height: 100px"></div>';

        const formattedTotal = 'R$ ' + total.toFixed(2).replace('.', ',');
        totalDisplay.innerText = formattedTotal;
        paymentTotal.innerText = formattedTotal;
    },

    removeFromCart(index) {
        this.state.cart.splice(index, 1);
        this.updateBadge();
        this.renderCart();
    },

    // --- Checkout e Pagamento ---
    setupListeners() {
        document.getElementById('checkout-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.state.buyer.name = document.getElementById('input-name').value;
            this.state.buyer.phone = document.getElementById('input-phone').value;
            this.state.buyer.message = document.getElementById('input-message').value;
            this.navigate('payment');
        });
    },

    togglePayment(method) {
        if (method === 'pix') {
            this.navigate('direct-pix');
        } else {
            // Abre modal de links
            document.getElementById('card-links-modal').classList.add('open');
        }
    },

    closeCardModal() {
        document.getElementById('card-links-modal').classList.remove('open');
    },

    renderCardLinks() {
        const values = [25, 50, 75, 100, 125, 150, 175, 200, 250, 300];
        const grid = document.getElementById('card-links-grid');
        
        grid.innerHTML = values.map(val => `
            <a href="https://link.mercadopago.com.br/LINK_PARA_${val}" target="_blank" class="link-btn" onclick="app.finishOrder('Cartão R$ ${val}')">
                R$ ${val}
            </a>
        `).join('');
    },

    copyPix() {
        const key = document.getElementById('pix-key').innerText;
        navigator.clipboard.writeText(key).then(() => {
            alert('Chave PIX copiada!');
        });
    },

    // --- Finalização e Backend ---
    finishOrder(method) {
        // Dados prontos para envio
        const orderData = {
            date: new Date().toLocaleString(),
            name: this.state.buyer.name || 'Anônimo/Direto',
            phone: this.state.buyer.phone || '-',
            message: this.state.buyer.message || '-',
            items: this.state.cart.map(i => i.name).join(', ') || 'Doação Direta',
            total: document.getElementById('cart-total-display').innerText,
            method: method
        };

        console.log("Enviando dados:", orderData);
        
        // TODO: Substitua pela URL do seu Google Web App
        // fetch('YOUR_GOOGLE_SCRIPT_URL', { method: 'POST', body: JSON.stringify(orderData) });

        this.closeCardModal();
        this.navigate('success');
        
        // Reset App
        this.state.cart = [];
        this.updateBadge();
    }
};

// Iniciar
app.init();