const app = {
    // Dados da Aplicação
    data: {
        // LISTA DE PRODUTOS REORDENADA (MENOR PREÇO -> MAIOR PREÇO)
        products: [
            // R$ 25,00
            { id: 25, name: "Jogo de Copos", price: 25.00, desc: "", img: "https://cdn.awsli.com.br/600x450/2512/2512579/produto/184164821f6b2ff1ece.jpg" },
            { id: 26, name: "Tábua de Corte", price: 25.00, desc: "", img: "https://m.media-amazon.com/images/I/61hBmWQmHqL._AC_UF894,1000_QL80_.jpg" },
            { id: 44, name: "Cesto de Roupa Suja", price: 25.00, desc: "", img: "https://casaamarella.com.br/cdn/shop/products/Sf36ed3c3534f4046981a22b29f0afd3bH.jpg?v=1690830403&width=2048" },
            { id: 47, name: "Kit de Potes Plástico", price: 25.00, desc: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSBX6slsbj0duxXEJF_RucT-WYnRdkMj3AGw&s" },
            { id: 49, name: "Forma de Bolo", price: 25.00, desc: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSBX6slsbj0duxXEJF_RucT-WYnRdkMj3AGw&s" },
            { id: 50, name: "Forma de Pizza", price: 25.00, desc: "", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT6WDxpFTIG70XQv1iZUlnOHe4O6K2GfzmF7H8q2ZWO1VABmONvRQcyULqIpuj2dLaTOOQllDe6ZBTtEqfudbphVhBFwtGdwvfYNV3oU-JPNP2rI7oiQJq4PAMGEhHR9M93KcO1iVWU9g&usqp=CAc" },
            { id: 51, name: "Jarra de Suco", price: 25.00, desc: "", img: "data:image/jpeg;base64,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" },

            // R$ 50,00
            { id: 27, name: "Petisqueira de Bambu", price: 50.00, desc: "", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQrGjbfgRSQ81k4mfIGSHq_5CmLV2PanAJ84dcaar6gKSZ4U35V9v9e6PCxuhIE8LuZCcVaqBszZWvWsCn6Y0AiZdlug7EQgqK58ztPpvUX6yr-ovwqjP1bBV5TCNSSxsggO_SqIo_8Tg&usqp=CAc" },
            { id: 31, name: "Jogo de Tapetes Banheiro", price: 50.00, desc: "", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTUowkPEoFk4NNBmYCRVC2mU5Vod8w5-8DtYr-orI1Rw-rafg3vl0E5jcHW-ul9XTnTL_NNJPkINjquoNh9SLE4X8jb3qq2ZBzn7HPqqUT_kZT_R0tPIl06qvlgCSUo9RaCWH2mTVjO2Q&usqp=CAc" },
            { id: 39, name: "Toalha de Mesa de Jantar (4 lugares)", price: 50.00, desc: "", img: "https://m.media-amazon.com/images/I/714wTJo9U7L._AC_UF894,1000_QL80_.jpg" },
            { id: 40, name: "Kit Passadeira Cozinha", price: 50.00, desc: "", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSYugFhyNp47L4be9ortQKDkhbYeZyCJ43xaJa3X3_Ti5hC7l3el6h6SOTkgnLwvoazQ3iTziNYTj89vKLuljwOispJq3eU1b6hHe_l0pH3n6YZ_uuEcUSrXCQBsjrUtLZ3iTBhNaijOaQ&usqp=CAc" },
            { id: 45, name: "Kit Xícaras", price: 50.00, desc: "", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQa3aDexYV4M08aLVyFTDdjo4ns-TF5-ud0rz9CY7La8nfRfkXGfy3187L-OtcsugV3MHjCPQBAHwFZLZngvtzZVpnyDfaKnL-pIdaTh1MLAtb0lu8lfbBlUKbuTioDbLM9SwXTUB0&usqp=CAc" },
            { id: 46, name: "Kit de Pratos", price: 50.00, desc: "", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ9SuSZ__SI11-4PcnhFEelk1JRNHBrCTyso9cAXlvBhiaDWbtGWMZlVpPfyntv1TbUq-P-VMXXkoOPrfcBfsTlOuKytNeyHm6Xh_50keqFkXKUIIyOD8ST8zxtCEqw3Hd2wn99GQ&usqp=CAc" },
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

            { id: 5, name: "Vara de Pesca pro NOIVO", price: 125.00, desc: "", img: "https://http2.mlstatic.com/D_NQ_NP_2X_867593-MLB93231018614_092025-F-kit-pesca-molinete-marine-sports-arena-4000-vara-linha.webp" },
           
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
            { id: 3, name: "Panela de Arroz Elétrica", price: 175.00, desc: "", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTIjs2k1Zcz-Ts0GyJW4JGXcLj0Zh2_VttWmGy4Lc0f2384uZjXh5m3FTq2Ygib7yR93L19gsBWt4xFCPcdpGZ06S8qL2lS_3tAEGTaBzd3XlnFAjlnKqc9aqaW82-f9HRdJOirNw&usqp=CAc" },
           
            // R$ 200,00
            { id: 2, name: "Secador de Cabelo", price: 200.00, desc: "", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=500" },
            { id: 15, name: "Processador de Alimentos", price: 200.00, desc: "", img: "https://images.unsplash.com/photo-1585517263592-d9633273e971?w=500" },
            { id: 28, name: "Edredom Casal Queen", price: 200.00, desc: "", img: "https://images.unsplash.com/photo-1522771753014-df00418c4e4f?w=500" },

            
            

            // R$ 250,00
            { id: 20, name: "Aparelho de Jantar 20 Peças", price: 250.00, desc: "", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR88xHEnnl27YdU2l5pQ3tAHXcPAVkhRnLT8jgkEzQvMK8o2vkPHDDhpepMVq1vlpuefowXE55uxDgZYi-uWCoWIth98_TpX2IZ28s58FsYjyTKiAzWyHkJwM5TMUYcx5jMoQ-RRg7C4w&usqp=CAc" },

            // R$ 275,00
            
            { id: 11, name: "Batedeira", price: 275.00, desc: "", img: "https://a-static.mlcdn.com.br/450pxx450px/batedeira-planetaria-mondial-preto-e-inox-700w-premium-12-velocidades/magazineluiza/021259300/5b77fd2ae51a9a994f09452833c0ca87.jpg" },

            // R$ 300,00
            { id: 7, name: "Airfryer", price: 300.00, desc: "", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR9-TrMAt3oRvZsBioIJoWuiHLrK-gLRBzRj2xKABpY-YxnEMuZc2DMNcGSAhMnDZ7SX1uazpWAMzgN9FcU75ZdiS8tHC7YBa6LbkXSuv0AuuHbUbHCTFODFddGaMxKeK6ywlJL3hr8R1w&usqp=CAc" },
            { id: 19, name: "Jogo de Panelas Antiaderente", price: 400.00, desc: "", img: "https://images.tcdn.com.br/img/img_prod/487343/jogo_4_panelas_studio_cook_marmol_pj4umm_9453_mimo_style_5409_2_a02b7ec2c1af04a1a1d88d591b2d334e_20251006122129.jpg" },

            
            

            // R$ 375,00
            { id: 8, name: "Micro-ondas", price: 450.00, desc: "", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRy2m719TBwGQCLVc1Y_l3Edb8Hnbe4vx7cED_ddYMw1HhEfpfzQzpHAV928DR4vzX0j-2kufPz4AR3DUFbbV92eRuZs4s_MbTS82goGAwD56XMFWlPDMT-aI_GuyeuJGKaQrXDOw&usqp=CAc" },

            // R$ 450,00
            { id: 34, name: "Box Cama Queen", price: 450.00, desc: "", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRBZz0xKalHxHnwa_FVMp30_y5Vzc-wMT7zCRpDERoG3p5ddbirDDVLSch66ADW6lPmDmXDJTUQHLpzCw4xU3bjXLvBfggUjm-Pt4HCkmKQRZIXJMED54YkQjvu-8XE95PxZmhqX0mz1g&usqp=CAc" },
            { id: 4, name: "Panela de Pressão Elétrica", price: 475.00, desc: "", img: "https://s2-techtudo.glbimg.com/9wocZb0Ms_PfZJ5E6-ZpIrSurWs=/0x0:1280x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2025/6/G/Ump8zIQW2S47uIsCQXHg/a-internet-foi-atacada-em-todo-o-mundo-causando-uma-grande-interrupcao.-foto-premium-3-.jpg" },
            { id: 103, name: "Cômoda Casal", price: 575.00, desc: "", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTdtMmjqgr8alu-eLWdwrdzWJ8xHHZJhqPEvGz0qVK1OKBCWqIxvvTIvAMREqkXI6RF31q8T0TZDHbemdEX048pGQC6SowKUw&usqp=CAc" },
            
            { id: 9, name: "Robô Aspirador de Pó", price: 600.00, desc: "", img: "https://m.media-amazon.com/images/I/71S4aaJ2T9L.jpg" },

            { id: 101, name: "Soundbar", price: 900.00, desc: "", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRy2m719TBwGQCLVc1Y_l3Edb8Hnbe4vx7cED_ddYMw1HhEfpfzQzpHAV928DR4vzX0j-2kufPz4AR3DUFbbV92eRuZs4s_MbTS82goGAwD56XMFWlPDMT-aI_GuyeuJGKaQrXDOw&usqp=CAc" },
            { id: 102, name: "Guarda Roupas Casal", price: 1000.00, desc: "", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRbaOo6zKm-awedA1t6mF9xjpdyMEpgQ-W_eeUAV8s9Vm-4I9st0QQCBWbBSYnyhyRPEzFGDimC9EhpfZ9zileHPk8cbqtY&usqp=CAc" },


            // R$ 2.250,00
            { id: 35, name: "TV LG", price: 2250.00, desc: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwC6Z8UImswciDYhbL20Bd9HqeCQ_kc-Vd4Q&s" }
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
                        <div class="product-installments">Cartão ou PIX</div>
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

    async enviarParaN8n(metodoPagamento) {
        // Sua URL de produção do n8n
        const webhookUrl = 'https://acutis-system-n8n.ntlmpr.easypanel.host/webhook/receber-presente'; 

        const itensComprados = this.data.cart.map(item => item.name).join(', ');
        const valorTotal = this.data.cart.reduce((acc, item) => acc + item.price, 0);
        
        // Coleta os dados que o usuário digitou na tela de identificação
        const payload = {
            nome_convidado: document.getElementById('guest-name').value || 'Não informado',
            whatsapp: document.getElementById('guest-phone').value || 'Não informado',
            mensagem: document.getElementById('guest-message').value || '',
            itens_comprados: itensComprados,
            valor_total: valorTotal,
            metodo_pagamento: metodoPagamento
        };

        try {
            await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            console.log("Dados enviados para o n8n com sucesso!");
        } catch (error) {
            console.error("Erro ao enviar para o n8n:", error);
        }
    },

    // --- LOGICA DE PAGAMENTO CARTÃO ---
    payWithCardCheckout() {
        this.enviarParaN8n('Cartão de Crédito'); // <--- ENVIANDO PARA O N8N
        
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
        this.enviarParaN8n('Cartão de Crédito'); // <--- ENVIANDO PARA O N8N
        
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
        this.enviarParaN8n('PIX'); // <--- ENVIANDO PARA O N8N
        
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