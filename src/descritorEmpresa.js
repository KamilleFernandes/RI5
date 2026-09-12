export default class Descritor {
    descreverFuncionarios(empresa) {
        let texto = ''
        const funcionariosArray = Array.from(empresa.funcionarios)

        for (let i = 0; i < funcionariosArray.length; i++) {
            const funcionario = funcionariosArray[i]

            texto += `Nome: ${funcionario.nome}\n` +
                `matricula: ${funcionario.matricula}\n` +
                `cpf: ${funcionario.cpf}\n` +
                `Rua: ${funcionario.endereco.rua} Bairro: ${funcionario.endereco.bairro} Cidade: ${funcionario.endereco.cidade} número: ${funcionario.endereco.numero}\n`

            texto += `\n`
        }

        return texto
    }

    descrever(empresa) {
        let texto = ''

        texto += `Razão Social: ${empresa.razaoSocial}\n`
        texto += `Nome Fantasia: ${empresa.nomeFantasia}\n`
        texto += `cnpj: ${empresa.cnpj}\n`
        texto += `Endereço:\n`
        texto += `Rua: ${empresa.endereco.rua} Bairro: ${empresa.endereco.bairro} Cidade: ${empresa.endereco.cidade} Número: ${empresa.endereco.numero}\n`
        texto += `\n`
        texto += `funcionarios:\n`
        texto += this.descreverFuncionarios(empresa)

        console.log(texto)
    }
}