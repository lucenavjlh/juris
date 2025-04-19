// Dados das subáreas do direito
const subareas = {
    civil: [
        "Responsabilidade Civil",
        "Direito Imobiliário",
        "Direito das Sucessões",
        "Direito das Obrigações",
        "Direito das Coisas",
        "Direito de Família",
        "Contratos Civis"
    ],
    trabalho: [
        "Reclamações Trabalhistas",
        "Rescisão de Contrato",
        "Assédio Moral",
        "Horas Extras",
        "Direitos do Empregador",
        "Acidentes de Trabalho",
        "Verbas Rescisórias"
    ],
    previdenciario: [
        "Aposentadoria",
        "Auxílio-Doença",
        "Pensão por Morte",
        "Benefício Assistencial (LOAS)",
        "Revisão de Benefícios",
        "Aposentadoria Especial",
        "Auxílio-Acidente"
    ],
    administrativo: [
        "Licitações e Contratos",
        "Servidores Públicos",
        "Concursos Públicos",
        "Processos Administrativos",
        "Desapropriação",
        "Improbidade Administrativa"
    ],
    constitucional: [
        "Direitos Fundamentais",
        "Ações Constitucionais",
        "Controle de Constitucionalidade",
        "Organização do Estado",
        "Direitos Políticos"
    ],
    penal: [
        "Crimes Contra a Pessoa",
        "Crimes Contra o Patrimônio",
        "Crimes Contra a Dignidade Sexual",
        "Crimes de Trânsito",
        "Execução Penal",
        "Tribunal do Júri"
    ],
    tributario: [
        "Planejamento Tributário",
        "Execução Fiscal",
        "Defesa em Autuações Fiscais",
        "Recuperação de Tributos",
        "Parcelamentos Especiais"
    ],
    consumidor: [
        "Problemas com Produtos",
        "Problemas com Serviços",
        "Cancelamento de Contratos",
        "Cobranças Indevidas",
        "Negativação Indevida",
        "Danos Morais"
    ],
    empresarial: [
        "Abertura e Fechamento de Empresas",
        "Contratos Empresariais",
        "Recuperação Judicial",
        "Falência",
        "Direito Societário",
        "Propriedade Intelectual"
    ],
    ambiental: [
        "Licenciamento Ambiental",
        "Crimes Ambientais",
        "Responsabilidade por Danos Ambientais",
        "Áreas de Preservação",
        "Sustentabilidade"
    ],
    digital: [
        "Crimes Cibernéticos",
        "Proteção de Dados (LGPD)",
        "Direito ao Esquecimento",
        "Comércio Eletrônico",
        "Responsabilidade de Plataformas"
    ],
    imobiliario: [
        "Compra e Venda de Imóveis",
        "Locação",
        "Usucapião",
        "Condomínios",
        "Regularização Fundiária",
        "Financiamento Imobiliário"
    ]
};

// Quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Selecionar todos os cards de área
    const areaCards = document.querySelectorAll('.area-card');
    const subareasSection = document.getElementById('subareas');
    const subareasContainer = document.querySelector('.subareas-container');
    
    // Adicionar evento de clique a cada card
    areaCards.forEach(card => {
        card.addEventListener('click', function() {
            // Obter a área selecionada
            const area = this.getAttribute('data-area');
            
            // Limpar o container de subáreas
            subareasContainer.innerHTML = '';
            
            // Preencher com as subáreas correspondentes
            subareas[area].forEach(subarea => {
                const subareaItem = document.createElement('div');
                subareaItem.className = 'subarea-item';
                subareaItem.textContent = subarea;
                
                // Adicionar evento de clique para cada subárea
                subareaItem.addEventListener('click', function() {
                    // Rolar para a seção de contato
                    document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
                    
                    // Preencher o select do formulário com a área selecionada
                    document.getElementById('area').value = area;
                    
                    // Adicionar a subárea selecionada na mensagem
                    document.getElementById('mensagem').value = `Preciso de ajuda com ${subarea}.`;
                });
                
                subareasContainer.appendChild(subareaItem);
            });
            
            // Mostrar a seção de subáreas
            subareasSection.classList.remove('hidden');
            
            // Rolar para a seção de subáreas
            subareasSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Configurar o carrossel de depoimentos
    let slideIndex = 1;
    showSlide(slideIndex);
    
    // Função para mostrar um slide específico
    window.currentSlide = function(n) {
        showSlide(slideIndex = n);
    }
    
    function showSlide(n) {
        const slides = document.querySelectorAll('.testimonial-item');
        const dots = document.querySelectorAll('.dot');
        
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        
        // Esconder todos os slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remover a classe active de todos os dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Mostrar o slide atual
        slides[slideIndex-1].classList.add('active');
        dots[slideIndex-1].classList.add('active');
    }
    
    // Avançar slides automaticamente a cada 5 segundos
    setInterval(function() {
        slideIndex++;
        showSlide(slideIndex);
    }, 5000);
    
    // Configurar o formulário de contato
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obter os dados do formulário
        const formData = new FormData(contactForm);
        const formObject = {};
        
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Configurar o serviço de email (EmailJS)
        emailjs.init("user_seu_id_emailjs"); // Substituir pelo ID real quando implementar
        
        // Preparar o template de email
        const templateParams = {
            to_email: "jurisofc@gmail.com",
            from_name: formObject.nome,
            from_email: formObject.email,
            telefone: formObject.telefone,
            area: formObject.area,
            mensagem: formObject.mensagem
        };
        
        // Mostrar mensagem de carregamento
        const submitBtn = contactForm.querySelector('.btn');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = "Enviando...";
        submitBtn.disabled = true;
        
        // Em um ambiente real, descomentar o código abaixo para enviar o email
        /*
        emailjs.send('service_id', 'template_id', templateParams)
            .then(function(response) {
                console.log('Email enviado!', response.status, response.text);
                alert('Formulário enviado com sucesso! Em breve um advogado entrará em contato.');
                contactForm.reset();
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            }, function(error) {
                console.log('Falha no envio do email:', error);
                alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente ou entre em contato pelo WhatsApp.');
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            });
        */
        
        // Para demonstração, simular o envio
        setTimeout(function() {
            console.log('Simulação de envio para:', templateParams.to_email);
            console.log('Dados do formulário:', templateParams);
            alert('Formulário enviado com sucesso para jurisofc@gmail.com! Em breve um advogado entrará em contato.');
            contactForm.reset();
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        }, 1500);
    });
    
    // Adicionar comportamento de scroll suave para os links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Adicionar comportamento de header fixo com mudança de cor ao rolar
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'var(--light-color)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
});
