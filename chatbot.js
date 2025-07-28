function getBotResponse(userInput) {
    const input = userInput.toLowerCase();

    if (input.includes('olá') || input.includes('oi') || input.includes('bom dia')) {
        return "Olá! Como posso te ajudar hoje? Para começar, você pode perguntar sobre nossos 'serviços', 'preços' ou 'benefícios'.";
    }

    if (input.includes('menu')) {
        return `Claro! Aqui estão algumas opções: <br>
                - Nossos <b>serviços</b> <br>
                - Nossos <b>preços</b> e planos <br>
                - Os <b>benefícios</b> de ter um chatbot <br>
                - Como entrar em <b>contato</b>`;
    }

    if (input.includes('serviços') || input.includes('serviço')) {
        return "Oferecemos criação de chatbots personalizados, integração com WhatsApp, Instagram, Sites, CRMs e mais, além de suporte técnico e consultoria. Qual deles te interessa mais?";
    }

    if (input.includes('preços') || input.includes('planos') || input.includes('preço')) {
        return "Temos planos a partir de R$ 299/mês. Você pode ver detalhes na seção 'Planos e Preços' do site ou posso te contar mais sobre o plano Básico, Profissional ou Empresarial.";
    }

    if (input.includes('benefícios') || input.includes('vantagens')) {
        return "Nossos chatbots oferecem atendimento 24h, reduzem custos, aumentam a eficiência e fornecem relatórios valiosos. Gostaria de saber mais sobre algum desses pontos?";
    }

    if (input.includes('contato') || input.includes('falar com') || input.includes('demonstração')) {
        return "Você pode preencher o formulário na seção de Contato em nosso site, ou nos contatar pelo e-mail contato@playbotbusyness.com. Vamos adorar conversar com você!";
    }
    
    if (input.includes('obrigado') || input.includes('obrigada')) {
        return "De nada! Se precisar de mais alguma coisa, é só perguntar.";
    }

    return "Desculpe, não entendi. Poderia reformular sua pergunta? Você também pode digitar 'menu' para ver as opções.";
}

