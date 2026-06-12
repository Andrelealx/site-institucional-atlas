# LGPD e Segurança

## Dados coletados

Apenas via formulário de contato:
- Nome
- Contato (e-mail ou telefone)
- Tipo de negócio
- Mensagem

## Finalidade

Os dados são usados exclusivamente para responder ao contato e apresentar uma proposta de serviço.

## Consentimentos necessários

- [ ] Política de privacidade (link no rodapé) — **[PENDÊNCIA — criar texto]**
- [ ] Aviso curto de consentimento no formulário (ex.: "Ao enviar, você concorda com o uso dos seus dados para retorno do contato.")
- Termos de uso, autorização de imagem e termo de evento: **não se aplicam** a este site institucional.

## Segurança

- Usar HTTPS no deploy.
- Validar entradas do formulário (client-side + sanitização no endpoint).
- Não expor segredos no front-end.
- `FORM_ENDPOINT` e chaves ficam fora do código versionado quando aplicável.

## Dados de crianças/adolescentes

Não se aplica — o site não coleta dados de menores.

## Observação do método

O gate de compliance pesado (frases reguladas como "não precisa de CNH", "segurança privada", dados de menores) vale para os sites de CLIENTES da Atlas, não para este institucional. Aqui o cuidado é só o baseline LGPD do formulário.
