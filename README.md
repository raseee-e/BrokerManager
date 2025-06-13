# BrokerManager

## Projektübersicht

**BrokerManager** ist eine Fullstack-Webanwendung zur Verwaltung von Aktien, Watchlists und eigenen Anteilen.  
Das Projekt ermöglicht es Benutzern, sich zu registrieren, einzuloggen, Aktien zu durchsuchen, Aktien zu kaufen, eine persönliche Watchlist zu pflegen und Echtzeit-Benachrichtigungen über WebSockets zu erhalten.

**Verwendete Technologien:**
- **Frontend:** Angular 17
- **Backend:** Node.js (Express)
- **Datenbank:** PostgreSQL (im Docker-Container)
- **Echtzeit:** WebSocket (ws)
- **API-Dokumentation:** Swagger UI (OpenAPI 3)
- **Containerisierung:** Docker & Docker Compose

---

## Ausführen des Projekts

### Voraussetzungen

- [Docker](https://www.docker.com/) und [Docker Compose](https://docs.docker.com/compose/) installiert

### Schritte

1. **Frontend bauen**  
   (Nur beim ersten Start oder nach Änderungen am Angular-Frontend erforderlich)
   ```sh
   npm install
   ng build --output-path=dist/broker-manager --configuration=production
   xcopy dist\broker-manager backend\public /E /I /Y
   ```

2. **Alle Container starten**  
   ```sh
   docker-compose up --build
   ```

   Dies startet:
   - Die PostgreSQL-Datenbank (mit automatischem Seed der Anfangsdaten)
   - Das Express-Backend (serviert auch die Angular-App und WebSocket-Server)

3. **Zugriff auf die Anwendung**
   - **Web-App:** [http://localhost:3000](http://localhost:3000)
   - **API-Dokumentation (Swagger UI):** [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

## Hinweise für die Entwicklung

- Für schnelles Frontend-Testing kannst du auch `ng serve` nutzen:
  ```sh
  ng serve
  ```
  Das Backend erreichst du dann weiterhin über Docker auf Port 3000.
- Für Mehrbenutzer-Tests bitte verschiedene Browser oder Inkognito-Fenster verwenden (wegen LocalStorage).
- Die Datenbank wird beim ersten Start automatisch mit Beispieldaten befüllt.

---

**Viel Erfolg beim Testen!**
