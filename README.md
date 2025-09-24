# Teste de Notificações Web com React

Este projeto é um **painel de teste de notificações web** desenvolvido em React. Ele permite testar todas as propriedades suportadas por notificações disparadas diretamente de uma aba do navegador, sem necessidade de backend ou Service Worker.

---

## Funcionalidades

- Solicitar permissão de notificações ao usuário.
- Disparar notificações com **título, corpo, ícone, badge, tag, renotify, requireInteraction, silent, timestamp, direção de texto e idioma**.
- Adicionar **dados customizados** (`data`) que podem ser acessados nos eventos da notificação.
- Testar eventos de **click** e **close**.
- Inputs para todos os campos, usando **inputs não controlados** com `refs` em React.
- Painel estilizado para facilitar o teste.

---

## Instruções

1. Clone o repositório e instale as dependências com `npm install`.
2. Inicie o projeto com `npm start`.
3. Abra a aplicação no navegador (HTTPS ou localhost).
4. Clique em **"Solicitar Permissão"** se ainda não tiver concedido.
5. Preencha os campos do formulário para configurar a notificação.
6. Clique em **"Mostrar Notificação"** para disparar a notificação.
7. Verifique os eventos (`onclick`, `onclose`) no console do navegador.

---

## Propriedades de Notificação Web (`NotificationOptions`)

| Propriedade          | Tipo                    | Descrição                                                                                          |
| -------------------- | ----------------------- | -------------------------------------------------------------------------------------------------- |
| `body`               | string                  | Texto secundário exibido na notificação.                                                           |
| `icon`               | string (URL)            | URL de um ícone pequeno da notificação.                                                            |
| `badge`              | string (URL)            | Ícone menor (badge), usado em dispositivos móveis.                                                 |
| `tag`                | string                  | Identificador da notificação; notificações com mesmo tag podem substituir notificações anteriores. |
| `requireInteraction` | boolean                 | Se true, a notificação permanece visível até o usuário interagir.                                  |
| `silent`             | boolean                 | Se true, a notificação não emite som.                                                              |
| `data`               | any (JSON serializável) | Armazena dados arbitrários que podem ser acessados nos eventos (`onclick`, `onclose`).             |

---

## Eventos Disponíveis

| Evento    | Descrição                                        |
| --------- | ------------------------------------------------ |
| `onclick` | Executado quando o usuário clica na notificação. |
| `onclose` | Executado quando a notificação é fechada.        |

---

## Limitações

- **`actions` não funciona sem Service Worker**; botões interativos requerem SW.
- Não é possível listar notificações emitidas sem SW.
- Algumas propriedades podem não ser suportadas em todos os navegadores.
- Notificações só aparecem enquanto a aba estiver aberta (sem SW).

---

## Observações

- Testar notificações requer **HTTPS** ou **localhost**.
- O painel é apenas para **testes locais** e aprendizado da API de Web Notifications.
- Ideal para protótipos, demonstrações e experimentos rápidos com notificações no navegador.

---

Feito com ❤️ por [Mel Tammy](https://meltammy.com.br/)
