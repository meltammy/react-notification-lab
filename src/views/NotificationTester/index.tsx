import { useRef, useState } from "react";
import TextField from "../../components/TextField";
import CheckboxField from "../../components/CheckboxField";
import TextAreaField from "../../components/TextAreaField";
import NotificationPropertiesTable from "../../components/NotificationPropertiesTable";

import styles from "./NotificationTester.module.css";

export function NotificationTester() {
  const [permission, setPermission] = useState(Notification.permission);

  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLInputElement>(null);
  const iconRef = useRef<HTMLInputElement>(null);
  const badgeRef = useRef<HTMLInputElement>(null);
  const tagRef = useRef<HTMLInputElement>(null);
  const requireInteractionRef = useRef<HTMLInputElement>(null);
  const silentRef = useRef<HTMLInputElement>(null);
  const dataRef = useRef<HTMLTextAreaElement>(null);

  const requestPermission = () => {
    Notification.requestPermission().then((perm) => setPermission(perm));
  };

  const showNotification = () => {
    if (permission !== "granted") {
      alert("Você precisa conceder permissão para notificações!");
      return;
    }

    let parsedData = {};
    try {
      parsedData = JSON.parse(dataRef.current?.value || "{}");
    } catch {
      alert("Data inválida! Use JSON válido.");
    }

    const notification = new Notification(
      titleRef.current?.value || "Sem título",
      {
        body: bodyRef.current?.value,
        icon: iconRef.current?.value,
        badge: badgeRef.current?.value,
        requireInteraction: requireInteractionRef.current?.checked,
        silent: silentRef.current?.checked,
        data: parsedData,
      }
    );

    notification.onclick = (event) => {
      console.log("Notificação clicada!", event);
    };

    notification.onclose = () => {
      console.log("Notificação fechada!");
    };
  };

  return (
    <main>
      <h1>Testando Notificações Web</h1>
      {permission !== "granted" && (
        <button onClick={requestPermission}>Solicitar Permissão</button>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          showNotification();
        }}
        className={styles.form}
      >
        <TextField
          label="Título"
          placeholder="Título"
          id="title"
          ref={titleRef}
        />

        <TextField label="Body" placeholder="Body" id="body" ref={bodyRef} />

        <TextField
          label="Icon URL"
          placeholder="Icon URL"
          id="icon"
          ref={iconRef}
        />

        <TextField
          label="Badge URL"
          placeholder="Badge URL"
          id="badge"
          ref={badgeRef}
        />

        <TextField label="Tag" placeholder="Tag" id="tag" ref={tagRef} />

        <CheckboxField
          label="Require Interaction"
          id="requireInteraction"
          ref={requireInteractionRef}
        />

        <CheckboxField label="Silent" id="silent" ref={silentRef} />

        <TextAreaField
          label="Data (JSON)"
          placeholder='Ex: {"userId": 123}'
          id="data"
          ref={dataRef}
          rows={4}
        />
        <button type="submit">Mostrar Notificação</button>
      </form>

      <NotificationPropertiesTable />
    </main>
  );
}
