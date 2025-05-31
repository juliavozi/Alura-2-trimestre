// Array de objetos com perguntas e respostas
const cartoesTecnologia = [
    {
        categoria: 'Tecnologia',
        pergunta: 'O que é tecnologia?',
        resposta: 'É a aplicação prática do conhecimento científico para resolver problemas e melhorar a vida humana através de ferramentas, sistemas e métodos.'
    },
    {
        categoria: 'Tecnologia',
        pergunta: 'Qual a diferença entre hardware e software?',
        resposta: 'Hardware refere-se aos componentes físicos do computador (CPU, RAM, etc.), enquanto software são os programas e sistemas operacionais que executam nessas máquinas.'
    },
    {
        categoria: 'Tecnologia',
        pergunta: 'O que é inteligência artificial (IA)?',
        resposta: 'É um ramo da ciência da computação que desenvolve sistemas capazes de realizar tarefas que normalmente exigiriam inteligência humana, como reconhecimento de padrões e tomada de decisões.'
    },
    {
        categoria: 'Tecnologia',
        pergunta: 'O que significa Wi-Fi?',
        resposta: 'Wi-Fi é uma tecnologia de rede sem fio baseada no padrão IEEE 802.11 que permite a conexão de dispositivos à internet em uma área local sem necessidade de cabos físicos.'
    },
    {
        categoria: 'Tecnologia',
        pergunta: 'Para que serve a computação em nuvem?',
        resposta: 'Permite armazenar dados e executar aplicativos em servidores remotos acessíveis pela internet, oferecendo escalabilidade, flexibilidade e redução de custos com infraestrutura local.'
    },
    {
        categoria: 'Tecnologia',
        pergunta: 'O que é um algoritmo em programação?',
        resposta: 'É uma sequência lógica, finita e definida de instruções para resolver um problema específico ou realizar uma tarefa computacional.'
    },
    {
        categoria: 'Tecnologia',
        pergunta: 'O que caracteriza as redes sociais digitais?',
        resposta: 'São plataformas online que facilitam a criação e compartilhamento de conteúdo, permitindo interação social e formação de comunidades virtuais.'
    },
    {
        categoria: 'Tecnologia',
        pergunta: 'Como funcionam os smartphones modernos?',
        resposta: 'Dispositivos móveis que combinam funções de telefone com capacidades de computador, incluindo sistemas operacionais avançados, acesso à internet e diversos sensores.'
    },
    {
        categoria: 'Tecnologia',
        pergunta: 'O que é realidade virtual (VR)?',
        resposta: 'Tecnologia que cria ambientes simulados tridimensionais imersivos, geralmente acessados através de óculos especiais que bloqueiam o mundo real.'
    },
    {
        categoria: 'Tecnologia',
        pergunta: 'Qual a função de um sistema operacional?',
        resposta: 'Gerenciar os recursos de hardware do computador, fornecer uma interface para o usuário e servir como plataforma para execução de aplicativos.'
    },
    {
        categoria: 'Tecnologia',
        pergunta: 'O que envolve o processo de programação?',
        resposta: 'Inclui a análise de problemas, design de algoritmos, escrita de código em linguagens específicas, teste e manutenção de software.'
    },
    {
        categoria: 'Tecnologia',
        pergunta: 'Como os antivírus protegem sistemas?',
        resposta: 'Monitoram atividades suspeitas, identificam padrões de malware conhecidos e usam técnicas como sandboxing para isolar ameaças antes que infectem o sistema.'
    },
    {
        categoria: 'Tecnologia',
        pergunta: 'O que são sistemas de banco de dados?',
        resposta: 'Coleções organizadas de dados com métodos eficientes para armazenamento, recuperação, atualização e gerenciamento de informações através de SGBDs (Sistemas de Gerenciamento).'
    },
    {
        categoria: 'Tecnologia',
        pergunta: 'Qual o propósito dos cookies em navegadores?',
        resposta: 'Armazenam pequenos dados no dispositivo do usuário para lembrar preferências, manter sessões ativas e personalizar a experiência de navegação.'
    }
];

cartoesTecnologia.forEach(cartao => {
    criaCartao(cartao.categoria, cartao.pergunta, cartao.resposta);
});