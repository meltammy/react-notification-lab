import React from "react";
import "./NotificationPropertiesTable.css";

interface NotificationProperty {
  property: string;
  type: string;
  description: string;
}

const notificationData: NotificationProperty[] = [
  {
    property: "body",
    type: "string",
    description: "Texto secundário exibido na notificação.",
  },
  {
    property: "icon",
    type: "string (URL)",
    description: "URL de um ícone pequeno da notificação.",
  },
  {
    property: "badge",
    type: "string (URL)",
    description: "Ícone menor (badge), usado em dispositivos móveis.",
  },
  {
    property: "tag",
    type: "string",
    description:
      "Identificador da notificação; notificações com mesmo tag podem substituir notificações anteriores.",
  },
  {
    property: "requireInteraction",
    type: "boolean",
    description:
      "Se true, a notificação permanece visível até o usuário interagir.",
  },
  {
    property: "silent",
    type: "boolean",
    description: "Se true, a notificação não emite som.",
  },
  {
    property: "data",
    type: "any (JSON serializável)",
    description:
      "Armazena dados arbitrários que podem ser acessados nos eventos (`onclick`, `onclose`).",
  },
];

const NotificationPropertiesTable: React.FC = () => {
  return (
    <div className="table-container">
      <table className="notification-table">
        <thead>
          <tr>
            <th>Propriedade</th>
            <th>Tipo</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {notificationData.map((item) => (
            <tr key={item.property}>
              <td>{item.property}</td>
              <td>{item.type}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NotificationPropertiesTable;
