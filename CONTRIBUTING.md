# Contributing Guide

## Git Workflow

### Branching Strategy

Wir verwenden einen **Feature-Branch-Workflow**:

- `main` - Produktions-Branch (immer deploybar)
- `feature/*` - Feature-Branches (z.B. `feature/add-contact-form`)
- `fix/*` - Bugfix-Branches (z.B. `fix/header-mobile-menu`)
- `hotfix/*` - Hotfixes für Production (z.B. `hotfix/security-patch`)

### Workflow

1. **Neuen Branch erstellen**
   ```bash
   git checkout -b feature/mein-feature
   # oder
   git checkout -b fix/bug-beschreibung
   ```

2. **Änderungen committen**
   - Kleine, logische Commits
   - Aussagekräftige Commit-Messages (siehe unten)
   - Vor dem Commit: `npm run lint` und `npm run format` ausführen

3. **Branch pushen**
   ```bash
   git push origin feature/mein-feature
   ```

4. **Pull Request erstellen**
   - PR gegen `main`
   - Beschreibung der Änderungen
   - Tests durchführen (`npm run build` sollte erfolgreich sein)

5. **Code Review**
   - Nach Review und Approval wird der Branch gemerged
   - Nach dem Merge: Branch lokal löschen
   ```bash
   git checkout main
   git pull
   git branch -d feature/mein-feature
   ```

### Commit Messages

Wir folgen dem **Conventional Commits** Format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: Neue Feature
- `fix`: Bugfix
- `docs`: Dokumentation
- `style`: Code-Formatierung (keine Logik-Änderungen)
- `refactor`: Code-Refactoring
- `test`: Tests hinzufügen/ändern
- `chore`: Build-Prozess, Dependencies, etc.

**Beispiele:**
```
feat(contact): add email validation to contact form

fix(header): resolve mobile menu overlay issue

docs(readme): update installation instructions

refactor(operations): simplify operation stats calculation
```

### Pull Request Checklist

Vor dem Erstellen eines PRs:

- [ ] Code läuft lokal (`npm run dev`)
- [ ] Linting erfolgreich (`npm run lint`)
- [ ] Formatierung korrekt (`npm run format`)
- [ ] Build erfolgreich (`npm run build`)
- [ ] Tests bestanden (falls vorhanden)
- [ ] Keine Console-Logs in Production-Code
- [ ] TypeScript-Fehler behoben

### Code Style

- TypeScript strict mode
- Prettier für Formatierung
- ESLint Regeln befolgen
- `cn()` Utility für bedingte Tailwind-Klassen verwenden
- Server Components bevorzugen (wo möglich)

### Hotfixes

Für kritische Production-Bugs:

1. Branch von `main` erstellen: `hotfix/beschreibung`
2. Fix implementieren und testen
3. PR gegen `main` erstellen
4. Nach Merge: `main` auch in `develop` mergen (falls vorhanden)

## Fragen?

Bei Fragen zum Git-Workflow oder zum Beitragsprozess, bitte ein Issue erstellen oder direkt nachfragen.

