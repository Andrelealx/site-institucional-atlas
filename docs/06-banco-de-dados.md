# Banco de Dados

## Aplicabilidade

Este site institucional é **estático** e **não possui banco de dados**. Não há área administrativa, login ou conteúdo dinâmico nesta versão.

## Dados em trânsito (formulário)

O único fluxo de dados é o formulário de contato, que **não persiste em banco**. Ele envia os campos para um endpoint externo configurável (`FORM_ENDPOINT` — ex.: Formspree, n8n) ou registra em console enquanto o endpoint não estiver definido.

Campos enviados:
- nome
- contato (e-mail ou telefone)
- tipo de negócio
- mensagem

## Futuro

Se um dia houver captura/gestão de leads no próprio site, modelar entidade `leads` (id, name, phone, email, message, source, status, created_at, updated_at) e proteger o acesso. Fora do escopo atual.
