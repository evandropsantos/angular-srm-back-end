const data = {
    operacional: [
        { name: 'Envio', url: '#', },
        { name: 'Assinatura', url: '#', },
        { name: 'Envio de Duplicatas', url: '#' },
        { name: 'Assinatura Digital', url: '#' },
        { name: 'Nova Operação', url: '#' }
    ],
    geral: [
        { name: 'Carteira', url: '#'},
        { name: 'Instruções', url: '#'}
    ]
}

module.exports = app => app.get('/buttons', (req, res) => res.json(data) ); 

