# Painel de Teste de Notificações Web

Este projeto permite testar Web Notifications diretamente no navegador, sem depender de backend. É ideal para explorar as funcionalidades das notificações, incluindo body, icon, badge, tag, requireInteraction, silent e data.

O projeto está disponível em: [notifications.meltammy.com.br](https://notifications.meltammy.com.br/)

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

# Como Funcionam as Web Notifications

As **Web Notifications** permitem que aplicativos web enviem mensagens para o usuário, mesmo quando ele não está com a aba do site aberta. Elas são suportadas pela maioria dos navegadores modernos e podem ser usadas para alertas, lembretes ou interações rápidas.

## 1. Permissão

Antes de exibir notificações, o site precisa **solicitar permissão** ao usuário:

- `Notification.permission` retorna o estado atual:

  - `"granted"` → permitido
  - `"denied"` → bloqueado
  - `"default"` → ainda não decidido

- Para solicitar permissão:

`Notification.requestPermission().then((permission) => { console.log("Permissão:", permission); });`

> Sem permissão `"granted"`, o navegador **não exibirá notificações**.

## 2. Criando uma notificação

Você pode criar uma notificação usando o construtor `Notification`:

`new Notification("Título da Notificação", { body: "Texto secundário", icon: "/icon.png", badge: "/badge.png", tag: "alerta-1", requireInteraction: true, silent: false, data: { userId: 123 }, });`

### Principais propriedades:

| Propriedade          | Tipo                    | Descrição                                                                                         |
| -------------------- | ----------------------- | ------------------------------------------------------------------------------------------------- |
| `title`              | string                  | Título da notificação                                                                             |
| `body`               | string                  | Texto secundário exibido na notificação                                                           |
| `icon`               | string (URL)            | URL de um ícone pequeno da notificação                                                            |
| `badge`              | string (URL)            | Ícone menor (badge), usado em dispositivos móveis                                                 |
| `tag`                | string                  | Identificador da notificação; notificações com mesma tag podem substituir notificações anteriores |
| `requireInteraction` | boolean                 | Se `true`, a notificação permanece visível até o usuário interagir                                |
| `silent`             | boolean                 | Se `true`, a notificação não emite som                                                            |
| `data`               | any (JSON serializável) | Armazena dados arbitrários acessíveis nos eventos (`onclick`, `onclose`)                          |

## 3. Eventos importantes

- **`onclick`**: disparado quando o usuário clica na notificação.
- **`onclose`**: disparado quando a notificação é fechada (mais confiável via Service Worker).

Exemplo:

`const notification = new Notification("Oi!"); notification.onclick = () => console.log("Notificação clicada!"); notification.onclose = () => console.log("Notificação fechada!");`

> ⚠️ Observação: sem Service Worker, clicar no “X” da notificação nem sempre dispara `onclose`.

## 4. Limitações

- **HTTPS obrigatório** (ou localhost) para que notificações funcionem.
- **Sem Service Worker**, notificações podem não ser persistentes e o `onclose` nem sempre funciona.
- Não há suporte a **ações (`actions`)** sem Service Worker.

## 5. Service Worker

Para notificações avançadas e confiáveis, especialmente quando a aba não está aberta:

- Crie um **Service Worker** (`sw.js`).
- Use a API `self.registration.showNotification(...)` dentro do SW.
- Permite usar:
  - Ações clicáveis (`actions`)
  - `onclose` confiável
  - Notificações persistentes

## 6. Resumo

1. Solicitar permissão do usuário.
2. Criar a notificação com as propriedades desejadas.
3. Adicionar eventos como `onclick` para interatividade.
4. Para funcionalidades avançadas, usar **Service Worker**.
